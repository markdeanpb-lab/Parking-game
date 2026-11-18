var wu=Object.defineProperty;var Oh=(n,t)=>{for(var e in t)wu(n,e,{get:t[e],enumerable:!0})};function Fh({role:n,getToken:t,getKey:e,onWelcome:i,onState:s,onMessage:r,onStatus:o}){let a=null,l=0,h=null,u=!1,g=0,f=null,c=0,d=()=>`${location.protocol==="https:"?"wss":"ws"}://${location.host}/ws`;function M(_){o?.(_)}function m(){if(clearTimeout(h),a&&(a.readyState===0||a.readyState===1))return;M(l?"reconnecting":"connecting");try{a=new WebSocket(d())}catch{p();return}let _=a;_.onopen=()=>{l=0,M("open"),c=Date.now(),S({t:"hello",role:n,token:t?.()||void 0,key:e?.()||void 0}),clearInterval(f),f=setInterval(()=>{if(S({t:"ping",at:Date.now()}),Date.now()-c>25e3&&_.readyState===1)try{_.close()}catch{}},8e3)},_.onmessage=N=>{c=Date.now();let w;try{w=JSON.parse(N.data)}catch{return}if(w.t==="pong"){w.serverNow&&(g=w.serverNow+(Date.now()-w.at)/2-Date.now());return}w.t==="welcome"?i?.(w):w.t==="state"?(w.state?.serverNow&&(g=w.state.serverNow-Date.now()),s?.(w.state)):r?.(w)},_.onclose=()=>{clearInterval(f),_===a&&(M("closed"),u||p())},_.onerror=()=>{try{_.close()}catch{}}}function p(){clearTimeout(h);let _=Math.min(8e3,400*2**l)*(.75+Math.random()*.5);l++,h=setTimeout(m,_)}function S(_){return a&&a.readyState===1?(a.send(JSON.stringify(_)),!0):!1}let y=()=>{document.visibilityState==="visible"&&(!a||a.readyState>1?(l=0,m()):S({t:"ping",at:Date.now()}))};return document.addEventListener("visibilitychange",y),window.addEventListener("online",()=>{l=0,m()}),window.addEventListener("pageshow",y),window.addEventListener("focus",y),m(),{send:S,reconnect(){l=0;try{a?.close()}catch{}m()},close(){u=!0,a?.close()},serverNow:()=>Date.now()+g,get open(){return a?.readyState===1}}}function Bh(){let n=null,t=null,e=null,i=null,s=null,r=null,o=.8,a=!1,l=!0,h=null;function u(){if(n)return n;let v=window.AudioContext||window.webkitAudioContext;if(!v)return null;n=new v,r=n.createDynamicsCompressor(),r.threshold.value=-14,r.ratio.value=4,r.attack.value=.005,r.release.value=.2,t=n.createGain(),t.gain.value=a?0:o,e=n.createGain(),e.gain.value=.9,i=n.createGain(),i.gain.value=.32,e.connect(r),i.connect(r),r.connect(t),t.connect(n.destination),s=n.createBuffer(1,n.sampleRate*2,n.sampleRate);let x=s.getChannelData(0);for(let b=0;b<x.length;b++)x[b]=Math.random()*2-1;return n}function g(){let v=u();return v&&v.state==="suspended"&&v.resume(),!!v}let f=()=>n&&n.state==="running";function c(v,x,b,C,E,T){v.gain.cancelScheduledValues(x),v.gain.setValueAtTime(1e-4,x),v.gain.exponentialRampToValueAtTime(C,x+b),v.gain.setValueAtTime(C,x+b+E),v.gain.exponentialRampToValueAtTime(1e-4,x+b+E+T)}function d(v,x,b,C,{gain:E=.2,a:T=.01,rel:k=.2,dest:D=e,detune:O=0,filter:z=null,pan:q=0}={}){let X=n.createOscillator();X.type=v,X.frequency.setValueAtTime(x,b),X.detune.value=O;let U=n.createGain(),gt=X;if(z){let P=n.createBiquadFilter();P.type=z.type||"lowpass",P.frequency.value=z.freq,P.Q.value=z.q||.7,gt.connect(P),gt=P}gt.connect(U);let At=U;if(q&&n.createStereoPanner){let P=n.createStereoPanner();P.pan.value=q,U.connect(P),At=P}return At.connect(D),c(U,b,T,E,Math.max(0,C-T),k),X.start(b),X.stop(b+C+k+.05),X}function M(v,x,{gain:b=.2,a:C=.01,rel:E=.2,type:T="bandpass",freq:k=1e3,q:D=1,dest:O=e}={}){let z=n.createBufferSource();z.buffer=s,z.loop=!0;let q=n.createBiquadFilter();q.type=T,q.frequency.setValueAtTime(k,v),q.Q.value=D;let X=n.createGain();return z.connect(q),q.connect(X),X.connect(O),c(X,v,C,b,Math.max(0,x-C),E),z.start(v,Math.random()),z.stop(v+x+E+.05),{s:z,f:q,g:X}}let m=v=>440*2**((v-69)/12),p={horn(v){for(let[x,b]of[[233,0],[293.7,6],[349,-5]])d("sawtooth",x*.92,v,1.1,{gain:.13,a:.03,rel:.25,filter:{freq:2200},detune:b}).frequency.exponentialRampToValueAtTime(x,v+.12);d("square",116.5,v,1.1,{gain:.05,a:.03,rel:.25,filter:{freq:800}})},crowd(v,{dur:x=3.5,peak:b=.32}={}){for(let[C,E,T]of[[700,.8,1],[1800,1.2,.7],[3200,1.5,.35]]){let k=M(v,x*.4,{gain:b*T,a:x*.45,rel:x*.55,freq:C,q:E}),D=n.createOscillator();D.frequency.value=5+Math.random()*4;let O=n.createGain();O.gain.value=b*T*.35,D.connect(O),O.connect(k.g.gain),D.start(v),D.stop(v+x+.2)}for(let C=0;C<4;C++){let E=v+.4+Math.random()*x*.5;d("triangle",500+Math.random()*300,E,.35,{gain:.025,a:.08,rel:.25,filter:{freq:1600},pan:Math.random()*1.6-.8}).frequency.exponentialRampToValueAtTime(800+Math.random()*400,E+.3)}},whoosh(v){let x=M(v,.45,{gain:.35,a:.12,rel:.25,freq:400,q:2.5});x.f.frequency.exponentialRampToValueAtTime(3500,v+.3),x.f.frequency.exponentialRampToValueAtTime(700,v+.7)},bell(v){for(let x of[v,v+.42])[[1,.22,1.6],[2.76,.09,.9],[5.4,.05,.5],[8.93,.03,.3]].forEach(([b,C,E])=>d("sine",830*b,x,.01,{gain:C,a:.003,rel:E}))},fanfare(v){let x=[[67,0,.14],[72,.15,.14],[76,.3,.14],[79,.45,.32],[76,.8,.14],[79,.95,.9]];for(let[b,C,E]of x){for(let T of[-7,7])d("sawtooth",m(b),v+C,E,{gain:.07,a:.02,rel:.18,filter:{freq:2600},detune:T});d("square",m(b-12),v+C,E,{gain:.03,a:.02,rel:.15,filter:{freq:1200}})}for(let b of[60,64,67,72])d("triangle",m(b),v+.95,.9,{gain:.06,a:.03,rel:.6});p.cymbal(v+.95,.12)},cymbal(v,x=.15){M(v,.05,{gain:x,a:.002,rel:1.4,type:"highpass",freq:6e3,q:.5})},kaching(v){M(v,.03,{gain:.3,a:.002,rel:.05,type:"highpass",freq:3e3}),M(v+.05,.02,{gain:.25,a:.002,rel:.06,type:"bandpass",freq:1800,q:3});for(let[x,b]of[[2093,.14],[2637,.1],[3136,.08],[4186,.05]])d("sine",x,v+.12,.02,{gain:b,a:.003,rel:.9});for(let x=0;x<6;x++)d("sine",3e3+Math.random()*2e3,v+.2+x*.05,.01,{gain:.03,a:.002,rel:.12})},sadtrombone(v){let x=[[55,0,.42],[54,.48,.42],[53,.96,.42],[52,1.44,1.3]];for(let[b,C,E]of x){let T=d("sawtooth",m(b),v+C,E,{gain:.11,a:.04,rel:.2,filter:{freq:1100,q:2}});if(C>1){let k=n.createOscillator();k.frequency.value=6;let D=n.createGain();D.gain.value=6,k.connect(D),D.connect(T.frequency),k.start(v+C),k.stop(v+C+E+.3),T.frequency.setValueAtTime(m(b),v+C),T.frequency.linearRampToValueAtTime(m(b-1),v+C+E)}}},drumroll(v,{dur:x=2.2}={}){let b=Math.floor(x*16);for(let C=0;C<b;C++)M(v+C/16,.02,{gain:.04+.16*(C/b),a:.002,rel:.06,freq:1800,q:.8});p.cymbal(v+x,.2),d("sine",70,v+x,.05,{gain:.5,a:.003,rel:.4})},sting(v){for(let x of[48,55,60,63])for(let b of[-8,8])d("sawtooth",m(x),v,.16,{gain:.05,a:.01,rel:.5,filter:{freq:1800},detune:b});p.cymbal(v,.1)},chip(v,{p:x=.3}={}){let b=420+Math.min(1,Math.max(0,x))*900;d("triangle",b,v,.03,{gain:.16,a:.003,rel:.12}).frequency.exponentialRampToValueAtTime(b*1.5,v+.06),M(v,.01,{gain:.06,a:.001,rel:.03,type:"highpass",freq:4e3})},heartbeat(v,{beats:x=5,bpm:b=92}={}){for(let C=0;C<x;C++){let E=v+C*60/b;d("sine",62,E,.04,{gain:.55,a:.004,rel:.16}),d("sine",54,E+.22,.04,{gain:.4,a:.004,rel:.2})}},coins(v,{n:x=14}={}){for(let b=0;b<x;b++){let C=v+b*.07+Math.random()*.03,E=2200+Math.random()*1800;d("sine",E,C,.01,{gain:.05,a:.002,rel:.18}),d("sine",E*1.5,C+.01,.01,{gain:.025,a:.002,rel:.12})}},thunk(v){d("sine",95,v,.05,{gain:.6,a:.002,rel:.25}),M(v,.03,{gain:.25,a:.002,rel:.08,type:"lowpass",freq:900})},wipe(v){M(v,.18,{gain:.16,a:.04,rel:.12,freq:800,q:1.5}).f.frequency.exponentialRampToValueAtTime(4200,v+.25),d("triangle",880,v+.16,.03,{gain:.05,a:.004,rel:.15})},pop(v){d("sine",520,v,.02,{gain:.18,a:.003,rel:.12}).frequency.exponentialRampToValueAtTime(1100,v+.08)},tick(v){d("square",1600,v,.005,{gain:.04,a:.001,rel:.03,filter:{freq:3e3}})},lock(v){d("sine",140,v,.04,{gain:.4,a:.002,rel:.2}),M(v,.02,{gain:.2,a:.002,rel:.05,freq:2500,q:1}),d("triangle",660,v+.06,.05,{gain:.08,a:.005,rel:.2}),d("triangle",990,v+.14,.08,{gain:.08,a:.005,rel:.3})},join(v){[72,76,79,84].forEach((x,b)=>d("triangle",m(x),v+b*.07,.06,{gain:.1,a:.005,rel:.2}))},beep(v){d("square",880,v,.08,{gain:.06,a:.005,rel:.05,filter:{freq:2500}})},go(v){d("square",1320,v,.3,{gain:.07,a:.005,rel:.1,filter:{freq:3e3}})},stamp(v){d("sine",90,v,.05,{gain:.5,a:.002,rel:.25}),M(v,.04,{gain:.25,a:.002,rel:.1,type:"lowpass",freq:1200})},reveal(v){[64,67,71,74].forEach((x,b)=>d("triangle",m(x+12),v+b*.05,.05,{gain:.06,a:.004,rel:.25}))},boo(v){d("sawtooth",160,v,.7,{gain:.06,a:.1,rel:.3,filter:{freq:600}}).frequency.linearRampToValueAtTime(110,v+.8)}};function S(v,x){if(!f()||a)return;let b=p[v];if(b)try{b(n.currentTime+.02,x)}catch(C){console.warn("sfx",v,C)}}let y={lobby:{bpm:92,chords:[[60,64,67,71],[57,60,64,67],[53,57,60,64],[55,59,62,67]],arp:[0,2,1,3,2,1,3,2],swing:.08,shaker:!0,block:!1},betting:{bpm:108,chords:[[57,60,64],[53,57,60],[60,64,67],[55,59,62]],arp:[0,1,2,1,0,2,1,2],swing:.05,shaker:!0,block:!0},final:{bpm:138,chords:[[57,60,64],[57,60,64],[53,57,60],[55,59,62]],arp:[0,2,1,2,0,2,1,2],swing:0,shaker:!0,block:!0},results:{bpm:100,chords:[[60,64,67],[65,69,72],[55,59,62],[60,64,67]],arp:[0,1,2,3,2,1,0,1],swing:.06,shaker:!1,block:!1}};function _(){if(!h)return;let v=y[h.kind],x=60/v.bpm/2;for(;h.nextT<n.currentTime+.35;){let b=h.step,C=Math.floor(b/8)%v.chords.length,E=v.chords[C],T=h.nextT+(b%2?v.swing*x:0),k=b%8;if(k===0){for(let O of E.slice(0,3))for(let z of[-6,6])d("triangle",m(O),T,x*7.5,{gain:.022,a:.35,rel:.6,dest:i,detune:z,filter:{freq:1300}});d("sine",m(E[0]-24),T,x*2.5,{gain:.14,a:.01,rel:.25,dest:i})}k===4&&d("sine",m(E[0]-24+7),T,x*2,{gain:.1,a:.01,rel:.25,dest:i});let D=E[v.arp[k]%E.length]+12;b%16<15&&d("sine",m(D),T,.02,{gain:.045,a:.004,rel:x*1.6,dest:i}),d("triangle",m(D+12),T,.01,{gain:.01,a:.002,rel:.15,dest:i}),v.shaker&&b%2===1&&M(T,.01,{gain:.018,a:.003,rel:.05,type:"highpass",freq:7e3,dest:i}),v.block&&(k===2||k===6)&&d("sine",1250,T,.004,{gain:.04,a:.001,rel:.05,dest:i}),h.step++,h.nextT+=x}}function N(v="lobby"){if(!u()||h?.kind===v)return;if(R(.6),!l){h=null,w=v;return}w=v;let x=n.createGain();x.gain.value=1e-4,x.connect(r);let b=i;i=x,x.gain.exponentialRampToValueAtTime(.32,n.currentTime+1.5),h={kind:v,nextT:n.currentTime+.1,step:0,bus:x},h.timer=setInterval(()=>{f()&&_()},90)}let w=null;function R(v=.8){if(!h)return;clearInterval(h.timer);let x=h.bus;n&&x&&(x.gain.cancelScheduledValues(n.currentTime),x.gain.setValueAtTime(x.gain.value,n.currentTime),x.gain.exponentialRampToValueAtTime(1e-4,n.currentTime+v),setTimeout(()=>x.disconnect(),v*1e3+500)),h=null}function A(v){!h||!n||h.bus.gain.setTargetAtTime(v?.14:.32,n.currentTime,.25)}return{unlock:g,play:S,ready:f,get context(){return n},setVolume(v){o=Math.max(0,Math.min(1,v)),t&&t.gain.setTargetAtTime(a?0:o,n.currentTime,.05)},setMuted(v){a=!!v,t&&t.gain.setTargetAtTime(a?0:o,n.currentTime,.05)},get muted(){return a},setMusicEnabled(v){if(l=!!v,l)w&&!h&&N(w);else{let x=h?.kind||w;R(),w=x}},startMusic:N,stopMusic:R,duck:A,get musicKind(){return h?.kind||null}}}var Se=(n,t=document)=>t.querySelector(n),hi=(n,t=document)=>[...t.querySelectorAll(n)];function Ot(n){return String(n??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function Ye(n){let t=document.createElement("template");return t.innerHTML=n.trim(),t.content.firstElementChild}var zh="pp";function Mn(n){let t=Math.round(Number(n)||0);return`${t<0?"\u2212":""}${Math.abs(t).toLocaleString("en-GB")}${zh}`}function ci(n){let t=Math.round(Number(n)||0);return`${t>0?"+":t<0?"\u2212":"\xB1"}${Math.abs(t).toLocaleString("en-GB")}${zh}`}function Oi(n){let t=Math.abs(Math.round(Number(n)||0));return`${t.toLocaleString("en-GB")} Parkpound${t===1?"":"s"}`}var Ni=n=>n?.shortName||n?.nickname||"";function Eu(n){let t=n%100;return t>=11&&t<=13?"th":{1:"st",2:"nd",3:"rd"}[n%10]||"th"}function os(n,t=""){return`<span class="ordinal p${n} ${t}">${n}<sup>${Eu(n)}</sup></span>`}function ln(n,t=64,e=""){let i=n||{emoji:"\u{1F642}",colour:"#2f8cff"};return`<span class="avatar ${e}" style="width:${t}px;height:${t}px;font-size:${Math.round(t*.58)}px;background:${Ot(i.colour)}">${Ot(i.emoji)}</span>`}function Hh(n){return n=Math.round(Number(n)||0),`${Math.floor(n/60)}:${String(n%60).padStart(2,"0")}`}function el(n,t,e,i=1200,s=o=>String(Math.round(o)),r){let o=performance.now(),a,l=Math.round(t),h=u=>{let g=Math.min(1,(u-o)/i),f=1-(1-g)**3,c=t+(e-t)*f;n.textContent=s(c);let d=Math.round(c);r&&d!==l&&(l=d,r(d)),g<1&&(a=requestAnimationFrame(h))};return a=requestAnimationFrame(h),()=>cancelAnimationFrame(a)}function _n(n,t){return n?.runners?.find(e=>e.id===t)}function yo(n,t){if(!n||!t)return"";if(t.type==="win"||t.type==="special")return`${t.type==="special"||t.boost?"\u{1F680} ":""}${_n(n,t.runnerId)?.nickname||t.runnerId} to WIN`;if(t.type==="inplay")return`${_n(n,t.runnerId)?.nickname||t.runnerId} to WIN (halfway)`;if(t.type==="prop")return`${n.props?.find(o=>o.id===t.propId)?.text||"Side bet"} \u2014 ${String(t.pick).toUpperCase()}`;let e=n.matchups?.find(r=>r.id===t.matchupId);if(!e)return"Head-to-head";let i=Ni(_n(n,t.pick))||t.pick,s=Ni(_n(n,t.pick===e.a?e.b:e.a));return`${i} to beat ${s}`}function br(n,t){if(t.type==="win"||t.type==="special"){let i=_n(n,t.runnerId)?.odds?.win??0,s=(t.type==="special"||t.boost)&&n?.underdogSpecial?n.underdogSpecial.boost||1.5:1;return Math.round((1+(i-1)*s)*100)/100}if(t.type==="inplay")return Number(t.odds)||0;if(t.type==="prop"){let i=n?.props?.find(s=>s.id===t.propId);return(t.pick==="yes"?i?.odds?.yes:i?.odds?.no)??0}let e=n?.matchups?.find(i=>i.id===t.matchupId);return e?t.pick===e.a?e.odds.a:e.odds.b:0}function Sr(n=document.body,{count:t=120,colours:e=["#ffd23f","#ff4d5a","#2ec27e","#2f8cff","#ff6fb5","#7b4dff"],duration:i=3200,zIndex:s=9e3,contained:r=!1}={}){let o=document.createElement("div");o.style.cssText=`position:${r?"absolute":"fixed"};inset:0;pointer-events:none;overflow:hidden;z-index:${s}`;for(let a=0;a<t;a++){let l=document.createElement("i"),h=8+Math.random()*12,u=Math.random()*100,g=(Math.random()-.5)*30,f=Math.random()*720-360,c=Math.random()*400,d=i*(.6+Math.random()*.5);l.style.cssText=`position:absolute;left:${u}%;top:-30px;width:${h}px;height:${h*(.4+Math.random()*.6)}px;background:${e[a%e.length]};border:2px solid #14183c;border-radius:${Math.random()<.3?"50%":"2px"}`,l.animate([{transform:"translate(0,0) rotate(0deg)",opacity:1},{transform:`translate(${g}vw, 110vh) rotate(${f}deg)`,opacity:1}],{duration:d,delay:c,easing:"cubic-bezier(.2,.6,.4,1)",fill:"forwards"}),o.appendChild(l)}n.appendChild(o),setTimeout(()=>o.remove(),i*1.3+500)}function xo(n){return n?.type==="prop"?null:n?.runnerId||n?.pick||null}function $h(n,t){if(!t)return"";if((t.type==="win"||t.type==="special")&&!(t.type==="special"||t.boost))return _n(n,t.runnerId)?.odds?.display||`\xD7${br(n,t)}`;if(t.type==="win"||t.type==="special")return`\xD7${br(n,t)} \u{1F680}`;if(t.type==="inplay")return t.display||`\xD7${Number(t.lockedOdds??t.odds)||""}`;if(t.type==="prop"){let i=n?.props?.find(s=>s.id===t.propId);return(t.pick==="yes"?i?.odds?.displayYes:i?.odds?.displayNo)||`\xD7${br(n,t)}`}let e=n?.matchups?.find(i=>i.id===t.matchupId);return(t.pick===e?.a?e?.odds?.displayA:e?.odds?.displayB)||`\xD7${br(n,t)}`}function nl(n){let t=Math.round(Number(n?.returned)||0),e=Math.round(Number(n?.stake)||0);return n?.void||n?.push||!n?.won&&t===e&&e>0?{kind:"push",net:0,text:"refunded \xB10"}:n?.won?{kind:"won",net:t-e,text:ci(t-e)}:{kind:"lost",net:-e,text:ci(-e)}}function vo(n,t=10){if(!n)return{headline:"",kicker:""};if(n.headline)return{headline:n.headline,kicker:n.kicker||""};let e=String(n.text||"").trim(),i="",s=e.indexOf('"');s>0&&(i=e.slice(s).replace(/"/g,"").trim(),e=e.slice(0,s).trim());let r=e.match(/^(.+?[.!?])(\s+|$)([\s\S]*)$/),o=r?r[1]:e,a=r?r[3].trim():"",l=o.split(/\s+/);l.length>t&&(a=`\u2026${l.slice(t-1).join(" ")}${a?` ${a}`:""}`,o=`${l.slice(0,t-1).join(" ")}\u2026`);let h=[a,i?`\u201C${i}\u201D`:""].filter(Boolean).join(" ");return{headline:o,kicker:h}}function il(n,t){let e=Number(br(n,t))||0,i=Number(n?.payoutMultiplier)||1;return Math.max(0,Math.round((t?.stake||0)*(1+i*(e-1)))-(t?.stake||0))}var le="#14183c";function Tu(n){let t=2166136261;for(let e of String(n))t^=e.charCodeAt(0),t=Math.imul(t,16777619);return t>>>0}var Vh=["#2b1a10","#5a3418","#8a5a2b","#d8a24a","#1b1b1b","#b8432a","#9aa0a8"];function Rs(n,t){let e=parseInt(String(n||"#888888").replace("#","").padEnd(6,"8").slice(0,6),16),i=e>>16&255,s=e>>8&255,r=e&255,o=t<0?0:255,a=Math.abs(t);return i=Math.round((o-i)*a+i),s=Math.round((o-s)*a+s),r=Math.round((o-r)*a+r),`#${(1<<24|i<<16|s<<8|r).toString(16).slice(1)}`}function Gh(n,{size:t=120,idSuffix:e=""}={}){let i=n?.look||{},s=n?.colour?.primary||"#ff4d5a",r=n?.colour?.secondary||"#ffffff",o=i.skin||"#f1c6a5",a=Tu(n?.id+(n?.nickname||"")),l=i.hairColour||i.hairColor||Vh[a%Vh.length],h=i.build||"compact",u={stocky:50,tall:40,lanky:34,compact:42}[h]??42,g={tall:8,lanky:10,stocky:2,compact:4}[h]??4,f={compact:31,stocky:30,lanky:28,tall:29}[h]??30,c=60,d=50-g/2,M=n?.lane??"",m=`pc${a.toString(36)}${e}`,p=[];p.push(`<defs><clipPath id="${m}"><circle cx="60" cy="60" r="56"/></clipPath></defs>`),p.push(`<circle cx="60" cy="60" r="56" fill="${Rs(s,.55)}"/>`),p.push(`<g clip-path="url(#${m})">`),p.push(`<path d="M0 92 L120 70 L120 120 L0 120Z" fill="${Rs(s,.35)}" opacity=".6"/>`);let S=d+f+g-4;p.push(`<path d="M${c-u} 124 Q${c-u} ${S+6} ${c-14} ${S} L${c+14} ${S} Q${c+u} ${S+6} ${c+u} 124Z" fill="${s}" stroke="${le}" stroke-width="5" stroke-linejoin="round"/>`),p.push(`<path d="M${c-18} ${S+1} L${c-2} ${S+1} L${c+26} 124 L${c+8} 124Z" fill="${r}" stroke="${le}" stroke-width="3" stroke-linejoin="round"/>`),p.push(`<rect x="${c-30}" y="${S+14}" width="22" height="17" rx="3" fill="#fff" stroke="${le}" stroke-width="3" transform="rotate(-6 ${c-19} ${S+22})"/>`),p.push(`<text x="${c-19}" y="${S+28}" font-family="Lilita One, Arial Black, sans-serif" font-size="14" text-anchor="middle" fill="${le}" transform="rotate(-6 ${c-19} ${S+22})">${M}</text>`),p.push(`<rect x="${c-9}" y="${d+f-8}" width="18" height="${g+12}" fill="${o}" stroke="${le}" stroke-width="5"/>`),i.accessory==="medal"&&(p.push(`<path d="M${c-12} ${S} L${c} ${S+22} L${c+12} ${S}" fill="none" stroke="${r}" stroke-width="6"/>`),p.push(`<circle cx="${c}" cy="${S+26}" r="9" fill="#ffcf3a" stroke="${le}" stroke-width="4"/>`));let y=i.hair||"short";["long","ponytail","bob"].includes(y)&&p.push(`<path d="M${c-f-4} ${d} Q${c-f-6} ${d+f+14} ${c-f+10} ${d+f+10} L${c+f-10} ${d+f+10} Q${c+f+6} ${d+f+14} ${c+f+4} ${d}Z" fill="${l}" stroke="${le}" stroke-width="5" stroke-linejoin="round"/>`),y==="ponytail"&&p.push(`<ellipse cx="${c+f+6}" cy="${d-6}" rx="9" ry="16" fill="${l}" stroke="${le}" stroke-width="5" transform="rotate(25 ${c+f+6} ${d-6})"/>`),p.push(`<circle cx="${c-f+1}" cy="${d+4}" r="7" fill="${o}" stroke="${le}" stroke-width="5"/>`),p.push(`<circle cx="${c+f-1}" cy="${d+4}" r="7" fill="${o}" stroke="${le}" stroke-width="5"/>`),p.push(`<ellipse cx="${c}" cy="${d}" rx="${f}" ry="${f+2}" fill="${o}" stroke="${le}" stroke-width="5"/>`),p.push(`<ellipse cx="${c-16}" cy="${d+11}" rx="6" ry="4" fill="#ff8f8f" opacity=".45"/><ellipse cx="${c+16}" cy="${d+11}" rx="6" ry="4" fill="#ff8f8f" opacity=".45"/>`);let _=d-f-2,N={short:`<path d="M${c-f+2} ${d-6} Q${c-f} ${_-4} ${c} ${_-2} Q${c+f} ${_-4} ${c+f-2} ${d-6} Q${c+8} ${d-18} ${c-f+2} ${d-6}Z"/>`,buzz:`<path d="M${c-f+3} ${d-8} Q${c} ${_-6} ${c+f-3} ${d-8} Q${c} ${d-20} ${c-f+3} ${d-8}Z"/>`,curly:`<path d="M${c-f} ${d-2} q-6 -12 4 -18 q0 -12 14 -12 q6 -10 18 -4 q12 -4 16 8 q12 4 8 18 q-14 -8 -30 -6 q-16 0 -30 14z"/>`,afro:`<circle cx="${c}" cy="${d-14}" r="${f+8}"/>`,mohawk:`<path d="M${c-6} ${d-14} L${c-8} ${_-16} L${c+8} ${_-16} L${c+6} ${d-14}Z"/>`,quiff:`<path d="M${c-f+2} ${d-6} Q${c-f} ${_} ${c-4} ${_-2} Q${c+20} ${_-18} ${c+f+4} ${_+2} Q${c+f} ${d-8} ${c+f-2} ${d-6} Q${c+8} ${d-18} ${c-f+2} ${d-6}Z"/>`,bun:`<g><circle cx="${c}" cy="${_-6}" r="10"/><path d="M${c-f+2} ${d-6} Q${c-f} ${_-2} ${c} ${_} Q${c+f} ${_-2} ${c+f-2} ${d-6} Q${c} ${d-16} ${c-f+2} ${d-6}Z"/></g>`,long:`<path d="M${c-f+1} ${d+2} Q${c-f} ${_-4} ${c} ${_-2} Q${c+f} ${_-4} ${c+f-1} ${d+2} Q${c+10} ${d-16} ${c-2} ${d-12} Q${c-14} ${d-16} ${c-f+1} ${d+2}Z"/>`,bald:""};N.ponytail=N.long,N.bob=N.long,N.spiky=`<path d="M${c-f+2} ${d-6} L${c-f+2} ${_+2} L${c-14} ${_-12} L${c-8} ${_-2} L${c} ${_-16} L${c+6} ${_-2} L${c+15} ${_-12} L${c+f-2} ${_+2} L${c+f-2} ${d-6} Q${c} ${d-18} ${c-f+2} ${d-6}Z"/>`,N.mullet=`<g><path d="M${c+f-6} ${d} Q${c+f+10} ${d+22} ${c+f-2} ${d+34} L${c+f-14} ${d+20}Z"/><path d="M${c-f+6} ${d} Q${c-f-10} ${d+22} ${c-f+2} ${d+34} L${c-f+14} ${d+20}Z"/>${N.short}</g>`,N.swept=`<path d="M${c-f+2} ${d-4} Q${c-f-4} ${_-6} ${c+6} ${_-6} Q${c+f+8} ${_} ${c+f-1} ${d-2} Q${c+4} ${d-22} ${c-f+2} ${d-4}Z"/>`;let w=N[y]??N.short;w&&p.push(`<g fill="${l}" stroke="${le}" stroke-width="5" stroke-linejoin="round">${w}</g>`);let R=i.face||"grin",A=d+1,v=(k,D)=>D?`<path d="M${k-5} ${A} Q${k} ${A+4} ${k+5} ${A}" fill="none" stroke="${le}" stroke-width="3.5" stroke-linecap="round"/>`:`<ellipse cx="${k}" cy="${A}" rx="4.2" ry="5.6" fill="${le}"/><circle cx="${k+1.4}" cy="${A-2}" r="1.5" fill="#fff"/>`,x="",b="",C=v(c-11)+v(c+11);switch(R){case"determined":case"focused":case"fierce":x=`<path d="M${c-18} ${A-12} L${c-5} ${A-7} M${c+18} ${A-12} L${c+5} ${A-7}" stroke="${le}" stroke-width="4" stroke-linecap="round"/>`,b=`<path d="M${c-9} ${d+17} L${c+9} ${d+15}" stroke="${le}" stroke-width="4" stroke-linecap="round"/>`;break;case"smug":case"cheeky":C=`<path d="M${c-16} ${A} L${c-6} ${A}" stroke="${le}" stroke-width="4" stroke-linecap="round"/>`+v(c+11),x=`<path d="M${c+5} ${A-10} Q${c+11} ${A-15} ${c+18} ${A-10}" fill="none" stroke="${le}" stroke-width="3.5" stroke-linecap="round"/>`,b=`<path d="M${c-8} ${d+15} Q${c+4} ${d+19} ${c+11} ${d+11}" fill="none" stroke="${le}" stroke-width="4" stroke-linecap="round"/>`;break;case"worried":case"nervous":case"anxious":x=`<path d="M${c-17} ${A-8} L${c-6} ${A-13} M${c+17} ${A-8} L${c+6} ${A-13}" stroke="${le}" stroke-width="3.5" stroke-linecap="round"/>`,b=`<path d="M${c-10} ${d+17} q5 -5 10 0 q5 5 10 0" fill="none" stroke="${le}" stroke-width="3.5" stroke-linecap="round"/>`;break;case"sleepy":case"tired":case"dozy":C=v(c-11,!0)+v(c+11,!0),b=`<ellipse cx="${c+2}" cy="${d+17}" rx="5" ry="4" fill="${le}"/>`;break;case"wink":C=v(c-11,!0)+v(c+11),b=`<path d="M${c-11} ${d+12} Q${c} ${d+24} ${c+11} ${d+12}Z" fill="#fff" stroke="${le}" stroke-width="3.5" stroke-linejoin="round"/>`;break;case"gritted":x=`<path d="M${c-18} ${A-11} L${c-5} ${A-7} M${c+18} ${A-11} L${c+5} ${A-7}" stroke="${le}" stroke-width="4" stroke-linecap="round"/>`,b=`<rect x="${c-12}" y="${d+11}" width="24" height="10" rx="3" fill="#fff" stroke="${le}" stroke-width="3.5"/><path d="M${c-4} ${d+11} v10 M${c+4} ${d+11} v10 M${c-12} ${d+16} h24" stroke="${le}" stroke-width="2"/>`;break;case"tongue-out":C=v(c-11,!0)+v(c+11),b=`<path d="M${c-11} ${d+12} Q${c} ${d+20} ${c+11} ${d+12}" fill="none" stroke="${le}" stroke-width="3.5" stroke-linecap="round"/><path d="M${c-2} ${d+15} q4 14 10 0z" fill="#ff6b7a" stroke="${le}" stroke-width="3"/>`;break;case"wide-eyed":C=`<circle cx="${c-11}" cy="${A}" r="7.5" fill="#fff" stroke="${le}" stroke-width="3"/><circle cx="${c-11}" cy="${A}" r="3.2" fill="${le}"/><circle cx="${c+11}" cy="${A}" r="7.5" fill="#fff" stroke="${le}" stroke-width="3"/><circle cx="${c+11}" cy="${A}" r="3.2" fill="${le}"/>`,b=`<ellipse cx="${c}" cy="${d+17}" rx="5" ry="6" fill="${le}"/>`;break;case"shocked":case"surprised":b=`<ellipse cx="${c}" cy="${d+17}" rx="6" ry="8" fill="${le}"/>`,x=`<path d="M${c-17} ${A-13} Q${c-11} ${A-17} ${c-5} ${A-13} M${c+17} ${A-13} Q${c+11} ${A-17} ${c+5} ${A-13}" fill="none" stroke="${le}" stroke-width="3.5" stroke-linecap="round"/>`;break;default:b=`<path d="M${c-13} ${d+11} Q${c} ${d+27} ${c+13} ${d+11}Z" fill="#fff" stroke="${le}" stroke-width="3.5" stroke-linejoin="round"/><path d="M${c-6} ${d+19} Q${c} ${d+23} ${c+6} ${d+19}" fill="#ff6b7a"/>`}p.push(C,x,b),p.push(`<path d="M${c-2} ${d+4} Q${c+3} ${d+8} ${c-1} ${d+10}" fill="none" stroke="${Rs(o,-.35)}" stroke-width="3" stroke-linecap="round"/>`);let E=i.accessory;E==="sunglasses"||E==="shades"?p.push(`<g stroke="${le}" stroke-width="3.5"><rect x="${c-21}" y="${A-7}" width="17" height="12" rx="4" fill="${le}"/><rect x="${c+4}" y="${A-7}" width="17" height="12" rx="4" fill="${le}"/><path d="M${c-4} ${A-3} L${c+4} ${A-3}"/></g><path d="M${c-18} ${A-4} l5 0 M${c+7} ${A-4} l5 0" stroke="#fff" stroke-width="2.5" stroke-linecap="round"/>`):E==="glasses"||E==="specs"?p.push(`<g stroke="${le}" stroke-width="3.5" fill="rgba(255,255,255,.25)"><circle cx="${c-11}" cy="${A}" r="8"/><circle cx="${c+11}" cy="${A}" r="8"/><path d="M${c-3} ${A} L${c+3} ${A}"/></g>`):E==="moustache"||E==="mustache"||E==="tache"?p.push(`<path d="M${c} ${d+12} q-8 -6 -16 0 q6 6 16 0 q8 -6 16 0 q-6 6 -16 0z" fill="${l}" stroke="${le}" stroke-width="3" stroke-linejoin="round"/>`):E==="headphones"||E==="earbuds"?p.push(`<path d="M${c-f-2} ${d+2} Q${c} ${_-22} ${c+f+2} ${d+2}" fill="none" stroke="${le}" stroke-width="7"/><rect x="${c-f-8}" y="${d-6}" width="12" height="20" rx="5" fill="${r}" stroke="${le}" stroke-width="4"/><rect x="${c+f-4}" y="${d-6}" width="12" height="20" rx="5" fill="${r}" stroke="${le}" stroke-width="4"/>`):E==="beard"?p.push(`<path d="M${c-f+4} ${d+4} Q${c-f+6} ${d+f+6} ${c} ${d+f+8} Q${c+f-6} ${d+f+6} ${c+f-4} ${d+4} Q${c+14} ${d+18} ${c} ${d+22} Q${c-14} ${d+18} ${c-f+4} ${d+4}Z" fill="${l}" stroke="${le}" stroke-width="3.5" stroke-linejoin="round"/>`):E==="scarf"?p.push(`<path d="M${c-20} ${S-4} Q${c} ${S+8} ${c+20} ${S-4} L${c+22} ${S+6} Q${c} ${S+18} ${c-22} ${S+6}Z" fill="${r}" stroke="${le}" stroke-width="3.5"/><rect x="${c+8}" y="${S+6}" width="9" height="22" rx="2" fill="${r}" stroke="${le}" stroke-width="3"/>`):E==="cape"?p.push(`<path d="M${c-22} ${S} L${c-46} 124 M${c+22} ${S} L${c+46} 124" stroke="${r}" stroke-width="8" stroke-linecap="round"/>`):E==="wristbands"||E==="bumbag"?p.push(`<rect x="${c-26}" y="${S+30}" width="${E==="bumbag"?30:14}" height="${E==="bumbag"?14:10}" rx="5" fill="${r}" stroke="${le}" stroke-width="3.5"/>`):E==="whistle"&&p.push(`<path d="M${c-10} ${S} Q${c} ${S+18} ${c+10} ${S}" fill="none" stroke="${r}" stroke-width="3"/><rect x="${c-6}" y="${S+12}" width="14" height="8" rx="3" fill="#cfd8e8" stroke="${le}" stroke-width="3"/>`);let T=i.hat;return T==="backwards-cap"?(p.push(`<path d="M${c-f+1} ${d-8} Q${c-f+2} ${_-10} ${c} ${_-10} Q${c+f-2} ${_-10} ${c+f-1} ${d-8}Z" fill="${s}" stroke="${le}" stroke-width="5" stroke-linejoin="round"/>`),p.push(`<path d="M${c-f+4} ${d-12} Q${c-f-14} ${d-14} ${c-f-18} ${d-4} L${c-f+2} ${d-4}Z" fill="${Rs(s,-.2)}" stroke="${le}" stroke-width="5" stroke-linejoin="round"/>`)):T==="cap"||T==="baseball cap"||T==="trucker"?(p.push(`<path d="M${c-f+1} ${d-8} Q${c-f+2} ${_-10} ${c} ${_-10} Q${c+f-2} ${_-10} ${c+f-1} ${d-8}Z" fill="${s}" stroke="${le}" stroke-width="5" stroke-linejoin="round"/>`),p.push(`<path d="M${c-6} ${d-10} Q${c+24} ${d-18} ${c+f+16} ${d-6} L${c+f-2} ${d-4}Z" fill="${Rs(s,-.2)}" stroke="${le}" stroke-width="5" stroke-linejoin="round"/>`),p.push(`<circle cx="${c}" cy="${_-10}" r="3.5" fill="${r}" stroke="${le}" stroke-width="2.5"/>`)):T==="beanie"||T==="bobble"||T==="bobble hat"||T==="woolly hat"?(p.push(`<path d="M${c-f} ${d-6} Q${c-f} ${_-14} ${c} ${_-14} Q${c+f} ${_-14} ${c+f} ${d-6}Z" fill="${r}" stroke="${le}" stroke-width="5" stroke-linejoin="round"/>`),p.push(`<rect x="${c-f-2}" y="${d-12}" width="${f*2+4}" height="11" rx="5" fill="${s}" stroke="${le}" stroke-width="5"/>`),p.push(`<circle cx="${c}" cy="${_-16}" r="8" fill="${s}" stroke="${le}" stroke-width="5"/>`)):T==="headband"||T==="sweatband"?(p.push(`<path d="M${c-f} ${d-13} Q${c} ${d-22} ${c+f} ${d-13} L${c+f+1} ${d-4} Q${c} ${d-13} ${c-f-1} ${d-4}Z" fill="${r}" stroke="${le}" stroke-width="4" stroke-linejoin="round"/>`),p.push(`<path d="M${c+f} ${d-9} l12 -4 l-2 10z" fill="${r}" stroke="${le}" stroke-width="3.5" stroke-linejoin="round"/>`)):T==="visor"?p.push(`<path d="M${c-f} ${d-12} Q${c} ${d-20} ${c+f} ${d-12} L${c+f} ${d-5} Q${c} ${d-12} ${c-f} ${d-5}Z" fill="${s}" stroke="${le}" stroke-width="4"/><path d="M${c-18} ${d-10} Q${c+4} ${d-2} ${c+30} ${d-10} L${c+20} ${d-15}Z" fill="${Rs(s,-.2)}" stroke="${le}" stroke-width="4" stroke-linejoin="round"/>`):T==="bucket"||T==="bucket hat"||T==="sun hat"?p.push(`<path d="M${c-f-12} ${d-6} L${c-f+4} ${_-8} Q${c} ${_-16} ${c+f-4} ${_-8} L${c+f+12} ${d-6} Q${c} ${d-14} ${c-f-12} ${d-6}Z" fill="${r}" stroke="${le}" stroke-width="5" stroke-linejoin="round"/>`):T==="party"||T==="party hat"?p.push(`<path d="M${c-14} ${_+4} L${c+4} ${_-30} L${c+16} ${_+2}Z" fill="${s}" stroke="${le}" stroke-width="5" stroke-linejoin="round"/><circle cx="${c+4}" cy="${_-32}" r="5" fill="${r}" stroke="${le}" stroke-width="3"/>`):T==="tophat"||T==="top hat"?p.push(`<rect x="${c-18}" y="${_-30}" width="36" height="30" rx="3" fill="${le}"/><rect x="${c-18}" y="${_-10}" width="36" height="7" fill="${s}"/><rect x="${c-30}" y="${_-2}" width="60" height="8" rx="4" fill="${le}"/>`):T==="crown"?p.push(`<path d="M${c-20} ${_+2} L${c-22} ${_-20} L${c-10} ${_-8} L${c} ${_-24} L${c+10} ${_-8} L${c+22} ${_-20} L${c+20} ${_+2}Z" fill="#ffcf3a" stroke="${le}" stroke-width="4" stroke-linejoin="round"/>`):T&&p.push(`<path d="M${c-f+1} ${d-8} Q${c-f+2} ${_-10} ${c} ${_-10} Q${c+f-2} ${_-10} ${c+f-1} ${d-8}Z" fill="${r}" stroke="${le}" stroke-width="5" stroke-linejoin="round"/>`),p.push("</g>"),p.push(`<circle cx="60" cy="60" r="56" fill="none" stroke="${le}" stroke-width="6"/>`),`<svg class="portrait" viewBox="0 0 120 120" width="${t}" height="${t}" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">${p.join("")}</svg>`}var Au=/(daniel|george|arthur|ryan|oliver|thomas|male|james|harry|guy|brian|fred|alex|aaron)/i,Ru=/(kate|serena|martha|libby|sonia|hazel|susan|female|stephanie|fiona|moira|tessa|karen|emma|amy|samantha|victoria|zira|aria|jenny|catherine)/i;function Wh({onLine:n,onIdle:t}={}){let e=typeof window<"u"?window.speechSynthesis:null,i=!0,s=.9,r={jeff:null,pam:null},o=[],a=null,l=null;function h(){if(!e)return;let M=e.getVoices()||[];if(!M.length)return;let m=M.filter(R=>/en[-_]GB/i.test(R.lang)),p=M.filter(R=>/^en/i.test(R.lang)),S=m.length?m:p.length?p:M,_=(R=>[...R.filter(A=>A.localService),...R.filter(A=>!A.localService)])(S),N=_.find(R=>Au.test(R.name))||_[0],w=_.find(R=>Ru.test(R.name)&&R!==N)||_.find(R=>R!==N)||N;r={jeff:N,pam:w}}e&&(h(),e.addEventListener?.("voiceschanged",h));let u=M=>Math.max(2200,String(M).split(/\s+/).length*400+600);function g(){clearTimeout(l),a=null;let M=o.shift();for(;M&&M.priority<3&&Date.now()-M.at>8e3;)M=o.shift();if(!M){t?.();return}a=M,n?.(M);let m=()=>{a===M&&g()};if(i&&e&&(r.jeff||r.pam)){let p=new SpeechSynthesisUtterance(M.text),S=M.speaker==="pam"?r.pam:r.jeff;S?(p.voice=S,p.lang=S.lang):p.lang="en-GB";let y=r.jeff===r.pam;p.pitch=M.speaker==="pam"?y?1.35:1.08:y?.8:.95,p.rate=M.rate||1.06,p.volume=s,p.onend=m,p.onerror=m;try{e.speak(p)}catch{}l=setTimeout(()=>{try{e.cancel()}catch{}m()},u(M.text)*2.2+2e3)}else l=setTimeout(m,u(M.text))}function f(M,m="jeff",{priority:p=2,interrupt:S=!1}={}){if(!M)return;let y={text:String(M),speaker:m,priority:p,at:Date.now()};for(S&&(o.length=0,c()),o.push(y);o.length>2;){let _=0;for(let N=1;N<o.length;N++)o[N].priority<o[_].priority&&(_=N);o.splice(_,1)}a||g()}function c(){if(clearTimeout(l),e)try{e.cancel()}catch{}a=null}function d(){o.length=0,c(),t?.()}return{say:f,clear:d,get busy(){return!!a||o.length>0},get available(){return!!e},setEnabled(M){if(i=!!M,!i&&e)try{e.cancel()}catch{}},setVolume(M){s=Math.max(0,Math.min(1,M))},whenIdle(M=15e3){return new Promise(m=>{let p=Date.now(),S=setInterval(()=>{(!a&&!o.length||Date.now()-p>M)&&(clearInterval(S),m())},120)})},get voiceNames(){return{jeff:r.jeff?.name,pam:r.pam?.name}}}}var ol=[1720,4220],sl=2500;function $n(n,t){if(t<=0)return 0;if(t>=n[200])return 5e3;let e=0,i=200;for(;i-e>1;){let r=e+i>>1;n[r]<=t?e=r:i=r}let s=(t-n[e])/(n[i]-n[e]);return(e+s)*25}function Nn(n,t){let e=Math.max(0,Math.min(5e3,t))/25,i=Math.floor(e),s=Math.min(200,i+1);return n[i]+(e-i)*(n[s]-n[i])}function Cu(n,{dt:t=1,debounceS:e=6}={}){let i=n.map(x=>x.id),s=Math.max(...n.map(x=>x.officialS)),r=[...n].sort((x,b)=>x.officialS-b.officialS).map(x=>x.id),o=[];for(let x=0;x<=Math.ceil(s);x+=t){let b=n.map(C=>$n(C.progress,x));o.push({t:x,d:b})}let a=[],l=n.length,h={},u=(x,b)=>`${x}-${b}`,g=null,f=0,c=null,d=0,M=0,m=0,p=!1,S=null;for(let x of o){if(x.t<15)continue;let b=n.map(T=>x.t>=T.officialS);for(let T=0;T<l;T++)for(let k=T+1;k<l;k++){if(b[T]&&b[k])continue;let D=x.d[T]>x.d[k]?T:k,O=h[u(T,k)];if(!O){h[u(T,k)]={ahead:D,cand:D,since:x.t};continue}if(D!==O.cand&&(O.cand=D,O.since=x.t),O.cand!==O.ahead&&x.t-O.since>=e){let z=O.cand,q=O.cand===T?k:T;O.ahead=O.cand;let X=O.since;m++,a.push({type:"overtake",raceS:X,by:i[z],on:i[q],atM:Math.round($n(n[z].progress,X))})}}let C=x.d.indexOf(Math.max(...x.d));if(g===null){g=C,f=x.t;continue}C!==g?c!==C?(c=C,d=x.t):x.t-d>=e&&!b[g]&&(a.push({type:"lead_change",raceS:d,from:i[g],to:i[C],atM:Math.round(x.d[C])}),M++,x.d[C]>3500&&(p=!0),g=C,f=d,c=null):c=null;let E=[...x.d].sort((T,k)=>k-T);S===null&&E[0]-E[1]>60&&E[0]<5e3&&(S=x.t,a.push({type:"breakaway",raceS:x.t,who:i[C],gapM:Math.round(E[0]-E[1]),atM:Math.round(E[0])}))}let y=x=>Math.min(...n.map(b=>Nn(b.progress,x)));for(let[x,b]of ol.entries())a.push({type:"hill",raceS:y(b),lap:x+1,atM:b});a.push({type:"lap",raceS:y(sl),atM:sl,order:rl(n,y(sl))}),a.push({type:"final_stretch",raceS:y(4600),atM:4600,order:rl(n,y(4600))});for(let x of n)a.push({type:"finish",raceS:x.officialS,who:x.id,place:r.indexOf(x.id)+1});a.sort((x,b)=>x.raceS-b.raceS);let _=n.map(x=>x.officialS).sort((x,b)=>x-b),N=x=>rl(n,y(x)),w=N(2e3)[0],R=N(1e3)[0],A=N(4e3)[0],v=N(2e3).at(-1);return{finishOrder:r,winningMarginS:_[1]-_[0],spreadS:_.at(-1)-_[0],leadChanges:M,overtakes:m,lateLeadChange:p,leaderAt1k:R,leaderAt2k:w,leaderAt4k:A,leaderAt2kFinalPlace:r.indexOf(w)+1,winnerPlaceAt2k:N(2e3).indexOf(r[0])+1,winnerPlaceAt1k:N(1e3).indexOf(r[0])+1,lastAt2kFinalPlace:r.indexOf(v)+1,breakawayAtS:S,events:a}}function rl(n,t){return n.map(e=>({id:e.id,d:$n(e.progress,t),f:e.officialS})).sort((e,i)=>i.d-e.d||e.f-i.f).map(e=>e.id)}function Iu(n,{targetS:t=140}={}){let e=Math.max(...n.map(p=>p.officialS)),i=Math.min(...n.map(p=>Nn(p.progress,4500))),s=45,r=i,o=e+3,a=o-r,l=4,h=Math.min(t*.45,Math.max(25,a/1.6)),u=a/h,g=r-s,f=Math.max(30,t-s/l-h),c=g/f,d=p=>{let S=Xh(s-10,s+10,p),y=Xh(r-60,r,p);return l+(c-l)*S+(u-c)*y},M=[[0,0]],m=0;for(let p=1;p<=Math.ceil(o);p++)m+=1/d(p-.5),M.push([p,Math.round(m*1e3)/1e3]);return{map:M,durationS:Math.round(m*10)/10,raceEndS:Math.ceil(o),rates:{start:l,middle:Math.round(c*10)/10,finale:Math.round(u*100)/100}}}function Xh(n,t,e){let i=Math.max(0,Math.min(1,(e-n)/(t-n)));return i*i*(3-2*i)}function di(n,t){let e=n.map;if(t<=0)return 0;if(t>=e.length-1)return e.at(-1)[1];let i=Math.floor(t),s=t-i;return e[i][1]+s*(e[i+1][1]-e[i][1])}function Fi(n,t){let e=n.map;if(t<=0)return 0;let i=0,s=e.length-1;if(t>=e[s][1])return e[s][0];for(;s-i>1;){let r=i+s>>1;e[r][1]<=t?i=r:s=r}return e[i][0]+(t-e[i][1])/(e[s][1]-e[i][1])}function qh(n,t,e={}){let i=Cu(t),s=Iu(t,e),r=[...i.events];for(let a of t)for(let[l,h]of(a.diversions||[]).entries())r.push({type:"diversion",who:a.id,lap:l+1,raceS:Nn(a.progress,h.fromM),endRaceS:Nn(a.progress,h.toM),fromM:h.fromM,toM:h.toM});r.sort((a,l)=>a.raceS-l.raceS);let o=r.map(a=>({...a,broadcastS:Math.round(di(s,a.raceS)*100)/100,...a.endRaceS!=null?{endBroadcastS:Math.round(di(s,a.endRaceS)*100)/100}:{}}));return{roundId:n,courseLengthM:5e3,runners:t.map(a=>({id:a.id,officialS:a.officialS,progress:a.progress,pacingSource:a.pacingSource,diversions:a.diversions||null})),timeMap:s,events:o,finishOrder:i.finishOrder,summary:{winningMarginS:i.winningMarginS,spreadS:i.spreadS,leadChanges:i.leadChanges,overtakes:i.overtakes,lateLeadChange:i.lateLeadChange}}}var Cs="#14183c";function Yh(n,{course:t,round:e,plan:i,speed:s=1}){let r=document.createElement("canvas");r.style.cssText="position:absolute;inset:0;width:100%;height:100%;display:block",n.appendChild(r);let o=r.getContext("2d",{alpha:!1}),a=e?.runners||[],l=t?.points||[],h=0,u=!1,g=!1,f=0,c="idle",d=0,M=0,m=-1,p=null,S=null,y=[],_=null,N=1/0,w=-1/0,R=1/0,A=-1/0;for(let O of l)N=Math.min(N,O[0]),w=Math.max(w,O[0]),R=Math.min(R,O[2]),A=Math.max(A,O[2]);function v(){let O=Math.min(1,1100/Math.max(1,n.clientWidth));r.width=Math.round(n.clientWidth*O),r.height=Math.round(n.clientHeight*O)}v();let x=new ResizeObserver(v);x.observe(n);function b(O,z){let q=r.width,X=r.height,U=X*.16,gt=X*.24,At=q*.08,P=Math.min((q-At*2-q*.22)/(w-N||1),(X-U-gt)/(A-R||1)),G=At+(q-At*2-q*.22-(w-N)*P)/2,J=U+(X-U-gt-(A-R)*P)/2;return[G+(O-N)*P,J+(z-R)*P,P]}function C(O){if(!l.length)return[0,0];let z=Math.max(0,Math.min(l.length-1,O/5e3*(l.length-1))),q=Math.floor(z),X=Math.min(l.length-1,q+1),U=z-q;return[l[q][0]+(l[X][0]-l[q][0])*U,l[q][2]+(l[X][2]-l[q][2])*U]}let E=null;function T(){let O=r.width,z=r.height;E=document.createElement("canvas"),E.width=O,E.height=z;let q=E.getContext("2d"),X=q.createLinearGradient(0,0,0,z);X.addColorStop(0,"#45cf86"),X.addColorStop(1,"#1f9e5c"),q.fillStyle=X,q.fillRect(0,0,O,z),q.fillStyle="rgba(255,255,255,.05)";let U=O/1920;for(let gt=-z;gt<O;gt+=160*U)q.beginPath(),q.moveTo(gt,0),q.lineTo(gt+80*U,0),q.lineTo(gt+80*U+z*.5,z),q.lineTo(gt+z*.5,z),q.fill();if(l.length){let gt=new Path2D;l.forEach((J,V)=>{let[K,ot]=b(J[0],J[2]);V?gt.lineTo(K,ot):gt.moveTo(K,ot)});let At=b(0,0)[2];q.lineCap="round",q.lineJoin="round",q.strokeStyle=Cs,q.lineWidth=Math.max(16,At*14),q.stroke(gt),q.strokeStyle="#fff",q.lineWidth=Math.max(12,At*11),q.stroke(gt),q.strokeStyle="#6f84a8",q.lineWidth=Math.max(8,At*8),q.stroke(gt);let[P,G]=b(...t.finish?[t.finish[0],t.finish[1]]:[l.at(-1)[0],l.at(-1)[2]]);q.save(),q.translate(P,G);for(let J=-2;J<2;J++)for(let V=-1;V<1;V++)q.fillStyle=J+V&1?"#fff":Cs,q.fillRect(J*8,V*8,8,8);q.restore()}}function k(){let O=r.width,z=r.height;(!E||E.width!==O||E.height!==z)&&T(),o.drawImage(E,0,0);let q=i?Fi(i.timeMap,f):0,X=(i?.runners||[]).map(V=>({id:V.id,m:$n(V.progress,q),done:q>=V.officialS,f:V.officialS}));X.sort((V,K)=>K.m-V.m||V.f-K.f);let U=Math.max(14,O/90);for(let V of[...X].reverse()){let K=a.find(Lt=>Lt.id===V.id),[ot,Tt]=b(...C(V.m));o.beginPath(),o.arc(ot,Tt+4,U,0,Math.PI*2),o.fillStyle="rgba(0,0,0,.25)",o.fill(),o.beginPath(),o.arc(ot,Tt,U,0,Math.PI*2),o.fillStyle=K?.colour?.primary||"#fff",o.fill(),o.lineWidth=U*.28,o.strokeStyle=Cs,o.stroke(),o.fillStyle="#fff",o.font=`${Math.round(U*1.15)}px "Lilita One", sans-serif`,o.textAlign="center",o.textBaseline="middle",o.lineWidth=U*.25,o.strokeText(String(K?.lane??""),ot,Tt+1),o.fillText(String(K?.lane??""),ot,Tt+1)}let gt=O*.77,At=z*.16,P=z*.075;o.font=`${Math.round(z*.035)}px "Lilita One", sans-serif`,o.textAlign="left",o.textBaseline="middle",X.forEach((V,K)=>{let ot=a.find(Lt=>Lt.id===V.id),Tt=At+K*P;o.save(),o.translate(gt,Tt),o.transform(1,0,-.14,1,0,0),o.fillStyle=Cs,o.fillRect(4,6,O*.2,P*.82),o.fillStyle=K===0?"#ffd23f":"#2a62e0",o.fillRect(0,0,O*.2,P*.82),o.fillStyle=ot?.colour?.primary||"#fff",o.fillRect(0,0,O*.012,P*.82),o.restore(),o.fillStyle=K===0?Cs:"#fff",o.fillText(`${K+1}  ${(ot?.shortName||ot?.nickname||V.id).slice(0,16)}`,gt+O*.02,Tt+P*.41)}),o.font=`${Math.round(z*.04)}px "Lilita One", sans-serif`,o.textAlign="left";let G=Math.floor(q),J=`${Math.floor(G/60)}:${String(G%60).padStart(2,"0")}`;o.lineWidth=8,o.strokeStyle=Cs,o.strokeText(J,gt,At-z*.05),o.fillStyle="#ffd23f",o.fillText(J,gt,At-z*.05)}function D(O){if(g)return;let z=d?Math.min(.1,(O-d)/1e3):0;if(d=O,c==="race"&&!u){for(f+=z*s;y.length&&y[0].broadcastS<=f;){let q=y.shift();try{p?.(q)}catch(X){console.warn(X)}}if(f>=(i.timeMap.durationS||0)+1.5){c="done";let q=S;S=null,q?.()}}O-M>45&&(f!==m||!E)&&(M=O,m=f,k()),h=requestAnimationFrame(D)}return h=requestAnimationFrame(D),{kind:"2d",playIntro(O){setTimeout(()=>O?.(),10)},playRace(O,z){p=O,S=z,y=[...i.events||[],...i.commentary||[]].sort((q,X)=>q.broadcastS-X.broadcastS),f=0,c="race"},showPodium(O){_=O},setPaused(O){u=!!O},seek(O){for(f=Math.max(0,Number(O)||0);y.length&&y[0].broadcastS<=f;)y.shift();c="race"},get broadcastTime(){return c==="race"||c==="done"?f:-1},dispose(){g=!0,cancelAnimationFrame(h),x.disconnect(),r.remove()}}}var ki={};Oh(ki,{createRaceView:()=>Dv});var ch="170";var Pu=0,Zh=1,ku=2;var hf=1,hh=2,wi=3,Zi=0,En=1,cn=2,qi=0,Js=1,jh=2,Jh=3,Kh=4,Lu=5,ps=100,Du=101,Uu=102,Nu=103,Ou=104,Fu=200,Bu=201,zu=202,Hu=203,Hl=204,$l=205,$u=206,Vu=207,Gu=208,Wu=209,Xu=210,qu=211,Yu=212,Zu=213,ju=214,Vl=0,Gl=1,Wl=2,er=3,Xl=4,ql=5,Yl=6,Zl=7,df=0,Ju=1,Ku=2,mi=0,Qu=1,tp=2,ep=3,np=4,ip=5,sp=6,rp=7;var ff=300,nr=301,ir=302,jl=303,Jl=304,Oa=306,xs=1e3,gs=1001,Kl=1002,Dn=1003,op=1004;var _o=1005;var ui=1006,al=1007;var ys=1008;var Ri=1009,uf=1010,pf=1011,Hr=1012,dh=1013,vs=1014,pi=1015,eo=1016,fh=1017,uh=1018,sr=1020,mf=35902,gf=1021,yf=1022,Wn=1023,xf=1024,vf=1025,Ks=1026,rr=1027,ph=1028,mh=1029,_f=1030,gh=1031;var yh=1033,Jo=33776,Ko=33777,Qo=33778,ta=33779,Ql=35840,tc=35841,ec=35842,nc=35843,ic=36196,sc=37492,rc=37496,oc=37808,ac=37809,lc=37810,cc=37811,hc=37812,dc=37813,fc=37814,uc=37815,pc=37816,mc=37817,gc=37818,yc=37819,xc=37820,vc=37821,ea=36492,_c=36494,Mc=36495,Mf=36283,bc=36284,Sc=36285,wc=36286;var na=2300,Ec=2301,ll=2302,Qh=2400,td=2401,ed=2402;var ap=3200,lp=3201;var bf=0,cp=1,Wi="",Sn="srgb",dr="srgb-linear",Fa="linear",Ge="srgb";var Is=7680;var nd=519,hp=512,dp=513,fp=514,Sf=515,up=516,pp=517,mp=518,gp=519,Tc=35044;var id="300 es",Ti=2e3,ia=2001,ji=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let i=this._listeners[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],sd=1234567,Nr=Math.PI/180,$r=180/Math.PI;function gi(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Cn[n&255]+Cn[n>>8&255]+Cn[n>>16&255]+Cn[n>>24&255]+"-"+Cn[t&255]+Cn[t>>8&255]+"-"+Cn[t>>16&15|64]+Cn[t>>24&255]+"-"+Cn[e&63|128]+Cn[e>>8&255]+"-"+Cn[e>>16&255]+Cn[e>>24&255]+Cn[i&255]+Cn[i>>8&255]+Cn[i>>16&255]+Cn[i>>24&255]).toLowerCase()}function wn(n,t,e){return Math.max(t,Math.min(e,n))}function xh(n,t){return(n%t+t)%t}function yp(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function xp(n,t,e){return n!==t?(e-n)/(t-n):0}function Or(n,t,e){return(1-e)*n+e*t}function vp(n,t,e,i){return Or(n,t,1-Math.exp(-e*i))}function _p(n,t=1){return t-Math.abs(xh(n,t*2)-t)}function Mp(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function bp(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function Sp(n,t){return n+Math.floor(Math.random()*(t-n+1))}function wp(n,t){return n+Math.random()*(t-n)}function Ep(n){return n*(.5-Math.random())}function Tp(n){n!==void 0&&(sd=n);let t=sd+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Ap(n){return n*Nr}function Rp(n){return n*$r}function Cp(n){return(n&n-1)===0&&n!==0}function Ip(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Pp(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function kp(n,t,e,i,s){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),h=r((t+i)/2),u=o((t+i)/2),g=r((t-i)/2),f=o((t-i)/2),c=r((i-t)/2),d=o((i-t)/2);switch(s){case"XYX":n.set(a*u,l*g,l*f,a*h);break;case"YZY":n.set(l*f,a*u,l*g,a*h);break;case"ZXZ":n.set(l*g,l*f,a*u,a*h);break;case"XZX":n.set(a*u,l*d,l*c,a*h);break;case"YXY":n.set(l*c,a*u,l*d,a*h);break;case"ZYZ":n.set(l*d,l*c,a*u,a*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ii(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function $e(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var Ki={DEG2RAD:Nr,RAD2DEG:$r,generateUUID:gi,clamp:wn,euclideanModulo:xh,mapLinear:yp,inverseLerp:xp,lerp:Or,damp:vp,pingpong:_p,smoothstep:Mp,smootherstep:bp,randInt:Sp,randFloat:wp,randFloatSpread:Ep,seededRandom:Tp,degToRad:Ap,radToDeg:Rp,isPowerOfTwo:Cp,ceilPowerOfTwo:Ip,floorPowerOfTwo:Pp,setQuaternionFromProperEuler:kp,normalize:$e,denormalize:ii},zt=class n{constructor(t=0,e=0){n.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(wn(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Pe=class n{constructor(t,e,i,s,r,o,a,l,h){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,h)}set(t,e,i,s,r,o,a,l,h){let u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],h=i[1],u=i[4],g=i[7],f=i[2],c=i[5],d=i[8],M=s[0],m=s[3],p=s[6],S=s[1],y=s[4],_=s[7],N=s[2],w=s[5],R=s[8];return r[0]=o*M+a*S+l*N,r[3]=o*m+a*y+l*w,r[6]=o*p+a*_+l*R,r[1]=h*M+u*S+g*N,r[4]=h*m+u*y+g*w,r[7]=h*p+u*_+g*R,r[2]=f*M+c*S+d*N,r[5]=f*m+c*y+d*w,r[8]=f*p+c*_+d*R,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],h=t[7],u=t[8];return e*o*u-e*a*h-i*r*u+i*a*l+s*r*h-s*o*l}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],h=t[7],u=t[8],g=u*o-a*h,f=a*l-u*r,c=h*r-o*l,d=e*g+i*f+s*c;if(d===0)return this.set(0,0,0,0,0,0,0,0,0);let M=1/d;return t[0]=g*M,t[1]=(s*h-u*i)*M,t[2]=(a*i-s*o)*M,t[3]=f*M,t[4]=(u*e-s*l)*M,t[5]=(s*r-a*e)*M,t[6]=c*M,t[7]=(i*l-h*e)*M,t[8]=(o*e-i*r)*M,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){let l=Math.cos(r),h=Math.sin(r);return this.set(i*l,i*h,-i*(l*o+h*a)+o+t,-s*h,s*l,-s*(-h*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(cl.makeScale(t,e)),this}rotate(t){return this.premultiply(cl.makeRotation(-t)),this}translate(t,e){return this.premultiply(cl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},cl=new Pe;function wf(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function sa(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Lp(){let n=sa("canvas");return n.style.display="block",n}var rd={};function Dr(n){n in rd||(rd[n]=!0,console.warn(n))}function Dp(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function Up(n){let t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Np(n){let t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var ze={enabled:!0,workingColorSpace:dr,spaces:{},convert:function(n,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===Ge&&(n.r=Ai(n.r),n.g=Ai(n.g),n.b=Ai(n.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(n.applyMatrix3(this.spaces[t].toXYZ),n.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===Ge&&(n.r=Qs(n.r),n.g=Qs(n.g),n.b=Qs(n.b))),n},fromWorkingColorSpace:function(n,t){return this.convert(n,this.workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Wi?Fa:this.spaces[n].transfer},getLuminanceCoefficients:function(n,t=this.workingColorSpace){return n.fromArray(this.spaces[t].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,t,e){return n.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function Ai(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Qs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var od=[.64,.33,.3,.6,.15,.06],ad=[.2126,.7152,.0722],ld=[.3127,.329],cd=new Pe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),hd=new Pe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ze.define({[dr]:{primaries:od,whitePoint:ld,transfer:Fa,toXYZ:cd,fromXYZ:hd,luminanceCoefficients:ad,workingColorSpaceConfig:{unpackColorSpace:Sn},outputColorSpaceConfig:{drawingBufferColorSpace:Sn}},[Sn]:{primaries:od,whitePoint:ld,transfer:Ge,toXYZ:cd,fromXYZ:hd,luminanceCoefficients:ad,outputColorSpaceConfig:{drawingBufferColorSpace:Sn}}});var Ps,Ac=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ps===void 0&&(Ps=sa("canvas")),Ps.width=t.width,Ps.height=t.height;let i=Ps.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Ps}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=sa("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ai(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Ai(e[i]/255)*255):e[i]=Ai(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Op=0,ra=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Op++}),this.uuid=gi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(hl(s[o].image)):r.push(hl(s[o]))}else r=hl(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function hl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Ac.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Fp=0,On=class n extends ji{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=gs,s=gs,r=ui,o=ys,a=Wn,l=Ri,h=n.DEFAULT_ANISOTROPY,u=Wi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Fp++}),this.uuid=gi(),this.name="",this.source=new ra(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=h,this.format=a,this.internalFormat=null,this.type=l,this.offset=new zt(0,0),this.repeat=new zt(1,1),this.center=new zt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Pe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ff)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case xs:t.x=t.x-Math.floor(t.x);break;case gs:t.x=t.x<0?0:1;break;case Kl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case xs:t.y=t.y-Math.floor(t.y);break;case gs:t.y=t.y<0?0:1;break;case Kl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};On.DEFAULT_IMAGE=null;On.DEFAULT_MAPPING=ff;On.DEFAULT_ANISOTROPY=1;var rn=class n{constructor(t=0,e=0,i=0,s=1){n.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,l=t.elements,h=l[0],u=l[4],g=l[8],f=l[1],c=l[5],d=l[9],M=l[2],m=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(g-M)<.01&&Math.abs(d-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(g+M)<.1&&Math.abs(d+m)<.1&&Math.abs(h+c+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let y=(h+1)/2,_=(c+1)/2,N=(p+1)/2,w=(u+f)/4,R=(g+M)/4,A=(d+m)/4;return y>_&&y>N?y<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(y),s=w/i,r=R/i):_>N?_<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),i=w/s,r=A/s):N<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(N),i=R/r,s=A/r),this.set(i,s,r,e),this}let S=Math.sqrt((m-d)*(m-d)+(g-M)*(g-M)+(f-u)*(f-u));return Math.abs(S)<.001&&(S=1),this.x=(m-d)/S,this.y=(g-M)/S,this.z=(f-u)/S,this.w=Math.acos((h+c+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Rc=class extends ji{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new rn(0,0,t,e),this.scissorTest=!1,this.viewport=new rn(0,0,t,e);let s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ui,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let r=new On(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new ra(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ci=class extends Rc{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},oa=class extends On{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=gs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Cc=class extends On{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=gs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Xn=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],h=i[s+1],u=i[s+2],g=i[s+3],f=r[o+0],c=r[o+1],d=r[o+2],M=r[o+3];if(a===0){t[e+0]=l,t[e+1]=h,t[e+2]=u,t[e+3]=g;return}if(a===1){t[e+0]=f,t[e+1]=c,t[e+2]=d,t[e+3]=M;return}if(g!==M||l!==f||h!==c||u!==d){let m=1-a,p=l*f+h*c+u*d+g*M,S=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){let N=Math.sqrt(y),w=Math.atan2(N,p*S);m=Math.sin(m*w)/N,a=Math.sin(a*w)/N}let _=a*S;if(l=l*m+f*_,h=h*m+c*_,u=u*m+d*_,g=g*m+M*_,m===1-a){let N=1/Math.sqrt(l*l+h*h+u*u+g*g);l*=N,h*=N,u*=N,g*=N}}t[e]=l,t[e+1]=h,t[e+2]=u,t[e+3]=g}static multiplyQuaternionsFlat(t,e,i,s,r,o){let a=i[s],l=i[s+1],h=i[s+2],u=i[s+3],g=r[o],f=r[o+1],c=r[o+2],d=r[o+3];return t[e]=a*d+u*g+l*c-h*f,t[e+1]=l*d+u*f+h*g-a*c,t[e+2]=h*d+u*c+a*f-l*g,t[e+3]=u*d-a*g-l*f-h*c,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,h=a(i/2),u=a(s/2),g=a(r/2),f=l(i/2),c=l(s/2),d=l(r/2);switch(o){case"XYZ":this._x=f*u*g+h*c*d,this._y=h*c*g-f*u*d,this._z=h*u*d+f*c*g,this._w=h*u*g-f*c*d;break;case"YXZ":this._x=f*u*g+h*c*d,this._y=h*c*g-f*u*d,this._z=h*u*d-f*c*g,this._w=h*u*g+f*c*d;break;case"ZXY":this._x=f*u*g-h*c*d,this._y=h*c*g+f*u*d,this._z=h*u*d+f*c*g,this._w=h*u*g-f*c*d;break;case"ZYX":this._x=f*u*g-h*c*d,this._y=h*c*g+f*u*d,this._z=h*u*d-f*c*g,this._w=h*u*g+f*c*d;break;case"YZX":this._x=f*u*g+h*c*d,this._y=h*c*g+f*u*d,this._z=h*u*d-f*c*g,this._w=h*u*g-f*c*d;break;case"XZY":this._x=f*u*g-h*c*d,this._y=h*c*g-f*u*d,this._z=h*u*d+f*c*g,this._w=h*u*g+f*c*d;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],h=e[2],u=e[6],g=e[10],f=i+a+g;if(f>0){let c=.5/Math.sqrt(f+1);this._w=.25/c,this._x=(u-l)*c,this._y=(r-h)*c,this._z=(o-s)*c}else if(i>a&&i>g){let c=2*Math.sqrt(1+i-a-g);this._w=(u-l)/c,this._x=.25*c,this._y=(s+o)/c,this._z=(r+h)/c}else if(a>g){let c=2*Math.sqrt(1+a-i-g);this._w=(r-h)/c,this._x=(s+o)/c,this._y=.25*c,this._z=(l+u)/c}else{let c=2*Math.sqrt(1+g-i-a);this._w=(o-s)/c,this._x=(r+h)/c,this._y=(l+u)/c,this._z=.25*c}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(wn(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,h=e._z,u=e._w;return this._x=i*u+o*a+s*h-r*l,this._y=s*u+o*l+r*a-i*h,this._z=r*u+o*h+i*l-s*a,this._w=o*u-i*a-s*l-r*h,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+i*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let c=1-e;return this._w=c*o+e*this._w,this._x=c*i+e*this._x,this._y=c*s+e*this._y,this._z=c*r+e*this._z,this.normalize(),this}let h=Math.sqrt(l),u=Math.atan2(h,a),g=Math.sin((1-e)*u)/h,f=Math.sin(e*u)/h;return this._w=o*g+this._w*f,this._x=i*g+this._x*f,this._y=s*g+this._y*f,this._z=r*g+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},$=class n{constructor(t=0,e=0,i=0){n.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(dd.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(dd.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,h=2*(o*s-a*i),u=2*(a*e-r*s),g=2*(r*i-o*e);return this.x=e+l*h+o*g-a*u,this.y=i+l*u+a*h-r*g,this.z=s+l*g+r*u-o*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return dl.copy(this).projectOnVector(t),this.sub(dl)}reflect(t){return this.sub(dl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(wn(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},dl=new $,dd=new Xn,Ii=class{constructor(t=new $(1/0,1/0,1/0),e=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(ti.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(ti.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=ti.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,ti):ti.fromBufferAttribute(r,o),ti.applyMatrix4(t.matrixWorld),this.expandByPoint(ti);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Mo.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Mo.copy(i.boundingBox)),Mo.applyMatrix4(t.matrixWorld),this.union(Mo)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ti),ti.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(wr),bo.subVectors(this.max,wr),ks.subVectors(t.a,wr),Ls.subVectors(t.b,wr),Ds.subVectors(t.c,wr),Bi.subVectors(Ls,ks),zi.subVectors(Ds,Ls),as.subVectors(ks,Ds);let e=[0,-Bi.z,Bi.y,0,-zi.z,zi.y,0,-as.z,as.y,Bi.z,0,-Bi.x,zi.z,0,-zi.x,as.z,0,-as.x,-Bi.y,Bi.x,0,-zi.y,zi.x,0,-as.y,as.x,0];return!fl(e,ks,Ls,Ds,bo)||(e=[1,0,0,0,1,0,0,0,1],!fl(e,ks,Ls,Ds,bo))?!1:(So.crossVectors(Bi,zi),e=[So.x,So.y,So.z],fl(e,ks,Ls,Ds,bo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ti).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ti).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(vi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),vi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),vi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),vi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),vi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),vi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),vi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),vi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(vi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},vi=[new $,new $,new $,new $,new $,new $,new $,new $],ti=new $,Mo=new Ii,ks=new $,Ls=new $,Ds=new $,Bi=new $,zi=new $,as=new $,wr=new $,bo=new $,So=new $,ls=new $;function fl(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){ls.fromArray(n,r);let a=s.x*Math.abs(ls.x)+s.y*Math.abs(ls.y)+s.z*Math.abs(ls.z),l=t.dot(ls),h=e.dot(ls),u=i.dot(ls);if(Math.max(-Math.max(l,h,u),Math.min(l,h,u))>a)return!1}return!0}var Bp=new Ii,Er=new $,ul=new $,Ji=class{constructor(t=new $,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):Bp.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Er.subVectors(t,this.center);let e=Er.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Er,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ul.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Er.copy(t.center).add(ul)),this.expandByPoint(Er.copy(t.center).sub(ul))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},_i=new $,pl=new $,wo=new $,Hi=new $,ml=new $,Eo=new $,gl=new $,aa=class{constructor(t=new $,e=new $(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,_i)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=_i.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(_i.copy(this.origin).addScaledVector(this.direction,e),_i.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){pl.copy(t).add(e).multiplyScalar(.5),wo.copy(e).sub(t).normalize(),Hi.copy(this.origin).sub(pl);let r=t.distanceTo(e)*.5,o=-this.direction.dot(wo),a=Hi.dot(this.direction),l=-Hi.dot(wo),h=Hi.lengthSq(),u=Math.abs(1-o*o),g,f,c,d;if(u>0)if(g=o*l-a,f=o*a-l,d=r*u,g>=0)if(f>=-d)if(f<=d){let M=1/u;g*=M,f*=M,c=g*(g+o*f+2*a)+f*(o*g+f+2*l)+h}else f=r,g=Math.max(0,-(o*f+a)),c=-g*g+f*(f+2*l)+h;else f=-r,g=Math.max(0,-(o*f+a)),c=-g*g+f*(f+2*l)+h;else f<=-d?(g=Math.max(0,-(-o*r+a)),f=g>0?-r:Math.min(Math.max(-r,-l),r),c=-g*g+f*(f+2*l)+h):f<=d?(g=0,f=Math.min(Math.max(-r,-l),r),c=f*(f+2*l)+h):(g=Math.max(0,-(o*r+a)),f=g>0?r:Math.min(Math.max(-r,-l),r),c=-g*g+f*(f+2*l)+h);else f=o>0?-r:r,g=Math.max(0,-(o*f+a)),c=-g*g+f*(f+2*l)+h;return i&&i.copy(this.origin).addScaledVector(this.direction,g),s&&s.copy(pl).addScaledVector(wo,f),c}intersectSphere(t,e){_i.subVectors(t.center,this.origin);let i=_i.dot(this.direction),s=_i.dot(_i)-i*i,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l,h=1/this.direction.x,u=1/this.direction.y,g=1/this.direction.z,f=this.origin;return h>=0?(i=(t.min.x-f.x)*h,s=(t.max.x-f.x)*h):(i=(t.max.x-f.x)*h,s=(t.min.x-f.x)*h),u>=0?(r=(t.min.y-f.y)*u,o=(t.max.y-f.y)*u):(r=(t.max.y-f.y)*u,o=(t.min.y-f.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),g>=0?(a=(t.min.z-f.z)*g,l=(t.max.z-f.z)*g):(a=(t.max.z-f.z)*g,l=(t.min.z-f.z)*g),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,_i)!==null}intersectTriangle(t,e,i,s,r){ml.subVectors(e,t),Eo.subVectors(i,t),gl.crossVectors(ml,Eo);let o=this.direction.dot(gl),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Hi.subVectors(this.origin,t);let l=a*this.direction.dot(Eo.crossVectors(Hi,Eo));if(l<0)return null;let h=a*this.direction.dot(ml.cross(Hi));if(h<0||l+h>o)return null;let u=-a*Hi.dot(gl);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Oe=class n{constructor(t,e,i,s,r,o,a,l,h,u,g,f,c,d,M,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,h,u,g,f,c,d,M,m)}set(t,e,i,s,r,o,a,l,h,u,g,f,c,d,M,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=h,p[6]=u,p[10]=g,p[14]=f,p[3]=c,p[7]=d,p[11]=M,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,i=t.elements,s=1/Us.setFromMatrixColumn(t,0).length(),r=1/Us.setFromMatrixColumn(t,1).length(),o=1/Us.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),h=Math.sin(s),u=Math.cos(r),g=Math.sin(r);if(t.order==="XYZ"){let f=o*u,c=o*g,d=a*u,M=a*g;e[0]=l*u,e[4]=-l*g,e[8]=h,e[1]=c+d*h,e[5]=f-M*h,e[9]=-a*l,e[2]=M-f*h,e[6]=d+c*h,e[10]=o*l}else if(t.order==="YXZ"){let f=l*u,c=l*g,d=h*u,M=h*g;e[0]=f+M*a,e[4]=d*a-c,e[8]=o*h,e[1]=o*g,e[5]=o*u,e[9]=-a,e[2]=c*a-d,e[6]=M+f*a,e[10]=o*l}else if(t.order==="ZXY"){let f=l*u,c=l*g,d=h*u,M=h*g;e[0]=f-M*a,e[4]=-o*g,e[8]=d+c*a,e[1]=c+d*a,e[5]=o*u,e[9]=M-f*a,e[2]=-o*h,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let f=o*u,c=o*g,d=a*u,M=a*g;e[0]=l*u,e[4]=d*h-c,e[8]=f*h+M,e[1]=l*g,e[5]=M*h+f,e[9]=c*h-d,e[2]=-h,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let f=o*l,c=o*h,d=a*l,M=a*h;e[0]=l*u,e[4]=M-f*g,e[8]=d*g+c,e[1]=g,e[5]=o*u,e[9]=-a*u,e[2]=-h*u,e[6]=c*g+d,e[10]=f-M*g}else if(t.order==="XZY"){let f=o*l,c=o*h,d=a*l,M=a*h;e[0]=l*u,e[4]=-g,e[8]=h*u,e[1]=f*g+M,e[5]=o*u,e[9]=c*g-d,e[2]=d*g-c,e[6]=a*u,e[10]=M*g+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(zp,t,Hp)}lookAt(t,e,i){let s=this.elements;return Vn.subVectors(t,e),Vn.lengthSq()===0&&(Vn.z=1),Vn.normalize(),$i.crossVectors(i,Vn),$i.lengthSq()===0&&(Math.abs(i.z)===1?Vn.x+=1e-4:Vn.z+=1e-4,Vn.normalize(),$i.crossVectors(i,Vn)),$i.normalize(),To.crossVectors(Vn,$i),s[0]=$i.x,s[4]=To.x,s[8]=Vn.x,s[1]=$i.y,s[5]=To.y,s[9]=Vn.y,s[2]=$i.z,s[6]=To.z,s[10]=Vn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],h=i[12],u=i[1],g=i[5],f=i[9],c=i[13],d=i[2],M=i[6],m=i[10],p=i[14],S=i[3],y=i[7],_=i[11],N=i[15],w=s[0],R=s[4],A=s[8],v=s[12],x=s[1],b=s[5],C=s[9],E=s[13],T=s[2],k=s[6],D=s[10],O=s[14],z=s[3],q=s[7],X=s[11],U=s[15];return r[0]=o*w+a*x+l*T+h*z,r[4]=o*R+a*b+l*k+h*q,r[8]=o*A+a*C+l*D+h*X,r[12]=o*v+a*E+l*O+h*U,r[1]=u*w+g*x+f*T+c*z,r[5]=u*R+g*b+f*k+c*q,r[9]=u*A+g*C+f*D+c*X,r[13]=u*v+g*E+f*O+c*U,r[2]=d*w+M*x+m*T+p*z,r[6]=d*R+M*b+m*k+p*q,r[10]=d*A+M*C+m*D+p*X,r[14]=d*v+M*E+m*O+p*U,r[3]=S*w+y*x+_*T+N*z,r[7]=S*R+y*b+_*k+N*q,r[11]=S*A+y*C+_*D+N*X,r[15]=S*v+y*E+_*O+N*U,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],h=t[13],u=t[2],g=t[6],f=t[10],c=t[14],d=t[3],M=t[7],m=t[11],p=t[15];return d*(+r*l*g-s*h*g-r*a*f+i*h*f+s*a*c-i*l*c)+M*(+e*l*c-e*h*f+r*o*f-s*o*c+s*h*u-r*l*u)+m*(+e*h*g-e*a*c-r*o*g+i*o*c+r*a*u-i*h*u)+p*(-s*a*u-e*l*g+e*a*f+s*o*g-i*o*f+i*l*u)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],h=t[7],u=t[8],g=t[9],f=t[10],c=t[11],d=t[12],M=t[13],m=t[14],p=t[15],S=g*m*h-M*f*h+M*l*c-a*m*c-g*l*p+a*f*p,y=d*f*h-u*m*h-d*l*c+o*m*c+u*l*p-o*f*p,_=u*M*h-d*g*h+d*a*c-o*M*c-u*a*p+o*g*p,N=d*g*l-u*M*l-d*a*f+o*M*f+u*a*m-o*g*m,w=e*S+i*y+s*_+r*N;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/w;return t[0]=S*R,t[1]=(M*f*r-g*m*r-M*s*c+i*m*c+g*s*p-i*f*p)*R,t[2]=(a*m*r-M*l*r+M*s*h-i*m*h-a*s*p+i*l*p)*R,t[3]=(g*l*r-a*f*r-g*s*h+i*f*h+a*s*c-i*l*c)*R,t[4]=y*R,t[5]=(u*m*r-d*f*r+d*s*c-e*m*c-u*s*p+e*f*p)*R,t[6]=(d*l*r-o*m*r-d*s*h+e*m*h+o*s*p-e*l*p)*R,t[7]=(o*f*r-u*l*r+u*s*h-e*f*h-o*s*c+e*l*c)*R,t[8]=_*R,t[9]=(d*g*r-u*M*r-d*i*c+e*M*c+u*i*p-e*g*p)*R,t[10]=(o*M*r-d*a*r+d*i*h-e*M*h-o*i*p+e*a*p)*R,t[11]=(u*a*r-o*g*r-u*i*h+e*g*h+o*i*c-e*a*c)*R,t[12]=N*R,t[13]=(u*M*s-d*g*s+d*i*f-e*M*f-u*i*m+e*g*m)*R,t[14]=(d*a*s-o*M*s-d*i*l+e*M*l+o*i*m-e*a*m)*R,t[15]=(o*g*s-u*a*s+u*i*l-e*g*l-o*i*f+e*a*f)*R,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,h=r*o,u=r*a;return this.set(h*o+i,h*a-s*l,h*l+s*a,0,h*a+s*l,u*a+i,u*l-s*o,0,h*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,h=r+r,u=o+o,g=a+a,f=r*h,c=r*u,d=r*g,M=o*u,m=o*g,p=a*g,S=l*h,y=l*u,_=l*g,N=i.x,w=i.y,R=i.z;return s[0]=(1-(M+p))*N,s[1]=(c+_)*N,s[2]=(d-y)*N,s[3]=0,s[4]=(c-_)*w,s[5]=(1-(f+p))*w,s[6]=(m+S)*w,s[7]=0,s[8]=(d+y)*R,s[9]=(m-S)*R,s[10]=(1-(f+M))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements,r=Us.set(s[0],s[1],s[2]).length(),o=Us.set(s[4],s[5],s[6]).length(),a=Us.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],ei.copy(this);let h=1/r,u=1/o,g=1/a;return ei.elements[0]*=h,ei.elements[1]*=h,ei.elements[2]*=h,ei.elements[4]*=u,ei.elements[5]*=u,ei.elements[6]*=u,ei.elements[8]*=g,ei.elements[9]*=g,ei.elements[10]*=g,e.setFromRotationMatrix(ei),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,s,r,o,a=Ti){let l=this.elements,h=2*r/(e-t),u=2*r/(i-s),g=(e+t)/(e-t),f=(i+s)/(i-s),c,d;if(a===Ti)c=-(o+r)/(o-r),d=-2*o*r/(o-r);else if(a===ia)c=-o/(o-r),d=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=g,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=c,l[14]=d,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=Ti){let l=this.elements,h=1/(e-t),u=1/(i-s),g=1/(o-r),f=(e+t)*h,c=(i+s)*u,d,M;if(a===Ti)d=(o+r)*g,M=-2*g;else if(a===ia)d=r*g,M=-1*g;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*h,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-c,l[2]=0,l[6]=0,l[10]=M,l[14]=-d,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},Us=new $,ei=new Oe,zp=new $(0,0,0),Hp=new $(1,1,1),$i=new $,To=new $,Vn=new $,fd=new Oe,ud=new Xn,si=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],h=s[5],u=s[9],g=s[2],f=s[6],c=s[10];switch(e){case"XYZ":this._y=Math.asin(wn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,c),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,h),this._z=0);break;case"YXZ":this._x=Math.asin(-wn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,c),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-g,r),this._z=0);break;case"ZXY":this._x=Math.asin(wn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-g,c),this._z=Math.atan2(-o,h)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-wn(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(f,c),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,h));break;case"YZX":this._z=Math.asin(wn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,h),this._y=Math.atan2(-g,r)):(this._x=0,this._y=Math.atan2(a,c));break;case"XZY":this._z=Math.asin(-wn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,h),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,c),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return fd.makeRotationFromQuaternion(t),this.setFromRotationMatrix(fd,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ud.setFromEuler(this),this.setFromQuaternion(ud,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};si.DEFAULT_ORDER="XYZ";var la=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},$p=0,pd=new $,Ns=new Xn,Mi=new Oe,Ao=new $,Tr=new $,Vp=new $,Gp=new Xn,md=new $(1,0,0),gd=new $(0,1,0),yd=new $(0,0,1),xd={type:"added"},Wp={type:"removed"},Os={type:"childadded",child:null},yl={type:"childremoved",child:null},We=class n extends ji{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$p++}),this.uuid=gi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new $,e=new si,i=new Xn,s=new $(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Oe},normalMatrix:{value:new Pe}}),this.matrix=new Oe,this.matrixWorld=new Oe,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new la,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ns.setFromAxisAngle(t,e),this.quaternion.multiply(Ns),this}rotateOnWorldAxis(t,e){return Ns.setFromAxisAngle(t,e),this.quaternion.premultiply(Ns),this}rotateX(t){return this.rotateOnAxis(md,t)}rotateY(t){return this.rotateOnAxis(gd,t)}rotateZ(t){return this.rotateOnAxis(yd,t)}translateOnAxis(t,e){return pd.copy(t).applyQuaternion(this.quaternion),this.position.add(pd.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(md,t)}translateY(t){return this.translateOnAxis(gd,t)}translateZ(t){return this.translateOnAxis(yd,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Mi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Ao.copy(t):Ao.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Tr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mi.lookAt(Tr,Ao,this.up):Mi.lookAt(Ao,Tr,this.up),this.quaternion.setFromRotationMatrix(Mi),s&&(Mi.extractRotation(s.matrixWorld),Ns.setFromRotationMatrix(Mi),this.quaternion.premultiply(Ns.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(xd),Os.child=t,this.dispatchEvent(Os),Os.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Wp),yl.child=t,this.dispatchEvent(yl),yl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Mi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Mi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Mi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(xd),Os.child=t,this.dispatchEvent(Os),Os.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Tr,t,Vp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Tr,Gp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let h=0,u=l.length;h<u;h++){let g=l[h];r(t.shapes,g)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,h=this.material.length;l<h;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),h=o(t.textures),u=o(t.images),g=o(t.shapes),f=o(t.skeletons),c=o(t.animations),d=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),h.length>0&&(i.textures=h),u.length>0&&(i.images=u),g.length>0&&(i.shapes=g),f.length>0&&(i.skeletons=f),c.length>0&&(i.animations=c),d.length>0&&(i.nodes=d)}return i.object=s,i;function o(a){let l=[];for(let h in a){let u=a[h];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}};We.DEFAULT_UP=new $(0,1,0);We.DEFAULT_MATRIX_AUTO_UPDATE=!0;We.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ni=new $,bi=new $,xl=new $,Si=new $,Fs=new $,Bs=new $,vd=new $,vl=new $,_l=new $,Ml=new $,bl=new rn,Sl=new rn,wl=new rn,Xi=class n{constructor(t=new $,e=new $,i=new $){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),ni.subVectors(t,e),s.cross(ni);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){ni.subVectors(s,e),bi.subVectors(i,e),xl.subVectors(t,e);let o=ni.dot(ni),a=ni.dot(bi),l=ni.dot(xl),h=bi.dot(bi),u=bi.dot(xl),g=o*h-a*a;if(g===0)return r.set(0,0,0),null;let f=1/g,c=(h*l-a*u)*f,d=(o*u-a*l)*f;return r.set(1-c-d,d,c)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Si)===null?!1:Si.x>=0&&Si.y>=0&&Si.x+Si.y<=1}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,Si)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Si.x),l.addScaledVector(o,Si.y),l.addScaledVector(a,Si.z),l)}static getInterpolatedAttribute(t,e,i,s,r,o){return bl.setScalar(0),Sl.setScalar(0),wl.setScalar(0),bl.fromBufferAttribute(t,e),Sl.fromBufferAttribute(t,i),wl.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(bl,r.x),o.addScaledVector(Sl,r.y),o.addScaledVector(wl,r.z),o}static isFrontFacing(t,e,i,s){return ni.subVectors(i,e),bi.subVectors(t,e),ni.cross(bi).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ni.subVectors(this.c,this.b),bi.subVectors(this.a,this.b),ni.cross(bi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,o,a;Fs.subVectors(s,i),Bs.subVectors(r,i),vl.subVectors(t,i);let l=Fs.dot(vl),h=Bs.dot(vl);if(l<=0&&h<=0)return e.copy(i);_l.subVectors(t,s);let u=Fs.dot(_l),g=Bs.dot(_l);if(u>=0&&g<=u)return e.copy(s);let f=l*g-u*h;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(i).addScaledVector(Fs,o);Ml.subVectors(t,r);let c=Fs.dot(Ml),d=Bs.dot(Ml);if(d>=0&&c<=d)return e.copy(r);let M=c*h-l*d;if(M<=0&&h>=0&&d<=0)return a=h/(h-d),e.copy(i).addScaledVector(Bs,a);let m=u*d-c*g;if(m<=0&&g-u>=0&&c-d>=0)return vd.subVectors(r,s),a=(g-u)/(g-u+(c-d)),e.copy(s).addScaledVector(vd,a);let p=1/(m+M+f);return o=M*p,a=f*p,e.copy(i).addScaledVector(Fs,o).addScaledVector(Bs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Ef={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vi={h:0,s:0,l:0},Ro={h:0,s:0,l:0};function El(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var de=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Sn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ze.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=ze.workingColorSpace){return this.r=t,this.g=e,this.b=i,ze.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=ze.workingColorSpace){if(t=xh(t,1),e=wn(e,0,1),i=wn(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=El(o,r,t+1/3),this.g=El(o,r,t),this.b=El(o,r,t-1/3)}return ze.toWorkingColorSpace(this,s),this}setStyle(t,e=Sn){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Sn){let i=Ef[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ai(t.r),this.g=Ai(t.g),this.b=Ai(t.b),this}copyLinearToSRGB(t){return this.r=Qs(t.r),this.g=Qs(t.g),this.b=Qs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Sn){return ze.fromWorkingColorSpace(In.copy(this),t),Math.round(wn(In.r*255,0,255))*65536+Math.round(wn(In.g*255,0,255))*256+Math.round(wn(In.b*255,0,255))}getHexString(t=Sn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ze.workingColorSpace){ze.fromWorkingColorSpace(In.copy(this),e);let i=In.r,s=In.g,r=In.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,h,u=(a+o)/2;if(a===o)l=0,h=0;else{let g=o-a;switch(h=u<=.5?g/(o+a):g/(2-o-a),o){case i:l=(s-r)/g+(s<r?6:0);break;case s:l=(r-i)/g+2;break;case r:l=(i-s)/g+4;break}l/=6}return t.h=l,t.s=h,t.l=u,t}getRGB(t,e=ze.workingColorSpace){return ze.fromWorkingColorSpace(In.copy(this),e),t.r=In.r,t.g=In.g,t.b=In.b,t}getStyle(t=Sn){ze.fromWorkingColorSpace(In.copy(this),t);let e=In.r,i=In.g,s=In.b;return t!==Sn?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Vi),this.setHSL(Vi.h+t,Vi.s+e,Vi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Vi),t.getHSL(Ro);let i=Or(Vi.h,Ro.h,e),s=Or(Vi.s,Ro.s,e),r=Or(Vi.l,Ro.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},In=new de;de.NAMES=Ef;var Xp=0,Pi=class extends ji{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Xp++}),this.uuid=gi(),this.name="",this.blending=Js,this.side=Zi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Hl,this.blendDst=$l,this.blendEquation=ps,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new de(0,0,0),this.blendAlpha=0,this.depthFunc=er,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=nd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Is,this.stencilZFail=Is,this.stencilZPass=Is,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Js&&(i.blending=this.blending),this.side!==Zi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Hl&&(i.blendSrc=this.blendSrc),this.blendDst!==$l&&(i.blendDst=this.blendDst),this.blendEquation!==ps&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==er&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==nd&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Is&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Is&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Is&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Fn=class extends Pi{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new de(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new si,this.combine=df,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var dn=new $,Co=new zt,Je=class{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Tc,this.updateRanges=[],this.gpuType=pi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Co.fromBufferAttribute(this,e),Co.applyMatrix3(t),this.setXY(e,Co.x,Co.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)dn.fromBufferAttribute(this,e),dn.applyMatrix3(t),this.setXYZ(e,dn.x,dn.y,dn.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)dn.fromBufferAttribute(this,e),dn.applyMatrix4(t),this.setXYZ(e,dn.x,dn.y,dn.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)dn.fromBufferAttribute(this,e),dn.applyNormalMatrix(t),this.setXYZ(e,dn.x,dn.y,dn.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)dn.fromBufferAttribute(this,e),dn.transformDirection(t),this.setXYZ(e,dn.x,dn.y,dn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=ii(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=$e(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ii(e,this.array)),e}setX(t,e){return this.normalized&&(e=$e(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ii(e,this.array)),e}setY(t,e){return this.normalized&&(e=$e(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ii(e,this.array)),e}setZ(t,e){return this.normalized&&(e=$e(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ii(e,this.array)),e}setW(t,e){return this.normalized&&(e=$e(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=$e(e,this.array),i=$e(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=$e(e,this.array),i=$e(i,this.array),s=$e(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=$e(e,this.array),i=$e(i,this.array),s=$e(s,this.array),r=$e(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Tc&&(t.usage=this.usage),t}};var ca=class extends Je{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var ha=class extends Je{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var Ae=class extends Je{constructor(t,e,i){super(new Float32Array(t),e,i)}},qp=0,Yn=new Oe,Tl=new We,zs=new $,Gn=new Ii,Ar=new Ii,bn=new $,Xe=class n extends ji{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:qp++}),this.uuid=gi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(wf(t)?ha:ca)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Pe().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Yn.makeRotationFromQuaternion(t),this.applyMatrix4(Yn),this}rotateX(t){return Yn.makeRotationX(t),this.applyMatrix4(Yn),this}rotateY(t){return Yn.makeRotationY(t),this.applyMatrix4(Yn),this}rotateZ(t){return Yn.makeRotationZ(t),this.applyMatrix4(Yn),this}translate(t,e,i){return Yn.makeTranslation(t,e,i),this.applyMatrix4(Yn),this}scale(t,e,i){return Yn.makeScale(t,e,i),this.applyMatrix4(Yn),this}lookAt(t){return Tl.lookAt(t),Tl.updateMatrix(),this.applyMatrix4(Tl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zs).negate(),this.translate(zs.x,zs.y,zs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ae(i,3))}else{for(let i=0,s=e.count;i<s;i++){let r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ii);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];Gn.setFromBufferAttribute(r),this.morphTargetsRelative?(bn.addVectors(this.boundingBox.min,Gn.min),this.boundingBox.expandByPoint(bn),bn.addVectors(this.boundingBox.max,Gn.max),this.boundingBox.expandByPoint(bn)):(this.boundingBox.expandByPoint(Gn.min),this.boundingBox.expandByPoint(Gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ji);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(t){let i=this.boundingSphere.center;if(Gn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Ar.setFromBufferAttribute(a),this.morphTargetsRelative?(bn.addVectors(Gn.min,Ar.min),Gn.expandByPoint(bn),bn.addVectors(Gn.max,Ar.max),Gn.expandByPoint(bn)):(Gn.expandByPoint(Ar.min),Gn.expandByPoint(Ar.max))}Gn.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)bn.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(bn));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let h=0,u=a.count;h<u;h++)bn.fromBufferAttribute(a,h),l&&(zs.fromBufferAttribute(t,h),bn.add(zs)),s=Math.max(s,i.distanceToSquared(bn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Je(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let A=0;A<i.count;A++)a[A]=new $,l[A]=new $;let h=new $,u=new $,g=new $,f=new zt,c=new zt,d=new zt,M=new $,m=new $;function p(A,v,x){h.fromBufferAttribute(i,A),u.fromBufferAttribute(i,v),g.fromBufferAttribute(i,x),f.fromBufferAttribute(r,A),c.fromBufferAttribute(r,v),d.fromBufferAttribute(r,x),u.sub(h),g.sub(h),c.sub(f),d.sub(f);let b=1/(c.x*d.y-d.x*c.y);isFinite(b)&&(M.copy(u).multiplyScalar(d.y).addScaledVector(g,-c.y).multiplyScalar(b),m.copy(g).multiplyScalar(c.x).addScaledVector(u,-d.x).multiplyScalar(b),a[A].add(M),a[v].add(M),a[x].add(M),l[A].add(m),l[v].add(m),l[x].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let A=0,v=S.length;A<v;++A){let x=S[A],b=x.start,C=x.count;for(let E=b,T=b+C;E<T;E+=3)p(t.getX(E+0),t.getX(E+1),t.getX(E+2))}let y=new $,_=new $,N=new $,w=new $;function R(A){N.fromBufferAttribute(s,A),w.copy(N);let v=a[A];y.copy(v),y.sub(N.multiplyScalar(N.dot(v))).normalize(),_.crossVectors(w,v);let b=_.dot(l[A])<0?-1:1;o.setXYZW(A,y.x,y.y,y.z,b)}for(let A=0,v=S.length;A<v;++A){let x=S[A],b=x.start,C=x.count;for(let E=b,T=b+C;E<T;E+=3)R(t.getX(E+0)),R(t.getX(E+1)),R(t.getX(E+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Je(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,c=i.count;f<c;f++)i.setXYZ(f,0,0,0);let s=new $,r=new $,o=new $,a=new $,l=new $,h=new $,u=new $,g=new $;if(t)for(let f=0,c=t.count;f<c;f+=3){let d=t.getX(f+0),M=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,d),r.fromBufferAttribute(e,M),o.fromBufferAttribute(e,m),u.subVectors(o,r),g.subVectors(s,r),u.cross(g),a.fromBufferAttribute(i,d),l.fromBufferAttribute(i,M),h.fromBufferAttribute(i,m),a.add(u),l.add(u),h.add(u),i.setXYZ(d,a.x,a.y,a.z),i.setXYZ(M,l.x,l.y,l.z),i.setXYZ(m,h.x,h.y,h.z)}else for(let f=0,c=e.count;f<c;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),u.subVectors(o,r),g.subVectors(s,r),u.cross(g),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)bn.fromBufferAttribute(t,e),bn.normalize(),t.setXYZ(e,bn.x,bn.y,bn.z)}toNonIndexed(){function t(a,l){let h=a.array,u=a.itemSize,g=a.normalized,f=new h.constructor(l.length*u),c=0,d=0;for(let M=0,m=l.length;M<m;M++){a.isInterleavedBufferAttribute?c=l[M]*a.data.stride+a.offset:c=l[M]*u;for(let p=0;p<u;p++)f[d++]=h[c++]}return new Je(f,u,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],h=t(l,i);e.setAttribute(a,h)}let r=this.morphAttributes;for(let a in r){let l=[],h=r[a];for(let u=0,g=h.length;u<g;u++){let f=h[u],c=t(f,i);l.push(c)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let h=o[a];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let h in l)l[h]!==void 0&&(t[h]=l[h]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let h=i[l];t.data.attributes[l]=h.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let h=this.morphAttributes[l],u=[];for(let g=0,f=h.length;g<f;g++){let c=h[g];u.push(c.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone(e));let s=t.attributes;for(let h in s){let u=s[h];this.setAttribute(h,u.clone(e))}let r=t.morphAttributes;for(let h in r){let u=[],g=r[h];for(let f=0,c=g.length;f<c;f++)u.push(g[f].clone(e));this.morphAttributes[h]=u}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let h=0,u=o.length;h<u;h++){let g=o[h];this.addGroup(g.start,g.count,g.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},_d=new Oe,cs=new aa,Io=new Ji,Md=new $,Po=new $,ko=new $,Lo=new $,Al=new $,Do=new $,bd=new $,Uo=new $,Ve=class extends We{constructor(t=new Xe,e=new Fn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Do.set(0,0,0);for(let l=0,h=r.length;l<h;l++){let u=a[l],g=r[l];u!==0&&(Al.fromBufferAttribute(g,t),o?Do.addScaledVector(Al,u):Do.addScaledVector(Al.sub(e),u))}e.add(Do)}return e}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Io.copy(i.boundingSphere),Io.applyMatrix4(r),cs.copy(t.ray).recast(t.near),!(Io.containsPoint(cs.origin)===!1&&(cs.intersectSphere(Io,Md)===null||cs.origin.distanceToSquared(Md)>(t.far-t.near)**2))&&(_d.copy(r).invert(),cs.copy(t.ray).applyMatrix4(_d),!(i.boundingBox!==null&&cs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,cs)))}_computeIntersections(t,e,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,h=r.attributes.uv,u=r.attributes.uv1,g=r.attributes.normal,f=r.groups,c=r.drawRange;if(a!==null)if(Array.isArray(o))for(let d=0,M=f.length;d<M;d++){let m=f[d],p=o[m.materialIndex],S=Math.max(m.start,c.start),y=Math.min(a.count,Math.min(m.start+m.count,c.start+c.count));for(let _=S,N=y;_<N;_+=3){let w=a.getX(_),R=a.getX(_+1),A=a.getX(_+2);s=No(this,p,t,i,h,u,g,w,R,A),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let d=Math.max(0,c.start),M=Math.min(a.count,c.start+c.count);for(let m=d,p=M;m<p;m+=3){let S=a.getX(m),y=a.getX(m+1),_=a.getX(m+2);s=No(this,o,t,i,h,u,g,S,y,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let d=0,M=f.length;d<M;d++){let m=f[d],p=o[m.materialIndex],S=Math.max(m.start,c.start),y=Math.min(l.count,Math.min(m.start+m.count,c.start+c.count));for(let _=S,N=y;_<N;_+=3){let w=_,R=_+1,A=_+2;s=No(this,p,t,i,h,u,g,w,R,A),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let d=Math.max(0,c.start),M=Math.min(l.count,c.start+c.count);for(let m=d,p=M;m<p;m+=3){let S=m,y=m+1,_=m+2;s=No(this,o,t,i,h,u,g,S,y,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function Yp(n,t,e,i,s,r,o,a){let l;if(t.side===En?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===Zi,a),l===null)return null;Uo.copy(a),Uo.applyMatrix4(n.matrixWorld);let h=e.ray.origin.distanceTo(Uo);return h<e.near||h>e.far?null:{distance:h,point:Uo.clone(),object:n}}function No(n,t,e,i,s,r,o,a,l,h){n.getVertexPosition(a,Po),n.getVertexPosition(l,ko),n.getVertexPosition(h,Lo);let u=Yp(n,t,e,i,Po,ko,Lo,bd);if(u){let g=new $;Xi.getBarycoord(bd,Po,ko,Lo,g),s&&(u.uv=Xi.getInterpolatedAttribute(s,a,l,h,g,new zt)),r&&(u.uv1=Xi.getInterpolatedAttribute(r,a,l,h,g,new zt)),o&&(u.normal=Xi.getInterpolatedAttribute(o,a,l,h,g,new $),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let f={a,b:l,c:h,normal:new $,materialIndex:0};Xi.getNormal(Po,ko,Lo,f.normal),u.face=f,u.barycoord=g}return u}var Be=class n extends Xe{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],h=[],u=[],g=[],f=0,c=0;d("z","y","x",-1,-1,i,e,t,o,r,0),d("z","y","x",1,-1,i,e,-t,o,r,1),d("x","z","y",1,1,t,i,e,s,o,2),d("x","z","y",1,-1,t,i,-e,s,o,3),d("x","y","z",1,-1,t,e,i,s,r,4),d("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Ae(h,3)),this.setAttribute("normal",new Ae(u,3)),this.setAttribute("uv",new Ae(g,2));function d(M,m,p,S,y,_,N,w,R,A,v){let x=_/R,b=N/A,C=_/2,E=N/2,T=w/2,k=R+1,D=A+1,O=0,z=0,q=new $;for(let X=0;X<D;X++){let U=X*b-E;for(let gt=0;gt<k;gt++){let At=gt*x-C;q[M]=At*S,q[m]=U*y,q[p]=T,h.push(q.x,q.y,q.z),q[M]=0,q[m]=0,q[p]=w>0?1:-1,u.push(q.x,q.y,q.z),g.push(gt/R),g.push(1-X/A),O+=1}}for(let X=0;X<A;X++)for(let U=0;U<R;U++){let gt=f+U+k*X,At=f+U+k*(X+1),P=f+(U+1)+k*(X+1),G=f+(U+1)+k*X;l.push(gt,At,G),l.push(At,P,G),z+=6}a.addGroup(c,z,v),c+=z,f+=O}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function or(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function kn(n){let t={};for(let e=0;e<n.length;e++){let i=or(n[e]);for(let s in i)t[s]=i[s]}return t}function Zp(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Tf(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ze.workingColorSpace}var vh={clone:or,merge:kn},jp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Jp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Un=class extends Pi{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=jp,this.fragmentShader=Jp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=or(t.uniforms),this.uniformsGroups=Zp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}},da=class extends We{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Oe,this.projectionMatrix=new Oe,this.projectionMatrixInverse=new Oe,this.coordinateSystem=Ti}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Gi=new $,Sd=new zt,wd=new zt,Ln=class extends da{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=$r*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Nr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return $r*2*Math.atan(Math.tan(Nr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Gi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Gi.x,Gi.y).multiplyScalar(-t/Gi.z),Gi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Gi.x,Gi.y).multiplyScalar(-t/Gi.z)}getViewSize(t,e){return this.getViewBounds(t,Sd,wd),e.subVectors(wd,Sd)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Nr*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,h=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/h,s*=o.width/l,i*=o.height/h}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Hs=-90,$s=1,Ic=class extends We{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ln(Hs,$s,t,e);s.layers=this.layers,this.add(s);let r=new Ln(Hs,$s,t,e);r.layers=this.layers,this.add(r);let o=new Ln(Hs,$s,t,e);o.layers=this.layers,this.add(o);let a=new Ln(Hs,$s,t,e);a.layers=this.layers,this.add(a);let l=new Ln(Hs,$s,t,e);l.layers=this.layers,this.add(l);let h=new Ln(Hs,$s,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,l]=e;for(let h of e)this.remove(h);if(t===Ti)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ia)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,h,u]=this.children,g=t.getRenderTarget(),f=t.getActiveCubeFace(),c=t.getActiveMipmapLevel(),d=t.xr.enabled;t.xr.enabled=!1;let M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,o),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,h),i.texture.generateMipmaps=M,t.setRenderTarget(i,5,s),t.render(e,u),t.setRenderTarget(g,f,c),t.xr.enabled=d,i.texture.needsPMREMUpdate=!0}},fa=class extends On{constructor(t,e,i,s,r,o,a,l,h,u){t=t!==void 0?t:[],e=e!==void 0?e:nr,super(t,e,i,s,r,o,a,l,h,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Pc=class extends Ci{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new fa(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:ui}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Be(5,5,5),r=new Un({name:"CubemapFromEquirect",uniforms:or(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:En,blending:qi});r.uniforms.tEquirect.value=e;let o=new Ve(s,r),a=e.minFilter;return e.minFilter===ys&&(e.minFilter=ui),new Ic(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}},Rl=new $,Kp=new $,Qp=new Pe,Ei=class{constructor(t=new $(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=Rl.subVectors(i,e).cross(Kp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let i=t.delta(Rl),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||Qp.getNormalMatrix(t),s=this.coplanarPoint(Rl).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},hs=new Ji,Oo=new $,Vr=class{constructor(t=new Ei,e=new Ei,i=new Ei,s=new Ei,r=new Ei,o=new Ei){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Ti){let i=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],h=s[4],u=s[5],g=s[6],f=s[7],c=s[8],d=s[9],M=s[10],m=s[11],p=s[12],S=s[13],y=s[14],_=s[15];if(i[0].setComponents(l-r,f-h,m-c,_-p).normalize(),i[1].setComponents(l+r,f+h,m+c,_+p).normalize(),i[2].setComponents(l+o,f+u,m+d,_+S).normalize(),i[3].setComponents(l-o,f-u,m-d,_-S).normalize(),i[4].setComponents(l-a,f-g,m-M,_-y).normalize(),e===Ti)i[5].setComponents(l+a,f+g,m+M,_+y).normalize();else if(e===ia)i[5].setComponents(a,g,M,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),hs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),hs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(hs)}intersectsSprite(t){return hs.center.set(0,0,0),hs.radius=.7071067811865476,hs.applyMatrix4(t.matrixWorld),this.intersectsSphere(hs)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(Oo.x=s.normal.x>0?t.max.x:t.min.x,Oo.y=s.normal.y>0?t.max.y:t.min.y,Oo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Oo)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Af(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function tm(n){let t=new WeakMap;function e(a,l){let h=a.array,u=a.usage,g=h.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,h,u),a.onUploadCallback();let c;if(h instanceof Float32Array)c=n.FLOAT;else if(h instanceof Uint16Array)a.isFloat16BufferAttribute?c=n.HALF_FLOAT:c=n.UNSIGNED_SHORT;else if(h instanceof Int16Array)c=n.SHORT;else if(h instanceof Uint32Array)c=n.UNSIGNED_INT;else if(h instanceof Int32Array)c=n.INT;else if(h instanceof Int8Array)c=n.BYTE;else if(h instanceof Uint8Array)c=n.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)c=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:f,type:c,bytesPerElement:h.BYTES_PER_ELEMENT,version:a.version,size:g}}function i(a,l,h){let u=l.array,g=l.updateRanges;if(n.bindBuffer(h,a),g.length===0)n.bufferSubData(h,0,u);else{g.sort((c,d)=>c.start-d.start);let f=0;for(let c=1;c<g.length;c++){let d=g[f],M=g[c];M.start<=d.start+d.count+1?d.count=Math.max(d.count,M.start+M.count-d.start):(++f,g[f]=M)}g.length=f+1;for(let c=0,d=g.length;c<d;c++){let M=g[c];n.bufferSubData(h,M.start*u.BYTES_PER_ELEMENT,u,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let h=t.get(a);if(h===void 0)t.set(a,e(a,l));else if(h.version<a.version){if(h.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(h.buffer,a,l),h.version=a.version}}return{get:s,remove:r,update:o}}var Tn=class n extends Xe{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),h=a+1,u=l+1,g=t/a,f=e/l,c=[],d=[],M=[],m=[];for(let p=0;p<u;p++){let S=p*f-o;for(let y=0;y<h;y++){let _=y*g-r;d.push(_,-S,0),M.push(0,0,1),m.push(y/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let S=0;S<a;S++){let y=S+h*p,_=S+h*(p+1),N=S+1+h*(p+1),w=S+1+h*p;c.push(y,_,w),c.push(_,N,w)}this.setIndex(c),this.setAttribute("position",new Ae(d,3)),this.setAttribute("normal",new Ae(M,3)),this.setAttribute("uv",new Ae(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}},em=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,nm=`#ifdef USE_ALPHAHASH
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
#endif`,im=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,sm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,om=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,am=`#ifdef USE_AOMAP
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
#endif`,lm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,cm=`#ifdef USE_BATCHING
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
#endif`,hm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,dm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,fm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,um=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,pm=`#ifdef USE_IRIDESCENCE
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
#endif`,mm=`#ifdef USE_BUMPMAP
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
#endif`,gm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ym=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,xm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,vm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_m=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Mm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,bm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Sm=`#if defined( USE_COLOR_ALPHA )
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
#endif`,wm=`#define PI 3.141592653589793
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
} // validated`,Em=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Tm=`vec3 transformedNormal = objectNormal;
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
#endif`,Am=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Rm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Cm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Im=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Pm="gl_FragColor = linearToOutputTexel( gl_FragColor );",km=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Lm=`#ifdef USE_ENVMAP
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
#endif`,Dm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Um=`#ifdef USE_ENVMAP
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
#endif`,Nm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Om=`#ifdef USE_ENVMAP
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
#endif`,Fm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Bm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,zm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Hm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,$m=`#ifdef USE_GRADIENTMAP
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
}`,Vm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Gm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Wm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Xm=`uniform bool receiveShadow;
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
#endif`,qm=`#ifdef USE_ENVMAP
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
#endif`,Ym=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Zm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,jm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Jm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Km=`PhysicalMaterial material;
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
#endif`,Qm=`struct PhysicalMaterial {
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
}`,t0=`
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
#endif`,e0=`#if defined( RE_IndirectDiffuse )
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
#endif`,n0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,i0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,s0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,r0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,o0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,a0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,l0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,c0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,h0=`#if defined( USE_POINTS_UV )
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
#endif`,d0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,f0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,u0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,p0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,m0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,g0=`#ifdef USE_MORPHTARGETS
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
#endif`,y0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,x0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,v0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,_0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,M0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,b0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,S0=`#ifdef USE_NORMALMAP
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
#endif`,w0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,E0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,T0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,A0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,R0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,C0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,I0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,P0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,k0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,L0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,D0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,U0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,N0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,O0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,F0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,B0=`float getShadowMask() {
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
}`,z0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,H0=`#ifdef USE_SKINNING
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
#endif`,$0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,V0=`#ifdef USE_SKINNING
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
#endif`,G0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,W0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,X0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,q0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Y0=`#ifdef USE_TRANSMISSION
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
#endif`,Z0=`#ifdef USE_TRANSMISSION
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
#endif`,j0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,J0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,K0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Q0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,tg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,eg=`uniform sampler2D t2D;
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
}`,ng=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ig=`#ifdef ENVMAP_TYPE_CUBE
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
}`,sg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,og=`#include <common>
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
}`,ag=`#if DEPTH_PACKING == 3200
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
}`,lg=`#define DISTANCE
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
}`,cg=`#define DISTANCE
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
}`,hg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,dg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fg=`uniform float scale;
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
}`,ug=`uniform vec3 diffuse;
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
}`,pg=`#include <common>
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
}`,mg=`uniform vec3 diffuse;
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
}`,gg=`#define LAMBERT
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
}`,yg=`#define LAMBERT
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
}`,xg=`#define MATCAP
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
}`,vg=`#define MATCAP
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
}`,_g=`#define NORMAL
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
}`,Mg=`#define NORMAL
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
}`,bg=`#define PHONG
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
}`,Sg=`#define PHONG
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
}`,wg=`#define STANDARD
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
}`,Eg=`#define STANDARD
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
}`,Tg=`#define TOON
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
}`,Ag=`#define TOON
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
}`,Rg=`uniform float size;
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
}`,Cg=`uniform vec3 diffuse;
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
}`,Ig=`#include <common>
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
}`,Pg=`uniform vec3 color;
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
}`,kg=`uniform float rotation;
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
}`,Lg=`uniform vec3 diffuse;
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
}`,Re={alphahash_fragment:em,alphahash_pars_fragment:nm,alphamap_fragment:im,alphamap_pars_fragment:sm,alphatest_fragment:rm,alphatest_pars_fragment:om,aomap_fragment:am,aomap_pars_fragment:lm,batching_pars_vertex:cm,batching_vertex:hm,begin_vertex:dm,beginnormal_vertex:fm,bsdfs:um,iridescence_fragment:pm,bumpmap_pars_fragment:mm,clipping_planes_fragment:gm,clipping_planes_pars_fragment:ym,clipping_planes_pars_vertex:xm,clipping_planes_vertex:vm,color_fragment:_m,color_pars_fragment:Mm,color_pars_vertex:bm,color_vertex:Sm,common:wm,cube_uv_reflection_fragment:Em,defaultnormal_vertex:Tm,displacementmap_pars_vertex:Am,displacementmap_vertex:Rm,emissivemap_fragment:Cm,emissivemap_pars_fragment:Im,colorspace_fragment:Pm,colorspace_pars_fragment:km,envmap_fragment:Lm,envmap_common_pars_fragment:Dm,envmap_pars_fragment:Um,envmap_pars_vertex:Nm,envmap_physical_pars_fragment:qm,envmap_vertex:Om,fog_vertex:Fm,fog_pars_vertex:Bm,fog_fragment:zm,fog_pars_fragment:Hm,gradientmap_pars_fragment:$m,lightmap_pars_fragment:Vm,lights_lambert_fragment:Gm,lights_lambert_pars_fragment:Wm,lights_pars_begin:Xm,lights_toon_fragment:Ym,lights_toon_pars_fragment:Zm,lights_phong_fragment:jm,lights_phong_pars_fragment:Jm,lights_physical_fragment:Km,lights_physical_pars_fragment:Qm,lights_fragment_begin:t0,lights_fragment_maps:e0,lights_fragment_end:n0,logdepthbuf_fragment:i0,logdepthbuf_pars_fragment:s0,logdepthbuf_pars_vertex:r0,logdepthbuf_vertex:o0,map_fragment:a0,map_pars_fragment:l0,map_particle_fragment:c0,map_particle_pars_fragment:h0,metalnessmap_fragment:d0,metalnessmap_pars_fragment:f0,morphinstance_vertex:u0,morphcolor_vertex:p0,morphnormal_vertex:m0,morphtarget_pars_vertex:g0,morphtarget_vertex:y0,normal_fragment_begin:x0,normal_fragment_maps:v0,normal_pars_fragment:_0,normal_pars_vertex:M0,normal_vertex:b0,normalmap_pars_fragment:S0,clearcoat_normal_fragment_begin:w0,clearcoat_normal_fragment_maps:E0,clearcoat_pars_fragment:T0,iridescence_pars_fragment:A0,opaque_fragment:R0,packing:C0,premultiplied_alpha_fragment:I0,project_vertex:P0,dithering_fragment:k0,dithering_pars_fragment:L0,roughnessmap_fragment:D0,roughnessmap_pars_fragment:U0,shadowmap_pars_fragment:N0,shadowmap_pars_vertex:O0,shadowmap_vertex:F0,shadowmask_pars_fragment:B0,skinbase_vertex:z0,skinning_pars_vertex:H0,skinning_vertex:$0,skinnormal_vertex:V0,specularmap_fragment:G0,specularmap_pars_fragment:W0,tonemapping_fragment:X0,tonemapping_pars_fragment:q0,transmission_fragment:Y0,transmission_pars_fragment:Z0,uv_pars_fragment:j0,uv_pars_vertex:J0,uv_vertex:K0,worldpos_vertex:Q0,background_vert:tg,background_frag:eg,backgroundCube_vert:ng,backgroundCube_frag:ig,cube_vert:sg,cube_frag:rg,depth_vert:og,depth_frag:ag,distanceRGBA_vert:lg,distanceRGBA_frag:cg,equirect_vert:hg,equirect_frag:dg,linedashed_vert:fg,linedashed_frag:ug,meshbasic_vert:pg,meshbasic_frag:mg,meshlambert_vert:gg,meshlambert_frag:yg,meshmatcap_vert:xg,meshmatcap_frag:vg,meshnormal_vert:_g,meshnormal_frag:Mg,meshphong_vert:bg,meshphong_frag:Sg,meshphysical_vert:wg,meshphysical_frag:Eg,meshtoon_vert:Tg,meshtoon_frag:Ag,points_vert:Rg,points_frag:Cg,shadow_vert:Ig,shadow_frag:Pg,sprite_vert:kg,sprite_frag:Lg},jt={common:{diffuse:{value:new de(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Pe},alphaMap:{value:null},alphaMapTransform:{value:new Pe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Pe}},envmap:{envMap:{value:null},envMapRotation:{value:new Pe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Pe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Pe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Pe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Pe},normalScale:{value:new zt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Pe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Pe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Pe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Pe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new de(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new de(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Pe},alphaTest:{value:0},uvTransform:{value:new Pe}},sprite:{diffuse:{value:new de(16777215)},opacity:{value:1},center:{value:new zt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Pe},alphaMap:{value:null},alphaMapTransform:{value:new Pe},alphaTest:{value:0}}},fi={basic:{uniforms:kn([jt.common,jt.specularmap,jt.envmap,jt.aomap,jt.lightmap,jt.fog]),vertexShader:Re.meshbasic_vert,fragmentShader:Re.meshbasic_frag},lambert:{uniforms:kn([jt.common,jt.specularmap,jt.envmap,jt.aomap,jt.lightmap,jt.emissivemap,jt.bumpmap,jt.normalmap,jt.displacementmap,jt.fog,jt.lights,{emissive:{value:new de(0)}}]),vertexShader:Re.meshlambert_vert,fragmentShader:Re.meshlambert_frag},phong:{uniforms:kn([jt.common,jt.specularmap,jt.envmap,jt.aomap,jt.lightmap,jt.emissivemap,jt.bumpmap,jt.normalmap,jt.displacementmap,jt.fog,jt.lights,{emissive:{value:new de(0)},specular:{value:new de(1118481)},shininess:{value:30}}]),vertexShader:Re.meshphong_vert,fragmentShader:Re.meshphong_frag},standard:{uniforms:kn([jt.common,jt.envmap,jt.aomap,jt.lightmap,jt.emissivemap,jt.bumpmap,jt.normalmap,jt.displacementmap,jt.roughnessmap,jt.metalnessmap,jt.fog,jt.lights,{emissive:{value:new de(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Re.meshphysical_vert,fragmentShader:Re.meshphysical_frag},toon:{uniforms:kn([jt.common,jt.aomap,jt.lightmap,jt.emissivemap,jt.bumpmap,jt.normalmap,jt.displacementmap,jt.gradientmap,jt.fog,jt.lights,{emissive:{value:new de(0)}}]),vertexShader:Re.meshtoon_vert,fragmentShader:Re.meshtoon_frag},matcap:{uniforms:kn([jt.common,jt.bumpmap,jt.normalmap,jt.displacementmap,jt.fog,{matcap:{value:null}}]),vertexShader:Re.meshmatcap_vert,fragmentShader:Re.meshmatcap_frag},points:{uniforms:kn([jt.points,jt.fog]),vertexShader:Re.points_vert,fragmentShader:Re.points_frag},dashed:{uniforms:kn([jt.common,jt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Re.linedashed_vert,fragmentShader:Re.linedashed_frag},depth:{uniforms:kn([jt.common,jt.displacementmap]),vertexShader:Re.depth_vert,fragmentShader:Re.depth_frag},normal:{uniforms:kn([jt.common,jt.bumpmap,jt.normalmap,jt.displacementmap,{opacity:{value:1}}]),vertexShader:Re.meshnormal_vert,fragmentShader:Re.meshnormal_frag},sprite:{uniforms:kn([jt.sprite,jt.fog]),vertexShader:Re.sprite_vert,fragmentShader:Re.sprite_frag},background:{uniforms:{uvTransform:{value:new Pe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Re.background_vert,fragmentShader:Re.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Pe}},vertexShader:Re.backgroundCube_vert,fragmentShader:Re.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Re.cube_vert,fragmentShader:Re.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Re.equirect_vert,fragmentShader:Re.equirect_frag},distanceRGBA:{uniforms:kn([jt.common,jt.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Re.distanceRGBA_vert,fragmentShader:Re.distanceRGBA_frag},shadow:{uniforms:kn([jt.lights,jt.fog,{color:{value:new de(0)},opacity:{value:1}}]),vertexShader:Re.shadow_vert,fragmentShader:Re.shadow_frag}};fi.physical={uniforms:kn([fi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Pe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Pe},clearcoatNormalScale:{value:new zt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Pe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Pe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Pe},sheen:{value:0},sheenColor:{value:new de(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Pe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Pe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Pe},transmissionSamplerSize:{value:new zt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Pe},attenuationDistance:{value:0},attenuationColor:{value:new de(0)},specularColor:{value:new de(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Pe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Pe},anisotropyVector:{value:new zt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Pe}}]),vertexShader:Re.meshphysical_vert,fragmentShader:Re.meshphysical_frag};var Fo={r:0,b:0,g:0},ds=new si,Dg=new Oe;function Ug(n,t,e,i,s,r,o){let a=new de(0),l=r===!0?0:1,h,u,g=null,f=0,c=null;function d(S){let y=S.isScene===!0?S.background:null;return y&&y.isTexture&&(y=(S.backgroundBlurriness>0?e:t).get(y)),y}function M(S){let y=!1,_=d(S);_===null?p(a,l):_&&_.isColor&&(p(_,1),y=!0);let N=n.xr.getEnvironmentBlendMode();N==="additive"?i.buffers.color.setClear(0,0,0,1,o):N==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(S,y){let _=d(y);_&&(_.isCubeTexture||_.mapping===Oa)?(u===void 0&&(u=new Ve(new Be(1,1,1),new Un({name:"BackgroundCubeMaterial",uniforms:or(fi.backgroundCube.uniforms),vertexShader:fi.backgroundCube.vertexShader,fragmentShader:fi.backgroundCube.fragmentShader,side:En,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(N,w,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),ds.copy(y.backgroundRotation),ds.x*=-1,ds.y*=-1,ds.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(ds.y*=-1,ds.z*=-1),u.material.uniforms.envMap.value=_,u.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Dg.makeRotationFromEuler(ds)),u.material.toneMapped=ze.getTransfer(_.colorSpace)!==Ge,(g!==_||f!==_.version||c!==n.toneMapping)&&(u.material.needsUpdate=!0,g=_,f=_.version,c=n.toneMapping),u.layers.enableAll(),S.unshift(u,u.geometry,u.material,0,0,null)):_&&_.isTexture&&(h===void 0&&(h=new Ve(new Tn(2,2),new Un({name:"BackgroundMaterial",uniforms:or(fi.background.uniforms),vertexShader:fi.background.vertexShader,fragmentShader:fi.background.fragmentShader,side:Zi,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(h)),h.material.uniforms.t2D.value=_,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.toneMapped=ze.getTransfer(_.colorSpace)!==Ge,_.matrixAutoUpdate===!0&&_.updateMatrix(),h.material.uniforms.uvTransform.value.copy(_.matrix),(g!==_||f!==_.version||c!==n.toneMapping)&&(h.material.needsUpdate=!0,g=_,f=_.version,c=n.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null))}function p(S,y){S.getRGB(Fo,Tf(n)),i.buffers.color.setClear(Fo.r,Fo.g,Fo.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(S,y=1){a.set(S),l=y,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,p(a,l)},render:M,addToRenderList:m}}function Ng(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null),r=s,o=!1;function a(x,b,C,E,T){let k=!1,D=g(E,C,b);r!==D&&(r=D,h(r.object)),k=c(x,E,C,T),k&&d(x,E,C,T),T!==null&&t.update(T,n.ELEMENT_ARRAY_BUFFER),(k||o)&&(o=!1,_(x,b,C,E),T!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(T).buffer))}function l(){return n.createVertexArray()}function h(x){return n.bindVertexArray(x)}function u(x){return n.deleteVertexArray(x)}function g(x,b,C){let E=C.wireframe===!0,T=i[x.id];T===void 0&&(T={},i[x.id]=T);let k=T[b.id];k===void 0&&(k={},T[b.id]=k);let D=k[E];return D===void 0&&(D=f(l()),k[E]=D),D}function f(x){let b=[],C=[],E=[];for(let T=0;T<e;T++)b[T]=0,C[T]=0,E[T]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:b,enabledAttributes:C,attributeDivisors:E,object:x,attributes:{},index:null}}function c(x,b,C,E){let T=r.attributes,k=b.attributes,D=0,O=C.getAttributes();for(let z in O)if(O[z].location>=0){let X=T[z],U=k[z];if(U===void 0&&(z==="instanceMatrix"&&x.instanceMatrix&&(U=x.instanceMatrix),z==="instanceColor"&&x.instanceColor&&(U=x.instanceColor)),X===void 0||X.attribute!==U||U&&X.data!==U.data)return!0;D++}return r.attributesNum!==D||r.index!==E}function d(x,b,C,E){let T={},k=b.attributes,D=0,O=C.getAttributes();for(let z in O)if(O[z].location>=0){let X=k[z];X===void 0&&(z==="instanceMatrix"&&x.instanceMatrix&&(X=x.instanceMatrix),z==="instanceColor"&&x.instanceColor&&(X=x.instanceColor));let U={};U.attribute=X,X&&X.data&&(U.data=X.data),T[z]=U,D++}r.attributes=T,r.attributesNum=D,r.index=E}function M(){let x=r.newAttributes;for(let b=0,C=x.length;b<C;b++)x[b]=0}function m(x){p(x,0)}function p(x,b){let C=r.newAttributes,E=r.enabledAttributes,T=r.attributeDivisors;C[x]=1,E[x]===0&&(n.enableVertexAttribArray(x),E[x]=1),T[x]!==b&&(n.vertexAttribDivisor(x,b),T[x]=b)}function S(){let x=r.newAttributes,b=r.enabledAttributes;for(let C=0,E=b.length;C<E;C++)b[C]!==x[C]&&(n.disableVertexAttribArray(C),b[C]=0)}function y(x,b,C,E,T,k,D){D===!0?n.vertexAttribIPointer(x,b,C,T,k):n.vertexAttribPointer(x,b,C,E,T,k)}function _(x,b,C,E){M();let T=E.attributes,k=C.getAttributes(),D=b.defaultAttributeValues;for(let O in k){let z=k[O];if(z.location>=0){let q=T[O];if(q===void 0&&(O==="instanceMatrix"&&x.instanceMatrix&&(q=x.instanceMatrix),O==="instanceColor"&&x.instanceColor&&(q=x.instanceColor)),q!==void 0){let X=q.normalized,U=q.itemSize,gt=t.get(q);if(gt===void 0)continue;let At=gt.buffer,P=gt.type,G=gt.bytesPerElement,J=P===n.INT||P===n.UNSIGNED_INT||q.gpuType===dh;if(q.isInterleavedBufferAttribute){let V=q.data,K=V.stride,ot=q.offset;if(V.isInstancedInterleavedBuffer){for(let Tt=0;Tt<z.locationSize;Tt++)p(z.location+Tt,V.meshPerAttribute);x.isInstancedMesh!==!0&&E._maxInstanceCount===void 0&&(E._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let Tt=0;Tt<z.locationSize;Tt++)m(z.location+Tt);n.bindBuffer(n.ARRAY_BUFFER,At);for(let Tt=0;Tt<z.locationSize;Tt++)y(z.location+Tt,U/z.locationSize,P,X,K*G,(ot+U/z.locationSize*Tt)*G,J)}else{if(q.isInstancedBufferAttribute){for(let V=0;V<z.locationSize;V++)p(z.location+V,q.meshPerAttribute);x.isInstancedMesh!==!0&&E._maxInstanceCount===void 0&&(E._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let V=0;V<z.locationSize;V++)m(z.location+V);n.bindBuffer(n.ARRAY_BUFFER,At);for(let V=0;V<z.locationSize;V++)y(z.location+V,U/z.locationSize,P,X,U*G,U/z.locationSize*V*G,J)}}else if(D!==void 0){let X=D[O];if(X!==void 0)switch(X.length){case 2:n.vertexAttrib2fv(z.location,X);break;case 3:n.vertexAttrib3fv(z.location,X);break;case 4:n.vertexAttrib4fv(z.location,X);break;default:n.vertexAttrib1fv(z.location,X)}}}}S()}function N(){A();for(let x in i){let b=i[x];for(let C in b){let E=b[C];for(let T in E)u(E[T].object),delete E[T];delete b[C]}delete i[x]}}function w(x){if(i[x.id]===void 0)return;let b=i[x.id];for(let C in b){let E=b[C];for(let T in E)u(E[T].object),delete E[T];delete b[C]}delete i[x.id]}function R(x){for(let b in i){let C=i[b];if(C[x.id]===void 0)continue;let E=C[x.id];for(let T in E)u(E[T].object),delete E[T];delete C[x.id]}}function A(){v(),o=!0,r!==s&&(r=s,h(r.object))}function v(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:A,resetDefaultState:v,dispose:N,releaseStatesOfGeometry:w,releaseStatesOfProgram:R,initAttributes:M,enableAttribute:m,disableUnusedAttributes:S}}function Og(n,t,e){let i;function s(h){i=h}function r(h,u){n.drawArrays(i,h,u),e.update(u,i,1)}function o(h,u,g){g!==0&&(n.drawArraysInstanced(i,h,u,g),e.update(u,i,g))}function a(h,u,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,h,0,u,0,g);let c=0;for(let d=0;d<g;d++)c+=u[d];e.update(c,i,1)}function l(h,u,g,f){if(g===0)return;let c=t.get("WEBGL_multi_draw");if(c===null)for(let d=0;d<h.length;d++)o(h[d],u[d],f[d]);else{c.multiDrawArraysInstancedWEBGL(i,h,0,u,0,f,0,g);let d=0;for(let M=0;M<g;M++)d+=u[M]*f[M];e.update(d,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Fg(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let R=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){return!(R!==Wn&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){let A=R===eo&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==Ri&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==pi&&!A)}function l(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=e.precision!==void 0?e.precision:"highp",u=l(h);u!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",u,"instead."),h=u);let g=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),c=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),S=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),y=n.getParameter(n.MAX_VARYING_VECTORS),_=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),N=d>0,w=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:h,logarithmicDepthBuffer:g,reverseDepthBuffer:f,maxTextures:c,maxVertexTextures:d,maxTextureSize:M,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:S,maxVaryings:y,maxFragmentUniforms:_,vertexTextures:N,maxSamples:w}}function Bg(n){let t=this,e=null,i=0,s=!1,r=!1,o=new Ei,a=new Pe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(g,f){let c=g.length!==0||f||i!==0||s;return s=f,i=g.length,c},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(g,f){e=u(g,f,0)},this.setState=function(g,f,c){let d=g.clippingPlanes,M=g.clipIntersection,m=g.clipShadows,p=n.get(g);if(!s||d===null||d.length===0||r&&!m)r?u(null):h();else{let S=r?0:i,y=S*4,_=p.clippingState||null;l.value=_,_=u(d,f,y,c);for(let N=0;N!==y;++N)_[N]=e[N];p.clippingState=_,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=S}};function h(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(g,f,c,d){let M=g!==null?g.length:0,m=null;if(M!==0){if(m=l.value,d!==!0||m===null){let p=c+M*4,S=f.matrixWorldInverse;a.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,_=c;y!==M;++y,_+=4)o.copy(g[y]).applyMatrix4(S,a),o.normal.toArray(m,_),m[_+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,m}}function zg(n){let t=new WeakMap;function e(o,a){return a===jl?o.mapping=nr:a===Jl&&(o.mapping=ir),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===jl||a===Jl)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let h=new Pc(l.height);return h.fromEquirectangularTexture(n,o),t.set(o,h),o.addEventListener("dispose",s),e(h.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}var ua=class extends da{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let h=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,o=r+h*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Zs=4,Ed=[.125,.215,.35,.446,.526,.582],ms=20,Cl=new ua,Td=new de,Il=null,Pl=0,kl=0,Ll=!1,us=(1+Math.sqrt(5))/2,Vs=1/us,Ad=[new $(-us,Vs,0),new $(us,Vs,0),new $(-Vs,0,us),new $(Vs,0,us),new $(0,us,-Vs),new $(0,us,Vs),new $(-1,1,-1),new $(1,1,-1),new $(-1,1,1),new $(1,1,1)],pa=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){Il=this._renderer.getRenderTarget(),Pl=this._renderer.getActiveCubeFace(),kl=this._renderer.getActiveMipmapLevel(),Ll=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Id(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Cd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Il,Pl,kl),this._renderer.xr.enabled=Ll,t.scissorTest=!1,Bo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===nr||t.mapping===ir?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Il=this._renderer.getRenderTarget(),Pl=this._renderer.getActiveCubeFace(),kl=this._renderer.getActiveMipmapLevel(),Ll=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:ui,minFilter:ui,generateMipmaps:!1,type:eo,format:Wn,colorSpace:dr,depthBuffer:!1},s=Rd(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Rd(t,e,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Hg(r)),this._blurMaterial=$g(r,t,e)}return s}_compileMaterial(t){let e=new Ve(this._lodPlanes[0],t);this._renderer.compile(e,Cl)}_sceneToCubeUV(t,e,i,s){let a=new Ln(90,1,e,i),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,g=u.autoClear,f=u.toneMapping;u.getClearColor(Td),u.toneMapping=mi,u.autoClear=!1;let c=new Fn({name:"PMREM.Background",side:En,depthWrite:!1,depthTest:!1}),d=new Ve(new Be,c),M=!1,m=t.background;m?m.isColor&&(c.color.copy(m),t.background=null,M=!0):(c.color.copy(Td),M=!0);for(let p=0;p<6;p++){let S=p%3;S===0?(a.up.set(0,l[p],0),a.lookAt(h[p],0,0)):S===1?(a.up.set(0,0,l[p]),a.lookAt(0,h[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,h[p]));let y=this._cubeSize;Bo(s,S*y,p>2?y:0,y,y),u.setRenderTarget(s),M&&u.render(d,a),u.render(t,a)}d.geometry.dispose(),d.material.dispose(),u.toneMapping=f,u.autoClear=g,t.background=m}_textureToCubeUV(t,e){let i=this._renderer,s=t.mapping===nr||t.mapping===ir;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Id()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Cd());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Ve(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;Bo(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,Cl)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Ad[(s-r-1)%Ad.length];this._blur(t,r-1,r,o,a)}e.autoClear=i}_blur(t,e,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){let l=this._renderer,h=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,g=new Ve(this._lodPlanes[s],h),f=h.uniforms,c=this._sizeLods[i]-1,d=isFinite(r)?Math.PI/(2*c):2*Math.PI/(2*ms-1),M=r/d,m=isFinite(r)?1+Math.floor(u*M):ms;m>ms&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ms}`);let p=[],S=0;for(let R=0;R<ms;++R){let A=R/M,v=Math.exp(-A*A/2);p.push(v),R===0?S+=v:R<m&&(S+=2*v)}for(let R=0;R<p.length;R++)p[R]=p[R]/S;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:y}=this;f.dTheta.value=d,f.mipInt.value=y-i;let _=this._sizeLods[s],N=3*_*(s>y-Zs?s-y+Zs:0),w=4*(this._cubeSize-_);Bo(e,N,w,3*_,2*_),l.setRenderTarget(e),l.render(g,Cl)}};function Hg(n){let t=[],e=[],i=[],s=n,r=n-Zs+1+Ed.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>n-Zs?l=Ed[o-n+Zs-1]:o===0&&(l=0),i.push(l);let h=1/(a-2),u=-h,g=1+h,f=[u,u,g,u,g,g,u,u,g,g,u,g],c=6,d=6,M=3,m=2,p=1,S=new Float32Array(M*d*c),y=new Float32Array(m*d*c),_=new Float32Array(p*d*c);for(let w=0;w<c;w++){let R=w%3*2/3-1,A=w>2?0:-1,v=[R,A,0,R+2/3,A,0,R+2/3,A+1,0,R,A,0,R+2/3,A+1,0,R,A+1,0];S.set(v,M*d*w),y.set(f,m*d*w);let x=[w,w,w,w,w,w];_.set(x,p*d*w)}let N=new Xe;N.setAttribute("position",new Je(S,M)),N.setAttribute("uv",new Je(y,m)),N.setAttribute("faceIndex",new Je(_,p)),t.push(N),s>Zs&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Rd(n,t,e){let i=new Ci(n,t,e);return i.texture.mapping=Oa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Bo(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function $g(n,t,e){let i=new Float32Array(ms),s=new $(0,1,0);return new Un({name:"SphericalGaussianBlur",defines:{n:ms,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:_h(),fragmentShader:`

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
		`,blending:qi,depthTest:!1,depthWrite:!1})}function Cd(){return new Un({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_h(),fragmentShader:`

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
		`,blending:qi,depthTest:!1,depthWrite:!1})}function Id(){return new Un({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_h(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:qi,depthTest:!1,depthWrite:!1})}function _h(){return`

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
	`}function Vg(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){let l=a.mapping,h=l===jl||l===Jl,u=l===nr||l===ir;if(h||u){let g=t.get(a),f=g!==void 0?g.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new pa(n)),g=h?e.fromEquirectangular(a,g):e.fromCubemap(a,g),g.texture.pmremVersion=a.pmremVersion,t.set(a,g),g.texture;if(g!==void 0)return g.texture;{let c=a.image;return h&&c&&c.height>0||u&&c&&s(c)?(e===null&&(e=new pa(n)),g=h?e.fromEquirectangular(a):e.fromCubemap(a),g.texture.pmremVersion=a.pmremVersion,t.set(a,g),a.addEventListener("dispose",r),g.texture):null}}}return a}function s(a){let l=0,h=6;for(let u=0;u<h;u++)a[u]!==void 0&&l++;return l===h}function r(a){let l=a.target;l.removeEventListener("dispose",r);let h=t.get(l);h!==void 0&&(t.delete(l),h.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function Gg(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&Dr("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Wg(n,t,e,i){let s={},r=new WeakMap;function o(g){let f=g.target;f.index!==null&&t.remove(f.index);for(let d in f.attributes)t.remove(f.attributes[d]);for(let d in f.morphAttributes){let M=f.morphAttributes[d];for(let m=0,p=M.length;m<p;m++)t.remove(M[m])}f.removeEventListener("dispose",o),delete s[f.id];let c=r.get(f);c&&(t.remove(c),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(g,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function l(g){let f=g.attributes;for(let d in f)t.update(f[d],n.ARRAY_BUFFER);let c=g.morphAttributes;for(let d in c){let M=c[d];for(let m=0,p=M.length;m<p;m++)t.update(M[m],n.ARRAY_BUFFER)}}function h(g){let f=[],c=g.index,d=g.attributes.position,M=0;if(c!==null){let S=c.array;M=c.version;for(let y=0,_=S.length;y<_;y+=3){let N=S[y+0],w=S[y+1],R=S[y+2];f.push(N,w,w,R,R,N)}}else if(d!==void 0){let S=d.array;M=d.version;for(let y=0,_=S.length/3-1;y<_;y+=3){let N=y+0,w=y+1,R=y+2;f.push(N,w,w,R,R,N)}}else return;let m=new(wf(f)?ha:ca)(f,1);m.version=M;let p=r.get(g);p&&t.remove(p),r.set(g,m)}function u(g){let f=r.get(g);if(f){let c=g.index;c!==null&&f.version<c.version&&h(g)}else h(g);return r.get(g)}return{get:a,update:l,getWireframeAttribute:u}}function Xg(n,t,e){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,c){n.drawElements(i,c,r,f*o),e.update(c,i,1)}function h(f,c,d){d!==0&&(n.drawElementsInstanced(i,c,r,f*o,d),e.update(c,i,d))}function u(f,c,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,c,0,r,f,0,d);let m=0;for(let p=0;p<d;p++)m+=c[p];e.update(m,i,1)}function g(f,c,d,M){if(d===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)h(f[p]/o,c[p],M[p]);else{m.multiDrawElementsInstancedWEBGL(i,c,0,r,f,0,M,0,d);let p=0;for(let S=0;S<d;S++)p+=c[S]*M[S];e.update(p,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=h,this.renderMultiDraw=u,this.renderMultiDrawInstances=g}function qg(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function Yg(n,t,e){let i=new WeakMap,s=new rn;function r(o,a,l){let h=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,g=u!==void 0?u.length:0,f=i.get(a);if(f===void 0||f.count!==g){let v=function(){R.dispose(),i.delete(a),a.removeEventListener("dispose",v)};f!==void 0&&f.texture.dispose();let c=a.morphAttributes.position!==void 0,d=a.morphAttributes.normal!==void 0,M=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],S=a.morphAttributes.color||[],y=0;c===!0&&(y=1),d===!0&&(y=2),M===!0&&(y=3);let _=a.attributes.position.count*y,N=1;_>t.maxTextureSize&&(N=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);let w=new Float32Array(_*N*4*g),R=new oa(w,_,N,g);R.type=pi,R.needsUpdate=!0;let A=y*4;for(let x=0;x<g;x++){let b=m[x],C=p[x],E=S[x],T=_*N*4*x;for(let k=0;k<b.count;k++){let D=k*A;c===!0&&(s.fromBufferAttribute(b,k),w[T+D+0]=s.x,w[T+D+1]=s.y,w[T+D+2]=s.z,w[T+D+3]=0),d===!0&&(s.fromBufferAttribute(C,k),w[T+D+4]=s.x,w[T+D+5]=s.y,w[T+D+6]=s.z,w[T+D+7]=0),M===!0&&(s.fromBufferAttribute(E,k),w[T+D+8]=s.x,w[T+D+9]=s.y,w[T+D+10]=s.z,w[T+D+11]=E.itemSize===4?s.w:1)}}f={count:g,texture:R,size:new zt(_,N)},i.set(a,f),a.addEventListener("dispose",v)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let c=0;for(let M=0;M<h.length;M++)c+=h[M];let d=a.morphTargetsRelative?1:1-c;l.getUniforms().setValue(n,"morphTargetBaseInfluence",d),l.getUniforms().setValue(n,"morphTargetInfluences",h)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function Zg(n,t,e,i){let s=new WeakMap;function r(l){let h=i.render.frame,u=l.geometry,g=t.get(l,u);if(s.get(g)!==h&&(t.update(g),s.set(g,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==h&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,h))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==h&&(f.update(),s.set(f,h))}return g}function o(){s=new WeakMap}function a(l){let h=l.target;h.removeEventListener("dispose",a),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:r,dispose:o}}var ma=class extends On{constructor(t,e,i,s,r,o,a,l,h,u=Ks){if(u!==Ks&&u!==rr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Ks&&(i=vs),i===void 0&&u===rr&&(i=sr),super(null,s,r,o,a,l,u,i,h),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Dn,this.minFilter=l!==void 0?l:Dn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Rf=new On,Pd=new ma(1,1),Cf=new oa,If=new Cc,Pf=new fa,kd=[],Ld=[],Dd=new Float32Array(16),Ud=new Float32Array(9),Nd=new Float32Array(4);function fr(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=kd[s];if(r===void 0&&(r=new Float32Array(s),kd[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function pn(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function mn(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Ba(n,t){let e=Ld[t];e===void 0&&(e=new Int32Array(t),Ld[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function jg(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function Jg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(pn(e,t))return;n.uniform2fv(this.addr,t),mn(e,t)}}function Kg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(pn(e,t))return;n.uniform3fv(this.addr,t),mn(e,t)}}function Qg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(pn(e,t))return;n.uniform4fv(this.addr,t),mn(e,t)}}function ty(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(pn(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),mn(e,t)}else{if(pn(e,i))return;Nd.set(i),n.uniformMatrix2fv(this.addr,!1,Nd),mn(e,i)}}function ey(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(pn(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),mn(e,t)}else{if(pn(e,i))return;Ud.set(i),n.uniformMatrix3fv(this.addr,!1,Ud),mn(e,i)}}function ny(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(pn(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),mn(e,t)}else{if(pn(e,i))return;Dd.set(i),n.uniformMatrix4fv(this.addr,!1,Dd),mn(e,i)}}function iy(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function sy(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(pn(e,t))return;n.uniform2iv(this.addr,t),mn(e,t)}}function ry(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(pn(e,t))return;n.uniform3iv(this.addr,t),mn(e,t)}}function oy(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(pn(e,t))return;n.uniform4iv(this.addr,t),mn(e,t)}}function ay(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function ly(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(pn(e,t))return;n.uniform2uiv(this.addr,t),mn(e,t)}}function cy(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(pn(e,t))return;n.uniform3uiv(this.addr,t),mn(e,t)}}function hy(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(pn(e,t))return;n.uniform4uiv(this.addr,t),mn(e,t)}}function dy(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Pd.compareFunction=Sf,r=Pd):r=Rf,e.setTexture2D(t||r,s)}function fy(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||If,s)}function uy(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||Pf,s)}function py(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Cf,s)}function my(n){switch(n){case 5126:return jg;case 35664:return Jg;case 35665:return Kg;case 35666:return Qg;case 35674:return ty;case 35675:return ey;case 35676:return ny;case 5124:case 35670:return iy;case 35667:case 35671:return sy;case 35668:case 35672:return ry;case 35669:case 35673:return oy;case 5125:return ay;case 36294:return ly;case 36295:return cy;case 36296:return hy;case 35678:case 36198:case 36298:case 36306:case 35682:return dy;case 35679:case 36299:case 36307:return fy;case 35680:case 36300:case 36308:case 36293:return uy;case 36289:case 36303:case 36311:case 36292:return py}}function gy(n,t){n.uniform1fv(this.addr,t)}function yy(n,t){let e=fr(t,this.size,2);n.uniform2fv(this.addr,e)}function xy(n,t){let e=fr(t,this.size,3);n.uniform3fv(this.addr,e)}function vy(n,t){let e=fr(t,this.size,4);n.uniform4fv(this.addr,e)}function _y(n,t){let e=fr(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function My(n,t){let e=fr(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function by(n,t){let e=fr(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Sy(n,t){n.uniform1iv(this.addr,t)}function wy(n,t){n.uniform2iv(this.addr,t)}function Ey(n,t){n.uniform3iv(this.addr,t)}function Ty(n,t){n.uniform4iv(this.addr,t)}function Ay(n,t){n.uniform1uiv(this.addr,t)}function Ry(n,t){n.uniform2uiv(this.addr,t)}function Cy(n,t){n.uniform3uiv(this.addr,t)}function Iy(n,t){n.uniform4uiv(this.addr,t)}function Py(n,t,e){let i=this.cache,s=t.length,r=Ba(e,s);pn(i,r)||(n.uniform1iv(this.addr,r),mn(i,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Rf,r[o])}function ky(n,t,e){let i=this.cache,s=t.length,r=Ba(e,s);pn(i,r)||(n.uniform1iv(this.addr,r),mn(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||If,r[o])}function Ly(n,t,e){let i=this.cache,s=t.length,r=Ba(e,s);pn(i,r)||(n.uniform1iv(this.addr,r),mn(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Pf,r[o])}function Dy(n,t,e){let i=this.cache,s=t.length,r=Ba(e,s);pn(i,r)||(n.uniform1iv(this.addr,r),mn(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Cf,r[o])}function Uy(n){switch(n){case 5126:return gy;case 35664:return yy;case 35665:return xy;case 35666:return vy;case 35674:return _y;case 35675:return My;case 35676:return by;case 5124:case 35670:return Sy;case 35667:case 35671:return wy;case 35668:case 35672:return Ey;case 35669:case 35673:return Ty;case 5125:return Ay;case 36294:return Ry;case 36295:return Cy;case 36296:return Iy;case 35678:case 36198:case 36298:case 36306:case 35682:return Py;case 35679:case 36299:case 36307:return ky;case 35680:case 36300:case 36308:case 36293:return Ly;case 36289:case 36303:case 36311:case 36292:return Dy}}var kc=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=my(e.type)}},Lc=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Uy(e.type)}},Dc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],i)}}},Dl=/(\w+)(\])?(\[|\.)?/g;function Od(n,t){n.seq.push(t),n.map[t.id]=t}function Ny(n,t,e){let i=n.name,s=i.length;for(Dl.lastIndex=0;;){let r=Dl.exec(i),o=Dl.lastIndex,a=r[1],l=r[2]==="]",h=r[3];if(l&&(a=a|0),h===void 0||h==="["&&o+2===s){Od(e,h===void 0?new kc(a,n,t):new Lc(a,n,t));break}else{let g=e.map[a];g===void 0&&(g=new Dc(a),Od(e,g)),e=g}}}var tr=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);Ny(r,o,this)}}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&i.push(o)}return i}};function Fd(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var Oy=37297,Fy=0;function By(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}var Bd=new Pe;function zy(n){ze._getMatrix(Bd,ze.workingColorSpace,n);let t=`mat3( ${Bd.elements.map(e=>e.toFixed(4))} )`;switch(ze.getTransfer(n)){case Fa:return[t,"LinearTransferOETF"];case Ge:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function zd(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+By(n.getShaderSource(t),o)}else return s}function Hy(n,t){let e=zy(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function $y(n,t){let e;switch(t){case Qu:e="Linear";break;case tp:e="Reinhard";break;case ep:e="Cineon";break;case np:e="ACESFilmic";break;case sp:e="AgX";break;case rp:e="Neutral";break;case ip:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var zo=new $;function Vy(){ze.getLuminanceCoefficients(zo);let n=zo.x.toFixed(4),t=zo.y.toFixed(4),e=zo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Gy(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ur).join(`
`)}function Wy(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Xy(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function Ur(n){return n!==""}function Hd(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function $d(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var qy=/^[ \t]*#include +<([\w\d./]+)>/gm;function Uc(n){return n.replace(qy,Zy)}var Yy=new Map;function Zy(n,t){let e=Re[t];if(e===void 0){let i=Yy.get(t);if(i!==void 0)e=Re[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Uc(e)}var jy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Vd(n){return n.replace(jy,Jy)}function Jy(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Gd(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}function Ky(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===hf?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===hh?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===wi&&(t="SHADOWMAP_TYPE_VSM"),t}function Qy(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case nr:case ir:t="ENVMAP_TYPE_CUBE";break;case Oa:t="ENVMAP_TYPE_CUBE_UV";break}return t}function tx(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case ir:t="ENVMAP_MODE_REFRACTION";break}return t}function ex(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case df:t="ENVMAP_BLENDING_MULTIPLY";break;case Ju:t="ENVMAP_BLENDING_MIX";break;case Ku:t="ENVMAP_BLENDING_ADD";break}return t}function nx(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function ix(n,t,e,i){let s=n.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=Ky(e),h=Qy(e),u=tx(e),g=ex(e),f=nx(e),c=Gy(e),d=Wy(r),M=s.createProgram(),m,p,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d].filter(Ur).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d].filter(Ur).join(`
`),p.length>0&&(p+=`
`)):(m=[Gd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ur).join(`
`),p=[Gd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",e.envMap?"#define "+g:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==mi?"#define TONE_MAPPING":"",e.toneMapping!==mi?Re.tonemapping_pars_fragment:"",e.toneMapping!==mi?$y("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Re.colorspace_pars_fragment,Hy("linearToOutputTexel",e.outputColorSpace),Vy(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ur).join(`
`)),o=Uc(o),o=Hd(o,e),o=$d(o,e),a=Uc(a),a=Hd(a,e),a=$d(a,e),o=Vd(o),a=Vd(a),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[c,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===id?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===id?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let y=S+m+o,_=S+p+a,N=Fd(s,s.VERTEX_SHADER,y),w=Fd(s,s.FRAGMENT_SHADER,_);s.attachShader(M,N),s.attachShader(M,w),e.index0AttributeName!==void 0?s.bindAttribLocation(M,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function R(b){if(n.debug.checkShaderErrors){let C=s.getProgramInfoLog(M).trim(),E=s.getShaderInfoLog(N).trim(),T=s.getShaderInfoLog(w).trim(),k=!0,D=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(k=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,M,N,w);else{let O=zd(s,N,"vertex"),z=zd(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+b.name+`
Material Type: `+b.type+`

Program Info Log: `+C+`
`+O+`
`+z)}else C!==""?console.warn("THREE.WebGLProgram: Program Info Log:",C):(E===""||T==="")&&(D=!1);D&&(b.diagnostics={runnable:k,programLog:C,vertexShader:{log:E,prefix:m},fragmentShader:{log:T,prefix:p}})}s.deleteShader(N),s.deleteShader(w),A=new tr(s,M),v=Xy(s,M)}let A;this.getUniforms=function(){return A===void 0&&R(this),A};let v;this.getAttributes=function(){return v===void 0&&R(this),v};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=s.getProgramParameter(M,Oy)),x},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Fy++,this.cacheKey=t,this.usedTimes=1,this.program=M,this.vertexShader=N,this.fragmentShader=w,this}var sx=0,Nc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new Oc(t),e.set(t,i)),i}},Oc=class{constructor(t){this.id=sx++,this.code=t,this.usedTimes=0}};function rx(n,t,e,i,s,r,o){let a=new la,l=new Nc,h=new Set,u=[],g=s.logarithmicDepthBuffer,f=s.vertexTextures,c=s.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(v){return h.add(v),v===0?"uv":`uv${v}`}function m(v,x,b,C,E){let T=C.fog,k=E.geometry,D=v.isMeshStandardMaterial?C.environment:null,O=(v.isMeshStandardMaterial?e:t).get(v.envMap||D),z=O&&O.mapping===Oa?O.image.height:null,q=d[v.type];v.precision!==null&&(c=s.getMaxPrecision(v.precision),c!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",c,"instead."));let X=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,U=X!==void 0?X.length:0,gt=0;k.morphAttributes.position!==void 0&&(gt=1),k.morphAttributes.normal!==void 0&&(gt=2),k.morphAttributes.color!==void 0&&(gt=3);let At,P,G,J;if(q){let nt=fi[q];At=nt.vertexShader,P=nt.fragmentShader}else At=v.vertexShader,P=v.fragmentShader,l.update(v),G=l.getVertexShaderID(v),J=l.getFragmentShaderID(v);let V=n.getRenderTarget(),K=n.state.buffers.depth.getReversed(),ot=E.isInstancedMesh===!0,Tt=E.isBatchedMesh===!0,Lt=!!v.map,st=!!v.matcap,pt=!!O,H=!!v.aoMap,$t=!!v.lightMap,tt=!!v.bumpMap,j=!!v.normalMap,mt=!!v.displacementMap,Y=!!v.emissiveMap,kt=!!v.metalnessMap,B=!!v.roughnessMap,L=v.anisotropy>0,ct=v.clearcoat>0,bt=v.dispersion>0,Pt=v.iridescence>0,Q=v.sheen>0,at=v.transmission>0,lt=L&&!!v.anisotropyMap,xt=ct&&!!v.clearcoatMap,Rt=ct&&!!v.clearcoatNormalMap,wt=ct&&!!v.clearcoatRoughnessMap,Ut=Pt&&!!v.iridescenceMap,qt=Pt&&!!v.iridescenceThicknessMap,oe=Q&&!!v.sheenColorMap,Zt=Q&&!!v.sheenRoughnessMap,ge=!!v.specularMap,fe=!!v.specularColorMap,Le=!!v.specularIntensityMap,rt=at&&!!v.transmissionMap,Yt=at&&!!v.thicknessMap,It=!!v.gradientMap,Ft=!!v.alphaMap,Kt=v.alphaTest>0,Qt=!!v.alphaHash,Ee=!!v.extensions,I=mi;v.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(I=n.toneMapping);let it={shaderID:q,shaderType:v.type,shaderName:v.name,vertexShader:At,fragmentShader:P,defines:v.defines,customVertexShaderID:G,customFragmentShaderID:J,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:c,batching:Tt,batchingColor:Tt&&E._colorsTexture!==null,instancing:ot,instancingColor:ot&&E.instanceColor!==null,instancingMorph:ot&&E.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:V===null?n.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:dr,alphaToCoverage:!!v.alphaToCoverage,map:Lt,matcap:st,envMap:pt,envMapMode:pt&&O.mapping,envMapCubeUVHeight:z,aoMap:H,lightMap:$t,bumpMap:tt,normalMap:j,displacementMap:f&&mt,emissiveMap:Y,normalMapObjectSpace:j&&v.normalMapType===cp,normalMapTangentSpace:j&&v.normalMapType===bf,metalnessMap:kt,roughnessMap:B,anisotropy:L,anisotropyMap:lt,clearcoat:ct,clearcoatMap:xt,clearcoatNormalMap:Rt,clearcoatRoughnessMap:wt,dispersion:bt,iridescence:Pt,iridescenceMap:Ut,iridescenceThicknessMap:qt,sheen:Q,sheenColorMap:oe,sheenRoughnessMap:Zt,specularMap:ge,specularColorMap:fe,specularIntensityMap:Le,transmission:at,transmissionMap:rt,thicknessMap:Yt,gradientMap:It,opaque:v.transparent===!1&&v.blending===Js&&v.alphaToCoverage===!1,alphaMap:Ft,alphaTest:Kt,alphaHash:Qt,combine:v.combine,mapUv:Lt&&M(v.map.channel),aoMapUv:H&&M(v.aoMap.channel),lightMapUv:$t&&M(v.lightMap.channel),bumpMapUv:tt&&M(v.bumpMap.channel),normalMapUv:j&&M(v.normalMap.channel),displacementMapUv:mt&&M(v.displacementMap.channel),emissiveMapUv:Y&&M(v.emissiveMap.channel),metalnessMapUv:kt&&M(v.metalnessMap.channel),roughnessMapUv:B&&M(v.roughnessMap.channel),anisotropyMapUv:lt&&M(v.anisotropyMap.channel),clearcoatMapUv:xt&&M(v.clearcoatMap.channel),clearcoatNormalMapUv:Rt&&M(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:wt&&M(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Ut&&M(v.iridescenceMap.channel),iridescenceThicknessMapUv:qt&&M(v.iridescenceThicknessMap.channel),sheenColorMapUv:oe&&M(v.sheenColorMap.channel),sheenRoughnessMapUv:Zt&&M(v.sheenRoughnessMap.channel),specularMapUv:ge&&M(v.specularMap.channel),specularColorMapUv:fe&&M(v.specularColorMap.channel),specularIntensityMapUv:Le&&M(v.specularIntensityMap.channel),transmissionMapUv:rt&&M(v.transmissionMap.channel),thicknessMapUv:Yt&&M(v.thicknessMap.channel),alphaMapUv:Ft&&M(v.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(j||L),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:E.isPoints===!0&&!!k.attributes.uv&&(Lt||Ft),fog:!!T,useFog:v.fog===!0,fogExp2:!!T&&T.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:g,reverseDepthBuffer:K,skinning:E.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:gt,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&b.length>0,shadowMapType:n.shadowMap.type,toneMapping:I,decodeVideoTexture:Lt&&v.map.isVideoTexture===!0&&ze.getTransfer(v.map.colorSpace)===Ge,decodeVideoTextureEmissive:Y&&v.emissiveMap.isVideoTexture===!0&&ze.getTransfer(v.emissiveMap.colorSpace)===Ge,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===cn,flipSided:v.side===En,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Ee&&v.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ee&&v.extensions.multiDraw===!0||Tt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return it.vertexUv1s=h.has(1),it.vertexUv2s=h.has(2),it.vertexUv3s=h.has(3),h.clear(),it}function p(v){let x=[];if(v.shaderID?x.push(v.shaderID):(x.push(v.customVertexShaderID),x.push(v.customFragmentShaderID)),v.defines!==void 0)for(let b in v.defines)x.push(b),x.push(v.defines[b]);return v.isRawShaderMaterial===!1&&(S(x,v),y(x,v),x.push(n.outputColorSpace)),x.push(v.customProgramCacheKey),x.join()}function S(v,x){v.push(x.precision),v.push(x.outputColorSpace),v.push(x.envMapMode),v.push(x.envMapCubeUVHeight),v.push(x.mapUv),v.push(x.alphaMapUv),v.push(x.lightMapUv),v.push(x.aoMapUv),v.push(x.bumpMapUv),v.push(x.normalMapUv),v.push(x.displacementMapUv),v.push(x.emissiveMapUv),v.push(x.metalnessMapUv),v.push(x.roughnessMapUv),v.push(x.anisotropyMapUv),v.push(x.clearcoatMapUv),v.push(x.clearcoatNormalMapUv),v.push(x.clearcoatRoughnessMapUv),v.push(x.iridescenceMapUv),v.push(x.iridescenceThicknessMapUv),v.push(x.sheenColorMapUv),v.push(x.sheenRoughnessMapUv),v.push(x.specularMapUv),v.push(x.specularColorMapUv),v.push(x.specularIntensityMapUv),v.push(x.transmissionMapUv),v.push(x.thicknessMapUv),v.push(x.combine),v.push(x.fogExp2),v.push(x.sizeAttenuation),v.push(x.morphTargetsCount),v.push(x.morphAttributeCount),v.push(x.numDirLights),v.push(x.numPointLights),v.push(x.numSpotLights),v.push(x.numSpotLightMaps),v.push(x.numHemiLights),v.push(x.numRectAreaLights),v.push(x.numDirLightShadows),v.push(x.numPointLightShadows),v.push(x.numSpotLightShadows),v.push(x.numSpotLightShadowsWithMaps),v.push(x.numLightProbes),v.push(x.shadowMapType),v.push(x.toneMapping),v.push(x.numClippingPlanes),v.push(x.numClipIntersection),v.push(x.depthPacking)}function y(v,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),x.dispersion&&a.enable(20),x.batchingColor&&a.enable(21),v.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.reverseDepthBuffer&&a.enable(4),x.skinning&&a.enable(5),x.morphTargets&&a.enable(6),x.morphNormals&&a.enable(7),x.morphColors&&a.enable(8),x.premultipliedAlpha&&a.enable(9),x.shadowMapEnabled&&a.enable(10),x.doubleSided&&a.enable(11),x.flipSided&&a.enable(12),x.useDepthPacking&&a.enable(13),x.dithering&&a.enable(14),x.transmission&&a.enable(15),x.sheen&&a.enable(16),x.opaque&&a.enable(17),x.pointsUvs&&a.enable(18),x.decodeVideoTexture&&a.enable(19),x.decodeVideoTextureEmissive&&a.enable(20),x.alphaToCoverage&&a.enable(21),v.push(a.mask)}function _(v){let x=d[v.type],b;if(x){let C=fi[x];b=vh.clone(C.uniforms)}else b=v.uniforms;return b}function N(v,x){let b;for(let C=0,E=u.length;C<E;C++){let T=u[C];if(T.cacheKey===x){b=T,++b.usedTimes;break}}return b===void 0&&(b=new ix(n,x,v,r),u.push(b)),b}function w(v){if(--v.usedTimes===0){let x=u.indexOf(v);u[x]=u[u.length-1],u.pop(),v.destroy()}}function R(v){l.remove(v)}function A(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:_,acquireProgram:N,releaseProgram:w,releaseShaderCache:R,programs:u,dispose:A}}function ox(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function ax(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Wd(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Xd(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(g,f,c,d,M,m){let p=n[t];return p===void 0?(p={id:g.id,object:g,geometry:f,material:c,groupOrder:d,renderOrder:g.renderOrder,z:M,group:m},n[t]=p):(p.id=g.id,p.object=g,p.geometry=f,p.material=c,p.groupOrder=d,p.renderOrder=g.renderOrder,p.z=M,p.group=m),t++,p}function a(g,f,c,d,M,m){let p=o(g,f,c,d,M,m);c.transmission>0?i.push(p):c.transparent===!0?s.push(p):e.push(p)}function l(g,f,c,d,M,m){let p=o(g,f,c,d,M,m);c.transmission>0?i.unshift(p):c.transparent===!0?s.unshift(p):e.unshift(p)}function h(g,f){e.length>1&&e.sort(g||ax),i.length>1&&i.sort(f||Wd),s.length>1&&s.sort(f||Wd)}function u(){for(let g=t,f=n.length;g<f;g++){let c=n[g];if(c.id===null)break;c.id=null,c.object=null,c.geometry=null,c.material=null,c.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:h}}function lx(){let n=new WeakMap;function t(i,s){let r=n.get(i),o;return r===void 0?(o=new Xd,n.set(i,[o])):s>=r.length?(o=new Xd,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function cx(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new $,color:new de};break;case"SpotLight":e={position:new $,direction:new $,color:new de,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new $,color:new de,distance:0,decay:0};break;case"HemisphereLight":e={direction:new $,skyColor:new de,groundColor:new de};break;case"RectAreaLight":e={color:new de,position:new $,halfWidth:new $,halfHeight:new $};break}return n[t.id]=e,e}}}function hx(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var dx=0;function fx(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function ux(n){let t=new cx,e=hx(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new $);let s=new $,r=new Oe,o=new Oe;function a(h){let u=0,g=0,f=0;for(let v=0;v<9;v++)i.probe[v].set(0,0,0);let c=0,d=0,M=0,m=0,p=0,S=0,y=0,_=0,N=0,w=0,R=0;h.sort(fx);for(let v=0,x=h.length;v<x;v++){let b=h[v],C=b.color,E=b.intensity,T=b.distance,k=b.shadow&&b.shadow.map?b.shadow.map.texture:null;if(b.isAmbientLight)u+=C.r*E,g+=C.g*E,f+=C.b*E;else if(b.isLightProbe){for(let D=0;D<9;D++)i.probe[D].addScaledVector(b.sh.coefficients[D],E);R++}else if(b.isDirectionalLight){let D=t.get(b);if(D.color.copy(b.color).multiplyScalar(b.intensity),b.castShadow){let O=b.shadow,z=e.get(b);z.shadowIntensity=O.intensity,z.shadowBias=O.bias,z.shadowNormalBias=O.normalBias,z.shadowRadius=O.radius,z.shadowMapSize=O.mapSize,i.directionalShadow[c]=z,i.directionalShadowMap[c]=k,i.directionalShadowMatrix[c]=b.shadow.matrix,S++}i.directional[c]=D,c++}else if(b.isSpotLight){let D=t.get(b);D.position.setFromMatrixPosition(b.matrixWorld),D.color.copy(C).multiplyScalar(E),D.distance=T,D.coneCos=Math.cos(b.angle),D.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),D.decay=b.decay,i.spot[M]=D;let O=b.shadow;if(b.map&&(i.spotLightMap[N]=b.map,N++,O.updateMatrices(b),b.castShadow&&w++),i.spotLightMatrix[M]=O.matrix,b.castShadow){let z=e.get(b);z.shadowIntensity=O.intensity,z.shadowBias=O.bias,z.shadowNormalBias=O.normalBias,z.shadowRadius=O.radius,z.shadowMapSize=O.mapSize,i.spotShadow[M]=z,i.spotShadowMap[M]=k,_++}M++}else if(b.isRectAreaLight){let D=t.get(b);D.color.copy(C).multiplyScalar(E),D.halfWidth.set(b.width*.5,0,0),D.halfHeight.set(0,b.height*.5,0),i.rectArea[m]=D,m++}else if(b.isPointLight){let D=t.get(b);if(D.color.copy(b.color).multiplyScalar(b.intensity),D.distance=b.distance,D.decay=b.decay,b.castShadow){let O=b.shadow,z=e.get(b);z.shadowIntensity=O.intensity,z.shadowBias=O.bias,z.shadowNormalBias=O.normalBias,z.shadowRadius=O.radius,z.shadowMapSize=O.mapSize,z.shadowCameraNear=O.camera.near,z.shadowCameraFar=O.camera.far,i.pointShadow[d]=z,i.pointShadowMap[d]=k,i.pointShadowMatrix[d]=b.shadow.matrix,y++}i.point[d]=D,d++}else if(b.isHemisphereLight){let D=t.get(b);D.skyColor.copy(b.color).multiplyScalar(E),D.groundColor.copy(b.groundColor).multiplyScalar(E),i.hemi[p]=D,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=jt.LTC_FLOAT_1,i.rectAreaLTC2=jt.LTC_FLOAT_2):(i.rectAreaLTC1=jt.LTC_HALF_1,i.rectAreaLTC2=jt.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=g,i.ambient[2]=f;let A=i.hash;(A.directionalLength!==c||A.pointLength!==d||A.spotLength!==M||A.rectAreaLength!==m||A.hemiLength!==p||A.numDirectionalShadows!==S||A.numPointShadows!==y||A.numSpotShadows!==_||A.numSpotMaps!==N||A.numLightProbes!==R)&&(i.directional.length=c,i.spot.length=M,i.rectArea.length=m,i.point.length=d,i.hemi.length=p,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=_,i.spotShadowMap.length=_,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=_+N-w,i.spotLightMap.length=N,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=R,A.directionalLength=c,A.pointLength=d,A.spotLength=M,A.rectAreaLength=m,A.hemiLength=p,A.numDirectionalShadows=S,A.numPointShadows=y,A.numSpotShadows=_,A.numSpotMaps=N,A.numLightProbes=R,i.version=dx++)}function l(h,u){let g=0,f=0,c=0,d=0,M=0,m=u.matrixWorldInverse;for(let p=0,S=h.length;p<S;p++){let y=h[p];if(y.isDirectionalLight){let _=i.directional[g];_.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),g++}else if(y.isSpotLight){let _=i.spot[c];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),c++}else if(y.isRectAreaLight){let _=i.rectArea[d];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(m),o.identity(),r.copy(y.matrixWorld),r.premultiply(m),o.extractRotation(r),_.halfWidth.set(y.width*.5,0,0),_.halfHeight.set(0,y.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),d++}else if(y.isPointLight){let _=i.point[f];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(m),f++}else if(y.isHemisphereLight){let _=i.hemi[M];_.direction.setFromMatrixPosition(y.matrixWorld),_.direction.transformDirection(m),M++}}}return{setup:a,setupView:l,state:i}}function qd(n){let t=new ux(n),e=[],i=[];function s(u){h.camera=u,e.length=0,i.length=0}function r(u){e.push(u)}function o(u){i.push(u)}function a(){t.setup(e)}function l(u){t.setupView(e,u)}let h={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:h,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function px(n){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new qd(n),t.set(s,[a])):r>=o.length?(a=new qd(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}var Fc=class extends Pi{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=ap,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Bc=class extends Pi{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},mx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,gx=`uniform sampler2D shadow_pass;
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
}`;function yx(n,t,e){let i=new Vr,s=new zt,r=new zt,o=new rn,a=new Fc({depthPacking:lp}),l=new Bc,h={},u=e.maxTextureSize,g={[Zi]:En,[En]:Zi,[cn]:cn},f=new Un({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new zt},radius:{value:4}},vertexShader:mx,fragmentShader:gx}),c=f.clone();c.defines.HORIZONTAL_PASS=1;let d=new Xe;d.setAttribute("position",new Je(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let M=new Ve(d,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=hf;let p=this.type;this.render=function(w,R,A){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;let v=n.getRenderTarget(),x=n.getActiveCubeFace(),b=n.getActiveMipmapLevel(),C=n.state;C.setBlending(qi),C.buffers.color.setClear(1,1,1,1),C.buffers.depth.setTest(!0),C.setScissorTest(!1);let E=p!==wi&&this.type===wi,T=p===wi&&this.type!==wi;for(let k=0,D=w.length;k<D;k++){let O=w[k],z=O.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",O,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);let q=z.getFrameExtents();if(s.multiply(q),r.copy(z.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/q.x),s.x=r.x*q.x,z.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/q.y),s.y=r.y*q.y,z.mapSize.y=r.y)),z.map===null||E===!0||T===!0){let U=this.type!==wi?{minFilter:Dn,magFilter:Dn}:{};z.map!==null&&z.map.dispose(),z.map=new Ci(s.x,s.y,U),z.map.texture.name=O.name+".shadowMap",z.camera.updateProjectionMatrix()}n.setRenderTarget(z.map),n.clear();let X=z.getViewportCount();for(let U=0;U<X;U++){let gt=z.getViewport(U);o.set(r.x*gt.x,r.y*gt.y,r.x*gt.z,r.y*gt.w),C.viewport(o),z.updateMatrices(O,U),i=z.getFrustum(),_(R,A,z.camera,O,this.type)}z.isPointLightShadow!==!0&&this.type===wi&&S(z,A),z.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(v,x,b)};function S(w,R){let A=t.update(M);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,c.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,c.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Ci(s.x,s.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(R,null,A,f,M,null),c.uniforms.shadow_pass.value=w.mapPass.texture,c.uniforms.resolution.value=w.mapSize,c.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(R,null,A,c,M,null)}function y(w,R,A,v){let x=null,b=A.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(b!==void 0)x=b;else if(x=A.isPointLight===!0?l:a,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){let C=x.uuid,E=R.uuid,T=h[C];T===void 0&&(T={},h[C]=T);let k=T[E];k===void 0&&(k=x.clone(),T[E]=k,R.addEventListener("dispose",N)),x=k}if(x.visible=R.visible,x.wireframe=R.wireframe,v===wi?x.side=R.shadowSide!==null?R.shadowSide:R.side:x.side=R.shadowSide!==null?R.shadowSide:g[R.side],x.alphaMap=R.alphaMap,x.alphaTest=R.alphaTest,x.map=R.map,x.clipShadows=R.clipShadows,x.clippingPlanes=R.clippingPlanes,x.clipIntersection=R.clipIntersection,x.displacementMap=R.displacementMap,x.displacementScale=R.displacementScale,x.displacementBias=R.displacementBias,x.wireframeLinewidth=R.wireframeLinewidth,x.linewidth=R.linewidth,A.isPointLight===!0&&x.isMeshDistanceMaterial===!0){let C=n.properties.get(x);C.light=A}return x}function _(w,R,A,v,x){if(w.visible===!1)return;if(w.layers.test(R.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&x===wi)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,w.matrixWorld);let E=t.update(w),T=w.material;if(Array.isArray(T)){let k=E.groups;for(let D=0,O=k.length;D<O;D++){let z=k[D],q=T[z.materialIndex];if(q&&q.visible){let X=y(w,q,v,x);w.onBeforeShadow(n,w,R,A,E,X,z),n.renderBufferDirect(A,null,E,X,w,z),w.onAfterShadow(n,w,R,A,E,X,z)}}}else if(T.visible){let k=y(w,T,v,x);w.onBeforeShadow(n,w,R,A,E,k,null),n.renderBufferDirect(A,null,E,k,w,null),w.onAfterShadow(n,w,R,A,E,k,null)}}let C=w.children;for(let E=0,T=C.length;E<T;E++)_(C[E],R,A,v,x)}function N(w){w.target.removeEventListener("dispose",N);for(let A in h){let v=h[A],x=w.target.uuid;x in v&&(v[x].dispose(),delete v[x])}}}var xx={[Vl]:Gl,[Wl]:Yl,[Xl]:Zl,[er]:ql,[Gl]:Vl,[Yl]:Wl,[Zl]:Xl,[ql]:er};function vx(n,t){function e(){let rt=!1,Yt=new rn,It=null,Ft=new rn(0,0,0,0);return{setMask:function(Kt){It!==Kt&&!rt&&(n.colorMask(Kt,Kt,Kt,Kt),It=Kt)},setLocked:function(Kt){rt=Kt},setClear:function(Kt,Qt,Ee,I,it){it===!0&&(Kt*=I,Qt*=I,Ee*=I),Yt.set(Kt,Qt,Ee,I),Ft.equals(Yt)===!1&&(n.clearColor(Kt,Qt,Ee,I),Ft.copy(Yt))},reset:function(){rt=!1,It=null,Ft.set(-1,0,0,0)}}}function i(){let rt=!1,Yt=!1,It=null,Ft=null,Kt=null;return{setReversed:function(Qt){if(Yt!==Qt){let Ee=t.get("EXT_clip_control");Yt?Ee.clipControlEXT(Ee.LOWER_LEFT_EXT,Ee.ZERO_TO_ONE_EXT):Ee.clipControlEXT(Ee.LOWER_LEFT_EXT,Ee.NEGATIVE_ONE_TO_ONE_EXT);let I=Kt;Kt=null,this.setClear(I)}Yt=Qt},getReversed:function(){return Yt},setTest:function(Qt){Qt?V(n.DEPTH_TEST):K(n.DEPTH_TEST)},setMask:function(Qt){It!==Qt&&!rt&&(n.depthMask(Qt),It=Qt)},setFunc:function(Qt){if(Yt&&(Qt=xx[Qt]),Ft!==Qt){switch(Qt){case Vl:n.depthFunc(n.NEVER);break;case Gl:n.depthFunc(n.ALWAYS);break;case Wl:n.depthFunc(n.LESS);break;case er:n.depthFunc(n.LEQUAL);break;case Xl:n.depthFunc(n.EQUAL);break;case ql:n.depthFunc(n.GEQUAL);break;case Yl:n.depthFunc(n.GREATER);break;case Zl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Ft=Qt}},setLocked:function(Qt){rt=Qt},setClear:function(Qt){Kt!==Qt&&(Yt&&(Qt=1-Qt),n.clearDepth(Qt),Kt=Qt)},reset:function(){rt=!1,It=null,Ft=null,Kt=null,Yt=!1}}}function s(){let rt=!1,Yt=null,It=null,Ft=null,Kt=null,Qt=null,Ee=null,I=null,it=null;return{setTest:function(nt){rt||(nt?V(n.STENCIL_TEST):K(n.STENCIL_TEST))},setMask:function(nt){Yt!==nt&&!rt&&(n.stencilMask(nt),Yt=nt)},setFunc:function(nt,ht,_t){(It!==nt||Ft!==ht||Kt!==_t)&&(n.stencilFunc(nt,ht,_t),It=nt,Ft=ht,Kt=_t)},setOp:function(nt,ht,_t){(Qt!==nt||Ee!==ht||I!==_t)&&(n.stencilOp(nt,ht,_t),Qt=nt,Ee=ht,I=_t)},setLocked:function(nt){rt=nt},setClear:function(nt){it!==nt&&(n.clearStencil(nt),it=nt)},reset:function(){rt=!1,Yt=null,It=null,Ft=null,Kt=null,Qt=null,Ee=null,I=null,it=null}}}let r=new e,o=new i,a=new s,l=new WeakMap,h=new WeakMap,u={},g={},f=new WeakMap,c=[],d=null,M=!1,m=null,p=null,S=null,y=null,_=null,N=null,w=null,R=new de(0,0,0),A=0,v=!1,x=null,b=null,C=null,E=null,T=null,k=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),D=!1,O=0,z=n.getParameter(n.VERSION);z.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(z)[1]),D=O>=1):z.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),D=O>=2);let q=null,X={},U=n.getParameter(n.SCISSOR_BOX),gt=n.getParameter(n.VIEWPORT),At=new rn().fromArray(U),P=new rn().fromArray(gt);function G(rt,Yt,It,Ft){let Kt=new Uint8Array(4),Qt=n.createTexture();n.bindTexture(rt,Qt),n.texParameteri(rt,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(rt,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ee=0;Ee<It;Ee++)rt===n.TEXTURE_3D||rt===n.TEXTURE_2D_ARRAY?n.texImage3D(Yt,0,n.RGBA,1,1,Ft,0,n.RGBA,n.UNSIGNED_BYTE,Kt):n.texImage2D(Yt+Ee,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Kt);return Qt}let J={};J[n.TEXTURE_2D]=G(n.TEXTURE_2D,n.TEXTURE_2D,1),J[n.TEXTURE_CUBE_MAP]=G(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[n.TEXTURE_2D_ARRAY]=G(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),J[n.TEXTURE_3D]=G(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),V(n.DEPTH_TEST),o.setFunc(er),tt(!1),j(Zh),V(n.CULL_FACE),H(qi);function V(rt){u[rt]!==!0&&(n.enable(rt),u[rt]=!0)}function K(rt){u[rt]!==!1&&(n.disable(rt),u[rt]=!1)}function ot(rt,Yt){return g[rt]!==Yt?(n.bindFramebuffer(rt,Yt),g[rt]=Yt,rt===n.DRAW_FRAMEBUFFER&&(g[n.FRAMEBUFFER]=Yt),rt===n.FRAMEBUFFER&&(g[n.DRAW_FRAMEBUFFER]=Yt),!0):!1}function Tt(rt,Yt){let It=c,Ft=!1;if(rt){It=f.get(Yt),It===void 0&&(It=[],f.set(Yt,It));let Kt=rt.textures;if(It.length!==Kt.length||It[0]!==n.COLOR_ATTACHMENT0){for(let Qt=0,Ee=Kt.length;Qt<Ee;Qt++)It[Qt]=n.COLOR_ATTACHMENT0+Qt;It.length=Kt.length,Ft=!0}}else It[0]!==n.BACK&&(It[0]=n.BACK,Ft=!0);Ft&&n.drawBuffers(It)}function Lt(rt){return d!==rt?(n.useProgram(rt),d=rt,!0):!1}let st={[ps]:n.FUNC_ADD,[Du]:n.FUNC_SUBTRACT,[Uu]:n.FUNC_REVERSE_SUBTRACT};st[Nu]=n.MIN,st[Ou]=n.MAX;let pt={[Fu]:n.ZERO,[Bu]:n.ONE,[zu]:n.SRC_COLOR,[Hl]:n.SRC_ALPHA,[Xu]:n.SRC_ALPHA_SATURATE,[Gu]:n.DST_COLOR,[$u]:n.DST_ALPHA,[Hu]:n.ONE_MINUS_SRC_COLOR,[$l]:n.ONE_MINUS_SRC_ALPHA,[Wu]:n.ONE_MINUS_DST_COLOR,[Vu]:n.ONE_MINUS_DST_ALPHA,[qu]:n.CONSTANT_COLOR,[Yu]:n.ONE_MINUS_CONSTANT_COLOR,[Zu]:n.CONSTANT_ALPHA,[ju]:n.ONE_MINUS_CONSTANT_ALPHA};function H(rt,Yt,It,Ft,Kt,Qt,Ee,I,it,nt){if(rt===qi){M===!0&&(K(n.BLEND),M=!1);return}if(M===!1&&(V(n.BLEND),M=!0),rt!==Lu){if(rt!==m||nt!==v){if((p!==ps||_!==ps)&&(n.blendEquation(n.FUNC_ADD),p=ps,_=ps),nt)switch(rt){case Js:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case jh:n.blendFunc(n.ONE,n.ONE);break;case Jh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Kh:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",rt);break}else switch(rt){case Js:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case jh:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Jh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Kh:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",rt);break}S=null,y=null,N=null,w=null,R.set(0,0,0),A=0,m=rt,v=nt}return}Kt=Kt||Yt,Qt=Qt||It,Ee=Ee||Ft,(Yt!==p||Kt!==_)&&(n.blendEquationSeparate(st[Yt],st[Kt]),p=Yt,_=Kt),(It!==S||Ft!==y||Qt!==N||Ee!==w)&&(n.blendFuncSeparate(pt[It],pt[Ft],pt[Qt],pt[Ee]),S=It,y=Ft,N=Qt,w=Ee),(I.equals(R)===!1||it!==A)&&(n.blendColor(I.r,I.g,I.b,it),R.copy(I),A=it),m=rt,v=!1}function $t(rt,Yt){rt.side===cn?K(n.CULL_FACE):V(n.CULL_FACE);let It=rt.side===En;Yt&&(It=!It),tt(It),rt.blending===Js&&rt.transparent===!1?H(qi):H(rt.blending,rt.blendEquation,rt.blendSrc,rt.blendDst,rt.blendEquationAlpha,rt.blendSrcAlpha,rt.blendDstAlpha,rt.blendColor,rt.blendAlpha,rt.premultipliedAlpha),o.setFunc(rt.depthFunc),o.setTest(rt.depthTest),o.setMask(rt.depthWrite),r.setMask(rt.colorWrite);let Ft=rt.stencilWrite;a.setTest(Ft),Ft&&(a.setMask(rt.stencilWriteMask),a.setFunc(rt.stencilFunc,rt.stencilRef,rt.stencilFuncMask),a.setOp(rt.stencilFail,rt.stencilZFail,rt.stencilZPass)),Y(rt.polygonOffset,rt.polygonOffsetFactor,rt.polygonOffsetUnits),rt.alphaToCoverage===!0?V(n.SAMPLE_ALPHA_TO_COVERAGE):K(n.SAMPLE_ALPHA_TO_COVERAGE)}function tt(rt){x!==rt&&(rt?n.frontFace(n.CW):n.frontFace(n.CCW),x=rt)}function j(rt){rt!==Pu?(V(n.CULL_FACE),rt!==b&&(rt===Zh?n.cullFace(n.BACK):rt===ku?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):K(n.CULL_FACE),b=rt}function mt(rt){rt!==C&&(D&&n.lineWidth(rt),C=rt)}function Y(rt,Yt,It){rt?(V(n.POLYGON_OFFSET_FILL),(E!==Yt||T!==It)&&(n.polygonOffset(Yt,It),E=Yt,T=It)):K(n.POLYGON_OFFSET_FILL)}function kt(rt){rt?V(n.SCISSOR_TEST):K(n.SCISSOR_TEST)}function B(rt){rt===void 0&&(rt=n.TEXTURE0+k-1),q!==rt&&(n.activeTexture(rt),q=rt)}function L(rt,Yt,It){It===void 0&&(q===null?It=n.TEXTURE0+k-1:It=q);let Ft=X[It];Ft===void 0&&(Ft={type:void 0,texture:void 0},X[It]=Ft),(Ft.type!==rt||Ft.texture!==Yt)&&(q!==It&&(n.activeTexture(It),q=It),n.bindTexture(rt,Yt||J[rt]),Ft.type=rt,Ft.texture=Yt)}function ct(){let rt=X[q];rt!==void 0&&rt.type!==void 0&&(n.bindTexture(rt.type,null),rt.type=void 0,rt.texture=void 0)}function bt(){try{n.compressedTexImage2D.apply(n,arguments)}catch(rt){console.error("THREE.WebGLState:",rt)}}function Pt(){try{n.compressedTexImage3D.apply(n,arguments)}catch(rt){console.error("THREE.WebGLState:",rt)}}function Q(){try{n.texSubImage2D.apply(n,arguments)}catch(rt){console.error("THREE.WebGLState:",rt)}}function at(){try{n.texSubImage3D.apply(n,arguments)}catch(rt){console.error("THREE.WebGLState:",rt)}}function lt(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(rt){console.error("THREE.WebGLState:",rt)}}function xt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(rt){console.error("THREE.WebGLState:",rt)}}function Rt(){try{n.texStorage2D.apply(n,arguments)}catch(rt){console.error("THREE.WebGLState:",rt)}}function wt(){try{n.texStorage3D.apply(n,arguments)}catch(rt){console.error("THREE.WebGLState:",rt)}}function Ut(){try{n.texImage2D.apply(n,arguments)}catch(rt){console.error("THREE.WebGLState:",rt)}}function qt(){try{n.texImage3D.apply(n,arguments)}catch(rt){console.error("THREE.WebGLState:",rt)}}function oe(rt){At.equals(rt)===!1&&(n.scissor(rt.x,rt.y,rt.z,rt.w),At.copy(rt))}function Zt(rt){P.equals(rt)===!1&&(n.viewport(rt.x,rt.y,rt.z,rt.w),P.copy(rt))}function ge(rt,Yt){let It=h.get(Yt);It===void 0&&(It=new WeakMap,h.set(Yt,It));let Ft=It.get(rt);Ft===void 0&&(Ft=n.getUniformBlockIndex(Yt,rt.name),It.set(rt,Ft))}function fe(rt,Yt){let Ft=h.get(Yt).get(rt);l.get(Yt)!==Ft&&(n.uniformBlockBinding(Yt,Ft,rt.__bindingPointIndex),l.set(Yt,Ft))}function Le(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},q=null,X={},g={},f=new WeakMap,c=[],d=null,M=!1,m=null,p=null,S=null,y=null,_=null,N=null,w=null,R=new de(0,0,0),A=0,v=!1,x=null,b=null,C=null,E=null,T=null,At.set(0,0,n.canvas.width,n.canvas.height),P.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:V,disable:K,bindFramebuffer:ot,drawBuffers:Tt,useProgram:Lt,setBlending:H,setMaterial:$t,setFlipSided:tt,setCullFace:j,setLineWidth:mt,setPolygonOffset:Y,setScissorTest:kt,activeTexture:B,bindTexture:L,unbindTexture:ct,compressedTexImage2D:bt,compressedTexImage3D:Pt,texImage2D:Ut,texImage3D:qt,updateUBOMapping:ge,uniformBlockBinding:fe,texStorage2D:Rt,texStorage3D:wt,texSubImage2D:Q,texSubImage3D:at,compressedTexSubImage2D:lt,compressedTexSubImage3D:xt,scissor:oe,viewport:Zt,reset:Le}}function Yd(n,t,e,i){let s=_x(i);switch(e){case gf:return n*t;case xf:return n*t;case vf:return n*t*2;case ph:return n*t/s.components*s.byteLength;case mh:return n*t/s.components*s.byteLength;case _f:return n*t*2/s.components*s.byteLength;case gh:return n*t*2/s.components*s.byteLength;case yf:return n*t*3/s.components*s.byteLength;case Wn:return n*t*4/s.components*s.byteLength;case yh:return n*t*4/s.components*s.byteLength;case Jo:case Ko:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Qo:case ta:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case tc:case nc:return Math.max(n,16)*Math.max(t,8)/4;case Ql:case ec:return Math.max(n,8)*Math.max(t,8)/2;case ic:case sc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case rc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case oc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case ac:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case lc:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case cc:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case hc:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case dc:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case fc:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case uc:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case pc:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case mc:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case gc:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case yc:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case xc:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case vc:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case ea:case _c:case Mc:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Mf:case bc:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Sc:case wc:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function _x(n){switch(n){case Ri:case uf:return{byteLength:1,components:1};case Hr:case pf:case eo:return{byteLength:2,components:1};case fh:case uh:return{byteLength:2,components:4};case vs:case dh:case pi:return{byteLength:4,components:1};case mf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function Mx(n,t,e,i,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new zt,u=new WeakMap,g,f=new WeakMap,c=!1;try{c=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function d(B,L){return c?new OffscreenCanvas(B,L):sa("canvas")}function M(B,L,ct){let bt=1,Pt=kt(B);if((Pt.width>ct||Pt.height>ct)&&(bt=ct/Math.max(Pt.width,Pt.height)),bt<1)if(typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&B instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&B instanceof ImageBitmap||typeof VideoFrame<"u"&&B instanceof VideoFrame){let Q=Math.floor(bt*Pt.width),at=Math.floor(bt*Pt.height);g===void 0&&(g=d(Q,at));let lt=L?d(Q,at):g;return lt.width=Q,lt.height=at,lt.getContext("2d").drawImage(B,0,0,Q,at),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Pt.width+"x"+Pt.height+") to ("+Q+"x"+at+")."),lt}else return"data"in B&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Pt.width+"x"+Pt.height+")."),B;return B}function m(B){return B.generateMipmaps}function p(B){n.generateMipmap(B)}function S(B){return B.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:B.isWebGL3DRenderTarget?n.TEXTURE_3D:B.isWebGLArrayRenderTarget||B.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function y(B,L,ct,bt,Pt=!1){if(B!==null){if(n[B]!==void 0)return n[B];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+B+"'")}let Q=L;if(L===n.RED&&(ct===n.FLOAT&&(Q=n.R32F),ct===n.HALF_FLOAT&&(Q=n.R16F),ct===n.UNSIGNED_BYTE&&(Q=n.R8)),L===n.RED_INTEGER&&(ct===n.UNSIGNED_BYTE&&(Q=n.R8UI),ct===n.UNSIGNED_SHORT&&(Q=n.R16UI),ct===n.UNSIGNED_INT&&(Q=n.R32UI),ct===n.BYTE&&(Q=n.R8I),ct===n.SHORT&&(Q=n.R16I),ct===n.INT&&(Q=n.R32I)),L===n.RG&&(ct===n.FLOAT&&(Q=n.RG32F),ct===n.HALF_FLOAT&&(Q=n.RG16F),ct===n.UNSIGNED_BYTE&&(Q=n.RG8)),L===n.RG_INTEGER&&(ct===n.UNSIGNED_BYTE&&(Q=n.RG8UI),ct===n.UNSIGNED_SHORT&&(Q=n.RG16UI),ct===n.UNSIGNED_INT&&(Q=n.RG32UI),ct===n.BYTE&&(Q=n.RG8I),ct===n.SHORT&&(Q=n.RG16I),ct===n.INT&&(Q=n.RG32I)),L===n.RGB_INTEGER&&(ct===n.UNSIGNED_BYTE&&(Q=n.RGB8UI),ct===n.UNSIGNED_SHORT&&(Q=n.RGB16UI),ct===n.UNSIGNED_INT&&(Q=n.RGB32UI),ct===n.BYTE&&(Q=n.RGB8I),ct===n.SHORT&&(Q=n.RGB16I),ct===n.INT&&(Q=n.RGB32I)),L===n.RGBA_INTEGER&&(ct===n.UNSIGNED_BYTE&&(Q=n.RGBA8UI),ct===n.UNSIGNED_SHORT&&(Q=n.RGBA16UI),ct===n.UNSIGNED_INT&&(Q=n.RGBA32UI),ct===n.BYTE&&(Q=n.RGBA8I),ct===n.SHORT&&(Q=n.RGBA16I),ct===n.INT&&(Q=n.RGBA32I)),L===n.RGB&&ct===n.UNSIGNED_INT_5_9_9_9_REV&&(Q=n.RGB9_E5),L===n.RGBA){let at=Pt?Fa:ze.getTransfer(bt);ct===n.FLOAT&&(Q=n.RGBA32F),ct===n.HALF_FLOAT&&(Q=n.RGBA16F),ct===n.UNSIGNED_BYTE&&(Q=at===Ge?n.SRGB8_ALPHA8:n.RGBA8),ct===n.UNSIGNED_SHORT_4_4_4_4&&(Q=n.RGBA4),ct===n.UNSIGNED_SHORT_5_5_5_1&&(Q=n.RGB5_A1)}return(Q===n.R16F||Q===n.R32F||Q===n.RG16F||Q===n.RG32F||Q===n.RGBA16F||Q===n.RGBA32F)&&t.get("EXT_color_buffer_float"),Q}function _(B,L){let ct;return B?L===null||L===vs||L===sr?ct=n.DEPTH24_STENCIL8:L===pi?ct=n.DEPTH32F_STENCIL8:L===Hr&&(ct=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):L===null||L===vs||L===sr?ct=n.DEPTH_COMPONENT24:L===pi?ct=n.DEPTH_COMPONENT32F:L===Hr&&(ct=n.DEPTH_COMPONENT16),ct}function N(B,L){return m(B)===!0||B.isFramebufferTexture&&B.minFilter!==Dn&&B.minFilter!==ui?Math.log2(Math.max(L.width,L.height))+1:B.mipmaps!==void 0&&B.mipmaps.length>0?B.mipmaps.length:B.isCompressedTexture&&Array.isArray(B.image)?L.mipmaps.length:1}function w(B){let L=B.target;L.removeEventListener("dispose",w),A(L),L.isVideoTexture&&u.delete(L)}function R(B){let L=B.target;L.removeEventListener("dispose",R),x(L)}function A(B){let L=i.get(B);if(L.__webglInit===void 0)return;let ct=B.source,bt=f.get(ct);if(bt){let Pt=bt[L.__cacheKey];Pt.usedTimes--,Pt.usedTimes===0&&v(B),Object.keys(bt).length===0&&f.delete(ct)}i.remove(B)}function v(B){let L=i.get(B);n.deleteTexture(L.__webglTexture);let ct=B.source,bt=f.get(ct);delete bt[L.__cacheKey],o.memory.textures--}function x(B){let L=i.get(B);if(B.depthTexture&&(B.depthTexture.dispose(),i.remove(B.depthTexture)),B.isWebGLCubeRenderTarget)for(let bt=0;bt<6;bt++){if(Array.isArray(L.__webglFramebuffer[bt]))for(let Pt=0;Pt<L.__webglFramebuffer[bt].length;Pt++)n.deleteFramebuffer(L.__webglFramebuffer[bt][Pt]);else n.deleteFramebuffer(L.__webglFramebuffer[bt]);L.__webglDepthbuffer&&n.deleteRenderbuffer(L.__webglDepthbuffer[bt])}else{if(Array.isArray(L.__webglFramebuffer))for(let bt=0;bt<L.__webglFramebuffer.length;bt++)n.deleteFramebuffer(L.__webglFramebuffer[bt]);else n.deleteFramebuffer(L.__webglFramebuffer);if(L.__webglDepthbuffer&&n.deleteRenderbuffer(L.__webglDepthbuffer),L.__webglMultisampledFramebuffer&&n.deleteFramebuffer(L.__webglMultisampledFramebuffer),L.__webglColorRenderbuffer)for(let bt=0;bt<L.__webglColorRenderbuffer.length;bt++)L.__webglColorRenderbuffer[bt]&&n.deleteRenderbuffer(L.__webglColorRenderbuffer[bt]);L.__webglDepthRenderbuffer&&n.deleteRenderbuffer(L.__webglDepthRenderbuffer)}let ct=B.textures;for(let bt=0,Pt=ct.length;bt<Pt;bt++){let Q=i.get(ct[bt]);Q.__webglTexture&&(n.deleteTexture(Q.__webglTexture),o.memory.textures--),i.remove(ct[bt])}i.remove(B)}let b=0;function C(){b=0}function E(){let B=b;return B>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+B+" texture units while this GPU supports only "+s.maxTextures),b+=1,B}function T(B){let L=[];return L.push(B.wrapS),L.push(B.wrapT),L.push(B.wrapR||0),L.push(B.magFilter),L.push(B.minFilter),L.push(B.anisotropy),L.push(B.internalFormat),L.push(B.format),L.push(B.type),L.push(B.generateMipmaps),L.push(B.premultiplyAlpha),L.push(B.flipY),L.push(B.unpackAlignment),L.push(B.colorSpace),L.join()}function k(B,L){let ct=i.get(B);if(B.isVideoTexture&&mt(B),B.isRenderTargetTexture===!1&&B.version>0&&ct.__version!==B.version){let bt=B.image;if(bt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(bt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{P(ct,B,L);return}}e.bindTexture(n.TEXTURE_2D,ct.__webglTexture,n.TEXTURE0+L)}function D(B,L){let ct=i.get(B);if(B.version>0&&ct.__version!==B.version){P(ct,B,L);return}e.bindTexture(n.TEXTURE_2D_ARRAY,ct.__webglTexture,n.TEXTURE0+L)}function O(B,L){let ct=i.get(B);if(B.version>0&&ct.__version!==B.version){P(ct,B,L);return}e.bindTexture(n.TEXTURE_3D,ct.__webglTexture,n.TEXTURE0+L)}function z(B,L){let ct=i.get(B);if(B.version>0&&ct.__version!==B.version){G(ct,B,L);return}e.bindTexture(n.TEXTURE_CUBE_MAP,ct.__webglTexture,n.TEXTURE0+L)}let q={[xs]:n.REPEAT,[gs]:n.CLAMP_TO_EDGE,[Kl]:n.MIRRORED_REPEAT},X={[Dn]:n.NEAREST,[op]:n.NEAREST_MIPMAP_NEAREST,[_o]:n.NEAREST_MIPMAP_LINEAR,[ui]:n.LINEAR,[al]:n.LINEAR_MIPMAP_NEAREST,[ys]:n.LINEAR_MIPMAP_LINEAR},U={[hp]:n.NEVER,[gp]:n.ALWAYS,[dp]:n.LESS,[Sf]:n.LEQUAL,[fp]:n.EQUAL,[mp]:n.GEQUAL,[up]:n.GREATER,[pp]:n.NOTEQUAL};function gt(B,L){if(L.type===pi&&t.has("OES_texture_float_linear")===!1&&(L.magFilter===ui||L.magFilter===al||L.magFilter===_o||L.magFilter===ys||L.minFilter===ui||L.minFilter===al||L.minFilter===_o||L.minFilter===ys)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(B,n.TEXTURE_WRAP_S,q[L.wrapS]),n.texParameteri(B,n.TEXTURE_WRAP_T,q[L.wrapT]),(B===n.TEXTURE_3D||B===n.TEXTURE_2D_ARRAY)&&n.texParameteri(B,n.TEXTURE_WRAP_R,q[L.wrapR]),n.texParameteri(B,n.TEXTURE_MAG_FILTER,X[L.magFilter]),n.texParameteri(B,n.TEXTURE_MIN_FILTER,X[L.minFilter]),L.compareFunction&&(n.texParameteri(B,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(B,n.TEXTURE_COMPARE_FUNC,U[L.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(L.magFilter===Dn||L.minFilter!==_o&&L.minFilter!==ys||L.type===pi&&t.has("OES_texture_float_linear")===!1)return;if(L.anisotropy>1||i.get(L).__currentAnisotropy){let ct=t.get("EXT_texture_filter_anisotropic");n.texParameterf(B,ct.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(L.anisotropy,s.getMaxAnisotropy())),i.get(L).__currentAnisotropy=L.anisotropy}}}function At(B,L){let ct=!1;B.__webglInit===void 0&&(B.__webglInit=!0,L.addEventListener("dispose",w));let bt=L.source,Pt=f.get(bt);Pt===void 0&&(Pt={},f.set(bt,Pt));let Q=T(L);if(Q!==B.__cacheKey){Pt[Q]===void 0&&(Pt[Q]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,ct=!0),Pt[Q].usedTimes++;let at=Pt[B.__cacheKey];at!==void 0&&(Pt[B.__cacheKey].usedTimes--,at.usedTimes===0&&v(L)),B.__cacheKey=Q,B.__webglTexture=Pt[Q].texture}return ct}function P(B,L,ct){let bt=n.TEXTURE_2D;(L.isDataArrayTexture||L.isCompressedArrayTexture)&&(bt=n.TEXTURE_2D_ARRAY),L.isData3DTexture&&(bt=n.TEXTURE_3D);let Pt=At(B,L),Q=L.source;e.bindTexture(bt,B.__webglTexture,n.TEXTURE0+ct);let at=i.get(Q);if(Q.version!==at.__version||Pt===!0){e.activeTexture(n.TEXTURE0+ct);let lt=ze.getPrimaries(ze.workingColorSpace),xt=L.colorSpace===Wi?null:ze.getPrimaries(L.colorSpace),Rt=L.colorSpace===Wi||lt===xt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,L.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,L.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Rt);let wt=M(L.image,!1,s.maxTextureSize);wt=Y(L,wt);let Ut=r.convert(L.format,L.colorSpace),qt=r.convert(L.type),oe=y(L.internalFormat,Ut,qt,L.colorSpace,L.isVideoTexture);gt(bt,L);let Zt,ge=L.mipmaps,fe=L.isVideoTexture!==!0,Le=at.__version===void 0||Pt===!0,rt=Q.dataReady,Yt=N(L,wt);if(L.isDepthTexture)oe=_(L.format===rr,L.type),Le&&(fe?e.texStorage2D(n.TEXTURE_2D,1,oe,wt.width,wt.height):e.texImage2D(n.TEXTURE_2D,0,oe,wt.width,wt.height,0,Ut,qt,null));else if(L.isDataTexture)if(ge.length>0){fe&&Le&&e.texStorage2D(n.TEXTURE_2D,Yt,oe,ge[0].width,ge[0].height);for(let It=0,Ft=ge.length;It<Ft;It++)Zt=ge[It],fe?rt&&e.texSubImage2D(n.TEXTURE_2D,It,0,0,Zt.width,Zt.height,Ut,qt,Zt.data):e.texImage2D(n.TEXTURE_2D,It,oe,Zt.width,Zt.height,0,Ut,qt,Zt.data);L.generateMipmaps=!1}else fe?(Le&&e.texStorage2D(n.TEXTURE_2D,Yt,oe,wt.width,wt.height),rt&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,wt.width,wt.height,Ut,qt,wt.data)):e.texImage2D(n.TEXTURE_2D,0,oe,wt.width,wt.height,0,Ut,qt,wt.data);else if(L.isCompressedTexture)if(L.isCompressedArrayTexture){fe&&Le&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Yt,oe,ge[0].width,ge[0].height,wt.depth);for(let It=0,Ft=ge.length;It<Ft;It++)if(Zt=ge[It],L.format!==Wn)if(Ut!==null)if(fe){if(rt)if(L.layerUpdates.size>0){let Kt=Yd(Zt.width,Zt.height,L.format,L.type);for(let Qt of L.layerUpdates){let Ee=Zt.data.subarray(Qt*Kt/Zt.data.BYTES_PER_ELEMENT,(Qt+1)*Kt/Zt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,It,0,0,Qt,Zt.width,Zt.height,1,Ut,Ee)}L.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,It,0,0,0,Zt.width,Zt.height,wt.depth,Ut,Zt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,It,oe,Zt.width,Zt.height,wt.depth,0,Zt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else fe?rt&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,It,0,0,0,Zt.width,Zt.height,wt.depth,Ut,qt,Zt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,It,oe,Zt.width,Zt.height,wt.depth,0,Ut,qt,Zt.data)}else{fe&&Le&&e.texStorage2D(n.TEXTURE_2D,Yt,oe,ge[0].width,ge[0].height);for(let It=0,Ft=ge.length;It<Ft;It++)Zt=ge[It],L.format!==Wn?Ut!==null?fe?rt&&e.compressedTexSubImage2D(n.TEXTURE_2D,It,0,0,Zt.width,Zt.height,Ut,Zt.data):e.compressedTexImage2D(n.TEXTURE_2D,It,oe,Zt.width,Zt.height,0,Zt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):fe?rt&&e.texSubImage2D(n.TEXTURE_2D,It,0,0,Zt.width,Zt.height,Ut,qt,Zt.data):e.texImage2D(n.TEXTURE_2D,It,oe,Zt.width,Zt.height,0,Ut,qt,Zt.data)}else if(L.isDataArrayTexture)if(fe){if(Le&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Yt,oe,wt.width,wt.height,wt.depth),rt)if(L.layerUpdates.size>0){let It=Yd(wt.width,wt.height,L.format,L.type);for(let Ft of L.layerUpdates){let Kt=wt.data.subarray(Ft*It/wt.data.BYTES_PER_ELEMENT,(Ft+1)*It/wt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Ft,wt.width,wt.height,1,Ut,qt,Kt)}L.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,wt.width,wt.height,wt.depth,Ut,qt,wt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,oe,wt.width,wt.height,wt.depth,0,Ut,qt,wt.data);else if(L.isData3DTexture)fe?(Le&&e.texStorage3D(n.TEXTURE_3D,Yt,oe,wt.width,wt.height,wt.depth),rt&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,wt.width,wt.height,wt.depth,Ut,qt,wt.data)):e.texImage3D(n.TEXTURE_3D,0,oe,wt.width,wt.height,wt.depth,0,Ut,qt,wt.data);else if(L.isFramebufferTexture){if(Le)if(fe)e.texStorage2D(n.TEXTURE_2D,Yt,oe,wt.width,wt.height);else{let It=wt.width,Ft=wt.height;for(let Kt=0;Kt<Yt;Kt++)e.texImage2D(n.TEXTURE_2D,Kt,oe,It,Ft,0,Ut,qt,null),It>>=1,Ft>>=1}}else if(ge.length>0){if(fe&&Le){let It=kt(ge[0]);e.texStorage2D(n.TEXTURE_2D,Yt,oe,It.width,It.height)}for(let It=0,Ft=ge.length;It<Ft;It++)Zt=ge[It],fe?rt&&e.texSubImage2D(n.TEXTURE_2D,It,0,0,Ut,qt,Zt):e.texImage2D(n.TEXTURE_2D,It,oe,Ut,qt,Zt);L.generateMipmaps=!1}else if(fe){if(Le){let It=kt(wt);e.texStorage2D(n.TEXTURE_2D,Yt,oe,It.width,It.height)}rt&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,Ut,qt,wt)}else e.texImage2D(n.TEXTURE_2D,0,oe,Ut,qt,wt);m(L)&&p(bt),at.__version=Q.version,L.onUpdate&&L.onUpdate(L)}B.__version=L.version}function G(B,L,ct){if(L.image.length!==6)return;let bt=At(B,L),Pt=L.source;e.bindTexture(n.TEXTURE_CUBE_MAP,B.__webglTexture,n.TEXTURE0+ct);let Q=i.get(Pt);if(Pt.version!==Q.__version||bt===!0){e.activeTexture(n.TEXTURE0+ct);let at=ze.getPrimaries(ze.workingColorSpace),lt=L.colorSpace===Wi?null:ze.getPrimaries(L.colorSpace),xt=L.colorSpace===Wi||at===lt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,L.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,L.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt);let Rt=L.isCompressedTexture||L.image[0].isCompressedTexture,wt=L.image[0]&&L.image[0].isDataTexture,Ut=[];for(let Ft=0;Ft<6;Ft++)!Rt&&!wt?Ut[Ft]=M(L.image[Ft],!0,s.maxCubemapSize):Ut[Ft]=wt?L.image[Ft].image:L.image[Ft],Ut[Ft]=Y(L,Ut[Ft]);let qt=Ut[0],oe=r.convert(L.format,L.colorSpace),Zt=r.convert(L.type),ge=y(L.internalFormat,oe,Zt,L.colorSpace),fe=L.isVideoTexture!==!0,Le=Q.__version===void 0||bt===!0,rt=Pt.dataReady,Yt=N(L,qt);gt(n.TEXTURE_CUBE_MAP,L);let It;if(Rt){fe&&Le&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Yt,ge,qt.width,qt.height);for(let Ft=0;Ft<6;Ft++){It=Ut[Ft].mipmaps;for(let Kt=0;Kt<It.length;Kt++){let Qt=It[Kt];L.format!==Wn?oe!==null?fe?rt&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ft,Kt,0,0,Qt.width,Qt.height,oe,Qt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ft,Kt,ge,Qt.width,Qt.height,0,Qt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):fe?rt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ft,Kt,0,0,Qt.width,Qt.height,oe,Zt,Qt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ft,Kt,ge,Qt.width,Qt.height,0,oe,Zt,Qt.data)}}}else{if(It=L.mipmaps,fe&&Le){It.length>0&&Yt++;let Ft=kt(Ut[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,Yt,ge,Ft.width,Ft.height)}for(let Ft=0;Ft<6;Ft++)if(wt){fe?rt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ft,0,0,0,Ut[Ft].width,Ut[Ft].height,oe,Zt,Ut[Ft].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ft,0,ge,Ut[Ft].width,Ut[Ft].height,0,oe,Zt,Ut[Ft].data);for(let Kt=0;Kt<It.length;Kt++){let Ee=It[Kt].image[Ft].image;fe?rt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ft,Kt+1,0,0,Ee.width,Ee.height,oe,Zt,Ee.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ft,Kt+1,ge,Ee.width,Ee.height,0,oe,Zt,Ee.data)}}else{fe?rt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ft,0,0,0,oe,Zt,Ut[Ft]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ft,0,ge,oe,Zt,Ut[Ft]);for(let Kt=0;Kt<It.length;Kt++){let Qt=It[Kt];fe?rt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ft,Kt+1,0,0,oe,Zt,Qt.image[Ft]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ft,Kt+1,ge,oe,Zt,Qt.image[Ft])}}}m(L)&&p(n.TEXTURE_CUBE_MAP),Q.__version=Pt.version,L.onUpdate&&L.onUpdate(L)}B.__version=L.version}function J(B,L,ct,bt,Pt,Q){let at=r.convert(ct.format,ct.colorSpace),lt=r.convert(ct.type),xt=y(ct.internalFormat,at,lt,ct.colorSpace),Rt=i.get(L),wt=i.get(ct);if(wt.__renderTarget=L,!Rt.__hasExternalTextures){let Ut=Math.max(1,L.width>>Q),qt=Math.max(1,L.height>>Q);Pt===n.TEXTURE_3D||Pt===n.TEXTURE_2D_ARRAY?e.texImage3D(Pt,Q,xt,Ut,qt,L.depth,0,at,lt,null):e.texImage2D(Pt,Q,xt,Ut,qt,0,at,lt,null)}e.bindFramebuffer(n.FRAMEBUFFER,B),j(L)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,bt,Pt,wt.__webglTexture,0,tt(L)):(Pt===n.TEXTURE_2D||Pt>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Pt<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,bt,Pt,wt.__webglTexture,Q),e.bindFramebuffer(n.FRAMEBUFFER,null)}function V(B,L,ct){if(n.bindRenderbuffer(n.RENDERBUFFER,B),L.depthBuffer){let bt=L.depthTexture,Pt=bt&&bt.isDepthTexture?bt.type:null,Q=_(L.stencilBuffer,Pt),at=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,lt=tt(L);j(L)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,lt,Q,L.width,L.height):ct?n.renderbufferStorageMultisample(n.RENDERBUFFER,lt,Q,L.width,L.height):n.renderbufferStorage(n.RENDERBUFFER,Q,L.width,L.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,at,n.RENDERBUFFER,B)}else{let bt=L.textures;for(let Pt=0;Pt<bt.length;Pt++){let Q=bt[Pt],at=r.convert(Q.format,Q.colorSpace),lt=r.convert(Q.type),xt=y(Q.internalFormat,at,lt,Q.colorSpace),Rt=tt(L);ct&&j(L)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Rt,xt,L.width,L.height):j(L)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Rt,xt,L.width,L.height):n.renderbufferStorage(n.RENDERBUFFER,xt,L.width,L.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function K(B,L){if(L&&L.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,B),!(L.depthTexture&&L.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let bt=i.get(L.depthTexture);bt.__renderTarget=L,(!bt.__webglTexture||L.depthTexture.image.width!==L.width||L.depthTexture.image.height!==L.height)&&(L.depthTexture.image.width=L.width,L.depthTexture.image.height=L.height,L.depthTexture.needsUpdate=!0),k(L.depthTexture,0);let Pt=bt.__webglTexture,Q=tt(L);if(L.depthTexture.format===Ks)j(L)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Pt,0,Q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Pt,0);else if(L.depthTexture.format===rr)j(L)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Pt,0,Q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Pt,0);else throw new Error("Unknown depthTexture format")}function ot(B){let L=i.get(B),ct=B.isWebGLCubeRenderTarget===!0;if(L.__boundDepthTexture!==B.depthTexture){let bt=B.depthTexture;if(L.__depthDisposeCallback&&L.__depthDisposeCallback(),bt){let Pt=()=>{delete L.__boundDepthTexture,delete L.__depthDisposeCallback,bt.removeEventListener("dispose",Pt)};bt.addEventListener("dispose",Pt),L.__depthDisposeCallback=Pt}L.__boundDepthTexture=bt}if(B.depthTexture&&!L.__autoAllocateDepthBuffer){if(ct)throw new Error("target.depthTexture not supported in Cube render targets");K(L.__webglFramebuffer,B)}else if(ct){L.__webglDepthbuffer=[];for(let bt=0;bt<6;bt++)if(e.bindFramebuffer(n.FRAMEBUFFER,L.__webglFramebuffer[bt]),L.__webglDepthbuffer[bt]===void 0)L.__webglDepthbuffer[bt]=n.createRenderbuffer(),V(L.__webglDepthbuffer[bt],B,!1);else{let Pt=B.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Q=L.__webglDepthbuffer[bt];n.bindRenderbuffer(n.RENDERBUFFER,Q),n.framebufferRenderbuffer(n.FRAMEBUFFER,Pt,n.RENDERBUFFER,Q)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,L.__webglFramebuffer),L.__webglDepthbuffer===void 0)L.__webglDepthbuffer=n.createRenderbuffer(),V(L.__webglDepthbuffer,B,!1);else{let bt=B.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Pt=L.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Pt),n.framebufferRenderbuffer(n.FRAMEBUFFER,bt,n.RENDERBUFFER,Pt)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Tt(B,L,ct){let bt=i.get(B);L!==void 0&&J(bt.__webglFramebuffer,B,B.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),ct!==void 0&&ot(B)}function Lt(B){let L=B.texture,ct=i.get(B),bt=i.get(L);B.addEventListener("dispose",R);let Pt=B.textures,Q=B.isWebGLCubeRenderTarget===!0,at=Pt.length>1;if(at||(bt.__webglTexture===void 0&&(bt.__webglTexture=n.createTexture()),bt.__version=L.version,o.memory.textures++),Q){ct.__webglFramebuffer=[];for(let lt=0;lt<6;lt++)if(L.mipmaps&&L.mipmaps.length>0){ct.__webglFramebuffer[lt]=[];for(let xt=0;xt<L.mipmaps.length;xt++)ct.__webglFramebuffer[lt][xt]=n.createFramebuffer()}else ct.__webglFramebuffer[lt]=n.createFramebuffer()}else{if(L.mipmaps&&L.mipmaps.length>0){ct.__webglFramebuffer=[];for(let lt=0;lt<L.mipmaps.length;lt++)ct.__webglFramebuffer[lt]=n.createFramebuffer()}else ct.__webglFramebuffer=n.createFramebuffer();if(at)for(let lt=0,xt=Pt.length;lt<xt;lt++){let Rt=i.get(Pt[lt]);Rt.__webglTexture===void 0&&(Rt.__webglTexture=n.createTexture(),o.memory.textures++)}if(B.samples>0&&j(B)===!1){ct.__webglMultisampledFramebuffer=n.createFramebuffer(),ct.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,ct.__webglMultisampledFramebuffer);for(let lt=0;lt<Pt.length;lt++){let xt=Pt[lt];ct.__webglColorRenderbuffer[lt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,ct.__webglColorRenderbuffer[lt]);let Rt=r.convert(xt.format,xt.colorSpace),wt=r.convert(xt.type),Ut=y(xt.internalFormat,Rt,wt,xt.colorSpace,B.isXRRenderTarget===!0),qt=tt(B);n.renderbufferStorageMultisample(n.RENDERBUFFER,qt,Ut,B.width,B.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+lt,n.RENDERBUFFER,ct.__webglColorRenderbuffer[lt])}n.bindRenderbuffer(n.RENDERBUFFER,null),B.depthBuffer&&(ct.__webglDepthRenderbuffer=n.createRenderbuffer(),V(ct.__webglDepthRenderbuffer,B,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Q){e.bindTexture(n.TEXTURE_CUBE_MAP,bt.__webglTexture),gt(n.TEXTURE_CUBE_MAP,L);for(let lt=0;lt<6;lt++)if(L.mipmaps&&L.mipmaps.length>0)for(let xt=0;xt<L.mipmaps.length;xt++)J(ct.__webglFramebuffer[lt][xt],B,L,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,xt);else J(ct.__webglFramebuffer[lt],B,L,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0);m(L)&&p(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(at){for(let lt=0,xt=Pt.length;lt<xt;lt++){let Rt=Pt[lt],wt=i.get(Rt);e.bindTexture(n.TEXTURE_2D,wt.__webglTexture),gt(n.TEXTURE_2D,Rt),J(ct.__webglFramebuffer,B,Rt,n.COLOR_ATTACHMENT0+lt,n.TEXTURE_2D,0),m(Rt)&&p(n.TEXTURE_2D)}e.unbindTexture()}else{let lt=n.TEXTURE_2D;if((B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)&&(lt=B.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(lt,bt.__webglTexture),gt(lt,L),L.mipmaps&&L.mipmaps.length>0)for(let xt=0;xt<L.mipmaps.length;xt++)J(ct.__webglFramebuffer[xt],B,L,n.COLOR_ATTACHMENT0,lt,xt);else J(ct.__webglFramebuffer,B,L,n.COLOR_ATTACHMENT0,lt,0);m(L)&&p(lt),e.unbindTexture()}B.depthBuffer&&ot(B)}function st(B){let L=B.textures;for(let ct=0,bt=L.length;ct<bt;ct++){let Pt=L[ct];if(m(Pt)){let Q=S(B),at=i.get(Pt).__webglTexture;e.bindTexture(Q,at),p(Q),e.unbindTexture()}}}let pt=[],H=[];function $t(B){if(B.samples>0){if(j(B)===!1){let L=B.textures,ct=B.width,bt=B.height,Pt=n.COLOR_BUFFER_BIT,Q=B.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,at=i.get(B),lt=L.length>1;if(lt)for(let xt=0;xt<L.length;xt++)e.bindFramebuffer(n.FRAMEBUFFER,at.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+xt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,at.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+xt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,at.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,at.__webglFramebuffer);for(let xt=0;xt<L.length;xt++){if(B.resolveDepthBuffer&&(B.depthBuffer&&(Pt|=n.DEPTH_BUFFER_BIT),B.stencilBuffer&&B.resolveStencilBuffer&&(Pt|=n.STENCIL_BUFFER_BIT)),lt){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,at.__webglColorRenderbuffer[xt]);let Rt=i.get(L[xt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Rt,0)}n.blitFramebuffer(0,0,ct,bt,0,0,ct,bt,Pt,n.NEAREST),l===!0&&(pt.length=0,H.length=0,pt.push(n.COLOR_ATTACHMENT0+xt),B.depthBuffer&&B.resolveDepthBuffer===!1&&(pt.push(Q),H.push(Q),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,H)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,pt))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),lt)for(let xt=0;xt<L.length;xt++){e.bindFramebuffer(n.FRAMEBUFFER,at.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+xt,n.RENDERBUFFER,at.__webglColorRenderbuffer[xt]);let Rt=i.get(L[xt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,at.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+xt,n.TEXTURE_2D,Rt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,at.__webglMultisampledFramebuffer)}else if(B.depthBuffer&&B.resolveDepthBuffer===!1&&l){let L=B.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[L])}}}function tt(B){return Math.min(s.maxSamples,B.samples)}function j(B){let L=i.get(B);return B.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&L.__useRenderToTexture!==!1}function mt(B){let L=o.render.frame;u.get(B)!==L&&(u.set(B,L),B.update())}function Y(B,L){let ct=B.colorSpace,bt=B.format,Pt=B.type;return B.isCompressedTexture===!0||B.isVideoTexture===!0||ct!==dr&&ct!==Wi&&(ze.getTransfer(ct)===Ge?(bt!==Wn||Pt!==Ri)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ct)),L}function kt(B){return typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement?(h.width=B.naturalWidth||B.width,h.height=B.naturalHeight||B.height):typeof VideoFrame<"u"&&B instanceof VideoFrame?(h.width=B.displayWidth,h.height=B.displayHeight):(h.width=B.width,h.height=B.height),h}this.allocateTextureUnit=E,this.resetTextureUnits=C,this.setTexture2D=k,this.setTexture2DArray=D,this.setTexture3D=O,this.setTextureCube=z,this.rebindTextures=Tt,this.setupRenderTarget=Lt,this.updateRenderTargetMipmap=st,this.updateMultisampleRenderTarget=$t,this.setupDepthRenderbuffer=ot,this.setupFrameBufferTexture=J,this.useMultisampledRTT=j}function bx(n,t){function e(i,s=Wi){let r,o=ze.getTransfer(s);if(i===Ri)return n.UNSIGNED_BYTE;if(i===fh)return n.UNSIGNED_SHORT_4_4_4_4;if(i===uh)return n.UNSIGNED_SHORT_5_5_5_1;if(i===mf)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===uf)return n.BYTE;if(i===pf)return n.SHORT;if(i===Hr)return n.UNSIGNED_SHORT;if(i===dh)return n.INT;if(i===vs)return n.UNSIGNED_INT;if(i===pi)return n.FLOAT;if(i===eo)return n.HALF_FLOAT;if(i===gf)return n.ALPHA;if(i===yf)return n.RGB;if(i===Wn)return n.RGBA;if(i===xf)return n.LUMINANCE;if(i===vf)return n.LUMINANCE_ALPHA;if(i===Ks)return n.DEPTH_COMPONENT;if(i===rr)return n.DEPTH_STENCIL;if(i===ph)return n.RED;if(i===mh)return n.RED_INTEGER;if(i===_f)return n.RG;if(i===gh)return n.RG_INTEGER;if(i===yh)return n.RGBA_INTEGER;if(i===Jo||i===Ko||i===Qo||i===ta)if(o===Ge)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Jo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ko)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Qo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ta)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Jo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ko)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Qo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ta)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ql||i===tc||i===ec||i===nc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Ql)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===tc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ec)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===nc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ic||i===sc||i===rc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===ic||i===sc)return o===Ge?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===rc)return o===Ge?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===oc||i===ac||i===lc||i===cc||i===hc||i===dc||i===fc||i===uc||i===pc||i===mc||i===gc||i===yc||i===xc||i===vc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===oc)return o===Ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ac)return o===Ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===lc)return o===Ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===cc)return o===Ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===hc)return o===Ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===dc)return o===Ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===fc)return o===Ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===uc)return o===Ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===pc)return o===Ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===mc)return o===Ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===gc)return o===Ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===yc)return o===Ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===xc)return o===Ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===vc)return o===Ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ea||i===_c||i===Mc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===ea)return o===Ge?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===_c)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Mc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Mf||i===bc||i===Sc||i===wc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===ea)return r.COMPRESSED_RED_RGTC1_EXT;if(i===bc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Sc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===wc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===sr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var zc=class extends Ln{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Me=class extends We{constructor(){super(),this.isGroup=!0,this.type="Group"}},Sx={type:"move"},Fr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Me,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Me,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Me,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){o=!0;for(let M of t.hand.values()){let m=e.getJointPose(M,i),p=this._getHandJoint(h,M);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let u=h.joints["index-finger-tip"],g=h.joints["thumb-tip"],f=u.position.distanceTo(g.position),c=.02,d=.005;h.inputState.pinching&&f>c+d?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&f<=c-d&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Sx)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),h!==null&&(h.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new Me;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},wx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ex=`
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

}`,Hc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){let s=new On,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new Un({vertexShader:wx,fragmentShader:Ex,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ve(new Tn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},$c=class extends ji{constructor(t,e){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,h=null,u=null,g=null,f=null,c=null,d=null,M=new Hc,m=e.getContextAttributes(),p=null,S=null,y=[],_=[],N=new zt,w=null,R=new Ln;R.viewport=new rn;let A=new Ln;A.viewport=new rn;let v=[R,A],x=new zc,b=null,C=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(P){let G=y[P];return G===void 0&&(G=new Fr,y[P]=G),G.getTargetRaySpace()},this.getControllerGrip=function(P){let G=y[P];return G===void 0&&(G=new Fr,y[P]=G),G.getGripSpace()},this.getHand=function(P){let G=y[P];return G===void 0&&(G=new Fr,y[P]=G),G.getHandSpace()};function E(P){let G=_.indexOf(P.inputSource);if(G===-1)return;let J=y[G];J!==void 0&&(J.update(P.inputSource,P.frame,h||o),J.dispatchEvent({type:P.type,data:P.inputSource}))}function T(){s.removeEventListener("select",E),s.removeEventListener("selectstart",E),s.removeEventListener("selectend",E),s.removeEventListener("squeeze",E),s.removeEventListener("squeezestart",E),s.removeEventListener("squeezeend",E),s.removeEventListener("end",T),s.removeEventListener("inputsourceschange",k);for(let P=0;P<y.length;P++){let G=_[P];G!==null&&(_[P]=null,y[P].disconnect(G))}b=null,C=null,M.reset(),t.setRenderTarget(p),c=null,f=null,g=null,s=null,S=null,At.stop(),i.isPresenting=!1,t.setPixelRatio(w),t.setSize(N.width,N.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(P){r=P,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(P){a=P,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||o},this.setReferenceSpace=function(P){h=P},this.getBaseLayer=function(){return f!==null?f:c},this.getBinding=function(){return g},this.getFrame=function(){return d},this.getSession=function(){return s},this.setSession=async function(P){if(s=P,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",E),s.addEventListener("selectstart",E),s.addEventListener("selectend",E),s.addEventListener("squeeze",E),s.addEventListener("squeezestart",E),s.addEventListener("squeezeend",E),s.addEventListener("end",T),s.addEventListener("inputsourceschange",k),m.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(N),s.renderState.layers===void 0){let G={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};c=new XRWebGLLayer(s,e,G),s.updateRenderState({baseLayer:c}),t.setPixelRatio(1),t.setSize(c.framebufferWidth,c.framebufferHeight,!1),S=new Ci(c.framebufferWidth,c.framebufferHeight,{format:Wn,type:Ri,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let G=null,J=null,V=null;m.depth&&(V=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,G=m.stencil?rr:Ks,J=m.stencil?sr:vs);let K={colorFormat:e.RGBA8,depthFormat:V,scaleFactor:r};g=new XRWebGLBinding(s,e),f=g.createProjectionLayer(K),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),S=new Ci(f.textureWidth,f.textureHeight,{format:Wn,type:Ri,depthTexture:new ma(f.textureWidth,f.textureHeight,J,void 0,void 0,void 0,void 0,void 0,void 0,G),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),h=null,o=await s.requestReferenceSpace(a),At.setContext(s),At.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function k(P){for(let G=0;G<P.removed.length;G++){let J=P.removed[G],V=_.indexOf(J);V>=0&&(_[V]=null,y[V].disconnect(J))}for(let G=0;G<P.added.length;G++){let J=P.added[G],V=_.indexOf(J);if(V===-1){for(let ot=0;ot<y.length;ot++)if(ot>=_.length){_.push(J),V=ot;break}else if(_[ot]===null){_[ot]=J,V=ot;break}if(V===-1)break}let K=y[V];K&&K.connect(J)}}let D=new $,O=new $;function z(P,G,J){D.setFromMatrixPosition(G.matrixWorld),O.setFromMatrixPosition(J.matrixWorld);let V=D.distanceTo(O),K=G.projectionMatrix.elements,ot=J.projectionMatrix.elements,Tt=K[14]/(K[10]-1),Lt=K[14]/(K[10]+1),st=(K[9]+1)/K[5],pt=(K[9]-1)/K[5],H=(K[8]-1)/K[0],$t=(ot[8]+1)/ot[0],tt=Tt*H,j=Tt*$t,mt=V/(-H+$t),Y=mt*-H;if(G.matrixWorld.decompose(P.position,P.quaternion,P.scale),P.translateX(Y),P.translateZ(mt),P.matrixWorld.compose(P.position,P.quaternion,P.scale),P.matrixWorldInverse.copy(P.matrixWorld).invert(),K[10]===-1)P.projectionMatrix.copy(G.projectionMatrix),P.projectionMatrixInverse.copy(G.projectionMatrixInverse);else{let kt=Tt+mt,B=Lt+mt,L=tt-Y,ct=j+(V-Y),bt=st*Lt/B*kt,Pt=pt*Lt/B*kt;P.projectionMatrix.makePerspective(L,ct,bt,Pt,kt,B),P.projectionMatrixInverse.copy(P.projectionMatrix).invert()}}function q(P,G){G===null?P.matrixWorld.copy(P.matrix):P.matrixWorld.multiplyMatrices(G.matrixWorld,P.matrix),P.matrixWorldInverse.copy(P.matrixWorld).invert()}this.updateCamera=function(P){if(s===null)return;let G=P.near,J=P.far;M.texture!==null&&(M.depthNear>0&&(G=M.depthNear),M.depthFar>0&&(J=M.depthFar)),x.near=A.near=R.near=G,x.far=A.far=R.far=J,(b!==x.near||C!==x.far)&&(s.updateRenderState({depthNear:x.near,depthFar:x.far}),b=x.near,C=x.far),R.layers.mask=P.layers.mask|2,A.layers.mask=P.layers.mask|4,x.layers.mask=R.layers.mask|A.layers.mask;let V=P.parent,K=x.cameras;q(x,V);for(let ot=0;ot<K.length;ot++)q(K[ot],V);K.length===2?z(x,R,A):x.projectionMatrix.copy(R.projectionMatrix),X(P,x,V)};function X(P,G,J){J===null?P.matrix.copy(G.matrixWorld):(P.matrix.copy(J.matrixWorld),P.matrix.invert(),P.matrix.multiply(G.matrixWorld)),P.matrix.decompose(P.position,P.quaternion,P.scale),P.updateMatrixWorld(!0),P.projectionMatrix.copy(G.projectionMatrix),P.projectionMatrixInverse.copy(G.projectionMatrixInverse),P.isPerspectiveCamera&&(P.fov=$r*2*Math.atan(1/P.projectionMatrix.elements[5]),P.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(f===null&&c===null))return l},this.setFoveation=function(P){l=P,f!==null&&(f.fixedFoveation=P),c!==null&&c.fixedFoveation!==void 0&&(c.fixedFoveation=P)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(x)};let U=null;function gt(P,G){if(u=G.getViewerPose(h||o),d=G,u!==null){let J=u.views;c!==null&&(t.setRenderTargetFramebuffer(S,c.framebuffer),t.setRenderTarget(S));let V=!1;J.length!==x.cameras.length&&(x.cameras.length=0,V=!0);for(let ot=0;ot<J.length;ot++){let Tt=J[ot],Lt=null;if(c!==null)Lt=c.getViewport(Tt);else{let pt=g.getViewSubImage(f,Tt);Lt=pt.viewport,ot===0&&(t.setRenderTargetTextures(S,pt.colorTexture,f.ignoreDepthValues?void 0:pt.depthStencilTexture),t.setRenderTarget(S))}let st=v[ot];st===void 0&&(st=new Ln,st.layers.enable(ot),st.viewport=new rn,v[ot]=st),st.matrix.fromArray(Tt.transform.matrix),st.matrix.decompose(st.position,st.quaternion,st.scale),st.projectionMatrix.fromArray(Tt.projectionMatrix),st.projectionMatrixInverse.copy(st.projectionMatrix).invert(),st.viewport.set(Lt.x,Lt.y,Lt.width,Lt.height),ot===0&&(x.matrix.copy(st.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),V===!0&&x.cameras.push(st)}let K=s.enabledFeatures;if(K&&K.includes("depth-sensing")){let ot=g.getDepthInformation(J[0]);ot&&ot.isValid&&ot.texture&&M.init(t,ot,s.renderState)}}for(let J=0;J<y.length;J++){let V=_[J],K=y[J];V!==null&&K!==void 0&&K.update(V,G,h||o)}U&&U(P,G),G.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:G}),d=null}let At=new Af;At.setAnimationLoop(gt),this.setAnimationLoop=function(P){U=P},this.dispose=function(){}}},fs=new si,Tx=new Oe;function Ax(n,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Tf(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,S,y,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),g(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&c(m,p,_)):p.isMeshMatcapMaterial?(r(m,p),d(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),M(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,S,y):p.isSpriteMaterial?h(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===En&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===En&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let S=t.get(p),y=S.envMap,_=S.envMapRotation;y&&(m.envMap.value=y,fs.copy(_),fs.x*=-1,fs.y*=-1,fs.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(fs.y*=-1,fs.z*=-1),m.envMapRotation.value.setFromMatrix4(Tx.makeRotationFromEuler(fs)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,S,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=y*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function g(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function c(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===En&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function d(m,p){p.matcap&&(m.matcap.value=p.matcap)}function M(m,p){let S=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Rx(n,t,e,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,y){let _=y.program;i.uniformBlockBinding(S,_)}function h(S,y){let _=s[S.id];_===void 0&&(d(S),_=u(S),s[S.id]=_,S.addEventListener("dispose",m));let N=y.program;i.updateUBOMapping(S,N);let w=t.render.frame;r[S.id]!==w&&(f(S),r[S.id]=w)}function u(S){let y=g();S.__bindingPointIndex=y;let _=n.createBuffer(),N=S.__size,w=S.usage;return n.bindBuffer(n.UNIFORM_BUFFER,_),n.bufferData(n.UNIFORM_BUFFER,N,w),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,_),_}function g(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){let y=s[S.id],_=S.uniforms,N=S.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let w=0,R=_.length;w<R;w++){let A=Array.isArray(_[w])?_[w]:[_[w]];for(let v=0,x=A.length;v<x;v++){let b=A[v];if(c(b,w,v,N)===!0){let C=b.__offset,E=Array.isArray(b.value)?b.value:[b.value],T=0;for(let k=0;k<E.length;k++){let D=E[k],O=M(D);typeof D=="number"||typeof D=="boolean"?(b.__data[0]=D,n.bufferSubData(n.UNIFORM_BUFFER,C+T,b.__data)):D.isMatrix3?(b.__data[0]=D.elements[0],b.__data[1]=D.elements[1],b.__data[2]=D.elements[2],b.__data[3]=0,b.__data[4]=D.elements[3],b.__data[5]=D.elements[4],b.__data[6]=D.elements[5],b.__data[7]=0,b.__data[8]=D.elements[6],b.__data[9]=D.elements[7],b.__data[10]=D.elements[8],b.__data[11]=0):(D.toArray(b.__data,T),T+=O.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,C,b.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function c(S,y,_,N){let w=S.value,R=y+"_"+_;if(N[R]===void 0)return typeof w=="number"||typeof w=="boolean"?N[R]=w:N[R]=w.clone(),!0;{let A=N[R];if(typeof w=="number"||typeof w=="boolean"){if(A!==w)return N[R]=w,!0}else if(A.equals(w)===!1)return A.copy(w),!0}return!1}function d(S){let y=S.uniforms,_=0,N=16;for(let R=0,A=y.length;R<A;R++){let v=Array.isArray(y[R])?y[R]:[y[R]];for(let x=0,b=v.length;x<b;x++){let C=v[x],E=Array.isArray(C.value)?C.value:[C.value];for(let T=0,k=E.length;T<k;T++){let D=E[T],O=M(D),z=_%N,q=z%O.boundary,X=z+q;_+=q,X!==0&&N-X<O.storage&&(_+=N-X),C.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=_,_+=O.storage}}}let w=_%N;return w>0&&(_+=N-w),S.__size=_,S.__cache={},this}function M(S){let y={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(y.boundary=4,y.storage=4):S.isVector2?(y.boundary=8,y.storage=8):S.isVector3||S.isColor?(y.boundary=16,y.storage=12):S.isVector4?(y.boundary=16,y.storage=16):S.isMatrix3?(y.boundary=48,y.storage=48):S.isMatrix4?(y.boundary=64,y.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),y}function m(S){let y=S.target;y.removeEventListener("dispose",m);let _=o.indexOf(y.__bindingPointIndex);o.splice(_,1),n.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function p(){for(let S in s)n.deleteBuffer(s[S]);o=[],s={},r={}}return{bind:l,update:h,dispose:p}}var ga=class{constructor(t={}){let{canvas:e=Lp(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:h=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:g=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let c;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");c=i.getContextAttributes().alpha}else c=o;let d=new Uint32Array(4),M=new Int32Array(4),m=null,p=null,S=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Sn,this.toneMapping=mi,this.toneMappingExposure=1;let _=this,N=!1,w=0,R=0,A=null,v=-1,x=null,b=new rn,C=new rn,E=null,T=new de(0),k=0,D=e.width,O=e.height,z=1,q=null,X=null,U=new rn(0,0,D,O),gt=new rn(0,0,D,O),At=!1,P=new Vr,G=!1,J=!1,V=new Oe,K=new Oe,ot=new $,Tt=new rn,Lt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},st=!1;function pt(){return A===null?z:1}let H=i;function $t(F,ft){return e.getContext(F,ft)}try{let F={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:h,powerPreference:u,failIfMajorPerformanceCaveat:g};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ch}`),e.addEventListener("webglcontextlost",Ft,!1),e.addEventListener("webglcontextrestored",Kt,!1),e.addEventListener("webglcontextcreationerror",Qt,!1),H===null){let ft="webgl2";if(H=$t(ft,F),H===null)throw $t(ft)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(F){throw console.error("THREE.WebGLRenderer: "+F.message),F}let tt,j,mt,Y,kt,B,L,ct,bt,Pt,Q,at,lt,xt,Rt,wt,Ut,qt,oe,Zt,ge,fe,Le,rt;function Yt(){tt=new Gg(H),tt.init(),fe=new bx(H,tt),j=new Fg(H,tt,t,fe),mt=new vx(H,tt),j.reverseDepthBuffer&&f&&mt.buffers.depth.setReversed(!0),Y=new qg(H),kt=new ox,B=new Mx(H,tt,mt,kt,j,fe,Y),L=new zg(_),ct=new Vg(_),bt=new tm(H),Le=new Ng(H,bt),Pt=new Wg(H,bt,Y,Le),Q=new Zg(H,Pt,bt,Y),oe=new Yg(H,j,B),wt=new Bg(kt),at=new rx(_,L,ct,tt,j,Le,wt),lt=new Ax(_,kt),xt=new lx,Rt=new px(tt),qt=new Ug(_,L,ct,mt,Q,c,l),Ut=new yx(_,Q,j),rt=new Rx(H,Y,j,mt),Zt=new Og(H,tt,Y),ge=new Xg(H,tt,Y),Y.programs=at.programs,_.capabilities=j,_.extensions=tt,_.properties=kt,_.renderLists=xt,_.shadowMap=Ut,_.state=mt,_.info=Y}Yt();let It=new $c(_,H);this.xr=It,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){let F=tt.get("WEBGL_lose_context");F&&F.loseContext()},this.forceContextRestore=function(){let F=tt.get("WEBGL_lose_context");F&&F.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(F){F!==void 0&&(z=F,this.setSize(D,O,!1))},this.getSize=function(F){return F.set(D,O)},this.setSize=function(F,ft,vt=!0){if(It.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}D=F,O=ft,e.width=Math.floor(F*z),e.height=Math.floor(ft*z),vt===!0&&(e.style.width=F+"px",e.style.height=ft+"px"),this.setViewport(0,0,F,ft)},this.getDrawingBufferSize=function(F){return F.set(D*z,O*z).floor()},this.setDrawingBufferSize=function(F,ft,vt){D=F,O=ft,z=vt,e.width=Math.floor(F*vt),e.height=Math.floor(ft*vt),this.setViewport(0,0,F,ft)},this.getCurrentViewport=function(F){return F.copy(b)},this.getViewport=function(F){return F.copy(U)},this.setViewport=function(F,ft,vt,Mt){F.isVector4?U.set(F.x,F.y,F.z,F.w):U.set(F,ft,vt,Mt),mt.viewport(b.copy(U).multiplyScalar(z).round())},this.getScissor=function(F){return F.copy(gt)},this.setScissor=function(F,ft,vt,Mt){F.isVector4?gt.set(F.x,F.y,F.z,F.w):gt.set(F,ft,vt,Mt),mt.scissor(C.copy(gt).multiplyScalar(z).round())},this.getScissorTest=function(){return At},this.setScissorTest=function(F){mt.setScissorTest(At=F)},this.setOpaqueSort=function(F){q=F},this.setTransparentSort=function(F){X=F},this.getClearColor=function(F){return F.copy(qt.getClearColor())},this.setClearColor=function(){qt.setClearColor.apply(qt,arguments)},this.getClearAlpha=function(){return qt.getClearAlpha()},this.setClearAlpha=function(){qt.setClearAlpha.apply(qt,arguments)},this.clear=function(F=!0,ft=!0,vt=!0){let Mt=0;if(F){let dt=!1;if(A!==null){let Gt=A.texture.format;dt=Gt===yh||Gt===gh||Gt===mh}if(dt){let Gt=A.texture.type,te=Gt===Ri||Gt===vs||Gt===Hr||Gt===sr||Gt===fh||Gt===uh,pe=qt.getClearColor(),me=qt.getClearAlpha(),Te=pe.r,W=pe.g,Z=pe.b;te?(d[0]=Te,d[1]=W,d[2]=Z,d[3]=me,H.clearBufferuiv(H.COLOR,0,d)):(M[0]=Te,M[1]=W,M[2]=Z,M[3]=me,H.clearBufferiv(H.COLOR,0,M))}else Mt|=H.COLOR_BUFFER_BIT}ft&&(Mt|=H.DEPTH_BUFFER_BIT),vt&&(Mt|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(Mt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Ft,!1),e.removeEventListener("webglcontextrestored",Kt,!1),e.removeEventListener("webglcontextcreationerror",Qt,!1),xt.dispose(),Rt.dispose(),kt.dispose(),L.dispose(),ct.dispose(),Q.dispose(),Le.dispose(),rt.dispose(),at.dispose(),It.dispose(),It.removeEventListener("sessionstart",ut),It.removeEventListener("sessionend",Dt),Vt.stop()};function Ft(F){F.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),N=!0}function Kt(){console.log("THREE.WebGLRenderer: Context Restored."),N=!1;let F=Y.autoReset,ft=Ut.enabled,vt=Ut.autoUpdate,Mt=Ut.needsUpdate,dt=Ut.type;Yt(),Y.autoReset=F,Ut.enabled=ft,Ut.autoUpdate=vt,Ut.needsUpdate=Mt,Ut.type=dt}function Qt(F){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",F.statusMessage)}function Ee(F){let ft=F.target;ft.removeEventListener("dispose",Ee),I(ft)}function I(F){it(F),kt.remove(F)}function it(F){let ft=kt.get(F).programs;ft!==void 0&&(ft.forEach(function(vt){at.releaseProgram(vt)}),F.isShaderMaterial&&at.releaseShaderCache(F))}this.renderBufferDirect=function(F,ft,vt,Mt,dt,Gt){ft===null&&(ft=Lt);let te=dt.isMesh&&dt.matrixWorld.determinant()<0,pe=Ue(F,ft,vt,Mt,dt);mt.setMaterial(Mt,te);let me=vt.index,Te=1;if(Mt.wireframe===!0){if(me=Pt.getWireframeAttribute(vt),me===void 0)return;Te=2}let W=vt.drawRange,Z=vt.attributes.position,Nt=W.start*Te,Ct=(W.start+W.count)*Te;Gt!==null&&(Nt=Math.max(Nt,Gt.start*Te),Ct=Math.min(Ct,(Gt.start+Gt.count)*Te)),me!==null?(Nt=Math.max(Nt,0),Ct=Math.min(Ct,me.count)):Z!=null&&(Nt=Math.max(Nt,0),Ct=Math.min(Ct,Z.count));let Ht=Ct-Nt;if(Ht<0||Ht===1/0)return;Le.setup(dt,Mt,pe,vt,me);let ee,Jt=Zt;if(me!==null&&(ee=bt.get(me),Jt=ge,Jt.setIndex(ee)),dt.isMesh)Mt.wireframe===!0?(mt.setLineWidth(Mt.wireframeLinewidth*pt()),Jt.setMode(H.LINES)):Jt.setMode(H.TRIANGLES);else if(dt.isLine){let ae=Mt.linewidth;ae===void 0&&(ae=1),mt.setLineWidth(ae*pt()),dt.isLineSegments?Jt.setMode(H.LINES):dt.isLineLoop?Jt.setMode(H.LINE_LOOP):Jt.setMode(H.LINE_STRIP)}else dt.isPoints?Jt.setMode(H.POINTS):dt.isSprite&&Jt.setMode(H.TRIANGLES);if(dt.isBatchedMesh)if(dt._multiDrawInstances!==null)Jt.renderMultiDrawInstances(dt._multiDrawStarts,dt._multiDrawCounts,dt._multiDrawCount,dt._multiDrawInstances);else if(tt.get("WEBGL_multi_draw"))Jt.renderMultiDraw(dt._multiDrawStarts,dt._multiDrawCounts,dt._multiDrawCount);else{let ae=dt._multiDrawStarts,ne=dt._multiDrawCounts,ye=dt._multiDrawCount,be=me?bt.get(me).bytesPerElement:1,Xt=kt.get(Mt).currentProgram.getUniforms();for(let ie=0;ie<ye;ie++)Xt.setValue(H,"_gl_DrawID",ie),Jt.render(ae[ie]/be,ne[ie])}else if(dt.isInstancedMesh)Jt.renderInstances(Nt,Ht,dt.count);else if(vt.isInstancedBufferGeometry){let ae=vt._maxInstanceCount!==void 0?vt._maxInstanceCount:1/0,ne=Math.min(vt.instanceCount,ae);Jt.renderInstances(Nt,Ht,ne)}else Jt.render(Nt,Ht)};function nt(F,ft,vt){F.transparent===!0&&F.side===cn&&F.forceSinglePass===!1?(F.side=En,F.needsUpdate=!0,he(F,ft,vt),F.side=Zi,F.needsUpdate=!0,he(F,ft,vt),F.side=cn):he(F,ft,vt)}this.compile=function(F,ft,vt=null){vt===null&&(vt=F),p=Rt.get(vt),p.init(ft),y.push(p),vt.traverseVisible(function(dt){dt.isLight&&dt.layers.test(ft.layers)&&(p.pushLight(dt),dt.castShadow&&p.pushShadow(dt))}),F!==vt&&F.traverseVisible(function(dt){dt.isLight&&dt.layers.test(ft.layers)&&(p.pushLight(dt),dt.castShadow&&p.pushShadow(dt))}),p.setupLights();let Mt=new Set;return F.traverse(function(dt){if(!(dt.isMesh||dt.isPoints||dt.isLine||dt.isSprite))return;let Gt=dt.material;if(Gt)if(Array.isArray(Gt))for(let te=0;te<Gt.length;te++){let pe=Gt[te];nt(pe,vt,dt),Mt.add(pe)}else nt(Gt,vt,dt),Mt.add(Gt)}),y.pop(),p=null,Mt},this.compileAsync=function(F,ft,vt=null){let Mt=this.compile(F,ft,vt);return new Promise(dt=>{function Gt(){if(Mt.forEach(function(te){kt.get(te).currentProgram.isReady()&&Mt.delete(te)}),Mt.size===0){dt(F);return}setTimeout(Gt,10)}tt.get("KHR_parallel_shader_compile")!==null?Gt():setTimeout(Gt,10)})};let ht=null;function _t(F){ht&&ht(F)}function ut(){Vt.stop()}function Dt(){Vt.start()}let Vt=new Af;Vt.setAnimationLoop(_t),typeof self<"u"&&Vt.setContext(self),this.setAnimationLoop=function(F){ht=F,It.setAnimationLoop(F),F===null?Vt.stop():Vt.start()},It.addEventListener("sessionstart",ut),It.addEventListener("sessionend",Dt),this.render=function(F,ft){if(ft!==void 0&&ft.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;if(F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),ft.parent===null&&ft.matrixWorldAutoUpdate===!0&&ft.updateMatrixWorld(),It.enabled===!0&&It.isPresenting===!0&&(It.cameraAutoUpdate===!0&&It.updateCamera(ft),ft=It.getCamera()),F.isScene===!0&&F.onBeforeRender(_,F,ft,A),p=Rt.get(F,y.length),p.init(ft),y.push(p),K.multiplyMatrices(ft.projectionMatrix,ft.matrixWorldInverse),P.setFromProjectionMatrix(K),J=this.localClippingEnabled,G=wt.init(this.clippingPlanes,J),m=xt.get(F,S.length),m.init(),S.push(m),It.enabled===!0&&It.isPresenting===!0){let Gt=_.xr.getDepthSensingMesh();Gt!==null&&Bt(Gt,ft,-1/0,_.sortObjects)}Bt(F,ft,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(q,X),st=It.enabled===!1||It.isPresenting===!1||It.hasDepthSensing()===!1,st&&qt.addToRenderList(m,F),this.info.render.frame++,G===!0&&wt.beginShadows();let vt=p.state.shadowsArray;Ut.render(vt,F,ft),G===!0&&wt.endShadows(),this.info.autoReset===!0&&this.info.reset();let Mt=m.opaque,dt=m.transmissive;if(p.setupLights(),ft.isArrayCamera){let Gt=ft.cameras;if(dt.length>0)for(let te=0,pe=Gt.length;te<pe;te++){let me=Gt[te];St(Mt,dt,F,me)}st&&qt.render(F);for(let te=0,pe=Gt.length;te<pe;te++){let me=Gt[te];et(m,F,me,me.viewport)}}else dt.length>0&&St(Mt,dt,F,ft),st&&qt.render(F),et(m,F,ft);A!==null&&(B.updateMultisampleRenderTarget(A),B.updateRenderTargetMipmap(A)),F.isScene===!0&&F.onAfterRender(_,F,ft),Le.resetDefaultState(),v=-1,x=null,y.pop(),y.length>0?(p=y[y.length-1],G===!0&&wt.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,S.pop(),S.length>0?m=S[S.length-1]:m=null};function Bt(F,ft,vt,Mt){if(F.visible===!1)return;if(F.layers.test(ft.layers)){if(F.isGroup)vt=F.renderOrder;else if(F.isLOD)F.autoUpdate===!0&&F.update(ft);else if(F.isLight)p.pushLight(F),F.castShadow&&p.pushShadow(F);else if(F.isSprite){if(!F.frustumCulled||P.intersectsSprite(F)){Mt&&Tt.setFromMatrixPosition(F.matrixWorld).applyMatrix4(K);let te=Q.update(F),pe=F.material;pe.visible&&m.push(F,te,pe,vt,Tt.z,null)}}else if((F.isMesh||F.isLine||F.isPoints)&&(!F.frustumCulled||P.intersectsObject(F))){let te=Q.update(F),pe=F.material;if(Mt&&(F.boundingSphere!==void 0?(F.boundingSphere===null&&F.computeBoundingSphere(),Tt.copy(F.boundingSphere.center)):(te.boundingSphere===null&&te.computeBoundingSphere(),Tt.copy(te.boundingSphere.center)),Tt.applyMatrix4(F.matrixWorld).applyMatrix4(K)),Array.isArray(pe)){let me=te.groups;for(let Te=0,W=me.length;Te<W;Te++){let Z=me[Te],Nt=pe[Z.materialIndex];Nt&&Nt.visible&&m.push(F,te,Nt,vt,Tt.z,Z)}}else pe.visible&&m.push(F,te,pe,vt,Tt.z,null)}}let Gt=F.children;for(let te=0,pe=Gt.length;te<pe;te++)Bt(Gt[te],ft,vt,Mt)}function et(F,ft,vt,Mt){let dt=F.opaque,Gt=F.transmissive,te=F.transparent;p.setupLightsView(vt),G===!0&&wt.setGlobalState(_.clippingPlanes,vt),Mt&&mt.viewport(b.copy(Mt)),dt.length>0&&Et(dt,ft,vt),Gt.length>0&&Et(Gt,ft,vt),te.length>0&&Et(te,ft,vt),mt.buffers.depth.setTest(!0),mt.buffers.depth.setMask(!0),mt.buffers.color.setMask(!0),mt.setPolygonOffset(!1)}function St(F,ft,vt,Mt){if((vt.isScene===!0?vt.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[Mt.id]===void 0&&(p.state.transmissionRenderTarget[Mt.id]=new Ci(1,1,{generateMipmaps:!0,type:tt.has("EXT_color_buffer_half_float")||tt.has("EXT_color_buffer_float")?eo:Ri,minFilter:ys,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ze.workingColorSpace}));let Gt=p.state.transmissionRenderTarget[Mt.id],te=Mt.viewport||b;Gt.setSize(te.z,te.w);let pe=_.getRenderTarget();_.setRenderTarget(Gt),_.getClearColor(T),k=_.getClearAlpha(),k<1&&_.setClearColor(16777215,.5),_.clear(),st&&qt.render(vt);let me=_.toneMapping;_.toneMapping=mi;let Te=Mt.viewport;if(Mt.viewport!==void 0&&(Mt.viewport=void 0),p.setupLightsView(Mt),G===!0&&wt.setGlobalState(_.clippingPlanes,Mt),Et(F,vt,Mt),B.updateMultisampleRenderTarget(Gt),B.updateRenderTargetMipmap(Gt),tt.has("WEBGL_multisampled_render_to_texture")===!1){let W=!1;for(let Z=0,Nt=ft.length;Z<Nt;Z++){let Ct=ft[Z],Ht=Ct.object,ee=Ct.geometry,Jt=Ct.material,ae=Ct.group;if(Jt.side===cn&&Ht.layers.test(Mt.layers)){let ne=Jt.side;Jt.side=En,Jt.needsUpdate=!0,Wt(Ht,vt,Mt,ee,Jt,ae),Jt.side=ne,Jt.needsUpdate=!0,W=!0}}W===!0&&(B.updateMultisampleRenderTarget(Gt),B.updateRenderTargetMipmap(Gt))}_.setRenderTarget(pe),_.setClearColor(T,k),Te!==void 0&&(Mt.viewport=Te),_.toneMapping=me}function Et(F,ft,vt){let Mt=ft.isScene===!0?ft.overrideMaterial:null;for(let dt=0,Gt=F.length;dt<Gt;dt++){let te=F[dt],pe=te.object,me=te.geometry,Te=Mt===null?te.material:Mt,W=te.group;pe.layers.test(vt.layers)&&Wt(pe,ft,vt,me,Te,W)}}function Wt(F,ft,vt,Mt,dt,Gt){F.onBeforeRender(_,ft,vt,Mt,dt,Gt),F.modelViewMatrix.multiplyMatrices(vt.matrixWorldInverse,F.matrixWorld),F.normalMatrix.getNormalMatrix(F.modelViewMatrix),dt.onBeforeRender(_,ft,vt,Mt,F,Gt),dt.transparent===!0&&dt.side===cn&&dt.forceSinglePass===!1?(dt.side=En,dt.needsUpdate=!0,_.renderBufferDirect(vt,ft,Mt,dt,F,Gt),dt.side=Zi,dt.needsUpdate=!0,_.renderBufferDirect(vt,ft,Mt,dt,F,Gt),dt.side=cn):_.renderBufferDirect(vt,ft,Mt,dt,F,Gt),F.onAfterRender(_,ft,vt,Mt,dt,Gt)}function he(F,ft,vt){ft.isScene!==!0&&(ft=Lt);let Mt=kt.get(F),dt=p.state.lights,Gt=p.state.shadowsArray,te=dt.state.version,pe=at.getParameters(F,dt.state,Gt,ft,vt),me=at.getProgramCacheKey(pe),Te=Mt.programs;Mt.environment=F.isMeshStandardMaterial?ft.environment:null,Mt.fog=ft.fog,Mt.envMap=(F.isMeshStandardMaterial?ct:L).get(F.envMap||Mt.environment),Mt.envMapRotation=Mt.environment!==null&&F.envMap===null?ft.environmentRotation:F.envMapRotation,Te===void 0&&(F.addEventListener("dispose",Ee),Te=new Map,Mt.programs=Te);let W=Te.get(me);if(W!==void 0){if(Mt.currentProgram===W&&Mt.lightsStateVersion===te)return _e(F,pe),W}else pe.uniforms=at.getUniforms(F),F.onBeforeCompile(pe,_),W=at.acquireProgram(pe,me),Te.set(me,W),Mt.uniforms=pe.uniforms;let Z=Mt.uniforms;return(!F.isShaderMaterial&&!F.isRawShaderMaterial||F.clipping===!0)&&(Z.clippingPlanes=wt.uniform),_e(F,pe),Mt.needsLights=je(F),Mt.lightsStateVersion=te,Mt.needsLights&&(Z.ambientLightColor.value=dt.state.ambient,Z.lightProbe.value=dt.state.probe,Z.directionalLights.value=dt.state.directional,Z.directionalLightShadows.value=dt.state.directionalShadow,Z.spotLights.value=dt.state.spot,Z.spotLightShadows.value=dt.state.spotShadow,Z.rectAreaLights.value=dt.state.rectArea,Z.ltc_1.value=dt.state.rectAreaLTC1,Z.ltc_2.value=dt.state.rectAreaLTC2,Z.pointLights.value=dt.state.point,Z.pointLightShadows.value=dt.state.pointShadow,Z.hemisphereLights.value=dt.state.hemi,Z.directionalShadowMap.value=dt.state.directionalShadowMap,Z.directionalShadowMatrix.value=dt.state.directionalShadowMatrix,Z.spotShadowMap.value=dt.state.spotShadowMap,Z.spotLightMatrix.value=dt.state.spotLightMatrix,Z.spotLightMap.value=dt.state.spotLightMap,Z.pointShadowMap.value=dt.state.pointShadowMap,Z.pointShadowMatrix.value=dt.state.pointShadowMatrix),Mt.currentProgram=W,Mt.uniformsList=null,W}function ue(F){if(F.uniformsList===null){let ft=F.currentProgram.getUniforms();F.uniformsList=tr.seqWithValue(ft.seq,F.uniforms)}return F.uniformsList}function _e(F,ft){let vt=kt.get(F);vt.outputColorSpace=ft.outputColorSpace,vt.batching=ft.batching,vt.batchingColor=ft.batchingColor,vt.instancing=ft.instancing,vt.instancingColor=ft.instancingColor,vt.instancingMorph=ft.instancingMorph,vt.skinning=ft.skinning,vt.morphTargets=ft.morphTargets,vt.morphNormals=ft.morphNormals,vt.morphColors=ft.morphColors,vt.morphTargetsCount=ft.morphTargetsCount,vt.numClippingPlanes=ft.numClippingPlanes,vt.numIntersection=ft.numClipIntersection,vt.vertexAlphas=ft.vertexAlphas,vt.vertexTangents=ft.vertexTangents,vt.toneMapping=ft.toneMapping}function Ue(F,ft,vt,Mt,dt){ft.isScene!==!0&&(ft=Lt),B.resetTextureUnits();let Gt=ft.fog,te=Mt.isMeshStandardMaterial?ft.environment:null,pe=A===null?_.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:dr,me=(Mt.isMeshStandardMaterial?ct:L).get(Mt.envMap||te),Te=Mt.vertexColors===!0&&!!vt.attributes.color&&vt.attributes.color.itemSize===4,W=!!vt.attributes.tangent&&(!!Mt.normalMap||Mt.anisotropy>0),Z=!!vt.morphAttributes.position,Nt=!!vt.morphAttributes.normal,Ct=!!vt.morphAttributes.color,Ht=mi;Mt.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Ht=_.toneMapping);let ee=vt.morphAttributes.position||vt.morphAttributes.normal||vt.morphAttributes.color,Jt=ee!==void 0?ee.length:0,ae=kt.get(Mt),ne=p.state.lights;if(G===!0&&(J===!0||F!==x)){let an=F===x&&Mt.id===v;wt.setState(Mt,F,an)}let ye=!1;Mt.version===ae.__version?(ae.needsLights&&ae.lightsStateVersion!==ne.state.version||ae.outputColorSpace!==pe||dt.isBatchedMesh&&ae.batching===!1||!dt.isBatchedMesh&&ae.batching===!0||dt.isBatchedMesh&&ae.batchingColor===!0&&dt.colorTexture===null||dt.isBatchedMesh&&ae.batchingColor===!1&&dt.colorTexture!==null||dt.isInstancedMesh&&ae.instancing===!1||!dt.isInstancedMesh&&ae.instancing===!0||dt.isSkinnedMesh&&ae.skinning===!1||!dt.isSkinnedMesh&&ae.skinning===!0||dt.isInstancedMesh&&ae.instancingColor===!0&&dt.instanceColor===null||dt.isInstancedMesh&&ae.instancingColor===!1&&dt.instanceColor!==null||dt.isInstancedMesh&&ae.instancingMorph===!0&&dt.morphTexture===null||dt.isInstancedMesh&&ae.instancingMorph===!1&&dt.morphTexture!==null||ae.envMap!==me||Mt.fog===!0&&ae.fog!==Gt||ae.numClippingPlanes!==void 0&&(ae.numClippingPlanes!==wt.numPlanes||ae.numIntersection!==wt.numIntersection)||ae.vertexAlphas!==Te||ae.vertexTangents!==W||ae.morphTargets!==Z||ae.morphNormals!==Nt||ae.morphColors!==Ct||ae.toneMapping!==Ht||ae.morphTargetsCount!==Jt)&&(ye=!0):(ye=!0,ae.__version=Mt.version);let be=ae.currentProgram;ye===!0&&(be=he(Mt,ft,dt));let Xt=!1,ie=!1,De=!1,xe=be.getUniforms(),He=ae.uniforms;if(mt.useProgram(be.program)&&(Xt=!0,ie=!0,De=!0),Mt.id!==v&&(v=Mt.id,ie=!0),Xt||x!==F){mt.buffers.depth.getReversed()?(V.copy(F.projectionMatrix),Up(V),Np(V),xe.setValue(H,"projectionMatrix",V)):xe.setValue(H,"projectionMatrix",F.projectionMatrix),xe.setValue(H,"viewMatrix",F.matrixWorldInverse);let vn=xe.map.cameraPosition;vn!==void 0&&vn.setValue(H,ot.setFromMatrixPosition(F.matrixWorld)),j.logarithmicDepthBuffer&&xe.setValue(H,"logDepthBufFC",2/(Math.log(F.far+1)/Math.LN2)),(Mt.isMeshPhongMaterial||Mt.isMeshToonMaterial||Mt.isMeshLambertMaterial||Mt.isMeshBasicMaterial||Mt.isMeshStandardMaterial||Mt.isShaderMaterial)&&xe.setValue(H,"isOrthographic",F.isOrthographicCamera===!0),x!==F&&(x=F,ie=!0,De=!0)}if(dt.isSkinnedMesh){xe.setOptional(H,dt,"bindMatrix"),xe.setOptional(H,dt,"bindMatrixInverse");let an=dt.skeleton;an&&(an.boneTexture===null&&an.computeBoneTexture(),xe.setValue(H,"boneTexture",an.boneTexture,B))}dt.isBatchedMesh&&(xe.setOptional(H,dt,"batchingTexture"),xe.setValue(H,"batchingTexture",dt._matricesTexture,B),xe.setOptional(H,dt,"batchingIdTexture"),xe.setValue(H,"batchingIdTexture",dt._indirectTexture,B),xe.setOptional(H,dt,"batchingColorTexture"),dt._colorsTexture!==null&&xe.setValue(H,"batchingColorTexture",dt._colorsTexture,B));let qe=vt.morphAttributes;if((qe.position!==void 0||qe.normal!==void 0||qe.color!==void 0)&&oe.update(dt,vt,be),(ie||ae.receiveShadow!==dt.receiveShadow)&&(ae.receiveShadow=dt.receiveShadow,xe.setValue(H,"receiveShadow",dt.receiveShadow)),Mt.isMeshGouraudMaterial&&Mt.envMap!==null&&(He.envMap.value=me,He.flipEnvMap.value=me.isCubeTexture&&me.isRenderTargetTexture===!1?-1:1),Mt.isMeshStandardMaterial&&Mt.envMap===null&&ft.environment!==null&&(He.envMapIntensity.value=ft.environmentIntensity),ie&&(xe.setValue(H,"toneMappingExposure",_.toneMappingExposure),ae.needsLights&&Ne(He,De),Gt&&Mt.fog===!0&&lt.refreshFogUniforms(He,Gt),lt.refreshMaterialUniforms(He,Mt,z,O,p.state.transmissionRenderTarget[F.id]),tr.upload(H,ue(ae),He,B)),Mt.isShaderMaterial&&Mt.uniformsNeedUpdate===!0&&(tr.upload(H,ue(ae),He,B),Mt.uniformsNeedUpdate=!1),Mt.isSpriteMaterial&&xe.setValue(H,"center",dt.center),xe.setValue(H,"modelViewMatrix",dt.modelViewMatrix),xe.setValue(H,"normalMatrix",dt.normalMatrix),xe.setValue(H,"modelMatrix",dt.matrixWorld),Mt.isShaderMaterial||Mt.isRawShaderMaterial){let an=Mt.uniformsGroups;for(let vn=0,Ui=an.length;vn<Ui;vn++){let Nh=an[vn];rt.update(Nh,be),rt.bind(Nh,be)}}return be}function Ne(F,ft){F.ambientLightColor.needsUpdate=ft,F.lightProbe.needsUpdate=ft,F.directionalLights.needsUpdate=ft,F.directionalLightShadows.needsUpdate=ft,F.pointLights.needsUpdate=ft,F.pointLightShadows.needsUpdate=ft,F.spotLights.needsUpdate=ft,F.spotLightShadows.needsUpdate=ft,F.rectAreaLights.needsUpdate=ft,F.hemisphereLights.needsUpdate=ft}function je(F){return F.isMeshLambertMaterial||F.isMeshToonMaterial||F.isMeshPhongMaterial||F.isMeshStandardMaterial||F.isShadowMaterial||F.isShaderMaterial&&F.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(F,ft,vt){kt.get(F.texture).__webglTexture=ft,kt.get(F.depthTexture).__webglTexture=vt;let Mt=kt.get(F);Mt.__hasExternalTextures=!0,Mt.__autoAllocateDepthBuffer=vt===void 0,Mt.__autoAllocateDepthBuffer||tt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Mt.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(F,ft){let vt=kt.get(F);vt.__webglFramebuffer=ft,vt.__useDefaultFramebuffer=ft===void 0},this.setRenderTarget=function(F,ft=0,vt=0){A=F,w=ft,R=vt;let Mt=!0,dt=null,Gt=!1,te=!1;if(F){let me=kt.get(F);if(me.__useDefaultFramebuffer!==void 0)mt.bindFramebuffer(H.FRAMEBUFFER,null),Mt=!1;else if(me.__webglFramebuffer===void 0)B.setupRenderTarget(F);else if(me.__hasExternalTextures)B.rebindTextures(F,kt.get(F.texture).__webglTexture,kt.get(F.depthTexture).__webglTexture);else if(F.depthBuffer){let Z=F.depthTexture;if(me.__boundDepthTexture!==Z){if(Z!==null&&kt.has(Z)&&(F.width!==Z.image.width||F.height!==Z.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");B.setupDepthRenderbuffer(F)}}let Te=F.texture;(Te.isData3DTexture||Te.isDataArrayTexture||Te.isCompressedArrayTexture)&&(te=!0);let W=kt.get(F).__webglFramebuffer;F.isWebGLCubeRenderTarget?(Array.isArray(W[ft])?dt=W[ft][vt]:dt=W[ft],Gt=!0):F.samples>0&&B.useMultisampledRTT(F)===!1?dt=kt.get(F).__webglMultisampledFramebuffer:Array.isArray(W)?dt=W[vt]:dt=W,b.copy(F.viewport),C.copy(F.scissor),E=F.scissorTest}else b.copy(U).multiplyScalar(z).floor(),C.copy(gt).multiplyScalar(z).floor(),E=At;if(mt.bindFramebuffer(H.FRAMEBUFFER,dt)&&Mt&&mt.drawBuffers(F,dt),mt.viewport(b),mt.scissor(C),mt.setScissorTest(E),Gt){let me=kt.get(F.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+ft,me.__webglTexture,vt)}else if(te){let me=kt.get(F.texture),Te=ft||0;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,me.__webglTexture,vt||0,Te)}v=-1},this.readRenderTargetPixels=function(F,ft,vt,Mt,dt,Gt,te){if(!(F&&F.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let pe=kt.get(F).__webglFramebuffer;if(F.isWebGLCubeRenderTarget&&te!==void 0&&(pe=pe[te]),pe){mt.bindFramebuffer(H.FRAMEBUFFER,pe);try{let me=F.texture,Te=me.format,W=me.type;if(!j.textureFormatReadable(Te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!j.textureTypeReadable(W)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}ft>=0&&ft<=F.width-Mt&&vt>=0&&vt<=F.height-dt&&H.readPixels(ft,vt,Mt,dt,fe.convert(Te),fe.convert(W),Gt)}finally{let me=A!==null?kt.get(A).__webglFramebuffer:null;mt.bindFramebuffer(H.FRAMEBUFFER,me)}}},this.readRenderTargetPixelsAsync=async function(F,ft,vt,Mt,dt,Gt,te){if(!(F&&F.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let pe=kt.get(F).__webglFramebuffer;if(F.isWebGLCubeRenderTarget&&te!==void 0&&(pe=pe[te]),pe){let me=F.texture,Te=me.format,W=me.type;if(!j.textureFormatReadable(Te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!j.textureTypeReadable(W))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(ft>=0&&ft<=F.width-Mt&&vt>=0&&vt<=F.height-dt){mt.bindFramebuffer(H.FRAMEBUFFER,pe);let Z=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,Z),H.bufferData(H.PIXEL_PACK_BUFFER,Gt.byteLength,H.STREAM_READ),H.readPixels(ft,vt,Mt,dt,fe.convert(Te),fe.convert(W),0);let Nt=A!==null?kt.get(A).__webglFramebuffer:null;mt.bindFramebuffer(H.FRAMEBUFFER,Nt);let Ct=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await Dp(H,Ct,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,Z),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,Gt),H.deleteBuffer(Z),H.deleteSync(Ct),Gt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(F,ft=null,vt=0){F.isTexture!==!0&&(Dr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),ft=arguments[0]||null,F=arguments[1]);let Mt=Math.pow(2,-vt),dt=Math.floor(F.image.width*Mt),Gt=Math.floor(F.image.height*Mt),te=ft!==null?ft.x:0,pe=ft!==null?ft.y:0;B.setTexture2D(F,0),H.copyTexSubImage2D(H.TEXTURE_2D,vt,0,0,te,pe,dt,Gt),mt.unbindTexture()},this.copyTextureToTexture=function(F,ft,vt=null,Mt=null,dt=0){F.isTexture!==!0&&(Dr("WebGLRenderer: copyTextureToTexture function signature has changed."),Mt=arguments[0]||null,F=arguments[1],ft=arguments[2],dt=arguments[3]||0,vt=null);let Gt,te,pe,me,Te,W,Z,Nt,Ct,Ht=F.isCompressedTexture?F.mipmaps[dt]:F.image;vt!==null?(Gt=vt.max.x-vt.min.x,te=vt.max.y-vt.min.y,pe=vt.isBox3?vt.max.z-vt.min.z:1,me=vt.min.x,Te=vt.min.y,W=vt.isBox3?vt.min.z:0):(Gt=Ht.width,te=Ht.height,pe=Ht.depth||1,me=0,Te=0,W=0),Mt!==null?(Z=Mt.x,Nt=Mt.y,Ct=Mt.z):(Z=0,Nt=0,Ct=0);let ee=fe.convert(ft.format),Jt=fe.convert(ft.type),ae;ft.isData3DTexture?(B.setTexture3D(ft,0),ae=H.TEXTURE_3D):ft.isDataArrayTexture||ft.isCompressedArrayTexture?(B.setTexture2DArray(ft,0),ae=H.TEXTURE_2D_ARRAY):(B.setTexture2D(ft,0),ae=H.TEXTURE_2D),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,ft.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ft.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,ft.unpackAlignment);let ne=H.getParameter(H.UNPACK_ROW_LENGTH),ye=H.getParameter(H.UNPACK_IMAGE_HEIGHT),be=H.getParameter(H.UNPACK_SKIP_PIXELS),Xt=H.getParameter(H.UNPACK_SKIP_ROWS),ie=H.getParameter(H.UNPACK_SKIP_IMAGES);H.pixelStorei(H.UNPACK_ROW_LENGTH,Ht.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Ht.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,me),H.pixelStorei(H.UNPACK_SKIP_ROWS,Te),H.pixelStorei(H.UNPACK_SKIP_IMAGES,W);let De=F.isDataArrayTexture||F.isData3DTexture,xe=ft.isDataArrayTexture||ft.isData3DTexture;if(F.isRenderTargetTexture||F.isDepthTexture){let He=kt.get(F),qe=kt.get(ft),an=kt.get(He.__renderTarget),vn=kt.get(qe.__renderTarget);mt.bindFramebuffer(H.READ_FRAMEBUFFER,an.__webglFramebuffer),mt.bindFramebuffer(H.DRAW_FRAMEBUFFER,vn.__webglFramebuffer);for(let Ui=0;Ui<pe;Ui++)De&&H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,kt.get(F).__webglTexture,dt,W+Ui),F.isDepthTexture?(xe&&H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,kt.get(ft).__webglTexture,dt,Ct+Ui),H.blitFramebuffer(me,Te,Gt,te,Z,Nt,Gt,te,H.DEPTH_BUFFER_BIT,H.NEAREST)):xe?H.copyTexSubImage3D(ae,dt,Z,Nt,Ct+Ui,me,Te,Gt,te):H.copyTexSubImage2D(ae,dt,Z,Nt,Ct+Ui,me,Te,Gt,te);mt.bindFramebuffer(H.READ_FRAMEBUFFER,null),mt.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else xe?F.isDataTexture||F.isData3DTexture?H.texSubImage3D(ae,dt,Z,Nt,Ct,Gt,te,pe,ee,Jt,Ht.data):ft.isCompressedArrayTexture?H.compressedTexSubImage3D(ae,dt,Z,Nt,Ct,Gt,te,pe,ee,Ht.data):H.texSubImage3D(ae,dt,Z,Nt,Ct,Gt,te,pe,ee,Jt,Ht):F.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,dt,Z,Nt,Gt,te,ee,Jt,Ht.data):F.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,dt,Z,Nt,Ht.width,Ht.height,ee,Ht.data):H.texSubImage2D(H.TEXTURE_2D,dt,Z,Nt,Gt,te,ee,Jt,Ht);H.pixelStorei(H.UNPACK_ROW_LENGTH,ne),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,ye),H.pixelStorei(H.UNPACK_SKIP_PIXELS,be),H.pixelStorei(H.UNPACK_SKIP_ROWS,Xt),H.pixelStorei(H.UNPACK_SKIP_IMAGES,ie),dt===0&&ft.generateMipmaps&&H.generateMipmap(ae),mt.unbindTexture()},this.copyTextureToTexture3D=function(F,ft,vt=null,Mt=null,dt=0){return F.isTexture!==!0&&(Dr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),vt=arguments[0]||null,Mt=arguments[1]||null,F=arguments[2],ft=arguments[3],dt=arguments[4]||0),Dr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(F,ft,vt,Mt,dt)},this.initRenderTarget=function(F){kt.get(F).__webglFramebuffer===void 0&&B.setupRenderTarget(F)},this.initTexture=function(F){F.isCubeTexture?B.setTextureCube(F,0):F.isData3DTexture?B.setTexture3D(F,0):F.isDataArrayTexture||F.isCompressedArrayTexture?B.setTexture2DArray(F,0):B.setTexture2D(F,0),mt.unbindTexture()},this.resetState=function(){w=0,R=0,A=null,mt.reset(),Le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ti}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=ze._getDrawingBufferColorSpace(t),e.unpackColorSpace=ze._getUnpackColorSpace()}};var ya=class n{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new de(t),this.near=e,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},xa=class extends We{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new si,this.environmentIntensity=1,this.environmentRotation=new si,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},va=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Tc,this.updateRanges=[],this.version=0,this.uuid=gi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=gi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=gi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Pn=new $,Gr=class n{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)Pn.fromBufferAttribute(this,e),Pn.applyMatrix4(t),this.setXYZ(e,Pn.x,Pn.y,Pn.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Pn.fromBufferAttribute(this,e),Pn.applyNormalMatrix(t),this.setXYZ(e,Pn.x,Pn.y,Pn.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Pn.fromBufferAttribute(this,e),Pn.transformDirection(t),this.setXYZ(e,Pn.x,Pn.y,Pn.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=ii(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=$e(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=$e(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=$e(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=$e(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=$e(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=ii(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=ii(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=ii(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=ii(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=$e(e,this.array),i=$e(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=$e(e,this.array),i=$e(i,this.array),s=$e(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=$e(e,this.array),i=$e(i,this.array),s=$e(s,this.array),r=$e(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Je(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new n(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Wr=class extends Pi{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new de(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Gs,Rr=new $,Ws=new $,Xs=new $,qs=new zt,Cr=new zt,kf=new Oe,Ho=new $,Ir=new $,$o=new $,Zd=new zt,Ul=new zt,jd=new zt,_a=class extends We{constructor(t=new Wr){if(super(),this.isSprite=!0,this.type="Sprite",Gs===void 0){Gs=new Xe;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new va(e,5);Gs.setIndex([0,1,2,0,2,3]),Gs.setAttribute("position",new Gr(i,3,0,!1)),Gs.setAttribute("uv",new Gr(i,2,3,!1))}this.geometry=Gs,this.material=t,this.center=new zt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ws.setFromMatrixScale(this.matrixWorld),kf.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Xs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ws.multiplyScalar(-Xs.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;Vo(Ho.set(-.5,-.5,0),Xs,o,Ws,s,r),Vo(Ir.set(.5,-.5,0),Xs,o,Ws,s,r),Vo($o.set(.5,.5,0),Xs,o,Ws,s,r),Zd.set(0,0),Ul.set(1,0),jd.set(1,1);let a=t.ray.intersectTriangle(Ho,Ir,$o,!1,Rr);if(a===null&&(Vo(Ir.set(-.5,.5,0),Xs,o,Ws,s,r),Ul.set(0,1),a=t.ray.intersectTriangle(Ho,$o,Ir,!1,Rr),a===null))return;let l=t.ray.origin.distanceTo(Rr);l<t.near||l>t.far||e.push({distance:l,point:Rr.clone(),uv:Xi.getInterpolation(Rr,Ho,Ir,$o,Zd,Ul,jd,new zt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Vo(n,t,e,i,s,r){qs.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(Cr.x=r*qs.x-s*qs.y,Cr.y=s*qs.x+r*qs.y):Cr.copy(qs),n.copy(t),n.x+=Cr.x,n.y+=Cr.y,n.applyMatrix4(kf)}var Xr=class extends On{constructor(t=null,e=1,i=1,s,r,o,a,l,h=Dn,u=Dn,g,f){super(null,o,a,l,h,u,s,r,g,f),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var qr=class extends Je{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Ys=new Oe,Jd=new Oe,Go=[],Kd=new Ii,Cx=new Oe,Pr=new Ve,kr=new Ji,fn=class extends Ve{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new qr(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Cx)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Ii),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Ys),Kd.copy(t.boundingBox).applyMatrix4(Ys),this.boundingBox.union(Kd)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ji),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Ys),kr.copy(t.boundingSphere).applyMatrix4(Ys),this.boundingSphere.union(kr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=t*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(t,e){let i=this.matrixWorld,s=this.count;if(Pr.geometry=this.geometry,Pr.material=this.material,Pr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),kr.copy(this.boundingSphere),kr.applyMatrix4(i),t.ray.intersectsSphere(kr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ys),Jd.multiplyMatrices(i,Ys),Pr.matrixWorld=Jd,Pr.raycast(t,Go);for(let o=0,a=Go.length;o<a;o++){let l=Go[o];l.instanceId=r,l.object=this,e.push(l)}Go.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new qr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Xr(new Float32Array(s*this.count),s,this.count,ph,pi));let r=this.morphTexture.source.data.data,o=0;for(let h=0;h<i.length;h++)o+=i[h];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;r[l]=a,r.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var _s=class extends Pi{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new de(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Ma=new $,ba=new $,Qd=new Oe,Lr=new aa,Wo=new Ji,Nl=new $,tf=new $,Vc=class extends We{constructor(t=new Xe,e=new _s){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)Ma.fromBufferAttribute(e,s-1),ba.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=Ma.distanceTo(ba);t.setAttribute("lineDistance",new Ae(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Wo.copy(i.boundingSphere),Wo.applyMatrix4(s),Wo.radius+=r,t.ray.intersectsSphere(Wo)===!1)return;Qd.copy(s).invert(),Lr.copy(t.ray).applyMatrix4(Qd);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,h=this.isLineSegments?2:1,u=i.index,f=i.attributes.position;if(u!==null){let c=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let M=c,m=d-1;M<m;M+=h){let p=u.getX(M),S=u.getX(M+1),y=Xo(this,t,Lr,l,p,S);y&&e.push(y)}if(this.isLineLoop){let M=u.getX(d-1),m=u.getX(c),p=Xo(this,t,Lr,l,M,m);p&&e.push(p)}}else{let c=Math.max(0,o.start),d=Math.min(f.count,o.start+o.count);for(let M=c,m=d-1;M<m;M+=h){let p=Xo(this,t,Lr,l,M,M+1);p&&e.push(p)}if(this.isLineLoop){let M=Xo(this,t,Lr,l,d-1,c);M&&e.push(M)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Xo(n,t,e,i,s,r){let o=n.geometry.attributes.position;if(Ma.fromBufferAttribute(o,s),ba.fromBufferAttribute(o,r),e.distanceSqToSegment(Ma,ba,Nl,tf)>i)return;Nl.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(Nl);if(!(l<t.near||l>t.far))return{distance:l,point:tf.clone().applyMatrix4(n.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:n}}var ef=new $,nf=new $,ar=class extends Vc{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[];for(let s=0,r=e.count;s<r;s+=2)ef.fromBufferAttribute(e,s),nf.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+ef.distanceTo(nf);t.setAttribute("lineDistance",new Ae(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var lr=class extends On{constructor(t,e,i,s,r,o,a,l,h){super(t,e,i,s,r,o,a,l,h),this.isCanvasTexture=!0,this.needsUpdate=!0}},Zn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let i=this.getLengths(),s=0,r=i.length,o;e?o=e:o=t*i[r-1];let a=0,l=r-1,h;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),h=i[s]-o,h<0)a=s+1;else if(h>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);let u=i[s],f=i[s+1]-u,c=(o-u)/f;return(s+c)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new zt:new $);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){let i=new $,s=[],r=[],o=[],a=new $,l=new Oe;for(let c=0;c<=t;c++){let d=c/t;s[c]=this.getTangentAt(d,new $)}r[0]=new $,o[0]=new $;let h=Number.MAX_VALUE,u=Math.abs(s[0].x),g=Math.abs(s[0].y),f=Math.abs(s[0].z);u<=h&&(h=u,i.set(1,0,0)),g<=h&&(h=g,i.set(0,1,0)),f<=h&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let c=1;c<=t;c++){if(r[c]=r[c-1].clone(),o[c]=o[c-1].clone(),a.crossVectors(s[c-1],s[c]),a.length()>Number.EPSILON){a.normalize();let d=Math.acos(wn(s[c-1].dot(s[c]),-1,1));r[c].applyMatrix4(l.makeRotationAxis(a,d))}o[c].crossVectors(s[c],r[c])}if(e===!0){let c=Math.acos(wn(r[0].dot(r[t]),-1,1));c/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(c=-c);for(let d=1;d<=t;d++)r[d].applyMatrix4(l.makeRotationAxis(s[d],c*d)),o[d].crossVectors(s[d],r[d])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Yr=class extends Zn{constructor(t=0,e=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new zt){let i=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),h=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),g=Math.sin(this.aRotation),f=l-this.aX,c=h-this.aY;l=f*u-c*g+this.aX,h=f*g+c*u+this.aY}return i.set(l,h)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Gc=class extends Yr{constructor(t,e,i,s,r,o){super(t,e,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Mh(){let n=0,t=0,e=0,i=0;function s(r,o,a,l){n=r,t=a,e=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,h){s(o,a,h*(a-r),h*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,h,u,g){let f=(o-r)/h-(a-r)/(h+u)+(a-o)/u,c=(a-o)/u-(l-o)/(u+g)+(l-a)/g;f*=u,c*=u,s(o,a,f,c)},calc:function(r){let o=r*r,a=o*r;return n+t*r+e*o+i*a}}}var qo=new $,Ol=new Mh,Fl=new Mh,Bl=new Mh,Zr=class extends Zn{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new $){let i=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let h,u;this.closed||a>0?h=s[(a-1)%r]:(qo.subVectors(s[0],s[1]).add(s[0]),h=qo);let g=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(qo.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=qo),this.curveType==="centripetal"||this.curveType==="chordal"){let c=this.curveType==="chordal"?.5:.25,d=Math.pow(h.distanceToSquared(g),c),M=Math.pow(g.distanceToSquared(f),c),m=Math.pow(f.distanceToSquared(u),c);M<1e-4&&(M=1),d<1e-4&&(d=M),m<1e-4&&(m=M),Ol.initNonuniformCatmullRom(h.x,g.x,f.x,u.x,d,M,m),Fl.initNonuniformCatmullRom(h.y,g.y,f.y,u.y,d,M,m),Bl.initNonuniformCatmullRom(h.z,g.z,f.z,u.z,d,M,m)}else this.curveType==="catmullrom"&&(Ol.initCatmullRom(h.x,g.x,f.x,u.x,this.tension),Fl.initCatmullRom(h.y,g.y,f.y,u.y,this.tension),Bl.initCatmullRom(h.z,g.z,f.z,u.z,this.tension));return i.set(Ol.calc(l),Fl.calc(l),Bl.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new $().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function sf(n,t,e,i,s){let r=(i-t)*.5,o=(s-e)*.5,a=n*n,l=n*a;return(2*e-2*i+r+o)*l+(-3*e+3*i-2*r-o)*a+r*n+e}function Ix(n,t){let e=1-n;return e*e*t}function Px(n,t){return 2*(1-n)*n*t}function kx(n,t){return n*n*t}function Br(n,t,e,i){return Ix(n,t)+Px(n,e)+kx(n,i)}function Lx(n,t){let e=1-n;return e*e*e*t}function Dx(n,t){let e=1-n;return 3*e*e*n*t}function Ux(n,t){return 3*(1-n)*n*n*t}function Nx(n,t){return n*n*n*t}function zr(n,t,e,i,s){return Lx(n,t)+Dx(n,e)+Ux(n,i)+Nx(n,s)}var Sa=class extends Zn{constructor(t=new zt,e=new zt,i=new zt,s=new zt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new zt){let i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(zr(t,s.x,r.x,o.x,a.x),zr(t,s.y,r.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Wc=class extends Zn{constructor(t=new $,e=new $,i=new $,s=new $){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new $){let i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(zr(t,s.x,r.x,o.x,a.x),zr(t,s.y,r.y,o.y,a.y),zr(t,s.z,r.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},wa=class extends Zn{constructor(t=new zt,e=new zt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new zt){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new zt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Xc=class extends Zn{constructor(t=new $,e=new $){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new $){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new $){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ea=class extends Zn{constructor(t=new zt,e=new zt,i=new zt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new zt){let i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(Br(t,s.x,r.x,o.x),Br(t,s.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ta=class extends Zn{constructor(t=new $,e=new $,i=new $){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new $){let i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(Br(t,s.x,r.x,o.x),Br(t,s.y,r.y,o.y),Br(t,s.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Aa=class extends Zn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new zt){let i=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],h=s[o],u=s[o>s.length-2?s.length-1:o+1],g=s[o>s.length-3?s.length-1:o+2];return i.set(sf(a,l.x,h.x,u.x,g.x),sf(a,l.y,h.y,u.y,g.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new zt().fromArray(s))}return this}},Ra=Object.freeze({__proto__:null,ArcCurve:Gc,CatmullRomCurve3:Zr,CubicBezierCurve:Sa,CubicBezierCurve3:Wc,EllipseCurve:Yr,LineCurve:wa,LineCurve3:Xc,QuadraticBezierCurve:Ea,QuadraticBezierCurve3:Ta,SplineCurve:Aa}),qc=class extends Zn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ra[i](e,t))}return this}getPoint(t,e){let i=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let o=s[r]-i,a=this.curves[r],l=a.getLength(),h=l===0?0:1-o/l;return a.getPointAt(h,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],i;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let h=0;h<l.length;h++){let u=l[h];i&&i.equals(u)||(e.push(u),i=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(new Ra[s.type]().fromJSON(s))}return this}},jr=class extends qc{constructor(t){super(),this.type="Path",this.currentPoint=new zt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let i=new wa(this.currentPoint.clone(),new zt(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){let r=new Ea(this.currentPoint.clone(),new zt(t,e),new zt(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,r,o){let a=new Sa(this.currentPoint.clone(),new zt(t,e),new zt(i,s),new zt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),i=new Aa(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,i,s,r,o),this}absarc(t,e,i,s,r,o){return this.absellipse(t,e,i,i,s,r,o),this}ellipse(t,e,i,s,r,o,a,l){let h=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+h,e+u,i,s,r,o,a,l),this}absellipse(t,e,i,s,r,o,a,l){let h=new Yr(t,e,i,s,r,o,a,l);if(this.curves.length>0){let g=h.getPoint(0);g.equals(this.currentPoint)||this.lineTo(g.x,g.y)}this.curves.push(h);let u=h.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Jr=class n extends Xe{constructor(t=[new zt(0,-.5),new zt(.5,0),new zt(0,.5)],e=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:i,phiLength:s},e=Math.floor(e),s=wn(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],h=[],u=1/e,g=new $,f=new zt,c=new $,d=new $,M=new $,m=0,p=0;for(let S=0;S<=t.length-1;S++)switch(S){case 0:m=t[S+1].x-t[S].x,p=t[S+1].y-t[S].y,c.x=p*1,c.y=-m,c.z=p*0,M.copy(c),c.normalize(),l.push(c.x,c.y,c.z);break;case t.length-1:l.push(M.x,M.y,M.z);break;default:m=t[S+1].x-t[S].x,p=t[S+1].y-t[S].y,c.x=p*1,c.y=-m,c.z=p*0,d.copy(c),c.x+=M.x,c.y+=M.y,c.z+=M.z,c.normalize(),l.push(c.x,c.y,c.z),M.copy(d)}for(let S=0;S<=e;S++){let y=i+S*u*s,_=Math.sin(y),N=Math.cos(y);for(let w=0;w<=t.length-1;w++){g.x=t[w].x*_,g.y=t[w].y,g.z=t[w].x*N,o.push(g.x,g.y,g.z),f.x=S/e,f.y=w/(t.length-1),a.push(f.x,f.y);let R=l[3*w+0]*_,A=l[3*w+1],v=l[3*w+0]*N;h.push(R,A,v)}}for(let S=0;S<e;S++)for(let y=0;y<t.length-1;y++){let _=y+S*t.length,N=_,w=_+t.length,R=_+t.length+1,A=_+1;r.push(N,w,A),r.push(R,A,w)}this.setIndex(r),this.setAttribute("position",new Ae(o,3)),this.setAttribute("uv",new Ae(a,2)),this.setAttribute("normal",new Ae(h,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.points,t.segments,t.phiStart,t.phiLength)}},ri=class n extends Jr{constructor(t=1,e=1,i=4,s=8){let r=new jr;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(i),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:i,radialSegments:s}}static fromJSON(t){return new n(t.radius,t.length,t.capSegments,t.radialSegments)}};var ve=class n extends Xe{constructor(t=1,e=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let h=this;s=Math.floor(s),r=Math.floor(r);let u=[],g=[],f=[],c=[],d=0,M=[],m=i/2,p=0;S(),o===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(u),this.setAttribute("position",new Ae(g,3)),this.setAttribute("normal",new Ae(f,3)),this.setAttribute("uv",new Ae(c,2));function S(){let _=new $,N=new $,w=0,R=(e-t)/i;for(let A=0;A<=r;A++){let v=[],x=A/r,b=x*(e-t)+t;for(let C=0;C<=s;C++){let E=C/s,T=E*l+a,k=Math.sin(T),D=Math.cos(T);N.x=b*k,N.y=-x*i+m,N.z=b*D,g.push(N.x,N.y,N.z),_.set(k,R,D).normalize(),f.push(_.x,_.y,_.z),c.push(E,1-x),v.push(d++)}M.push(v)}for(let A=0;A<s;A++)for(let v=0;v<r;v++){let x=M[v][A],b=M[v+1][A],C=M[v+1][A+1],E=M[v][A+1];(t>0||v!==0)&&(u.push(x,b,E),w+=3),(e>0||v!==r-1)&&(u.push(b,C,E),w+=3)}h.addGroup(p,w,0),p+=w}function y(_){let N=d,w=new zt,R=new $,A=0,v=_===!0?t:e,x=_===!0?1:-1;for(let C=1;C<=s;C++)g.push(0,m*x,0),f.push(0,x,0),c.push(.5,.5),d++;let b=d;for(let C=0;C<=s;C++){let T=C/s*l+a,k=Math.cos(T),D=Math.sin(T);R.x=v*D,R.y=m*x,R.z=v*k,g.push(R.x,R.y,R.z),f.push(0,x,0),w.x=k*.5+.5,w.y=D*.5*x+.5,c.push(w.x,w.y),d++}for(let C=0;C<s;C++){let E=N+C,T=b+C;_===!0?u.push(T,T+1,E):u.push(T+1,T,E),A+=3}h.addGroup(p,A,_===!0?1:2),p+=A}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},nn=class n extends ve{constructor(t=1,e=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new n(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Yc=class n extends Xe{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};let r=[],o=[];a(s),h(i),u(),this.setAttribute("position",new Ae(r,3)),this.setAttribute("normal",new Ae(r.slice(),3)),this.setAttribute("uv",new Ae(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(S){let y=new $,_=new $,N=new $;for(let w=0;w<e.length;w+=3)c(e[w+0],y),c(e[w+1],_),c(e[w+2],N),l(y,_,N,S)}function l(S,y,_,N){let w=N+1,R=[];for(let A=0;A<=w;A++){R[A]=[];let v=S.clone().lerp(_,A/w),x=y.clone().lerp(_,A/w),b=w-A;for(let C=0;C<=b;C++)C===0&&A===w?R[A][C]=v:R[A][C]=v.clone().lerp(x,C/b)}for(let A=0;A<w;A++)for(let v=0;v<2*(w-A)-1;v++){let x=Math.floor(v/2);v%2===0?(f(R[A][x+1]),f(R[A+1][x]),f(R[A][x])):(f(R[A][x+1]),f(R[A+1][x+1]),f(R[A+1][x]))}}function h(S){let y=new $;for(let _=0;_<r.length;_+=3)y.x=r[_+0],y.y=r[_+1],y.z=r[_+2],y.normalize().multiplyScalar(S),r[_+0]=y.x,r[_+1]=y.y,r[_+2]=y.z}function u(){let S=new $;for(let y=0;y<r.length;y+=3){S.x=r[y+0],S.y=r[y+1],S.z=r[y+2];let _=m(S)/2/Math.PI+.5,N=p(S)/Math.PI+.5;o.push(_,1-N)}d(),g()}function g(){for(let S=0;S<o.length;S+=6){let y=o[S+0],_=o[S+2],N=o[S+4],w=Math.max(y,_,N),R=Math.min(y,_,N);w>.9&&R<.1&&(y<.2&&(o[S+0]+=1),_<.2&&(o[S+2]+=1),N<.2&&(o[S+4]+=1))}}function f(S){r.push(S.x,S.y,S.z)}function c(S,y){let _=S*3;y.x=t[_+0],y.y=t[_+1],y.z=t[_+2]}function d(){let S=new $,y=new $,_=new $,N=new $,w=new zt,R=new zt,A=new zt;for(let v=0,x=0;v<r.length;v+=9,x+=6){S.set(r[v+0],r[v+1],r[v+2]),y.set(r[v+3],r[v+4],r[v+5]),_.set(r[v+6],r[v+7],r[v+8]),w.set(o[x+0],o[x+1]),R.set(o[x+2],o[x+3]),A.set(o[x+4],o[x+5]),N.copy(S).add(y).add(_).divideScalar(3);let b=m(N);M(w,x+0,S,b),M(R,x+2,y,b),M(A,x+4,_,b)}}function M(S,y,_,N){N<0&&S.x===1&&(o[y]=S.x-1),_.x===0&&_.z===0&&(o[y]=N/2/Math.PI+.5)}function m(S){return Math.atan2(S.z,-S.x)}function p(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.vertices,t.indices,t.radius,t.details)}};var Ms=class extends jr{constructor(t){super(t),this.uuid=gi(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(new jr().fromJSON(s))}return this}},Ox={triangulate:function(n,t,e=2){let i=t&&t.length,s=i?t[0]*e:n.length,r=Lf(n,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,h,u,g,f,c;if(i&&(r=$x(n,t,r,e)),n.length>80*e){a=h=n[0],l=u=n[1];for(let d=e;d<s;d+=e)g=n[d],f=n[d+1],g<a&&(a=g),f<l&&(l=f),g>h&&(h=g),f>u&&(u=f);c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return Kr(r,o,e,a,l,c,0),o}};function Lf(n,t,e,i,s){let r,o;if(s===Qx(n,t,e,i)>0)for(r=t;r<e;r+=i)o=rf(r,n[r],n[r+1],o);else for(r=e-i;r>=t;r-=i)o=rf(r,n[r],n[r+1],o);return o&&za(o,o.next)&&(to(o),o=o.next),o}function bs(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(za(e,e.next)||en(e.prev,e,e.next)===0)){if(to(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function Kr(n,t,e,i,s,r,o){if(!n)return;!o&&r&&qx(n,i,s,r);let a=n,l,h;for(;n.prev!==n.next;){if(l=n.prev,h=n.next,r?Bx(n,i,s,r):Fx(n)){t.push(l.i/e|0),t.push(n.i/e|0),t.push(h.i/e|0),to(n),n=h.next,a=h.next;continue}if(n=h,n===a){o?o===1?(n=zx(bs(n),t,e),Kr(n,t,e,i,s,r,2)):o===2&&Hx(n,t,e,i,s,r):Kr(bs(n),t,e,i,s,r,1);break}}}function Fx(n){let t=n.prev,e=n,i=n.next;if(en(t,e,i)>=0)return!1;let s=t.x,r=e.x,o=i.x,a=t.y,l=e.y,h=i.y,u=s<r?s<o?s:o:r<o?r:o,g=a<l?a<h?a:h:l<h?l:h,f=s>r?s>o?s:o:r>o?r:o,c=a>l?a>h?a:h:l>h?l:h,d=i.next;for(;d!==t;){if(d.x>=u&&d.x<=f&&d.y>=g&&d.y<=c&&js(s,a,r,l,o,h,d.x,d.y)&&en(d.prev,d,d.next)>=0)return!1;d=d.next}return!0}function Bx(n,t,e,i){let s=n.prev,r=n,o=n.next;if(en(s,r,o)>=0)return!1;let a=s.x,l=r.x,h=o.x,u=s.y,g=r.y,f=o.y,c=a<l?a<h?a:h:l<h?l:h,d=u<g?u<f?u:f:g<f?g:f,M=a>l?a>h?a:h:l>h?l:h,m=u>g?u>f?u:f:g>f?g:f,p=Zc(c,d,t,e,i),S=Zc(M,m,t,e,i),y=n.prevZ,_=n.nextZ;for(;y&&y.z>=p&&_&&_.z<=S;){if(y.x>=c&&y.x<=M&&y.y>=d&&y.y<=m&&y!==s&&y!==o&&js(a,u,l,g,h,f,y.x,y.y)&&en(y.prev,y,y.next)>=0||(y=y.prevZ,_.x>=c&&_.x<=M&&_.y>=d&&_.y<=m&&_!==s&&_!==o&&js(a,u,l,g,h,f,_.x,_.y)&&en(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;y&&y.z>=p;){if(y.x>=c&&y.x<=M&&y.y>=d&&y.y<=m&&y!==s&&y!==o&&js(a,u,l,g,h,f,y.x,y.y)&&en(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;_&&_.z<=S;){if(_.x>=c&&_.x<=M&&_.y>=d&&_.y<=m&&_!==s&&_!==o&&js(a,u,l,g,h,f,_.x,_.y)&&en(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function zx(n,t,e){let i=n;do{let s=i.prev,r=i.next.next;!za(s,r)&&Df(s,i,i.next,r)&&Qr(s,r)&&Qr(r,s)&&(t.push(s.i/e|0),t.push(i.i/e|0),t.push(r.i/e|0),to(i),to(i.next),i=n=r),i=i.next}while(i!==n);return bs(i)}function Hx(n,t,e,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&jx(o,a)){let l=Uf(o,a);o=bs(o,o.next),l=bs(l,l.next),Kr(o,t,e,i,s,r,0),Kr(l,t,e,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function $x(n,t,e,i){let s=[],r,o,a,l,h;for(r=0,o=t.length;r<o;r++)a=t[r]*i,l=r<o-1?t[r+1]*i:n.length,h=Lf(n,a,l,i,!1),h===h.next&&(h.steiner=!0),s.push(Zx(h));for(s.sort(Vx),r=0;r<s.length;r++)e=Gx(s[r],e);return e}function Vx(n,t){return n.x-t.x}function Gx(n,t){let e=Wx(n,t);if(!e)return t;let i=Uf(e,n);return bs(i,i.next),bs(e,e.next)}function Wx(n,t){let e=t,i=-1/0,s,r=n.x,o=n.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let f=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=r&&f>i&&(i=f,s=e.x<e.next.x?e:e.next,f===r))return s}e=e.next}while(e!==t);if(!s)return null;let a=s,l=s.x,h=s.y,u=1/0,g;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&js(o<h?r:i,o,l,h,o<h?i:r,o,e.x,e.y)&&(g=Math.abs(o-e.y)/(r-e.x),Qr(e,n)&&(g<u||g===u&&(e.x>s.x||e.x===s.x&&Xx(s,e)))&&(s=e,u=g)),e=e.next;while(e!==a);return s}function Xx(n,t){return en(n.prev,n,t.prev)<0&&en(t.next,n,n.next)<0}function qx(n,t,e,i){let s=n;do s.z===0&&(s.z=Zc(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,Yx(s)}function Yx(n){let t,e,i,s,r,o,a,l,h=1;do{for(e=n,n=null,r=null,o=0;e;){for(o++,i=e,a=0,t=0;t<h&&(a++,i=i.nextZ,!!i);t++);for(l=h;a>0||l>0&&i;)a!==0&&(l===0||!i||e.z<=i.z)?(s=e,e=e.nextZ,a--):(s=i,i=i.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;e=i}r.nextZ=null,h*=2}while(o>1);return n}function Zc(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function Zx(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function js(n,t,e,i,s,r,o,a){return(s-o)*(t-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(i-a)}function jx(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!Jx(n,t)&&(Qr(n,t)&&Qr(t,n)&&Kx(n,t)&&(en(n.prev,n,t.prev)||en(n,t.prev,t))||za(n,t)&&en(n.prev,n,n.next)>0&&en(t.prev,t,t.next)>0)}function en(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function za(n,t){return n.x===t.x&&n.y===t.y}function Df(n,t,e,i){let s=Zo(en(n,t,e)),r=Zo(en(n,t,i)),o=Zo(en(e,i,n)),a=Zo(en(e,i,t));return!!(s!==r&&o!==a||s===0&&Yo(n,e,t)||r===0&&Yo(n,i,t)||o===0&&Yo(e,n,i)||a===0&&Yo(e,t,i))}function Yo(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function Zo(n){return n>0?1:n<0?-1:0}function Jx(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&Df(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function Qr(n,t){return en(n.prev,n,n.next)<0?en(n,t,n.next)>=0&&en(n,n.prev,t)>=0:en(n,t,n.prev)<0||en(n,n.next,t)<0}function Kx(n,t){let e=n,i=!1,s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function Uf(n,t){let e=new jc(n.i,n.x,n.y),i=new jc(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function rf(n,t,e,i){let s=new jc(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function to(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function jc(n,t,e){this.i=n,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Qx(n,t,e,i){let s=0;for(let r=t,o=e-i;r<e;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}var Yi=class n{static area(t){let e=t.length,i=0;for(let s=e-1,r=0;r<e;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return n.area(t)<0}static triangulateShape(t,e){let i=[],s=[],r=[];of(t),af(i,t);let o=t.length;e.forEach(of);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,af(i,e[l]);let a=Ox.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function of(n){let t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function af(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}var Ca=class n extends Xe{constructor(t=new Ms([new zt(.5,.5),new zt(-.5,.5),new zt(-.5,-.5),new zt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let i=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){let h=t[a];o(h)}this.setAttribute("position",new Ae(s,3)),this.setAttribute("uv",new Ae(r,2)),this.computeVertexNormals();function o(a){let l=[],h=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,g=e.depth!==void 0?e.depth:1,f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,c=e.bevelThickness!==void 0?e.bevelThickness:.2,d=e.bevelSize!==void 0?e.bevelSize:c-.1,M=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,S=e.UVGenerator!==void 0?e.UVGenerator:tv,y,_=!1,N,w,R,A;p&&(y=p.getSpacedPoints(u),_=!0,f=!1,N=p.computeFrenetFrames(u,!1),w=new $,R=new $,A=new $),f||(m=0,c=0,d=0,M=0);let v=a.extractPoints(h),x=v.shape,b=v.holes;if(!Yi.isClockWise(x)){x=x.reverse();for(let st=0,pt=b.length;st<pt;st++){let H=b[st];Yi.isClockWise(H)&&(b[st]=H.reverse())}}let E=Yi.triangulateShape(x,b),T=x;for(let st=0,pt=b.length;st<pt;st++){let H=b[st];x=x.concat(H)}function k(st,pt,H){return pt||console.error("THREE.ExtrudeGeometry: vec does not exist"),st.clone().addScaledVector(pt,H)}let D=x.length,O=E.length;function z(st,pt,H){let $t,tt,j,mt=st.x-pt.x,Y=st.y-pt.y,kt=H.x-st.x,B=H.y-st.y,L=mt*mt+Y*Y,ct=mt*B-Y*kt;if(Math.abs(ct)>Number.EPSILON){let bt=Math.sqrt(L),Pt=Math.sqrt(kt*kt+B*B),Q=pt.x-Y/bt,at=pt.y+mt/bt,lt=H.x-B/Pt,xt=H.y+kt/Pt,Rt=((lt-Q)*B-(xt-at)*kt)/(mt*B-Y*kt);$t=Q+mt*Rt-st.x,tt=at+Y*Rt-st.y;let wt=$t*$t+tt*tt;if(wt<=2)return new zt($t,tt);j=Math.sqrt(wt/2)}else{let bt=!1;mt>Number.EPSILON?kt>Number.EPSILON&&(bt=!0):mt<-Number.EPSILON?kt<-Number.EPSILON&&(bt=!0):Math.sign(Y)===Math.sign(B)&&(bt=!0),bt?($t=-Y,tt=mt,j=Math.sqrt(L)):($t=mt,tt=Y,j=Math.sqrt(L/2))}return new zt($t/j,tt/j)}let q=[];for(let st=0,pt=T.length,H=pt-1,$t=st+1;st<pt;st++,H++,$t++)H===pt&&(H=0),$t===pt&&($t=0),q[st]=z(T[st],T[H],T[$t]);let X=[],U,gt=q.concat();for(let st=0,pt=b.length;st<pt;st++){let H=b[st];U=[];for(let $t=0,tt=H.length,j=tt-1,mt=$t+1;$t<tt;$t++,j++,mt++)j===tt&&(j=0),mt===tt&&(mt=0),U[$t]=z(H[$t],H[j],H[mt]);X.push(U),gt=gt.concat(U)}for(let st=0;st<m;st++){let pt=st/m,H=c*Math.cos(pt*Math.PI/2),$t=d*Math.sin(pt*Math.PI/2)+M;for(let tt=0,j=T.length;tt<j;tt++){let mt=k(T[tt],q[tt],$t);V(mt.x,mt.y,-H)}for(let tt=0,j=b.length;tt<j;tt++){let mt=b[tt];U=X[tt];for(let Y=0,kt=mt.length;Y<kt;Y++){let B=k(mt[Y],U[Y],$t);V(B.x,B.y,-H)}}}let At=d+M;for(let st=0;st<D;st++){let pt=f?k(x[st],gt[st],At):x[st];_?(R.copy(N.normals[0]).multiplyScalar(pt.x),w.copy(N.binormals[0]).multiplyScalar(pt.y),A.copy(y[0]).add(R).add(w),V(A.x,A.y,A.z)):V(pt.x,pt.y,0)}for(let st=1;st<=u;st++)for(let pt=0;pt<D;pt++){let H=f?k(x[pt],gt[pt],At):x[pt];_?(R.copy(N.normals[st]).multiplyScalar(H.x),w.copy(N.binormals[st]).multiplyScalar(H.y),A.copy(y[st]).add(R).add(w),V(A.x,A.y,A.z)):V(H.x,H.y,g/u*st)}for(let st=m-1;st>=0;st--){let pt=st/m,H=c*Math.cos(pt*Math.PI/2),$t=d*Math.sin(pt*Math.PI/2)+M;for(let tt=0,j=T.length;tt<j;tt++){let mt=k(T[tt],q[tt],$t);V(mt.x,mt.y,g+H)}for(let tt=0,j=b.length;tt<j;tt++){let mt=b[tt];U=X[tt];for(let Y=0,kt=mt.length;Y<kt;Y++){let B=k(mt[Y],U[Y],$t);_?V(B.x,B.y+y[u-1].y,y[u-1].x+H):V(B.x,B.y,g+H)}}}P(),G();function P(){let st=s.length/3;if(f){let pt=0,H=D*pt;for(let $t=0;$t<O;$t++){let tt=E[$t];K(tt[2]+H,tt[1]+H,tt[0]+H)}pt=u+m*2,H=D*pt;for(let $t=0;$t<O;$t++){let tt=E[$t];K(tt[0]+H,tt[1]+H,tt[2]+H)}}else{for(let pt=0;pt<O;pt++){let H=E[pt];K(H[2],H[1],H[0])}for(let pt=0;pt<O;pt++){let H=E[pt];K(H[0]+D*u,H[1]+D*u,H[2]+D*u)}}i.addGroup(st,s.length/3-st,0)}function G(){let st=s.length/3,pt=0;J(T,pt),pt+=T.length;for(let H=0,$t=b.length;H<$t;H++){let tt=b[H];J(tt,pt),pt+=tt.length}i.addGroup(st,s.length/3-st,1)}function J(st,pt){let H=st.length;for(;--H>=0;){let $t=H,tt=H-1;tt<0&&(tt=st.length-1);for(let j=0,mt=u+m*2;j<mt;j++){let Y=D*j,kt=D*(j+1),B=pt+$t+Y,L=pt+tt+Y,ct=pt+tt+kt,bt=pt+$t+kt;ot(B,L,ct,bt)}}}function V(st,pt,H){l.push(st),l.push(pt),l.push(H)}function K(st,pt,H){Tt(st),Tt(pt),Tt(H);let $t=s.length/3,tt=S.generateTopUV(i,s,$t-3,$t-2,$t-1);Lt(tt[0]),Lt(tt[1]),Lt(tt[2])}function ot(st,pt,H,$t){Tt(st),Tt(pt),Tt($t),Tt(pt),Tt(H),Tt($t);let tt=s.length/3,j=S.generateSideWallUV(i,s,tt-6,tt-3,tt-2,tt-1);Lt(j[0]),Lt(j[1]),Lt(j[3]),Lt(j[1]),Lt(j[2]),Lt(j[3])}function Tt(st){s.push(l[st*3+0]),s.push(l[st*3+1]),s.push(l[st*3+2])}function Lt(st){r.push(st.x),r.push(st.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return ev(e,i,t)}static fromJSON(t,e){let i=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];i.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Ra[s.type]().fromJSON(s)),new n(i,t.options)}},tv={generateTopUV:function(n,t,e,i,s){let r=t[e*3],o=t[e*3+1],a=t[i*3],l=t[i*3+1],h=t[s*3],u=t[s*3+1];return[new zt(r,o),new zt(a,l),new zt(h,u)]},generateSideWallUV:function(n,t,e,i,s,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],h=t[i*3],u=t[i*3+1],g=t[i*3+2],f=t[s*3],c=t[s*3+1],d=t[s*3+2],M=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(a-u)<Math.abs(o-h)?[new zt(o,1-l),new zt(h,1-g),new zt(f,1-d),new zt(M,1-p)]:[new zt(a,1-l),new zt(u,1-g),new zt(c,1-d),new zt(m,1-p)]}};function ev(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var un=class n extends Yc{constructor(t=1,e=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new n(t.radius,t.detail)}};var cr=class n extends Xe{constructor(t=.5,e=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);let a=[],l=[],h=[],u=[],g=t,f=(e-t)/s,c=new $,d=new zt;for(let M=0;M<=s;M++){for(let m=0;m<=i;m++){let p=r+m/i*o;c.x=g*Math.cos(p),c.y=g*Math.sin(p),l.push(c.x,c.y,c.z),h.push(0,0,1),d.x=(c.x/e+1)/2,d.y=(c.y/e+1)/2,u.push(d.x,d.y)}g+=f}for(let M=0;M<s;M++){let m=M*(i+1);for(let p=0;p<i;p++){let S=p+m,y=S,_=S+i+1,N=S+i+2,w=S+1;a.push(y,_,w),a.push(_,N,w)}}this.setIndex(a),this.setAttribute("position",new Ae(l,3)),this.setAttribute("normal",new Ae(h,3)),this.setAttribute("uv",new Ae(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},Ia=class n extends Xe{constructor(t=new Ms([new zt(0,.5),new zt(-.5,-.5),new zt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let i=[],s=[],r=[],o=[],a=0,l=0;if(Array.isArray(t)===!1)h(t);else for(let u=0;u<t.length;u++)h(t[u]),this.addGroup(a,l,u),a+=l,l=0;this.setIndex(i),this.setAttribute("position",new Ae(s,3)),this.setAttribute("normal",new Ae(r,3)),this.setAttribute("uv",new Ae(o,2));function h(u){let g=s.length/3,f=u.extractPoints(e),c=f.shape,d=f.holes;Yi.isClockWise(c)===!1&&(c=c.reverse());for(let m=0,p=d.length;m<p;m++){let S=d[m];Yi.isClockWise(S)===!0&&(d[m]=S.reverse())}let M=Yi.triangulateShape(c,d);for(let m=0,p=d.length;m<p;m++){let S=d[m];c=c.concat(S)}for(let m=0,p=c.length;m<p;m++){let S=c[m];s.push(S.x,S.y,0),r.push(0,0,1),o.push(S.x,S.y)}for(let m=0,p=M.length;m<p;m++){let S=M[m],y=S[0]+g,_=S[1]+g,N=S[2]+g;i.push(y,_,N),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return nv(e,t)}static fromJSON(t,e){let i=[];for(let s=0,r=t.shapes.length;s<r;s++){let o=e[t.shapes[s]];i.push(o)}return new n(i,t.curveSegments)}};function nv(n,t){if(t.shapes=[],Array.isArray(n))for(let e=0,i=n.length;e<i;e++){let s=n[e];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t}var Ce=class n extends Xe{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),h=0,u=[],g=new $,f=new $,c=[],d=[],M=[],m=[];for(let p=0;p<=i;p++){let S=[],y=p/i,_=0;p===0&&o===0?_=.5/e:p===i&&l===Math.PI&&(_=-.5/e);for(let N=0;N<=e;N++){let w=N/e;g.x=-t*Math.cos(s+w*r)*Math.sin(o+y*a),g.y=t*Math.cos(o+y*a),g.z=t*Math.sin(s+w*r)*Math.sin(o+y*a),d.push(g.x,g.y,g.z),f.copy(g).normalize(),M.push(f.x,f.y,f.z),m.push(w+_,1-y),S.push(h++)}u.push(S)}for(let p=0;p<i;p++)for(let S=0;S<e;S++){let y=u[p][S+1],_=u[p][S],N=u[p+1][S],w=u[p+1][S+1];(p!==0||o>0)&&c.push(y,_,w),(p!==i-1||l<Math.PI)&&c.push(_,N,w)}this.setIndex(c),this.setAttribute("position",new Ae(d,3)),this.setAttribute("normal",new Ae(M,3)),this.setAttribute("uv",new Ae(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var on=class n extends Xe{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);let o=[],a=[],l=[],h=[],u=new $,g=new $,f=new $;for(let c=0;c<=i;c++)for(let d=0;d<=s;d++){let M=d/s*r,m=c/i*Math.PI*2;g.x=(t+e*Math.cos(m))*Math.cos(M),g.y=(t+e*Math.cos(m))*Math.sin(M),g.z=e*Math.sin(m),a.push(g.x,g.y,g.z),u.x=t*Math.cos(M),u.y=t*Math.sin(M),f.subVectors(g,u).normalize(),l.push(f.x,f.y,f.z),h.push(d/s),h.push(c/i)}for(let c=1;c<=i;c++)for(let d=1;d<=s;d++){let M=(s+1)*c+d-1,m=(s+1)*(c-1)+d-1,p=(s+1)*(c-1)+d,S=(s+1)*c+d;o.push(M,m,S),o.push(m,p,S)}this.setIndex(o),this.setAttribute("position",new Ae(a,3)),this.setAttribute("normal",new Ae(l,3)),this.setAttribute("uv",new Ae(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Pa=class n extends Xe{constructor(t=new Ta(new $(-1,-1,0),new $(-1,1,0),new $(1,1,0)),e=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:i,radialSegments:s,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new $,l=new $,h=new zt,u=new $,g=[],f=[],c=[],d=[];M(),this.setIndex(d),this.setAttribute("position",new Ae(g,3)),this.setAttribute("normal",new Ae(f,3)),this.setAttribute("uv",new Ae(c,2));function M(){for(let y=0;y<e;y++)m(y);m(r===!1?e:0),S(),p()}function m(y){u=t.getPointAt(y/e,u);let _=o.normals[y],N=o.binormals[y];for(let w=0;w<=s;w++){let R=w/s*Math.PI*2,A=Math.sin(R),v=-Math.cos(R);l.x=v*_.x+A*N.x,l.y=v*_.y+A*N.y,l.z=v*_.z+A*N.z,l.normalize(),f.push(l.x,l.y,l.z),a.x=u.x+i*l.x,a.y=u.y+i*l.y,a.z=u.z+i*l.z,g.push(a.x,a.y,a.z)}}function p(){for(let y=1;y<=e;y++)for(let _=1;_<=s;_++){let N=(s+1)*(y-1)+(_-1),w=(s+1)*y+(_-1),R=(s+1)*y+_,A=(s+1)*(y-1)+_;d.push(N,w,A),d.push(w,R,A)}}function S(){for(let y=0;y<=e;y++)for(let _=0;_<=s;_++)h.x=y/e,h.y=_/s,c.push(h.x,h.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new n(new Ra[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var ka=class extends Pi{static get type(){return"MeshToonMaterial"}constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.color=new de(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new de(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=bf,this.normalScale=new zt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};function jo(n,t,e){return!n||!e&&n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function iv(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var hr=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=i+2;;){if(s===void 0){if(t<r)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=e[++i],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=e[--i-1],t>=r)break t}o=i,i=0;break e}break n}for(;i<o;){let a=i+o>>>1;t<e[a]?o=a:i=a+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=i[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Jc=class extends hr{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Qh,endingEnd:Qh}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case td:r=t,a=2*e-i;break;case ed:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case td:o=t,l=2*i-e;break;case ed:o=1,l=i+s[1]-s[0];break;default:o=t-1,l=e}let h=(i-e)*.5,u=this.valueSize;this._weightPrev=h/(e-a),this._weightNext=h/(l-i),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,h=l-a,u=this._offsetPrev,g=this._offsetNext,f=this._weightPrev,c=this._weightNext,d=(i-e)/(s-e),M=d*d,m=M*d,p=-f*m+2*f*M-f*d,S=(1+f)*m+(-1.5-2*f)*M+(-.5+f)*d+1,y=(-1-c)*m+(1.5+c)*M+.5*d,_=c*m-c*M;for(let N=0;N!==a;++N)r[N]=p*o[u+N]+S*o[h+N]+y*o[l+N]+_*o[g+N];return r}},Kc=class extends hr{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,h=l-a,u=(i-e)/(s-e),g=1-u;for(let f=0;f!==a;++f)r[f]=o[h+f]*g+o[l+f]*u;return r}},Qc=class extends hr{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},oi=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=jo(e,this.TimeBufferType),this.values=jo(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:jo(t.times,Array),values:jo(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Qc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Kc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Jc(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case na:e=this.InterpolantFactoryMethodDiscrete;break;case Ec:e=this.InterpolantFactoryMethodLinear;break;case ll:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return na;case this.InterpolantFactoryMethodLinear:return Ec;case this.InterpolantFactoryMethodSmooth:return ll}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t}return this}trim(t,e){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<t;)++r;for(;o!==-1&&i[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&iv(s))for(let a=0,l=s.length;a!==l;++a){let h=s[a];if(isNaN(h)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,h),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===ll,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,h=t[a],u=t[a+1];if(h!==u&&(a!==1||h!==t[0]))if(s)l=!0;else{let g=a*i,f=g-i,c=g+i;for(let d=0;d!==i;++d){let M=e[g+d];if(M!==e[f+d]||M!==e[c+d]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let g=a*i,f=o*i;for(let c=0;c!==i;++c)e[f+c]=e[g+c]}++o}}if(r>0){t[o]=t[r];for(let a=r*i,l=o*i,h=0;h!==i;++h)e[l+h]=e[a+h];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};oi.prototype.TimeBufferType=Float32Array;oi.prototype.ValueBufferType=Float32Array;oi.prototype.DefaultInterpolation=Ec;var Ss=class extends oi{constructor(t,e,i){super(t,e,i)}};Ss.prototype.ValueTypeName="bool";Ss.prototype.ValueBufferType=Array;Ss.prototype.DefaultInterpolation=na;Ss.prototype.InterpolantFactoryMethodLinear=void 0;Ss.prototype.InterpolantFactoryMethodSmooth=void 0;var th=class extends oi{};th.prototype.ValueTypeName="color";var eh=class extends oi{};eh.prototype.ValueTypeName="number";var nh=class extends hr{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-e)/(s-e),h=t*a;for(let u=h+a;h!==u;h+=4)Xn.slerpFlat(r,0,o,h-a,o,h,l);return r}},La=class extends oi{InterpolantFactoryMethodLinear(t){return new nh(this.times,this.values,this.getValueSize(),t)}};La.prototype.ValueTypeName="quaternion";La.prototype.InterpolantFactoryMethodSmooth=void 0;var ws=class extends oi{constructor(t,e,i){super(t,e,i)}};ws.prototype.ValueTypeName="string";ws.prototype.ValueBufferType=Array;ws.prototype.DefaultInterpolation=na;ws.prototype.InterpolantFactoryMethodLinear=void 0;ws.prototype.InterpolantFactoryMethodSmooth=void 0;var ih=class extends oi{};ih.prototype.ValueTypeName="vector";var sh=class{constructor(t,e,i){let s=this,r=!1,o=0,a=0,l,h=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,g){return h.push(u,g),this},this.removeHandler=function(u){let g=h.indexOf(u);return g!==-1&&h.splice(g,2),this},this.getHandler=function(u){for(let g=0,f=h.length;g<f;g+=2){let c=h[g],d=h[g+1];if(c.global&&(c.lastIndex=0),c.test(u))return d}return null}}},sv=new sh,rh=class{constructor(t){this.manager=t!==void 0?t:sv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};rh.DEFAULT_MATERIAL_NAME="__DEFAULT";var Da=class extends We{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new de(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Ua=class extends Da{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(We.DEFAULT_UP),this.updateMatrix(),this.groundColor=new de(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},zl=new Oe,lf=new $,cf=new $,oh=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new zt(512,512),this.map=null,this.mapPass=null,this.matrix=new Oe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Vr,this._frameExtents=new zt(1,1),this._viewportCount=1,this._viewports=[new rn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,i=this.matrix;lf.setFromMatrixPosition(t.matrixWorld),e.position.copy(lf),cf.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(cf),e.updateMatrixWorld(),zl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(zl),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(zl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var ah=class extends oh{constructor(){super(new ua(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Na=class extends Da{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(We.DEFAULT_UP),this.updateMatrix(),this.target=new We,this.shadow=new ah}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var bh="\\[\\]\\.:\\/",rv=new RegExp("["+bh+"]","g"),Sh="[^"+bh+"]",ov="[^"+bh.replace("\\.","")+"]",av=/((?:WC+[\/:])*)/.source.replace("WC",Sh),lv=/(WCOD+)?/.source.replace("WCOD",ov),cv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Sh),hv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Sh),dv=new RegExp("^"+av+lv+cv+hv+"$"),fv=["material","materials","bones","map"],lh=class{constructor(t,e,i){let s=i||tn.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},tn=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(rv,"")}static parseTrackName(t){let e=dv.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);fv.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=i(a.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let h=e.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===h){h=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(h!==void 0){if(t[h]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[h]}}let o=t[s];if(o===void 0){let h=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};tn.Composite=lh;tn.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};tn.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};tn.prototype.GetterByBindingType=[tn.prototype._getValue_direct,tn.prototype._getValue_array,tn.prototype._getValue_arrayElement,tn.prototype._getValue_toArray];tn.prototype.SetterByBindingTypeAndVersioning=[[tn.prototype._setValue_direct,tn.prototype._setValue_direct_setNeedsUpdate,tn.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[tn.prototype._setValue_array,tn.prototype._setValue_array_setNeedsUpdate,tn.prototype._setValue_array_setMatrixWorldNeedsUpdate],[tn.prototype._setValue_arrayElement,tn.prototype._setValue_arrayElement_setNeedsUpdate,tn.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[tn.prototype._setValue_fromArray,tn.prototype._setValue_fromArray_setNeedsUpdate,tn.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var U1=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ch}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ch);var uv=2.3,Ke=7.2,Ha=.16,Qi=(n,t,e)=>{let i=Math.max(0,Math.min(1,(e-n)/(t-n)));return i*i*(3-2*i)};function Nf(n,t,e){let i=n.points,s=i.length-1,r=n.lengthM/s,o=P=>{let G=Math.max(0,Math.min(s,P/r)),J=Math.min(s-1,Math.floor(G)),V=G-J,K=i[Math.max(0,J-1)],ot=i[J],Tt=i[J+1],Lt=i[Math.min(s,J+2)],st=pt=>.5*(2*ot[pt]+(-K[pt]+Tt[pt])*V+(2*K[pt]-5*ot[pt]+4*Tt[pt]-Lt[pt])*V*V+(-K[pt]+3*ot[pt]-3*Tt[pt]+Lt[pt])*V*V*V);return[st(0),st(2),ot[1]+(Tt[1]-ot[1])*V]},a=P=>{if(P<=n.lengthM)return o(P);let G=o(n.lengthM-20),J=o(n.lengthM),V=(P-n.lengthM)/20;return[J[0]+(J[0]-G[0])*V,J[1]+(J[1]-G[1])*V,J[2]]},l=2700,h=2585,u=n.overlaps.filter(([P,G])=>G>P).sort((P,G)=>P[1]-G[1]),g=P=>{for(let V=0;V<u.length-1;V++){let[K,ot]=u[V],[Tt,Lt]=u[V+1];if(P<=Lt)return K+(P-ot)*(Tt-K)/(Lt-ot)}let[G,J]=u.at(-1);return G+(P-J)},f=[];for(let P=0;P<=l;P+=2)f.push([P,...o(P)]);let c=2600,d=4900,M=[];for(let P=c;P<=d;P+=10){let G=o(P),J=g(P),V=J,K=1e9;for(let ot of f){if(Math.abs(ot[0]-J)>60)continue;let Tt=(ot[1]-G[0])**2+(ot[2]-G[1])**2;Tt<K&&(K=Tt,V=ot[0])}M.push(V)}let m=M.map((P,G)=>{let J=0,V=0;for(let K=-3;K<=3;K++){let ot=G+K;ot>=0&&ot<M.length&&(J+=M[ot],V++)}return J/V});for(let P=1;P<m.length;P++)m[P]=Math.max(m[P],m[P-1]+.5);let p=P=>{let G=(P-c)/10,J=Math.max(0,Math.min(m.length-2,Math.floor(G))),V=G-J;return m[J]+(m[J+1]-m[J])*V},S={};function y(P){for(let G of Object.keys(S))delete S[G];for(let G of P?.runners||[])!G.diversions||!G.diversions.length||(S[G.id]=G.diversions.map(J=>{let V=J.path,K=[0];for(let ot=1;ot<V.length;ot++)K.push(K[ot-1]+Math.hypot(V[ot][0]-V[ot-1][0],V[ot][1]-V[ot-1][1]));return{...J,cum:K,len:K.at(-1)}}))}y(e);let _=(P,G)=>{let J=Math.max(0,Math.min(1,(G-P.fromM)/(P.toM-P.fromM)))*P.len,V=0;for(;V<P.cum.length-2&&P.cum[V+1]<J;)V++;let K=(J-P.cum[V])/Math.max(1e-6,P.cum[V+1]-P.cum[V]);return[P.path[V][0]+(P.path[V+1][0]-P.path[V][0])*K,P.path[V][1]+(P.path[V+1][1]-P.path[V][1])*K]};function N(P){if(P<c-60){let K=a(P);return[K[0],K[1]]}let G=a(P);if(P>=d+40)return[G[0],G[1]];let J=Qi(c-60,c+60,P)*(1-Qi(d-60,d,P));if(J<=0)return[G[0],G[1]];let V=o(Math.min(l,p(Math.max(c,Math.min(d,P)))));return[G[0]+(V[0]-G[0])*J,G[1]+(V[1]-G[1])*J]}function w(P,G){let J=N(P),V=G&&S[G];if(V){for(let K of V)if(P>K.fromM&&P<K.toM){let ot=Qi(K.fromM,K.fromM+30,P)*(1-Qi(K.toM-30,K.toM,P)),Tt=_(K,P);return J=[J[0]+(Tt[0]-J[0])*ot,J[1]+(Tt[1]-J[1])*ot],{x:J[0],z:J[1],div:ot,divInfo:K}}}return{x:J[0],z:J[1],div:0,divInfo:null}}let[R,A,v,x]=t.bounds,b={x0:R-60,z0:A-60,cell:5};b.nx=Math.ceil((v+60-b.x0)/b.cell)+1,b.nz=Math.ceil((x+60-b.z0)/b.cell)+1,b.h=new Float32Array(b.nx*b.nz);let C=[];for(let P=0;P<=s;P+=2)C.push(i[P]);let E=0;for(let P of C)E+=P[1];E/=C.length;let T=(P,G)=>Math.sin(P*.011+1.3)*Math.cos(G*.009-.4)*2.2+Math.sin(P*.027+G*.019)*.9;for(let P=0;P<b.nz;P++)for(let G=0;G<b.nx;G++){let J=b.x0+G*b.cell,V=b.z0+P*b.cell,K=0,ot=0,Tt=1e9;for(let pt of C){let H=(pt[0]-J)**2+(pt[2]-V)**2;H<Tt&&(Tt=H);let $t=1/(H+400),tt=$t*$t;K+=tt,ot+=tt*pt[1]}let Lt=Qi(30,160,Math.sqrt(Tt)),st=ot/K*(1-Lt*.4)+E*Lt*.4+T(J,V)*Lt;b.h[P*b.nx+G]=st*uv}let k=t.features.filter(P=>P.closed&&["water","track","tennis","pitch"].includes(P.kind)&&P.pts.length>3);for(let P of k){let G=jn(P.pts),J=[];for(let ot=Math.max(0,Math.floor((G[1]-12-b.z0)/b.cell));ot<=Math.min(b.nz-1,Math.ceil((G[3]+12-b.z0)/b.cell));ot++)for(let Tt=Math.max(0,Math.floor((G[0]-12-b.x0)/b.cell));Tt<=Math.min(b.nx-1,Math.ceil((G[2]+12-b.x0)/b.cell));Tt++){let Lt=b.x0+Tt*b.cell,st=b.z0+ot*b.cell,pt=no(P.pts,Lt,st);pt<12&&J.push([ot*b.nx+Tt,pt])}let V=0,K=0;for(let[ot,Tt]of J)Tt<0&&(V+=b.h[ot],K++);if(K){V/=K,P.kind==="water"&&(V=Math.min(...J.filter(ot=>ot[1]<0).map(ot=>b.h[ot[0]]))-.2),P._level=V;for(let[ot,Tt]of J){let Lt=1-Qi(0,12,Tt);b.h[ot]=b.h[ot]*(1-Lt)+V*Lt-(P.kind==="water"?1.6*(1-Qi(-6,0,Tt)):0)}}}{for(let st=0;st<3;st++){let pt=new Float32Array(b.h);for(let H=1;H<b.nz-1;H++)for(let $t=1;$t<b.nx-1;$t++){let tt=H*b.nx+$t;pt[tt]=(b.h[tt]*4+b.h[tt-1]+b.h[tt+1]+b.h[tt-b.nx]+b.h[tt+b.nx])/8}b.h.set(pt)}let P=new Float32Array(b.nx*b.nz).fill(1e9),G=new Float32Array(b.nx*b.nz),J=new Float32Array(b.nx*b.nz),V=(st,pt)=>b.h[pt*b.nx+st],K=(st,pt)=>{let H=Math.round((st-b.x0)/b.cell),$t=Math.round((pt-b.z0)/b.cell);return V(Math.max(0,Math.min(b.nx-1,H)),Math.max(0,Math.min(b.nz-1,$t)))},ot=[[0,h],[2540,2690],[d-80,n.lengthM+45]],Tt=[];for(let[st,pt]of ot)for(let H=st;H<=pt;H+=2){let $t=N(H);Tt.push([$t[0],$t[1],K($t[0],$t[1])])}for(let st=0;st<4;st++)for(let pt=1;pt<Tt.length-1;pt++)Tt[pt][2]=(Tt[pt-1][2]+Tt[pt][2]*2+Tt[pt+1][2])/4;let Lt=Ke/2+7;for(let[st,pt,H]of Tt){let $t=Math.floor((st-Lt-b.x0)/b.cell),tt=Math.ceil((st+Lt-b.x0)/b.cell),j=Math.floor((pt-Lt-b.z0)/b.cell),mt=Math.ceil((pt+Lt-b.z0)/b.cell);for(let Y=Math.max(0,j);Y<=Math.min(b.nz-1,mt);Y++)for(let kt=Math.max(0,$t);kt<=Math.min(b.nx-1,tt);kt++){let B=Math.hypot(b.x0+kt*b.cell-st,b.z0+Y*b.cell-pt);if(B>Lt)continue;let L=Y*b.nx+kt,ct=(1-B/Lt)**2;G[L]+=ct,J[L]+=ct*H,B<P[L]&&(P[L]=B)}}for(let st=0;st<P.length;st++)if(P[st]<Lt&&G[st]>0){let pt=1-Qi(Ke/2+.5,Lt,P[st]);b.h[st]=b.h[st]*(1-pt)+J[st]/G[st]*pt}b.pathSamples=Tt}let D=k.filter(P=>P.kind==="water").sort((P,G)=>G.pts.length-P.pts.length)[0];function O(P,G){let J=(P-b.x0)/b.cell,V=(G-b.z0)/b.cell,K=Math.max(0,Math.min(b.nx-2,Math.floor(J))),ot=Math.max(0,Math.min(b.nz-2,Math.floor(V))),Tt=Math.max(0,Math.min(1,J-K)),Lt=Math.max(0,Math.min(1,V-ot)),st=b.h[ot*b.nx+K],pt=b.h[ot*b.nx+K+1],H=b.h[(ot+1)*b.nx+K],$t=b.h[(ot+1)*b.nx+K+1];return Tt+Lt<=1?st+(pt-st)*Tt+(H-st)*Lt:$t+(H-$t)*(1-Tt)+(pt-$t)*(1-Lt)}let z=new $;function q(P,G,J={}){let V=w(P,G),K=Math.max(0,P-4),ot=K+8,Tt=w(K,G),Lt=w(ot,G),st=Lt.x-Tt.x,pt=Lt.z-Tt.z,H=Math.hypot(st,pt)||1;return st/=H,pt/=H,J.x=V.x,J.z=V.z,J.y=O(V.x,V.z)+Ha,J.tx=st,J.tz=pt,J.rx=-pt,J.rz=st,J.slope=(O(Lt.x,Lt.z)-O(Tt.x,Tt.z))/Math.max(1,H),J.div=V.div,J.divInfo=V.divInfo,J}function X(P,G=25){let J=Math.max(0,P-G),V=N(J),K=N(J+2*G),ot=Math.hypot(K[0]-V[0],K[1]-V[1])||1;return z.set((K[0]-V[0])/ot,0,(K[1]-V[1])/ot).clone()}let U=[{from:0,to:h,lift:0},{from:2540,to:2690,lift:.02},{from:d-80,to:n.lengthM+45,lift:.035}],gt=n.lengthM;return{P:i,raw:o,rawExt:a,baseXZ:N,LAP1_END_DRAW:h,xzAt:w,sample:q,heading:X,heightAt:O,terrain:b,ribbons:U,finishM:gt,lake:D,flat:k,geoOf:P=>P>=c&&P<=d?p(P):P,diversions:S,setPlan:y,LAP1_END:l,MAP_FROM:c,MAP_TO:d}}function jn(n){let t=[1e9,1e9,-1e9,-1e9];for(let e of n)t[0]=Math.min(t[0],e[0]),t[1]=Math.min(t[1],e[1]),t[2]=Math.max(t[2],e[0]),t[3]=Math.max(t[3],e[1]);return t}function ur(n,t,e){let i=!1;for(let s=0,r=n.length-1;s<n.length;r=s++){let[o,a]=n[s],[l,h]=n[r];a>e!=h>e&&t<(l-o)*(e-a)/(h-a)+o&&(i=!i)}return i}function no(n,t,e){let i=1e9;for(let s=0,r=n.length-1;s<n.length;r=s++){let[o,a]=n[r],[l,h]=n[s],u=l-o,g=h-a,f=u*u+g*g||1,c=Math.max(0,Math.min(1,((t-o)*u+(e-a)*g)/f));i=Math.min(i,Math.hypot(t-o-u*c,e-a-g*c))}return ur(n,t,e)?-i:i}function hn(n,t=!1){let e=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,l=new Xe,h=0;for(let u=0;u<n.length;++u){let g=n[u],f=0;if(e!==(g.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let c in g.attributes){if(!i.has(c))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+c+'" attribute exists among all geometries, or in none of them.'),null;r[c]===void 0&&(r[c]=[]),r[c].push(g.attributes[c]),f++}if(f!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==g.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let c in g.morphAttributes){if(!s.has(c))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[c]===void 0&&(o[c]=[]),o[c].push(g.morphAttributes[c])}if(t){let c;if(e)c=g.index.count;else if(g.attributes.position!==void 0)c=g.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(h,c,u),h+=c}}if(e){let u=0,g=[];for(let f=0;f<n.length;++f){let c=n[f].index;for(let d=0;d<c.count;++d)g.push(c.getX(d)+u);u+=n[f].attributes.position.count}l.setIndex(g)}for(let u in r){let g=Of(r[u]);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,g)}for(let u in o){let g=o[u][0].length;if(g===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let f=0;f<g;++f){let c=[];for(let M=0;M<o[u].length;++M)c.push(o[u][M][f]);let d=Of(c);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(d)}}return l}function Of(n){let t,e,i,s=-1,r=0;for(let h=0;h<n.length;++h){let u=n[h];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=u.normalized),i!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*e}let o=new t(r),a=new Je(o,e,i),l=0;for(let h=0;h<n.length;++h){let u=n[h];if(u.isInterleavedBufferAttribute){let g=l/e;for(let f=0,c=u.count;f<c;f++)for(let d=0;d<e;d++){let M=u.getComponent(f,d);a.setComponent(f+g,d,M)}}else o.set(u.array,l);l+=u.count*e}return s!==void 0&&(a.gpuType=s),a}var io=new $;function Jn(n,t,e,i,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;io.copy(t),io[i]=0,io.normalize();let h=.5*o/(o+a),u=1-io.angleTo(n)/l;return Math.sign(io[e])===1?u*h:a/(o+a)+h+h*(1-u)}var ke=class extends Be{constructor(t=1,e=1,i=1,s=2,r=.1){if(s=s*2+1,r=Math.min(t/2,e/2,i/2,r),super(1,1,1,s,s,s),s===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let a=new $,l=new $,h=new $(t,e,i).divideScalar(2).subScalar(r),u=this.attributes.position.array,g=this.attributes.normal.array,f=this.attributes.uv.array,c=u.length/6,d=new $,M=.5/s;for(let m=0,p=0;m<u.length;m+=3,p+=2)switch(a.fromArray(u,m),l.copy(a),l.x-=Math.sign(l.x)*M,l.y-=Math.sign(l.y)*M,l.z-=Math.sign(l.z)*M,l.normalize(),u[m+0]=h.x*Math.sign(a.x)+l.x*r,u[m+1]=h.y*Math.sign(a.y)+l.y*r,u[m+2]=h.z*Math.sign(a.z)+l.z*r,g[m+0]=l.x,g[m+1]=l.y,g[m+2]=l.z,Math.floor(m/c)){case 0:d.set(1,0,0),f[p+0]=Jn(d,l,"z","y",r,i),f[p+1]=1-Jn(d,l,"y","z",r,e);break;case 1:d.set(-1,0,0),f[p+0]=1-Jn(d,l,"z","y",r,i),f[p+1]=1-Jn(d,l,"y","z",r,e);break;case 2:d.set(0,1,0),f[p+0]=1-Jn(d,l,"x","z",r,t),f[p+1]=Jn(d,l,"z","x",r,i);break;case 3:d.set(0,-1,0),f[p+0]=1-Jn(d,l,"x","z",r,t),f[p+1]=1-Jn(d,l,"z","x",r,i);break;case 4:d.set(0,0,1),f[p+0]=1-Jn(d,l,"x","y",r,t),f[p+1]=1-Jn(d,l,"y","x",r,e);break;case 5:d.set(0,0,-1),f[p+0]=Jn(d,l,"x","y",r,t),f[p+1]=1-Jn(d,l,"y","x",r,e);break}}};var ts=null;function pv(){if(ts)return ts;let n=[118,172,228,255],t=new Uint8Array(n.length*4);return n.forEach((e,i)=>t.set([e,e,e,255],i*4)),ts=new Xr(t,n.length,1,Wn),ts.minFilter=ts.magFilter=Dn,ts.generateMipmaps=!1,ts.needsUpdate=!0,ts}var so=new Map;function yt(n,t={}){let e=!t.map&&(typeof n=="number"||typeof n=="string")?`${n}|${JSON.stringify(t)}`:null;if(e&&!t.map&&so.has(e))return so.get(e);let i=new ka({color:new de(n??16777215),gradientMap:pv(),...t});return e&&!t.map&&so.set(e,i),i}function Ff(){for(let n of so.values())n.dispose();so.clear(),ro.forEach(n=>n.dispose()),ro.clear()}var wh={uRes:{value:new zt(1920,1080)}},ro=new Map;function mv(n=3,t=1709088,e=14){let i=`${n}|${t}|${e}`;if(ro.has(i))return ro.get(i);let s=new Un({uniforms:{...vh.clone(jt.fog),uRes:wh.uRes,uWidth:{value:n},uRef:{value:e},uColor:{value:new de(t)}},vertexShader:`
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
      }`,side:En,fog:!0});return ro.set(i,s),s}function Eh(n){if(n.getAttribute("onormal"))return n;n.getAttribute("normal")||n.computeVertexNormals();let t=n.getAttribute("position"),e=n.getAttribute("normal"),i=new Map,s=a=>`${Math.round(t.getX(a)*1e3)},${Math.round(t.getY(a)*1e3)},${Math.round(t.getZ(a)*1e3)}`,r=[];for(let a=0;a<t.count;a++){let l=s(a),h=i.get(l);h||(h=[0,0,0],i.set(l,h)),h[0]+=e.getX(a),h[1]+=e.getY(a),h[2]+=e.getZ(a),r.push(h)}let o=new Float32Array(t.count*3);for(let a=0;a<t.count;a++){let l=r[a],h=Math.hypot(l[0],l[1],l[2])||1;o[a*3]=l[0]/h,o[a*3+1]=l[1]/h,o[a*3+2]=l[2]/h}return n.setAttribute("onormal",new Je(o,3)),n}function ai(n,t=3,e,i){Eh(n.geometry);let s=mv(t,e,i),r;return n.isInstancedMesh?(r=new fn(n.geometry,s,n.count),r.instanceMatrix=n.instanceMatrix,r.count=n.count,n.frustumCulled&&n.boundingSphere?(r.boundingSphere=n.boundingSphere,r.frustumCulled=!0):(r.frustumCulled=!1,n.frustumCulled=!1),n.userData.outline=r):(r=new Ve(n.geometry,s),r.frustumCulled=n.frustumCulled),r.castShadow=!1,r.receiveShadow=!1,r.userData.isOutline=!0,r.renderOrder=n.renderOrder,n.add(r),r}function Ie(n,t,{cast:e=!0,receive:i=!0,ol:s=0,olColor:r,olRef:o}={}){let a=new Ve(n,t);return a.castShadow=e,a.receiveShadow=i,s&&ai(a,s,r,o),a}function gn(n,t,e,{repeat:i=!1,srgb:s=!0,aniso:r=8}={}){let o=document.createElement("canvas");o.width=n,o.height=t;let a=o.getContext("2d");e(a,n,t);let l=new lr(o);return s&&(l.colorSpace=Sn),i&&(l.wrapS=l.wrapT=xs),l.anisotropy=r,l}var Th='"Lilita One", "Arial Black", "Arial Rounded MT Bold", Impact, sans-serif',ce=Bn(20240817);function Bn(n){return()=>{n|=0,n=n+1831565813|0;let t=Math.imul(n^n>>>15,1|n);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function li(n,t,e,i){let s=gn(n,t,e);return document.fonts&&document.fonts.load&&document.fonts.load('64px "Lilita One"').then(()=>{let r=s.image.getContext("2d");r.clearRect(0,0,n,t),e(r,n,t),s.needsUpdate=!0}).catch(()=>{}),i?.push(s),s}function yn(n,t,e,i,s,r="#fff",o="#1a1420",a=.16,l="center"){n.font=`${s}px ${Th}`,n.textAlign=l,n.textBaseline="middle",n.lineJoin="round",n.lineWidth=s*a,n.strokeStyle=o,n.strokeText(t,e,i),n.fillStyle=r,n.fillText(t,e,i)}function zf(n,t,e){let{course:i,park:s,hasFunfair:r}=e,o=[],a=new Me;n.add(a);let l=I=>(a.add(I),I),h=t.terrain,u=(h.nx-1)*h.cell,g=(h.nz-1)*h.cell,f=new Map,c=6,d=(I,it)=>`${Math.floor(I/c)},${Math.floor(it/c)}`,M=(I,it,nt)=>{let ht=d(I,it),_t=f.get(ht);_t||f.set(ht,_t=[]),_t.push([I,it,nt])},m=(I,it,nt)=>{let ht=Math.floor(I/c),_t=Math.floor(it/c),ut=Math.ceil((nt+30)/c);for(let Dt=-ut;Dt<=ut;Dt++)for(let Vt=-ut;Vt<=ut;Vt++){let Bt=f.get(`${ht+Dt},${_t+Vt}`);if(Bt){for(let[et,St,Et]of Bt)if((et-I)**2+(St-it)**2<(Et+nt)**2)return!1}}return!0},p=[];for(let I of t.ribbons)for(let it=I.from;it<=I.to;it+=3){let nt=t.baseXZ(it);p.push(nt),M(nt[0],nt[1],Ke/2+1.5)}for(let I in t.diversions)for(let it of t.diversions[I])for(let nt of it.path)M(nt[0],nt[1],4);let S=s.features.filter(I=>I.kind==="park").sort((I,it)=>it.pts.length-I.pts.length)[0].pts,y=(I,it)=>ur(S,I,it),N=s.features.filter(I=>I.closed&&["water","track","tennis","pitch","playground","building"].includes(I.kind)).map(I=>[jn(I.pts),I]),w=(I,it,nt=2)=>N.some(([ht,_t])=>I>ht[0]-nt&&I<ht[2]+nt&&it>ht[1]-nt&&it<ht[3]+nt&&no(_t.pts,I,it)<nt),R=1.7,A=[];function v(I,it,nt=!1){A.push({im:I,list:it,occluder:nt})}let x=new Set,b=new Oe;function C(I,it,nt=5){let ht=new Set,_t=I?I.x:0,ut=I?I.z:0,Dt=it?it.x:0,Vt=it?it.z:0,Bt=Dt-_t,et=Vt-ut,St=Bt*Bt+et*et||1;for(let Et of A)Et.occluder&&Et.list.forEach((Wt,he)=>{let ue=!1;if(I&&!Wt.cleared){let Ue=((Wt.x-_t)*Bt+(Wt.z-ut)*et)/St;if(Ue>.02&&Ue<1){let Ne=_t+Bt*Ue-Wt.x,je=ut+et*Ue-Wt.z;ue=!((1-Ue)*Math.sqrt(St)<6)&&Ne*Ne+je*je<(nt*(Wt.s||1))**2}}let _e=Et.im.id*1e5+he;ue&&!x.has(_e)?(x.add(_e),Et.im.setMatrixAt(he,E),ht.add(Et.im)):!ue&&x.has(_e)&&(x.delete(_e),Et.im.setMatrixAt(he,Wt._m||b.identity()),ht.add(Et.im))});for(let Et of ht)Et.instanceMatrix.needsUpdate=!0}let E=new Oe().makeScale(0,0,0);function T(I){for(let{im:it,list:nt}of A){let ht=!1;nt.forEach((_t,ut)=>{!_t.cleared&&I(_t.x,_t.z)&&(_t.cleared=!0,it.setMatrixAt(ut,E),ht=!0)}),ht&&(it.instanceMatrix.needsUpdate=!0)}}function k(){let I=D.image.getContext("2d");O(I,D.image.width,D.image.height),D.needsUpdate=!0}let D=gn(Math.round(u*R),Math.round(g*R),(I,it,nt)=>O(I,it,nt),{aniso:8});o.push(D);function O(I,it,nt){let ht=et=>(et-h.x0)*R,_t=et=>(et-h.z0)*R,ut=(et,St=!0)=>{I.beginPath(),et.forEach((Et,Wt)=>Wt?I.lineTo(ht(Et[0]),_t(Et[1])):I.moveTo(ht(Et[0]),_t(Et[1]))),St&&I.closePath()};I.fillStyle="#d8d2c2",I.fillRect(0,0,it,nt);for(let et=0;et<9e3;et++)I.fillStyle=ce()<.5?"#cfc8b6":"#e2dccd",I.fillRect(ce()*it,ce()*nt,3,3);ut(S),I.fillStyle="#66cf45",I.fill(),I.save(),ut(S),I.clip(),I.translate(it/2,nt/2),I.rotate(-.62);for(let et=-2e3;et<2e3;et+=2*14*R)I.fillStyle="rgba(255,255,140,0.10)",I.fillRect(et,-2500,14*R,5e3);I.setTransform(1,0,0,1,0,0);for(let et=0;et<26e3;et++){let St=ce()*it,Et=ce()*nt;I.fillStyle=ce()<.6?"rgba(40,140,40,0.35)":"rgba(190,255,120,0.35)",I.fillRect(St,Et,2+ce()*2,2+ce()*3)}I.restore();let Dt=(et,St,Et)=>{for(let Wt of s.features)Wt.kind===et&&Wt.closed&&(ut(Wt.pts),I.fillStyle=St,I.fill(),Et&&(I.strokeStyle=Et,I.lineWidth=2,I.stroke()))};Dt("grass","#72d64e"),Dt("garden","#86dc5c"),Dt("wood","#3f9e3a"),Dt("scrub","#5cb544");for(let et of s.features)if(et.kind==="pitch"&&et.closed){I.save(),ut(et.pts),I.clip(),I.fillStyle="#5ccc3f",I.fill();let St=jn(et.pts);for(let Et=St[0];Et<St[2];Et+=8)I.fillStyle="rgba(255,255,255,0.10)",I.fillRect(ht(Et),_t(St[1]),4*R,(St[3]-St[1])*R);I.restore(),ut(et.pts),I.strokeStyle="#ffffff",I.lineWidth=2.2,I.stroke()}for(let et of s.features)if(et.kind==="playground"&&et.closed){ut(et.pts),I.fillStyle="#7fcfb4",I.fill(),I.save(),ut(et.pts),I.clip();let St=jn(et.pts);for(let Et=0;Et<260;Et++)I.fillStyle=ce()<.5?"rgba(20,80,70,0.18)":"rgba(255,255,255,0.22)",I.fillRect(ht(St[0]+ce()*(St[2]-St[0])),_t(St[1]+ce()*(St[3]-St[1])),3,3);for(let Et=0;Et<(St[2]-St[0])*(St[3]-St[1])/400;Et++)I.beginPath(),I.arc(ht(St[0]+ce()*(St[2]-St[0])),_t(St[1]+ce()*(St[3]-St[1])),1.6*R,0,7),I.fillStyle=["#ffd93b","#57c7ff","#ff6f91"][Et%3],I.fill();I.restore(),ut(et.pts),I.strokeStyle="#ffffff",I.lineWidth=.8*R,I.stroke()}let Vt=et=>{let St=0;for(let Et=0,Wt=et.pts.length-1;Et<et.pts.length;Wt=Et++)St+=(et.pts[Wt][0]+et.pts[Et][0])*(et.pts[Wt][1]-et.pts[Et][1]);return Math.abs(St/2)};for(let et of s.features)if(et.kind==="track"&&et.closed&&Vt(et)>5e3){I.save(),ut(et.pts),I.clip(),I.fillStyle="#e2523a",I.fill();let St=9*R,Et=$a(et.pts),Wt=jn(et.pts),he=Wt[2]-Wt[0],ue=Wt[3]-Wt[1],_e=Ne=>et.pts.map(je=>[Et[0]+(je[0]-Et[0])*Ne,Et[1]+(je[1]-Et[1])*Ne]),Ue=1-2*9/Math.min(he,ue);for(let Ne=1;Ne<=5;Ne++)ut(_e(1-(1-Ue)*(Ne/6))),I.strokeStyle="rgba(255,255,255,0.9)",I.lineWidth=1.6,I.stroke();ut(_e(Ue)),I.fillStyle="#5ccc3f",I.fill(),I.strokeStyle="#ffffff",I.lineWidth=3,I.stroke(),I.restore(),ut(et.pts),I.strokeStyle="#ffffff",I.lineWidth=3,I.stroke()}for(let et of s.features)if(et.kind==="track"&&et.closed&&Vt(et)<=5e3){let St=et.tags?.surface==="sand";if(!et.tags?.surface)continue;ut(et.pts),I.fillStyle=St?"#f2d58f":"#e2523a",I.fill(),I.strokeStyle="#ffffff",I.lineWidth=1.5,I.stroke()}for(let et of s.features)if(et.kind==="tennis"&&et.closed){ut(et.pts),I.fillStyle="#3f9fd1",I.fill(),I.strokeStyle="#ffffff",I.lineWidth=2.5,I.stroke();let St=$a(et.pts),Et=jn(et.pts);I.save(),ut(et.pts),I.clip(),I.strokeStyle="rgba(255,255,255,0.9)",I.lineWidth=1.5,I.beginPath(),I.moveTo(ht(St[0]),_t(Et[1])),I.lineTo(ht(St[0]),_t(Et[3])),I.stroke(),I.restore()}for(let et of s.features)et.kind==="water"&&et.closed&&(ut(et.pts),I.strokeStyle="#f4efe0",I.lineWidth=3.4*R,I.lineJoin="round",I.stroke(),I.fillStyle="#2f8fe0",I.fill());for(let et of s.features)et.kind==="path"&&(ut(et.pts,!1),I.lineCap="round",I.lineJoin="round",I.strokeStyle="#c9ad78",I.lineWidth=3.6*R,I.stroke());for(let et of s.features)et.kind==="path"&&(ut(et.pts,!1),I.strokeStyle="#ecd8a6",I.lineWidth=2.6*R,I.stroke());let Bt=et=>({primary:15,secondary:12,tertiary:11,residential:8,unclassified:8,service:5,trunk:16})[et.tags?.highway]||7;for(let et of s.features)et.kind==="road"&&(ut(et.pts,et.closed),I.lineCap="round",I.lineJoin="round",I.strokeStyle="#ece6d6",I.lineWidth=(Bt(et)+4)*R,I.stroke());for(let et of s.features)et.kind==="road"&&(ut(et.pts,et.closed),I.strokeStyle="#7f8597",I.lineWidth=Bt(et)*R,I.stroke());for(let et of s.features)et.kind==="road"&&Bt(et)>=11&&(ut(et.pts,!1),I.setLineDash([5*R,5*R]),I.strokeStyle="#f4f1e6",I.lineWidth=.5*R,I.stroke(),I.setLineDash([]));for(let et of s.features)et.kind==="rail"&&(ut(et.pts,!1),I.strokeStyle="#9b8f84",I.lineWidth=5*R,I.stroke());for(let et of s.features)et.kind==="rail"&&(ut(et.pts,!1),I.setLineDash([1,2]),I.strokeStyle="#5b4f46",I.lineWidth=3*R,I.stroke(),I.setLineDash([]),ut(et.pts,!1),I.strokeStyle="#c9ccd6",I.lineWidth=.8,I.stroke());for(let et of s.features)et.kind==="building"&&et.closed&&(ut(et.pts),I.fillStyle="#9c968a",I.fill());for(let et in t.diversions)for(let St of t.diversions[et])I.beginPath(),St.path.forEach((Et,Wt)=>Wt?I.lineTo(ht(Et[0]),_t(Et[1])):I.moveTo(ht(Et[0]),_t(Et[1]))),I.lineCap="round",I.lineJoin="round",I.strokeStyle="rgba(196,160,96,0.85)",I.lineWidth=4*R,I.stroke(),I.setLineDash([2*R,3*R]),I.strokeStyle="rgba(255,240,200,0.8)",I.lineWidth=.6*R,I.stroke(),I.setLineDash([])}{let I=h.nx*h.nz,it=new Float32Array(I*3),nt=new Float32Array(I*2);for(let Et=0;Et<h.nz;Et++)for(let Wt=0;Wt<h.nx;Wt++){let he=Et*h.nx+Wt;it[he*3]=h.x0+Wt*h.cell,it[he*3+1]=h.h[he],it[he*3+2]=h.z0+Et*h.cell,nt[he*2]=Wt/(h.nx-1),nt[he*2+1]=1-Et/(h.nz-1)}let ht=new Uint32Array((h.nx-1)*(h.nz-1)*6),_t=0;for(let Et=0;Et<h.nz-1;Et++)for(let Wt=0;Wt<h.nx-1;Wt++){let he=Et*h.nx+Wt,ue=he+1,_e=he+h.nx,Ue=_e+1;ht[_t++]=he,ht[_t++]=_e,ht[_t++]=ue,ht[_t++]=ue,ht[_t++]=_e,ht[_t++]=Ue}let ut=new Xe;ut.setAttribute("position",new Je(it,3)),ut.setAttribute("uv",new Je(nt,2)),ut.setIndex(new Je(ht,1)),ut.computeVertexNormals();let Dt=yt(16777215,{map:D}),Vt=gn(256,256,(Et,Wt,he)=>{Et.fillStyle="#808080",Et.fillRect(0,0,Wt,he);for(let ue=0;ue<1800;ue++){let _e=100+Math.floor(ce()*70);Et.fillStyle=`rgb(${_e},${_e},${_e})`;let Ue=ce()*Wt,Ne=ce()*he;Et.fillRect(Ue,Ne,2,3+ce()*5)}for(let ue=0;ue<500;ue++)Et.fillStyle="rgba(255,255,255,0.18)",Et.fillRect(ce()*Wt,ce()*he,2,2)},{repeat:!0,srgb:!1});o.push(Vt),Dt.onBeforeCompile=Et=>{Et.uniforms.uDetail={value:Vt},Et.vertexShader=Et.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWPos;`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
vWPos = (modelMatrix * vec4(transformed, 1.0)).xyz;`),Et.fragmentShader=Et.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vWPos; uniform sampler2D uDetail;`).replace("#include <map_fragment>",`#include <map_fragment>
          float dd = length(vWPos - cameraPosition);
          float d1 = texture2D(uDetail, vWPos.xz / 3.0).r, d2 = texture2D(uDetail, vWPos.xz / 11.0).r;
          float fade = 1.0 - smoothstep(25.0, 140.0, dd);
          diffuseColor.rgb *= mix(1.0, 0.8 + 0.4 * mix(d2, d1, fade), 0.55);`)},Dt.customProgramCacheKey=()=>"terrain-detail";let Bt=Ie(ut,Dt,{cast:!1});Bt.name="terrain",l(Bt);let et=new Ve(new cr(700,5200,48,1),yt(13227680));et.rotation.x=-Math.PI/2,et.position.set(h.x0+u/2,-2,h.z0+g/2),et.receiveShadow=!1,l(et);let St=new Ve(new Tn(u+1800,g+1800),yt(13686197));St.rotation.x=-Math.PI/2,St.position.set(h.x0+u/2,-3,h.z0+g/2),l(St)}let z=gn(256,256,(I,it,nt)=>{I.fillStyle="#7f8fb0",I.fillRect(0,0,it,nt);for(let ht=0;ht<1600;ht++)I.fillStyle=ce()<.5?"rgba(255,255,255,0.07)":"rgba(30,40,70,0.08)",I.fillRect(ce()*it,ce()*nt,2,2);I.fillStyle="#6b7a9b",I.fillRect(0,0,it*.035,nt),I.fillRect(it*.965,0,it*.035,nt),I.fillStyle="#ffffff",I.fillRect(it*.06,0,it*.045,nt),I.fillRect(it*.895,0,it*.045,nt),I.fillStyle="rgba(255,255,255,0.35)",I.fillRect(it*.49,0,it*.02,nt*.5)},{repeat:!0});o.push(z);{let I=[];for(let ut of t.ribbons)I.push(q(ut));let it=hn(I),nt=Ie(it,yt(16777215,{map:z}),{cast:!1});nt.name="path",l(nt);let ht=hn(t.ribbons.map(ut=>q(ut,!0))),_t=Ie(ht,yt(5924226),{cast:!1});l(_t)}function q(I,it=!1){let nt=[];for(let et=I.from;et<=I.to+.01;et+=2)nt.push(t.baseXZ(et));let ht=[],_t=[],ut=[],Dt=0;for(let et=0;et<nt.length;et++){let St=nt[Math.max(0,et-1)],Et=nt[Math.min(nt.length-1,et+1)],Wt=Et[0]-St[0],he=Et[1]-St[1],ue=Math.hypot(Wt,he)||1;Wt/=ue,he/=ue;let _e=-he,Ue=Wt,Ne=Ke/2,je=[nt[et][0]-_e*Ne,nt[et][1]-Ue*Ne],F=[nt[et][0]+_e*Ne,nt[et][1]+Ue*Ne],ft=t.heightAt(nt[et][0],nt[et][1]),vt=Math.max(t.heightAt(je[0],je[1]),ft-.05)+Ha+I.lift,Mt=Math.max(t.heightAt(F[0],F[1]),ft-.05)+Ha+I.lift;it?(ht.push(je[0]-_e*.15,vt-.45,je[1]-Ue*.15,je[0],vt,je[1],F[0],Mt,F[1],F[0]+_e*.15,Mt-.45,F[1]+Ue*.15),_t.push(0,0,0,1,0,1,0,0)):(ht.push(je[0],vt,je[1],F[0],Mt,F[1]),_t.push(0,Dt/8,1,Dt/8)),et&&(Dt+=2)}let Vt=it?4:2;for(let et=0;et<nt.length-1;et++){let St=et*Vt,Et=(et+1)*Vt;it?(ut.push(St,Et,St+1,St+1,Et,Et+1),ut.push(St+2,Et+2,St+3,St+3,Et+2,Et+3)):ut.push(St,Et,St+1,St+1,Et,Et+1)}let Bt=new Xe;if(Bt.setAttribute("position",new Ae(ht,3)),Bt.setAttribute("uv",new Ae(_t,2)),Bt.setIndex(ut),Bt.computeVertexNormals(),Bt.getAttribute("normal").getY(0)<0&&!it){let et=Bt.index.array;for(let St=0;St<et.length;St+=3){let Et=et[St+1];et[St+1]=et[St+2],et[St+2]=Et}Bt.computeVertexNormals()}return Bt}let X={uTime:{value:0}},U=s.features.filter(I=>I.kind==="water"&&I.closed);for(let I of U){let it=(I._level??Math.min(...I.pts.map(Dt=>t.heightAt(Dt[0],Dt[1]))))+.05,nt=new Ms(I.pts.map(Dt=>new zt(Dt[0],-Dt[1]))),ht=new Ia(nt,4);ht.rotateX(-Math.PI/2),ht.translate(0,it,0);let _t=new Un({uniforms:{...X,...jt.fog},vertexShader:`varying vec3 vW;
${Re.fog_pars_vertex}
        void main(){ vec4 w = modelMatrix*vec4(position,1.); vW=w.xyz; vec4 mvPosition = viewMatrix*w; gl_Position=projectionMatrix*mvPosition;
${Re.fog_vertex}
}`,fragmentShader:`uniform float uTime; varying vec3 vW;
${Re.fog_pars_fragment}
        void main(){
          vec2 p = vW.xz*0.09;
          float w1 = sin(p.x*3.1 + uTime*1.3 + sin(p.y*2.3+uTime*0.7)*1.7);
          float w2 = sin(p.y*2.7 - uTime*1.1 + sin(p.x*1.9-uTime*0.5)*1.9);
          float r = smoothstep(0.86,0.9, w1*w2);
          vec3 c = mix(vec3(0.16,0.55,0.93), vec3(0.24,0.70,1.0), smoothstep(-0.6,0.8,w1*0.5+w2*0.5));
          c = mix(c, vec3(0.92,0.98,1.0), r);
          gl_FragColor = vec4(c,1.);
          #include <colorspace_fragment>

${Re.fog_fragment}
        }`,fog:!0}),ut=new Ve(ht,_t);ut.name="water",l(ut),o.push(_t),I._waterLevel=it}let gt=[];if(t.lake){let I=t.lake,it=jn(I.pts),nt=[16767291,16735581,5752831,16777215,16748497,8257418],ht=new ke(2,.7,3.6,2,.32),_t=new ke(1.2,.5,.8,2,.2);for(let ut=0,Dt=0;ut<9&&Dt<300;Dt++){let Vt=it[0]+ce()*(it[2]-it[0]),Bt=it[1]+ce()*(it[3]-it[1]);if(no(I.pts,Vt,Bt)>-7)continue;let et=new Me,St=Ie(ht,yt(nt[ut%nt.length]),{ol:2.5});et.add(St);let Et=Ie(_t,yt(16777215),{ol:2});Et.position.y=.45,et.add(Et);let Wt=Ie(new Ce(.42,12,8),yt(nt[(ut+2)%nt.length]),{ol:2});Wt.position.set(0,.9,.7),et.add(Wt),et.position.set(Vt,(I._waterLevel??0)+.1,Bt),et.rotation.y=ce()*6.28,l(et),gt.push({g:et,ph:ce()*6.28,x:Vt,z:Bt,a:et.rotation.y}),ut++}}{let I=gn(128,128,(ut,Dt,Vt)=>{ut.fillStyle="#ffffff",ut.fillRect(0,0,Dt,Vt),ut.fillStyle="#ffffff",ut.fillRect(0,0,14,14),ut.fillStyle="#3b4a6b",ut.fillRect(34,30,60,58),ut.fillStyle="#9ec9ff",ut.fillRect(38,34,52,50),ut.fillStyle="#ffffff",ut.fillRect(62,34,4,50),ut.fillRect(38,56,52,4),ut.fillStyle="rgba(0,0,0,0.08)",ut.fillRect(0,118,Dt,10)},{repeat:!0});o.push(I);let it={generateTopUV:(ut,Dt,Vt,Bt,et)=>[new zt(.02,.98),new zt(.02,.98),new zt(.02,.98)],generateSideWallUV:(ut,Dt,Vt,Bt,et,St)=>{let Et=Dt[Vt*3],Wt=Dt[Vt*3+1],he=Dt[Vt*3+2],ue=Dt[Bt*3],_e=Dt[Bt*3+1],Ue=Dt[Bt*3+2],Ne=Dt[et*3+2],je=Dt[St*3+2],F=(Math.abs(Wt-_e)<Math.abs(Et-ue)?Et:Wt)/4.2,ft=(Math.abs(Wt-_e)<Math.abs(Et-ue)?ue:_e)/4.2;return[new zt(F,he/3.2),new zt(ft,Ue/3.2),new zt(ft,Ne/3.2),new zt(F,je/3.2)]}},nt=["#e98a64","#f3d9a6","#d86f5a","#f6efe0","#a8c8e6","#f2b5a0","#c9b6e4","#f4c46a"],ht=["#5d6488","#7a5d6c","#4f6b78"],_t=[];for(let ut of s.features){if(ut.kind!=="building"||!ut.closed||ut.pts.length<4)continue;let Dt=$a(ut.pts);if(y(Dt[0],Dt[1]))continue;let Vt=parseFloat(ut.tags?.["building:levels"])||(ce()<.7?3:4),Bt=Math.min(30,Vt*3.1),et=new Ms(ut.pts.map(Ne=>new zt(Ne[0],-Ne[1]))),St;try{St=new Ca(et,{depth:Bt,bevelEnabled:!1,UVGenerator:it})}catch{continue}St.rotateX(-Math.PI/2);let Et=Math.min(...ut.pts.map(Ne=>t.heightAt(Ne[0],Ne[1])))-1.5;St.translate(0,Et,0);let Wt=St.getAttribute("normal"),he=Wt.count,ue=new Float32Array(he*3),_e=new de(nt[Math.floor(ce()*nt.length)]).convertSRGBToLinear(),Ue=new de(ht[Math.floor(ce()*ht.length)]).convertSRGBToLinear();for(let Ne=0;Ne<he;Ne++){let je=Wt.getY(Ne)>.5?Ue:_e;ue[Ne*3]=je.r,ue[Ne*3+1]=je.g,ue[Ne*3+2]=je.b}St.setAttribute("color",new Je(ue,3)),_t.push(St.index?St.toNonIndexed():St)}if(_t.length){let ut=hn(_t),Dt=Ie(ut,yt(16777215,{map:I,vertexColors:!0}),{cast:!0,ol:1.6,olRef:60});Dt.name="buildings",l(Dt)}}let At=t.sample(t.finishM),P=t.sample(0),G={start:P,finish:At},J=new Me;l(J);function V(I,it,nt,ht){let _t=new Me,ut=Ke/2+1.4,Dt=.85,Vt=gn(256,32,(he,ue,_e)=>{for(let Ue=0;Ue<16;Ue++)he.fillStyle=Ue%2?nt:ht,he.fillRect(Ue*ue/16,0,ue/16+1,_e)},{repeat:!1});o.push(Vt);let Bt=new on(ut,Dt,14,40,Math.PI);Bt.scale(1,1.25,1);let et=Ie(Bt,yt(16777215,{map:Vt}),{ol:3.5});_t.add(et);let St=new ve(Dt*1.4,Dt*1.6,.8,16);for(let he of[-1,1]){let ue=Ie(St,yt(ht),{ol:3});ue.position.set(he*ut,.3,0),_t.add(ue)}let Et=li(1024,256,(he,ue,_e)=>{he.fillStyle="#1b1b3a",sn(he,0,0,ue,_e,60),he.fill(),he.fillStyle=nt,sn(he,12,12,ue-24,_e-24,50),he.fill(),yn(he,"MARKRUN",ue/2,_e*.42,150,"#ffffff","#1b1b3a",.18),yn(he,it,ue/2,_e*.83,56,"#ffe14d","#1b1b3a",.2)},o),Wt=Ie(new ke(ut*1.55,ut*.4,.7,3,.25),[yt(ht),yt(ht),yt(ht),yt(ht),yt(16777215,{map:Et}),yt(16777215,{map:Et})],{ol:3.5});return Wt.position.y=ut*1.25+Dt*1.25+ut*.2-.15,_t.add(Wt),_t.position.set(I.x,I.y-.1,I.z),_t.rotation.y=Math.atan2(-I.rz,I.rx),J.add(_t),_t}G.finishArch=V(At,"FINISH","#ff3d8b","#ffd23f"),V(P,"START","#2e9bff","#ffd23f");let K=gn(256,64,(I,it,nt)=>{let _t=it/16;for(let ut=0;ut<16;ut++)for(let Dt=0;Dt<4;Dt++)I.fillStyle=(ut+Dt)%2?"#111":"#fff",I.fillRect(ut*_t,Dt*_t,_t,_t)});o.push(K);function ot(I,it,nt,ht=.03){let _t=new Tn(Ke,nt);_t.rotateX(-Math.PI/2);let ut=new Ve(_t,yt(16777215,{map:it,transparent:!0,alphaTest:.3,polygonOffset:!0,polygonOffsetFactor:-2}));return ut.position.set(I.x,I.y+ht,I.z),ut.rotation.y=Math.atan2(-I.rz,I.rx),ut.receiveShadow=!0,l(ut),ut}ot(At,K,2.2,.05);let Tt=li(512,128,(I,it,nt)=>{I.fillStyle="#ffffff",I.fillRect(0,0,it,22),yn(I,"START",it/2,80,72,"#ffffff","rgba(0,0,0,0)",0)},o);{let I=t.sample(2.5);ot(I,Tt,3,.05).rotation.y+=Math.PI}let Lt=new We;function st(I,it,nt,{ol:ht=0,olRef:_t,cast:ut=!0,colors:Dt,chunk:Vt=0,occluder:Bt=!1}={}){if(!nt.length)return null;if(Vt){let St=new Map;nt.forEach((Wt,he)=>{let ue=`${Math.floor(Wt.x/Vt)},${Math.floor(Wt.z/Vt)}`,_e=St.get(ue);_e||St.set(ue,_e={l:[],c:[]}),_e.l.push(Wt),Dt&&_e.c.push(Dt[he])});let Et=null;for(let{l:Wt,c:he}of St.values()){let ue=st(I,it,Wt,{ol:ht,olRef:_t,cast:ut,colors:Dt?he:null,occluder:Bt});Et=Et||ue}return Et}let et=new fn(I,it,nt.length);return nt.forEach((St,Et)=>{Lt.position.set(St.x,St.y,St.z),Lt.rotation.set(St.rx||0,St.ry||0,St.rz||0),Lt.scale.set(St.sx??St.s??1,St.sy??St.s??1,St.sz??St.s??1),Lt.updateMatrix(),et.setMatrixAt(Et,Lt.matrix),Bt&&(St._m=Lt.matrix.clone()),Dt&&et.setColorAt(Et,new de(Dt[Et]))}),et.castShadow=ut,et.receiveShadow=!0,et.computeBoundingSphere(),ht&&ai(et,ht,void 0,_t),v(et,nt,Bt),l(et),et}let pt=[];{let I=nt=>{let ht=t.rawExt(nt-12),_t=t.rawExt(nt),ut=t.rawExt(nt+12),Dt=Math.atan2(_t[1]-ht[1],_t[0]-ht[0]),Bt=Math.atan2(ut[1]-_t[1],ut[0]-_t[0])-Dt;for(;Bt>Math.PI;)Bt-=2*Math.PI;for(;Bt<-Math.PI;)Bt+=2*Math.PI;return Bt},it=[[20,t.LAP1_END_DRAW-20],[t.MAP_TO-40,t.finishM-10]];for(let[nt,ht]of it){let _t=null;for(let ut=nt;ut<ht;ut+=4){let Dt=I(ut);Math.abs(Dt)>.45?(!_t||Math.abs(Dt)>Math.abs(_t.d))&&(_t={m:ut,d:Dt}):_t&&(pt.some(Vt=>Math.abs(Vt.m-_t.m)<50)||pt.push(_t),_t=null)}}}let H=[],$t=[],tt=[],j=[];for(let I of pt){let it=I.d>0;for(let nt=-2;nt<=2;nt++){let ht=t.sample(I.m+nt*5),_t=it?-1:1,ut=Ke/2+1.6,Dt=ht.x+ht.rx*ut*_t,Vt=ht.z+ht.rz*ut*_t;m(Dt,Vt,.3),(it?$t:H).push({x:Dt,y:t.heightAt(Dt,Vt),z:Vt,ry:Math.atan2(-ht.tz,ht.tx)+(_t>0?Math.PI:0)})}for(let nt=-3;nt<=3;nt++){let ht=t.sample(I.m+nt*3.5),_t=it?1:-1,ut=Ke/2+.7;tt.push({x:ht.x+ht.rx*ut*_t,y:t.heightAt(ht.x+ht.rx*ut*_t,ht.z+ht.rz*ut*_t),z:ht.z+ht.rz*ut*_t,ry:ce()*6});for(let Dt=0;Dt<2;Dt++){let Vt=t.sample(I.m+nt*3.5+Dt*1.75),Bt=Ke/2+.1;j.push({x:Vt.x+Vt.rx*Bt*_t,y:Vt.y-.05,z:Vt.z+Vt.rz*Bt*_t,ry:Math.atan2(Vt.tx,Vt.tz),red:(nt*2+Dt)%2===0})}}}G.corners=pt;{let I=gn(256,96,(Bt,et,St)=>{Bt.fillStyle="#2f6fe0",Bt.fillRect(0,0,et,St),Bt.fillStyle="#ffffff";for(let Et=0;Et<4;Et++){let Wt=18+Et*60;Bt.beginPath(),Bt.moveTo(Wt,12),Bt.lineTo(Wt+26,12),Bt.lineTo(Wt+54,St/2),Bt.lineTo(Wt+26,St-12),Bt.lineTo(Wt,St-12),Bt.lineTo(Wt+28,St/2),Bt.closePath(),Bt.fill()}Bt.strokeStyle="#1b3f8f",Bt.lineWidth=8,Bt.strokeRect(0,0,et,St)}),it=I.clone();it.repeat.x=-1,it.offset.x=1,it.wrapS=xs,it.needsUpdate=!0,o.push(I,it);let ht=(Bt=>{let et=new Be(3.2,1.2,.12);et.rotateX(-.32),et.translate(0,.62,.22);let St=new Be(3.2,1.2,.12);return St.rotateX(.32),St.translate(0,.62,-.22),St.rotateY(Math.PI),hn([et,St])})();Eh(ht),st(ht,yt(16777215,{map:I}),$t,{ol:2.5}),st(ht,yt(16777215,{map:it}),H,{ol:2.5});let _t=gn(16,64,(Bt,et,St)=>{for(let Et=0;Et<4;Et++)Bt.fillStyle=Et%2?"#ffffff":"#ff6a2b",Bt.fillRect(0,Et*St/4,et,St/4)});o.push(_t);let ut=new ve(.06,.32,.9,12,1);ut.translate(0,.5,0);let Dt=new Be(.8,.08,.8);Dt.translate(0,.04,0),st(ut,yt(16777215,{map:_t}),tt,{ol:2}),st(Dt,yt(16738859),tt,{ol:1.5});let Vt=new Be(.5,.22,1.75);Vt.translate(0,.11,0),st(Vt,yt(16777215),j.map(Bt=>Bt),{ol:1.5,colors:j.map(Bt=>Bt.red?15216959:16777215)})}let mt=new Me;l(mt);function Y(I,it,nt,ht,_t,{postH:ut=1.6,face:Dt=0,scale:Vt=1}={}){let Bt=li(512,Math.round(512*ht/nt),_t,o),et=new Me,St=Ie(new ke(nt,ht,.25,2,.08),[yt(5978660),yt(5978660),yt(5978660),yt(5978660),yt(16777215,{map:Bt}),yt(16777215,{map:Bt})],{ol:3});St.position.y=ut+ht/2,et.add(St);let Et=new Be(.25,ut+ht*.5,.25);for(let _e of[-1,1]){let Ue=Ie(Et,yt(9067062),{ol:2});Ue.position.set(_e*nt*.35,(ut+ht*.5)/2,-.1),et.add(Ue)}let Wt=Ke/2+2.2+nt*.15,he=I.x+I.rx*Wt*it,ue=I.z+I.rz*Wt*it;return et.position.set(he,t.heightAt(he,ue)-.1,ue),et.rotation.y=Math.atan2(-I.tx,-I.tz)+it*.5+Dt,et.scale.setScalar(Vt),mt.add(et),et}let kt=1720,B=t.sample(kt-10);G.hillSign=Y(B,1,6,3.2,(I,it,nt)=>{I.fillStyle="#ffd23f",sn(I,0,0,it,nt,40),I.fill(),I.lineWidth=16,I.strokeStyle="#1b1b3a",sn(I,8,8,it-16,nt-16,34),I.stroke(),I.fillStyle="#3aa845",I.beginPath(),I.moveTo(40,nt-40),I.lineTo(150,70),I.lineTo(260,nt-40),I.closePath(),I.fill(),I.strokeStyle="#1b1b3a",I.lineWidth=8,I.stroke(),I.fillStyle="#fff",I.beginPath(),I.moveTo(118,118),I.lineTo(150,70),I.lineTo(182,118),I.closePath(),I.fill(),yn(I,"THE",380,nt*.3,72,"#ffffff","#1b1b3a",.2),yn(I,"HILL",370,nt*.66,120,"#ff3d8b","#1b1b3a",.16)},{postH:1.4}),G.hillM=kt;for(let I of[1,2,3,4]){let it=I*1e3,nt=t.sample(t.geoOf(it));Y(nt,-1,1.6,1.3,(ht,_t,ut)=>{ht.fillStyle="#ffffff",sn(ht,0,0,_t,ut,50),ht.fill(),ht.fillStyle="#ff3d8b",sn(ht,20,20,_t-40,ut-40,36),ht.fill(),yn(ht,`${I}K`,_t/2,ut/2+8,230,"#ffffff","#1b1b3a",.14)},{postH:.7})}let L=t.sample(2475);G.lapBoard=Y(L,1,4.4,2.6,(I,it,nt)=>{I.fillStyle="#1b1b3a",sn(I,0,0,it,nt,40),I.fill(),I.fillStyle="#2e9bff",sn(I,14,14,it-28,nt-28,30),I.fill(),yn(I,"LAP",it/2,nt*.28,90,"#ffffff","#1b1b3a",.18),yn(I,"2 OF 2",it/2,nt*.66,150,"#ffe14d","#1b1b3a",.14)},{postH:1.2}),G.lapM=2500;let ct=[],bt=[],Pt=[],Q=[];function at(I,it,nt,ht=3.2,_t=12){let ut=null;for(let Dt=I;Dt<=it;Dt+=_t){let Vt=t.sample(Dt),Bt=Ke/2+1,et=Vt.x+Vt.rx*Bt*nt,St=Vt.z+Vt.rz*Bt*nt,Et=t.heightAt(et,St);bt.push({x:et,y:Et,z:St});let Wt=new $(et,Et+ht,St);if(ut){let he=[];for(let ue=0;ue<=12;ue++){let _e=ue/12,Ue=ut.clone().lerp(Wt,_e);Ue.y-=Math.sin(_e*Math.PI)*.6,he.push(Ue)}Pt.push(he);for(let ue=1;ue<12;ue++){let _e=he[ue],Ue=he[ue+1].clone().sub(he[ue-1]);ct.push({x:_e.x,y:_e.y,z:_e.z,ry:Math.atan2(-Ue.z,Ue.x)})}}ut=Wt}}function lt(I,it,nt,ht=Ke/2+2.2){for(let _t=I;_t<=it;_t+=2.4){let ut=t.sample(_t),Dt=ut.x+ut.rx*ht*nt,Vt=ut.z+ut.rz*ht*nt;Q.push({x:Dt,y:t.heightAt(Dt,Vt),z:Vt,ry:Math.atan2(ut.tx,ut.tz)})}}let xt=t.finishM;at(xt-70,xt+10,1),at(xt-70,xt+10,-1),at(-6,50,1),at(-6,50,-1),lt(xt-60,xt+14,1),lt(xt-60,xt+14,-1),lt(-4,40,1),lt(-4,40,-1);{let I=new Xe;I.setAttribute("position",new Ae([-.3,0,0,.3,0,0,0,-.62,0],3)),I.setAttribute("normal",new Ae([0,0,1,0,0,1,0,0,1],3));let it=ct.map((et,St)=>[16727435,16765503,3054591,4054148,16747069,16777215][St%6]);st(I,yt(16777215,{side:cn}),ct,{colors:it,cast:!1});let nt=new ve(.07,.09,3.3,6);nt.translate(0,1.65,0),st(nt,yt(16777215),bt,{ol:1.5});let ht=new Xe().setFromPoints(Pt.flatMap(et=>et.slice(0,-1).flatMap((St,Et)=>[St,et[Et+1]]))),_t=new ar(ht,new _s({color:3355443}));l(_t),o.push(ht);let ut=[];for(let et=0;et<4;et++){let St=new Be(.16,1,.06);St.translate(-.9+et*.6,.5,0),ut.push(St)}let Dt=new Be(2.4,.12,.05);Dt.translate(0,.65,.05),ut.push(Dt);let Vt=Dt.clone();Vt.translate(0,-.35,0),ut.push(Vt);let Bt=hn(ut);Bt.rotateY(Math.PI/2),st(Bt,yt(16777215),Q,{ol:1.8})}let Rt=[],wt=(I,it,nt,ht,_t,ut=1.35)=>Rt.push({m0:I,m1:it,side:nt,off:Ke/2+3,depth:ht,density:_t,spacing:ut});wt(xt-58,xt+12,1,6,1),wt(xt-58,xt+12,-1,6,1),wt(-2,38,1,5,.9),wt(-2,38,-1,5,.9),wt(1940,2010,1,4,.7),wt(1960,2010,-1,3,.6),wt(kt-10,kt+40,-1,3,.55),wt(2440,2490,-1,3,.7),wt(kt-70,kt+10,1,3,.5),wt(kt-70,kt-20,-1,3,.45),wt(2080,2160,1,4,.75),wt(2080,2160,-1,4,.75),wt(800,860,1,3,.6),wt(1250,1310,-1,3,.6),G.crowdZones=Rt;{let I=s.pois.filter(ht=>ht.kind==="bench"&&y(ht.pos[0],ht.pos[1])&&m(ht.pos[0],ht.pos[1],1)).map(ht=>({x:ht.pos[0],y:t.heightAt(ht.pos[0],ht.pos[1]),z:ht.pos[1],ry:ce()*6})),it=hn([new Be(1.8,.12,.5).translate(0,.5,0),new Be(1.8,.4,.1).translate(0,.8,-.22),new Be(.1,.5,.45).translate(-.8,.25,0),new Be(.1,.5,.45).translate(.8,.25,0)]);st(it,yt(11892031),I,{ol:1.5});let nt=s.pois.filter(ht=>ht.kind==="cafe"&&y(ht.pos[0],ht.pos[1])&&m(ht.pos[0],ht.pos[1],4));for(let ht of nt){let _t=new Me;_t.add(Ie(new ke(5,3,4,2,.2),yt(16774108),{ol:2.5})).position.y=1.5;let ut=gn(128,16,(Bt,et,St)=>{for(let Et=0;Et<8;Et++)Bt.fillStyle=Et%2?"#fff":"#ff4f6d",Bt.fillRect(Et*16,0,16,St)});o.push(ut);let Dt=Ie(new Be(5.6,.2,2),yt(16777215,{map:ut}),{ol:2});Dt.position.set(0,2.9,2.3),Dt.rotation.x=.35,_t.add(Dt);let Vt=Ie(new nn(4,1.6,4),yt(3054591),{ol:2.5});Vt.position.y=3.8,Vt.rotation.y=Math.PI/4,_t.add(Vt),_t.position.set(ht.pos[0],t.heightAt(ht.pos[0],ht.pos[1]),ht.pos[1]),_t.rotation.y=ce()*6,l(_t),M(ht.pos[0],ht.pos[1],5)}}for(let I of Rt)for(let it=I.m0-8;it<=I.m1+8;it+=4){let nt=t.sample(it),ht=I.off+I.depth/2;M(nt.x+nt.rx*ht*I.side,nt.z+nt.rz*ht*I.side,I.depth/2+3)}for(let I of[P,At])M(I.x,I.z,14);function Ut(I,it){let nt=null,ht=1e9;for(let _t of p){let ut=(_t[0]-I)**2+(_t[1]-it)**2;ut<ht&&(ht=ut,nt=_t)}return nt}G.nearestOnRibbon=Ut,G.ribbonSamples=p;let qt=new Map;for(let I of p){let it=`${Math.floor(I[0]/10)},${Math.floor(I[1]/10)}`,nt=qt.get(it);nt||qt.set(it,nt=[]),nt.push(I)}let oe=(I,it,nt=1)=>{let ht=Math.floor(I/10),_t=Math.floor(it/10),ut=(Ke/2+nt)**2;for(let Dt=-1;Dt<=1;Dt++)for(let Vt=-1;Vt<=1;Vt++)for(let Bt of qt.get(`${ht+Dt},${_t+Vt}`)||[])if((Bt[0]-I)**2+(Bt[1]-it)**2<ut)return!0;return!1};G.reserve=M,G.clearOf=m;let Zt=[],ge=(I,it,nt,ht)=>!m(I,it,2.5*ht)||w(I,it,1.5)?!1:(Zt.push({x:I,z:it,kind:nt,s:ht}),M(I,it,2.2*ht),!0);for(let I of s.pois)I.kind==="tree"&&ge(I.pos[0],I.pos[1],0,.85+ce()*.35);for(let I of s.features)if(I.kind==="wood"&&I.closed){let it=jn(I.pts),nt=(it[2]-it[0])*(it[3]-it[1]);for(let ht=0;ht<nt/90;ht++){let _t=it[0]+ce()*(it[2]-it[0]),ut=it[1]+ce()*(it[3]-it[1]);ur(I.pts,_t,ut)&&ge(_t,ut,1,.9+ce()*.5)}}{let I=jn(S);for(let it=0;it<2600;it++){let nt=I[0]+ce()*(I[2]-I[0]),ht=I[1]+ce()*(I[3]-I[1]);!y(nt,ht)||-no(S,nt,ht)>45&&ce()<.75||ge(nt,ht,ce()<.7?1:2,.8+ce()*.5)}for(let it of s.features)if(it.kind==="road"&&!it.closed)for(let nt=1;nt<it.pts.length;nt++){let ht=it.pts[nt-1],_t=it.pts[nt],ut=Math.hypot(_t[0]-ht[0],_t[1]-ht[1]);for(let Dt=0;Dt<ut;Dt+=22){let Vt=Dt/ut,Bt=ht[0]+(_t[0]-ht[0])*Vt,et=ht[1]+(_t[1]-ht[1])*Vt,St=-(_t[1]-ht[1])/ut,Et=(_t[0]-ht[0])/ut,Wt=8+ce()*2;ce()<.5&&ge(Bt+St*Wt,et+Et*Wt,0,.6+ce()*.2)}}}{let I=[3978315,5031250,3121226,6539594,8376650,3450963],it=new ve(.32,.5,4.2,7);it.translate(0,2.1,0);let nt=new un(3.2,1);nt.scale(1,1.08,1),nt.translate(0,6.6,0);let ht=hn([new un(3,1).translate(0,6.2,0),new un(2.3,0).translate(1.9,5.3,.6),new un(2.2,0).translate(-1.7,5.5,-.8),new un(2,0).translate(.2,8.2,.3)].map(Bf)),_t=hn([new nn(3,4.2,8).translate(0,5,0),new nn(2.4,3.6,8).translate(0,7.2,0),new nn(1.6,3,8).translate(0,9.2,0)].map(Bf)),ut=Zt.map(Bt=>({x:Bt.x,y:t.heightAt(Bt.x,Bt.z)-.2,z:Bt.z,ry:ce()*6.28,s:Bt.s}));st(it,yt(9067062),ut,{ol:2,olRef:40,chunk:160,occluder:!0});let Dt=yt(16777215);nt.computeVertexNormals(),[nt,ht,_t].forEach((Bt,et)=>{let St=ut.filter((Et,Wt)=>Zt[Wt].kind===et);st(Bt,Dt,St,{ol:2.2,olRef:40,colors:St.map(()=>I[Math.floor(ce()*I.length)]),chunk:160,occluder:!0})}),G.treeCount=Zt.length}{let I=hn([0,1,2,3].map(ut=>{let Dt=new nn(.09,.55,3);return Dt.translate(0,.27,0),Dt.rotateZ((ut-1.5)*.25),Dt.rotateY(ut*1.7),Dt.translate((ut-1.5)*.08,0,ut%2*.06),Dt.index?Dt.toNonIndexed():Dt})),it=hn([new ve(.03,.03,.35,4).translate(0,.17,0).toNonIndexed(),new un(.13,0).translate(0,.38,0)]),nt=[],ht=[],_t=[];for(let ut=0;ut<9e3;ut++){let Dt=p[Math.floor(ce()*p.length)],Vt=ce()*6.283,Bt=Ke/2+1+ce()*22,et=Dt[0]+Math.cos(Vt)*Bt,St=Dt[1]+Math.sin(Vt)*Bt;if(!y(et,St)||w(et,St,.5)||!m(et,St,.2))continue;let Et=t.heightAt(et,St)-.03;ce()<.62?nt.push({x:et,y:Et,z:St,ry:ce()*6,s:.5+ce()*.6}):(ht.push({x:et,y:Et,z:St,ry:ce()*6,s:.35+ce()*.25}),_t.push(["#ff5d8f","#ffd93b","#ffffff","#b06bff","#ff8a3d","#57c7ff"][Math.floor(ce()*6)]))}st(I,yt(5226296),nt,{cast:!1,chunk:120}),st(it,yt(16777215),ht,{cast:!1,colors:_t,chunk:120})}let fe=new Un({side:En,depthWrite:!1,fog:!1,uniforms:{top:{value:new de(3116287)},mid:{value:new de(9425919)},bot:{value:new de(15333631)}},vertexShader:"varying vec3 vP; void main(){ vP = normalize(position); gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:`uniform vec3 top; uniform vec3 mid; uniform vec3 bot; varying vec3 vP; void main(){ float h=vP.y; vec3 c = h>0.12? mix(mid, top, smoothstep(0.12,0.7,h)) : mix(bot, mid, smoothstep(-0.05,0.12,h)); gl_FragColor=vec4(c,1.);
#include <colorspace_fragment>
}`}),Le=new Ve(new Ce(5e3,32,16),fe);Le.renderOrder=-10,Le.frustumCulled=!1,n.add(Le),o.push(fe,Le.geometry);let rt=hn([[0,0,0,14],[13,-3,2,10],[-13,-4,-1,10],[6,6,-2,9],[-6,5,3,8],[22,-6,0,6],[-22,-7,1,6]].map(([I,it,nt,ht])=>new un(ht,2).translate(I,it,nt)));rt.scale(1,.7,.8);let Yt=[h.x0+u/2,h.z0+g/2],It=[];for(let I=0;I<26;I++){let it=ce()*6.28,nt=300+ce()*1300;It.push({x:Yt[0]+Math.cos(it)*nt,y:170+ce()*120,z:Yt[1]+Math.sin(it)*nt,ry:ce()*6,s:.8+ce()*1.4})}let Ft=st(rt,yt(16777215,{emissive:6981808,emissiveIntensity:.35,fog:!1}),It,{ol:1.5,olRef:300,cast:!1}),Kt=[];for(let I=0;I<18;I++){let it=I/18*6.28+ce()*.2,nt=1900+ce()*500;Kt.push({x:Yt[0]+Math.cos(it)*nt,y:-40,z:Yt[1]+Math.sin(it)*nt,sx:320+ce()*260,sy:80+ce()*90,sz:260+ce()*200,ry:ce()*6})}st(new Ce(1,24,12),yt(7128954),Kt,{cast:!1,colors:Kt.map((I,it)=>[8047487,6273413,9425290][it%3])});function Qt(I){X.uTime.value=I;for(let it of gt)it.g.position.y=(t.lake?._waterLevel??0)+.1+Math.sin(I*1.7+it.ph)*.08,it.g.rotation.z=Math.sin(I*1.3+it.ph)*.06,it.g.rotation.y=it.a+Math.sin(I*.1+it.ph)*.4;Ft&&(Ft.position.x=Math.sin(I*.01)*40)}function Ee(){a.traverse(I=>{I.geometry&&I.geometry.dispose()});for(let I of o)I.dispose?.();n.remove(a),n.remove(Le)}return{group:a,anchors:G,update:Qt,dispose:Ee,inPark:y,clearOf:m,reserve:M,blocked:w,groundTex:D,onPath:oe,registerInstanced:v,clearArea:T,redrawGround:k,setOcclusionCorridor:C}}function Bf(n){let t=n.index?n.toNonIndexed():n;return t.computeVertexNormals(),t}function $a(n){let t=0,e=0;for(let i of n)t+=i[0],e+=i[1];return[t/n.length,e/n.length]}function sn(n,t,e,i,s,r){n.beginPath(),n.moveTo(t+r,e),n.arcTo(t+i,e,t+i,e+s,r),n.arcTo(t+i,e+s,t,e+s,r),n.arcTo(t,e+s,t,e,r),n.arcTo(t,e,t+i,e,r),n.closePath()}var Hf=[16735631,16765503,5752831,8248938,16747069,11566079,5234888,16739179,16777215,9414911],$f=[4054148,16727435,16765503,3054591,16777215];function gv(){let n=[];for(let i=0;i<=8;i++){let s=i/8,r=s*1.25,o=s<.12?.48+s*1.2:Math.sqrt(Math.max(0,1-Math.pow((s-.12)/.88,2.2)))*.62;n.push(new zt(Math.max(.001,o),r))}n.unshift(new zt(.001,0));let e=new Jr(n,12);return e.computeVertexNormals(),e}function Ah(n,t){let e=Bn(99),i=t.length,s=new Me;if(n.add(s),!i)return{update(){},hideWhere(){},setMask(){},dispose(){n.remove(s)},group:s};let r=gv(),o=new Ce(.15,8,5);o.scale(.8,1.15,.5);let a=new Ce(.075,6,4);a.scale(.85,1.2,.5);let l=new Ce(.13,6,5),h=new nn(.14,.36,6);h.translate(0,.18,0);let u=new nn(.26,.55,8);u.translate(0,.27,0);let g=new Ce(.2,7,5),f=(X,U,gt,At)=>{let P=new fn(X,U,gt);return P.castShadow=!0,P.receiveShadow=!0,P.userData.ol=At,s.add(P),P},c=f(r,yt(16777215),i,2.6),d=f(o,new Fn({color:16777215}),i*2,0),M=f(a,new Fn({color:1709088}),i*2,0),m=f(l,yt(16777215),i*2,2);d.castShadow=M.castShadow=!1;let p=[f(h,yt(16777215),i,2),f(u,yt(16777215),i,2),f(g,yt(16777215),i,2)],S=[0,0,0],y=new de,_=t.map((X,U)=>{let gt=X.colour??Hf[Math.floor(e()*Hf.length)];c.setColorAt(U,y.set(gt)),m.setColorAt(U*2,y),m.setColorAt(U*2+1,y);let At=e()<.3?-1:Math.floor(e()*3),P=-1;return At>=0&&(P=S[At]++,p[At].setColorAt(P,y.set($f[Math.floor(e()*$f.length)]))),{...X,s:X.scale??.85+e()*.35,ph:e()*6.28,sp:5+e()*4,tk:At,ti:P,wave:e()<.5,ex:.3}});p.forEach((X,U)=>{X.count=S[U]});for(let X of[c,m,...p])X.instanceColor&&(X.instanceColor.needsUpdate=!0);let N=new Oe().makeScale(0,0,0),w=null,R=new Oe,A=new Xn,v=new si,x=new $,b=new $,C=new Oe,E=new Oe;function T(X,U,gt){let At=_[X];if(At.hidden||w&&w(At.x,At.z)){for(let K of[c])K.setMatrixAt(X,N);for(let K=0;K<2;K++)d.setMatrixAt(X*2+K,N),M.setMatrixAt(X*2+K,N),m.setMatrixAt(X*2+K,N);At.tk>=0&&p[At.tk].setMatrixAt(At.ti,N);return}let P=At.ex,G=U*At.sp*(.5+P*.6)+At.ph,J=Math.max(0,Math.sin(G))*.32*P,V=1-Math.cos(G*2)*.05*P;v.set(0,At.yaw+Math.sin(U*.8+At.ph)*.25*(1-P),Math.sin(G*.5)*.08*P),A.setFromEuler(v),C.compose(x.set(At.x,At.y+J,At.z),A,b.set(At.s/Math.sqrt(V),At.s*V,At.s/Math.sqrt(V))),c.setMatrixAt(X,C);for(let K=0;K<2;K++){let ot=K?.19:-.19;E.makeTranslation(ot,.86,.5),R.multiplyMatrices(C,E),d.setMatrixAt(X*2+K,R),E.makeTranslation(ot*1.02,.84+(P>.6?.03:0),.565),R.multiplyMatrices(C,E),M.setMatrixAt(X*2+K,R);let Tt=P>.55?1:.15+.2*Math.max(0,Math.sin(G)),Lt=At.wave?Math.sin(G*1.5+K*3)*.25*P:0,st=(K?1:-1)*(.62+Tt*.05+Lt*.3),pt=.45+Tt*.85+Lt;E.makeTranslation(st,pt,.12),R.multiplyMatrices(C,E),m.setMatrixAt(X*2+K,R)}At.tk>=0&&(E.makeTranslation(0,1.22,0),At.tk===0&&E.multiply(new Oe().makeRotationZ(Math.sin(G)*.3)),R.multiplyMatrices(C,E),p[At.tk].setMatrixAt(At.ti,R))}for(let X=0;X<i;X++)T(X,0,!0);let k=()=>{for(let X of[c,d,M,m,...p])X.instanceMatrix.needsUpdate=!0};k();for(let X of[c,d,M,m,...p]){if(!X.count){X.visible=!1;continue}X.computeBoundingSphere(),X.boundingSphere.radius+=2,X.userData.ol&&ai(X,X.userData.ol,void 0,18)}function D(X,U,gt=[],At=null){let P=!1;for(let G=0;G<i;G++){let J=_[G];if(U&&(J.x-U.x)**2+(J.z-U.z)**2>260*260)continue;let V=.25;if(At!=null)V=At;else for(let K of gt){let ot=(K.x-J.x)**2+(K.z-J.z)**2;ot<45*45&&(V=Math.max(V,1-Math.sqrt(ot)/70))}J.ex+=(V-J.ex)*.05,T(G,X),P=!0}P&&k()}function O(){for(let X of[r,o,a,l,h,u,g])X.dispose();for(let X of[c,d,M,m,...p])X.dispose();n.remove(s)}function z(X){let U=!1;for(let gt=0;gt<i;gt++)!_[gt].hidden&&X(_[gt].x,_[gt].z)&&(_[gt].hidden=!0,T(gt,0),U=!0);U&&k()}function q(X){if(X!==w){w=X;for(let U=0;U<i;U++)T(U,0);k()}}return{update:D,dispose:O,hideWhere:z,setMask:q,group:s,members:_}}function Vf(n,t,e=5,i=null,s=null){let r=Bn(e),o=[];for(let[a,l]of t.entries())for(let h=l.m0;h<=l.m1;h+=l.spacing??1.35){let u=n.sample(h),g=Math.max(1,Math.round(l.depth/1.25));for(let f=0;f<g;f++){if(r()>l.density)continue;let c=l.off+f*1.25+r()*.35,d=(r()-.5)*.6,M=u.x+u.rx*c*l.side+u.tx*d,m=u.z+u.rz*c*l.side+u.tz*d;i&&i(M,m,1.4)||s&&s(M,m,.6)||o.push({zone:a,x:M,y:n.heightAt(M,m),z:m,yaw:Math.atan2(-u.rx*l.side,-u.rz*l.side)+(r()-.5)*.5})}}return o}var Gf={stocky:{torso:[.9,.76,.58],leg:.66,legR:.16,arm:.66,armR:.14,head:.47,hand:.19,shoe:[.34,.25,.6]},lanky:{torso:[.56,.86,.38],leg:1.06,legR:.095,arm:.9,armR:.085,head:.39,hand:.15,shoe:[.27,.21,.62]},compact:{torso:[.68,.6,.5],leg:.52,legR:.13,arm:.52,armR:.11,head:.5,hand:.17,shoe:[.3,.23,.5]},tall:{torso:[.7,.94,.46],leg:.92,legR:.125,arm:.8,armR:.11,head:.43,hand:.17,shoe:[.31,.24,.6]}},Wf=["#2b1d14","#5a3a1e","#c8642a","#e8c66a","#1d1d24","#a9a9b3","#3a2a1e","#8a5a2b","#ff5fa2"],yv=3.2,oo=new Map,re=(n,t)=>(oo.has(n)||oo.set(n,t()),oo.get(n));function Xf(){for(let n of oo.values())n.dispose();oo.clear()}function xv(n){let t=2166136261;for(let e of n)t^=e.charCodeAt(0),t=Math.imul(t,16777619);return t>>>0}function vv(n,t,e,i,s,r){n.fillStyle=i,n.fillRect(0,0,t,e);let o=t*.25,a=e*.47,l=e*.64,h=t*.058,u="#1a1420";n.fillStyle="rgba(255,90,90,0.28)";for(let m of[-1,1])n.beginPath(),n.ellipse(o+m*h*1.75,l-e*.03,t*.022,e*.03,0,0,7),n.fill();let g=(m,p)=>{if(p==="heart"){n.fillStyle="#ff2d6f",n.strokeStyle=u,n.lineWidth=5,n.beginPath();let w=t*.03;n.moveTo(m,a+w*1.1),n.bezierCurveTo(m-w*2.2,a-w*.2,m-w*.9,a-w*1.9,m,a-w*.6),n.bezierCurveTo(m+w*.9,a-w*1.9,m+w*2.2,a-w*.2,m,a+w*1.1),n.fill(),n.stroke();return}if(p==="closed"||p==="happy"){n.strokeStyle=u,n.lineWidth=9,n.lineCap="round",n.beginPath(),p==="happy"?n.arc(m,a+e*.02,t*.024,Math.PI*1.1,Math.PI*1.9):(n.moveTo(m-t*.025,a),n.lineTo(m+t*.025,a)),n.stroke();return}if(p==="x"){n.strokeStyle=u,n.lineWidth=8,n.lineCap="round";let w=t*.02;n.beginPath(),n.moveTo(m-w,a-w),n.lineTo(m+w,a+w),n.moveTo(m+w,a-w),n.lineTo(m-w,a+w),n.stroke();return}if(p==="wink"&&m>o&&(p="happy"),p==="wink"&&(p="open"),p==="happy"){n.strokeStyle=u,n.lineWidth=9,n.lineCap="round",n.beginPath(),n.arc(m,a+e*.02,t*.024,Math.PI*1.1,Math.PI*1.9),n.stroke();return}let S=p==="wide"?1.3:1,y=t*.03*S,_=e*.085*S;n.fillStyle="#fff",n.strokeStyle=u,n.lineWidth=6,n.beginPath(),n.ellipse(m,a,y,_,0,0,7),n.fill(),n.stroke();let N=p==="wide"?.38:.55;n.fillStyle=u,n.beginPath(),n.ellipse(m+y*.15,a+_*.12,y*N,_*N*1.1,0,0,7),n.fill(),n.fillStyle="#fff",n.beginPath(),n.arc(m+y*.35,a-_*.2,y*.22,0,7),n.fill(),p==="half"&&(n.fillStyle=i,n.fillRect(m-y-4,a-_-4,y*2+8,_*1.05),n.strokeStyle=u,n.lineWidth=7,n.beginPath(),n.moveTo(m-y-2,a-_*.1),n.lineTo(m+y+2,a-_*.1),n.stroke())},f={sleepy:"half",smug:"half",cheeky:"wink","wide-eyed":"wide"}[s]||"open";r==="happy"&&(f="happy"),r==="love"&&(f="heart"),r==="dead"&&(f="x"),r==="effort"&&s!=="goofy"&&(f="open");for(let m of[-1,1])g(o+m*h,f);n.strokeStyle=u,n.lineWidth=10,n.lineCap="round";let c=r==="effort"||s==="determined"||s==="gritted"?.35:r==="sad"||s==="worried"?-.35:s==="smug"||s==="cheeky"?.15:s==="wide-eyed"?-.2:0;for(let m of[-1,1]){let p=o+m*h,S=a-e*.13,y=t*.026,_=p-m*y,N=p+m*y;n.beginPath(),n.moveTo(N,S-c*18),n.lineTo(_,S+c*18),n.stroke()}n.lineWidth=8,n.strokeStyle=u,n.fillStyle="#7a1e2e";let d=o,M=r||"normal";if(M==="happy"||M==="normal"&&s==="grin")n.beginPath(),n.moveTo(d-t*.04,l-e*.02),n.quadraticCurveTo(d,l+e*.12,d+t*.04,l-e*.02),n.closePath(),n.fill(),n.stroke(),n.fillStyle="#fff",n.fillRect(d-t*.03,l-e*.018,t*.06,e*.03),n.fillStyle="#ff7d8f",n.beginPath(),n.ellipse(d,l+e*.06,t*.015,e*.02,0,0,7),n.fill();else if(M==="effort"){n.fillStyle="#fff",n.beginPath(),sn(n,d-t*.035,l-e*.03,t*.07,e*.065,10),n.fill(),n.stroke(),n.lineWidth=4,n.beginPath(),n.moveTo(d-t*.035,l),n.lineTo(d+t*.035,l);for(let m=-2;m<=2;m++)n.moveTo(d+m*t*.012,l-e*.03),n.lineTo(d+m*t*.012,l+e*.035);n.stroke()}else if(M==="sad"||M==="dead")n.beginPath(),n.moveTo(d-t*.03,l+e*.04),n.quadraticCurveTo(d,l-e*.04,d+t*.03,l+e*.04),n.stroke(),M==="dead"&&(n.fillStyle="#ff7d8f",n.beginPath(),n.ellipse(d+t*.012,l+e*.07,t*.012,e*.04,.2,0,7),n.fill(),n.stroke());else if(M==="love"||M==="pant")n.beginPath(),n.ellipse(d,l+e*.02,t*.022,e*.05,0,0,7),n.fill(),n.stroke();else if(s==="gritted"){n.fillStyle="#fff",n.beginPath(),sn(n,d-t*.04,l-e*.03,t*.08,e*.06,10),n.fill(),n.stroke(),n.lineWidth=4,n.beginPath(),n.moveTo(d-t*.04,l),n.lineTo(d+t*.04,l);for(let m=-2;m<=2;m++)n.moveTo(d+m*t*.014,l-e*.03),n.lineTo(d+m*t*.014,l+e*.03);n.stroke()}else if(s==="tongue-out")n.beginPath(),n.moveTo(d-t*.035,l),n.quadraticCurveTo(d,l+e*.05,d+t*.035,l),n.stroke(),n.fillStyle="#ff6f8a",n.beginPath(),n.ellipse(d+t*.008,l+e*.06,t*.016,e*.05,.15,0,7),n.fill(),n.stroke(),n.strokeStyle="rgba(0,0,0,0.35)",n.lineWidth=3,n.beginPath(),n.moveTo(d+t*.008,l+e*.03),n.lineTo(d+t*.01,l+e*.08),n.stroke();else if(s==="wide-eyed")n.beginPath(),n.ellipse(d,l+e*.02,t*.016,e*.04,0,0,7),n.fill(),n.stroke();else if(s==="cheeky")n.beginPath(),n.moveTo(d-t*.04,l-e*.01),n.quadraticCurveTo(d,l+e*.08,d+t*.045,l-e*.035),n.stroke();else if(s==="smug")n.beginPath(),n.moveTo(d-t*.03,l+e*.01),n.quadraticCurveTo(d+t*.01,l+e*.05,d+t*.04,l-e*.03),n.stroke();else if(s==="worried"){n.beginPath(),n.moveTo(d-t*.03,l+e*.02);for(let m=0;m<=6;m++)n.lineTo(d-t*.03+m*t*.01,l+e*.02+(m%2?-1:1)*e*.012);n.stroke()}else s==="goofy"?(n.beginPath(),n.moveTo(d-t*.04,l),n.quadraticCurveTo(d,l+e*.09,d+t*.04,l),n.closePath(),n.fill(),n.stroke(),n.fillStyle="#ff7d8f",n.beginPath(),n.ellipse(d+t*.01,l+e*.07,t*.016,e*.045,0,0,7),n.fill(),n.stroke(),n.fillStyle="#fff",n.fillRect(d-t*.02,l-2,t*.016,e*.03)):s==="determined"?(n.beginPath(),n.moveTo(d-t*.03,l+e*.01),n.lineTo(d+t*.03,l+e*.01),n.stroke()):(n.beginPath(),n.moveTo(d-t*.035,l-e*.01),n.quadraticCurveTo(d,l+e*.07,d+t*.035,l-e*.01),n.stroke());n.strokeStyle="rgba(0,0,0,0.25)",n.lineWidth=6,n.beginPath(),n.arc(o,a+e*.09,t*.012,.2,Math.PI-.2),n.stroke()}function _v(n,t){return gn(256,200,(e,i,s)=>{e.fillStyle="#ffffff",sn(e,0,0,i,s,20),e.fill(),e.fillStyle=t,e.fillRect(0,0,i,44),e.font=`30px ${Th}`,e.fillStyle="#fff",e.textAlign="center",e.textBaseline="middle",e.fillText("MARKRUN",i/2,24),yn(e,String(n),i/2,128,140,"#1a1420","#1a1420",0),e.fillStyle="#c33";for(let[r,o]of[[16,60],[i-16,60],[16,s-16],[i-16,s-16]])e.beginPath(),e.arc(r,o,6,0,7),e.fill()})}function Mv(n){return gn(128,128,(t,e,i)=>{if(t.fillStyle="#ffffff",t.strokeStyle="#1a1420",t.lineWidth=8,t.beginPath(),t.arc(e/2,i/2-6,48,0,7),t.fill(),t.stroke(),t.beginPath(),t.moveTo(e/2-12,i-26),t.lineTo(e/2,i-4),t.lineTo(e/2+8,i-28),t.fill(),n==="!")yn(t,"!",e/2,i/2-4,84,"#ff3d8b","#1a1420",.12);else if(n==="heart"){t.fillStyle="#ff2d6f";let s=e/2,r=i/2-2,o=16;t.beginPath(),t.moveTo(s,r+o*1.3),t.bezierCurveTo(s-o*2.6,r-o*.3,s-o,r-o*2.2,s,r-o*.7),t.bezierCurveTo(s+o,r-o*2.2,s+o*2.6,r-o*.3,s,r+o*1.3),t.fill(),t.stroke()}else if(n==="floss"){t.fillStyle="#ff9bd2";for(let[s,r,o]of[[54,44,18],[74,46,17],[64,30,16],[62,54,16]])t.beginPath(),t.arc(s,r,o,0,7),t.fill();t.strokeStyle="#c99a5a",t.lineWidth=6,t.beginPath(),t.moveTo(64,62),t.lineTo(64,96),t.stroke()}else if(n==="sweat"){t.fillStyle="#57c7ff";for(let[s,r]of[[50,50],[78,64]])t.beginPath(),t.moveTo(s,r-22),t.quadraticCurveTo(s+14,r,s,r+10),t.quadraticCurveTo(s-14,r,s,r-22),t.fill(),t.stroke()}})}function qf(n,t={}){let e=n.look||{},i=Gf[e.build]||Gf.compact,s=xv(n.id+(n.nickname||"")),r=Bn(s),o=n.colour?.primary||"#ff4757",a=n.colour?.secondary||"#ffffff",l=e.skin||"#f1c6a5",h=Wf[s%Wf.length],u=[],g=yt(o),f=yt(a),c=yt(l),d=yt(h),M=new de(a).getHSL({}).l>.85?"#ffffff":a,m=yt(M),p=yt("#ffffff"),S=yt("#22202c"),y=(Q,at,lt=yv)=>Ie(Q,at,{ol:lt,olRef:9}),_=new Me;_.name=`runner-${n.id}`;let N=new Me;_.add(N);let w=new Me;N.add(w);let R=i.leg/2,A=i.leg+i.shoe[1]*.75;w.position.y=A;let v=y(re(`shorts${e.build}`,()=>new ke(i.torso[0]*.92,.32,i.torso[2]*.95,3,.12)),f);v.position.y=.02,w.add(v);let x=new Me;x.position.y=.12,w.add(x);let b=y(re(`torso${e.build}`,()=>new ke(...i.torso,4,Math.min(i.torso[2],i.torso[0])*.42)),g);b.position.y=i.torso[1]/2,x.add(b);for(let Q of[-1,1]){let at=Ie(re(`stripe${e.build}`,()=>new Be(.06,i.torso[1]*.8,i.torso[2]*.7)),yt(a),{cast:!1});at.position.set(Q*i.torso[0]*.5,i.torso[1]*.5,0),x.add(at)}let C=_v(n.lane??0,o);u.push(C);let E=new Ve(re("bib",()=>new Tn(1,.78)),yt(16777215,{map:C})),T=Math.min(.42,i.torso[0]*.6);E.scale.setScalar(T),E.position.set(0,i.torso[1]*.45,i.torso[2]/2+.012),x.add(E);let k=new Me;k.position.y=i.torso[1]+.02,x.add(k);let D=new Me;k.add(D);let O=document.createElement("canvas");O.width=1024,O.height=512;let z=new lr(O);z.colorSpace=Sn,z.anisotropy=4,u.push(z);let q=null,X=Q=>{Q!==q&&(q=Q,vv(O.getContext("2d"),1024,512,l,e.face||"grin",Q),z.needsUpdate=!0)};X("normal");let U=i.head,gt=y(re(`head${U}`,()=>new Ce(U,32,20).scale(1,.98,.96)),yt(16777215,{map:z}));gt.position.y=U*.92,D.add(gt);for(let Q of[-1,1]){let at=y(re(`ear${U}`,()=>new Ce(U*.2,10,8).scale(.6,1,.8)),c,2.5);at.position.set(Q*U*.97,U*.9,0),D.add(at)}let At=y(re(`nose${U}`,()=>new Ce(U*.14,10,8)),c,2);At.position.set(0,U*.84,U*.97),D.add(At),pt(e.hair,e.hat),H(e.hat);let P=[];for(let Q of[-1,1]){let at=new Me;at.position.set(Q*(i.torso[0]/2+i.armR*.55),i.torso[1]-i.armR*1.1,0),x.add(at);let lt=y(re(`sleeve${e.build}`,()=>new Ce(i.armR*1.65,14,10)),g);at.add(lt);let xt=y(re(`uarm${e.build}`,()=>new ri(i.armR,i.arm/2-i.armR,4,10).translate(0,-i.arm/4,0)),c);at.add(xt);let Rt=new Me;Rt.position.y=-i.arm/2+i.armR*.4,at.add(Rt);let wt=y(re(`farm${e.build}`,()=>new ri(i.armR*.95,i.arm/2-i.armR,4,10).translate(0,-i.arm/4,0)),c);Rt.add(wt);let Ut=y(re(`hand${e.build}`,()=>new Ce(i.hand,14,10).scale(1,1.1,.9)),c);Ut.position.y=-i.arm/2-i.hand*.4,Rt.add(Ut),P.push({sh:at,el:Rt,hand:Ut})}let G=[];for(let Q of[-1,1]){let at=new Me;at.position.set(Q*i.torso[0]*.24,0,0),w.add(at);let lt=y(re(`thigh${e.build}`,()=>new ri(i.legR*1.15,R-i.legR,4,10).translate(0,-R/2,0)),c);at.add(lt);let xt=y(re(`sleg${e.build}`,()=>new ve(i.legR*1.6,i.legR*1.5,R*.5,12).translate(0,-R*.2,0)),f);at.add(xt);let Rt=new Me;Rt.position.y=-R,at.add(Rt);let wt=y(re(`shin${e.build}`,()=>new ri(i.legR,R-i.legR,4,10).translate(0,-R/2,0)),c);Rt.add(wt);let Ut=y(re(`sock${e.build}`,()=>new ve(i.legR*1.12,i.legR*1.12,R*.25,10).translate(0,-R*.86,0)),yt(16777215),2.5);Rt.add(Ut);let qt=new Me;qt.position.y=-R,Rt.add(qt);let oe=y(re(`shoe${e.build}`,()=>new ke(...i.shoe,3,i.shoe[1]*.45).translate(0,-i.shoe[1]*.25,i.shoe[2]*.22)),m);qt.add(oe);let Zt=Ie(re(`sole${e.build}`,()=>new ke(i.shoe[0]*1.04,i.shoe[1]*.3,i.shoe[2]*1.03,2,.05).translate(0,-i.shoe[1]*.62,i.shoe[2]*.22)),p,{ol:2.5,olRef:9});qt.add(Zt);let ge=Ie(re(`swoosh${e.build}`,()=>new Be(i.shoe[0]*1.06,i.shoe[1]*.18,i.shoe[2]*.5).translate(0,-i.shoe[1]*.2,i.shoe[2]*.2)),yt(o),{cast:!1});qt.add(ge),G.push({hp:at,kn:Rt,an:qt})}$t(e.accessory);let J=new Me;J.visible=!1;{let Q=Ie(re("flossStick",()=>new ve(.025,.025,.6,5).rotateX(Math.PI/2).translate(0,0,.3)),yt("#e8d0a0"),{cast:!1}),at=Ie(re("flossFluff",()=>{let lt=Bn(5);return hn(Array.from({length:7},()=>new un(.16+lt()*.06,1).translate((lt()-.5)*.22,(lt()-.5)*.22,.72+(lt()-.5)*.2)))}),yt("#ff9bd2"),{ol:2.5,olRef:9});J.add(Q,at),J.userData.fluff=at,J.position.y=-i.arm/2-i.hand*.4,P[0].el.add(J)}function V(Q,at){Q==="floss"&&(J.visible=at>0,at>0&&J.userData.fluff.scale.setScalar(Math.max(.15,at)))}let K={},ot=new _a(new Wr({transparent:!0,depthTest:!1}));ot.scale.setScalar(.9),ot.visible=!1,ot.renderOrder=20,_.add(ot);let Tt=Q=>{if(!Q){ot.visible=!1;return}K[Q]||(K[Q]=Mv(Q),u.push(K[Q])),ot.material.map=K[Q],ot.material.needsUpdate=!0,ot.visible=!0},Lt=A+.12+i.torso[1]+.02+U*2;ot.position.y=Lt+.45;let st=new Set([b,v,gt,...P.flatMap(Q=>[Q.hand]),...G.map(Q=>Q.an.children[0])]);for(let Q of P)Q.sh.children.forEach(at=>at.isMesh&&st.add(at));for(let Q of G)Q.hp.children.forEach(at=>at.isMesh&&st.add(at));_.traverse(Q=>{Q.isMesh&&!Q.userData.isOutline&&(Q.castShadow=st.has(Q))});function pt(Q,at){let lt=Q||"short";if(lt==="bald")return;let xt=(Rt=1.07,wt=.48)=>{let Ut=y(re(`hcap${U}${Rt}${wt}`,()=>new Ce(U*Rt,24,14,0,Math.PI*2,0,Math.PI*wt)),d);return Ut.position.y=U*.92,Ut.rotation.x=-.32,D.add(Ut),Ut};if(lt==="curly"||lt==="afro"){let Rt=re(`curly${U}`,()=>{let Ut=Bn(7),qt=[];for(let oe=0;oe<26;oe++){let Zt=Ut()*Math.PI*.55,ge=Ut()*Math.PI*2,fe=new $(Math.sin(Zt)*Math.cos(ge),Math.cos(Zt),Math.sin(Zt)*Math.sin(ge)).multiplyScalar(U*1.02);fe.z>U*.55&&fe.y<U*.75||qt.push(new un(U*.33,1).translate(fe.x,fe.y,fe.z-U*.08))}return hn(qt)}),wt=y(Rt,d);wt.position.y=U*.98,lt==="afro"&&(wt.scale.setScalar(1.28),wt.position.y=U*1.05),D.add(wt);return}if(at==="beanie"||at==="bucket"||at==="bobble"){if(xt(1.05,.5),lt==="mullet"||lt==="long"||lt==="ponytail"){let Rt=y(re(`mul${U}`,()=>new ke(U*1.5,U*.9,U*.4,3,U*.15)),d);Rt.position.set(0,U*.35,-U*.78),D.add(Rt)}return}if(lt==="buzz"){let Rt=y(re(`buzz${U}`,()=>new Ce(U*1.025,24,14,0,Math.PI*2,0,Math.PI*.45)),d,2);Rt.position.y=U*.92,Rt.rotation.x=-.32,D.add(Rt);return}if(xt(),lt==="quiff"||lt==="swept"){let Rt=y(re(`quiff${U}${lt}`,()=>new Ce(U*.55,16,10).scale(lt==="quiff"?1.3:1.7,lt==="quiff"?.75:.45,1)),d);Rt.position.set(lt==="swept"?U*.25:0,U*1.82,U*.38),Rt.rotation.set(-.5,0,lt==="swept"?-.35:0),D.add(Rt)}if(lt==="mullet"){let Rt=y(re(`mul${U}`,()=>new ke(U*1.5,U*.9,U*.4,3,U*.15)),d);Rt.position.set(0,U*.35,-U*.78),D.add(Rt)}if(lt==="long"){let Rt=y(re(`hlong${U}`,()=>new ke(U*1.8,U*1.6,U*.5,3,U*.2)),d);Rt.position.set(0,U*.4,-U*.62),D.add(Rt)}if(lt==="ponytail"){let Rt=new Me;Rt.position.set(0,U*1.35,-U*.85),D.add(Rt);for(let wt=0;wt<3;wt++){let Ut=y(re(`pt${U}${wt}`,()=>new Ce(U*(.32-wt*.05),12,8)),d);Ut.position.set(0,-wt*U*.32,-wt*U*.18),Rt.add(Ut)}D.userData.pony=Rt}if(lt==="bun"){let Rt=y(re(`bun${U}`,()=>new Ce(U*.38,14,10)),d);Rt.position.set(0,U*2,-U*.2),D.add(Rt)}if(lt==="mohawk"||lt==="spiky"){let Rt=lt==="mohawk"?5:9;for(let wt=0;wt<Rt;wt++){let Ut=y(re(`spk${U}`,()=>new nn(U*.2,U*.7,8)),d),qt=lt==="mohawk"?0:wt/Rt*Math.PI*2,oe=lt==="mohawk"?-.9+wt/(Rt-1)*1.8:.6;Ut.position.set(Math.sin(qt)*Math.sin(oe)*U,U*.92+Math.cos(oe)*U*1.05,(lt==="mohawk"?Math.sin(oe):Math.cos(qt)*Math.sin(oe))*U),Ut.lookAt(Ut.position.clone().multiplyScalar(3)),Ut.rotateX(Math.PI/2),D.add(Ut)}}}function H(Q){if(!Q)return;let at=yt(a==="#ffffff"||a==="#f8f8f8"?o:a),lt=yt(o);if(Q==="backwards-cap"){let xt=y(re(`capd${U}`,()=>new Ce(U*1.1,24,12,0,Math.PI*2,0,Math.PI*.42)),at);xt.position.y=U*.98,xt.rotation.x=-.18,D.add(xt);let Rt=y(re(`brim${U}`,()=>new ve(U*.75,U*.75,U*.08,20,1,!1,-Math.PI/2,Math.PI).scale(1.2,1,1.15)),lt);Rt.position.set(0,U*1.42,-U*.62),Rt.rotation.set(-.12,Math.PI,0),D.add(Rt)}else if(Q==="bobble"){let xt=y(re(`bean${U}`,()=>new Ce(U*1.1,24,14,0,Math.PI*2,0,Math.PI*.5).scale(1,1.15,1)),lt);xt.position.y=U*.96,xt.rotation.x=-.12,D.add(xt);let Rt=y(re(`brim2${U}`,()=>new on(U*1.05,U*.17,8,24)),at);Rt.rotation.x=Math.PI/2-.12,Rt.position.y=U*1.12,D.add(Rt);let wt=y(re(`bigbob${U}`,()=>new un(U*.48,1)),at);wt.position.y=U*2.45,D.add(wt),D.userData.bobble=wt}else if(Q==="cap"||Q==="visor"){if(Q==="cap"){let Rt=y(re(`capd${U}`,()=>new Ce(U*1.1,24,12,0,Math.PI*2,0,Math.PI*.42)),at);Rt.position.y=U*.98,Rt.rotation.x=-.18,D.add(Rt)}else{let Rt=y(re(`vband${U}`,()=>new on(U*1,U*.12,8,24)),at);Rt.rotation.x=Math.PI/2-.25,Rt.position.y=U*1.35,D.add(Rt)}let xt=y(re(`brim${U}`,()=>new ve(U*.75,U*.75,U*.08,20,1,!1,-Math.PI/2,Math.PI).scale(1.2,1,1.15)),lt);xt.position.set(0,U*1.42,U*.62),xt.rotation.x=.12,D.add(xt)}else if(Q==="beanie"){let xt=y(re(`bean${U}`,()=>new Ce(U*1.1,24,14,0,Math.PI*2,0,Math.PI*.5).scale(1,1.15,1)),at);xt.position.y=U*.96,xt.rotation.x=-.12,D.add(xt);let Rt=y(re(`brim2${U}`,()=>new on(U*1.05,U*.17,8,24)),lt);Rt.rotation.x=Math.PI/2-.12,Rt.position.y=U*1.12,D.add(Rt);let wt=y(re(`bob${U}`,()=>new un(U*.3,1)),lt);wt.position.y=U*2.25,D.add(wt)}else if(Q==="headband"||Q==="sweatband"){let xt=y(re(`hb${U}`,()=>new on(U*1,U*.13,8,28)),at);xt.rotation.x=Math.PI/2-.2,xt.position.y=U*1.3,D.add(xt);let Rt=y(re(`hbt${U}`,()=>new ke(U*.2,U*.5,U*.08,2,.02)),at);Rt.position.set(.12,U*1.1,-U*1.05),Rt.rotation.z=.5,D.add(Rt),D.userData.tail=Rt}else if(Q==="bucket"){let xt=y(re(`buck${U}`,()=>new ve(U*.8,U*1.02,U*.7,20)),at);xt.position.y=U*1.75,D.add(xt);let Rt=y(re(`buckb${U}`,()=>new ve(U*1.5,U*1.5,U*.06,24)),lt);Rt.position.y=U*1.42,Rt.rotation.x=.1,D.add(Rt)}else if(Q==="crown"||Q==="tiara"){let xt=y(re(`crown${U}`,()=>new ve(U*.7,U*.62,U*.5,8,1,!0)),yt("#ffd23f",{side:cn}));xt.position.y=U*2,D.add(xt)}else if(Q==="wizard"||Q==="party"){let xt=y(re(`cone${U}`,()=>new nn(U*.8,U*1.8,16)),at);xt.position.y=U*2.3,xt.rotation.z=.15,D.add(xt);let Rt=y(re(`bob${U}`,()=>new un(U*.3,1)),lt);Rt.position.set(-U*.12,U*3.15,0),D.add(Rt)}else if(Q==="helmet"||Q==="bike_helmet"){let xt=y(re(`helm${U}`,()=>new Ce(U*1.14,20,12,0,Math.PI*2,0,Math.PI*.46).scale(1,.9,1.15)),at);xt.position.y=U*1,D.add(xt)}else if(Q==="santa"){let xt=y(re(`santa${U}`,()=>new nn(U*.95,U*1.6,16)),yt("#e8313f"));xt.position.y=U*2.2,xt.rotation.z=.5,D.add(xt);let Rt=y(re(`santar${U}`,()=>new on(U*.95,U*.2,8,24)),yt("#ffffff"));Rt.rotation.x=Math.PI/2,Rt.position.y=U*1.45,D.add(Rt)}else{let xt=y(re(`cone${U}`,()=>new nn(U*.8,U*1.8,16)),at);xt.position.y=U*2.3,D.add(xt)}}function $t(Q){if(Q){if(Q==="sunglasses"||Q==="glasses"){let at=Q==="sunglasses";for(let xt of[-1,1]){let Rt=y(re(`lens${U}${at}`,()=>new ke(U*.5,U*.32,U*.08,2,U*.06)),at?yt("#141420"):yt("#cfefff"),2);Rt.position.set(xt*U*.3,U*1.02,U*.98),Rt.rotation.y=xt*.28,D.add(Rt)}let lt=Ie(re(`bridge${U}`,()=>new Be(U*.3,U*.06,U*.06)),yt("#141420"),{cast:!1});lt.position.set(0,U*1.06,U*1.04),D.add(lt)}else if(Q==="medal"){let at=y(re("ribbon",()=>new on(.2,.03,6,20,Math.PI)),yt("#2e9bff"),2);at.rotation.z=Math.PI,at.position.set(0,i.torso[1]+.02,i.torso[2]/2-.05),at.rotation.x=-.3,x.add(at);let lt=y(re("medal",()=>new ve(.11,.11,.04,16).rotateX(Math.PI/2)),yt("#ffd23f",{emissive:"#664400",emissiveIntensity:.3}),2.5);lt.position.set(0,i.torso[1]-.22,i.torso[2]/2+.05),x.add(lt),E.position.y-=.1,E.position.x=.12,E.scale.multiplyScalar(.8)}else if(Q==="headphones"){let at=y(re(`hp${U}`,()=>new on(U*1.08,U*.07,6,24,Math.PI)),yt("#22202c"),2);at.position.y=U*.95,D.add(at);for(let lt of[-1,1]){let xt=y(re(`hpc${U}`,()=>new ve(U*.3,U*.3,U*.2,14).rotateZ(Math.PI/2)),yt(o),2.5);xt.position.set(lt*U*1.02,U*.92,0),D.add(xt)}}else if(Q==="sweatband"||Q==="wristbands"||Q==="watch")for(let at of P){let lt=y(re(`wb${e.build}`,()=>new ve(i.armR*1.3,i.armR*1.3,.12,10).translate(0,-i.arm/2+.1,0)),yt(Q==="watch"?"#22202c":a),2);if(at.el.add(lt),Q==="watch")break}else if(Q==="scarf"){let at=y(re("scarf",()=>new on(.22,.08,8,18)),yt(a));at.rotation.x=Math.PI/2,at.position.y=.02,k.add(at);let lt=y(re("scarft",()=>new ke(.14,.5,.06,2,.03)),yt(a));lt.position.set(.1,-.15,-.25),lt.rotation.x=.5,k.add(lt),D.userData.tail2=lt}else if(Q==="cape"){let at=y(re(`cape${e.build}`,()=>new Tn(i.torso[0]*1.2,i.torso[1]*1.5,1,4).translate(0,-i.torso[1]*.75,0)),yt(a,{side:cn}),2),lt=new Me;lt.position.set(0,i.torso[1],-i.torso[2]/2-.03),lt.add(at),x.add(lt),D.userData.cape=lt}else if(Q==="backpack"){let at=y(re(`bp${e.build}`,()=>new ke(i.torso[0]*.7,i.torso[1]*.7,.25,3,.08)),yt(a));at.position.set(0,i.torso[1]*.5,-i.torso[2]/2-.12),x.add(at)}else if(Q==="moustache"||Q==="mustache"){let at=y(re(`mou${U}`,()=>new ri(U*.09,U*.5,4,8).rotateZ(Math.PI/2)),yt("#3a2616"),2);at.position.set(0,U*.7,U*.98),D.add(at)}else if(Q==="beard"){let at=y(re(`beard${U}`,()=>new Ce(U*.78,18,12,0,Math.PI*2,Math.PI*.45,Math.PI*.55).scale(1.05,1,.75)),d,2.5);at.position.set(0,U*.78,U*.32),D.add(at);let lt=y(re(`mou${U}`,()=>new ri(U*.09,U*.5,4,8).rotateZ(Math.PI/2)),d,2);lt.position.set(0,U*.7,U*.98),D.add(lt)}else if(Q==="bumbag"){let at=y(re(`bum${e.build}`,()=>new ke(i.torso[0]*.5,.2,.18,2,.07)),yt(a==="#ffffff"||a==="#f8f8f8"?"#22202c":a));at.position.set(i.torso[0]*.12,.08,i.torso[2]/2+.08),w.add(at);let lt=Ie(re(`strap${e.build}`,()=>new on(i.torso[0]*.48,.025,6,24).scale(1,i.torso[2]/i.torso[0]*1.05,1).rotateX(Math.PI/2)),yt("#22202c"),{cast:!1});lt.position.y=.1,w.add(lt)}else if(Q==="bib"){let at=new Ve(re("bib",()=>new Tn(1,.78)),E.material);at.scale.copy(E.scale),at.position.set(0,i.torso[1]*.5,-i.torso[2]/2-.012),at.rotation.y=Math.PI,x.add(at),E.scale.multiplyScalar(1.3)}else if(Q==="bowtie")for(let at of[-1,1]){let lt=y(re("bow",()=>new nn(.08,.16,4).rotateZ(Math.PI/2)),yt(a),2);lt.position.set(at*.08,i.torso[1]-.06,i.torso[2]/2+.03),lt.rotation.z=at>0?Math.PI:0,x.add(lt)}else if(Q==="tutu"){let at=y(re(`tutu${e.build}`,()=>new ve(i.torso[0]*.55,i.torso[0]*.9,.18,16,1,!0)),yt("#ff9bd2",{side:cn}),2);at.position.y=-.05,w.add(at)}}}let tt={phase:r()*6.28,t:r()*10,lean:0,j:{},look:0,lookPitch:0},j=tt.j,mt=["hipLx","hipRx","kneeL","kneeR","ankL","ankR","shLx","shRx","shLz","shRz","elL","elR","twist","lean","bob","roll","headY","headX","bodyX","bodyY","bodyZ","hipSpread"];for(let Q of mt)j[Q]=0;let Y={},kt="idle",B=null,L=0;function ct(Q,at=null){(Q!==kt||at!==B)&&(kt=Q,B=at,L=0)}function bt(Q,at={}){tt.t+=Q,L+=Q;let lt=tt.t;for(let Ut of mt)Y[Ut]=0;let xt="normal",Rt=10;if(kt==="run"||kt==="jog"||kt==="trudge"||kt==="distracted"){let Ut=Math.max(.5,at.speed??3.5),qt=Math.max(.2,at.rate??1),oe=kt==="trudge",Zt=oe?1.7:(2.55+.14*(Ut-3.5))*Math.pow(qt,.3)*(kt==="jog"?.8:1);tt.phase+=Q*Math.PI*Zt;let ge=tt.phase,fe=Math.sin(ge),Le=Math.cos(ge),rt=oe?.4:Math.max(.45,Math.min(1,.62+.13*(Ut-3.5)));Y.hipLx=-rt*fe,Y.hipRx=rt*fe,Y.kneeL=.2+(oe?.5:1.35)*Math.max(0,Le)*(.7+rt*.3),Y.kneeR=.2+(oe?.5:1.35)*Math.max(0,-Le)*(.7+rt*.3),Y.ankL=-.2*fe,Y.ankR=.2*fe;let Yt=oe?.3:.75*rt+.15;Y.shLx=Yt*fe,Y.shRx=-Yt*fe,Y.shLz=-.18,Y.shRz=.18,Y.elL=oe?-.5:-1.5,Y.elR=oe?-.5:-1.5,Y.twist=.16*fe,Y.roll=.05*fe,Y.bob=(oe?.03:.11)*(Math.abs(Le)-.4),Y.lean=(oe?.05:.16)+Math.max(-.25,Math.min(.45,(at.slope??0)*1.6)),Y.headX=-Y.lean*.6,Y.headY=-.08*fe,Rt=18,xt=at.effort>.6?"effort":at.effort>.3?"pant":"normal",oe&&(Y.headX=.35,Y.lean=.25,xt="sad"),kt==="distracted"&&(Y.headY=at.lookYaw??.9,Y.headX=-.15,Y.twist+=(at.lookYaw??.9)*.3,xt="love")}else if(kt==="ready")Y.hipLx=-.5,Y.hipRx=.35,Y.kneeL=.6,Y.kneeR=.5,Y.lean=.35,Y.bob=-.12,Y.shLx=.5,Y.shRx=-.6,Y.elL=-1.3,Y.elR=-1.3,Y.headX=-.25,Y.bob+=Math.sin(lt*3)*.01,xt="effort";else if(kt==="wave")Y.shRz=2.7,Y.elR=.2*Math.sin(lt*9)-.25,Y.shRx=Math.sin(lt*9)*.25,Y.shLz=-.3,Y.elL=-.4,Y.bob=Math.abs(Math.sin(lt*4))*.05,Y.headY=.1*Math.sin(lt*2),xt="happy";else if(kt==="pose"){let Ut=B||"flex";if(Ut==="flex")Y.shLz=-1.5,Y.shRz=1.5,Y.elL=-1.9-Math.sin(lt*6)*.15,Y.elR=-1.9-Math.sin(lt*6+1)*.15,Y.shLx=-0,Y.bob=-.06+Math.abs(Math.sin(lt*3))*.03,Y.hipSpread=.25,Y.kneeL=.3,Y.kneeR=.3,xt="effort";else if(Ut==="point")Y.shRx=-1.5,Y.elR=0,Y.shLz=-.3,Y.elL=-1.6,Y.shLx=-.3,Y.headX=-.1,Y.lean=-.05,xt="happy",Y.bob=Math.sin(lt*5)*.02;else if(Ut==="stretch")Y.hipRx=-.2,Y.kneeR=2.3,Y.shRx=.8,Y.elR=-.6,Y.shLz=-2.6,Y.lean=.08+Math.sin(lt*2)*.04,xt="smug";else if(Ut==="spin"){let qt=Math.min(1,L/1.1);Y.bodyY=(1-(1-qt)**2)*Math.PI*4,Y.shLz=qt<1?-1.3:-2.6,Y.shRz=qt<1?1.3:2.6,Y.bob=qt<1?Math.abs(Math.sin(lt*7))*.2:Math.abs(Math.sin(lt*5))*.12,xt="happy"}else Ut==="bow"?(Y.lean=.75+Math.sin(lt*2)*.05,Y.shLx=.4,Y.shRx=-1.2,Y.elR=-1.6,Y.shRz=.4,Y.headX=-.2,xt="happy"):(Y.shLz=-2.5,Y.shRz=2.5,Y.bob=Math.abs(Math.sin(lt*6))*.25,xt="happy");xt==="smug"&&(xt="normal")}else if(kt==="celebrate"){let Ut=B||"jump";if(Ut==="jump"){let qt=Math.abs(Math.sin(lt*5.5));Y.bob=qt*.55,Y.shLz=-2.6-qt*.3,Y.shRz=2.6+qt*.3,Y.elL=-.2,Y.elR=-.2,Y.kneeL=Y.kneeR=(1-qt)*.8,Y.hipLx=Y.hipRx=-(1-qt)*.4,xt="happy",Rt=22}else if(Ut==="fist"){let qt=Math.sin(lt*7);Y.shRx=-2.6,Y.elR=-.4+qt*.4,Y.shLx=.4,Y.elL=-1.8,Y.bob=Math.abs(qt)*.08,Y.lean=-.1,xt="happy"}else Ut==="kneel"?(Y.lean=.85,Y.kneeL=Y.kneeR=.7,Y.hipLx=Y.hipRx=-.6,Y.bob=-.25+Math.sin(lt*7)*.025,Y.shLx=Y.shRx=-.55,Y.elL=Y.elR=-.1,Y.shLz=-.15,Y.shRz=.15,Y.headX=-.6,xt="pant"):Ut==="collapse"?(Y.bodyX=-Math.PI/2+.05,Y.shLz=-2.2,Y.shRz=2.2,Y.hipSpread=.4,Y.kneeL=.3+Math.max(0,Math.sin(lt*9))*.4*(Math.sin(lt*.7)>.6?1:0),Y.kneeR=.2,xt="dead",Rt=4):Ut==="shrug"&&(Y.shLz=-.9,Y.shRz=.9,Y.elL=-1.4,Y.elR=-1.4,Y.shLx=-.5,Y.shRx=-.5,Y.headX=.1,Y.headY=Math.sin(lt*1.5)*.3,xt="sad")}else Y.bob=Math.sin(lt*2)*.015,Y.shLz=-.18,Y.shRz=.18,Y.elL=-.25,Y.elR=-.25,Y.headY=Math.sin(lt*.7)*.25,Y.lean=.02,Y.kneeL=Y.kneeR=.05;at.lookYaw!=null&&kt!=="distracted"&&(Y.headY+=at.lookYaw);let wt=1-Math.exp(-Rt*Q);for(let Ut of mt){if(Ut==="bodyY"&&kt==="pose"&&B==="spin"){j[Ut]=Y[Ut];continue}j[Ut]+=(Y[Ut]-j[Ut])*wt}if(kt==="pose"&&B==="spin"||(j.bodyY=j.bodyY%(Math.PI*2),j.bodyY>Math.PI&&(j.bodyY-=Math.PI*2)),G[0].hp.rotation.set(j.hipLx,0,-j.hipSpread),G[1].hp.rotation.set(j.hipRx,0,j.hipSpread),G[0].kn.rotation.x=j.kneeL,G[1].kn.rotation.x=j.kneeR,G[0].an.rotation.x=j.ankL-j.kneeL*.35,G[1].an.rotation.x=j.ankR-j.kneeR*.35,P[0].sh.rotation.set(j.shLx,0,j.shLz-0),P[1].sh.rotation.set(j.shRx,0,j.shRz),P[0].el.rotation.x=j.elL,P[1].el.rotation.x=j.elR,x.rotation.set(j.lean,j.twist,0),w.rotation.set(0,-j.twist*.5,j.roll),w.position.y=A+j.bob,D.rotation.set(j.headX,j.headY,0),N.rotation.set(j.bodyX,j.bodyY,j.bodyZ),N.position.y+=((kt==="celebrate"&&B==="collapse"?i.torso[2]*.5+.08:0)-N.position.y)*wt,D.userData.bobble&&(D.userData.bobble.position.y=U*2.45+Math.abs(Math.sin(tt.phase))*.04),D.userData.pony&&(D.userData.pony.rotation.x=.4+Math.sin(tt.phase*2)*.35),D.userData.tail&&(D.userData.tail.rotation.x=.6+Math.sin(tt.phase*2)*.3),D.userData.cape&&(D.userData.cape.rotation.x=-.3-Math.min(1.1,(at.speed??0)*.15)+Math.sin(lt*8)*.08),at.expr&&(xt=at.expr),X(xt),ot.visible){ot.position.y=Lt+.45+Math.sin(lt*6)*.08;let Ut=.9+Math.sin(lt*9)*.05;ot.scale.set(Ut,Ut,Ut)}}function Pt(){for(let Q of u)Q.dispose?.();ot.material.dispose()}return{id:n.id,info:n,root:_,update:bt,set:ct,setPop:Tt,setExpr:X,setProp:V,dispose:Pt,height:Lt,hipH:A,get state(){return kt},get variant(){return B}}}var bv=(n,t,e)=>{let i=Math.max(0,Math.min(1,(e-n)/(t-n)));return i*i*(3-2*i)};function Yf(n,t,e){let i=n.timeMap,s={};e.forEach((v,x)=>s[v.id]=v.lane??x+1);let r=n.runners.length,o=Object.values(s),a=(Math.min(...o)+Math.max(...o))/2,l=Math.min(1.25,(Ke-1.6)/Math.max(1,r-1)),h=n.runners.map((v,x)=>{let b=di(i,v.officialS),C=((s[v.id]??x+1)-a)*l;return{...v,finishB:b,base:C,seed:x*1.7+.3}}),u=Object.fromEntries(h.map(v=>[v.id,v])),g=[...h].sort((v,x)=>v.officialS-x.officialS).map(v=>v.id),f=Object.fromEntries(g.map((v,x)=>[v,x+1])),c=u[g[0]],d=g.map(v=>u[v].officialS),M=u[g[0]].finishB,m=u[g.at(-1)].finishB,p=r>1&&d[1]-d[0]<=1.5,S=v=>Math.max(.05,(Fi(i,v+.05)-Fi(i,v-.05))/.1),y=new Map;function _(v){let x=Math.round(v*1e3);if(y.has(x))return y.get(x);let b=v<=0?0:Fi(i,v),C=v<=0?4:S(v),E={b:v,raceS:b,rate:C,byId:{},order:[]};for(let O of h){let z=$n(O.progress,b),q=b>=O.officialS&&v>=O.finishB-1e-6,X=($n(O.progress,b+1)-$n(O.progress,Math.max(0,b-1)))/(b>1?2:1);E.byId[O.id]={id:O.id,m:z,finished:q,vRace:q?0:X,place:f[O.id]}}for(let O of h){let z=E.byId[O.id],q=z.m,X=O.base;X+=.22*Math.sin(z.m/85+O.seed);for(let At of h){if(At===O)continue;let P=E.byId[At.id],G=z.m-P.m;if(Math.abs(G)<4&&!z.finished&&!P.finished){let J=(1-Math.abs(G)/4)*.32;X+=Math.sign(O.base-At.base||O.seed-At.seed)*J}}let U=0;if(z.finished){let At=v-O.finishB,P=($n(O.progress,O.officialS)-$n(O.progress,O.officialS-2))/2*S(O.finishB),G=Math.min(14,Math.max(4,P)),J=1.6;q=5e3+(At<J?G*(At-At*At/(2*J)):G*J/2+Math.min(10+f[O.id]*1.5,(At-J)*.9));let K=(f[O.id]-(r+1)/2)*1.6;X=X+(K-X)*bv(0,2.5,At),U=At}let gt=t.sample(q,O.id);X*=1-gt.div,X=Math.max(-Ke/2+.6,Math.min(Ke/2-.6,X)),Object.assign(z,{mVis:q,x:gt.x+gt.rx*X,z:gt.z+gt.rz*X,y:t.heightAt(gt.x+gt.rx*X,gt.z+gt.rz*X)+.16,tx:gt.tx,tz:gt.tz,slope:gt.slope,div:gt.div,divInfo:gt.divInfo,lat:X,post:U,distToFinish:Math.max(0,5e3-z.m)})}let T=h.filter(O=>E.byId[O.id].finished).sort((O,z)=>O.officialS-z.officialS),k=h.filter(O=>!E.byId[O.id].finished).sort((O,z)=>E.byId[z.id].m-E.byId[O.id].m||O.officialS-z.officialS);E.order=[...T,...k].map(O=>O.id),E.leader=E.byId[E.order[0]];let D=u[E.order[0]];for(let[O,z]of E.order.entries()){let q=E.byId[z];if(q.finished)q.gapText=O===0?Va(u[z].officialS):`+${(u[z].officialS-c.officialS).toFixed(0)}s`;else if(O===0)q.gapText="LEADER";else{let X=E.byId[E.order[0]].finished?c:D;q.gapText=`+${Math.max(0,b-Nn(X.progress,q.m)).toFixed(1)}s`}}return y.size>400&&y.clear(),y.set(x,E),E}return{stateAt:_,orderAt:v=>_(v).order,gapM:(v,x,b)=>{let C=_(b);return Math.abs((C.byId[v]?.m??0)-(C.byId[x]?.m??0))},finishedAt:(v,x)=>_(x).byId[v]?.finished,allFinishedAt:v=>v>m,firstFinishB:M,lastFinishB:m,photoFinish:p,finishOrder:g,place:f,byId:u,R:h,rateAt:S,durationS:i.durationS}}function Va(n){let t=Math.floor(n/60),e=Math.round(n-t*60);return`${t}:${String(e).padStart(2,"0")}`}var Sv=1.3,wv=2.4,Ev=.24,Tv=16/9,jf=n=>n*180/Math.PI,Zf=(n,t=Ev)=>jf(2*Math.atan(wv/(2*t*n)));function Rh({plan:n,sim:t,backedIds:e=[],C:i,world:s,funfair:r}){let o=[],a=n.timeMap,l=T=>di(a,Math.min(...n.runners.map(k=>Nn(k.progress,T)))),h=T=>T<=0?4:t.rateAt(T),u=(T,k)=>{let D=0,O=0;for(let z=T;z<=k;z+=Math.max(.5,(k-T)/12))D+=h(z),O++;return D/Math.max(1,O)},g=t.firstFinishB,f=t.lastFinishB,c=T=>{let k=t.stateAt(Math.max(0,T)),D=k.order.filter(z=>!k.byId[z].finished),O=D[0]??k.order[0];return(D.length?D:k.order).filter(z=>Math.abs(k.byId[z].m-k.byId[O].m)<120)},d=T=>{let k=t.stateAt(Math.max(0,T)),D=k.order.filter(z=>!k.byId[z].finished),O=D[0]??k.order[0];return(D.length?D:k.order).filter(z=>Math.abs(k.byId[z].m-k.byId[O].m)<20)},M=(T,k)=>{let D=t.stateAt(Math.max(0,k));return D.order.filter(O=>!D.byId[O].finished&&Math.abs(D.byId[O].m-D.byId[T].m)<20)},m=(T,k)=>{let D=[];for(let P=0;P<=6;P++)D.push(t.stateAt(Math.max(0,T+(k-T)*P/6)));let O=D[0].order.filter(P=>!D[0].byId[P].finished&&!D.at(-1).byId[P].finished),z=[];for(let P=0;P<O.length;P++)for(let G=P+1;G<O.length;G++){let J=O[P],V=O[G],K=0;for(let Tt of D)K=Math.max(K,Math.abs(Tt.byId[J].m-Tt.byId[V].m));let ot=D[3].order.indexOf(J)+D[3].order.indexOf(V);z.push({ids:[J,V],gap:K,backed:e.includes(J)||e.includes(V),pos:ot})}let q=P=>P.sort((G,J)=>G.gap+G.pos*2-(J.gap+J.pos*2))[0],X=q(z.filter(P=>P.backed&&P.gap<=30))||q(z.filter(P=>P.gap<=40));if(X){let P=[...X.ids];for(let G of O)!P.includes(G)&&D.every(J=>{let V=X.ids.map(K=>J.byId[K].m);return J.byId[G].m>Math.min(...V)-6&&J.byId[G].m<Math.max(...V)+6})&&P.push(G);return{ids:P,kind:X.backed?"backedPair":"pair",gap:X.gap}}let U=D[3],gt=U.order.filter(P=>O.includes(P)),At=[gt[0]];for(let P=0;P<gt.length;P++){let G=gt.filter(J=>U.byId[gt[P]].m-U.byId[J].m>=0&&U.byId[gt[P]].m-U.byId[J].m<150);G.length>At.length&&(At=G)}return{ids:At.length?At:null,kind:"pack"}},p=(T,k)=>T.kind==="pack"?"drone":T.gap>24||k==="side"?"headon":"side",S=.25+8;for(let T=.25;T<30;T+=.25)if(h(T)>7){S=Math.max(S,T);break}let y=g-6;for(let T=g-12;T>S;T-=.25)if(h(T)>6){y=T;break}let _=Math.max(y+4,Math.min(g-3,l(4850))),N=Math.max(y,Math.min(_,l(4700)));o.push({type:"heli",a:-8.5,b:-3.2,hard:!0}),o.push({type:"startgo",a:-3.2,b:.25}),o.push({type:"side",a:.25,b:S,hard:!0,ids:null});let w=[],R=n.runners.find(T=>T.diversions?.length);if(R&&r){let T=R.diversions[0],k=di(a,Nn(R.progress,T.fromM))-.5,D=di(a,Nn(R.progress,T.toM))+.8;w.push({type:"side",tag:"fair",a:k,b:Math.max(k+8,D),ids:[R.id],fair:!0,prio:3})}for(let T of ol){let k=l(T);w.push({type:"headon",tag:"hill",a:k-1.5,b:k+8,prio:2})}w.sort((T,k)=>k.prio-T.prio);let A=[];for(let T of w){let k=Math.min(y,T.b),D=Math.max(S,Math.min(T.a,k-8));k-D<6||A.some(O=>D<O.b&&k>O.a)||A.push({...T,a:D,b:k})}A.sort((T,k)=>T.a-k.a);let v=(T,k)=>{let D=k-T;if(D<=.01)return;if(D<8&&o.length>=3){o.at(-1).b=k;return}let O=Math.max(1,Math.round(D/11));for(let z=0;z<O;z++){let q=T+D*z/O,X=T+D*(z+1)/O,U=m(q,X);o.push({type:p(U,o.at(-1)?.type),a:q,b:X,ids:U.ids,subject:U.kind,pack:U.kind==="pack"})}},x=S;for(let T of A){if(v(x,T.a),T.tag==="hill"){let k=m(T.a,T.b);k.kind!=="pack"&&(T.ids=k.ids,T.subject=k.kind)}o.push(T),x=T.b}v(x,y);{let T=N-y;if(T>=8){let z=Math.max(1,Math.round(T/11));for(let q=0;q<z;q++){let X=y+T*q/z,U=y+T*(q+1)/z,gt=m(X,U);o.push({type:p(gt,o.at(-1)?.type),a:X,b:U,ids:gt.ids,subject:gt.kind,pack:gt.kind==="pack"})}}let k=Math.max(y,o.at(-1).b),D=m(k,_),O={type:(D.kind==="pack","headon"),a:k,b:_,ids:D.kind==="pack"?null:D.ids,subject:D.kind};o.at(-1).type==="headon"&&o.at(-1).a>=y&&String(o.at(-1).ids)===String(O.ids)?o.at(-1).b=_:o.push(O)}if(o.at(-1).b-o.at(-1).a<6&&o.length>4){let T=o.pop();o.at(-1).b=T.b}o.push({type:"finishcam",a:_,b:f+2.5,hard:!0}),o.push({type:"celebrate",a:f+2.5,b:f+90});let b=(n.events||[]).filter(T=>(T.type==="lead_change"||T.type==="overtake"&&(e.includes(T.by)||e.includes(T.on)))&&T.broadcastS>S+2&&T.broadcastS<y-3),C=-1e9;for(let T of b){let k=T.type==="lead_change"?[T.to,T.from]:[T.by,T.on];if(T.broadcastS-C<12)continue;let D=o.findIndex(q=>T.broadcastS>=q.a&&T.broadcastS<q.b);if(D<0)continue;let O=o[D];if(["heli","startgo","finishcam","celebrate","drone"].includes(O.type)||O.interrupt||O.tag||O.hard||O.subject==="backedPair")continue;let z=O.ids||d((O.a+O.b)/2);if(!k.every(q=>z.includes(q))){if(T.broadcastS-O.a<8||O.b-T.broadcastS<8)Object.assign(O,{type:"side",ids:k,interrupt:T.type,pack:!1,subject:"pair"});else{let q=T.broadcastS-1.8;o.splice(D,1,{...O,b:q},{type:"side",a:q,b:O.b,ids:k,interrupt:T.type,subject:"pair"})}C=T.broadcastS}}for(let T of o)if(T.rate=u(Math.max(0,T.a),Math.max(.5,T.b)),T.ids=T.ids||null,T.type==="side"||T.type==="headon"||T.type==="drone"){let k=T.ids||(T.type==="drone"?c((T.a+T.b)/2):d((T.a+T.b)/2));T.type==="drone"&&!T.ids&&(T.pack=!0);let D=0;for(let O=0;O<=6;O++){let z=t.stateAt(Math.max(0,T.a+(T.b-T.a)*O/6)),q=k.map(X=>z.byId[X]).filter(X=>X&&!X.finished).map(X=>X.m);q.length&&(D=Math.max(D,Math.max(...q)-Math.min(...q)))}if(T.spread=D,T.type==="side"){T.dist=Ki.clamp(14+1.7*T.rate,18,48);let O=Zf(T.dist),z=D+7,q=jf(2*Math.atan(z/(2*Tv*T.dist)));T.fov=Ki.clamp(Math.max(O,q),10,34),T.side=E(T,k)}else T.type==="headon"?(T.dist=Ki.clamp(16+1.9*T.rate,20,52)+D*.6,T.fov=Ki.clamp(Zf(T.dist-D*.3,.2),10,30)):(T.back=30+2.2*T.rate+D*.35,T.height=16+1.9*T.rate+D*.25,T.fov=40,T.side=E(T,k))}return o;function E(T,k){let D=V=>{let K=t.stateAt(Math.max(0,V)),ot=k.map(st=>K.byId[st]).filter(Boolean),Tt=ot.reduce((st,pt)=>st+pt.x,0)/ot.length,Lt=ot.reduce((st,pt)=>st+pt.z,0)/ot.length;return[Tt,Lt]},O=D(T.a),z=D((T.a+T.b)/2),q=D(T.b),X=(z[0]-O[0])*(q[1]-z[1])-(z[1]-O[1])*(q[0]-z[0]),U=T.fair?null:X>0?1:-1;if(T.fair&&r){let V=r.anchors.center,K=[q[0]-O[0],q[1]-O[1]],ot=[-K[1],K[0]];return U=(V.x-z[0])*ot[0]+(V.z-z[1])*ot[1]>0?-1:1,U}let gt=[q[0]-O[0],q[1]-O[1]],At=Math.hypot(...gt)||1,P=[-gt[1]/At,gt[0]/At],G=T.dist||40,J=V=>s.inPark(z[0]+P[0]*G*V,z[1]+P[1]*G*V);return!J(U)&&J(-U)&&(U=-U),U}}function Jf({camera:n,C:t,sim:e,world:i,funfair:s}){let r={pos:new $,look:new $},o=new $(0,1,0),a=null,l=null,h=!0,u=null,g=new Xn,f=new Oe;function c(y,_){let N=e.stateAt(Math.max(0,_)),w=(y||N.order.slice(0,1)).map(v=>N.byId[v]).filter(Boolean),R=w.filter(v=>!v.finished);R.length&&(w=R);let A=new $;for(let v of w)A.add(new $(v.x,v.y,v.z));return A.divideScalar(Math.max(1,w.length))}function d(y,_,N){let w=c(y,_),R=c(y,_-N*1.5),A=c(y,_+N*1.5),v=new $(A.x-R.x,0,A.z-R.z);if(v.lengthSq()<1e-4){let x=y?.[0]??e.stateAt(Math.max(0,_)).order[0],b=e.stateAt(Math.max(0,_)).byId[x];v.set(b.tx,0,b.tz)}return v.normalize(),{c:w,h:v,r:new $(-v.z,0,v.x)}}let M=(y,_)=>{if(y.ids)return y.ids;if(!y._group){let N=(y.a+y.b)/2,w=e.stateAt(Math.max(0,N)),R=w.order.filter(v=>!w.byId[v].finished),A=R[0]??w.order[0];y._group=(R.length?R:w.order).filter(v=>Math.abs(w.byId[v].m-w.byId[A].m)<(y.pack?120:20)),y._group.length||(y._group=[A])}return y._group};function m(y,_){let N=i.anchors.finish,w=i.anchors.start,R,A,v=40,x=y.rate>8?2.2:1.2;switch(y.type){case"heli":{let b=(_-y.a)/Math.max(.01,y.b-y.a),C=new $(150,0,0),E=new $(w.x,w.y,w.z),T=Ch(Math.min(1,b)),k=-1.2+T*1.6,D=420-T*360;R=new $(C.x+Math.cos(k)*D,170-T*140,C.z+Math.sin(k)*D).lerp(new $(E.x-w.tx*40+w.rx*25,E.y+22,E.z-w.tz*40+w.rz*25),T*T),A=C.clone().setY(10).lerp(E,Math.min(1,T*1.3)),v=50;break}case"startgo":{let b=new $(w.x,w.y,w.z),C=new $(w.tx,0,w.tz),E=new $(-C.z,0,C.x);R=b.clone().addScaledVector(C,10.5).addScaledVector(E,2.6).add(o.clone().multiplyScalar(1.9)),A=b.clone().add(o.clone().multiplyScalar(1.3)).addScaledVector(C,-1),v=42;break}case"side":{let{c:b,h:C,r:E}=d(M(y,_),_,x);R=b.clone().addScaledVector(E,y.side*y.dist).addScaledVector(C,y.dist*.18).add(o.clone().multiplyScalar(2.5+y.dist*.2)),A=b.clone().add(o.clone().multiplyScalar(1.1)),v=y.fov;break}case"headon":{let{c:b,h:C,r:E}=d(M(y,_),_,x);R=b.clone().addScaledVector(C,y.dist).addScaledVector(E,1.5).add(o.clone().multiplyScalar(2+y.dist*.16)),A=b.clone().add(o.clone().multiplyScalar(1.15)),v=y.fov;break}case"drone":{let{c:b,h:C,r:E}=d(M(y,_),_,x*1.3);R=b.clone().addScaledVector(C,-y.back).addScaledVector(E,y.side*y.back*.5).add(o.clone().multiplyScalar(y.height)),A=b.clone().addScaledVector(C,y.back*.15),v=y.fov;break}case"finishcam":{let b=new $(N.tx,0,N.tz),C=new $(-b.z,0,b.x);y.fside||(y.fside=i.inPark(N.x+C.x*16,N.z+C.z*16)?1:-1);let E=new $(N.x,N.y+1,N.z);R=E.clone().addScaledVector(C,y.fside*15).addScaledVector(b,11).add(o.clone().multiplyScalar(1.9));let T=e.stateAt(Math.max(0,_)),k=T.order.map(z=>T.byId[z]).find(z=>!z.finished),O=T.order.map(z=>T.byId[z]).filter(z=>z.finished).sort((z,q)=>z.post-q.post)[0];if(O&&O.post<6&&(!k||k.distToFinish>45))A=new $(O.x,O.y+1.1,O.z);else{let z=k?Math.min(1,Math.max(0,k.distToFinish/150)):0;A=k?E.clone().lerp(new $(k.x,k.y+1,k.z),Math.min(1,.25+z)):E}v=22,y.smoothLook=!0;break}case"celebrate":{let b=e.stateAt(Math.max(0,_)),C=new $;for(let D of b.order)C.add(new $(b.byId[D].x,b.byId[D].y,b.byId[D].z));C.divideScalar(b.order.length);let E=new $(N.tx,0,N.tz),T=new $(-E.z,0,E.x),k=Math.sin((_-y.a)*.08)*.5;R=C.clone().addScaledVector(E,-11*Math.cos(k)).addScaledVector(T,11*Math.sin(k)).add(o.clone().multiplyScalar(2.8)),A=C.clone().add(o.clone().multiplyScalar(1.2)),v=44;break}default:{let{c:b,h:C}=d(M(y,_),_,x);R=b.clone().addScaledVector(C,-12).add(o.clone().multiplyScalar(5)),A=b.clone()}}return{pos:R,look:A,fov:v}}function p(y,_,N){let w=N.find(E=>y>=E.a&&y<E.b)||N.at(-1),R=!1;if(w!==a){let E=h||!!w.hard;l=E?null:{from:{pos:n.position.clone(),look:r.look.clone(),fov:n.fov},t0:y},R=E,h=!1,a=w,u=null}let A=m(w,y),v=t.heightAt(A.pos.x,A.pos.z)+1.2;A.pos.y<v&&(A.pos.y=v),w.smoothLook&&(u||(u=A.look.clone()),u.lerp(A.look,1-Math.exp(-2.5*_)),A.look.copy(u)),f.lookAt(A.pos,A.look,o),g.setFromRotationMatrix(f);let x=A.pos,b=g,C=A.fov;if(l){let E=(y-l.t0)/Sv;if(E>=1||E<0)l=null;else{let T=E*E*E*(E*(E*6-15)+10),k=Math.sin(Math.PI*T)*Math.min(12,l.from.pos.distanceTo(A.pos)*.12);x=l.from.pos.clone().lerp(A.pos,T).add(o.clone().multiplyScalar(k));let D=Math.min(1,E*2.2),O=l.from.look.clone().lerp(A.look,D*D*(3-2*D));f.lookAt(x,O,o),b=new Xn().setFromRotationMatrix(f),C=l.from.fov+(A.fov-l.from.fov)*T}}return r.pos.copy(A.pos),r.look.copy(A.look),n.position.copy(x),n.quaternion.copy(b),Math.abs(n.fov-C)>.001&&(n.fov=C,n.updateProjectionMatrix()),{shot:w,cut:R}}function S(y=!0){a=null,l=null,h=!!y,u=null}return{update:p,reset:S,evaluate:m,get shot(){return a},get gliding(){return!!l},cam:r}}function Ch(n){return n<.5?2*n*n:1-Math.pow(-2*n+2,2)/2}var ao=new Set(["drone","heli"]);var Av=`
.mr-hud{position:absolute;inset:0;pointer-events:none;overflow:hidden;font-family:var(--font-display,"Lilita One","Arial Black",Impact,sans-serif);color:#fff;
  --ink:#14183c;--blue:#2a62e0;--blue2:#173c9c;--yellow:#ffd23f;--pink:#ff6fb5;--tomato:#ff4d5a;--grass:#2ec27e;--u:calc(min(1vw,1.78vh));letter-spacing:.02em;
  --ease:cubic-bezier(.2,.8,.2,1);--fast:150ms;--slow:400ms;--sk:-8deg;--usk:8deg;--ol:calc(var(--u)*.37);--drop:0 calc(var(--u)*.65) 0 var(--ink);--body:var(--font-body,Nunito,"Arial Rounded MT Bold",sans-serif)}
.mr-hud *{box-sizing:border-box}
.mr-num{color:var(--yellow);-webkit-text-stroke:calc(var(--u)*.38) var(--ink);paint-order:stroke fill;text-shadow:0 calc(var(--u)*.3) 0 rgba(0,0,0,.35)}
.mr-panel{background:linear-gradient(180deg,#3d86ff,#2457c8);border:var(--ol) solid var(--ink);border-radius:calc(var(--u)*.9);transform:skewX(var(--sk));box-shadow:var(--drop)}
.mr-panel>.mr-unskew{transform:skewX(var(--usk))}
.mr-top{position:absolute;left:calc(var(--u)*2.2);top:calc(var(--u)*1.8);display:flex}
.mr-pill{display:flex;align-items:center;gap:calc(var(--u)*.7);background:rgba(20,24,60,.85);border-radius:calc(var(--u)*.9);transform:skewX(var(--sk));padding:calc(var(--u)*.35) calc(var(--u)*1.1);font-size:calc(var(--u)*1.35);line-height:1.2}
.mr-pill b{font-weight:400;color:var(--yellow)}
.mr-pill .mr-dot{width:calc(var(--u)*.7);height:calc(var(--u)*.7);border-radius:50%;background:#ff3d5a;display:inline-block}
.mr-pill .mr-sep{width:1px;align-self:stretch;background:rgba(255,255,255,.3)}
.mr-pill .mr-clk{font-family:var(--body);font-weight:800;font-size:.8em;opacity:.65}
.mr-live{background:var(--pink);padding:calc(var(--u)*.5) calc(var(--u)*1.2);font-size:calc(var(--u)*1.5);display:flex;align-items:center;gap:calc(var(--u)*.5)}
.mr-live i{width:calc(var(--u)*.9);height:calc(var(--u)*.9);border-radius:50%;background:#fff;display:inline-block;}
@keyframes mrblink{50%{opacity:.25}}
.mr-clock{padding:calc(var(--u)*.2) calc(var(--u)*1.4);font-size:calc(var(--u)*2.9);line-height:1.1;min-width:calc(var(--u)*12);text-align:center}
.mr-lap{padding:calc(var(--u)*.2) calc(var(--u)*1.2);display:flex;align-items:center;gap:calc(var(--u)*.6);font-size:calc(var(--u)*1.4)}
.mr-lap b{font-size:calc(var(--u)*2.9);font-weight:400}
.mr-dist{padding:calc(var(--u)*.3) calc(var(--u)*1.2);font-size:calc(var(--u)*1.4);display:flex;flex-direction:column;justify-content:center;min-width:calc(var(--u)*11)}
.mr-bar{height:calc(var(--u)*.7);background:rgba(0,0,0,.35);border-radius:9px;margin-top:calc(var(--u)*.3);overflow:hidden;border:2px solid var(--ink)}
.mr-bar>i{display:block;height:100%;background:var(--yellow);width:0}
.mr-tower{position:absolute;left:calc(var(--u)*2.2);top:calc(var(--u)*5.2);width:calc(var(--u)*21)}
.mr-row{position:absolute;left:0;width:100%;height:calc(var(--u)*2.9);display:flex;align-items:center;transition:transform var(--slow) var(--ease),opacity var(--slow) var(--ease)}
.mr-row.off{opacity:0}
.mr-row .mr-pos{width:calc(var(--u)*3.8);font-size:calc(var(--u)*2.2);text-align:center;line-height:1}
.mr-row .mr-pos small{font-size:.42em;margin-right:2px;vertical-align:middle;color:#fff}
.mr-row .mr-pos sup{font-size:.45em;vertical-align:top;margin-left:1px}
.mr-row .mr-card{flex:1;min-width:0;height:calc(var(--u)*2.4);display:flex;align-items:center;padding:0 calc(var(--u)*.6) 0 0;background:rgba(20,24,60,.82);border-radius:calc(var(--u)*.45);transform:skewX(var(--sk));overflow:hidden}
.mr-row .mr-card>*{transform:skewX(var(--usk))}
.mr-row .mr-chip{width:calc(var(--u)*.8);align-self:stretch;margin-right:calc(var(--u)*.6)}
.mr-row .mr-name{flex:1;min-width:0;font-size:calc(var(--u)*1.25);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.mr-row .mr-gap{font-family:var(--body);font-weight:900;font-size:calc(var(--u)*.95);color:#cfe0ff;margin-left:calc(var(--u)*.5)}
.mr-row.lead .mr-card{background:linear-gradient(90deg,rgba(255,210,63,.95),rgba(255,160,40,.92));color:var(--ink)}
.mr-row.lead .mr-gap{color:var(--ink)}
.mr-row.fin .mr-gap{color:#7dff9a}
.mr-row.lead.fin .mr-gap{color:var(--ink)}
.mr-badge{display:inline-flex;align-items:center;gap:.2em;background:var(--bc,#fff);color:var(--ink);border:calc(var(--u)*.18) solid var(--ink);border-radius:99px;font-size:calc(var(--u)*1.05);padding:.05em .55em;margin-left:calc(var(--u)*.35);line-height:1.2;box-shadow:0 calc(var(--u)*.15) 0 rgba(0,0,0,.35);white-space:nowrap}
.mr-inis{display:inline-flex;gap:calc(var(--u)*.2);margin-left:calc(var(--u)*.4);flex-shrink:0}
.mr-ini{display:inline-flex;align-items:center;justify-content:center;width:calc(var(--u)*1.25);height:calc(var(--u)*1.25);border-radius:50%;background:var(--bc);color:var(--ink);font-family:var(--body);font-weight:900;font-size:calc(var(--u)*.8);line-height:1;border:1px solid rgba(26,20,32,.6)}

.mr-tag .mr-tb{display:inline-flex;gap:calc(var(--u)*.15)}
.mr-title{position:absolute;left:41%;top:9%;width:max-content;max-width:64%;transform:translate(-50%,-30%) scale(.8);opacity:0;text-align:center;transition:opacity var(--slow) var(--ease),transform var(--slow) var(--ease)}
.mr-title.on{opacity:1;transform:translate(-50%,0) scale(1)}
.mr-title .mr-t0{display:inline-block;font-size:calc(var(--u)*1.7);background:var(--pink);padding:.1em .9em;border:calc(var(--u)*.3) solid var(--ink);border-radius:calc(var(--u)*.8);transform:skewX(var(--sk))}
.mr-title .mr-t1{display:block;white-space:normal;margin-top:calc(var(--u)*.6);font-size:calc(var(--u)*5.2);line-height:1.02;color:#fff;-webkit-text-stroke:calc(var(--u)*.45) var(--ink);paint-order:stroke fill;text-shadow:0 calc(var(--u)*.5) 0 rgba(0,0,0,.35)}
.mr-title .mr-t2{display:inline-block;margin-top:calc(var(--u)*.8);font-size:calc(var(--u)*2.1);color:var(--ink);background:var(--yellow);padding:.1em .9em;border:calc(var(--u)*.3) solid var(--ink);border-radius:calc(var(--u)*.8);transform:skewX(var(--sk))}
.mr-pcap{position:absolute;left:50%;bottom:19%;transform:translateX(-50%) skewX(var(--sk));background:var(--ink);color:#fff;border:calc(var(--u)*.3) solid #fff;padding:calc(var(--u)*.4) calc(var(--u)*2);font-size:calc(var(--u)*2.2);white-space:nowrap}
.mr-market{position:absolute;inset:0;opacity:0;transition:opacity var(--slow) var(--ease);background:radial-gradient(ellipse at center,rgba(0,0,0,0) 45%,rgba(20,10,40,.55) 100%)}
.mr-market.on{opacity:1}
.mr-market .mr-m1{position:absolute;left:60%;top:15%;transform:translate(-50%,-50%) skewX(var(--sk)) rotate(-2deg);background:linear-gradient(180deg,#3ddc84,#1f9d5a);border:var(--ol) solid var(--ink);border-radius:calc(var(--u)*1.2);padding:calc(var(--u)*.35) calc(var(--u)*1.8);font-size:calc(var(--u)*3.5);white-space:nowrap;color:#fff;-webkit-text-stroke:calc(var(--u)*.35) var(--ink);paint-order:stroke fill;box-shadow:var(--drop);}
@keyframes mrpulse{50%{transform:translate(-50%,-50%) skewX(var(--sk)) rotate(-2deg) scale(1.04)}}
.mr-market .mr-m2{position:absolute;left:60%;top:22%;transform:translateX(-50%);font-size:calc(var(--u)*2.3);-webkit-text-stroke:calc(var(--u)*.3) var(--ink);paint-order:stroke fill;white-space:nowrap}
.mr-market .mr-mt{position:absolute;right:calc(var(--u)*3);top:calc(var(--u)*25);font-size:calc(var(--u)*1.6);background:var(--ink);padding:.2em .8em;border-radius:calc(var(--u)*.6)}
.mr-map{position:absolute;right:calc(var(--u)*2.2);top:calc(var(--u)*1.8);width:calc(var(--u)*11);height:calc(var(--u)*13.5);padding:calc(var(--u)*.4);transition:opacity var(--slow) var(--ease)}
.mr-hud.mr-nomap .mr-map{opacity:0}
.mr-map canvas{position:relative;width:100%;height:100%;display:block}
.mr-mapwrap{position:absolute;inset:0;background:rgba(255,255,255,.72);border-radius:calc(var(--u)*1)}
.mr-banner{position:absolute;left:50%;top:13%;transform:translate(-50%,-50%) scale(0);text-align:center;white-space:nowrap;transition:transform var(--fast) var(--ease)}
.mr-banner.on{transform:translate(-50%,-50%) scale(1)}
.mr-banner .mr-b1{display:inline-block;box-shadow:var(--drop);padding:calc(var(--u)*.2) calc(var(--u)*1.6);font-size:calc(var(--u)*2.8);line-height:1.05;background:var(--pink);border:var(--ol) solid var(--ink);border-radius:calc(var(--u)*1.2);transform:skewX(var(--sk)) rotate(-3deg);box-shadow:var(--drop)}
.mr-banner .mr-b1 span{display:inline-block;transform:skewX(var(--usk))}
.mr-banner .mr-b2{display:block;margin-top:calc(var(--u)*.6);font-size:calc(var(--u)*1.8);-webkit-text-stroke:calc(var(--u)*.3) var(--ink);paint-order:stroke fill}
.mr-tags{position:absolute;inset:0}
.mr-tag{position:absolute;left:0;top:0;transform:translate(-50%,-100%);white-space:nowrap;display:flex;align-items:center;gap:calc(var(--u)*.3);font-size:calc(var(--u)*1.05);will-change:transform;transition:opacity var(--fast) var(--ease)}
.mr-tag .mr-tp{background:var(--ink);color:var(--yellow);border-radius:calc(var(--u)*.5);padding:0 calc(var(--u)*.45);font-size:calc(var(--u)*1.35)}
.mr-tag .mr-tn{padding:calc(var(--u)*.05) calc(var(--u)*.6);border:calc(var(--u)*.22) solid var(--ink);border-radius:calc(var(--u)*.6);-webkit-text-stroke:calc(var(--u)*.22) var(--ink);paint-order:stroke fill;box-shadow:0 calc(var(--u)*.25) 0 rgba(0,0,0,.3)}
.mr-tag:after{content:"";position:absolute;left:50%;bottom:calc(var(--u)*-.75);border:calc(var(--u)*.45) solid transparent;border-top-color:var(--ink);transform:translateX(-50%)}
.mr-card3{position:absolute;left:calc(var(--u)*5);bottom:19%;display:flex;align-items:stretch;opacity:0;transform:translateX(-30%);transition:opacity var(--slow) var(--ease),transform var(--slow) var(--ease)}
.mr-card3.on{opacity:1;transform:none}
.mr-card3 .mr-lane{width:calc(var(--u)*8);font-size:calc(var(--u)*6.5);display:flex;align-items:center;justify-content:center;border:var(--ol) solid var(--ink);border-radius:calc(var(--u)*1.2);transform:skewX(var(--sk));margin-right:calc(var(--u)*-.6);z-index:1}
.mr-card3 .mr-lane span{transform:skewX(var(--usk))}
.mr-card3 .mr-info{padding:calc(var(--u)*.8) calc(var(--u)*3) calc(var(--u)*.8) calc(var(--u)*2.4)}
.mr-card3 .mr-nick{font-size:calc(var(--u)*4.4);line-height:1;-webkit-text-stroke:calc(var(--u)*.3) var(--ink);paint-order:stroke fill}
.mr-card3 .mr-tagl{font-family:var(--body);font-weight:900;font-size:calc(var(--u)*1.55);opacity:.95;margin-top:calc(var(--u)*.4)}
.mr-count{position:absolute;left:50%;top:42%;transform:translate(-50%,-50%) scale(1);font-size:calc(var(--u)*16);opacity:0}
.mr-count.pop{animation:mrpop .8s var(--ease)}
@keyframes mrpop{0%{transform:translate(-50%,-50%) scale(2.2);opacity:0}20%{transform:translate(-50%,-50%) scale(1);opacity:1}80%{opacity:1}100%{transform:translate(-50%,-50%) scale(.8);opacity:0}}
.mr-photo{position:absolute;inset:0;opacity:0;transition:opacity var(--fast) var(--ease);background:radial-gradient(ellipse at center,rgba(0,0,0,0) 50%,rgba(0,0,0,.55) 100%)}
.mr-photo.on{opacity:1}
.mr-photo .mr-flash{position:absolute;inset:0;background:#fff;opacity:0}
.mr-photo.on .mr-flash{animation:mrflash var(--slow) var(--ease)}
@keyframes mrflash{0%{opacity:.95}100%{opacity:0}}
.mr-photo .mr-pf{position:absolute;left:50%;top:14%;transform:translateX(-50%) skewX(var(--sk));background:#fff;color:var(--ink);border:var(--ol) solid var(--ink);padding:calc(var(--u)*.4) calc(var(--u)*2.5);font-size:calc(var(--u)*4)}
.mr-photo .mr-line{position:absolute;left:0;top:0;height:calc(var(--u)*.35);background:rgba(255,40,80,.9);transform-origin:0 50%;box-shadow:0 0 6px rgba(255,40,80,.8)}
.mr-results{position:absolute;right:calc(var(--u)*3);top:50%;transform:translate(120%,-50%);transition:transform var(--slow) var(--ease);width:calc(var(--u)*30)}
.mr-results.on{transform:translate(0,-50%)}
.mr-results .mr-rh{font-size:calc(var(--u)*3);margin-bottom:calc(var(--u)*.8);padding:calc(var(--u)*.3) calc(var(--u)*1.5);display:inline-block}
.mr-results .mr-rr{display:flex;align-items:center;gap:calc(var(--u)*.8);margin:calc(var(--u)*.5) 0;font-size:calc(var(--u)*1.8);background:rgba(20,24,60,.88);border:calc(var(--u)*.25) solid var(--ink);border-radius:calc(var(--u)*.6);padding:calc(var(--u)*.3) calc(var(--u)*1);transform:skewX(var(--sk))}
.mr-results .mr-rr>*{transform:skewX(var(--usk))}
.mr-results .mr-rr .mr-num{font-size:calc(var(--u)*2.6);width:calc(var(--u)*4.2)}
.mr-results .mr-rr .mr-t{margin-left:auto;font-family:var(--body);font-weight:900}
.mr-dim .mr-tower,.mr-dim .mr-top,.mr-dim .mr-map,.mr-dimtop .mr-tower,.mr-dimtop .mr-top{opacity:0}
.mr-tower,.mr-top,.mr-map{transition:opacity var(--slow) var(--ease)}

.mr-replay{position:absolute;right:calc(var(--u)*2.2);top:calc(var(--u)*1.8);display:flex;align-items:center;gap:calc(var(--u)*.6);padding:calc(var(--u)*.35) calc(var(--u)*1.2);background:var(--tomato);border:var(--ol) solid var(--ink);border-radius:calc(var(--u)*.9);box-shadow:var(--drop);transform:skewX(var(--sk)) translateX(140%);font-size:calc(var(--u)*2);transition:transform var(--slow) var(--ease)}
.mr-replay>*{transform:skewX(var(--usk))}
.mr-replay i{width:calc(var(--u)*.9);height:calc(var(--u)*.9);border-radius:50%;background:#fff}
.mr-hud.mr-inreplay .mr-replay{transform:skewX(var(--sk)) translateX(0)}
.mr-hud.mr-inreplay .mr-map,.mr-hud.mr-inreplay .mr-tags{opacity:0}
.mr-replayframe{position:absolute;inset:0;border:calc(var(--u)*.5) solid rgba(255,77,90,.0);transition:border-color var(--slow) var(--ease);pointer-events:none}
.mr-hud.mr-inreplay .mr-replayframe{border-color:rgba(255,77,90,.55)}
.mr-wipe{position:absolute;top:-10%;bottom:-10%;left:-60%;width:45%;background:linear-gradient(90deg,var(--blue),var(--blue2));border-left:var(--ol) solid var(--ink);border-right:var(--ol) solid var(--ink);transform:skewX(var(--sk)) translateX(0);opacity:0}
.mr-wipe.go{animation:mrwipe var(--slow) var(--ease)}
@keyframes mrwipe{0%{opacity:1;transform:skewX(var(--sk)) translateX(0)}100%{opacity:1;transform:skewX(var(--sk)) translateX(420%)}}

.mr-close{position:absolute;right:calc(var(--u)*2.2);top:calc(var(--u)*1.8);display:flex;align-items:center;gap:calc(var(--u)*.6);padding:calc(var(--u)*.35) calc(var(--u)*1.1) calc(var(--u)*.35) calc(var(--u)*.5);background:rgba(20,24,60,.85);border-radius:calc(var(--u)*.9);transform:skewX(var(--sk));font-family:var(--body);font-weight:800;font-size:calc(var(--u)*1.25);opacity:0;transition:opacity var(--slow) var(--ease),top var(--slow) var(--ease),background var(--fast) var(--ease);white-space:nowrap}
.mr-close>*{transform:skewX(var(--usk))}
.mr-close.on{opacity:1}
.mr-hud:not(.mr-nomap) .mr-close{top:calc(var(--u)*16.2)}
.mr-close .mr-cc{width:calc(var(--u)*.7);align-self:stretch;border-radius:calc(var(--u)*.3)}
.mr-close b{font-family:var(--font-display,"Lilita One",sans-serif);font-weight:400;color:var(--yellow)}
.mr-close.hot{background:rgba(255,77,90,.92)}
.mr-close.hot b{color:#fff}
`,Kf=n=>`${n}<sup>${["th","st","nd","rd"][n%100>10&&n%100<14||n%10>3?0:n%10]}</sup>`,Rv=n=>`${n}${["th","st","nd","rd"][n%100>10&&n%100<14||n%10>3?0:n%10]}`,Cv=n=>{n=Math.max(0,n);let t=Math.floor(n/60),e=Math.floor(n%60);return`${t}:${String(e).padStart(2,"0")}`},lo=n=>String(n??"").replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]),Iv=n=>{let t=parseInt(n.slice(1),16);return(t>>16&255)*.299+(t>>8&255)*.587+(t&255)*.114>165?"#1a1420":"#ffffff"};function tu(n,{runners:t,backedBy:e={},course:i,park:s,C:r}){if(!document.getElementById("mr-hud-css")){let tt=document.createElement("style");tt.id="mr-hud-css",tt.textContent=Av,document.head.appendChild(tt)}let o=document.createElement("div");o.className="mr-hud mr-dim",o.innerHTML=`
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
    <div class="mr-results"></div>
    <div class="mr-close"><i class="mr-cc"></i><span><b class="mr-cn"></b> <span class="mr-ct"></span></span></div><div class="mr-replayframe"></div><div class="mr-replay"><i></i><span>REPLAY</span></div><div class="mr-wipe"></div>`,n.appendChild(o);let a=tt=>o.querySelector(tt),l={};o.querySelectorAll("[data-k]").forEach(tt=>l[tt.dataset.k]=tt);let h=a(".mr-tower"),u={},g={};for(let tt of t){let j=document.createElement("div");j.className="mr-row",j.innerHTML=`<div class="mr-pos mr-num">1</div><div class="mr-card"><div class="mr-chip" style="background:${tt.colour.primary};border-right:4px solid ${tt.colour.secondary}"></div><div class="mr-name">${lo(Es(tt))}</div><span class="mr-inis"></span><div class="mr-gap"></div></div>`,h.appendChild(j),u[tt.id]={el:j,pos:j.querySelector(".mr-pos"),gap:j.querySelector(".mr-gap"),last:""};let mt=document.createElement("div");mt.className="mr-tag",mt.innerHTML=`<span class="mr-tp mr-num"></span><span class="mr-tb"></span><span class="mr-tn" style="background:${tt.colour.primary};color:#fff">${lo(Es(tt))}</span>`,mt.style.opacity="0",a(".mr-tags").appendChild(mt),g[tt.id]={el:mt,pos:mt.querySelector(".mr-tp"),x:0,y:0,vis:!1}}function f(tt={}){for(let j of t){let mt=(tt[j.id]||[]).filter(B=>B!=null&&B!==""),Y=mt.map(B=>`<span class="mr-ini" style="--bc:${Ih(B)}">${lo(kv(B))}</span>`).join(""),kt=u[j.id].el;kt.classList.toggle("backed",mt.length>0),kt.querySelector(".mr-inis").innerHTML=Y,g[j.id].el.querySelector(".mr-tb").innerHTML=Y}}f(e);let c=a(".mr-map canvas"),d=c.getContext("2d"),M=null,m=340,p=420;c.width=m,c.height=p;let S=i.points,y=1e9,_=1e9,N=-1e9,w=-1e9;for(let tt of S)y=Math.min(y,tt[0]),N=Math.max(N,tt[0]),_=Math.min(_,tt[2]),w=Math.max(w,tt[2]);if(i.funfair){let[tt,j]=i.funfair.center,mt=i.funfair.radius*.6;y=Math.min(y,tt-mt),N=Math.max(N,tt+mt),_=Math.min(_,j-mt),w=Math.max(w,j+mt)}for(let tt in r.diversions)for(let j of r.diversions[tt])for(let mt of j.path)y=Math.min(y,mt[0]),N=Math.max(N,mt[0]),_=Math.min(_,mt[1]),w=Math.max(w,mt[1]);let R=26,A=Math.min((m-R*2)/(N-y),(p-R*2)/(w-_)),v=(m-(N-y)*A)/2,x=(p-(w-_)*A)/2,b=tt=>v+(tt-y)*A,C=tt=>x+(tt-_)*A;function E(){let tt=document.createElement("canvas");tt.width=m,tt.height=p;let j=tt.getContext("2d"),mt=(bt,Pt,Q,at)=>{j.beginPath(),bt.forEach((lt,xt)=>xt?j.lineTo(b(lt[0]),C(lt[1])):j.moveTo(b(lt[0]),C(lt[1]))),j.strokeStyle=Pt,j.lineWidth=Q,j.lineJoin=j.lineCap="round",j.setLineDash(at||[]),j.stroke(),j.setLineDash([])},Y=(bt,Pt)=>{for(let Q of s.features)Q.kind===bt&&Q.closed&&(j.beginPath(),Q.pts.forEach((at,lt)=>lt?j.lineTo(b(at[0]),C(at[1])):j.moveTo(b(at[0]),C(at[1]))),j.fillStyle=Pt,j.fill())},kt=s.features.filter(bt=>bt.kind==="park").sort((bt,Pt)=>Pt.pts.length-bt.pts.length)[0];j.save(),j.beginPath(),kt.pts.forEach((bt,Pt)=>Pt?j.lineTo(b(bt[0]),C(bt[1])):j.moveTo(b(bt[0]),C(bt[1]))),j.fillStyle="#9be27a",j.fill(),j.restore(),Y("water","#49a6ff"),Y("track","#ff7a5c");for(let bt in r.diversions)for(let Pt of r.diversions[bt])mt(Pt.path,"#c79a5a",4,[6,6]);let B=[];for(let bt=0;bt<=r.LAP1_END_DRAW;bt+=10)B.push(r.baseXZ(bt));mt(B,"#1a1420",11),mt(B,"#8fa0c4",6);let L=[];for(let bt=r.MAP_TO-80;bt<=r.finishM;bt+=10)L.push(r.baseXZ(bt));mt(L,"#1a1420",11),mt(L,"#8fa0c4",6);let ct=r.rawExt(r.finishM);return j.fillStyle="#fff",j.strokeStyle="#1a1420",j.lineWidth=3,j.fillRect(b(ct[0])-7,C(ct[1])-7,14,14),j.strokeRect(b(ct[0])-7,C(ct[1])-7,14,14),j.fillStyle="#1a1420",j.fillRect(b(ct[0])-7,C(ct[1])-7,7,7),j.fillRect(b(ct[0]),C(ct[1]),7,7),tt}M=E();function T(){M=E()}let k=0,D=0,O=[],z=a(".mr-banner");function q(){for(;O.length&&D-O[0].at>2;)O.shift();let tt=O.shift();tt&&(z.querySelector(".mr-b1 span").textContent=tt.text,z.querySelector(".mr-b1").style.background=tt.colour,z.querySelector(".mr-b2").textContent="",z.classList.remove("on"),z.offsetWidth,z.classList.add("on"),k=Math.min(1.5,tt.secs))}function X(tt,j="",mt="#ff3d8b",Y=1.4){O.length>=3&&O.shift(),O.push({text:tt,colour:mt,secs:Y,at:D}),k<=0&&q()}let U="";function gt(tt,j){if(D+=tt,k>0?(k-=tt,k<=0&&(z.classList.remove("on"),k=-.25)):k<0&&(k=Math.min(0,k+tt),k===0&&q()),!!j){if(j.map!=null&&o.classList.toggle("mr-nomap",!j.map),"closing"in j){let mt=j.closing,Y=a(".mr-close");Y.classList.toggle("on",!!mt),mt&&(Y.classList.toggle("hot",!!mt.hot),Y.querySelector(".mr-cc").style.background=mt.colour,Y.querySelector(".mr-cn").textContent=mt.name,Y.querySelector(".mr-ct").textContent=mt.text==="ALONGSIDE!"?"ALONGSIDE!":mt.text)}if(j.raceS!=null&&(l.clock.textContent=Cv(j.raceS)),j.leaderM!=null&&(l.lap.textContent=j.leaderM>=2500?"2":"1",l.dist.textContent=`${(Math.min(5e3,j.leaderM)/1e3).toFixed(1)} KM`),j.order){let mt=h.clientHeight||0,Y=(h.querySelector(".mr-row")?.offsetHeight||40)+6,kt=0;j.order.forEach((B,L)=>{let ct=u[B.id];if(!ct||(ct.el.classList.toggle("off",!!B.hidden),B.hidden))return;kt===3&&(kt+=.35),ct.el.style.transform=`translateY(${kt*Y}px)`,kt++;let Pt=`${L}|${B.gapText}|${B.finished}`+(B.posHtml||"");Pt!==ct.last&&(ct.last=Pt,ct.pos.innerHTML=B.posHtml??Kf(L+1),ct.gap.textContent=B.gapText,ct.el.classList.toggle("lead",L===0&&!B.posHtml),ct.el.classList.toggle("fin",!!B.finished))})}if(j.tags)for(let mt of j.tags){let Y=g[mt.id];Y&&(mt.visible!==Y.vis&&(Y.vis=mt.visible,Y.el.style.opacity=mt.visible?"1":"0"),mt.visible&&(Y.el.style.transform=`translate(${mt.x}px, ${mt.y}px) translate(-50%,-100%) scale(${mt.scale??1})`,Y.p!==mt.pos&&(Y.p=mt.pos,Y.pos.textContent=mt.pos?Rv(mt.pos):"",Y.pos.style.display=mt.pos?"":"none")))}if(j.dots){d.clearRect(0,0,m,p),d.drawImage(M,0,0);for(let mt of[...j.dots].reverse())d.beginPath(),d.arc(b(mt.x),C(mt.z),mt.lead?11:9,0,7),d.fillStyle=mt.colour,d.fill(),d.lineWidth=3.5,d.strokeStyle="#1a1420",d.stroke(),mt.focus&&(d.beginPath(),d.arc(b(mt.x),C(mt.z),15,0,7),d.strokeStyle="#fff",d.lineWidth=3,d.stroke());j.camDot&&(d.save(),d.translate(b(j.camDot.x),C(j.camDot.z)),d.rotate(j.camDot.a),d.fillStyle="rgba(26,20,32,.6)",d.beginPath(),d.moveTo(0,0),d.lineTo(-10,-22),d.lineTo(10,-22),d.fill(),d.restore())}}}function At(tt){o.classList.toggle("mr-dim",!!tt)}function P(tt){o.classList.toggle("mr-dimtop",!!tt)}function G(){k=0,O.length=0,z.classList.remove("on")}function J(tt){let j=a(".mr-card3");if(!tt){j.classList.remove("on");return}j.querySelector(".mr-lane span").textContent=tt.lane??"",j.querySelector(".mr-lane").style.background=tt.colour.primary,j.querySelector(".mr-info").style.background=`linear-gradient(180deg, ${tt.colour.primary}, ${Lv(tt.colour.primary,-.25)})`,j.querySelector(".mr-nick").textContent=tt.nickname,j.querySelector(".mr-nick").style.color="#fff",j.querySelector(".mr-tagl").textContent=tt.tagline||"",j.querySelector(".mr-tagl").style.color=Iv(tt.colour.primary)==="#ffffff"?"#fff":"#1a1420",j.classList.remove("on"),j.offsetWidth,j.classList.add("on")}function V(tt){let j=a(".mr-count");j.textContent=tt,j.classList.remove("pop"),j.offsetWidth,j.classList.add("pop")}function K(){let tt=a(".mr-wipe");tt.classList.remove("go"),tt.offsetWidth,tt.classList.add("go")}function ot(tt){let j=o.classList.contains("mr-inreplay");o.classList.toggle("mr-inreplay",!!tt),!!tt!==j&&K()}function Tt(tt,j=""){a(".mr-photo").classList.toggle("on",!!tt),a(".mr-pcap").textContent=j,a(".mr-pcap").style.display=j?"":"none"}function Lt(tt,j="Place your halfway bets!"){a(".mr-market").classList.toggle("on",!!tt),a(".mr-market .mr-m2").textContent=j}function st(tt,{title:j="",kicker:mt="",theme:Y=""}={}){let kt=a(".mr-title");if(tt){kt.querySelector(".mr-t0").textContent=mt,kt.querySelector(".mr-t1").textContent=j;let B=kt.querySelector(".mr-t2");B.textContent=Y,B.style.display=Y?"":"none",kt.querySelector(".mr-t0").style.display=mt?"":"none"}kt.classList.toggle("on",!!tt)}function pt(tt,j){let mt=j[0]-tt[0],Y=j[1]-tt[1],kt=Math.hypot(mt,Y)||1,B=mt/kt,L=Y/kt,ct=tt[0]-B*kt*.6,bt=tt[1]-L*kt*.6,Pt=a(".mr-photo .mr-line");Pt.style.width=`${kt*2.2}px`,Pt.style.transform=`translate(${ct}px, ${bt}px) rotate(${Math.atan2(L,B)}rad)`}function H(tt){let j=a(".mr-results");if(!tt){j.classList.remove("on");return}j.innerHTML='<div class="mr-panel mr-rh"><div class="mr-unskew">RESULTS</div></div>'+tt.map(mt=>`<div class="mr-rr"><span class="mr-num">${Kf(mt.place)}</span><span style="width:calc(var(--u)*1.2);height:calc(var(--u)*2.2);background:${mt.colour};border:2px solid #1a1420;border-radius:4px"></span><span>${lo(mt.nickname)}</span><span class="mr-t">${lo(mt.timeText||"")}</span></div>`).join(""),requestAnimationFrame(()=>j.classList.add("on"))}function $t(){o.remove()}return{root:o,update:gt,setBackedBy:f,replay:ot,wipe:K,redrawMap:T,showBanner:X,clearBanner:G,setDim:At,setDimTop:P,introCard:J,countdown:V,photo:Tt,photoLine:pt,results:H,market:Lt,titleCard:st,dispose:$t}}function Es(n){if(n.shortName)return n.shortName;let t=String(n.nickname||n.id).replace(/^the\s+/i,"");if(t.length<=14)return t;let e=t.split(/\s+/),i=e.slice(-2).join(" ");return i.length<=14?i:e.at(-1).slice(0,14)}var Qf=["#ffd23f","#ff8fc8","#7fe0ff","#9dff8a","#ffb067","#c7a6ff"],Ga=new Map;function Ih(n){return Ga.has(n)||Ga.set(n,Ga.size),Qf[Ga.get(n)%Qf.length]}var Pv=n=>/\p{Extended_Pictographic}/u.test(String(n));function kv(n){let t=String(n).trim();if(Pv(t))return[...t][0];let e=t.split(/\s+/).filter(Boolean);return(e.length>1&&e[0].length<=3?e[0][0]+e[1][0]:t[0]||"?").toUpperCase()}function Lv(n,t){let e=parseInt(n.slice(1),16),i=e>>16&255,s=e>>8&255,r=e&255,o=a=>Math.max(0,Math.min(255,Math.round(t<0?a*(1+t):a+(255-a)*t)));return`rgb(${o(i)},${o(s)},${o(r)})`}var Wa=(n,t,e=12,i=!0)=>gn(256,256,(s,r,o)=>{for(let a=0;a<e;a++)s.fillStyle=a%2?n:t,i?s.fillRect(a*r/e,0,r/e+1,o):s.fillRect(0,a*o/e,r,o/e+1)});function eu(n,t,e,i){let s=Bn(42),r=new Me;n.add(r);let o=[],a=[],l=(C,E=3)=>(ai(C,E,void 0,30),C),h=(C,E,T=3)=>Ie(C,E,{ol:T,olRef:30}),u=[];for(let C=0;C<i.path.length;C++){let E=i.path[C],T=e.anchors.nearestOnRibbon(E[0],E[1]),k=Math.hypot(E[0]-T[0],E[1]-T[1]);u.push({x:(E[0]+T[0])/2,z:(E[1]+T[1])/2,gap:k})}let g=0;u.forEach((C,E)=>{E&&(g+=Math.hypot(C.x-u[E-1].x,C.z-u[E-1].z)),C.s=g});let f=g,c=C=>{let E=0;for(;E<u.length-2&&u[E+1].s<C;)E++;let T=u[E],k=u[E+1],D=Math.max(0,Math.min(1,(C-T.s)/Math.max(1e-6,k.s-T.s))),O=T.x+(k.x-T.x)*D,z=T.z+(k.z-T.z)*D,q=Math.hypot(k.x-T.x,k.z-T.z)||1;return{x:O,z,gap:T.gap+(k.gap-T.gap)*D,tx:(k.x-T.x)/q,tz:(k.z-T.z)/q,y:t.heightAt(O,z)}},d=u.filter(C=>C.gap>26),M=d.length?d[0].s:f*.25,m=d.length?d.at(-1).s:f*.75,p=C=>Array.from({length:C},(E,T)=>c(M+(T+.5)/C*(m-M))),S=(C,E,T=0)=>(C.position.set(E.x,E.y-.1,E.z),C.rotation.y=Math.atan2(E.tx,E.tz)+T,r.add(C),C),y={center:c((M+m)/2),rides:[]},_=p(7);{let C=_.slice(1,6).sort((V,K)=>K.gap-V.gap)[0],E=new Me,T=17,k=T+2.6,D=new ve(.35,.5,k/Math.cos(.32)+1,8);for(let V of[-1,1])for(let K of[-1,1]){let ot=h(D,yt("#ffffff"));ot.position.set(V*1.8,k/2,K*Math.tan(.32)*k/2),ot.rotation.x=-K*.32,E.add(ot)}let O=h(new ke(6,1,8,2,.3),yt("#2e9bff"));O.position.y=.5,E.add(O);let z=new Me;z.position.y=k,E.add(z);let q=h(new on(T,.45,8,64),yt("#ff3d8b"));q.rotation.y=Math.PI/2,q.position.x=1.2,z.add(q);let X=h(new on(T,.45,8,64),yt("#ff3d8b"));X.rotation.y=Math.PI/2,X.position.x=-1.2,z.add(X);let U=h(new ve(1.3,1.3,3.2,16).rotateZ(Math.PI/2),yt("#ffd23f"));z.add(U);let gt=16,At=[],P=[];for(let V=0;V<gt;V++){let K=V/gt*Math.PI*2,ot=h(new Be(.18,T,.18).translate(0,T/2,0),yt("#ffffff"),2);ot.rotation.x=K,ot.position.x=1.2,z.add(ot);let Tt=ot.clone();Tt.position.x=-1.2,z.add(Tt);let Lt=new Me;Lt.position.set(0,Math.cos(K)*T,Math.sin(K)*T),z.add(Lt);let st=new Me;Lt.add(st);let pt=["#ffd23f","#3ddc84","#2e9bff","#ff8a3d","#b07bff"][V%5],H=h(new ke(1.7,1.3,1.5,2,.35),yt(pt));H.position.y=-1.3,st.add(H);let $t=h(new nn(1.2,.7,4).rotateY(Math.PI/4),yt("#ffffff"),2);$t.position.y=-.1,st.add($t),At.push(Lt);for(let tt=0;tt<3;tt++){let j=K+tt/3*(Math.PI*2/gt);P.push([1.2,Math.cos(j)*T,Math.sin(j)*T],[-1.2,Math.cos(j)*T,Math.sin(j)*T])}}let G=new fn(new Ce(.32,8,6),new Fn({color:16777215}),P.length),J=new We;P.forEach((V,K)=>{J.position.set(...V),J.updateMatrix(),G.setMatrixAt(K,J.matrix),G.setColorAt(K,new de(["#fff27a","#ff7ac8","#7affff"][K%3]))}),z.add(G),S(E,C,0),a.push(V=>{z.rotation.x=V*.18;for(let K of At)K.rotation.x=-V*.18}),y.rides.push({kind:"wheel",obj:E,pos:new $(C.x,C.y+k,C.z),r:T}),C.used=!0}{let C=_.filter(P=>!P.used).sort((P,G)=>G.gap-P.gap)[0];C.used=!0;let E=new Me,T=Math.min(6.5,C.gap*.28);E.scale.setScalar(1.45);let k=Wa("#ffffff","#ff4f6d",16);o.push(k);let D=h(new ve(T,T+.3,.9,32),yt("#ffffff",{map:k}));D.position.y=.45,E.add(D);let O=new Me;E.add(O);let z=h(new ve(.7,.7,5,16),yt("#ffd23f"));z.position.y=3,O.add(z);let q=Wa("#ffd23f","#ff3d8b",16);o.push(q);let X=h(new nn(T+.8,2.8,16),yt("#ffffff",{map:q}));X.position.y=6.6,O.add(X);let U=h(new ve(T+.8,T+.8,.7,16,1,!0),yt("#2e9bff",{side:cn}));U.position.y=4.9,O.add(U);let gt=h(new Ce(.5,12,8),yt("#ff3d8b"));gt.position.y=8.2,O.add(gt);let At=[];for(let P=0;P<8;P++){let G=P/8*Math.PI*2,J=T*.72,V=new Me;V.position.set(Math.cos(G)*J,0,Math.sin(G)*J),V.rotation.y=-G,O.add(V);let K=h(new ve(.06,.06,4.2,6),yt("#ffd23f"),1.5);K.position.y=2.9,V.add(K);let ot=new Me;V.add(ot);let Tt=["#ffffff","#ffd6f0","#d6f0ff","#fff2b0"][P%4],Lt=h(new ke(.7,.7,1.6,2,.3),yt(Tt));ot.add(Lt);let st=h(new ke(.45,.9,.5,2,.2),yt(Tt));st.position.set(0,.55,.7),st.rotation.x=.4,ot.add(st);let pt=h(new ke(.45,.45,.8,2,.2),yt(Tt));pt.position.set(0,.95,1.05),ot.add(pt);let H=h(new ke(.15,.8,.3,1,.06),yt(["#ff3d8b","#2e9bff","#3ddc84","#ff8a3d"][P%4]),2);H.position.set(0,.75,.55),H.rotation.x=.4,ot.add(H);let $t=h(new ke(.75,.2,.6,1,.08),yt("#ff3d8b"),2);$t.position.y=.4,ot.add($t);for(let[tt,j]of[[-.22,.55],[.22,.55],[-.22,-.55],[.22,-.55]]){let mt=h(new Be(.16,.7,.16),yt(Tt),1.5);mt.position.set(tt,-.55,j),mt.rotation.x=j>0?-.5:.5,ot.add(mt)}ot.rotation.y=Math.PI/2,At.push({horse:ot,ph:P*.8})}S(E,C),a.push(P=>{O.rotation.y=P*.6;for(let G of At)G.horse.position.y=2+Math.sin(P*2.2+G.ph)*.35}),y.rides.push({kind:"carousel",obj:E,pos:new $(C.x,C.y+6,C.z),r:T*1.45})}{let C=_.filter(P=>!P.used).sort((P,G)=>G.gap-P.gap)[0];C.used=!0;let E=new Me,T=15;E.scale.setScalar(1.5);let k=Wa("#ff3d3d","#ffffff",10,!1);o.push(k);let D=h(new ve(1.6,2.6,T,16),yt("#ffffff",{map:k}));D.position.y=T/2,E.add(D);let O=h(new nn(2.6,3.4,16),yt("#2e9bff"));O.position.y=T+1.7,E.add(O);let z=h(new ve(.06,.06,2,6),yt("#ffffff"),1.5);z.position.y=T+4.2,E.add(z);let q=h(new Tn(1.2,.7).translate(.6,0,0),yt("#ffd23f",{side:cn}),1.5);q.position.y=T+4.8,E.add(q);let X=[],U=3.2;for(let P=0;P<=160;P++){let G=P/160,J=G*U*Math.PI*2,V=2.6+(1-G)*-.8+1.6;X.push(new $(Math.cos(J)*V,T-1-G*(T-2),Math.sin(J)*V))}let gt=h(new Pa(new Zr(X),220,.55,8,!1),yt("#ffd23f"));gt.scale.y=1,E.add(gt);let At=h(new ke(3,.3,2,2,.1),yt("#3ddc84"),2);At.position.set(X.at(-1).x+1,.15,X.at(-1).z),E.add(At),S(E,C),a.push(P=>{q.rotation.y=Math.sin(P*3)*.4}),y.rides.push({kind:"helter",obj:E,pos:new $(C.x,C.y+12,C.z),r:6})}let N=[["CANDYFLOSS","#ff9bd2"],["HOOK-A-DUCK","#57c7ff"],["DOUGHNUTS","#ffb347"],["COCONUT SHY","#8ee86b"],["TOFFEE APPLES","#ff5d5d"],["HOOK-A-DUCK","#57c7ff"]],w=[];[..._.filter(C=>!C.used),...p(13).filter((C,E)=>E%2===1)].slice(0,7).forEach((C,E)=>{let[T,k]=N[E%N.length],D=new Me,O=E%2?1:-1,z=h(new ke(4.2,2.4,3,2,.2),yt("#fff6e0"));z.position.y=1.2,D.add(z);let q=h(new ke(4.4,1.1,.8,2,.15),yt(k));q.position.set(0,.55,1.7),D.add(q);let X=Wa("#ffffff",k,10);o.push(X);let U=h(new Be(4.8,.18,2.4),yt("#ffffff",{map:X}));U.position.set(0,2.9,1.4),U.rotation.x=.32,D.add(U);for(let K of[-1,1]){let ot=h(new ve(.09,.09,2.6,6),yt("#ffffff"),1.5);ot.position.set(K*2.2,1.6,2.4),D.add(ot)}let gt=li(512,128,(K,ot,Tt)=>{K.fillStyle="#1a1420",sn(K,0,0,ot,Tt,30),K.fill(),K.fillStyle=k,sn(K,8,8,ot-16,Tt-16,24),K.fill(),yn(K,T,ot/2,Tt/2+4,T.length>11?52:64,"#ffffff","#1a1420",.2)},o),At=Ie(new ke(4.2,1.05,.3,2,.1),[yt(k),yt(k),yt(k),yt(k),yt("#ffffff",{map:gt}),yt("#ffffff",{map:gt})],{ol:2.5,olRef:30});if(At.position.set(0,3.7,.4),D.add(At),T==="CANDYFLOSS")for(let K=0;K<4;K++){let ot=h(new un(.32,1),yt("#ff9bd2"),1.5);ot.position.set(-1.4+K*.9,1.45,1.75),D.add(ot)}if(T==="HOOK-A-DUCK"){let K=h(new ve(1.6,1.6,.6,20),yt("#57c7ff"),2);K.position.set(0,.3,3.6),D.add(K);let ot=new Me;ot.position.set(0,.7,3.6),D.add(ot);for(let Tt=0;Tt<6;Tt++){let Lt=Tt/6*Math.PI*2,st=h(new Ce(.22,10,8),yt("#ffd23f"),1.5);st.position.set(Math.cos(Lt)*1.1,0,Math.sin(Lt)*1.1);let pt=h(new Ce(.14,8,6),yt("#ffd23f"),1.2);pt.position.set(0,.22,.12),st.add(pt),ot.add(st)}w.push(ot)}let P=e.anchors.nearestOnRibbon(C.x,C.z),G=Math.atan2(P[0]-C.x,P[1]-C.z),J=Math.min(C.gap*.3,7)*O,V=S(D,{...C,x:C.x+C.tz*J,z:C.z-C.tx*J,y:t.heightAt(C.x+C.tz*J,C.z-C.tx*J)});V.rotation.y=G+(O>0?0:Math.PI)*0}),a.push(C=>{for(let E of w)E.rotation.y=C*.8});{let C=[],E=[],T=[],k=[],D=[];for(let gt of[-1,1]){let At=null;for(let P=M-10;P<=m+10;P+=9){let G=c(P),J=(G.gap/2-6)*gt,V=G.x+G.tz*J,K=G.z-G.tx*J,ot=t.heightAt(V,K),Tt=new $(V,ot+4.2,K),Lt=h(new ve(.08,.1,4.3,6),yt("#ffffff"),1.5);if(Lt.position.set(V,ot+2.1,K),r.add(Lt),At)for(let st=0;st<=10;st++){let pt=st/10,H=At.clone().lerp(Tt,pt);H.y-=Math.sin(pt*Math.PI)*.7,C.push(H),st<10&&(st%2?(E.push(H.clone()),T.push(["#fff27a","#ff7ac8","#7affff","#9dff7a"][(st+Math.round(P))%4])):(k.push({v:H.clone(),a:Math.atan2(-(Tt.z-At.z),Tt.x-At.x)}),D.push(["#ff3d8b","#ffd23f","#2e9bff","#3ddc84","#ff8a3d"][(st+Math.round(P/9))%5])))}At=Tt}}let O=new We,z=new fn(new Ce(.16,8,6),new Fn({color:16777215}),E.length);E.forEach((gt,At)=>{O.position.copy(gt),O.updateMatrix(),z.setMatrixAt(At,O.matrix),z.setColorAt(At,new de(T[At]))}),r.add(z);let q=new Xe;q.setAttribute("position",new Ae([-.32,0,0,.32,0,0,0,-.65,0],3)),q.setAttribute("normal",new Ae([0,0,1,0,0,1,0,0,1],3));let X=new fn(q,yt("#ffffff",{side:cn}),k.length);k.forEach((gt,At)=>{O.position.copy(gt.v),O.rotation.set(0,gt.a,0),O.updateMatrix(),X.setMatrixAt(At,O.matrix),X.setColorAt(At,new de(D[At]))}),r.add(X);let U=[];for(let gt=0;gt+1<C.length;gt++)C[gt].distanceTo(C[gt+1])<3&&U.push(C[gt],C[gt+1]);r.add(new ar(new Xe().setFromPoints(U),new _s({color:3355443}))),a.push(gt=>{z.material.color.setScalar(.85+.15*Math.sin(gt*6))})}{let C=c(M-4),E=li(1024,256,(k,D,O)=>{k.fillStyle="#1a1420",sn(k,0,0,D,O,60),k.fill(),k.fillStyle="#ff3d8b",sn(k,10,10,D-20,O-20,52),k.fill(),yn(k,"\u2605 FUNFAIR \u2605",D/2,O/2+6,120,"#ffe14d","#1a1420",.18)},o),T=Ie(new ke(10,2.4,.4,2,.15),[yt("#ff3d8b"),yt("#ff3d8b"),yt("#ff3d8b"),yt("#ff3d8b"),yt("#ffffff",{map:E}),yt("#ffffff",{map:E})],{ol:3,olRef:30});T.position.set(C.x,C.y+7.5,C.z),T.rotation.y=Math.atan2(C.tx,C.tz)+Math.PI/2,r.add(T);for(let k of[-1,1]){let D=h(new ve(.25,.3,7.6,8),yt("#ffd23f"));D.position.set(C.x+C.tz*4.5*k,C.y+3.8,C.z-C.tx*4.5*k),r.add(D)}}let A=[];for(let C=0;C<60;C++){let E=M+s()*(m-M),T=c(E),k=(s()-.5)*(T.gap-16),D=T.x+T.tz*k,O=T.z-T.tx*k;A.push({x:D,y:t.heightAt(D,O),z:O,yaw:s()*6.28})}function v(C,E){for(let T of u){if(T.s<M-20||T.s>m+20)continue;let k=Math.max(6,T.gap/2-4);if((C-T.x)**2+(E-T.z)**2<k*k)return!0}return!1}function x(C){for(let E of a)E(C)}function b(){r.traverse(C=>{C.geometry&&C.geometry.dispose()});for(let C of o)C.dispose?.();n.remove(r)}return{group:r,update:x,dispose:b,anchors:y,crowd:A,at:c,s0:M,s1:m,contains:v}}function nu(n,t,e,i,s,{camera:r,offsetX:o=3.2}){let a=new Me;n.add(a);let l=[],h=t.sample(t.finishM+28),u=new $(h.tx,0,h.tz),g=new $(h.rx,0,h.rz),f=new $(h.x,t.heightAt(h.x,h.z),h.z),c=Math.atan2(u.x,u.z);a.position.copy(f),a.rotation.y=c;let d=[{place:2,x:-2.3,hgt:1.3,col:"#c9d3e6"},{place:1,x:0,hgt:1.9,col:"#ffd23f"},{place:3,x:2.3,hgt:.9,col:"#e59a5c"}];for(let E of d){let T=li(256,256,(D,O,z)=>{D.fillStyle="#2e6fe0",D.fillRect(0,0,O,z),D.fillStyle=E.col,D.fillRect(0,0,O,26),yn(D,String(E.place),O/2,z/2+14,170,E.col,"#1a1420",.16)},l),k=Ie(new ke(2.25,E.hgt,2,3,.12),[yt("#2e6fe0"),yt("#2e6fe0"),yt(E.col),yt("#2e6fe0"),yt("#ffffff",{map:T}),yt("#2e6fe0")],{ol:3.5,olRef:12});k.position.set(E.x,E.hgt/2,0),a.add(k),E.top=E.hgt}let M=li(1024,256,(E,T,k)=>{E.fillStyle="#1a1420",sn(E,0,0,T,k,50),E.fill(),E.fillStyle="#ff3d8b",sn(E,10,10,T-20,k-20,42),E.fill(),yn(E,"MARKRUN CHAMPIONS",T/2,k/2+6,80,"#ffffff","#1a1420",.16)},l),m=Ie(new ke(9,2.2,.3,2,.1),[yt("#ff3d8b"),yt("#ff3d8b"),yt("#ff3d8b"),yt("#ff3d8b"),yt("#ffffff",{map:M}),yt("#ffffff",{map:M})],{ol:3,olRef:14});m.position.set(0,5.6,-2.4),a.add(m);for(let E of[-1,1]){let T=Ie(new ve(.14,.16,5.6,8),yt("#ffffff"),{ol:2,olRef:14});T.position.set(E*4.3,2.8,-2.4),a.add(T)}let p=s.length,S=[];for(let E of s){let T=i[E.runnerId];if(!T)continue;let k=d.find(z=>z.place===E.place),D=k?new $(k.x,k.top,.1):null,O;if(E.place===1?O=["celebrate","jump"]:E.place===2?O=["pose","flex"]:E.place===3?O=["celebrate","fist"]:E.place===p&&p>3?O=["celebrate","collapse"]:O=["celebrate","shrug"],!D){S.push({rr:T,o:E,pose:O});continue}y(T,D,O)}S.forEach((E,T)=>{let k=T%2?1:-1,D=Math.floor(T/2),O=E.pose[1]==="collapse",z=new $(k*(O?4.6:4.2+D*1.6),0,O?1.6:.6+D*.8);y(E.rr,z,E.pose,O?-k*Math.PI/2:0)});function y(E,T,k,D=0){let O=T.clone().applyAxisAngle(new $(0,1,0),c).add(f);T.y===0&&(O.y=t.heightAt(O.x,O.z)+.05),E.root.position.copy(O),E.root.rotation.set(0,c+D,0),E.set(...k),E.setPop(null)}let _=Bn(3),N=420,w=new fn(new Tn(.16,.26),new Fn({side:cn}),N),R=[],A=["#ff3d8b","#ffd23f","#2e9bff","#3ddc84","#ff8a3d","#ffffff","#b07bff"];for(let E=0;E<N;E++)R.push({x:(_()-.5)*14,y:_()*12,z:(_()-.5)*8,vy:1+_()*1.6,sp:_()*6,ph:_()*6.28}),w.setColorAt(E,new de(A[E%A.length]));w.frustumCulled=!1,a.add(w);let v=new We,x=0;function b(E,T){x+=E;for(let q=0;q<N;q++){let X=R[q];X.y-=X.vy*E,X.y<0&&(X.y+=12),v.position.set(X.x+Math.sin(x*1.3+X.ph)*.5,X.y,X.z+Math.cos(x+X.ph)*.4),v.rotation.set(x*X.sp+X.ph,x*X.sp*.7,X.ph),v.updateMatrix(),w.setMatrixAt(q,v.matrix)}w.instanceMatrix.needsUpdate=!0;let k=Math.sin(x*.18)*.4,D=15-Math.min(2.5,x*.2),O=new $(Math.sin(k)*D,3+Math.sin(x*.3)*.3,Math.cos(k)*D).applyAxisAngle(new $(0,1,0),c);r.position.copy(f).add(O);let z=new $(o,2.2,0).applyAxisAngle(new $(0,1,0),c).add(f);r.lookAt(z),r.fov!==42&&(r.fov=42,r.updateProjectionMatrix())}function C(){a.traverse(E=>{E.geometry&&E.geometry.dispose()}),w.material.dispose();for(let E of l)E.dispose?.();n.remove(a)}return{update:b,dispose:C,center:f}}var Qe=(n,t)=>{n=n.index?n.toNonIndexed():n;let e=new de(t).convertSRGBToLinear(),i=n.getAttribute("position").count,s=new Float32Array(i*3);for(let r=0;r<i;r++)s[r*3]=e.r,s[r*3+1]=e.g,s[r*3+2]=e.b;return n.setAttribute("color",new Je(s,3)),n.getAttribute("uv")&&n.deleteAttribute("uv"),n},Rn=(n,t,e,i,s=0,r=1.6)=>(n.scale(r,r,r),n.rotateY(s),n.translate(t,e,i),n);function iu(n,t,e,i){let s=Bn(777),r=new Me;n.add(r);let o=[],a=[],l=(d,M)=>`lawn:${Math.floor(d/140)},${Math.floor(M/140)}`,h=(d,M,m,p=.8,S)=>a.push({x:d,y:t.heightAt(d,M),z:M,yaw:m,scale:p,colour:S,zone:l(d,M)}),{ribbonSamples:u}=e.anchors;function g(d,M,m){for(let p=0;p<40;p++){let S=u[Math.floor(s()*u.length)],y=s()*Math.PI*2,_=d+s()*(M-d),N=S[0]+Math.cos(y)*_,w=S[1]+Math.sin(y)*_;if(!(!e.inPark(N,w)||e.blocked(N,w,m+1)||!e.clearOf(N,w,m)||e.onPath(N,w,m+2)))return e.reserve(N,w,m),{x:N,z:w,y:t.heightAt(N,w),toPath:Math.atan2(S[0]-N,S[1]-w)}}return null}{let d=[],M=["#ff5d8f","#ffd23f","#2e9bff","#3ddc84","#ff8a3d","#b07bff"],m=(w,R,A,v,x,b)=>{d.push(Rn(Qe(new Be(1.6,.2,1.6).translate(0,2,0),x),w,R,A,v));for(let[T,k]of[[-.7,-.7],[.7,-.7],[-.7,.7],[.7,.7]])d.push(Rn(Qe(new ve(.08,.08,2,6).translate(T,1,k),"#ffffff"),w,R,A,v));d.push(Rn(Qe(new nn(1.25,1,4).rotateY(Math.PI/4).translate(0,2.6,0),b),w,R,A,v));let C=new Be(.9,.12,3.3);C.rotateX(-.62),C.translate(0,1.05,2.1),d.push(Rn(Qe(C,b),w,R,A,v));let E=new Be(.8,.08,2.4);E.rotateX(1),E.translate(0,1,-1.3),d.push(Rn(Qe(E,"#ffffff"),w,R,A,v))},p=(w,R,A,v,x)=>{for(let b of[-1.8,1.8])for(let C of[-.6,.6]){let E=new ve(.08,.08,2.8,6);E.rotateX(C>0?.22:-.22),E.translate(b,1.35,C*.5),d.push(Rn(Qe(E,x),w,R,A,v))}d.push(Rn(Qe(new ve(.1,.1,3.8,8).rotateZ(Math.PI/2).translate(0,2.7,0),x),w,R,A,v));for(let b of[-.8,.8]){d.push(Rn(Qe(new Be(.6,.08,.35).translate(b,.75,0),"#22202c"),w,R,A,v));for(let C of[-.25,.25])d.push(Rn(Qe(new ve(.02,.02,1.9,4).translate(b+C,1.7,0),"#888888"),w,R,A,v))}},S=(w,R,A,v)=>{let x=new Ce(1.6,8,5,0,Math.PI*2,0,Math.PI/2);d.push(Rn(Qe(x,v),w,R,A)),d.push(Rn(Qe(new ve(.4,.4,.5,8).translate(0,1.7,0),"#ffffff"),w,R,A))},y=(w,R,A,v,x)=>{d.push(Rn(Qe(new ve(1.5,1.5,.25,16).translate(0,.35,0),v),w,R,A)),d.push(Rn(Qe(new ve(.1,.1,1,6).translate(0,.9,0),x),w,R,A)),d.push(Rn(Qe(new on(.9,.06,6,16).rotateX(Math.PI/2).translate(0,1.2,0),x),w,R,A))},_=(w,R,A,v,x)=>{d.push(Rn(Qe(new Ce(.45,10,8).scale(1,.9,1.4).translate(0,.95,0),x),w,R,A,v)),d.push(Rn(Qe(new Ce(.3,8,6).translate(0,1.4,.55),x),w,R,A,v)),d.push(Rn(Qe(new ve(.12,.12,.6,6).translate(0,.3,0),"#888888"),w,R,A,v))},N=[m,p,S,y,_];for(let w of i.features){if(w.kind!=="playground"||!w.closed)continue;let R=jn(w.pts),A=(R[2]-R[0])*(R[3]-R[1]),v=Math.max(1,Math.min(9,Math.round(A/380))),x=[];for(let b=0,C=0;b<v&&C<80;C++){let E=R[0]+3+s()*(R[2]-R[0]-6),T=R[1]+3+s()*(R[3]-R[1]-6);if(!ur(w.pts,E,T)||x.some(X=>Math.hypot(X[0]-E,X[1]-T)<8.5))continue;x.push([E,T]),b++;let k=t.heightAt(E,T)-.05,D=s()*6.28,O=M[Math.floor(s()*M.length)],z=M[Math.floor(s()*M.length)],q=N[(b+x.length+Math.floor(s()*5))%N.length];q===m||q===p||q===_?q(E,k,T,D,O,z):q(E,k,T,O,z),s()<.6&&h(E+2.5,T+1.5,s()*6,.55)}}if(d.length){let w=Ie(hn(d),yt("#ffffff",{vertexColors:!0}),{ol:2,olRef:30});r.add(w)}}{let d=gn(64,64,(A,v,x)=>{for(let b=0;b<6;b++)for(let C=0;C<6;C++)A.fillStyle=(b+C)%2?"#ffffff":"#c8c8c8",A.fillRect(b*v/6,C*x/6,v/6+1,x/6+1)});o.push(d);let M=new Tn(2.8,2.2);M.rotateX(-Math.PI/2);let m=[],p=[],S=[],y=["#ff4f6d","#2e9bff","#3ddc84","#ffd23f","#ff8a3d","#b07bff"];for(let A=0;A<90;A++){let v=g(12,70,3);if(!v)continue;let x=s()*6.28;m.push({x:v.x,y:v.y+.06,z:v.z,ry:x}),p.push(y[A%y.length]),S.push({x:v.x+Math.cos(x)*.7,y:v.y+.05,z:v.z-Math.sin(x)*.7,ry:x});let b=1+Math.floor(s()*3);for(let C=0;C<b;C++){let E=x+C/b*Math.PI*2+.5,T=v.x+Math.cos(E)*.9,k=v.z-Math.sin(E)*.9;h(T,k,v.toPath+(s()-.5),.62+s()*.15)}}let _=new fn(M,yt("#ffffff",{map:d,polygonOffset:!0,polygonOffsetFactor:-1}),m.length),N=new We;m.forEach((A,v)=>{N.position.set(A.x,A.y,A.z),N.rotation.set(0,A.ry,0),N.updateMatrix(),_.setMatrixAt(v,N.matrix),_.setColorAt(v,new de(p[v]))}),_.receiveShadow=!0,_.computeBoundingSphere(),r.add(_),e.registerInstanced(_,m);let w=hn([Qe(new ke(.7,.45,.5,2,.08).translate(0,.22,0),"#c98a4a"),Qe(new on(.25,.04,6,12,Math.PI).translate(0,.45,0),"#8a5a36")]),R=new fn(w,yt("#ffffff",{vertexColors:!0}),S.length);S.forEach((A,v)=>{N.position.set(A.x,A.y,A.z),N.rotation.set(0,A.ry,0),N.updateMatrix(),R.setMatrixAt(v,N.matrix)}),R.castShadow=!0,R.computeBoundingSphere(),ai(R,1.6,void 0,20),r.add(R),e.registerInstanced(R,S)}{let d=hn([new ri(.22,.5,4,8).rotateX(Math.PI/2).translate(0,.45,0),new Ce(.22,10,8).translate(0,.72,.42),new Ce(.1,6,5).scale(.6,1.4,.6).translate(-.14,.86,.36),new Ce(.1,6,5).scale(.6,1.4,.6).translate(.14,.86,.36),new Ce(.09,6,5).translate(0,.66,.64),...[[-.13,.25],[.13,.25],[-.13,-.25],[.13,-.25]].map(([A,v])=>new ve(.06,.06,.32,6).translate(A,.16,v)),new ve(.04,.03,.35,5).rotateX(-.9).translate(0,.6,-.42)].map(A=>A.index?A.toNonIndexed():A).map(A=>(A.deleteAttribute("uv"),A))),M=hn([Qe(new Ce(.55,12,8,0,Math.PI*2,Math.PI*.45,Math.PI*.55).scale(1,.8,1.3).translate(0,.95,0),"#ffffff"),Qe(new Ce(.56,12,8,Math.PI,Math.PI,0,Math.PI*.5).scale(1,.9,.9).translate(0,.95,-.2),"#ffffff"),...[[-.45,.45],[.45,.45],[-.45,-.45],[.45,-.45]].map(([A,v])=>Qe(new on(.2,.06,6,12).rotateY(Math.PI/2).translate(A,.22,v),"#22202c")),Qe(new ve(.03,.03,.9,5).rotateX(.6).translate(0,1.15,-.85),"#22202c")]),m=[],p=[],S=[],y=[],_=["#c98a4a","#3b2a20","#f2e6d0","#8a8a8a","#e0b070","#ffffff"];for(let A=0;A<64;A++){let v=g(8,60,1.6);if(!v)continue;let x=s()*6.28;h(v.x,v.z,x,.82);let b=Math.sin(x),C=Math.cos(x);A%4===3?(S.push({x:v.x+b*1.4,y:v.y,z:v.z+C*1.4,ry:x,s:1}),y.push(["#ffb3c7","#b3dcff","#c8f0b0","#fff0a0"][A%4])):(m.push({x:v.x+b*1.6+C*.8,y:v.y,z:v.z+C*1.6-b*.8,ry:x+(s()-.5)*.8,s:.8+s()*.6}),p.push(_[Math.floor(s()*_.length)]))}let N=new We,w=(A,v,x,b)=>{let C=new fn(A,v,x.length);return x.forEach((E,T)=>{N.position.set(E.x,E.y,E.z),N.rotation.set(0,E.ry,0),N.scale.setScalar(E.s),N.updateMatrix(),C.setMatrixAt(T,N.matrix),b&&C.setColorAt(T,new de(b[T]))}),C.castShadow=!0,C.receiveShadow=!0,C.computeBoundingSphere(),ai(C,2,void 0,18),r.add(C),e.registerInstanced(C,x),C},R=m.length?w(d,yt("#ffffff"),m,p):null;S.length&&w(M,yt("#ffffff",{vertexColors:!0}),S,y)}{let d=[],M=[],m=[],p=["#ff5d8f","#ffd23f","#ffffff","#b06bff","#ff8a3d","#ff3d3d"];for(let R=0;R<26;R++){let A=g(9,40,3.2);if(!A)continue;let v=2.2+s()*.8;d.push({x:A.x,y:A.y-.05,z:A.z,s:v});let x=[p[R%p.length],p[(R+2)%p.length]];for(let b=0;b<60;b++){let C=s()*6.28,E=Math.sqrt(s())*(v-.25);M.push({x:A.x+Math.cos(C)*E,y:A.y+.25,z:A.z+Math.sin(C)*E,s:.8+s()*.5}),m.push(x[b%2])}}let S=new We,y=hn([Qe(new ve(1,1.05,.35,20).translate(0,.17,0),"#4f9e3a"),Qe(new on(1.02,.08,6,24).rotateX(Math.PI/2).translate(0,.35,0),"#ffffff")]),_=new fn(y,yt("#ffffff",{vertexColors:!0}),d.length);d.forEach((R,A)=>{S.position.set(R.x,R.y,R.z),S.scale.set(R.s,1,R.s),S.updateMatrix(),_.setMatrixAt(A,S.matrix)}),_.receiveShadow=!0,_.computeBoundingSphere(),ai(_,1.6,void 0,20),r.add(_),e.registerInstanced(_,d);let N=new un(.24,0);N.computeVertexNormals();let w=new fn(N,yt("#ffffff"),M.length);S.scale.setScalar(1),M.forEach((R,A)=>{S.position.set(R.x,R.y,R.z),S.scale.setScalar(R.s),S.updateMatrix(),w.setMatrixAt(A,S.matrix),w.setColorAt(A,new de(m[A]))}),w.computeBoundingSphere(),r.add(w),e.registerInstanced(w,M)}{let d=t.sample(55),M=-1,m=Ke/2+9,p=d.x+d.rx*m*M,S=d.z+d.rz*m*M;e.blocked(p,S,3)&&(p=d.x-d.rx*m*M,S=d.z-d.rz*m*M);let y=new Me,_=gn(128,16,(T,k,D)=>{for(let O=0;O<8;O++)T.fillStyle=O%2?"#fff":"#3a9d5d",T.fillRect(O*16,0,16,D)});o.push(_),y.add(Ie(new ke(3.2,1.6,1.8,3,.25),yt("#3a9d5d"),{ol:3,olRef:20})).position.y=1.15;let N=Ie(new ke(3.4,.15,2,2,.05),yt("#f4e3c0"),{ol:2,olRef:20});N.position.y=2,y.add(N);let w=Ie(new Be(3.8,.15,2.4),yt("#ffffff",{map:_}),{ol:2.5,olRef:20});w.position.y=3.2,y.add(w);for(let T of[-1.6,1.6]){let k=Ie(new ve(.06,.06,1.2,6),yt("#ffffff"),{ol:1.5});k.position.set(T,2.6,.9),y.add(k)}for(let T of[-1.1,1.1]){let k=Ie(new ve(.4,.4,.2,14).rotateZ(Math.PI/2),yt("#22202c"),{ol:2});k.position.set(T,.4,.95),y.add(k);let D=k.clone();D.position.z=-.95,y.add(D)}let R=Ie(new ve(.75,.55,1.3,16),yt("#ffffff"),{ol:3,olRef:20});R.position.y=4,y.add(R);let A=Ie(new ve(.82,.82,.22,16),yt("#5a3a24"),{ol:2.5,olRef:20});A.position.y=4.75,y.add(A);let v=Ie(new ve(.72,.62,.45,16),yt("#c98a4a"),{ol:2,olRef:20});v.position.y=3.95,y.add(v);let x=li(512,128,(T,k,D)=>{T.fillStyle="#1a1420",sn(T,0,0,k,D,28),T.fill(),T.fillStyle="#ffd23f",sn(T,6,6,k-12,D-12,22),T.fill(),yn(T,"FLAT WHITES",k/2,D/2+4,62,"#ffffff","#1a1420",.2)},o),b=new Ve(new Tn(2.8,.7),yt("#ffffff",{map:x}));b.position.set(0,1.4,.92),y.add(b);let C=b.clone();C.rotation.y=Math.PI,C.position.z=-.92,y.add(C);let E=Math.atan2(d.x-p,d.z-S);y.position.set(p,t.heightAt(p,S),S),y.rotation.y=E,r.add(y);for(let T=0;T<5;T++){let k=p+Math.sin(E)*(2.2+T*1.1)+Math.cos(E)*(T%2?.3:-.3),D=S+Math.cos(E)*(2.2+T*1.1);h(k,D,E+Math.PI,.8)}e.anchors.coffeeCart=y}function f(){}function c(){r.traverse(d=>{d.geometry&&d.geometry.dispose()});for(let d of o)d.dispose?.();n.remove(r)}return{group:r,crowd:a,update:f,dispose:c}}var co=8.5;function Dv(n,t={}){let{course:e,park:i,round:s}=t,r=t.plan||null,o=t.backedBy||{},a=Object.keys(o).filter(W=>(o[W]||[]).length),l=[...s?.runners||[]].sort((W,Z)=>(W.lane??0)-(Z.lane??0)),h=!1,u=new ga({antialias:!0,powerPreference:"high-performance",preserveDrawingBuffer:!!t.preserveDrawingBuffer});u.setPixelRatio(Math.min(window.devicePixelRatio||1,t.maxPixelRatio??1.5)),u.outputColorSpace=Sn,u.toneMapping=mi,u.shadowMap.enabled=!0,u.shadowMap.type=hh;let g=u.domElement;g.style.cssText="position:absolute;inset:0;width:100%;height:100%;display:block",getComputedStyle(n).position==="static"&&(n.style.position="relative"),n.appendChild(g);let f=new xa;f.fog=new ya(13496063,700,3200);let c=new Ln(45,16/9,.3,9e3),d=new Ua(14676223,9420912,1.45);f.add(d);let M=new Na(16774109,2.3),m=new $(-.45,.82,.38).normalize();M.castShadow=!0,M.shadow.mapSize.set(2048,2048),M.shadow.bias=-4e-4,M.shadow.normalBias=.03,M.shadow.radius=3,f.add(M),f.add(M.target);let p=Nf(e,i,r),S=zf(f,p,{course:e,park:i}),y=null,_=null,N=Vf(p,S.anchors.crowdZones,5,S.onPath,S.blocked),w=iu(f,p,S,i);N.push(...w.crowd);let R=new Map;for(let W of N){let Z=W.zone??"x";R.has(Z)||R.set(Z,[]),R.get(Z).push(W)}let A=[...R.values()].map(W=>Ah(f,W)),v={update:(...W)=>{A.forEach(Z=>Z.update(...W)),_?.update(...W)},setMask:W=>A.forEach(Z=>Z.setMask(W)),dispose:()=>{A.forEach(W=>W.dispose()),_?.dispose()}},x={};for(let W of l){let Z=qf(W);x[W.id]=Z,f.add(Z.root)}let b=l.map(W=>W.id),C=Object.fromEntries(l.map(W=>[W.id,W])),E=tu(n,{runners:l,backedBy:o,course:e,park:i,C:p}),T=null,k=null,D=[],O=null,z=[],q=!1;function X(W){if(r=W||null,p.setPlan(r),h=!!r?.runners?.some(Z=>Z.diversions&&Z.diversions.length),y&&(y.dispose(),y=null),_&&(_.dispose(),_=null),h){let Z=r.runners.find(Nt=>Nt.diversions?.length).id;y=eu(f,p,S,p.diversions[Z][0]),S.clearArea(y.contains),A.forEach(Nt=>Nt.hideWhere(y.contains)),_=Ah(f,y.crowd)}if((h||q)&&(S.redrawGround(),E.redrawMap()),q=h,z=[],r){k=Yf(r,p,l),D=Rh({plan:r,sim:k,backedIds:a,hasDiversion:h,C:p,world:S,funfair:y}),O=Jf({camera:c,C:p,sim:k,world:S,funfair:y});for(let Z of r.events||[])z.push({at:Z.broadcastS,evt:{...Z,kind:"event"}});for(let Z of r.commentary||[])z.push({at:Z.broadcastS,evt:{...Z,kind:"commentary"}});z.sort((Z,Nt)=>Z.at-Nt.at)}else k=null,D=[],O=null}let U="idle",gt=!1,At=!1,P=-co,G=0,J=null,V=null,K=0,ot=!1,Tt=!1,Lt=null,st=!1,pt=1,H=0,$t=.35,tt=3.2,j=0,mt=0,Y=!1,kt=0,B=Math.max(.05,Number(t.speed)||1),L=null,ct=0,bt=new Set;function Pt(){let W=n.clientWidth||window.innerWidth,Z=n.clientHeight||window.innerHeight;u.setSize(W,Z,!1),c.aspect=W/Z,c.updateProjectionMatrix(),wh.uRes.value.set(W*u.getPixelRatio(),Z*u.getPixelRatio())}let Q=typeof ResizeObserver<"u"?new ResizeObserver(Pt):null;Q?.observe(n),window.addEventListener("resize",Pt),Pt();let at={};{let W=b.length;b.forEach((Z,Nt)=>{let Ct=(Nt-(W-1)/2)*Math.min(1.25,(Ke-1.6)/Math.max(1,W-1)),Ht=p.sample(0);at[Z]={x:Ht.x+Ht.rx*Ct-Ht.tx*1.2,z:Ht.z+Ht.rz*Ct-Ht.tz*1.2,yaw:Math.atan2(Ht.tx,Ht.tz)},at[Z].y=p.heightAt(at[Z].x,at[Z].z)+.16})}function lt(W="idle"){for(let Z of b){let Nt=at[Z],Ct=x[Z];Ct.root.position.set(Nt.x,Nt.y,Nt.z),Ct.root.rotation.set(0,Nt.yaw,0),W&&Ct.set(W),Ct.setPop(null)}}lt(),X(r);let xt=(W,Z)=>W===1?"jump":W===2||W===3?"fist":W===Z?"collapse":"kneel";function Rt(W,Z){let Nt=k.stateAt(Math.max(0,W)),Ct=b.length;for(let Ht of b){let ee=Nt.byId[Ht],Jt=x[Ht];if(W<0)continue;Jt.root.position.set(ee.x,ee.y,ee.z);let ae=Math.atan2(ee.tx,ee.tz)+(ee.finished&&ee.post>2.4&&!(ee.place>3&&ee.post<4)?Math.PI*(ee.place%2?1:-1)*.92:0),ne=Jt.root.rotation.y,ye=ae-ne;for(;ye>Math.PI;)ye-=2*Math.PI;for(;ye<-Math.PI;)ye+=2*Math.PI;Jt.root.rotation.y=ne+ye*Math.min(1,Z*10);let be={speed:ee.vRace,rate:Nt.rate*pt,slope:ee.slope},Xt=p.diversions[Ht]?.[0];if(Xt&&Jt.setProp("floss",ee.m>Xt.toM-20?Math.max(.25,1-(ee.m-Xt.toM)/3500):0),ee.finished){let ie=ee.place;ee.post<1.6?(Jt.set("run"),be.speed=3,be.rate=1.2):ie>3&&ee.post<4?Jt.set("trudge"):Jt.set("celebrate",xt(ie,Ct)),Jt.setPop(null)}else if(ee.div>.3){Jt.set("distracted");let ie=y?.anchors.rides.reduce((De,xe)=>!De||xe.pos.distanceToSquared(Jt.root.position)<De.pos.distanceToSquared(Jt.root.position)?xe:De,null);if(ie){let xe=Math.atan2(ie.pos.x-ee.x,ie.pos.z-ee.z)-Jt.root.rotation.y;for(;xe>Math.PI;)xe-=2*Math.PI;for(;xe<-Math.PI;)xe+=2*Math.PI;be.lookYaw=Math.max(-1.3,Math.min(1.3,xe))}Jt.setPop(["!","heart","floss"][Math.floor((ee.m-ee.divInfo.fromM)/120)%3])}else{Jt.set("run"),Jt.setPop(null);let ie=p.geoOf(ee.m);be.effort=ee.m>4300?.4+(ee.m-4300)/700*.5:ie>1700&&ie<2060?.7:.1}Jt.update(Z*pt,be)}}let wt=new $,Ut=null,qt=-1,oe=()=>{if(qt!==G||!Ut){let W=g.getBoundingClientRect();Ut=[...E.root.querySelectorAll(".mr-tower, .mr-map, .mr-top")].filter(Z=>!E.root.classList.contains("mr-dim")&&!(E.root.classList.contains("mr-dimtop")&&!Z.classList.contains("mr-map"))).map(Z=>{let Nt=Z.getBoundingClientRect(),Ct=Nt.right,Ht=Nt.bottom;if(Z.classList.contains("mr-tower")){Ht=Nt.top+Z.querySelectorAll(".mr-row").length*((Z.querySelector(".mr-row")?.offsetHeight||40)+6);for(let ee of Z.querySelectorAll(".mr-badges")){let Jt=ee.getBoundingClientRect();Jt.width&&(Ct=Math.max(Ct,Jt.right))}}return{left:Nt.left-W.left,right:Ct-W.left,top:Nt.top-W.top,bottom:Ht-W.top}}),qt=G}return Ut};function Zt(W,Z=!0){c.updateMatrixWorld();let Nt=g.clientWidth,Ct=g.clientHeight,Ht=[];for(let Xt of b){let ie=x[Xt];wt.set(ie.root.position.x,ie.root.position.y+ie.height+.55,ie.root.position.z);let De=wt.distanceTo(c.position);wt.project(c);let xe=Z&&wt.z<1&&wt.z>-1&&Math.abs(wt.x)<.95&&wt.y<.82&&wt.y>-.62&&De>9.5&&De<(ao.has(O?.shot?.type)?450:150);ie.height/Math.max(.1,De)*(Ct/(2*Math.tan(Ki.degToRad(c.fov)/2)))>Ct*.3&&(xe=!1),Ht.push({id:Xt,x:(wt.x*.5+.5)*Nt,y:(-wt.y*.5+.5)*Ct,visible:xe,pos:W?W.order.indexOf(Xt)+1:0,scale:Math.max(.7,Math.min(1.15,30/De)),dist:De})}let ee=U==="race"&&ao.has(O?.shot?.type)&&!O?.gliding,Jt=W?W.order:b,ae=new Set([...Jt.slice(0,3),...a]);Ht.sort((Xt,ie)=>Jt.indexOf(Xt.id)-Jt.indexOf(ie.id));let ne=[];for(let Xt of Ht){if((!ee||!ae.has(Xt.id))&&(Xt.visible=!1),!Xt.visible)continue;let ie=(Es(C[Xt.id]).length*10+50+(o[Xt.id]?.length||0)*18)*Xt.scale,De=26*Xt.scale,xe=10,He={l:Xt.x-ie/2,r:Xt.x+ie/2,t:Xt.y-De,b:Xt.y+6};if(ne.some(qe=>He.l<qe.r+4&&He.r>qe.l-4&&He.t<qe.b+2&&He.b>qe.t-2)){Xt.visible=!1;continue}if(oe().some(qe=>He.l<qe.right+xe&&He.r>qe.left-xe&&He.t<qe.bottom+xe&&He.b>qe.top-xe)){Xt.visible=!1;continue}ne.push(He)}if(!W)return U!=="race"?{tags:Ht,closing:null}:{tags:Ht,raceS:0,leaderM:0,map:!1,closing:null,order:b.map(Xt=>({id:Xt,hidden:!0,gapText:""}))};let ye=W.leader.m>=4e3,be=W.order.map((Xt,ie)=>{let De=W.byId[Xt],xe=ie<3||a.includes(Xt),He=ye||De.finished?De.gapText:"";if(!He&&a.includes(Xt)&&ie>0&&!De.finished){let qe=W.byId[W.order[ie-1]],an=W.raceS-Nn(k.byId[W.order[ie-1]].progress,De.m);!qe.finished&&an>=0&&an<=5&&(He=`\u2191${an.toFixed(1)}s`)}return{id:Xt,gapText:He,finished:De.finished,hidden:!xe}});return{raceS:W.raceS,leaderM:W.leader.m,tags:Ht,order:be,map:ao.has(O?.shot?.type),closing:fe(W),dots:W.order.map((Xt,ie)=>({x:W.byId[Xt].x,z:W.byId[Xt].z,colour:C[Xt].colour.primary,lead:ie===0,focus:O?.shot?.ids?.includes(Xt)}))}}let ge=null;function fe(W){if(!a.length||Lt||K>0||L!=null)return ge=null,null;let Z=(Xt,ie)=>W.raceS-Nn(k.byId[Xt].progress,W.byId[ie].m),Nt=[];W.order.forEach((Xt,ie)=>{if(ie===0||W.byId[Xt].finished||W.byId[W.order[ie-1]].finished)return;let De=W.order[ie-1],xe=a.includes(Xt),He=a.includes(De);if(!xe&&!He)return;let qe=Z(De,Xt);qe>=0&&qe<=5&&Nt.push({key:`${De}>${Xt}`,ahead:De,behind:Xt,g:qe,who:xe?Xt:De,role:xe?"chase":"hunted"})});let Ct=ge&&Nt.find(Xt=>Xt.key===ge.key);if(!Ct&&ge){let[Xt,ie]=ge.key.split(">"),De=!W.byId[ie].finished&&W.order.indexOf(ie)===W.order.indexOf(Xt)+1?Z(Xt,ie):99;De<=5.5&&(Ct={...ge,g:De})}let Ht=Nt.sort((Xt,ie)=>Xt.g-ie.g)[0];if((!Ct||Ht&&Ht.key!==Ct.key&&Ht.g<Ct.g*.6)&&(Ct=Ht?{...Ht,g0:Ht.g}:null),!Ct)return ge=null,null;(!ge||ge.key!==Ct.key)&&(ge={...Ct,g0:Ct.g0??Ct.g});let ee=ge.g0,Jt=Ct.g,ae=Es(C[Ct.who]),ne=C[Ct.who].colour.primary;if(Jt<.5)return{text:"ALONGSIDE!",name:ae,colour:ne,hot:!0};let ye=Jt<ee-.15,be=Ct.role==="chase"?ye?"closing":"chasing":ye?"under pressure":"holding on";return{name:ae,colour:ne,text:ye?`${be}: ${ee.toFixed(1)} s \u2192 ${Jt.toFixed(1)} s`:`${be}: ${Jt.toFixed(1)} s`,hot:Jt<1.5}}let Le=new cr(.78,1,48);Le.rotateX(-Math.PI/2);let rt={};function Yt(){for(let W of b){let Z=rt[W]||(rt[W]=new Me);Z.parent||x[W].root.add(Z);for(let Nt of[...Z.children])Z.remove(Nt),Nt.material.dispose();(o[W]||[]).forEach((Nt,Ct)=>{let Ht=new Ve(Le,new Fn({color:Ih(Nt),transparent:!0,opacity:.9,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-4}));Ht.scale.setScalar(1+Ct*.32),Ht.position.y=.06+Ct*.01,Ht.renderOrder=2,Z.add(Ht)})}}function It(){for(let W of b){let Z=rt[W];if(!Z||!Z.children.length)continue;let Nt=c.position.distanceTo(x[W].root.position);Z.scale.setScalar(Ki.clamp(Nt*.016,.9,3.2))}}Yt();function Ft(W,Z){let Nt=Math.max(30,Math.min(220,Z)),Ct=M.shadow.camera;Ct.right!==Nt&&(Ct.left=-Nt,Ct.right=Nt,Ct.top=Nt,Ct.bottom=-Nt,Ct.near=1,Ct.far=900,Ct.updateProjectionMatrix());let Ht=2*Nt/M.shadow.mapSize.x,ee=Math.round(W.x/Ht)*Ht,Jt=Math.round(W.z/Ht)*Ht;M.target.position.set(ee,W.y,Jt),M.position.set(ee+m.x*400,W.y+m.y*400,Jt+m.z*400)}let Kt=["wave","flex","point","stretch","spin","bow"];function Qt(W,Z){let Nt=[...W.personality||W.id].reduce((Ct,Ht)=>Ct+Ht.charCodeAt(0),Z);return Kt[Nt%Kt.length]}function Ee(W,Z={}){U="intro",E.setDim(!0),E.clearBanner(),E.photo(!1),E.results(null),Ne(),E.market(!1),L=null,gt=!1,g.style.filter="",lt("idle");let Nt=Z.perRunnerS??t.introPerRunnerS??4.2,Ct=Z.flyoverS??7;return V={t:0,idx:-1,per:Nt,fly:Ct,onDone:W,waiting:!1,segStart:0,minSeg:2.5,done:!1,group:!1},{flyoverS:Ct,perRunnerS:Nt,runners:b.slice()}}function I(W){let Z=V;if(!Z)return;Z.t+=W;let Nt=at;if(Z.idx===-1){!Z.title&&Z.t>.8&&(Z.title=!0,it(!0));let be=Math.min(1,Z.t/Z.fly),Xt=Ch(be),ie=p.sample(0),De=new $(170,0,-40),xe=2.2-Xt*2,He=520-Xt*470,qe=new $(De.x+Math.cos(xe)*He,190-Xt*170,De.z+Math.sin(xe)*He),an=new $(ie.x+ie.tx*22+ie.rx*10,ie.y+9,ie.z+ie.tz*22+ie.rz*10);qe.lerp(an,Xt*Xt);let vn=De.clone().setY(15).lerp(new $(ie.x,ie.y+1,ie.z),Math.min(1,Xt*1.2));c.position.copy(qe),c.lookAt(vn),Mt(50),be>=1&&nt();return}if(Z.group){let be=p.sample(0),Xt=(Z.t-Z.segStart)/3;if(c.position.set(be.x+be.tx*(9+Xt*2)+be.rx*2,be.y+2.2+Xt*.6,be.z+be.tz*(9+Xt*2)+be.rz*2),c.lookAt(be.x,be.y+1.3,be.z),Mt(46),Xt>=1&&!Z.done){Z.done=!0,E.introCard(null);let ie=Z.onDone;V=null,U="idle",ie?.()}return}let Ct=b[Z.idx],Ht=Nt[Ct],ee=Z.t-Z.segStart,Jt=new $(Math.sin(Ht.yaw),0,Math.cos(Ht.yaw)),ae=new $(-Jt.z,0,Jt.x),ne=x[Ct].height,ye=3.2+ne*.6-Math.min(.6,ee*.12);c.position.set(Ht.x+Jt.x*ye+ae.x*.9,Ht.y+ne*.62,Ht.z+Jt.z*ye+ae.z*.9),c.lookAt(Ht.x-ae.x*1.25,Ht.y+ne*.55,Ht.z-ae.z*1.25),Mt(40),!Z.waiting&&ee>=Z.per&&nt(),Z.waiting==="released"&&ee>=Z.minSeg&&nt()}function it(W){let Z=s||{};E.titleCard(W,{title:Z.title||"MARKRUN",kicker:Z.number?`ROUND ${Z.number}`:"LIVE FROM FINSBURY PARK",theme:Z.theme?typeof Z.theme=="string"?Z.theme:Z.theme.label||Z.theme.name||"":""})}function nt(){let W=V;W.idx===-1&&it(!1),W.idx++,W.segStart=W.t;for(let Ht of b)x[Ht].set("idle");if(W.idx>=b.length){W.group=!0;for(let Ht of b)x[Ht].set("pose","point");E.introCard(null),setTimeout(()=>{},0);for(let Ht of b)x[Ht].set("wave");return}let Z=b[W.idx];x[Z].set(Qt(C[Z],W.idx)==="wave"?"wave":"pose",Qt(C[Z],W.idx)),t.introCards!==!1&&E.introCard(C[Z]),W.waiting=!1;let Ct=t.onIntroRunner?.(Z,W.idx);Ct&&typeof Ct.then=="function"&&(W.waiting=!0,Ct.then(()=>{V===W&&(W.waiting="released")},()=>{V===W&&(W.waiting="released")}))}function ht(W,Z){if(!k)throw new Error("createRaceView: playRace needs a plan (pass opts.plan or call loadPlan(plan) first)");U="race",E.setDim(!1),E.results(null),Ne(),V=null,E.introCard(null),E.titleCard(!1),E.market(!1),L=null,gt=!1,g.style.filter="",P=-co,j=0,mt=0,K=0,ot=!1,Tt=!1,Lt=null,st=!1,pt=1,E.replay(!1),bt.clear(),Y=!!t.skipRaceTitle,E.setDimTop(!1),J={onEvent:W,onDone:Z},lt("idle"),O.reset()}let _t=[[-3,"3"],[-2,"2"],[-1,"1"],[0,"GO!"]];function ut(W){switch(W.type){case"lead_change":return["LEAD CHANGE","","#ff3d8b"];case"overtake":return a.includes(W.by)||a.includes(W.on)?["OVERTAKE","","#2e6fe0"]:null;case"hill":return["THE HILL","","#3aa845"];case"lap":return["LAP 2","","#2e6fe0"];case"final_stretch":return["FINAL STRETCH","","#ff8a1f"];case"diversion":return bt.has("div")?null:(bt.add("div"),["DISTRACTED!","","#b04bff"]);case"finish":return W.place===1&&!k.photoFinish?["WINNER","","#ffb000"]:null;default:return null}}function Dt(W){if(K>0){K-=W,K<=0&&(E.photo(!1),g.style.filter="",S.anchors.finishArch.visible=!0,et());return}if(Lt){St(W);return}let Z=P;for(pt=Vt(P),P+=W*pt,P<-4.2&&!Y&&(Y=!0,it(!0),E.setDimTop(!0)),P>=-3.6&&Y===!0&&(Y="done",it(!1),E.setDimTop(!1));mt<_t.length&&P>=_t[mt][0];){let[Nt,Ct]=_t[mt++];if(E.countdown(Ct),J?.onEvent?.({kind:"countdown",n:Ct==="GO!"?0:Number(Ct),text:Ct,broadcastS:Nt}),Nt===-3)for(let Ht of b)x[Ht].set("ready")}for(;j<z.length&&P>=z[j].at;){let Nt=z[j++].evt;try{J?.onEvent?.(Nt)}catch(Ct){console.error(Ct)}if(Nt.kind==="event"){let Ct=ut(Nt);Ct&&E.showBanner(...Ct)}}if(k.photoFinish&&!ot&&P>=k.firstFinishB){ot=!0,P=k.firstFinishB,K=t.photoFreezeS??1.4;{let[Nt,Ct]=k.finishOrder;E.photo(!0,`${Es(C[Nt])} or ${Es(C[Ct])}? Checking the camera...`)}g.style.filter="grayscale(0.55) sepia(0.35) contrast(1.12)",J?.onEvent?.({kind:"photo_finish",broadcastS:P,ids:k.finishOrder.slice(0,2)})}!st&&!Lt&&P>=k.firstFinishB+1.1&&et(),!Tt&&P>=k.lastFinishB+3.5&&(Tt=!0,J?.onDone?.())}function Vt(W){if(!k||t.finishSlowMo===!1)return 1;let Z=Math.abs(W-k.firstFinishB),Nt=Z<1?1:Z<1.6?1-Bt((Z-1)/.6):0;return 1-(1-$t)*Nt}function Bt(W){return W=Math.max(0,Math.min(1,W)),W*W*(3-2*W)}function et(){if(st||t.finishReplay===!1){st=!0,Wt();return}let W=k.byId[k.finishOrder[0]];Lt={t:0,b0:Math.max(0,di(r.timeMap,Nn(W.progress,4940))),b1:k.firstFinishB+.6,resume:P},E.replay(!0)}function St(W){Lt.t+=W,Lt.t>=tt&&(Lt=null,st=!0,E.replay(!1),O.reset(!0),Wt())}function Et(){let W=Math.min(1,Lt.t/tt);return Lt.b0+(Lt.b1-Lt.b0)*(1-Math.pow(1-W,1.7))}function Wt(){let W=k.finishOrder[0],Z={kind:"winner_replay_done",winnerId:W,photoFinish:!!k.photoFinish,broadcastS:P};try{J?.onEvent?.(Z)}catch(Nt){console.error(Nt)}if(t.onWinnerStamp)try{t.onWinnerStamp({winnerId:W,photoFinish:!!k.photoFinish})}catch(Nt){console.error(Nt)}else E.showBanner("WINNER","","#ffb000")}function he(W){o=W||{},a=Object.keys(o).filter(Z=>(o[Z]||[]).length),E.setBackedBy(o),Yt()}function ue(W,Z=1.2){if(!k)throw new Error("createRaceView: seek in a race needs a plan");W=Math.max(-co,Math.min(k.lastFinishB+3.5,Number(W)||0)),U="race",V=null,Ne(),J=J||{},E.setDim(!1),E.introCard(null),E.results(null),E.photo(!1),E.market(!1),E.clearBanner(),E.titleCard(!1),E.setDimTop(!1),g.style.filter="",S.anchors.finishArch.visible=!0,L=null,Y=W>=-3.6?"done":W<-4.2?!1:"done",O.reset();let Nt=Math.round(Z*30);for(let Ct=Nt;Ct>=0;Ct--){if(P=W-Ct/30,P<-3)for(let Ht of b)x[Ht].set("idle");else if(P<0)for(let Ht of b)x[Ht].set("ready");if(Ct>0)if(O.update(P,1/30,D),P>=0)Rt(P,1/30);else for(let Ht of b)x[Ht].update(1/30,{})}P=W,j=z.findIndex(Ct=>Ct.at>P),j<0&&(j=z.length),mt=_t.findIndex(Ct=>Ct[0]>P),mt<0&&(mt=_t.length),ot=P>=k.firstFinishB,Tt=P>=k.lastFinishB+3.5,K=0,Lt=null,st=P>=k.firstFinishB+1.1,pt=1,E.replay(!1)}function _e(W){let Z=V;if(!Z)return;W=Math.max(0,Number(W)||0);let Nt=b.length;if(W<Z.fly){Z.t=W;return}it(!1),Z.title=!0;let Ct=Math.min(Nt,Math.floor((W-Z.fly)/Z.per));Z.idx=Ct-1,Z.t=W,nt(),Z.segStart=Z.fly+Ct*Z.per}function Ue(W){return U==="intro"?_e(W):ue(W)}function Ne(){T&&(T.dispose(),T=null)}function je(W,{card:Z}={}){U="podium",E.setDim(!0),E.clearBanner(),V=null,E.titleCard(!1),E.market(!1),L=null,gt=!1,g.style.filter="",E.photo(!1),Ne();let Nt=W?.finishOrder?.length?[...W.finishOrder].sort((Ct,Ht)=>Ct.place-Ht.place):(k?.finishOrder||b).map((Ct,Ht)=>({runnerId:Ct,place:Ht+1,officialS:k?.byId[Ct].officialS??0,timeText:k?Va(k.byId[Ct].officialS):""}));T=nu(f,p,S,x,Nt,{camera:c,offsetX:(Z??t.podiumCard)!==!1?3.2:0}),(Z??t.podiumCard)!==!1&&E.results(Nt.map(Ct=>({place:Ct.place,nickname:C[Ct.runnerId]?.nickname||Ct.runnerId,colour:C[Ct.runnerId]?.colour.primary||"#888",timeText:Ct.timeText||Va(Ct.officialS)})))}let F=performance.now(),ft=0,vt={frames:0,acc:0,fps:0};function Mt(W){Math.abs(c.fov-W)>.01&&(c.fov=W,c.updateProjectionMatrix())}function dt(W,Z=!1){G+=W;let Nt=null;gt||(U==="intro"&&I(W),U==="race"&&Dt(W));let Ct=gt?0:W;if(U==="race"){if(K>0){let ne=S.anchors.finish;S.anchors.finishArch.visible=!1,c.position.set(ne.x+ne.rx*9-ne.tx*.6,ne.y+6.4,ne.z+ne.rz*9-ne.tz*.6),c.lookAt(ne.x-ne.rx*.6-ne.tx*.6,ne.y+.8,ne.z-ne.rz*.6-ne.tz*.6),Mt(42),c.updateMatrixWorld();let ye=new $(ne.x+ne.rx*3,ne.y+.05,ne.z+ne.rz*3).project(c),be=new $(ne.x-ne.rx*3,ne.y+.05,ne.z-ne.rz*3).project(c);E.photoLine([(ye.x*.5+.5)*g.clientWidth,(-ye.y*.5+.5)*g.clientHeight],[(be.x*.5+.5)*g.clientWidth,(-be.y*.5+.5)*g.clientHeight])}else if(Lt){let ne=S.anchors.finish,ye=Et(),be=k.stateAt(ye).byId[k.finishOrder[0]];c.position.set(ne.x+ne.tx*30+ne.rx*2.2,ne.y+1.1,ne.z+ne.tz*30+ne.rz*2.2),c.lookAt(be.x,be.y+1,be.z),Mt(13)}else if(gt&&L!=null){L+=W;let ne=k.stateAt(Math.max(0,P)),ye=ne.byId[ne.order[0]],be=ne.order.slice(0,3).map(vn=>ne.byId[vn]).filter(vn=>Math.abs(vn.m-ye.m)<25),Xt=new $;for(let vn of be)Xt.add(new $(vn.x,vn.y,vn.z));Xt.divideScalar(Math.max(1,be.length)),ct||(ct=Math.atan2(c.position.x-Xt.x,c.position.z-Xt.z));let ie=ct+L*.12,De=10+Math.min(25,ye.m-be.at(-1).m)*.4,xe=Math.min(1,L/1.2),He=xe*xe*(3-2*xe),qe=Xt.x+Math.sin(ie)*De,an=Xt.z+Math.cos(ie)*De;c.position.set(qe,Math.max(Xt.y+3+He*2,p.heightAt(qe,an)+2.5),an),c.lookAt(Xt.x,Xt.y+2.3,Xt.z),Mt(44)}else O.update(P,Ct,D);Nt=P>=0?k.stateAt(P):null,Lt&&(Nt=k.stateAt(Et()));let ee=!K&&L==null&&["side","headon","finishcam"].includes(O.shot?.type);S.setOcclusionCorridor(ee?c.position:null,ee?O.cam.look:null);let Jt=!K&&!Lt&&O.shot?.type==="finishcam"?O.shot.fside:0;if(Jt!==H){H=Jt;let ne=S.anchors.finish;v.setMask(Jt?(ye,be)=>{let Xt=((ye-ne.x)*ne.rx+(be-ne.z)*ne.rz)*Jt,ie=(ye-ne.x)*ne.tx+(be-ne.z)*ne.tz;return Xt>0&&Xt<16&&ie>-75&&ie<14&&Xt<15*(ie+150)/161+2.5}:null)}if(P<0)for(let ne of b)x[ne].update(Ct,{});else if(Lt){let ne=Math.min(1,Lt.t/tt);pt=Math.max(.2,(Lt.b1-Lt.b0)/tt*1.7*Math.pow(1-ne,.7)),Rt(Et(),Ct)}else Rt(P,K>0?0:Ct);let ae=O.shot?.type;Ft(O.cam.look,ao.has(ae)?160:70)}else if(U==="podium"&&T){S.setOcclusionCorridor(null),T.update(Ct,G);for(let ee of b)x[ee].update(Ct,{});Ft(T.center,40)}else{for(let ee of b)x[ee].update(Ct,{});if(U==="idle"){let ee=p.sample(0),Jt=G*.12;c.position.set(ee.x+Math.sin(Jt)*14,ee.y+4.5,ee.z+Math.cos(Jt)*14),c.lookAt(ee.x,ee.y+1.2,ee.z),Mt(45)}Ft(new $(at[b[0]]?.x??0,0,at[b[0]]?.z??0),U==="intro"&&V?.idx===-1?160:40)}if(kt+=W,Z)return;It(),S.update(G),y?.update(G);let Ht=b.map(ee=>x[ee].root.position);v.update(G,c.position,Ht,U==="podium"?.9:null),E.update(kt,U==="race"?Zt(Nt,P>-1&&L==null&&!Lt):Zt(null,!1)),kt=0,u.render(f,c)}let Gt=2;function te(W){if(At)return;ft=requestAnimationFrame(te);let Z=Math.max(0,(W-F)/1e3);F=W,vt.frames++,vt.acc+=Z,vt.acc>1&&(vt.fps=vt.frames/vt.acc,vt.frames=0,vt.acc=0),pe(Math.min(Gt,Z)*B)}function pe(W){let Z=W;if(Z<=1e-6){dt(0);return}for(;Z>1e-6;){let Nt=Math.min(Z,.1);Z-=Nt,dt(Nt,Z>1e-6)}}t.manualLoop||(ft=requestAnimationFrame(te));function me(){At=!0,cancelAnimationFrame(ft),Q?.disconnect(),window.removeEventListener("resize",Pt);for(let W in rt)for(let Z of rt[W].children)Z.material.dispose();Le.dispose(),Ne();for(let W of b)f.remove(x[W].root),x[W].dispose();v.dispose(),y?.dispose(),w.dispose(),S.dispose(),E.dispose(),f.traverse(W=>{W.geometry&&W.geometry.dispose()}),Xf(),Ff(),u.dispose(),u.forceContextLoss?.(),g.remove()}let Te={seek(W,Z=1.2){ue(W,Z),gt=!0,dt(0)},introAt(W,Z=1.5){if(Ee(()=>{},{}),gt=!1,W<0){V.t=Z,I(0),dt(0),gt=!0;return}for(V.t=V.fly,I(0);V&&V.idx<W;)V.t=V.segStart+V.per+.01,I(0);for(let Nt=0;Nt<Z*30;Nt++){I(1/30);for(let Ct of b)x[Ct].update(1/30,{})}gt=!0,dt(0)},podiumAt(W=3){E.introCard(null),je(null);for(let Z=0;Z<W*30;Z++){T.update(1/30,Z/30);for(let Nt of b)x[Nt].update(1/30,{})}gt=!0,dt(0)},photoAt(){this.seek(k.firstFinishB-.05),gt=!1,ot=!1;for(let W=0;W<3;W++)dt(1/30);gt=!0,dt(0)},render(){dt(0)},unpause(){gt=!1},lookFrom(W,Z,Nt,Ct,Ht,ee,Jt=45){U="debugcam",c.position.set(W,Z,Nt),c.lookAt(Ct,Ht,ee),Mt(Jt),E.setDim(!0),u.render(f,c)},step(W,Z=!0){dt(W,!Z)},get mode(){return U},get b(){return P},get shots(){return D},get sim(){return k},C:p,get director(){return O},renderer:u,scene:f,camera:c,info:()=>u.info,fps:()=>vt.fps};return{playIntro:Ee,playRace:ht,showPodium:je,setPaused(W,{market:Z=!0,marketText:Nt}={}){W=!!W,W!==gt&&(gt=W,U==="race"&&K<=0&&t.marketOnPause!==!1&&Z&&(W?(L=0,ct=0,E.market(!0,Nt??t.marketText??"Place your halfway bets!"),g.style.filter="saturate(1.2) contrast(1.06)"):(L=null,E.market(!1),g.style.filter="",O.reset(!1))))},setSpeed(W){B=Math.max(.05,Number(W)||1)},seek:Ue,loadPlan(W,{backedBy:Z}={}){if(U==="race")throw new Error("createRaceView: loadPlan during a race");Z&&he(Z),X(W)},setBackedBy(W){he(W),k&&U!=="race"&&(D=Rh({plan:r,sim:k,backedIds:a,hasDiversion:h,C:p,world:S,funfair:y}))},dispose:me,hudRoot:E.root,get broadcastTime(){return U==="intro"?V?.t??0:P},get durationS(){return k?co+k.lastFinishB+3.5:0},preRollS:co,_debug:Te}}function su(n){let e=Array.from({length:201},(r,o)=>Math.round(o*25/5e3*1500*1e3)/1e3),i=(n?.runners||[]).map(r=>({id:r.id,officialS:1500,progress:e,pacingSource:"intro"})),s=qh(n?.roundId||"intro",i);return s.events=[],s.commentary=[],s}function ru(n,t,e=1){return Math.round(n*(1+e*(t-1)))}function Ov(n,t=1){return 1+(n-1)*t}var Fv=(n,t)=>{if(t.type==="inplay")return typeof t.odds=="number"?t.odds:t.odds?.win??0;let e=n.runners.find(i=>i.id===t.runnerId)?.odds?.win??0;return ou(n,t)?Ov(e,n.underdogSpecial.boost):e};function ou(n,t,e=t.playerId){let i=n.underdogSpecial;return!!i&&(t.type==="special"||t.type==="win"&&t.boost===!0)&&(e==null||e===i.playerId)}function Ph(n,t,e){let i=n,s=i.payoutMultiplier??1,r=new Map((e||[]).map((a,l)=>[a,l])),o={};for(let[a,l]of Object.entries(t||{})){let h=0,u=!1;for(let g of l||[])if(g.type!=="prop"){if(g.type==="win"||g.type==="inplay"||g.type==="special"){let f=Fv(i,{...g,playerId:a});ou(i,g,a)&&(u&&(f=i.runners.find(c=>c.id===g.runnerId)?.odds?.win??0),u=!0),h+=e?.[0]===g.runnerId?ru(g.stake,f,s)-g.stake:-g.stake}else if(g.type==="h2h"){let f=(i.matchups||[]).find(M=>M.id===g.matchupId);if(!f)continue;let c=f.a===g.pick?f.b:f.a,d=(r.get(g.pick)??99)<(r.get(c)??99);h+=d?ru(g.stake,f.a===g.pick?f.odds.a:f.odds.b,s)-g.stake:-g.stake}}o[a]=h}return o}var qa={};Oh(qa,{awardLines:()=>Xv,coldOpenLines:()=>$v,lockLine:()=>Vv,rematchLine:()=>Wv,stampLine:()=>Gv});var Bv=(n,t=Math.random)=>n[Math.floor(t()*n.length)],zv=n=>(n||[]).map(t=>typeof t=="string"?t:t?.name).filter(Boolean),Hv=n=>n.length<=1?n[0]||"everyone":`${n.slice(0,-1).join(", ")} and ${n.at(-1)}`,Xa=[];function es(n,t){let e=n.filter(s=>!Xa.includes(s)),i=Bv(e.length?e:n,t);return Xa.push(i),Xa.length>40&&Xa.shift(),i}var ns=(n,t)=>n.replace(/\{(\w+)\}/g,(e,i)=>t[i]!=null?String(t[i]):"");function $v(n,t){let e=zv(n),i={all:Hv(e),a:e[0]||"our first player",b:e[1]||e[0]||"our guest"},s=[{speaker:"jeff",text:ns(es(["Good evening, {all}! Welcome to MARKRUN!","Live from the sofa, it's MARKRUN! Hello, {all}!","Ladies and gentlemen, {all}! The parkrun betting spectacular starts now!"],t),i)},{speaker:"pam",text:ns(es(e.length>=2?["{a}, {b}. I've seen your betting. I'm worried.","Evening, {a}. Evening, {b}. Try to read the clues this time.","Hello {a}, hello {b}. Somebody's going home poorer."]:["Evening, {a}. Just you and the bookie tonight.","Hello, {a}. Try not to bankrupt yourself."],t),i)}];return e.length>=2&&(t??Math.random)()<.6&&s.push({speaker:"jeff",text:ns(es(["Real runs, fake money, genuine grudges! Let's go!","Grab a drink, grab your phones, here we go!"],t),i)}),s}function Vv(n,t){let e=typeof n=="string"?n:n?.name||"Somebody";return{speaker:(t??Math.random)()<.6?"jeff":"pam",text:ns(es(["{n}'s in!","{n} is locked and loaded!","And {n} has committed!","{n}: no going back now!","{n} has pressed the button. Brave.","Bets in from {n}!"],t),{n:e})}}function Gv(n,t){let{name:e="Somebody",net:i=0}=n||{};return i>0?{speaker:"jeff",text:ns(es(["{N} WINS {x}!","{n} cashes in: plus {x}!","Kerching! {x} to {n}!"],t),{n:e,N:e.toUpperCase(),x:i})}:i<0?{speaker:"pam",text:ns(es(["{n}'s {x} goes up in smoke.","{n} is down {x}. Unlucky.","That's {x} of {n}'s money gone."],t),{n:e,x:Math.abs(i)})}:{speaker:"pam",text:ns(es(["{n} breaks even. Thrilling.","Nothing gained, nothing lost for {n}."],t),{n:e})}}function Wv(n,t){let e=(Array.isArray(n)?n:n?.players||[]).filter(o=>o&&o.name);if(e.length<2)return{speaker:"jeff",text:"Same again? The runners are ready when you are!"};let i=[...e].sort((o,a)=>(o.bankroll??0)-(a.bankroll??0)),s=i[0].name,r=i.at(-1).name;return{speaker:"pam",text:ns(es(["{l}, are you going to let {w} get away with that? Rematch?","Rematch? {l} looks like they want one.","{l}, revenge is one more game away.","I believe {l} is demanding a rematch. Loudly."],t),{l:s,w:r})}}function Xv(n,t){return(n||[]).map((e,i)=>({speaker:i%2?"pam":"jeff",text:`${e.title}! ${e.text}`}))}var ja=(n,...t)=>{try{return typeof qa[n]=="function"?qa[n](...t):null}catch{return null}},go=new URLSearchParams(location.search),As=Math.max(.25,Number(go.get("speed"))||1),Ya=go.get("race")==="2d",Hn=n=>Math.round(n/As);window.__markrun={events:[],speed:As};var Kn=n=>{window.__markrun.events.push({at:Date.now(),...n}),window.__markrun.events.length>500&&window.__markrun.events.shift()},yr=Se("#stage"),Di=Se("#screen"),xr=Se("#hud-bottom"),_r=Se("#subs"),qv=Se("#reactions"),ho=Se("#next-hint"),gr=Se("#race-layer"),we=null,qn=null,uo=go.has("autostart"),is=go.has("mute"),se=Bh(),Qn=Wh({onLine:t1,onIdle:()=>{se.duck(!1)}});function gu(){let n=Math.min(window.innerWidth/1920,window.innerHeight/1080);yr.style.transform=`translate(-50%, -50%) scale(${n})`,yr.style.transformOrigin="center center",yr.style.left="50%",yr.style.top="50%"}window.addEventListener("resize",gu);gu();var kh=null,Yv=Promise.all([fetch("/data/course.json").then(n=>n.json()),fetch("/data/park.json").then(n=>n.json()).catch(()=>null)]).then(([n,t])=>(kh={course:n,park:t},kh)),Za=go.get("key");try{Za&&localStorage.setItem("markrun.tvkey",Za)}catch{}var Zv=()=>{try{return Za||localStorage.getItem("markrun.tvkey")}catch{return Za}},Ja=Fh({role:"tv",getKey:Zv,onWelcome:n=>{if(n.key)try{localStorage.setItem("markrun.tvkey",n.key)}catch{}Se("#tvauth")?.remove()},onStatus:n=>{Se("#conn").classList.toggle("hidden",n==="open"||n==="connecting")},onState:n=>jv(n),onMessage:n=>{n.t==="react"?n1(n.playerId,n.emoji):n.t==="refresh"?bu(n.step,n.msg):n.t==="refreshDone"?a1(n.ok,n.msg):n.t==="claimRequest"?o1(n):n.t==="claimClosed"?Se("#tvmodal")?.dataset.req===n.reqId&&Li():n.t==="error"&&n.code==="tv_auth"?r1(n.msg):n.t==="error"&&rs(n.msg,"red")}}),An=n=>Ja.send(n);function Mr(){if(!(uo&&se.ready())){uo=!0,se.unlock(),Se("#gesture").classList.add("gone");try{window.speechSynthesis?.getVoices()}catch{}Ka(),we&&vu(we,!0)}}uo&&Se("#gesture").classList.add("gone");Se("#gesture").addEventListener("click",Mr);window.addEventListener("pointerdown",()=>{se.ready()||Mr()});function Ka(){let n=we?.settings||{};se.setVolume(n.volume??.8),se.setMuted(is),se.setMusicEnabled(n.music!==!1),Qn.setEnabled(!is&&n.voice!==!1&&As<=1.5),Qn.setVolume(Math.min(1,(n.volume??.8)+.1)),Se("#btn-mute").textContent=is?"\u{1F507}":"\u{1F50A}"}Se("#btn-mute").addEventListener("click",n=>{n.stopPropagation(),is=!is,Ka()});Se("#btn-fs").addEventListener("click",n=>{n.stopPropagation(),yu()});function yu(){document.fullscreenElement?document.exitFullscreen?.():document.documentElement.requestFullscreen?.().catch(()=>{})}var au;window.addEventListener("mousemove",()=>{document.body.classList.remove("hide-cursor"),clearTimeout(au),au=setTimeout(()=>document.body.classList.add("hide-cursor"),3e3)});window.addEventListener("keydown",n=>{if(n.target.closest?.("input, textarea"))return;if(!uo){Mr();return}if(s1()){if(n.key==="Escape"){let e=Se("#tvmodal [data-cancel]:not([disabled])");e?e.click():Li()}else n.key==="Enter"&&Se("#tvmodal [data-ok]")?.click();return}se.ready()||se.unlock();let t=n.key;if(t==="m"||t==="M"){is=!is,Ka(),rs(is?"Muted":"Sound on");return}if(t==="f"||t==="F"){yu();return}if(t==="l"||t==="L"){we?.phase==="BETTING"&&!we.revealed&&(An({t:"forceLock"}),rs("Locking everyone in!"));return}if(t===" "||t==="Enter"||t==="ArrowRight"||t==="n"||t==="N"){if(n.preventDefault(),vr===!1){vr=!0;return}Dh()}});function Dh(){if(we){if(we.phase==="LOBBY"&&!we.players.length){rs("Scan the QR code to join first!","red");return}if(we.phase==="BETTING"&&!we.revealed){rs("Waiting for everyone to lock in (press L to force it)");return}An({t:"advance",from:we.phase,stage:we.phase==="RESULTS"?we.resultsStage:void 0})}}var lu=new Map;function jv(n){let t=we;we=n,Ka();let e=new Map(n.players.map(s=>[s.id,s]));if(t)for(let s of n.players){let r=lu.get(s.id);if(!r)se.play("join"),n.phase==="LOBBY"&&Qn.say(`${s.name} has entered the paddock!`,"pam",{priority:1});else if(!r.locked&&s.locked&&n.phase==="BETTING"){se.play("thunk"),se.play("lock");let o=ja("lockLine",{name:s.name})||{text:e1(s.name),speaker:"jeff"};Qn.say(o.text,o.speaker,{priority:2})}else r.connected&&!s.connected&&setTimeout(()=>{let o=we?.players.find(a=>a.id===s.id);o&&!o.connected&&rs(`${s.name}'s phone dropped out \u2014 it'll reconnect`,"red")},5e3)}lu=e;let i=Jv(n);if(!qn||qn.key!==i)if(!qn)hu(i,n,t);else{let s=qn;qn={key:i,pending:!0,destroy:()=>s.destroy?.()},xu(),setTimeout(()=>{qn.key===i&&qn.pending&&(qn=s,hu(i,we,t))},210)}else qn.pending||qn.update?.(n,t);Kv(n),Qv(n),vu(n)}function Jv(n){let t=n.round?.roundId||"";return n.phase==="BETTING"?`BETTING|${t}|${n.revealed?"reveal":"bet"}`:["INTRO","RACE","RESULTS","SCOREBOARD"].includes(n.phase)?`${n.phase}|${t}`:`${n.phase}|${n.gameNumber}`}var Ts=Ye('<div id="wipe"><i></i><b></b></div>');document.body.appendChild(Ts);Ts.addEventListener("animationend",n=>{n.target.tagName==="B"&&Ts.classList.remove("go")});var cu=null;function xu(){Ts.classList.remove("go"),Ts.offsetWidth,Ts.classList.add("go"),clearTimeout(cu),cu=setTimeout(()=>Ts.classList.remove("go"),700),window.__markrun.wipeUntil=Date.now()+700,se.play("wipe")}function hu(n,t,e){try{qn?.destroy?.()}catch(o){console.warn(o)}Di.innerHTML="",Qn.clear(),_r.innerHTML="";let i=t.phase;document.body.className=document.body.className.replace(/\bphase-\w+/g,"").trim()+` phase-${i}`,document.body.classList.toggle("revealed",!!t.revealed),document.body.classList.toggle("racing",i==="RACE"||i==="INTRO"&&!!Ze),Kn({type:"screen",key:n});let s={LOBBY:i1,INTRO:l1,BETTING:t.revealed?p1:u1,RACE:m1,RESULTS:g1,SCOREBOARD:w1,FINALE:E1}[i];if(qn=s?s(t,e):{},qn.key=n,i==="BETTING"&&Ze&&tl===t.round?.roundId&&Su(Ze)){try{Ze.setPaused(!0)}catch{}document.body.classList.remove("racing")}else i!=="RACE"&&i!=="RESULTS"&&i!=="INTRO"&&fo()}var du=null;function vu(n,t=!1){if(!uo)return;let e={LOBBY:"lobby",BETTING:n.revealed?null:"betting",SCOREBOARD:"lobby",RESULTS:null,INTRO:null,RACE:null,FINALE:null}[n.phase];e===du&&!t||(du=e,e?se.startMusic(e):se.stopMusic(1.2))}function _u(n){let t=[...n].sort((i,s)=>s.bankroll-i.bankroll),e=new Map;return t.forEach((i,s)=>e.set(i.id,s>0&&i.bankroll===t[s-1].bankroll?e.get(t[s-1].id):s+1)),e}function Kv(n){let t=n.phase==="BETTING"&&!n.revealed;if(xr.classList.toggle("hidden",!t),document.body.classList.toggle("no-hud",!t),!t){xr.innerHTML="";return}let e=_u(n.players),i=n.phase==="RACE"?n.bets||{}:{};xr.innerHTML=n.players.map(s=>`<span class="pill ${s.connected?s.locked?"locked":"":"off"}" data-pid="${s.id}">${ln(s.avatar,40)}<b>${Ot(s.name)}</b><i>${s.connected?s.locked?"\u{1F512} locked":"\u{1F914}":"\u{1F4F5}"}</i></span>`).join("")}function Qv(n){let t={INTRO:"Skip intros \u23ED",RACE:"Skip race \u23ED",RESULTS:"Next \u25B6",SCOREBOARD:n.roundNumber>=n.roundsPerGame?"Final results \u25B6":"Next round \u25B6",FINALE:(()=>{let e=[...n.players].sort((i,s)=>i.bankroll-s.bankroll)[0];return n.players.length>1&&e?`${e.name} demands a REMATCH \u21BB`:"Play again \u21BB"})(),BETTING:n.revealed?"Start race \u25B6":null}[n.phase];if(!t){ho.innerHTML="";return}ho.dataset.label!==t&&(ho.dataset.label=t,ho.innerHTML=`<button class="btn ${n.phase==="RACE"||n.phase==="INTRO"?"ghost small":n.phase==="FINALE"?"red big rematch":"white"}">${t} <span style="opacity:.6;font-size:.7em">SPACE</span></button>`,ho.firstElementChild.addEventListener("click",e=>{e.stopPropagation(),Mr(),Dh()}))}function rs(n,t=""){let e=Ye(`<div class="t panel ${t==="red"?"red":"yellow"} anim-pop">${Ot(n)}</div>`),i=Se("#toast");i.innerHTML="",i.appendChild(e),setTimeout(()=>{e.parentNode&&e.remove()},3200)}function t1(n){se.duck(!0);let t=Ye(`<div class="sub"><span class="who ${n.speaker==="pam"?"pam":"jeff"}">${n.speaker==="pam"?"PAM":"JEFF"}</span><span>${Ot(n.text)}</span></div>`);_r.appendChild(t);let e=1;for(;_r.children.length>e;)_r.firstElementChild.remove();let i=Math.max(3e3,n.text.split(/\s+/).length*420+1500);setTimeout(()=>{t.classList.add("out"),setTimeout(()=>t.remove(),450)},i),Kn({type:"line",text:n.text,speaker:n.speaker})}var Fe=(n,t="jeff",e=2)=>Qn.say(n,t,{priority:e});function e1(n){let t=[`${n} has locked in. No take-backs!`,`And ${n}'s money is down!`,`${n} has committed. Bold. Possibly foolish.`,`Bets are in from ${n}!`];return t[Math.floor(Math.random()*t.length)]}function n1(n,t){let e=we?.players.find(o=>o.id===n),i=xr.querySelector(`[data-pid="${n}"]`),s;if(i&&!xr.classList.contains("hidden")){let o=i.getBoundingClientRect(),a=yr.getBoundingClientRect(),l=a.width/1920;s=(o.left+o.width/2-a.left)/l+(Math.random()-.5)*160}else{let o=we?.players.findIndex(a=>a.id===n)??0;s=(we?.phase==="RACE"?1790-o*90:o%2===0?70:1790)+(Math.random()-.5)*60}let r=Ye(`<div class="react" style="left:${Math.round(s-60)}px;--rot:${Math.round((Math.random()-.5)*40)}deg"><span class="e">${Ot(t)}</span>${e?ln(e.avatar,46):""}</div>`);qv.appendChild(r),se.play("pop"),setTimeout(()=>r.remove(),3300)}function xn(n,t){return new Promise(e=>{let i=setTimeout(e,Hn(n));t?.timers.push(i)})}function Qa(){return{cancelled:!1,timers:[]}}function po(n){n.cancelled=!0,n.timers.forEach(t=>{clearTimeout(t),clearInterval(t)})}async function zn(n,t,e=12e3){let i=Date.now();if(await xn(t,n),!(As>1.5))for(;!n.cancelled&&Qn.busy&&Date.now()-i<e;)await new Promise(s=>setTimeout(s,150))}var xi=(n,t=120)=>Gh(n,{size:t,idSuffix:Math.random().toString(36).slice(2,6)});function Mu(){return`<div class="clouds">${[0,1,2,3,4].map(n=>`<div class="cloud" style="top:${40+n*70}px;width:${180+n%3*70}px;height:${50+n%2*18}px;animation-duration:${70+n*17}s;animation-delay:-${n*19}s"></div>`).join("")}</div>
  <svg class="hills" viewBox="0 0 1920 260" preserveAspectRatio="none"><path d="M0 150 Q 240 40 520 120 T 1040 110 T 1500 90 T 1920 130 V260 H0Z" fill="#2ec27e" stroke="#14183c" stroke-width="6"/><path d="M0 200 Q 300 140 640 190 T 1280 180 T 1920 190 V260 H0Z" fill="#169c5b" stroke="#14183c" stroke-width="6"/></svg>`}var pr=[100,250,500,1e3,2e3,5e3],mr=[0,60,90,120,180];function i1(n){let t=Ye(`<div class="lobby">
    ${Mu()}
    <div class="logo"><div class="word outlined">MARK<span class="r">RUN</span></div><br><div class="ribbon"><span>THE FINSBURY PARK FORM GUIDE</span></div></div>
    <div class="tagline">Real parkruns. Real Mark. Fake money. \u{1F377}</div>
    <div class="qr-card panel white"><div class="qr"></div><div class="scan">\u{1F4F1} SCAN TO JOIN</div><div class="url"></div></div>
    <div class="slots"></div>
    <div class="settings panel cream hidden"></div>
    <div class="start-wrap"></div>
  </div>`);Di.appendChild(t),Se(".qr",t).innerHTML=n.qrSvg||"",Se(".url",t).textContent=(n.joinUrl||"").replace(/^https?:\/\//,""),Fe(n.players.length?"Welcome back to MARKRUN!":"Welcome to MARKRUN! Grab your phones and scan the code.","jeff",1);let e=(l,h,u,g)=>`<div class="set" data-k="${h}"><div class="lbl">${l}</div><div class="ctl-row">${g.replace("{val}",`<span class="val">${u}</span>`)}</div></div>`;function i(l){let h=[],u=Math.max(2,l.players.length);for(let d=0;d<u;d++){let M=l.players[d];if(M){let m=M.connected?M.ready?'<span class="tag" style="background:var(--grass);color:#fff">\u2713 READY</span>':'<span class="tag">joined</span>':'<span class="tag" style="background:var(--tomato);color:#fff">\u{1F4F5} offline</span>';h.push(`<div class="slot panel slant ${s.has(M.id)?"":"joined"}" style="background:${Ot(M.avatar.colour)}"><div class="unslant" style="display:flex;align-items:center;gap:24px;width:100%">${ln(M.avatar,92)}<div><div class="sname">${Ot(M.name)}${l.settings.runnerPlayerId===M.id?' <span class="tag markt">\u{1F3C3} THE REAL MARK</span>':""}</div><div class="ssub">${Mn(M.bankroll)} to gamble${l.settings.runnerPlayerId&&l.settings.runnerPlayerId!==M.id?" \xB7 gets an extra \u{1F525} hot tip":""}</div></div><span class="slot-badge">${m}</span><button class="btn small white kick" data-kick="${M.id}" title="Remove player">\u2715</button></div></div>`)}else h.push(`<div class="slot panel slant empty"><div class="unslant" style="display:flex;align-items:center;gap:24px"><div class="ghost-av">?</div><div><div class="sname">Player ${d+1}</div><div class="ssub">Scan the code to take this seat</div></div></div></div>`)}s=new Set(l.players.map(d=>d.id)),Se(".slots",t).innerHTML=h.join(""),Se(".slots",t).classList.toggle("many",u>2);let g=l.settings,f=Math.round((g.volume??.8)*10);Se(".settings",t).innerHTML=[e("Starting pot","startingBankroll",Mn(g.startingBankroll),'<button class="btn small white" data-d="-1">\u2212</button>{val}<button class="btn small white" data-d="1">+</button>'),e("Rounds","roundsPerGame",g.roundsPerGame,'<button class="btn small white" data-d="-1">\u2212</button>{val}<button class="btn small white" data-d="1">+</button>'),e("Bet timer","betTimer",g.betTimer?`${g.betTimer}s`:"Off",'<button class="btn small white" data-d="-1">\u2212</button>{val}<button class="btn small white" data-d="1">+</button>'),e("Drinking","drinkingMode","",`<button class="btn small toggle ${g.drinkingMode?"on":"off"}" data-toggle>${g.drinkingMode?"\u{1F37A} ON":"OFF"}</button>`),e("Voice","voice","",`<button class="btn small toggle ${g.voice?"on":"off"}" data-toggle>${g.voice?"\u{1F399}\uFE0F ON":"OFF"}</button>`),e("Music","music","",`<button class="btn small toggle ${g.music?"on":"off"}" data-toggle>${g.music?"\u{1F3B5} ON":"OFF"}</button>`),e("Volume","volume",`${f*10}%`,'<button class="btn small white" data-d="-1">\u2212</button>{val}<button class="btn small white" data-d="1">+</button>')].join("");let c=l.players.length&&l.players.every(d=>d.ready);Se(".start-wrap",t).innerHTML=`<button class="btn green ${l.players.length?"pulse":""}" data-start ${l.players.length?"":"disabled"}>${l.players.length?l.players.length===1?"START SOLO \u25B6":"LET'S RACE \u25B6":"Waiting for players\u2026"}</button>
      <div class="hint">${l.refreshing?"\u23F3 Refreshing historical data\u2026":l.players.length?c?"Everyone is ready!":"Press SPACE \u2014 or everyone taps READY on their phone":"Up to 4 players \xB7 best with 2"}</div>
      <button class="btn small white refresh-btn" data-options>\u2699 Options</button>`,r&&o(l)}let s=new Set(n.players.map(l=>l.id)),r=!1;function o(l){let h=Se("#tvmodal.opts");h||(h=mo('<h2 class="outlined white thin">\u2699 Options</h2><div class="optgrid"></div><div class="row"><button class="btn small white" data-refresh>\u27F3 Refresh Historical Data\u2026</button><span style="flex:1"></span><button class="btn green" data-ok>Done <small>ENTER</small></button></div>'),h.classList.add("opts"),h.addEventListener("click",u=>{let g=u.target.closest("button");if(g){if(g.dataset.ok!==void 0){r=!1,Li();return}a(g)}})),Se(".optgrid",h).innerHTML=Se(".settings",t).innerHTML}function a(l){if(se.play("tick"),l.dataset.refresh!==void 0)return r=!1,fu();let h=l.closest("[data-k]")?.dataset.k;if(!h)return;let u=we.settings;if(l.dataset.toggle!==void 0)return An({t:"settings",settings:{[h]:!u[h]}});let g=Number(l.dataset.d),f;if(h==="startingBankroll"){let c=pr.indexOf(u[h]);f=pr[Math.max(0,Math.min(pr.length-1,(c<0?2:c)+g))]}else if(h==="betTimer"){let c=mr.indexOf(u[h]);f=mr[Math.max(0,Math.min(mr.length-1,(c<0?0:c)+g))]}else h==="volume"?f=Math.round(Math.max(0,Math.min(1,(u.volume??.8)+g*.1))*10)/10:f=u[h]+g;return An({t:"settings",settings:{[h]:f}})}return i(n),t.addEventListener("click",l=>{Mr();let h=l.target.closest("button");if(!h)return;if(se.play("tick"),h.dataset.start!==void 0)return Dh();if(h.dataset.refresh!==void 0)return fu();if(h.dataset.options!==void 0)return r=!0,o(we);if(h.dataset.kick)return An({t:"kick",playerId:h.dataset.kick});let u=h.closest("[data-k]")?.dataset.k;if(!u)return;let g=we.settings;if(h.dataset.toggle!==void 0)return An({t:"settings",settings:{[u]:!g[u]}});let f=Number(h.dataset.d),c;if(u==="startingBankroll"){let d=pr.indexOf(g[u]);c=pr[Math.max(0,Math.min(pr.length-1,(d<0?2:d)+f))]}else if(u==="betTimer"){let d=mr.indexOf(g[u]);c=mr[Math.max(0,Math.min(mr.length-1,(d<0?0:d)+f))]}else u==="volume"?c=Math.round(Math.max(0,Math.min(1,(g.volume??.8)+f*.1))*10)/10:c=g[u]+f;An({t:"settings",settings:{[u]:c}})}),{update:l=>i(l)}}var s1=()=>!!Se("#tvmodal");function Li(){Se("#tvmodal")?.remove()}function mo(n){Li();let t=Ye(`<div id="tvmodal"><div class="tvm panel white anim-pop">${n}</div></div>`);return yr.appendChild(t),t.addEventListener("click",e=>{e.target===t&&Li()}),t}function r1(n){Se("#tvauth")||document.body.appendChild(Ye(`<div id="tvauth"><div class="panel white" style="padding:30px 40px;max-width:900px;font-size:26px"><h2 style="font-family:var(--font-display);font-weight:400;margin:0 0 10px">\u{1F4FA} Not the TV</h2><p>${Ot(n)}</p></div></div>`))}function o1(n){Mr(),se.play("bell");let t=mo(`<h2 class="outlined white thin">\u{1F4F1} New phone for ${Ot(n.name||"a player")}?</h2>
    <p>Someone on a <b>new phone</b> wants to take over <b>${Ot(n.name||"")}</b>'s seat (and see their secret clues).</p>
    <p>Only allow it if ${Ot(n.name||"they")} really did switch phones. Auto-denied in 30 seconds.</p>
    <div class="row"><button class="btn white" data-cancel>Deny <small>ESC</small></button><button class="btn green" data-ok>Allow <small>ENTER</small></button></div>`);t.dataset.req=n.reqId,Se("[data-cancel]",t).onclick=()=>{An({t:"claimAnswer",reqId:n.reqId,allow:!1}),Li()},Se("[data-ok]",t).onclick=()=>{An({t:"claimAnswer",reqId:n.reqId,allow:!0}),Li()}}function fu(){if(we?.phase!=="LOBBY")return;let n=mo(`<h2 class="outlined white thin">\u27F3 Refresh Historical Data</h2>
    <p><b>This uses the internet.</b> It contacts parkrun, Strava (if set up) and the weather archive to fetch any new runs since the last refresh, then rebuilds the local database.</p>
    <p>It can take a few minutes. The game itself never goes online \u2014 this is the only button that does.</p>
    <div class="row"><button class="btn white" data-cancel>Cancel <small>ESC</small></button><button class="btn green" data-ok>Refresh now <small>ENTER</small></button></div>`);Se("[data-cancel]",n).onclick=Li,Se("[data-ok]",n).onclick=()=>{An({t:"refresh"}),mo('<h2 class="outlined white thin">\u27F3 Refreshing\u2026</h2><div class="rlog"></div><div class="row"><button class="btn white" data-cancel disabled>Working\u2026</button></div>')}}function bu(n,t){let e=Se("#tvmodal .rlog");for(e||(mo('<h2 class="outlined white thin">\u27F3 Refreshing\u2026</h2><div class="rlog"></div><div class="row"><button class="btn white" data-cancel disabled>Working\u2026</button></div>'),e=Se("#tvmodal .rlog")),e.appendChild(Ye(`<div class="rl"><b>${Ot(n)}</b> ${Ot(t)}</div>`));e.children.length>9;)e.firstElementChild.remove()}function a1(n,t){t&&bu("error",t);let e=Se("#tvmodal [data-cancel]");e&&(e.disabled=!1,e.textContent=n?"Done \u2713":"Close",e.onclick=Li),rs(n?"Historical data refreshed!":"Refresh had problems \u2014 existing data kept",n?"":"red")}var uu=null,vr=null,Ze=null,ss=null,tl=null,Su=n=>ss==="3d"&&typeof n?.loadPlan=="function"&&(typeof n?.setBackedBy=="function"||n?.loadPlan.length>=2);function fo(){if(Ze){try{Ze.dispose()}catch(n){console.warn(n)}Ze=null,ss=null,tl=null,gr.innerHTML="",document.body.classList.remove("racing")}}async function Lh(n,{allow2d:t=!0}={}){fo();let e=kh||await Yv,i={course:e.course,park:e.park,speed:As,...n};if(ki?.createRaceView&&!Ya)try{try{Ze=await ki.createRaceView(gr,i)}catch(s){if(i.plan||!i.round)throw s;gr.innerHTML="",Ze=await ki.createRaceView(gr,{...i,plan:su(i.round)})}return tl=i.round?.roundId||null,ss="3d",window.__markrun.raceView=Ze,Kn({type:"raceview",kind:"3d"}),Ze}catch(s){console.error("3D race view failed, using 2D fallback",s),Kn({type:"raceview-error",msg:String(s?.message||s)}),gr.innerHTML=""}return!t||!n.plan?null:(Ze=Yh(gr,i),ss="2d",window.__markrun.raceView=Ze,Kn({type:"raceview",kind:"2d"}),Ze)}function pu(n){(n.introLines?.length?n.introLines:[{speaker:"jeff",text:`Welcome to Finsbury Park for round ${n.number}: ${n.title}!`}]).slice(0,2).forEach(e=>Fe(e.text,e.speaker,3))}function l1(n){let t=Qa(),e=n.round,i=[...e.runners].sort((m,p)=>m.lane-p.lane),s=Ye(`<div class="intro">${Mu()}<div class="tint"></div><div class="stagebox"></div><div class="intro-dots">${i.map(()=>"<i></i>").join("")}</div></div>`);Di.appendChild(s);let r=Se(".stagebox",s),o=(n.bailouts||[]).map(m=>`${Ot(n.players.find(p=>p.id===m.playerId)?.name||"")} got a ${Mn(m.amount)} bailout from the Bank of Mum &amp; Dad`).join("<br>"),a=`<div class="title-card"><div class="anim-pop"><div class="rn outlined white">ROUND ${e.number} <span style="opacity:.8">of ${n.roundsPerGame}</span></div><div class="rt outlined" style="font-size:${e.title.length>22?104:150}px">${Ot(e.title)}</div><div class="rs">${i.length} runners. All of them Mark. Only one of them is having a good day.</div>${e.theme?.label?`<div class="theme-badge panel slant grape"><div class="unslant"><span class="tk">THEME</span>${Ot(e.theme.label)}</div></div>${e.theme.blurb?`<div class="tblurb">${Ot(e.theme.blurb)}</div>`:""}`:""}${Number(e.payoutMultiplier)>=2?'<div class="double-badge outlined">DOUBLE PAYOUT FINALE \xD72</div>':""}${e.notice?`<div class="bail panel grape" style="color:#fff">\u{1F0CF} ${Ot(e.notice)}</div><br>`:""}${o?`<div class="bail panel yellow">\u{1F4B8} ${o}</div>`:""}</div></div>`,l=m=>`<div class="l3 anim-left" style="--c1:${Ot(m.colour.primary)}"><div class="l3p">${xi(m,150)}</div><div class="l3t"><b>${Ot(Uh(m))}</b><span>${Ot(m.tagline||"")}</span></div><div class="l3o"><small>ODDS</small><span class="num">${Ot(m.odds?.display||"")}</span></div></div>`;async function h(m){let p=i[m];hi(".intro-dots i",s).forEach((y,_)=>y.classList.toggle("on",_===m)),r.innerHTML=l(p),se.play("whoosh"),Fe(p.intro||`${p.nickname}. ${p.tagline||""}`,m%2?"pam":"jeff",3);let S=vo(p.publicClue,8);S.kicker&&!/^…/.test(S.kicker)&&Fe(`${S.headline} ${S.kicker}`,m%2?"jeff":"pam",2),await zn(t,4800,6500)}async function u(){t.cancelled||(hi(".intro-dots i",s).forEach(m=>m.classList.remove("on")),r.innerHTML='<div class="bets-open"><div class="anim-pop"><div class="big outlined">BETS ARE OPEN!</div><div class="sub2 outlined white thin">\u{1F4F1} Grab your phones \u2014 your secret clues are waiting \u{1F92B}</div></div></div>',se.play("kaching"),Fe("The book is open! Check your phones for your secret clues.","pam",3),await zn(t,2500,4e3),t.cancelled||An({t:"introDone",roundId:e.roundId}))}let g=Date.now(),f=setInterval(()=>An({t:"progress",phase:"INTRO",roundId:e.roundId,value:Date.now()-g}),2e3);t.timers.push(f);async function c(){if(e.number!==1||uu===n.gameNumber)return;uu=n.gameNumber,r.innerHTML=`<div class="cold"><div class="cw outlined">MARK<span>RUN</span></div><div class="cs outlined white thin">${Ot(n.players.map(p=>p.name).join(" vs "))}</div><div class="cp">${n.players.map(p=>ln(p.avatar,110)).join('<span class="vsx outlined">VS</span>')}</div></div>`,se.play("drumroll",{dur:1.4}),setTimeout(()=>{se.play("fanfare"),se.play("crowd",{dur:3,peak:.3})},Hn(1500));let m=ja("coldOpenLines",n.players.map(p=>({name:p.name})))||[{speaker:"jeff",text:`Good evening, ${n.players.map(p=>p.name).join(" and ")}! Welcome to MARKRUN!`}];await xn(1600,t),m.slice(0,2).forEach(p=>Fe(p.text,p.speaker,3)),await zn(t,6e3,9e3)}async function d(){if(e.number!==1)return;let m=[["\u{1F4FA} + \u{1F92B}","One clue on the telly,","one secret on your phone.","One clue on the telly, one secret on your phone. Read both."],["\u{1F525}","HOT TIP","means the bookie doesn't know this.","If it's got a fire on it, the bookie doesn't know about it. Use it."],["\xBD \xB7 \xD72","Half your pot per round.","The final round pays DOUBLE.","You can bet half your pot each round. The final round pays double. Pace yourselves."]];vr=!1;for(let[p,S,y,_]of m){if(t.cancelled||vr)break;r.innerHTML=`<div class="explain"><div class="anim-pop"><div class="ei">${p}</div><div class="e1 outlined">${Ot(S)}</div><div class="e2 outlined white thin">${Ot(y)}</div></div><div class="eskip">SPACE to skip</div></div>`,se.play("reveal"),Fe(_,"pam",3);let N=Date.now();for(;!vr&&!t.cancelled&&(Date.now()-N<Hn(4500)||As<=1.5&&Qn.busy&&Date.now()-N<1e4);)await new Promise(w=>setTimeout(w,100))}vr=null,Qn.clear()}async function M(m){r.innerHTML=`${a}<div class="lineup">${i.map(y=>`<div class="lu"><div class="rp">${xi(y,120)}</div><b>${Ot(Ni(y))}</b><span class="num">${Ot(y.odds?.display||"")}</span></div>`).join("")}</div>`,se.play("fanfare");let p=(e.introLines||[]).find(y=>y.text)||{speaker:"jeff",text:`Round ${e.number}: ${e.title}! Five Marks, one winner.`};Fe(p.text,p.speaker||"jeff",3);let S=i.map(y=>y.tagline).filter(Boolean)[Math.floor(Math.random()*i.length)];if(S&&Fe(S,"pam",2),m)try{let y=m.playIntro(()=>{}),_=i.length;m.seek?.((y?.flyoverS??7)+_*(y?.perRunnerS??4.2)+.5)}catch(y){console.warn(y)}await zn(t,5e3,11e3)}return(async()=>{if(await c(),!t.cancelled&&(await d(),!t.cancelled)){if(e.number>=2){let m=null;if(!Ya&&ki?.createRaceView&&(m=await Lh({round:e,backedBy:{},introCards:!1},{allow2d:!1}).catch(()=>null),m&&!t.cancelled&&(document.body.classList.add("racing"),s.classList.add("over3d"),s.querySelector(".clouds")?.remove(),s.querySelector(".hills")?.remove())),t.cancelled)return;await M(m),await u();return}if(!Ya&&ki?.createRaceView){let m=new Map(i.map((S,y)=>[S.id,y])),p=await Lh({round:e,backedBy:{},introCards:!1,onIntroRunner:S=>t.cancelled?void 0:h(m.get(S)??0)},{allow2d:!1}).catch(()=>null);if(p&&!t.cancelled){document.body.classList.add("racing"),s.classList.add("over3d"),s.querySelector(".clouds")?.remove(),s.querySelector(".hills")?.remove(),r.innerHTML=a,se.play("fanfare"),pu(e);let S=!1,y=setTimeout(()=>{S||(S=!0,u())},Hn(15e4));t.timers.push(y);try{p.playIntro(()=>{S||(S=!0,clearTimeout(y),u())})}catch(_){console.error(_),S=!0,u()}return}}if(!t.cancelled){r.innerHTML=a,se.play("fanfare"),pu(e),await zn(t,4200,6e3);for(let m=0;m<i.length&&!t.cancelled;m++)await h(m),t.cancelled||await xn(700,t);await u()}}})(),{destroy:()=>{po(t)}}}var Uh=n=>n.nickname.length<=18?n.nickname:Ni(n);function c1(n){let{headline:t,kicker:e}=vo(n.publicClue,8);return`<div class="rc panel" data-rid="${n.id}">
    <div class="top stripe" style="--c1:${Ot(n.colour.primary)};--c2:${Ot(h1(n.colour.primary))}"><div class="rp">${xi(n,170)}</div></div>
    <div class="odds"><span class="num">${Ot(n.odds?.display||"")}</span></div>
    <div class="nick">${Ot(Uh(n))}</div>
    <div class="clue"><b>${Ot(t)}</b>${e?`<small>${Ot(e)}</small>`:""}</div>
  </div>`}function h1(n){let t=parseInt(String(n).replace("#",""),16),e=i=>Math.round(i+(255-i)*.25);return`#${[t>>16&255,t>>8&255,t&255].map(i=>e(i).toString(16).padStart(2,"0")).join("")}`}function d1(n){let t=n?.theme,e=Number(n?.payoutMultiplier)>=2;return`${t?.label?`<div class="theme-badge panel slant grape"><div class="unslant"><span class="tk">THEME</span>${Ot(t.label)}</div></div>`:""}${e?'<div class="double-badge outlined">DOUBLE PAYOUT \xD72</div>':""}`}function f1(n){let t=(n.matchups||[]).map(i=>{let s=_n(n,i.a),r=_n(n,i.b);return!s||!r?"":`<span class="si"><i class="dot" style="background:${Ot(s.colour.primary)}"></i>${Ot(Ni(s))} <em>${Ot(i.odds.displayA||`\xD7${i.odds.a}`)}</em> <span class="vs">v</span> <i class="dot" style="background:${Ot(r.colour.primary)}"></i>${Ot(Ni(r))} <em>${Ot(i.odds.displayB||`\xD7${i.odds.b}`)}</em></span>`}),e=(n.props||[]).map(i=>`<span class="si prop">\u{1F3A1} ${Ot(i.text)} <em>${Ot(i.odds?.displayYes||"")}</em></span>`);return[...t,...e].filter(Boolean).join('<span class="sep">\xB7</span>')}function u1(n){let t=n.round,e=[...t.runners].sort((f,c)=>f.lane-c.lane),i=Ye(`<div class="betting">
    <div class="bet-head"><div class="h outlined">PLACE YOUR BETS!</div><div class="rt">Round ${t.number}/${n.roundsPerGame} \xB7 ${Ot(t.title)}</div>${d1(t)}<div class="timer num hidden"></div></div>
    <div class="runner-grid n${e.length}">${e.map(f=>c1(f)).join("")}</div>
    <div class="bstrip">${f1(t)}</div>
    ${t.notice?`<div class="notice panel grape">\u{1F0CF} ${Ot(t.notice)}</div>`:""}
  </div>`);Di.appendChild(i),hi(".rc",i).forEach((f,c)=>{f.style.animation=`slide-up .5s ${c*.08}s cubic-bezier(.2,1.3,.4,1) both`});let s=Se(".timer",i),r=null;function o(){if(!we?.deadline||we.phase!=="BETTING"||we.revealed){s.classList.add("hidden");return}let f=Math.max(0,Math.ceil((we.deadline-Ja.serverNow())/1e3));s.classList.remove("hidden"),s.textContent=`${Math.floor(f/60)}:${String(f%60).padStart(2,"0")}`,f<=10&&f!==r&&se.play("tick"),r=f}let a=setInterval(o,250);o();let l=[["jeff","Each of you has one red-hot insider tip on your phone. Find it. Use it."],["pam","Every one of these runners is Mark. The question is: which Mark turned up?"],["jeff","Head-to-heads are a lovely way to lose money slowly."]];Number(t.payoutMultiplier)>=2?Fe("Final round, and every payout is doubled! Fortunes will be made. Mostly lost.","jeff",3):t.theme?.label&&Fe(`Today's theme: ${t.theme.label}. ${t.theme.blurb||""}`,"pam",2);let h=e.map(f=>({r:f,k:vo(f.publicClue,8).kicker})).filter(f=>f.k&&!/^…/.test(f.k)),u=h[Math.floor(Math.random()*h.length)],g=setTimeout(()=>{if(u)Fe(`${Ni(u.r)}: ${u.k}`,"pam",1);else{let f=l[Math.floor(Math.random()*l.length)];Fe(f[1],f[0],1)}},Hn(12e3));return{destroy:()=>{clearInterval(a),clearTimeout(g)}}}function p1(n){let t=Qa(),e=n.round,i=[...e.runners].sort((l,h)=>l.lane-h.lane),s=(n.revealSeq||[]).filter(l=>l&&l.bet);if(!s.length){let l=(n.betLines||[]).slice();s=n.players.flatMap(h=>(n.bets?.[h.id]||[]).map(u=>({playerId:h.id,bet:u}))).sort((h,u)=>h.bet.stake-u.bet.stake).map(h=>({...h,line:l.shift()||null}))}let r=l=>n.players.find(h=>h.id===l)?.avatar?.colour||"#fff",o=Ye(`<div class="faceoff">
    <div class="rh outlined">THE BETS ARE IN!</div>
    <div class="fo-grid">${i.map(l=>`<div class="fo-card" data-rid="${l.id}"><div class="fo-top" style="background:${Ot(l.colour.primary)}"><div class="rp">${xi(l,150)}</div></div><b>${Ot(Uh(l))}</b><span class="num">${Ot(l.odds?.display||"")}</span><div class="fo-chips"></div></div>`).join("")}</div>
    <div class="fo-side"></div>
    <div class="fo-legend">${n.players.map(l=>`<span class="lg">${ln(l.avatar,40)}<b>${Ot(l.name)}</b><i data-tot="${l.id}">0pp</i></span>`).join("")}</div>
  </div>`);Di.appendChild(o);let a={};return(async()=>{se.play("drumroll",{dur:1.2/As+.2}),Fe(s.length?"Right then. The bets, smallest first!":"Nobody has bet a penny. Cowards, the lot of them.","jeff",3),await xn(1300,t);let l=Math.max(1,...s.map(u=>u.bet.stake));for(let u=0;u<s.length&&!t.cancelled;u++){let{playerId:g,bet:f,line:c}=s[u],d=n.players.find(_=>_.id===g),M=xo(f),m=u===s.length-1&&s.length>1,p=Ye(`<div class="fchip ${m?"big":""} anim-pop" style="--pc:${Ot(r(g))}">${ln(d?.avatar,34)}<b>${Mn(f.stake)}</b><small>wins +${Mn(il(e,f))}</small>${f.type==="h2h"?"<i>\u2694\uFE0F</i>":f.type==="special"||f.boost?"<i>\u{1F680}</i>":""}</div>`),S=M?o.querySelector(`.fo-card[data-rid="${M}"] .fo-chips`):null;S?S.appendChild(p):Se(".fo-side",o).appendChild(Ye(`<div class="fside anim-pop" style="--pc:${Ot(r(g))}">${ln(d?.avatar,34)}<span>\u{1F3A1} ${Ot(yo(e,f))}</span><b>${Mn(f.stake)}</b><small>wins +${Mn(il(e,f))}</small></div>`)),M&&o.querySelector(`.fo-card[data-rid="${M}"]`)?.classList.add("backed"),se.play(m?"kaching":"chip",{p:f.stake/l}),a[g]=(a[g]||0)+f.stake;let y=o.querySelector(`[data-tot="${g}"]`);y&&(y.textContent=Mn(a[g])),c?.text&&Fe(c.text,c.speaker||"jeff",m?3:1),await xn(m?1600:900,t)}if(t.cancelled)return;let h=[];if(n.players.length>=2){let[u,g]=n.players,f=n.bets?.[u.id]||[],c=n.bets?.[g.id]||[];for(let p of f.filter(S=>S.type==="h2h")){let S=c.find(y=>y.type==="h2h"&&y.matchupId===p.matchupId&&y.pick!==p.pick);S&&h.push([p.pick,S.pick])}let d=(p,S)=>p.filter(y=>y.type==="win"||y.type==="special").sort((y,_)=>_.stake-y.stake)[0],M=d(f),m=d(c);if(!h.length&&M&&m&&M.runnerId!==m.runnerId&&M.stake>=.2*u.bankroll&&m.stake>=.2*g.bankroll&&h.push([M.runnerId,m.runnerId]),h.length){for(let S of h[0])o.querySelector(`.fo-card[data-rid="${S}"]`)?.classList.add("clash");o.appendChild(Ye('<div class="clash-stamp"><div class="anim-pop outlined">CLASH!</div></div>')),se.play("sting"),se.play("stamp");let p=s.map(S=>S.line?.text).find(S=>/both|against|clash|opposite|other side/i.test(S||""));Fe(p||`${u.name} and ${g.name} are on opposite sides. Somebody's sleeping on the sofa tonight.`,"pam",3),await xn(2200,t)}}if(await zn(t,1200,4e3),!t.cancelled){for(let u of ki?.createRaceView&&!Ya?[]:["3","2","1"]){if(t.cancelled)return;let g=Ye(`<div class="countdown outlined anim-pop">${u}</div>`);o.appendChild(g),se.play("beep"),await xn(700,t),g.remove()}t.cancelled||An({t:"revealDone",roundId:e.roundId})}})(),{destroy:()=>po(t)}}function mu(n){let t=n.market,e=n.round;if(!t)return'<div class="mk-wait outlined white thin">Opening the market\u2026</div>';let i=new Set(n.players.filter(r=>(n.bets?.[r.id]||[]).some(o=>o.type==="inplay")).map(r=>r.id));return`<div class="mk panel white"><div class="mkh"><span class="outlined">HALFWAY MARKET</span><span class="mkt num" data-mkt></span></div>
    <div class="mks">One bet each, on your phone. Prices from the standings right now.</div>
    <div class="mkrows">${(t.standings||[]).map(r=>{let o=_n(e,r.runnerId),a=t.odds?.[r.runnerId];return`<div class="mkrow">${os(r.place)}<span class="rp">${o?xi(o,64):""}</span><span class="nm">${Ot(o?.nickname||r.runnerId)}</span><span class="gp">${r.place===1?"LEADS":`+${Number(r.gapS).toFixed(1)}s`}</span><span class="od num">${Ot(a?.display||"")}</span></div>`}).join("")}</div>
    <div class="mkp">${n.players.map(r=>`<span class="mkpl ${i.has(r.id)?"in":""}">${ln(r.avatar,44)}${Ot(r.name)} ${i.has(r.id)?"\u2713 IN":"\u2026"}</span>`).join("")}</div></div>`}function m1(n){let t=Qa(),e=n.round,i=Ye(`<div class="race-ov"><div class="live panel slant red"><div class="unslant" style="display:flex;gap:14px;align-items:center"><span class="dot"></span>LIVE \xB7 ${Ot(e.title)}</div></div><div class="market-layer"></div><div class="ifnow"></div><div class="stamps"></div></div>`);Di.appendChild(i),document.body.classList.add("racing");let s=Se(".market-layer",i),r=0,o=0,a="idle",l=Se(".ifnow",i),h={},u=null;function g(w){let R=n.racePlan,A=Fi(R.timeMap,Math.max(0,w));return R.runners.map(v=>({id:v.id,d:$n(v.progress,A),f:v.officialS,done:A>=v.officialS})).sort((v,x)=>v.done&&x.done?v.f-x.f:x.d-v.d||v.f-x.f).map(v=>v.id)}function f(w){let R=w?.broadcastTime;if(!Number.isFinite(R)||R<3||!we?.bets)return;let A;try{A=Ph(we.round,we.bets,g(R))}catch{return}l.children.length||(l.innerHTML=we.players.map(v=>`<div class="ifp" data-pid="${v.id}">${ln(v.avatar,40)}<span class="nm">${Ot(v.name)}</span><b class="num">\xB10</b></div>`).join("")+'<div class="ifl">if it ended now</div>');for(let v of we.players){let x=Math.round(A?.[v.id]??0);if(h[v.id]===x)continue;let b=l.querySelector(`.ifp[data-pid="${v.id}"]`);if(!b)continue;let C=b.querySelector("b"),E=h[v.id];if(h[v.id]=x,E==null){C.textContent=ci(x);continue}el(C,E,x,600,T=>ci(T)),b.classList.remove("up","down"),b.offsetWidth,b.classList.add(x>E?"up":"down")}}let c=!1;function d(){if(c||t.cancelled)return;c=!0;let w={};try{w=Ph(we.round,we.bets||{},n.racePlan.finishOrder)}catch{}let R=Se(".stamps",i);we.players.forEach((A,v)=>{let x=Math.round(w[A.id]??0);setTimeout(()=>{if(t.cancelled)return;R.appendChild(Ye(`<div class="stamp ${x>0?"win":x<0?"lose":""}" style="--c:${Ot(A.avatar.colour)}">${ln(A.avatar,70)}<span>${Ot(A.name.toUpperCase())} ${x>0?`WINS ${Mn(x)}`:x<0?ci(x):"BREAKS EVEN"}</span></div>`)),se.play(x>0?"kaching":x<0?"boo":"stamp");let b=ja("stampLine",{name:A.name,net:x});b&&Fe(b.text,b.speaker,3)},Hn(350+v*1100))})}let M=!1,m=null,p=null,S=null;async function y(w){a="waiting";try{w.setPaused(!0,{market:!0,marketText:"Bet on your phones \u2014 one bet each!"})}catch{}if(se.play("bell"),se.play("crowd",{dur:2,peak:.2}),Qn.clear(),_r.innerHTML="",Fe("Halfway! The market is open. One bet each \u2014 quick!","jeff",3),An({t:"marketOpen",roundId:e.roundId}),s.innerHTML=mu(we),S=setInterval(()=>{let R=s.querySelector("[data-mkt]");if(R&&we?.market?.closesAt){let A=Math.max(0,Math.ceil((we.market.closesAt-Ja.serverNow())/1e3));A<=10&&A!==R.dataset.last*1&&(R.dataset.last=A,se.play("tick")),R.textContent=`${A}s`}},200),await new Promise(R=>{m=R,setTimeout(R,2e4),t.timers.push(setTimeout(()=>{we?.market||R()},3500))}),clearInterval(S),a="done",s.innerHTML="",!t.cancelled){Fe("Market closed! Back to the action!","pam",2);try{w.setPaused(!1)}catch{}}}let _=Date.now(),N=setInterval(()=>An({t:"raceTime",roundId:e.roundId,b:-1e5+(Date.now()-_)/1e3}),2e3);return t.timers.push(N),(async()=>{let w=null;if(Ze&&tl===e.roundId&&Su(Ze))try{typeof Ze.setBackedBy=="function"?(Ze.setBackedBy(n.backedBy||{}),Ze.loadPlan(n.racePlan)):Ze.loadPlan(n.racePlan,{backedBy:n.backedBy||{}}),Ze.setPaused(!1),w=Ze,Kn({type:"raceview",kind:"3d",reused:!0})}catch(A){console.warn("could not re-use the intro view",A)}if(w||(w=await Lh({round:e,plan:n.racePlan,backedBy:n.backedBy||{},onWinnerStamp:()=>d()})),clearInterval(N),t.cancelled)return;if(!w){i.appendChild(Ye('<div class="race-err panel red">Race view failed to load</div>'));return}document.body.classList.add("racing"),ss==="3d"&&i.querySelector(".live")?.remove(),ss!=="3d"?(se.play("horn"),setTimeout(()=>se.play("crowd",{dur:3,peak:.25}),300),Fe("And they're off!","jeff",3)):se.play("crowd",{dur:4,peak:.2}),Kn({type:"race-start",kind:ss}),p=setInterval(()=>{let A=w.broadcastTime;Number.isFinite(A)&&An({t:"raceTime",roundId:e.roundId,b:A})},1e3),u=setInterval(()=>f(w),500),w.playRace(A=>{if(!(t.cancelled||!A)){if(Kn({type:"race-event",e:A.type||"line",text:A.text}),A.kind==="countdown"){se.play(A.n===0?"go":"beep"),A.n===0&&(se.play("horn"),se.play("crowd",{dur:3,peak:.28}));return}if(A.kind==="photo_finish"){se.play("stamp"),se.play("heartbeat",{beats:5}),Fe("It's a photo finish! Hold your breath!","pam",3);return}if(A.kind==="winner_replay_done"){d();return}if(A.text&&(A.kind==="commentary"||!A.type)){a!=="waiting"&&Qn.say(A.text,A.speaker||"jeff",{priority:A.priority||2});return}switch(A.type){case"overtake":Date.now()-r>1500&&(r=Date.now(),se.play("whoosh"));break;case"lead_change":se.play("whoosh"),se.play("crowd",{dur:2,peak:.18});break;case"breakaway":se.play("crowd",{dur:2.5,peak:.2});break;case"lap":a==="idle"&&we?.marketAvailable?(Kn({type:"market"}),y(w)):se.play("bell");break;case"final_stretch":se.play("crowd",{dur:6,peak:.4}),we?.settings?.music!==!1&&se.startMusic("final");break;case"finish":o++,o===1&&(se.stopMusic(.6),se.play("fanfare"),se.play("crowd",{dur:4,peak:.45}));break;default:break}}},async()=>{t.cancelled||(Kn({type:"race-done"}),c||(d(),await xn(400+we.players.length*1100,t)),await xn(2500,t),t.cancelled||An({t:"raceDone",roundId:e.roundId}))});let R=Number(n.resumeB)||0;if(R>2)try{typeof w.seek=="function"?w.seek(R):w._debug?.seek&&(w._debug.seek(R),w.setPaused(!1)),Kn({type:"race-resume",b:R}),rs("Back on air! Resuming the race\u2026")}catch(A){console.warn("resume failed",A)}})(),{update(w){if(a==="waiting"){if(w.market&&!w.market.open){m?.();return}if(w.market&&!M){M=!0;let R=w.market.standings?.find(b=>b.place===1)||w.market.standings?.[0],A=w.market.standings?.find(b=>b.place===2),v=_n(w.round,R?.runnerId),x=_n(w.round,A?.runnerId);v&&Fe(`${v.nickname} leads at halfway and is now ${w.market.odds?.[R.runnerId]?.display||"odds-on"}.${x?` ${x.nickname}, ${Number(A.gapS).toFixed(1)} seconds back, is ${w.market.odds?.[A.runnerId]?.display||""}.`:""}`,"jeff",3)}s.innerHTML=mu(w)}},destroy:()=>{po(t),clearInterval(p),clearInterval(S),clearInterval(u),m?.(),se.stopMusic(.8)}}}function g1(n){let t=null,e=-1,i=Ye('<div class="results"></div>');Di.appendChild(i);let s=n.round,r=n.results;function o(m,p){return p.players.filter(S=>(p.bets?.[S.id]||[]).some(y=>xo(y)===m)).map(S=>ln(S.avatar,50))}let a=(m,p="")=>`<div class="res-head"><div class="h outlined">${m}</div>${p?`<div class="sh">${p}</div>`:""}</div>`,l=m=>{t.cancelled||An({t:"stageDone",stage:m})};async function h(m){let p=t,S=r.finishOrder.map(N=>{let w=_n(s,N.runnerId);return`<div class="orow panel slant ${N.place===1?"first":""}" style="${N.place===1?"":`background:${Ot(w?.colour?.primary||"#2a62e0")}`}"><div class="unslant" style="display:flex;align-items:center;gap:26px;width:100%">
        ${os(N.place)}<div class="rp">${w?xi(w,112):""}</div>
        <div class="nm ${N.place===1?"":"outlined white thin"}">${Ot(w?.nickname||N.runnerId)}${r.favouriteId===N.runnerId?' <span class="fav">FAV</span>':""}<small>${Ot(w?.tagline||"")}</small></div>
        <div class="bk">${o(N.runnerId,m).join("")}</div>
        <div class="tm"><span class="num">${Ot(N.timeText||Hh(N.officialS))}</span>${N.place>1&&N.gapS!=null?`<span class="gap">+${Math.round(N.gapS)}s</span>`:""}</div></div></div>`});i.innerHTML=a("THE RESULT","Official times, as recorded by the volunteers \u{1F4CB}")+`<div class="order">${S.join("")}</div>`;let y=hi(".orow",i);for(let N=y.length-1;N>=0;N--){if(p.cancelled)return;y[N].classList.add("show"),N===0?(se.play("fanfare"),Sr(document.body,{count:90})):se.play("pop"),await xn(N===1?1600:800,p)}(r.commentary||[]).slice(0,2).forEach(N=>Fe(N.text,N.speaker,3)),await zn(p,4e3,7e3),l(0)}async function u(){let m=t,p=r.finishOrder.map(A=>A.runnerId),S=new Map((r.reveal||[]).map(A=>[A.runnerId,A]));i.innerHTML=a("WHO WERE THEY REALLY?","Every runner was a real Mark, on a real Saturday \u{1F575}\uFE0F \u2014 details on your phones")+`<div class="reveal-grid">${p.map((A,v)=>{let x=_n(s,A),b=S.get(A)||{},C=r.finishOrder[v];return`<div class="rv" data-i="${v}">
        <div class="face front" style="background:${Ot(x?.colour?.primary)}"><div><div class="rp">${x?xi(x,220):""}</div><div class="q outlined">?</div></div></div>
        <div class="face back"><div class="bh" style="background:${Ot(x?.colour?.primary)}"><div class="rp">${x?xi(x,74):""}</div><div class="n">${Ot(x?.nickname||A)}</div></div>
          <div class="date">${Ot(b.dateText||b.date||b.headline||"")}</div>
          <div class="time num">${Ot(C?.timeText||"")}</div>
          ${(()=>{let E=(b.funFacts||[]).filter(Boolean),T=!b.stravaTitle||/^(morning|lunch|afternoon|evening|night)\s+(run|jog)$/i.test(String(b.stravaTitle).trim())||/^(run|parkrun)$/i.test(String(b.stravaTitle).trim()),k=T?E[0]?`<div class="strava fact"><span class="k">DID YOU KNOW?</span>${Ot(E[0])}</div>`:"":`<div class="strava"><span class="k">STRAVA TITLE</span>\u201C${Ot(b.stravaTitle)}\u201D</div>`,O=(Array.isArray(b.context)?b.context[0]:b.context||b.contextLine||b.contextText)||b.punchline||E[T?1:0];return k+(O?`<div class="ff">${Ot(O)}</div>`:"")})()}
          ${b.wasPB||b.pbKind?`<div class="pb">${b.pbKind==="finsbury"?"COURSE PB!":"PB! \u{1F3C5}"}</div>`:""}
          <div class="place">${os(C?.place||v+1)}</div>
        </div></div>`}).join("")}</div>`;let y=hi(".rv",i);await xn(900,m);for(let A=y.length-1;A>=0;A--){if(m.cancelled)return;y[A].classList.add("flip");let v=S.get(p[A]),x=_n(s,p[A]);se.play(A===0?"fanfare":"reveal"),A===y.length-1&&y.length>1&&Fe(`And in last place, ${x?.nickname}: ${v?.dateText||""}`,"pam",2),A===0&&(y[0].classList.add("winner-big"),Fe(`The winner, ${x?.nickname}: ${v?.dateText||""}, ${r.finishOrder[0]?.timeText||""}.`,"jeff",3)),await xn(A===0?1800:2200,m)}let _=S.get(p[0])||{},N=!_.stravaTitle||/^(morning|lunch|afternoon|evening|night)\s+(run|jog)$/i.test(String(_.stravaTitle).trim()),w=_.punchline||(N?"":`\u201C${_.stravaTitle}\u201D`);await zn(m,900,5e3),w&&!m.cancelled&&(i.appendChild(Ye(`<div class="punch"><div class="anim-pop">${Ot(w)}</div></div>`)),se.play("stamp"),Fe(w.replace(/[“”]/g,""),"pam",3));let R=typeof r.realMarkFact=="string"?r.realMarkFact:r.realMarkFact?.text;R&&!m.cancelled&&(await zn(m,2200,6e3),i.querySelector(".punch")?.remove(),i.appendChild(Ye(`<div class="punch rmf"><div class="anim-pop"><small>THE REAL MARK</small>${Ot(R)}</div></div>`)),Fe(R,"jeff",3)),await zn(m,3e3,6e3),l(1)}async function g(m){let p=t,S=r.clueReview||[],y=S.filter(w=>w.highlight).slice(0,3);if(y.length||(y=S.filter(w=>w.verdict!=="neutral").slice(0,3)),!y.length){i.innerHTML="",await xn(300,p),l(2);return}let _=new Map((m.clues||[]).map(w=>[w.id,w]));i.innerHTML=a("THE CLUES THAT MATTERED","Useful\u2026 or a red herring? \u{1F41F}")+`<div class="clue-list big">${y.map(w=>{let R=_n(s,w.runnerId),A=_.get(w.clueId),v=m.players.find(C=>C.id===w.owner),x=w.owner==="public"?`\u{1F4FA} PUBLIC CLUE${A?.label?` \xB7 ${Ot(A.label.toUpperCase())}`:""}`:`${A?.tier==="hot"?"\u{1F525}":"\u{1F92B}"} ${Ot(v?.name||"Secret")}'S ${A?.tier==="hot"?"HOT TIP":"SECRET CLUE"}`,b={useful:"USEFUL \u2713",red_herring:"RED HERRING \u{1F41F}",neutral:"MEH"}[w.verdict]||Ot(w.verdict);return`<div class="cl panel"><div class="rp">${R?xi(R,100):""}</div><div class="txt"><div class="own">${x} \xB7 ${Ot(R?.nickname||"")}</div>${Ot(w.text||A?.text||"")}${w.quip?`<div class="quip">${Ot(w.quip)}</div>`:""}</div><div class="verdict ${Ot(w.verdict)}">${b}</div></div>`}).join("")}</div>`;let N=hi(".cl",i);for(let w=0;w<N.length;w++){if(p.cancelled)return;N[w].classList.add("show"),setTimeout(()=>{se.play("sting"),se.play("stamp")},Hn(250)),y[w].quip&&Fe(y[w].quip,w%2?"jeff":"pam",2),await zn(p,2500,5e3)}await zn(p,2e3,4e3),l(2)}async function f(m){let p=t,S=m.settings.drinkingMode;i.innerHTML=a("PAY DAY","The bookie settles up \u{1F4B0}")+`<div class="payouts">${m.players.map(w=>{let R=r.payouts?.[w.id]||{bets:[],net:0,bankroll:w.bankroll},A=(R.bets||[]).map(v=>{let x=nl(v);return`<div class="pl ${x.kind==="won"?"won":x.kind==="push"?"push":"lost"}"><span class="mark">${x.kind==="won"?"\u2705":x.kind==="push"?"\u21A9\uFE0F":"\u274C"}</span><div class="lb">${Ot(yo(s,v))}<small>staked ${Mn(v.stake)} \xB7 ${Ot($h(s,v))}${x.kind==="won"?` \xB7 returned ${Mn(v.returned)}`:""}</small></div><div class="r">${x.text}</div></div>`}).join("")||'<div class="pl show"><div class="lb">No bets placed. Sensible. Boring.</div></div>';return`<div class="pay panel slant" data-pid="${w.id}" style="background:${Ot(w.avatar.colour)}"><div class="unslant" style="display:flex;flex-direction:column;height:100%">
        <div class="who">${ln(w.avatar,90)}${Ot(w.name)}</div>
        <div class="lines">${A}</div>
        <div class="net num outlined ${R.net>0?"green":R.net<0?"red":"white"}" data-net="${R.net}" style="visibility:hidden">${ci(R.net)}</div>
        ${S?c(R.net,w.id):""}
      </div></div>`}).join("")}</div>${y1(m,!0)}`,await xn(600,p);for(let w of hi(".pl",i)){if(p.cancelled)return;w.classList.add("show"),se.play(w.classList.contains("won")?"kaching":"pop"),await xn(700,p)}await xn(400,p);let y=null,_=null;for(let w of m.players){let R=r.payouts?.[w.id];if(!R)continue;let A=i.querySelector(`.pay[data-pid="${w.id}"]`),v=A.querySelector(".net"),x=null;v.style.visibility="visible",v.classList.add("anim-pop"),(!y||R.net>y.net)&&(y={...R,p:w,panel:A}),(!_||R.net<_.net)&&(_={...R,p:w,panel:A})}if(x1(i,m),y&&y.net>0&&se.play("coins",{n:Math.min(30,8+Math.round(y.net/40))}),await xn(1900,p),p.cancelled)return;let N=m.settings.drinkingMode?(r.drinks||[]).filter(w=>!w.playerId):[];N.length&&i.appendChild(Ye(`<div class="drink-all panel yellow anim-pop">\u{1F37B} ${N.map(w=>Ot(w.text)).join(" \xB7 ")}</div>`)),y&&y.net>0&&(se.play("kaching"),Sr(document.body,{count:140}),y.panel.classList.add("big-win"),y.panel.appendChild(Ye('<div class="mood">\u{1F911}</div>')),Fe(v1(y.p.name,y.net),"jeff",3)),_&&_.net<0&&(setTimeout(()=>se.play("sadtrombone"),Hn(900)),_.panel.classList.add("big-loss"),_.panel.appendChild(Ye('<div class="raincloud">\u{1F327}\uFE0F</div>')),Fe(_1(_.p.name,_.net),"pam",3)),!y?.net&&!_?.net&&Fe("Nobody won, nobody lost. The bookie is furious.","pam",2),await zn(p,5e3,8e3),l(3)}function c(m,p){if(Array.isArray(r.drinks))return r.drinks.filter(y=>y.playerId===p).map(y=>`<div class="drink panel yellow">\u{1F37A} ${Ot(y.text)}</div>`).join("");if(m<0){let S=Math.min(5,Math.max(1,Math.ceil(-m/100)));return`<div class="drink panel yellow">\u{1F37A} Take ${S} sip${S>1?"s":""}!</div>`}if(m>0){let S=Math.min(5,Math.max(1,Math.ceil(m/150)));return`<div class="drink panel yellow">\u{1F449} Hand out ${S} sip${S>1?"s":""}</div>`}return'<div class="drink panel yellow">\u{1F964} Water break</div>'}async function d(m){let p=t,S=r.awards||[];if(!S.length&&!r.archetype?.label){await xn(200,p),l(4);return}i.innerHTML=a("ROUND AWARDS","\u{1F3C6}")+`<div class="awards">${r.archetype?.label?`<div class="arch panel yellow anim-pop"><div class="al display">${Ot(r.archetype.label)}</div><div class="ab">${Ot(r.archetype.blurb||"")}</div></div>`:""}${S.map(y=>{let _=m.players.find(N=>N.id===y.playerId);return`<div class="award panel slant ${_?"":"yellow"}" style="${_?`background:${Ot(_.avatar.colour)}`:""}"><div class="unslant" style="display:flex;align-items:center;gap:28px"><span class="trophy">\u{1F3C6}</span>${_?ln(_.avatar,84):""}<div><div class="at outlined white thin">${Ot(y.title)}${_?` \u2014 ${Ot(_.name)}`:" \u2014 everyone"}</div><div class="ax" style="color:${_?"#fff":"var(--ink)"}">${Ot(y.text||"")}</div></div></div></div>`}).join("")}</div>`;for(let y of hi(".award",i)){if(p.cancelled)return;y.classList.add("show"),se.play("fanfare"),await xn(1500,p)}S[0]&&Fe(`${S[0].title}! ${S[0].text||""}`,"jeff",2),await zn(p,4500,7e3),l(4)}function M(m){if(m.resultsStage===e)return;t&&po(t),t=Qa();let p=e===-1;e=m.resultsStage,Qn.clear(),_r.innerHTML="",p||xu();let S=m.resultStages[m.resultsStage];if(Kn({type:"results-stage",stage:S}),S!=="order"&&Ze&&fo(),S==="order"&&Ze&&ss==="3d")try{Ze.showPodium?.(r,{card:!1})}catch(y){console.warn(y)}else Ze&&S==="order"&&fo();document.body.classList.toggle("racing",!!Ze),({order:h,reveal:u,clues:g,payouts:f,awards:d}[S]||(async()=>l(m.resultsStage)))(m).catch(y=>console.error(y))}return r&&M(n),{update:m=>{m.results&&M(m)},destroy:()=>{t&&po(t),fo()}}}function y1(n,t){let e=n.results,i=n.players.map(r=>{let o=e?.payouts?.[r.id],a=o?.bankroll??r.bankroll;return{p:r,before:Math.max(0,a-(o?.net||0)),after:Math.max(0,a)}}),s=i.reduce((r,o)=>r+(t?o.before:o.after),0)||1;return`<div class="tug">${i.map(r=>`<div class="seg" data-pid="${r.p.id}" data-after="${r.after}" style="flex-grow:${Math.max(1e-4,(t?r.before:r.after)/s)};background:${Ot(r.p.avatar.colour)}">${ln(r.p.avatar,56)}<b class="num" data-from="${r.before}">${Mn(t?r.before:r.after)}</b></div>`).join("")}</div>`}function x1(n,t){let e=hi(".tug .seg",n),i=e.reduce((s,r)=>s+Number(r.dataset.after),0)||1;e.forEach(s=>{s.style.flexGrow=String(Math.max(1e-4,Number(s.dataset.after)/i));let r=s.querySelector("b");el(r,Number(r.dataset.from),Number(s.dataset.after),Hn(1600),o=>Mn(o))})}function v1(n,t){let e=[`${n} cleans up! Up ${Oi(t)}. Insufferable for the rest of the evening.`,`Kerching! ${n} is ${Oi(t)} richer and won't let anyone forget it.`,`${n} read that race like a book.`];return e[Math.floor(Math.random()*e.length)]}function _1(n,t){let e=[`Oh dear. ${n} is down ${Oi(-t)}. The bank of Mark is not sympathetic.`,`${n} backed the wrong Mark. It happens to the best of us. Mostly to ${n}.`,`That's ${Oi(-t)} gone, ${n}. Thoughts and prayers.`];return e[Math.floor(Math.random()*e.length)]}function M1(n,{compact:t=!1}={}){let e=_u(n.players),i=n.history.at(-1);return[...n.players].sort((s,r)=>r.bankroll-s.bankroll).map(s=>{let r=e.get(s.id),o=i?.nets?.[s.id]??0;return`<div class="srow panel slant ${r===1&&!t?"lead":""}" style="${r===1&&!t?"":`background:${Ot(s.avatar.colour)}`}"><div class="unslant" style="display:flex;align-items:center;gap:26px;width:100%">
      ${os(r)}${ln(s.avatar,t?70:96)}<div class="nm">${Ot(s.name)}</div>
      ${t?"":`<span class="dl ${o>0?"up":o<0?"down":"flat"}">${ci(o)}</span>`}
      <div class="bk num">${Mn(s.bankroll)}</div>
      ${!t&&s.ready?'<span class="tag" style="background:var(--grass);color:#fff">\u2713 READY</span>':""}
    </div></div>`}).join("")}function b1(n){let t=n.history,e=n.settings.startingBankroll,i=n.players.map(M=>({p:M,pts:[e,...t.map(m=>m.bankrolls?.[M.id]??e)]})),s=Math.max(2,(t.length||0)+1),r=Math.max(e*1.2,...i.flatMap(M=>M.pts)),o=540,a=420,l=36,h=M=>l+M*(o-l*2)/(s-1),u=M=>a-l-M/r*(a-l*2),g=[0,.5,1].map(M=>`<line x1="${l}" x2="${o-l}" y1="${u(r*M)}" y2="${u(r*M)}" stroke="#14183c22" stroke-width="2"/>`).join(""),f=`<line x1="${l}" x2="${o-l}" y1="${u(e)}" y2="${u(e)}" stroke="#14183c55" stroke-width="2" stroke-dasharray="8 8"/>`,c=i.map(({p:M,pts:m})=>`<polyline fill="none" stroke="#14183c" stroke-width="12" stroke-linejoin="round" stroke-linecap="round" points="${m.map((p,S)=>`${h(S)},${u(p)}`).join(" ")}"/><polyline fill="none" stroke="${Ot(M.avatar.colour)}" stroke-width="6" stroke-linejoin="round" stroke-linecap="round" points="${m.map((p,S)=>`${h(S)},${u(p)}`).join(" ")}"/>${m.map((p,S)=>`<circle cx="${h(S)}" cy="${u(p)}" r="8" fill="${Ot(M.avatar.colour)}" stroke="#14183c" stroke-width="4"/>`).join("")}`).join(""),d=Array.from({length:s},(M,m)=>`<text x="${h(m)}" y="${a-6}" text-anchor="middle" font-family="Lilita One" font-size="20" fill="#14183c">${m===0?"Start":`R${m}`}</text>`).join("");return`<svg viewBox="0 0 ${o} ${a}" width="100%" height="440">${g}${f}${c}${d}</svg>`}function S1(n,t){let e=n.results;if(!e?.finishOrder?.length)return"";let i=_n(n.round,e.finishOrder[0].runnerId),s=n.players.map(o=>{let a=e.payouts?.[o.id],l=(a?.bets||[]).filter(h=>h.won).sort((h,u)=>u.returned-h.returned)[0];return`<div class="rcp">${ln(o.avatar,54)}<span class="rn">${Ot(o.name)}</span><span class="rx">${l?`\u2705 ${Ot(yo(n.round,l))} <b class="bw">${ci(nl(l).net)}</b>`:(a?.bets||[]).length?"\u274C nothing came in":"\u{1F648} no bets"}</span><span class="rnet ${a?.net>0?"up":a?.net<0?"down":""}"><small>net</small> ${ci(a?.net||0)}</span></div>`}).join(""),r=(e.awards||[]).slice(0,2).map(o=>{let a=n.players.find(l=>l.id===o.playerId);return`<span class="raw">\u{1F3C6} ${Ot(o.title)}${a?` \xB7 ${Ot(a.name)}`:""}</span>`}).join("");return`<div class="recap panel white ${t?"narrow":""}"><div class="rch"><span class="rp">${i?xi(i,64):""}</span><span>Last race: <b>${Ot(i?.nickname||"")}</b> won${e.archetype?.label?` \xB7 ${Ot(e.archetype.label)}`:""}</span>${r}</div>${s}</div>`}function w1(n){let t=Ye('<div class="score"></div>');Di.appendChild(t);let e=null;function i(r){let a=r.roundNumber>=r.roundsPerGame?"\u{1F3C1} That was the final round! Champion next\u2026":r.roundNumber===r.roundsPerGame-1?"Up next: THE FINAL ROUND \u{1F62C}":`Up next: Round ${r.roundNumber+1} of ${r.roundsPerGame}`,l=r.history.length>=2;t.innerHTML=`<div class="res-head"><div class="h outlined">STANDINGS</div><div class="sh">After round ${r.roundNumber} of ${r.roundsPerGame}</div></div>
      <div class="standings ${l?"":"solo"}">${M1(r)}</div>
      ${l?`<div class="chart panel white"><div class="ct">The money, round by round</div>${b1(r)}</div>`:""}
      ${S1(r,l)}
      <div class="upnext panel yellow">${a}<span class="cd"></span></div>`}i(n);let s=[...n.players].sort((r,o)=>o.bankroll-r.bankroll);if(s.length>=2){let r=s[0].bankroll-s[1].bankroll;Fe(r===0?"It's dead level at the top!":`${s[0].name} leads by ${Oi(r)}.`,"jeff",2)}else s[0]&&Fe(`${s[0].name} is on ${Oi(s[0].bankroll)}.`,"jeff",2);return e=setInterval(()=>{let r=t.querySelector(".cd");if(!(!r||!we))if(we.deadline&&we.phase==="SCOREBOARD"){let o=Math.max(0,Math.ceil((we.deadline-Ja.serverNow())/1e3));r.textContent=` \u2014 starting in ${o}\u2026`}else r.textContent=we.players.length?" \u2014 tap READY on your phones":""},300),{update:i,destroy:()=>clearInterval(e)}}function E1(n){let t=[...n.players].sort((d,M)=>M.bankroll-d.bankroll),e=t[0],i=t.length>1&&t[1].bankroll===e?.bankroll,s=(n.history||[]).flatMap(d=>(d.awards||[]).filter(M=>M.text).map(M=>({title:M.title,text:`${M.text} (round ${d.round})`,playerId:M.playerId}))).slice(0,3),r=[...(n.superlatives||[]).filter(d=>d&&d.title&&d.text),...s].slice(0,7),o=Ye(`<div class="finale"><div class="rays"></div><div class="fconf"></div>
    <div class="champ">${e?`<div class="h outlined">${i?"IT'S A DRAW!":"CHAMPION!"}</div>
      <div class="who"><div class="crown">\u{1F451}</div>${ln(e.avatar,200)}<div class="nm outlined white">${Ot(i?t.filter(d=>d.bankroll===e.bankroll).map(d=>d.name).join(" & "):e.name)}</div><div class="bk num">${Mn(e.bankroll)}</div></div>`:'<div class="h outlined">GAME OVER</div>'}
      <div class="others">${t.slice(1).map((d,M)=>`<div class="srow panel slant" style="background:${Ot(d.avatar.colour)}"><div class="unslant" style="display:flex;align-items:center;gap:20px">${os(M+2)}${ln(d.avatar,64)}<div class="nm">${Ot(d.name)}</div><div class="bk num">${Mn(d.bankroll)}</div></div></div>`).join("")}</div>
    </div>
    <div class="reel">${r.length?'<div class="reel-h outlined white thin">THE NIGHT IN AWARDS</div><div class="reel-card"></div><div class="reel-dots"></div>':""}</div>
  </div>`);Di.appendChild(o);let a=Se(".fconf",o);se.play("drumroll",{dur:1.6}),setTimeout(()=>{se.play("fanfare"),se.play("crowd",{dur:5,peak:.45}),Sr(a,{count:200,duration:4500,contained:!0,zIndex:0})},Hn(1700));let l=setInterval(()=>Sr(a,{count:50,duration:3500,contained:!0,zIndex:0}),Hn(7e3));e&&Fe(i?"We have a dead heat! Nobody wins, which is very British.":`Ladies and gentlemen, your MARKRUN champion: ${e.name}, with ${Oi(e.bankroll)}!`,"jeff",3);let h=0,u=null,g=Se(".reel-card",o);function f(){if(!g||!r.length)return;let d=r[h%r.length],M=n.players.find(m=>m.id===d.playerId);g.innerHTML=`<div class="rc2 panel ${M?"":"yellow"} anim-pop" style="${M?`background:${Ot(M.avatar.colour)}`:""}"><div class="tro">\u{1F3C6}</div>${M?ln(M.avatar,84):""}<div class="t outlined ${M?"white":""} thin">${Ot(d.title)}</div>${M?`<div class="who2">${Ot(M.name)}</div>`:""}<div class="x">${Ot(d.text||"")}</div></div>`,Se(".reel-dots",o).innerHTML=r.map((m,p)=>`<i class="${p===h%r.length?"on":""}"></i>`).join(""),se.play("reveal"),h<r.length&&Fe(`${d.title}! ${d.text||""}`,h%2?"pam":"jeff",2),h++}let c=setTimeout(()=>{f(),u=setInterval(f,Hn(6500))},Hn(6500));return setTimeout(()=>{let d=ja("rematchLine",n.players.map(M=>({name:M.name,bankroll:M.bankroll})));Fe(d?.text||"Press space, or tap ready on your phones, to go again.",d?.speaker||"pam",2)},Hn(6500*(Math.min(r.length,7)+1))),{destroy:()=>{clearInterval(l),clearInterval(u),clearTimeout(c)}}}
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
