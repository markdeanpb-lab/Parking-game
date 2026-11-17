var Md=Object.defineProperty;var kh=(n,t)=>{for(var e in t)Md(n,e,{get:t[e],enumerable:!0})};function Dh({role:n,getToken:t,getKey:e,onWelcome:i,onState:s,onMessage:r,onStatus:o}){let a=null,l=0,h=null,d=!1,g=0,u=null,c=0,f=()=>`${location.protocol==="https:"?"wss":"ws"}://${location.host}/ws`;function _(M){o?.(M)}function m(){if(clearTimeout(h),a&&(a.readyState===0||a.readyState===1))return;_(l?"reconnecting":"connecting");try{a=new WebSocket(f())}catch{p();return}let M=a;M.onopen=()=>{l=0,_("open"),c=Date.now(),S({t:"hello",role:n,token:t?.()||void 0,key:e?.()||void 0}),clearInterval(u),u=setInterval(()=>{if(S({t:"ping",at:Date.now()}),Date.now()-c>25e3&&M.readyState===1)try{M.close()}catch{}},8e3)},M.onmessage=D=>{c=Date.now();let w;try{w=JSON.parse(D.data)}catch{return}if(w.t==="pong"){w.serverNow&&(g=w.serverNow+(Date.now()-w.at)/2-Date.now());return}w.t==="welcome"?i?.(w):w.t==="state"?(w.state?.serverNow&&(g=w.state.serverNow-Date.now()),s?.(w.state)):r?.(w)},M.onclose=()=>{clearInterval(u),M===a&&(_("closed"),d||p())},M.onerror=()=>{try{M.close()}catch{}}}function p(){clearTimeout(h);let M=Math.min(8e3,400*2**l)*(.75+Math.random()*.5);l++,h=setTimeout(m,M)}function S(M){return a&&a.readyState===1?(a.send(JSON.stringify(M)),!0):!1}let v=()=>{document.visibilityState==="visible"&&(!a||a.readyState>1?(l=0,m()):S({t:"ping",at:Date.now()}))};return document.addEventListener("visibilitychange",v),window.addEventListener("online",()=>{l=0,m()}),window.addEventListener("pageshow",v),window.addEventListener("focus",v),m(),{send:S,reconnect(){l=0;try{a?.close()}catch{}m()},close(){d=!0,a?.close()},serverNow:()=>Date.now()+g,get open(){return a?.readyState===1}}}function Uh(){let n=null,t=null,e=null,i=null,s=null,r=null,o=.8,a=!1,l=!0,h=null;function d(){if(n)return n;let x=window.AudioContext||window.webkitAudioContext;if(!x)return null;n=new x,r=n.createDynamicsCompressor(),r.threshold.value=-14,r.ratio.value=4,r.attack.value=.005,r.release.value=.2,t=n.createGain(),t.gain.value=a?0:o,e=n.createGain(),e.gain.value=.9,i=n.createGain(),i.gain.value=.32,e.connect(r),i.connect(r),r.connect(t),t.connect(n.destination),s=n.createBuffer(1,n.sampleRate*2,n.sampleRate);let y=s.getChannelData(0);for(let b=0;b<y.length;b++)y[b]=Math.random()*2-1;return n}function g(){let x=d();return x&&x.state==="suspended"&&x.resume(),!!x}let u=()=>n&&n.state==="running";function c(x,y,b,C,E,L){x.gain.cancelScheduledValues(y),x.gain.setValueAtTime(1e-4,y),x.gain.exponentialRampToValueAtTime(C,y+b),x.gain.setValueAtTime(C,y+b+E),x.gain.exponentialRampToValueAtTime(1e-4,y+b+E+L)}function f(x,y,b,C,{gain:E=.2,a:L=.01,rel:R=.2,dest:U=e,detune:O=0,filter:z=null,pan:q=0}={}){let X=n.createOscillator();X.type=x,X.frequency.setValueAtTime(y,b),X.detune.value=O;let N=n.createGain(),gt=X;if(z){let k=n.createBiquadFilter();k.type=z.type||"lowpass",k.frequency.value=z.freq,k.Q.value=z.q||.7,gt.connect(k),gt=k}gt.connect(N);let Rt=N;if(q&&n.createStereoPanner){let k=n.createStereoPanner();k.pan.value=q,N.connect(k),Rt=k}return Rt.connect(U),c(N,b,L,E,Math.max(0,C-L),R),X.start(b),X.stop(b+C+R+.05),X}function _(x,y,{gain:b=.2,a:C=.01,rel:E=.2,type:L="bandpass",freq:R=1e3,q:U=1,dest:O=e}={}){let z=n.createBufferSource();z.buffer=s,z.loop=!0;let q=n.createBiquadFilter();q.type=L,q.frequency.setValueAtTime(R,x),q.Q.value=U;let X=n.createGain();return z.connect(q),q.connect(X),X.connect(O),c(X,x,C,b,Math.max(0,y-C),E),z.start(x,Math.random()),z.stop(x+y+E+.05),{s:z,f:q,g:X}}let m=x=>440*2**((x-69)/12),p={horn(x){for(let[y,b]of[[233,0],[293.7,6],[349,-5]])f("sawtooth",y*.92,x,1.1,{gain:.13,a:.03,rel:.25,filter:{freq:2200},detune:b}).frequency.exponentialRampToValueAtTime(y,x+.12);f("square",116.5,x,1.1,{gain:.05,a:.03,rel:.25,filter:{freq:800}})},crowd(x,{dur:y=3.5,peak:b=.32}={}){for(let[C,E,L]of[[700,.8,1],[1800,1.2,.7],[3200,1.5,.35]]){let R=_(x,y*.4,{gain:b*L,a:y*.45,rel:y*.55,freq:C,q:E}),U=n.createOscillator();U.frequency.value=5+Math.random()*4;let O=n.createGain();O.gain.value=b*L*.35,U.connect(O),O.connect(R.g.gain),U.start(x),U.stop(x+y+.2)}for(let C=0;C<4;C++){let E=x+.4+Math.random()*y*.5;f("triangle",500+Math.random()*300,E,.35,{gain:.025,a:.08,rel:.25,filter:{freq:1600},pan:Math.random()*1.6-.8}).frequency.exponentialRampToValueAtTime(800+Math.random()*400,E+.3)}},whoosh(x){let y=_(x,.45,{gain:.35,a:.12,rel:.25,freq:400,q:2.5});y.f.frequency.exponentialRampToValueAtTime(3500,x+.3),y.f.frequency.exponentialRampToValueAtTime(700,x+.7)},bell(x){for(let y of[x,x+.42])[[1,.22,1.6],[2.76,.09,.9],[5.4,.05,.5],[8.93,.03,.3]].forEach(([b,C,E])=>f("sine",830*b,y,.01,{gain:C,a:.003,rel:E}))},fanfare(x){let y=[[67,0,.14],[72,.15,.14],[76,.3,.14],[79,.45,.32],[76,.8,.14],[79,.95,.9]];for(let[b,C,E]of y){for(let L of[-7,7])f("sawtooth",m(b),x+C,E,{gain:.07,a:.02,rel:.18,filter:{freq:2600},detune:L});f("square",m(b-12),x+C,E,{gain:.03,a:.02,rel:.15,filter:{freq:1200}})}for(let b of[60,64,67,72])f("triangle",m(b),x+.95,.9,{gain:.06,a:.03,rel:.6});p.cymbal(x+.95,.12)},cymbal(x,y=.15){_(x,.05,{gain:y,a:.002,rel:1.4,type:"highpass",freq:6e3,q:.5})},kaching(x){_(x,.03,{gain:.3,a:.002,rel:.05,type:"highpass",freq:3e3}),_(x+.05,.02,{gain:.25,a:.002,rel:.06,type:"bandpass",freq:1800,q:3});for(let[y,b]of[[2093,.14],[2637,.1],[3136,.08],[4186,.05]])f("sine",y,x+.12,.02,{gain:b,a:.003,rel:.9});for(let y=0;y<6;y++)f("sine",3e3+Math.random()*2e3,x+.2+y*.05,.01,{gain:.03,a:.002,rel:.12})},sadtrombone(x){let y=[[55,0,.42],[54,.48,.42],[53,.96,.42],[52,1.44,1.3]];for(let[b,C,E]of y){let L=f("sawtooth",m(b),x+C,E,{gain:.11,a:.04,rel:.2,filter:{freq:1100,q:2}});if(C>1){let R=n.createOscillator();R.frequency.value=6;let U=n.createGain();U.gain.value=6,R.connect(U),U.connect(L.frequency),R.start(x+C),R.stop(x+C+E+.3),L.frequency.setValueAtTime(m(b),x+C),L.frequency.linearRampToValueAtTime(m(b-1),x+C+E)}}},drumroll(x,{dur:y=2.2}={}){let b=Math.floor(y*16);for(let C=0;C<b;C++)_(x+C/16,.02,{gain:.04+.16*(C/b),a:.002,rel:.06,freq:1800,q:.8});p.cymbal(x+y,.2),f("sine",70,x+y,.05,{gain:.5,a:.003,rel:.4})},sting(x){for(let y of[48,55,60,63])for(let b of[-8,8])f("sawtooth",m(y),x,.16,{gain:.05,a:.01,rel:.5,filter:{freq:1800},detune:b});p.cymbal(x,.1)},chip(x,{p:y=.3}={}){let b=420+Math.min(1,Math.max(0,y))*900;f("triangle",b,x,.03,{gain:.16,a:.003,rel:.12}).frequency.exponentialRampToValueAtTime(b*1.5,x+.06),_(x,.01,{gain:.06,a:.001,rel:.03,type:"highpass",freq:4e3})},heartbeat(x,{beats:y=5,bpm:b=92}={}){for(let C=0;C<y;C++){let E=x+C*60/b;f("sine",62,E,.04,{gain:.55,a:.004,rel:.16}),f("sine",54,E+.22,.04,{gain:.4,a:.004,rel:.2})}},coins(x,{n:y=14}={}){for(let b=0;b<y;b++){let C=x+b*.07+Math.random()*.03,E=2200+Math.random()*1800;f("sine",E,C,.01,{gain:.05,a:.002,rel:.18}),f("sine",E*1.5,C+.01,.01,{gain:.025,a:.002,rel:.12})}},thunk(x){f("sine",95,x,.05,{gain:.6,a:.002,rel:.25}),_(x,.03,{gain:.25,a:.002,rel:.08,type:"lowpass",freq:900})},wipe(x){_(x,.18,{gain:.16,a:.04,rel:.12,freq:800,q:1.5}).f.frequency.exponentialRampToValueAtTime(4200,x+.25),f("triangle",880,x+.16,.03,{gain:.05,a:.004,rel:.15})},pop(x){f("sine",520,x,.02,{gain:.18,a:.003,rel:.12}).frequency.exponentialRampToValueAtTime(1100,x+.08)},tick(x){f("square",1600,x,.005,{gain:.04,a:.001,rel:.03,filter:{freq:3e3}})},lock(x){f("sine",140,x,.04,{gain:.4,a:.002,rel:.2}),_(x,.02,{gain:.2,a:.002,rel:.05,freq:2500,q:1}),f("triangle",660,x+.06,.05,{gain:.08,a:.005,rel:.2}),f("triangle",990,x+.14,.08,{gain:.08,a:.005,rel:.3})},join(x){[72,76,79,84].forEach((y,b)=>f("triangle",m(y),x+b*.07,.06,{gain:.1,a:.005,rel:.2}))},beep(x){f("square",880,x,.08,{gain:.06,a:.005,rel:.05,filter:{freq:2500}})},go(x){f("square",1320,x,.3,{gain:.07,a:.005,rel:.1,filter:{freq:3e3}})},stamp(x){f("sine",90,x,.05,{gain:.5,a:.002,rel:.25}),_(x,.04,{gain:.25,a:.002,rel:.1,type:"lowpass",freq:1200})},reveal(x){[64,67,71,74].forEach((y,b)=>f("triangle",m(y+12),x+b*.05,.05,{gain:.06,a:.004,rel:.25}))},boo(x){f("sawtooth",160,x,.7,{gain:.06,a:.1,rel:.3,filter:{freq:600}}).frequency.linearRampToValueAtTime(110,x+.8)}};function S(x,y){if(!u()||a)return;let b=p[x];if(b)try{b(n.currentTime+.02,y)}catch(C){console.warn("sfx",x,C)}}let v={lobby:{bpm:92,chords:[[60,64,67,71],[57,60,64,67],[53,57,60,64],[55,59,62,67]],arp:[0,2,1,3,2,1,3,2],swing:.08,shaker:!0,block:!1},betting:{bpm:108,chords:[[57,60,64],[53,57,60],[60,64,67],[55,59,62]],arp:[0,1,2,1,0,2,1,2],swing:.05,shaker:!0,block:!0},final:{bpm:138,chords:[[57,60,64],[57,60,64],[53,57,60],[55,59,62]],arp:[0,2,1,2,0,2,1,2],swing:0,shaker:!0,block:!0},results:{bpm:100,chords:[[60,64,67],[65,69,72],[55,59,62],[60,64,67]],arp:[0,1,2,3,2,1,0,1],swing:.06,shaker:!1,block:!1}};function M(){if(!h)return;let x=v[h.kind],y=60/x.bpm/2;for(;h.nextT<n.currentTime+.35;){let b=h.step,C=Math.floor(b/8)%x.chords.length,E=x.chords[C],L=h.nextT+(b%2?x.swing*y:0),R=b%8;if(R===0){for(let O of E.slice(0,3))for(let z of[-6,6])f("triangle",m(O),L,y*7.5,{gain:.022,a:.35,rel:.6,dest:i,detune:z,filter:{freq:1300}});f("sine",m(E[0]-24),L,y*2.5,{gain:.14,a:.01,rel:.25,dest:i})}R===4&&f("sine",m(E[0]-24+7),L,y*2,{gain:.1,a:.01,rel:.25,dest:i});let U=E[x.arp[R]%E.length]+12;b%16<15&&f("sine",m(U),L,.02,{gain:.045,a:.004,rel:y*1.6,dest:i}),f("triangle",m(U+12),L,.01,{gain:.01,a:.002,rel:.15,dest:i}),x.shaker&&b%2===1&&_(L,.01,{gain:.018,a:.003,rel:.05,type:"highpass",freq:7e3,dest:i}),x.block&&(R===2||R===6)&&f("sine",1250,L,.004,{gain:.04,a:.001,rel:.05,dest:i}),h.step++,h.nextT+=y}}function D(x="lobby"){if(!d()||h?.kind===x)return;if(A(.6),!l){h=null,w=x;return}w=x;let y=n.createGain();y.gain.value=1e-4,y.connect(r);let b=i;i=y,y.gain.exponentialRampToValueAtTime(.32,n.currentTime+1.5),h={kind:x,nextT:n.currentTime+.1,step:0,bus:y},h.timer=setInterval(()=>{u()&&M()},90)}let w=null;function A(x=.8){if(!h)return;clearInterval(h.timer);let y=h.bus;n&&y&&(y.gain.cancelScheduledValues(n.currentTime),y.gain.setValueAtTime(y.gain.value,n.currentTime),y.gain.exponentialRampToValueAtTime(1e-4,n.currentTime+x),setTimeout(()=>y.disconnect(),x*1e3+500)),h=null}function T(x){!h||!n||h.bus.gain.setTargetAtTime(x?.14:.32,n.currentTime,.25)}return{unlock:g,play:S,ready:u,get context(){return n},setVolume(x){o=Math.max(0,Math.min(1,x)),t&&t.gain.setTargetAtTime(a?0:o,n.currentTime,.05)},setMuted(x){a=!!x,t&&t.gain.setTargetAtTime(a?0:o,n.currentTime,.05)},get muted(){return a},setMusicEnabled(x){if(l=!!x,l)w&&!h&&D(w);else{let y=h?.kind||w;A(),w=y}},startMusic:D,stopMusic:A,duck:T,get musicKind(){return h?.kind||null}}}var _e=(n,t=document)=>t.querySelector(n),ai=(n,t=document)=>[...t.querySelectorAll(n)];function Bt(n){return String(n??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function Xe(n){let t=document.createElement("template");return t.innerHTML=n.trim(),t.content.firstElementChild}var Nh="pp";function En(n){let t=Math.round(Number(n)||0);return`${t<0?"\u2212":""}${Math.abs(t).toLocaleString("en-GB")}${Nh}`}function gi(n){let t=Math.round(Number(n)||0);return`${t>0?"+":t<0?"\u2212":"\xB1"}${Math.abs(t).toLocaleString("en-GB")}${Nh}`}function Ui(n){let t=Math.abs(Math.round(Number(n)||0));return`${t.toLocaleString("en-GB")} Parkpound${t===1?"":"s"}`}var rs=n=>n?.shortName||n?.nickname||"";function bd(n){let t=n%100;return t>=11&&t<=13?"th":{1:"st",2:"nd",3:"rd"}[n%10]||"th"}function os(n,t=""){return`<span class="ordinal p${n} ${t}">${n}<sup>${bd(n)}</sup></span>`}function rn(n,t=64,e=""){let i=n||{emoji:"\u{1F642}",colour:"#2f8cff"};return`<span class="avatar ${e}" style="width:${t}px;height:${t}px;font-size:${Math.round(t*.58)}px;background:${Bt(i.colour)}">${Bt(i.emoji)}</span>`}function Oh(n){return n=Math.round(Number(n)||0),`${Math.floor(n/60)}:${String(n%60).padStart(2,"0")}`}function Qa(n,t,e,i=1200,s=o=>String(Math.round(o)),r){let o=performance.now(),a,l=Math.round(t),h=d=>{let g=Math.min(1,(d-o)/i),u=1-(1-g)**3,c=t+(e-t)*u;n.textContent=s(c);let f=Math.round(c);r&&f!==l&&(l=f,r(f)),g<1&&(a=requestAnimationFrame(h))};return a=requestAnimationFrame(h),()=>cancelAnimationFrame(a)}function yn(n,t){return n?.runners?.find(e=>e.id===t)}function mo(n,t){if(!n||!t)return"";if(t.type==="win"||t.type==="special")return`${t.type==="special"||t.boost?"\u{1F680} ":""}${yn(n,t.runnerId)?.nickname||t.runnerId} to WIN`;if(t.type==="inplay")return`${yn(n,t.runnerId)?.nickname||t.runnerId} to WIN (halfway)`;if(t.type==="prop")return`${n.props?.find(o=>o.id===t.propId)?.text||"Side bet"} \u2014 ${String(t.pick).toUpperCase()}`;let e=n.matchups?.find(r=>r.id===t.matchupId);if(!e)return"Head-to-head";let i=rs(yn(n,t.pick))||t.pick,s=rs(yn(n,t.pick===e.a?e.b:e.a));return`${i} to beat ${s}`}function po(n,t){if(t.type==="win"||t.type==="special"){let i=yn(n,t.runnerId)?.odds?.win??0,s=(t.type==="special"||t.boost)&&n?.underdogSpecial?n.underdogSpecial.boost||1.5:1;return Math.round((1+(i-1)*s)*100)/100}if(t.type==="inplay")return Number(t.odds)||0;if(t.type==="prop"){let i=n?.props?.find(s=>s.id===t.propId);return(t.pick==="yes"?i?.odds?.yes:i?.odds?.no)??0}let e=n?.matchups?.find(i=>i.id===t.matchupId);return e?t.pick===e.a?e.odds.a:e.odds.b:0}function _r(n=document.body,{count:t=120,colours:e=["#ffd23f","#ff4d5a","#2ec27e","#2f8cff","#ff6fb5","#7b4dff"],duration:i=3200,zIndex:s=9e3,contained:r=!1}={}){let o=document.createElement("div");o.style.cssText=`position:${r?"absolute":"fixed"};inset:0;pointer-events:none;overflow:hidden;z-index:${s}`;for(let a=0;a<t;a++){let l=document.createElement("i"),h=8+Math.random()*12,d=Math.random()*100,g=(Math.random()-.5)*30,u=Math.random()*720-360,c=Math.random()*400,f=i*(.6+Math.random()*.5);l.style.cssText=`position:absolute;left:${d}%;top:-30px;width:${h}px;height:${h*(.4+Math.random()*.6)}px;background:${e[a%e.length]};border:2px solid #14183c;border-radius:${Math.random()<.3?"50%":"2px"}`,l.animate([{transform:"translate(0,0) rotate(0deg)",opacity:1},{transform:`translate(${g}vw, 110vh) rotate(${u}deg)`,opacity:1}],{duration:f,delay:c,easing:"cubic-bezier(.2,.6,.4,1)",fill:"forwards"}),o.appendChild(l)}n.appendChild(o),setTimeout(()=>o.remove(),i*1.3+500)}function go(n){return n?.type==="prop"?null:n?.runnerId||n?.pick||null}function Fh(n,t){if(!t)return"";if((t.type==="win"||t.type==="special")&&!(t.type==="special"||t.boost))return yn(n,t.runnerId)?.odds?.display||`\xD7${po(n,t)}`;if(t.type==="win"||t.type==="special")return`\xD7${po(n,t)} \u{1F680}`;if(t.type==="inplay")return t.display||`\xD7${Number(t.lockedOdds??t.odds)||""}`;if(t.type==="prop"){let i=n?.props?.find(s=>s.id===t.propId);return(t.pick==="yes"?i?.odds?.displayYes:i?.odds?.displayNo)||`\xD7${po(n,t)}`}let e=n?.matchups?.find(i=>i.id===t.matchupId);return(t.pick===e?.a?e?.odds?.displayA:e?.odds?.displayB)||`\xD7${po(n,t)}`}function Bh(n){let t=Math.round(Number(n?.returned)||0),e=Math.round(Number(n?.stake)||0);return n?.void||n?.push||!n?.won&&t===e&&e>0?{kind:"push",net:0,text:"refunded \xB10"}:n?.won?{kind:"won",net:t-e,text:gi(t-e)}:{kind:"lost",net:-e,text:gi(-e)}}function yo(n,t=10){if(!n)return{headline:"",kicker:""};if(n.headline)return{headline:n.headline,kicker:n.kicker||""};let e=String(n.text||"").trim(),i="",s=e.indexOf('"');s>0&&(i=e.slice(s).replace(/"/g,"").trim(),e=e.slice(0,s).trim());let r=e.match(/^(.+?[.!?])(\s+|$)([\s\S]*)$/),o=r?r[1]:e,a=r?r[3].trim():"",l=o.split(/\s+/);l.length>t&&(a=`\u2026${l.slice(t-1).join(" ")}${a?` ${a}`:""}`,o=`${l.slice(0,t-1).join(" ")}\u2026`);let h=[a,i?`\u201C${i}\u201D`:""].filter(Boolean).join(" ");return{headline:o,kicker:h}}var oe="#14183c";function Sd(n){let t=2166136261;for(let e of String(n))t^=e.charCodeAt(0),t=Math.imul(t,16777619);return t>>>0}var zh=["#2b1a10","#5a3418","#8a5a2b","#d8a24a","#1b1b1b","#b8432a","#9aa0a8"];function Es(n,t){let e=parseInt(String(n||"#888888").replace("#","").padEnd(6,"8").slice(0,6),16),i=e>>16&255,s=e>>8&255,r=e&255,o=t<0?0:255,a=Math.abs(t);return i=Math.round((o-i)*a+i),s=Math.round((o-s)*a+s),r=Math.round((o-r)*a+r),`#${(1<<24|i<<16|s<<8|r).toString(16).slice(1)}`}function Hh(n,{size:t=120,idSuffix:e=""}={}){let i=n?.look||{},s=n?.colour?.primary||"#ff4d5a",r=n?.colour?.secondary||"#ffffff",o=i.skin||"#f1c6a5",a=Sd(n?.id+(n?.nickname||"")),l=i.hairColour||i.hairColor||zh[a%zh.length],h=i.build||"compact",d={stocky:50,tall:40,lanky:34,compact:42}[h]??42,g={tall:8,lanky:10,stocky:2,compact:4}[h]??4,u={compact:31,stocky:30,lanky:28,tall:29}[h]??30,c=60,f=50-g/2,_=n?.lane??"",m=`pc${a.toString(36)}${e}`,p=[];p.push(`<defs><clipPath id="${m}"><circle cx="60" cy="60" r="56"/></clipPath></defs>`),p.push(`<circle cx="60" cy="60" r="56" fill="${Es(s,.55)}"/>`),p.push(`<g clip-path="url(#${m})">`),p.push(`<path d="M0 92 L120 70 L120 120 L0 120Z" fill="${Es(s,.35)}" opacity=".6"/>`);let S=f+u+g-4;p.push(`<path d="M${c-d} 124 Q${c-d} ${S+6} ${c-14} ${S} L${c+14} ${S} Q${c+d} ${S+6} ${c+d} 124Z" fill="${s}" stroke="${oe}" stroke-width="5" stroke-linejoin="round"/>`),p.push(`<path d="M${c-18} ${S+1} L${c-2} ${S+1} L${c+26} 124 L${c+8} 124Z" fill="${r}" stroke="${oe}" stroke-width="3" stroke-linejoin="round"/>`),p.push(`<rect x="${c-30}" y="${S+14}" width="22" height="17" rx="3" fill="#fff" stroke="${oe}" stroke-width="3" transform="rotate(-6 ${c-19} ${S+22})"/>`),p.push(`<text x="${c-19}" y="${S+28}" font-family="Lilita One, Arial Black, sans-serif" font-size="14" text-anchor="middle" fill="${oe}" transform="rotate(-6 ${c-19} ${S+22})">${_}</text>`),p.push(`<rect x="${c-9}" y="${f+u-8}" width="18" height="${g+12}" fill="${o}" stroke="${oe}" stroke-width="5"/>`),i.accessory==="medal"&&(p.push(`<path d="M${c-12} ${S} L${c} ${S+22} L${c+12} ${S}" fill="none" stroke="${r}" stroke-width="6"/>`),p.push(`<circle cx="${c}" cy="${S+26}" r="9" fill="#ffcf3a" stroke="${oe}" stroke-width="4"/>`));let v=i.hair||"short";["long","ponytail","bob"].includes(v)&&p.push(`<path d="M${c-u-4} ${f} Q${c-u-6} ${f+u+14} ${c-u+10} ${f+u+10} L${c+u-10} ${f+u+10} Q${c+u+6} ${f+u+14} ${c+u+4} ${f}Z" fill="${l}" stroke="${oe}" stroke-width="5" stroke-linejoin="round"/>`),v==="ponytail"&&p.push(`<ellipse cx="${c+u+6}" cy="${f-6}" rx="9" ry="16" fill="${l}" stroke="${oe}" stroke-width="5" transform="rotate(25 ${c+u+6} ${f-6})"/>`),p.push(`<circle cx="${c-u+1}" cy="${f+4}" r="7" fill="${o}" stroke="${oe}" stroke-width="5"/>`),p.push(`<circle cx="${c+u-1}" cy="${f+4}" r="7" fill="${o}" stroke="${oe}" stroke-width="5"/>`),p.push(`<ellipse cx="${c}" cy="${f}" rx="${u}" ry="${u+2}" fill="${o}" stroke="${oe}" stroke-width="5"/>`),p.push(`<ellipse cx="${c-16}" cy="${f+11}" rx="6" ry="4" fill="#ff8f8f" opacity=".45"/><ellipse cx="${c+16}" cy="${f+11}" rx="6" ry="4" fill="#ff8f8f" opacity=".45"/>`);let M=f-u-2,D={short:`<path d="M${c-u+2} ${f-6} Q${c-u} ${M-4} ${c} ${M-2} Q${c+u} ${M-4} ${c+u-2} ${f-6} Q${c+8} ${f-18} ${c-u+2} ${f-6}Z"/>`,buzz:`<path d="M${c-u+3} ${f-8} Q${c} ${M-6} ${c+u-3} ${f-8} Q${c} ${f-20} ${c-u+3} ${f-8}Z"/>`,curly:`<path d="M${c-u} ${f-2} q-6 -12 4 -18 q0 -12 14 -12 q6 -10 18 -4 q12 -4 16 8 q12 4 8 18 q-14 -8 -30 -6 q-16 0 -30 14z"/>`,afro:`<circle cx="${c}" cy="${f-14}" r="${u+8}"/>`,mohawk:`<path d="M${c-6} ${f-14} L${c-8} ${M-16} L${c+8} ${M-16} L${c+6} ${f-14}Z"/>`,quiff:`<path d="M${c-u+2} ${f-6} Q${c-u} ${M} ${c-4} ${M-2} Q${c+20} ${M-18} ${c+u+4} ${M+2} Q${c+u} ${f-8} ${c+u-2} ${f-6} Q${c+8} ${f-18} ${c-u+2} ${f-6}Z"/>`,bun:`<g><circle cx="${c}" cy="${M-6}" r="10"/><path d="M${c-u+2} ${f-6} Q${c-u} ${M-2} ${c} ${M} Q${c+u} ${M-2} ${c+u-2} ${f-6} Q${c} ${f-16} ${c-u+2} ${f-6}Z"/></g>`,long:`<path d="M${c-u+1} ${f+2} Q${c-u} ${M-4} ${c} ${M-2} Q${c+u} ${M-4} ${c+u-1} ${f+2} Q${c+10} ${f-16} ${c-2} ${f-12} Q${c-14} ${f-16} ${c-u+1} ${f+2}Z"/>`,bald:""};D.ponytail=D.long,D.bob=D.long,D.spiky=`<path d="M${c-u+2} ${f-6} L${c-u+2} ${M+2} L${c-14} ${M-12} L${c-8} ${M-2} L${c} ${M-16} L${c+6} ${M-2} L${c+15} ${M-12} L${c+u-2} ${M+2} L${c+u-2} ${f-6} Q${c} ${f-18} ${c-u+2} ${f-6}Z"/>`,D.mullet=`<g><path d="M${c+u-6} ${f} Q${c+u+10} ${f+22} ${c+u-2} ${f+34} L${c+u-14} ${f+20}Z"/><path d="M${c-u+6} ${f} Q${c-u-10} ${f+22} ${c-u+2} ${f+34} L${c-u+14} ${f+20}Z"/>${D.short}</g>`,D.swept=`<path d="M${c-u+2} ${f-4} Q${c-u-4} ${M-6} ${c+6} ${M-6} Q${c+u+8} ${M} ${c+u-1} ${f-2} Q${c+4} ${f-22} ${c-u+2} ${f-4}Z"/>`;let w=D[v]??D.short;w&&p.push(`<g fill="${l}" stroke="${oe}" stroke-width="5" stroke-linejoin="round">${w}</g>`);let A=i.face||"grin",T=f+1,x=(R,U)=>U?`<path d="M${R-5} ${T} Q${R} ${T+4} ${R+5} ${T}" fill="none" stroke="${oe}" stroke-width="3.5" stroke-linecap="round"/>`:`<ellipse cx="${R}" cy="${T}" rx="4.2" ry="5.6" fill="${oe}"/><circle cx="${R+1.4}" cy="${T-2}" r="1.5" fill="#fff"/>`,y="",b="",C=x(c-11)+x(c+11);switch(A){case"determined":case"focused":case"fierce":y=`<path d="M${c-18} ${T-12} L${c-5} ${T-7} M${c+18} ${T-12} L${c+5} ${T-7}" stroke="${oe}" stroke-width="4" stroke-linecap="round"/>`,b=`<path d="M${c-9} ${f+17} L${c+9} ${f+15}" stroke="${oe}" stroke-width="4" stroke-linecap="round"/>`;break;case"smug":case"cheeky":C=`<path d="M${c-16} ${T} L${c-6} ${T}" stroke="${oe}" stroke-width="4" stroke-linecap="round"/>`+x(c+11),y=`<path d="M${c+5} ${T-10} Q${c+11} ${T-15} ${c+18} ${T-10}" fill="none" stroke="${oe}" stroke-width="3.5" stroke-linecap="round"/>`,b=`<path d="M${c-8} ${f+15} Q${c+4} ${f+19} ${c+11} ${f+11}" fill="none" stroke="${oe}" stroke-width="4" stroke-linecap="round"/>`;break;case"worried":case"nervous":case"anxious":y=`<path d="M${c-17} ${T-8} L${c-6} ${T-13} M${c+17} ${T-8} L${c+6} ${T-13}" stroke="${oe}" stroke-width="3.5" stroke-linecap="round"/>`,b=`<path d="M${c-10} ${f+17} q5 -5 10 0 q5 5 10 0" fill="none" stroke="${oe}" stroke-width="3.5" stroke-linecap="round"/>`;break;case"sleepy":case"tired":case"dozy":C=x(c-11,!0)+x(c+11,!0),b=`<ellipse cx="${c+2}" cy="${f+17}" rx="5" ry="4" fill="${oe}"/>`;break;case"wink":C=x(c-11,!0)+x(c+11),b=`<path d="M${c-11} ${f+12} Q${c} ${f+24} ${c+11} ${f+12}Z" fill="#fff" stroke="${oe}" stroke-width="3.5" stroke-linejoin="round"/>`;break;case"gritted":y=`<path d="M${c-18} ${T-11} L${c-5} ${T-7} M${c+18} ${T-11} L${c+5} ${T-7}" stroke="${oe}" stroke-width="4" stroke-linecap="round"/>`,b=`<rect x="${c-12}" y="${f+11}" width="24" height="10" rx="3" fill="#fff" stroke="${oe}" stroke-width="3.5"/><path d="M${c-4} ${f+11} v10 M${c+4} ${f+11} v10 M${c-12} ${f+16} h24" stroke="${oe}" stroke-width="2"/>`;break;case"tongue-out":C=x(c-11,!0)+x(c+11),b=`<path d="M${c-11} ${f+12} Q${c} ${f+20} ${c+11} ${f+12}" fill="none" stroke="${oe}" stroke-width="3.5" stroke-linecap="round"/><path d="M${c-2} ${f+15} q4 14 10 0z" fill="#ff6b7a" stroke="${oe}" stroke-width="3"/>`;break;case"wide-eyed":C=`<circle cx="${c-11}" cy="${T}" r="7.5" fill="#fff" stroke="${oe}" stroke-width="3"/><circle cx="${c-11}" cy="${T}" r="3.2" fill="${oe}"/><circle cx="${c+11}" cy="${T}" r="7.5" fill="#fff" stroke="${oe}" stroke-width="3"/><circle cx="${c+11}" cy="${T}" r="3.2" fill="${oe}"/>`,b=`<ellipse cx="${c}" cy="${f+17}" rx="5" ry="6" fill="${oe}"/>`;break;case"shocked":case"surprised":b=`<ellipse cx="${c}" cy="${f+17}" rx="6" ry="8" fill="${oe}"/>`,y=`<path d="M${c-17} ${T-13} Q${c-11} ${T-17} ${c-5} ${T-13} M${c+17} ${T-13} Q${c+11} ${T-17} ${c+5} ${T-13}" fill="none" stroke="${oe}" stroke-width="3.5" stroke-linecap="round"/>`;break;default:b=`<path d="M${c-13} ${f+11} Q${c} ${f+27} ${c+13} ${f+11}Z" fill="#fff" stroke="${oe}" stroke-width="3.5" stroke-linejoin="round"/><path d="M${c-6} ${f+19} Q${c} ${f+23} ${c+6} ${f+19}" fill="#ff6b7a"/>`}p.push(C,y,b),p.push(`<path d="M${c-2} ${f+4} Q${c+3} ${f+8} ${c-1} ${f+10}" fill="none" stroke="${Es(o,-.35)}" stroke-width="3" stroke-linecap="round"/>`);let E=i.accessory;E==="sunglasses"||E==="shades"?p.push(`<g stroke="${oe}" stroke-width="3.5"><rect x="${c-21}" y="${T-7}" width="17" height="12" rx="4" fill="${oe}"/><rect x="${c+4}" y="${T-7}" width="17" height="12" rx="4" fill="${oe}"/><path d="M${c-4} ${T-3} L${c+4} ${T-3}"/></g><path d="M${c-18} ${T-4} l5 0 M${c+7} ${T-4} l5 0" stroke="#fff" stroke-width="2.5" stroke-linecap="round"/>`):E==="glasses"||E==="specs"?p.push(`<g stroke="${oe}" stroke-width="3.5" fill="rgba(255,255,255,.25)"><circle cx="${c-11}" cy="${T}" r="8"/><circle cx="${c+11}" cy="${T}" r="8"/><path d="M${c-3} ${T} L${c+3} ${T}"/></g>`):E==="moustache"||E==="mustache"||E==="tache"?p.push(`<path d="M${c} ${f+12} q-8 -6 -16 0 q6 6 16 0 q8 -6 16 0 q-6 6 -16 0z" fill="${l}" stroke="${oe}" stroke-width="3" stroke-linejoin="round"/>`):E==="headphones"||E==="earbuds"?p.push(`<path d="M${c-u-2} ${f+2} Q${c} ${M-22} ${c+u+2} ${f+2}" fill="none" stroke="${oe}" stroke-width="7"/><rect x="${c-u-8}" y="${f-6}" width="12" height="20" rx="5" fill="${r}" stroke="${oe}" stroke-width="4"/><rect x="${c+u-4}" y="${f-6}" width="12" height="20" rx="5" fill="${r}" stroke="${oe}" stroke-width="4"/>`):E==="beard"?p.push(`<path d="M${c-u+4} ${f+4} Q${c-u+6} ${f+u+6} ${c} ${f+u+8} Q${c+u-6} ${f+u+6} ${c+u-4} ${f+4} Q${c+14} ${f+18} ${c} ${f+22} Q${c-14} ${f+18} ${c-u+4} ${f+4}Z" fill="${l}" stroke="${oe}" stroke-width="3.5" stroke-linejoin="round"/>`):E==="scarf"?p.push(`<path d="M${c-20} ${S-4} Q${c} ${S+8} ${c+20} ${S-4} L${c+22} ${S+6} Q${c} ${S+18} ${c-22} ${S+6}Z" fill="${r}" stroke="${oe}" stroke-width="3.5"/><rect x="${c+8}" y="${S+6}" width="9" height="22" rx="2" fill="${r}" stroke="${oe}" stroke-width="3"/>`):E==="cape"?p.push(`<path d="M${c-22} ${S} L${c-46} 124 M${c+22} ${S} L${c+46} 124" stroke="${r}" stroke-width="8" stroke-linecap="round"/>`):E==="wristbands"||E==="bumbag"?p.push(`<rect x="${c-26}" y="${S+30}" width="${E==="bumbag"?30:14}" height="${E==="bumbag"?14:10}" rx="5" fill="${r}" stroke="${oe}" stroke-width="3.5"/>`):E==="whistle"&&p.push(`<path d="M${c-10} ${S} Q${c} ${S+18} ${c+10} ${S}" fill="none" stroke="${r}" stroke-width="3"/><rect x="${c-6}" y="${S+12}" width="14" height="8" rx="3" fill="#cfd8e8" stroke="${oe}" stroke-width="3"/>`);let L=i.hat;return L==="backwards-cap"?(p.push(`<path d="M${c-u+1} ${f-8} Q${c-u+2} ${M-10} ${c} ${M-10} Q${c+u-2} ${M-10} ${c+u-1} ${f-8}Z" fill="${s}" stroke="${oe}" stroke-width="5" stroke-linejoin="round"/>`),p.push(`<path d="M${c-u+4} ${f-12} Q${c-u-14} ${f-14} ${c-u-18} ${f-4} L${c-u+2} ${f-4}Z" fill="${Es(s,-.2)}" stroke="${oe}" stroke-width="5" stroke-linejoin="round"/>`)):L==="cap"||L==="baseball cap"||L==="trucker"?(p.push(`<path d="M${c-u+1} ${f-8} Q${c-u+2} ${M-10} ${c} ${M-10} Q${c+u-2} ${M-10} ${c+u-1} ${f-8}Z" fill="${s}" stroke="${oe}" stroke-width="5" stroke-linejoin="round"/>`),p.push(`<path d="M${c-6} ${f-10} Q${c+24} ${f-18} ${c+u+16} ${f-6} L${c+u-2} ${f-4}Z" fill="${Es(s,-.2)}" stroke="${oe}" stroke-width="5" stroke-linejoin="round"/>`),p.push(`<circle cx="${c}" cy="${M-10}" r="3.5" fill="${r}" stroke="${oe}" stroke-width="2.5"/>`)):L==="beanie"||L==="bobble"||L==="bobble hat"||L==="woolly hat"?(p.push(`<path d="M${c-u} ${f-6} Q${c-u} ${M-14} ${c} ${M-14} Q${c+u} ${M-14} ${c+u} ${f-6}Z" fill="${r}" stroke="${oe}" stroke-width="5" stroke-linejoin="round"/>`),p.push(`<rect x="${c-u-2}" y="${f-12}" width="${u*2+4}" height="11" rx="5" fill="${s}" stroke="${oe}" stroke-width="5"/>`),p.push(`<circle cx="${c}" cy="${M-16}" r="8" fill="${s}" stroke="${oe}" stroke-width="5"/>`)):L==="headband"||L==="sweatband"?(p.push(`<path d="M${c-u} ${f-13} Q${c} ${f-22} ${c+u} ${f-13} L${c+u+1} ${f-4} Q${c} ${f-13} ${c-u-1} ${f-4}Z" fill="${r}" stroke="${oe}" stroke-width="4" stroke-linejoin="round"/>`),p.push(`<path d="M${c+u} ${f-9} l12 -4 l-2 10z" fill="${r}" stroke="${oe}" stroke-width="3.5" stroke-linejoin="round"/>`)):L==="visor"?p.push(`<path d="M${c-u} ${f-12} Q${c} ${f-20} ${c+u} ${f-12} L${c+u} ${f-5} Q${c} ${f-12} ${c-u} ${f-5}Z" fill="${s}" stroke="${oe}" stroke-width="4"/><path d="M${c-18} ${f-10} Q${c+4} ${f-2} ${c+30} ${f-10} L${c+20} ${f-15}Z" fill="${Es(s,-.2)}" stroke="${oe}" stroke-width="4" stroke-linejoin="round"/>`):L==="bucket"||L==="bucket hat"||L==="sun hat"?p.push(`<path d="M${c-u-12} ${f-6} L${c-u+4} ${M-8} Q${c} ${M-16} ${c+u-4} ${M-8} L${c+u+12} ${f-6} Q${c} ${f-14} ${c-u-12} ${f-6}Z" fill="${r}" stroke="${oe}" stroke-width="5" stroke-linejoin="round"/>`):L==="party"||L==="party hat"?p.push(`<path d="M${c-14} ${M+4} L${c+4} ${M-30} L${c+16} ${M+2}Z" fill="${s}" stroke="${oe}" stroke-width="5" stroke-linejoin="round"/><circle cx="${c+4}" cy="${M-32}" r="5" fill="${r}" stroke="${oe}" stroke-width="3"/>`):L==="tophat"||L==="top hat"?p.push(`<rect x="${c-18}" y="${M-30}" width="36" height="30" rx="3" fill="${oe}"/><rect x="${c-18}" y="${M-10}" width="36" height="7" fill="${s}"/><rect x="${c-30}" y="${M-2}" width="60" height="8" rx="4" fill="${oe}"/>`):L==="crown"?p.push(`<path d="M${c-20} ${M+2} L${c-22} ${M-20} L${c-10} ${M-8} L${c} ${M-24} L${c+10} ${M-8} L${c+22} ${M-20} L${c+20} ${M+2}Z" fill="#ffcf3a" stroke="${oe}" stroke-width="4" stroke-linejoin="round"/>`):L&&p.push(`<path d="M${c-u+1} ${f-8} Q${c-u+2} ${M-10} ${c} ${M-10} Q${c+u-2} ${M-10} ${c+u-1} ${f-8}Z" fill="${r}" stroke="${oe}" stroke-width="5" stroke-linejoin="round"/>`),p.push("</g>"),p.push(`<circle cx="60" cy="60" r="56" fill="none" stroke="${oe}" stroke-width="6"/>`),`<svg class="portrait" viewBox="0 0 120 120" width="${t}" height="${t}" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">${p.join("")}</svg>`}var wd=/(daniel|george|arthur|ryan|oliver|thomas|male|james|harry|guy|brian|fred|alex|aaron)/i,Ed=/(kate|serena|martha|libby|sonia|hazel|susan|female|stephanie|fiona|moira|tessa|karen|emma|amy|samantha|victoria|zira|aria|jenny|catherine)/i;function $h({onLine:n,onIdle:t}={}){let e=typeof window<"u"?window.speechSynthesis:null,i=!0,s=.9,r={jeff:null,pam:null},o=[],a=null,l=null;function h(){if(!e)return;let _=e.getVoices()||[];if(!_.length)return;let m=_.filter(A=>/en[-_]GB/i.test(A.lang)),p=_.filter(A=>/^en/i.test(A.lang)),S=m.length?m:p.length?p:_,M=(A=>[...A.filter(T=>T.localService),...A.filter(T=>!T.localService)])(S),D=M.find(A=>wd.test(A.name))||M[0],w=M.find(A=>Ed.test(A.name)&&A!==D)||M.find(A=>A!==D)||D;r={jeff:D,pam:w}}e&&(h(),e.addEventListener?.("voiceschanged",h));let d=_=>Math.max(2200,String(_).split(/\s+/).length*400+600);function g(){clearTimeout(l),a=null;let _=o.shift();for(;_&&_.priority<3&&Date.now()-_.at>8e3;)_=o.shift();if(!_){t?.();return}a=_,n?.(_);let m=()=>{a===_&&g()};if(i&&e&&(r.jeff||r.pam)){let p=new SpeechSynthesisUtterance(_.text),S=_.speaker==="pam"?r.pam:r.jeff;S?(p.voice=S,p.lang=S.lang):p.lang="en-GB";let v=r.jeff===r.pam;p.pitch=_.speaker==="pam"?v?1.35:1.08:v?.8:.95,p.rate=_.rate||1.06,p.volume=s,p.onend=m,p.onerror=m;try{e.speak(p)}catch{}l=setTimeout(()=>{try{e.cancel()}catch{}m()},d(_.text)*2.2+2e3)}else l=setTimeout(m,d(_.text))}function u(_,m="jeff",{priority:p=2,interrupt:S=!1}={}){if(!_)return;let v={text:String(_),speaker:m,priority:p,at:Date.now()};for(S&&(o.length=0,c()),o.push(v);o.length>2;){let M=0;for(let D=1;D<o.length;D++)o[D].priority<o[M].priority&&(M=D);o.splice(M,1)}a||g()}function c(){if(clearTimeout(l),e)try{e.cancel()}catch{}a=null}function f(){o.length=0,c(),t?.()}return{say:u,clear:f,get busy(){return!!a||o.length>0},get available(){return!!e},setEnabled(_){if(i=!!_,!i&&e)try{e.cancel()}catch{}},setVolume(_){s=Math.max(0,Math.min(1,_))},whenIdle(_=15e3){return new Promise(m=>{let p=Date.now(),S=setInterval(()=>{(!a&&!o.length||Date.now()-p>_)&&(clearInterval(S),m())},120)})},get voiceNames(){return{jeff:r.jeff?.name,pam:r.pam?.name}}}}var nl=[1720,4220],tl=2500;function On(n,t){if(t<=0)return 0;if(t>=n[200])return 5e3;let e=0,i=200;for(;i-e>1;){let r=e+i>>1;n[r]<=t?e=r:i=r}let s=(t-n[e])/(n[i]-n[e]);return(e+s)*25}function Fn(n,t){let e=Math.max(0,Math.min(5e3,t))/25,i=Math.floor(e),s=Math.min(200,i+1);return n[i]+(e-i)*(n[s]-n[i])}function Td(n,{dt:t=1,debounceS:e=6}={}){let i=n.map(y=>y.id),s=Math.max(...n.map(y=>y.officialS)),r=[...n].sort((y,b)=>y.officialS-b.officialS).map(y=>y.id),o=[];for(let y=0;y<=Math.ceil(s);y+=t){let b=n.map(C=>On(C.progress,y));o.push({t:y,d:b})}let a=[],l=n.length,h={},d=(y,b)=>`${y}-${b}`,g=null,u=0,c=null,f=0,_=0,m=0,p=!1,S=null;for(let y of o){if(y.t<15)continue;let b=n.map(L=>y.t>=L.officialS);for(let L=0;L<l;L++)for(let R=L+1;R<l;R++){if(b[L]&&b[R])continue;let U=y.d[L]>y.d[R]?L:R,O=h[d(L,R)];if(!O){h[d(L,R)]={ahead:U,cand:U,since:y.t};continue}if(U!==O.cand&&(O.cand=U,O.since=y.t),O.cand!==O.ahead&&y.t-O.since>=e){let z=O.cand,q=O.cand===L?R:L;O.ahead=O.cand;let X=O.since;m++,a.push({type:"overtake",raceS:X,by:i[z],on:i[q],atM:Math.round(On(n[z].progress,X))})}}let C=y.d.indexOf(Math.max(...y.d));if(g===null){g=C,u=y.t;continue}C!==g?c!==C?(c=C,f=y.t):y.t-f>=e&&!b[g]&&(a.push({type:"lead_change",raceS:f,from:i[g],to:i[C],atM:Math.round(y.d[C])}),_++,y.d[C]>3500&&(p=!0),g=C,u=f,c=null):c=null;let E=[...y.d].sort((L,R)=>R-L);S===null&&E[0]-E[1]>60&&E[0]<5e3&&(S=y.t,a.push({type:"breakaway",raceS:y.t,who:i[C],gapM:Math.round(E[0]-E[1]),atM:Math.round(E[0])}))}let v=y=>Math.min(...n.map(b=>Fn(b.progress,y)));for(let[y,b]of nl.entries())a.push({type:"hill",raceS:v(b),lap:y+1,atM:b});a.push({type:"lap",raceS:v(tl),atM:tl,order:el(n,v(tl))}),a.push({type:"final_stretch",raceS:v(4600),atM:4600,order:el(n,v(4600))});for(let y of n)a.push({type:"finish",raceS:y.officialS,who:y.id,place:r.indexOf(y.id)+1});a.sort((y,b)=>y.raceS-b.raceS);let M=n.map(y=>y.officialS).sort((y,b)=>y-b),D=y=>el(n,v(y)),w=D(2e3)[0],A=D(1e3)[0],T=D(4e3)[0],x=D(2e3).at(-1);return{finishOrder:r,winningMarginS:M[1]-M[0],spreadS:M.at(-1)-M[0],leadChanges:_,overtakes:m,lateLeadChange:p,leaderAt1k:A,leaderAt2k:w,leaderAt4k:T,leaderAt2kFinalPlace:r.indexOf(w)+1,winnerPlaceAt2k:D(2e3).indexOf(r[0])+1,winnerPlaceAt1k:D(1e3).indexOf(r[0])+1,lastAt2kFinalPlace:r.indexOf(x)+1,breakawayAtS:S,events:a}}function el(n,t){return n.map(e=>({id:e.id,d:On(e.progress,t),f:e.officialS})).sort((e,i)=>i.d-e.d||e.f-i.f).map(e=>e.id)}function Ad(n,{targetS:t=140}={}){let e=Math.max(...n.map(p=>p.officialS)),i=Math.min(...n.map(p=>Fn(p.progress,4500))),s=45,r=i,o=e+3,a=o-r,l=4,h=Math.min(t*.45,Math.max(25,a/1.6)),d=a/h,g=r-s,u=Math.max(30,t-s/l-h),c=g/u,f=p=>{let S=Vh(s-10,s+10,p),v=Vh(r-60,r,p);return l+(c-l)*S+(d-c)*v},_=[[0,0]],m=0;for(let p=1;p<=Math.ceil(o);p++)m+=1/f(p-.5),_.push([p,Math.round(m*1e3)/1e3]);return{map:_,durationS:Math.round(m*10)/10,raceEndS:Math.ceil(o),rates:{start:l,middle:Math.round(c*10)/10,finale:Math.round(d*100)/100}}}function Vh(n,t,e){let i=Math.max(0,Math.min(1,(e-n)/(t-n)));return i*i*(3-2*i)}function li(n,t){let e=n.map;if(t<=0)return 0;if(t>=e.length-1)return e.at(-1)[1];let i=Math.floor(t),s=t-i;return e[i][1]+s*(e[i+1][1]-e[i][1])}function Ni(n,t){let e=n.map;if(t<=0)return 0;let i=0,s=e.length-1;if(t>=e[s][1])return e[s][0];for(;s-i>1;){let r=i+s>>1;e[r][1]<=t?i=r:s=r}return e[i][0]+(t-e[i][1])/(e[s][1]-e[i][1])}function Gh(n,t,e={}){let i=Td(t),s=Ad(t,e),r=[...i.events];for(let a of t)for(let[l,h]of(a.diversions||[]).entries())r.push({type:"diversion",who:a.id,lap:l+1,raceS:Fn(a.progress,h.fromM),endRaceS:Fn(a.progress,h.toM),fromM:h.fromM,toM:h.toM});r.sort((a,l)=>a.raceS-l.raceS);let o=r.map(a=>({...a,broadcastS:Math.round(li(s,a.raceS)*100)/100,...a.endRaceS!=null?{endBroadcastS:Math.round(li(s,a.endRaceS)*100)/100}:{}}));return{roundId:n,courseLengthM:5e3,runners:t.map(a=>({id:a.id,officialS:a.officialS,progress:a.progress,pacingSource:a.pacingSource,diversions:a.diversions||null})),timeMap:s,events:o,finishOrder:i.finishOrder,summary:{winningMarginS:i.winningMarginS,spreadS:i.spreadS,leadChanges:i.leadChanges,overtakes:i.overtakes,lateLeadChange:i.lateLeadChange}}}var Ts="#14183c";function Wh(n,{course:t,round:e,plan:i,speed:s=1}){let r=document.createElement("canvas");r.style.cssText="position:absolute;inset:0;width:100%;height:100%;display:block",n.appendChild(r);let o=r.getContext("2d",{alpha:!1}),a=e?.runners||[],l=t?.points||[],h=0,d=!1,g=!1,u=0,c="idle",f=0,_=0,m=-1,p=null,S=null,v=[],M=null,D=1/0,w=-1/0,A=1/0,T=-1/0;for(let O of l)D=Math.min(D,O[0]),w=Math.max(w,O[0]),A=Math.min(A,O[2]),T=Math.max(T,O[2]);function x(){let O=Math.min(1,1100/Math.max(1,n.clientWidth));r.width=Math.round(n.clientWidth*O),r.height=Math.round(n.clientHeight*O)}x();let y=new ResizeObserver(x);y.observe(n);function b(O,z){let q=r.width,X=r.height,N=X*.16,gt=X*.24,Rt=q*.08,k=Math.min((q-Rt*2-q*.22)/(w-D||1),(X-N-gt)/(T-A||1)),W=Rt+(q-Rt*2-q*.22-(w-D)*k)/2,et=N+(X-N-gt-(T-A)*k)/2;return[W+(O-D)*k,et+(z-A)*k,k]}function C(O){if(!l.length)return[0,0];let z=Math.max(0,Math.min(l.length-1,O/5e3*(l.length-1))),q=Math.floor(z),X=Math.min(l.length-1,q+1),N=z-q;return[l[q][0]+(l[X][0]-l[q][0])*N,l[q][2]+(l[X][2]-l[q][2])*N]}let E=null;function L(){let O=r.width,z=r.height;E=document.createElement("canvas"),E.width=O,E.height=z;let q=E.getContext("2d"),X=q.createLinearGradient(0,0,0,z);X.addColorStop(0,"#45cf86"),X.addColorStop(1,"#1f9e5c"),q.fillStyle=X,q.fillRect(0,0,O,z),q.fillStyle="rgba(255,255,255,.05)";let N=O/1920;for(let gt=-z;gt<O;gt+=160*N)q.beginPath(),q.moveTo(gt,0),q.lineTo(gt+80*N,0),q.lineTo(gt+80*N+z*.5,z),q.lineTo(gt+z*.5,z),q.fill();if(l.length){let gt=new Path2D;l.forEach((et,G)=>{let[J,ct]=b(et[0],et[2]);G?gt.lineTo(J,ct):gt.moveTo(J,ct)});let Rt=b(0,0)[2];q.lineCap="round",q.lineJoin="round",q.strokeStyle=Ts,q.lineWidth=Math.max(16,Rt*14),q.stroke(gt),q.strokeStyle="#fff",q.lineWidth=Math.max(12,Rt*11),q.stroke(gt),q.strokeStyle="#6f84a8",q.lineWidth=Math.max(8,Rt*8),q.stroke(gt);let[k,W]=b(...t.finish?[t.finish[0],t.finish[1]]:[l.at(-1)[0],l.at(-1)[2]]);q.save(),q.translate(k,W);for(let et=-2;et<2;et++)for(let G=-1;G<1;G++)q.fillStyle=et+G&1?"#fff":Ts,q.fillRect(et*8,G*8,8,8);q.restore()}}function R(){let O=r.width,z=r.height;(!E||E.width!==O||E.height!==z)&&L(),o.drawImage(E,0,0);let q=i?Ni(i.timeMap,u):0,X=(i?.runners||[]).map(G=>({id:G.id,m:On(G.progress,q),done:q>=G.officialS,f:G.officialS}));X.sort((G,J)=>J.m-G.m||G.f-J.f);let N=Math.max(14,O/90);for(let G of[...X].reverse()){let J=a.find(Ut=>Ut.id===G.id),[ct,Tt]=b(...C(G.m));o.beginPath(),o.arc(ct,Tt+4,N,0,Math.PI*2),o.fillStyle="rgba(0,0,0,.25)",o.fill(),o.beginPath(),o.arc(ct,Tt,N,0,Math.PI*2),o.fillStyle=J?.colour?.primary||"#fff",o.fill(),o.lineWidth=N*.28,o.strokeStyle=Ts,o.stroke(),o.fillStyle="#fff",o.font=`${Math.round(N*1.15)}px "Lilita One", sans-serif`,o.textAlign="center",o.textBaseline="middle",o.lineWidth=N*.25,o.strokeText(String(J?.lane??""),ct,Tt+1),o.fillText(String(J?.lane??""),ct,Tt+1)}let gt=O*.77,Rt=z*.16,k=z*.075;o.font=`${Math.round(z*.035)}px "Lilita One", sans-serif`,o.textAlign="left",o.textBaseline="middle",X.forEach((G,J)=>{let ct=a.find(Ut=>Ut.id===G.id),Tt=Rt+J*k;o.save(),o.translate(gt,Tt),o.transform(1,0,-.14,1,0,0),o.fillStyle=Ts,o.fillRect(4,6,O*.2,k*.82),o.fillStyle=J===0?"#ffd23f":"#2a62e0",o.fillRect(0,0,O*.2,k*.82),o.fillStyle=ct?.colour?.primary||"#fff",o.fillRect(0,0,O*.012,k*.82),o.restore(),o.fillStyle=J===0?Ts:"#fff",o.fillText(`${J+1}  ${(ct?.shortName||ct?.nickname||G.id).slice(0,16)}`,gt+O*.02,Tt+k*.41)}),o.font=`${Math.round(z*.04)}px "Lilita One", sans-serif`,o.textAlign="left";let W=Math.floor(q),et=`${Math.floor(W/60)}:${String(W%60).padStart(2,"0")}`;o.lineWidth=8,o.strokeStyle=Ts,o.strokeText(et,gt,Rt-z*.05),o.fillStyle="#ffd23f",o.fillText(et,gt,Rt-z*.05)}function U(O){if(g)return;let z=f?Math.min(.1,(O-f)/1e3):0;if(f=O,c==="race"&&!d){for(u+=z*s;v.length&&v[0].broadcastS<=u;){let q=v.shift();try{p?.(q)}catch(X){console.warn(X)}}if(u>=(i.timeMap.durationS||0)+1.5){c="done";let q=S;S=null,q?.()}}O-_>45&&(u!==m||!E)&&(_=O,m=u,R()),h=requestAnimationFrame(U)}return h=requestAnimationFrame(U),{kind:"2d",playIntro(O){setTimeout(()=>O?.(),10)},playRace(O,z){p=O,S=z,v=[...i.events||[],...i.commentary||[]].sort((q,X)=>q.broadcastS-X.broadcastS),u=0,c="race"},showPodium(O){M=O},setPaused(O){d=!!O},seek(O){for(u=Math.max(0,Number(O)||0);v.length&&v[0].broadcastS<=u;)v.shift();c="race"},get broadcastTime(){return c==="race"||c==="done"?u:-1},dispose(){g=!0,cancelAnimationFrame(h),y.disconnect(),r.remove()}}}var Qi={};kh(Qi,{createRaceView:()=>Pv});var rh="170";var Rd=0,Xh=1,Cd=2;var au=1,oh=2,bi=3,qi=0,Mn=1,on=2,Wi=0,Ys=1,qh=2,Yh=3,Zh=4,Id=5,ps=100,Pd=101,Ld=102,kd=103,Dd=104,Ud=200,Nd=201,Od=202,Fd=203,Ol=204,Fl=205,Bd=206,zd=207,Hd=208,$d=209,Vd=210,Gd=211,Wd=212,Xd=213,qd=214,Bl=0,zl=1,Hl=2,Ks=3,$l=4,Vl=5,Gl=6,Wl=7,lu=0,Yd=1,Zd=2,ui=0,Jd=1,jd=2,Kd=3,Qd=4,tp=5,ep=6,np=7;var cu=300,Qs=301,tr=302,Xl=303,ql=304,Ua=306,xs=1e3,gs=1001,Yl=1002,Ln=1003,ip=1004;var xo=1005;var hi=1006,il=1007;var ys=1008;var Ti=1009,hu=1010,fu=1011,Fr=1012,ah=1013,vs=1014,fi=1015,Kr=1016,lh=1017,ch=1018,er=1020,uu=35902,du=1021,pu=1022,Hn=1023,mu=1024,gu=1025,Zs=1026,nr=1027,hh=1028,fh=1029,yu=1030,uh=1031;var dh=1033,Zo=33776,Jo=33777,jo=33778,Ko=33779,Zl=35840,Jl=35841,jl=35842,Kl=35843,Ql=36196,tc=37492,ec=37496,nc=37808,ic=37809,sc=37810,rc=37811,oc=37812,ac=37813,lc=37814,cc=37815,hc=37816,fc=37817,uc=37818,dc=37819,pc=37820,mc=37821,Qo=36492,gc=36494,yc=36495,xu=36283,xc=36284,vc=36285,_c=36286;var ta=2300,Mc=2301,sl=2302,Jh=2400,jh=2401,Kh=2402;var sp=3200,rp=3201;var vu=0,op=1,Vi="",vn="srgb",lr="srgb-linear",Na="linear",He="srgb";var As=7680;var Qh=519,ap=512,lp=513,cp=514,_u=515,hp=516,fp=517,up=518,dp=519,bc=35044;var tf="300 es",wi=2e3,ea=2001,Yi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let i=this._listeners[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ef=1234567,kr=Math.PI/180,Br=180/Math.PI;function di(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Tn[n&255]+Tn[n>>8&255]+Tn[n>>16&255]+Tn[n>>24&255]+"-"+Tn[t&255]+Tn[t>>8&255]+"-"+Tn[t>>16&15|64]+Tn[t>>24&255]+"-"+Tn[e&63|128]+Tn[e>>8&255]+"-"+Tn[e>>16&255]+Tn[e>>24&255]+Tn[i&255]+Tn[i>>8&255]+Tn[i>>16&255]+Tn[i>>24&255]).toLowerCase()}function _n(n,t,e){return Math.max(t,Math.min(e,n))}function ph(n,t){return(n%t+t)%t}function pp(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function mp(n,t,e){return n!==t?(e-n)/(t-n):0}function Dr(n,t,e){return(1-e)*n+e*t}function gp(n,t,e,i){return Dr(n,t,1-Math.exp(-e*i))}function yp(n,t=1){return t-Math.abs(ph(n,t*2)-t)}function xp(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function vp(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function _p(n,t){return n+Math.floor(Math.random()*(t-n+1))}function Mp(n,t){return n+Math.random()*(t-n)}function bp(n){return n*(.5-Math.random())}function Sp(n){n!==void 0&&(ef=n);let t=ef+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function wp(n){return n*kr}function Ep(n){return n*Br}function Tp(n){return(n&n-1)===0&&n!==0}function Ap(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Rp(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Cp(n,t,e,i,s){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),h=r((t+i)/2),d=o((t+i)/2),g=r((t-i)/2),u=o((t-i)/2),c=r((i-t)/2),f=o((i-t)/2);switch(s){case"XYX":n.set(a*d,l*g,l*u,a*h);break;case"YZY":n.set(l*u,a*d,l*g,a*h);break;case"ZXZ":n.set(l*g,l*u,a*d,a*h);break;case"XZX":n.set(a*d,l*f,l*c,a*h);break;case"YXY":n.set(l*c,a*d,l*f,a*h);break;case"ZYZ":n.set(l*f,l*c,a*d,a*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ei(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Be(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var Ji={DEG2RAD:kr,RAD2DEG:Br,generateUUID:di,clamp:_n,euclideanModulo:ph,mapLinear:pp,inverseLerp:mp,lerp:Dr,damp:gp,pingpong:yp,smoothstep:xp,smootherstep:vp,randInt:_p,randFloat:Mp,randFloatSpread:bp,seededRandom:Sp,degToRad:wp,radToDeg:Ep,isPowerOfTwo:Tp,ceilPowerOfTwo:Ap,floorPowerOfTwo:Rp,setQuaternionFromProperEuler:Cp,normalize:Be,denormalize:ei},zt=class n{constructor(t=0,e=0){n.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(_n(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Re=class n{constructor(t,e,i,s,r,o,a,l,h){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,h)}set(t,e,i,s,r,o,a,l,h){let d=this.elements;return d[0]=t,d[1]=s,d[2]=a,d[3]=e,d[4]=r,d[5]=l,d[6]=i,d[7]=o,d[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],h=i[1],d=i[4],g=i[7],u=i[2],c=i[5],f=i[8],_=s[0],m=s[3],p=s[6],S=s[1],v=s[4],M=s[7],D=s[2],w=s[5],A=s[8];return r[0]=o*_+a*S+l*D,r[3]=o*m+a*v+l*w,r[6]=o*p+a*M+l*A,r[1]=h*_+d*S+g*D,r[4]=h*m+d*v+g*w,r[7]=h*p+d*M+g*A,r[2]=u*_+c*S+f*D,r[5]=u*m+c*v+f*w,r[8]=u*p+c*M+f*A,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],h=t[7],d=t[8];return e*o*d-e*a*h-i*r*d+i*a*l+s*r*h-s*o*l}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],h=t[7],d=t[8],g=d*o-a*h,u=a*l-d*r,c=h*r-o*l,f=e*g+i*u+s*c;if(f===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/f;return t[0]=g*_,t[1]=(s*h-d*i)*_,t[2]=(a*i-s*o)*_,t[3]=u*_,t[4]=(d*e-s*l)*_,t[5]=(s*r-a*e)*_,t[6]=c*_,t[7]=(i*l-h*e)*_,t[8]=(o*e-i*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){let l=Math.cos(r),h=Math.sin(r);return this.set(i*l,i*h,-i*(l*o+h*a)+o+t,-s*h,s*l,-s*(-h*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(rl.makeScale(t,e)),this}rotate(t){return this.premultiply(rl.makeRotation(-t)),this}translate(t,e){return this.premultiply(rl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},rl=new Re;function Mu(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function na(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Ip(){let n=na("canvas");return n.style.display="block",n}var nf={};function Pr(n){n in nf||(nf[n]=!0,console.warn(n))}function Pp(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function Lp(n){let t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function kp(n){let t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var Ne={enabled:!0,workingColorSpace:lr,spaces:{},convert:function(n,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===He&&(n.r=Ei(n.r),n.g=Ei(n.g),n.b=Ei(n.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(n.applyMatrix3(this.spaces[t].toXYZ),n.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===He&&(n.r=Js(n.r),n.g=Js(n.g),n.b=Js(n.b))),n},fromWorkingColorSpace:function(n,t){return this.convert(n,this.workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Vi?Na:this.spaces[n].transfer},getLuminanceCoefficients:function(n,t=this.workingColorSpace){return n.fromArray(this.spaces[t].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,t,e){return n.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function Ei(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Js(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var sf=[.64,.33,.3,.6,.15,.06],rf=[.2126,.7152,.0722],of=[.3127,.329],af=new Re().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),lf=new Re().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Ne.define({[lr]:{primaries:sf,whitePoint:of,transfer:Na,toXYZ:af,fromXYZ:lf,luminanceCoefficients:rf,workingColorSpaceConfig:{unpackColorSpace:vn},outputColorSpaceConfig:{drawingBufferColorSpace:vn}},[vn]:{primaries:sf,whitePoint:of,transfer:He,toXYZ:af,fromXYZ:lf,luminanceCoefficients:rf,outputColorSpaceConfig:{drawingBufferColorSpace:vn}}});var Rs,Sc=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Rs===void 0&&(Rs=na("canvas")),Rs.width=t.width,Rs.height=t.height;let i=Rs.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Rs}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=na("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ei(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Ei(e[i]/255)*255):e[i]=Ei(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Dp=0,ia=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Dp++}),this.uuid=di(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(ol(s[o].image)):r.push(ol(s[o]))}else r=ol(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function ol(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Sc.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Up=0,Dn=class n extends Yi{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=gs,s=gs,r=hi,o=ys,a=Hn,l=Ti,h=n.DEFAULT_ANISOTROPY,d=Vi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Up++}),this.uuid=di(),this.name="",this.source=new ia(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=h,this.format=a,this.internalFormat=null,this.type=l,this.offset=new zt(0,0),this.repeat=new zt(1,1),this.center=new zt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Re,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==cu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case xs:t.x=t.x-Math.floor(t.x);break;case gs:t.x=t.x<0?0:1;break;case Yl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case xs:t.y=t.y-Math.floor(t.y);break;case gs:t.y=t.y<0?0:1;break;case Yl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Dn.DEFAULT_IMAGE=null;Dn.DEFAULT_MAPPING=cu;Dn.DEFAULT_ANISOTROPY=1;var nn=class n{constructor(t=0,e=0,i=0,s=1){n.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,l=t.elements,h=l[0],d=l[4],g=l[8],u=l[1],c=l[5],f=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(d-u)<.01&&Math.abs(g-_)<.01&&Math.abs(f-m)<.01){if(Math.abs(d+u)<.1&&Math.abs(g+_)<.1&&Math.abs(f+m)<.1&&Math.abs(h+c+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let v=(h+1)/2,M=(c+1)/2,D=(p+1)/2,w=(d+u)/4,A=(g+_)/4,T=(f+m)/4;return v>M&&v>D?v<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(v),s=w/i,r=A/i):M>D?M<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),i=w/s,r=T/s):D<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(D),i=A/r,s=T/r),this.set(i,s,r,e),this}let S=Math.sqrt((m-f)*(m-f)+(g-_)*(g-_)+(u-d)*(u-d));return Math.abs(S)<.001&&(S=1),this.x=(m-f)/S,this.y=(g-_)/S,this.z=(u-d)/S,this.w=Math.acos((h+c+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},wc=class extends Yi{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new nn(0,0,t,e),this.scissorTest=!1,this.viewport=new nn(0,0,t,e);let s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:hi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let r=new Dn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new ia(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ai=class extends wc{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},sa=class extends Dn{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Ln,this.minFilter=Ln,this.wrapR=gs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ec=class extends Dn{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Ln,this.minFilter=Ln,this.wrapR=gs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var $n=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],h=i[s+1],d=i[s+2],g=i[s+3],u=r[o+0],c=r[o+1],f=r[o+2],_=r[o+3];if(a===0){t[e+0]=l,t[e+1]=h,t[e+2]=d,t[e+3]=g;return}if(a===1){t[e+0]=u,t[e+1]=c,t[e+2]=f,t[e+3]=_;return}if(g!==_||l!==u||h!==c||d!==f){let m=1-a,p=l*u+h*c+d*f+g*_,S=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){let D=Math.sqrt(v),w=Math.atan2(D,p*S);m=Math.sin(m*w)/D,a=Math.sin(a*w)/D}let M=a*S;if(l=l*m+u*M,h=h*m+c*M,d=d*m+f*M,g=g*m+_*M,m===1-a){let D=1/Math.sqrt(l*l+h*h+d*d+g*g);l*=D,h*=D,d*=D,g*=D}}t[e]=l,t[e+1]=h,t[e+2]=d,t[e+3]=g}static multiplyQuaternionsFlat(t,e,i,s,r,o){let a=i[s],l=i[s+1],h=i[s+2],d=i[s+3],g=r[o],u=r[o+1],c=r[o+2],f=r[o+3];return t[e]=a*f+d*g+l*c-h*u,t[e+1]=l*f+d*u+h*g-a*c,t[e+2]=h*f+d*c+a*u-l*g,t[e+3]=d*f-a*g-l*u-h*c,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,h=a(i/2),d=a(s/2),g=a(r/2),u=l(i/2),c=l(s/2),f=l(r/2);switch(o){case"XYZ":this._x=u*d*g+h*c*f,this._y=h*c*g-u*d*f,this._z=h*d*f+u*c*g,this._w=h*d*g-u*c*f;break;case"YXZ":this._x=u*d*g+h*c*f,this._y=h*c*g-u*d*f,this._z=h*d*f-u*c*g,this._w=h*d*g+u*c*f;break;case"ZXY":this._x=u*d*g-h*c*f,this._y=h*c*g+u*d*f,this._z=h*d*f+u*c*g,this._w=h*d*g-u*c*f;break;case"ZYX":this._x=u*d*g-h*c*f,this._y=h*c*g+u*d*f,this._z=h*d*f-u*c*g,this._w=h*d*g+u*c*f;break;case"YZX":this._x=u*d*g+h*c*f,this._y=h*c*g+u*d*f,this._z=h*d*f-u*c*g,this._w=h*d*g-u*c*f;break;case"XZY":this._x=u*d*g-h*c*f,this._y=h*c*g-u*d*f,this._z=h*d*f+u*c*g,this._w=h*d*g+u*c*f;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],h=e[2],d=e[6],g=e[10],u=i+a+g;if(u>0){let c=.5/Math.sqrt(u+1);this._w=.25/c,this._x=(d-l)*c,this._y=(r-h)*c,this._z=(o-s)*c}else if(i>a&&i>g){let c=2*Math.sqrt(1+i-a-g);this._w=(d-l)/c,this._x=.25*c,this._y=(s+o)/c,this._z=(r+h)/c}else if(a>g){let c=2*Math.sqrt(1+a-i-g);this._w=(r-h)/c,this._x=(s+o)/c,this._y=.25*c,this._z=(l+d)/c}else{let c=2*Math.sqrt(1+g-i-a);this._w=(o-s)/c,this._x=(r+h)/c,this._y=(l+d)/c,this._z=.25*c}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(_n(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,h=e._z,d=e._w;return this._x=i*d+o*a+s*h-r*l,this._y=s*d+o*l+r*a-i*h,this._z=r*d+o*h+i*l-s*a,this._w=o*d-i*a-s*l-r*h,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+i*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let c=1-e;return this._w=c*o+e*this._w,this._x=c*i+e*this._x,this._y=c*s+e*this._y,this._z=c*r+e*this._z,this.normalize(),this}let h=Math.sqrt(l),d=Math.atan2(h,a),g=Math.sin((1-e)*d)/h,u=Math.sin(e*d)/h;return this._w=o*g+this._w*u,this._x=i*g+this._x*u,this._y=s*g+this._y*u,this._z=r*g+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},$=class n{constructor(t=0,e=0,i=0){n.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(cf.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(cf.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,h=2*(o*s-a*i),d=2*(a*e-r*s),g=2*(r*i-o*e);return this.x=e+l*h+o*g-a*d,this.y=i+l*d+a*h-r*g,this.z=s+l*g+r*d-o*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return al.copy(this).projectOnVector(t),this.sub(al)}reflect(t){return this.sub(al.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(_n(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},al=new $,cf=new $n,Ri=class{constructor(t=new $(1/0,1/0,1/0),e=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Kn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Kn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=Kn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Kn):Kn.fromBufferAttribute(r,o),Kn.applyMatrix4(t.matrixWorld),this.expandByPoint(Kn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),vo.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),vo.copy(i.boundingBox)),vo.applyMatrix4(t.matrixWorld),this.union(vo)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Kn),Kn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Mr),_o.subVectors(this.max,Mr),Cs.subVectors(t.a,Mr),Is.subVectors(t.b,Mr),Ps.subVectors(t.c,Mr),Oi.subVectors(Is,Cs),Fi.subVectors(Ps,Is),as.subVectors(Cs,Ps);let e=[0,-Oi.z,Oi.y,0,-Fi.z,Fi.y,0,-as.z,as.y,Oi.z,0,-Oi.x,Fi.z,0,-Fi.x,as.z,0,-as.x,-Oi.y,Oi.x,0,-Fi.y,Fi.x,0,-as.y,as.x,0];return!ll(e,Cs,Is,Ps,_o)||(e=[1,0,0,0,1,0,0,0,1],!ll(e,Cs,Is,Ps,_o))?!1:(Mo.crossVectors(Oi,Fi),e=[Mo.x,Mo.y,Mo.z],ll(e,Cs,Is,Ps,_o))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Kn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Kn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(yi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),yi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),yi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),yi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),yi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),yi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),yi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),yi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(yi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},yi=[new $,new $,new $,new $,new $,new $,new $,new $],Kn=new $,vo=new Ri,Cs=new $,Is=new $,Ps=new $,Oi=new $,Fi=new $,as=new $,Mr=new $,_o=new $,Mo=new $,ls=new $;function ll(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){ls.fromArray(n,r);let a=s.x*Math.abs(ls.x)+s.y*Math.abs(ls.y)+s.z*Math.abs(ls.z),l=t.dot(ls),h=e.dot(ls),d=i.dot(ls);if(Math.max(-Math.max(l,h,d),Math.min(l,h,d))>a)return!1}return!0}var Np=new Ri,br=new $,cl=new $,Zi=class{constructor(t=new $,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):Np.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;br.subVectors(t,this.center);let e=br.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(br,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(cl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(br.copy(t.center).add(cl)),this.expandByPoint(br.copy(t.center).sub(cl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},xi=new $,hl=new $,bo=new $,Bi=new $,fl=new $,So=new $,ul=new $,ra=class{constructor(t=new $,e=new $(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,xi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=xi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(xi.copy(this.origin).addScaledVector(this.direction,e),xi.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){hl.copy(t).add(e).multiplyScalar(.5),bo.copy(e).sub(t).normalize(),Bi.copy(this.origin).sub(hl);let r=t.distanceTo(e)*.5,o=-this.direction.dot(bo),a=Bi.dot(this.direction),l=-Bi.dot(bo),h=Bi.lengthSq(),d=Math.abs(1-o*o),g,u,c,f;if(d>0)if(g=o*l-a,u=o*a-l,f=r*d,g>=0)if(u>=-f)if(u<=f){let _=1/d;g*=_,u*=_,c=g*(g+o*u+2*a)+u*(o*g+u+2*l)+h}else u=r,g=Math.max(0,-(o*u+a)),c=-g*g+u*(u+2*l)+h;else u=-r,g=Math.max(0,-(o*u+a)),c=-g*g+u*(u+2*l)+h;else u<=-f?(g=Math.max(0,-(-o*r+a)),u=g>0?-r:Math.min(Math.max(-r,-l),r),c=-g*g+u*(u+2*l)+h):u<=f?(g=0,u=Math.min(Math.max(-r,-l),r),c=u*(u+2*l)+h):(g=Math.max(0,-(o*r+a)),u=g>0?r:Math.min(Math.max(-r,-l),r),c=-g*g+u*(u+2*l)+h);else u=o>0?-r:r,g=Math.max(0,-(o*u+a)),c=-g*g+u*(u+2*l)+h;return i&&i.copy(this.origin).addScaledVector(this.direction,g),s&&s.copy(hl).addScaledVector(bo,u),c}intersectSphere(t,e){xi.subVectors(t.center,this.origin);let i=xi.dot(this.direction),s=xi.dot(xi)-i*i,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l,h=1/this.direction.x,d=1/this.direction.y,g=1/this.direction.z,u=this.origin;return h>=0?(i=(t.min.x-u.x)*h,s=(t.max.x-u.x)*h):(i=(t.max.x-u.x)*h,s=(t.min.x-u.x)*h),d>=0?(r=(t.min.y-u.y)*d,o=(t.max.y-u.y)*d):(r=(t.max.y-u.y)*d,o=(t.min.y-u.y)*d),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),g>=0?(a=(t.min.z-u.z)*g,l=(t.max.z-u.z)*g):(a=(t.max.z-u.z)*g,l=(t.min.z-u.z)*g),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,xi)!==null}intersectTriangle(t,e,i,s,r){fl.subVectors(e,t),So.subVectors(i,t),ul.crossVectors(fl,So);let o=this.direction.dot(ul),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Bi.subVectors(this.origin,t);let l=a*this.direction.dot(So.crossVectors(Bi,So));if(l<0)return null;let h=a*this.direction.dot(fl.cross(Bi));if(h<0||l+h>o)return null;let d=-a*Bi.dot(ul);return d<0?null:this.at(d/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ke=class n{constructor(t,e,i,s,r,o,a,l,h,d,g,u,c,f,_,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,h,d,g,u,c,f,_,m)}set(t,e,i,s,r,o,a,l,h,d,g,u,c,f,_,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=h,p[6]=d,p[10]=g,p[14]=u,p[3]=c,p[7]=f,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,i=t.elements,s=1/Ls.setFromMatrixColumn(t,0).length(),r=1/Ls.setFromMatrixColumn(t,1).length(),o=1/Ls.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),h=Math.sin(s),d=Math.cos(r),g=Math.sin(r);if(t.order==="XYZ"){let u=o*d,c=o*g,f=a*d,_=a*g;e[0]=l*d,e[4]=-l*g,e[8]=h,e[1]=c+f*h,e[5]=u-_*h,e[9]=-a*l,e[2]=_-u*h,e[6]=f+c*h,e[10]=o*l}else if(t.order==="YXZ"){let u=l*d,c=l*g,f=h*d,_=h*g;e[0]=u+_*a,e[4]=f*a-c,e[8]=o*h,e[1]=o*g,e[5]=o*d,e[9]=-a,e[2]=c*a-f,e[6]=_+u*a,e[10]=o*l}else if(t.order==="ZXY"){let u=l*d,c=l*g,f=h*d,_=h*g;e[0]=u-_*a,e[4]=-o*g,e[8]=f+c*a,e[1]=c+f*a,e[5]=o*d,e[9]=_-u*a,e[2]=-o*h,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let u=o*d,c=o*g,f=a*d,_=a*g;e[0]=l*d,e[4]=f*h-c,e[8]=u*h+_,e[1]=l*g,e[5]=_*h+u,e[9]=c*h-f,e[2]=-h,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let u=o*l,c=o*h,f=a*l,_=a*h;e[0]=l*d,e[4]=_-u*g,e[8]=f*g+c,e[1]=g,e[5]=o*d,e[9]=-a*d,e[2]=-h*d,e[6]=c*g+f,e[10]=u-_*g}else if(t.order==="XZY"){let u=o*l,c=o*h,f=a*l,_=a*h;e[0]=l*d,e[4]=-g,e[8]=h*d,e[1]=u*g+_,e[5]=o*d,e[9]=c*g-f,e[2]=f*g-c,e[6]=a*d,e[10]=_*g+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Op,t,Fp)}lookAt(t,e,i){let s=this.elements;return Bn.subVectors(t,e),Bn.lengthSq()===0&&(Bn.z=1),Bn.normalize(),zi.crossVectors(i,Bn),zi.lengthSq()===0&&(Math.abs(i.z)===1?Bn.x+=1e-4:Bn.z+=1e-4,Bn.normalize(),zi.crossVectors(i,Bn)),zi.normalize(),wo.crossVectors(Bn,zi),s[0]=zi.x,s[4]=wo.x,s[8]=Bn.x,s[1]=zi.y,s[5]=wo.y,s[9]=Bn.y,s[2]=zi.z,s[6]=wo.z,s[10]=Bn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],h=i[12],d=i[1],g=i[5],u=i[9],c=i[13],f=i[2],_=i[6],m=i[10],p=i[14],S=i[3],v=i[7],M=i[11],D=i[15],w=s[0],A=s[4],T=s[8],x=s[12],y=s[1],b=s[5],C=s[9],E=s[13],L=s[2],R=s[6],U=s[10],O=s[14],z=s[3],q=s[7],X=s[11],N=s[15];return r[0]=o*w+a*y+l*L+h*z,r[4]=o*A+a*b+l*R+h*q,r[8]=o*T+a*C+l*U+h*X,r[12]=o*x+a*E+l*O+h*N,r[1]=d*w+g*y+u*L+c*z,r[5]=d*A+g*b+u*R+c*q,r[9]=d*T+g*C+u*U+c*X,r[13]=d*x+g*E+u*O+c*N,r[2]=f*w+_*y+m*L+p*z,r[6]=f*A+_*b+m*R+p*q,r[10]=f*T+_*C+m*U+p*X,r[14]=f*x+_*E+m*O+p*N,r[3]=S*w+v*y+M*L+D*z,r[7]=S*A+v*b+M*R+D*q,r[11]=S*T+v*C+M*U+D*X,r[15]=S*x+v*E+M*O+D*N,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],h=t[13],d=t[2],g=t[6],u=t[10],c=t[14],f=t[3],_=t[7],m=t[11],p=t[15];return f*(+r*l*g-s*h*g-r*a*u+i*h*u+s*a*c-i*l*c)+_*(+e*l*c-e*h*u+r*o*u-s*o*c+s*h*d-r*l*d)+m*(+e*h*g-e*a*c-r*o*g+i*o*c+r*a*d-i*h*d)+p*(-s*a*d-e*l*g+e*a*u+s*o*g-i*o*u+i*l*d)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],h=t[7],d=t[8],g=t[9],u=t[10],c=t[11],f=t[12],_=t[13],m=t[14],p=t[15],S=g*m*h-_*u*h+_*l*c-a*m*c-g*l*p+a*u*p,v=f*u*h-d*m*h-f*l*c+o*m*c+d*l*p-o*u*p,M=d*_*h-f*g*h+f*a*c-o*_*c-d*a*p+o*g*p,D=f*g*l-d*_*l-f*a*u+o*_*u+d*a*m-o*g*m,w=e*S+i*v+s*M+r*D;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/w;return t[0]=S*A,t[1]=(_*u*r-g*m*r-_*s*c+i*m*c+g*s*p-i*u*p)*A,t[2]=(a*m*r-_*l*r+_*s*h-i*m*h-a*s*p+i*l*p)*A,t[3]=(g*l*r-a*u*r-g*s*h+i*u*h+a*s*c-i*l*c)*A,t[4]=v*A,t[5]=(d*m*r-f*u*r+f*s*c-e*m*c-d*s*p+e*u*p)*A,t[6]=(f*l*r-o*m*r-f*s*h+e*m*h+o*s*p-e*l*p)*A,t[7]=(o*u*r-d*l*r+d*s*h-e*u*h-o*s*c+e*l*c)*A,t[8]=M*A,t[9]=(f*g*r-d*_*r-f*i*c+e*_*c+d*i*p-e*g*p)*A,t[10]=(o*_*r-f*a*r+f*i*h-e*_*h-o*i*p+e*a*p)*A,t[11]=(d*a*r-o*g*r-d*i*h+e*g*h+o*i*c-e*a*c)*A,t[12]=D*A,t[13]=(d*_*s-f*g*s+f*i*u-e*_*u-d*i*m+e*g*m)*A,t[14]=(f*a*s-o*_*s-f*i*l+e*_*l+o*i*m-e*a*m)*A,t[15]=(o*g*s-d*a*s+d*i*l-e*g*l-o*i*u+e*a*u)*A,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,h=r*o,d=r*a;return this.set(h*o+i,h*a-s*l,h*l+s*a,0,h*a+s*l,d*a+i,d*l-s*o,0,h*l-s*a,d*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,h=r+r,d=o+o,g=a+a,u=r*h,c=r*d,f=r*g,_=o*d,m=o*g,p=a*g,S=l*h,v=l*d,M=l*g,D=i.x,w=i.y,A=i.z;return s[0]=(1-(_+p))*D,s[1]=(c+M)*D,s[2]=(f-v)*D,s[3]=0,s[4]=(c-M)*w,s[5]=(1-(u+p))*w,s[6]=(m+S)*w,s[7]=0,s[8]=(f+v)*A,s[9]=(m-S)*A,s[10]=(1-(u+_))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements,r=Ls.set(s[0],s[1],s[2]).length(),o=Ls.set(s[4],s[5],s[6]).length(),a=Ls.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Qn.copy(this);let h=1/r,d=1/o,g=1/a;return Qn.elements[0]*=h,Qn.elements[1]*=h,Qn.elements[2]*=h,Qn.elements[4]*=d,Qn.elements[5]*=d,Qn.elements[6]*=d,Qn.elements[8]*=g,Qn.elements[9]*=g,Qn.elements[10]*=g,e.setFromRotationMatrix(Qn),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,s,r,o,a=wi){let l=this.elements,h=2*r/(e-t),d=2*r/(i-s),g=(e+t)/(e-t),u=(i+s)/(i-s),c,f;if(a===wi)c=-(o+r)/(o-r),f=-2*o*r/(o-r);else if(a===ea)c=-o/(o-r),f=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=g,l[12]=0,l[1]=0,l[5]=d,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=c,l[14]=f,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=wi){let l=this.elements,h=1/(e-t),d=1/(i-s),g=1/(o-r),u=(e+t)*h,c=(i+s)*d,f,_;if(a===wi)f=(o+r)*g,_=-2*g;else if(a===ea)f=r*g,_=-1*g;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*h,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-c,l[2]=0,l[6]=0,l[10]=_,l[14]=-f,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},Ls=new $,Qn=new ke,Op=new $(0,0,0),Fp=new $(1,1,1),zi=new $,wo=new $,Bn=new $,hf=new ke,ff=new $n,ni=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],h=s[5],d=s[9],g=s[2],u=s[6],c=s[10];switch(e){case"XYZ":this._y=Math.asin(_n(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,c),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,h),this._z=0);break;case"YXZ":this._x=Math.asin(-_n(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,c),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-g,r),this._z=0);break;case"ZXY":this._x=Math.asin(_n(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-g,c),this._z=Math.atan2(-o,h)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-_n(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(u,c),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,h));break;case"YZX":this._z=Math.asin(_n(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,h),this._y=Math.atan2(-g,r)):(this._x=0,this._y=Math.atan2(a,c));break;case"XZY":this._z=Math.asin(-_n(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,h),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-d,c),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return hf.makeRotationFromQuaternion(t),this.setFromRotationMatrix(hf,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ff.setFromEuler(this),this.setFromQuaternion(ff,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ni.DEFAULT_ORDER="XYZ";var oa=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Bp=0,uf=new $,ks=new $n,vi=new ke,Eo=new $,Sr=new $,zp=new $,Hp=new $n,df=new $(1,0,0),pf=new $(0,1,0),mf=new $(0,0,1),gf={type:"added"},$p={type:"removed"},Ds={type:"childadded",child:null},dl={type:"childremoved",child:null},$e=class n extends Yi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Bp++}),this.uuid=di(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new $,e=new ni,i=new $n,s=new $(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ke},normalMatrix:{value:new Re}}),this.matrix=new ke,this.matrixWorld=new ke,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new oa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ks.setFromAxisAngle(t,e),this.quaternion.multiply(ks),this}rotateOnWorldAxis(t,e){return ks.setFromAxisAngle(t,e),this.quaternion.premultiply(ks),this}rotateX(t){return this.rotateOnAxis(df,t)}rotateY(t){return this.rotateOnAxis(pf,t)}rotateZ(t){return this.rotateOnAxis(mf,t)}translateOnAxis(t,e){return uf.copy(t).applyQuaternion(this.quaternion),this.position.add(uf.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(df,t)}translateY(t){return this.translateOnAxis(pf,t)}translateZ(t){return this.translateOnAxis(mf,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(vi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Eo.copy(t):Eo.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Sr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vi.lookAt(Sr,Eo,this.up):vi.lookAt(Eo,Sr,this.up),this.quaternion.setFromRotationMatrix(vi),s&&(vi.extractRotation(s.matrixWorld),ks.setFromRotationMatrix(vi),this.quaternion.premultiply(ks.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(gf),Ds.child=t,this.dispatchEvent(Ds),Ds.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent($p),dl.child=t,this.dispatchEvent(dl),dl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),vi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),vi.multiply(t.parent.matrixWorld)),t.applyMatrix4(vi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(gf),Ds.child=t,this.dispatchEvent(Ds),Ds.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sr,t,zp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sr,Hp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let h=0,d=l.length;h<d;h++){let g=l[h];r(t.shapes,g)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,h=this.material.length;l<h;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),h=o(t.textures),d=o(t.images),g=o(t.shapes),u=o(t.skeletons),c=o(t.animations),f=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),h.length>0&&(i.textures=h),d.length>0&&(i.images=d),g.length>0&&(i.shapes=g),u.length>0&&(i.skeletons=u),c.length>0&&(i.animations=c),f.length>0&&(i.nodes=f)}return i.object=s,i;function o(a){let l=[];for(let h in a){let d=a[h];delete d.metadata,l.push(d)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}};$e.DEFAULT_UP=new $(0,1,0);$e.DEFAULT_MATRIX_AUTO_UPDATE=!0;$e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ti=new $,_i=new $,pl=new $,Mi=new $,Us=new $,Ns=new $,yf=new $,ml=new $,gl=new $,yl=new $,xl=new nn,vl=new nn,_l=new nn,Gi=class n{constructor(t=new $,e=new $,i=new $){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),ti.subVectors(t,e),s.cross(ti);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){ti.subVectors(s,e),_i.subVectors(i,e),pl.subVectors(t,e);let o=ti.dot(ti),a=ti.dot(_i),l=ti.dot(pl),h=_i.dot(_i),d=_i.dot(pl),g=o*h-a*a;if(g===0)return r.set(0,0,0),null;let u=1/g,c=(h*l-a*d)*u,f=(o*d-a*l)*u;return r.set(1-c-f,f,c)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Mi)===null?!1:Mi.x>=0&&Mi.y>=0&&Mi.x+Mi.y<=1}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,Mi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Mi.x),l.addScaledVector(o,Mi.y),l.addScaledVector(a,Mi.z),l)}static getInterpolatedAttribute(t,e,i,s,r,o){return xl.setScalar(0),vl.setScalar(0),_l.setScalar(0),xl.fromBufferAttribute(t,e),vl.fromBufferAttribute(t,i),_l.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(xl,r.x),o.addScaledVector(vl,r.y),o.addScaledVector(_l,r.z),o}static isFrontFacing(t,e,i,s){return ti.subVectors(i,e),_i.subVectors(t,e),ti.cross(_i).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ti.subVectors(this.c,this.b),_i.subVectors(this.a,this.b),ti.cross(_i).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,o,a;Us.subVectors(s,i),Ns.subVectors(r,i),ml.subVectors(t,i);let l=Us.dot(ml),h=Ns.dot(ml);if(l<=0&&h<=0)return e.copy(i);gl.subVectors(t,s);let d=Us.dot(gl),g=Ns.dot(gl);if(d>=0&&g<=d)return e.copy(s);let u=l*g-d*h;if(u<=0&&l>=0&&d<=0)return o=l/(l-d),e.copy(i).addScaledVector(Us,o);yl.subVectors(t,r);let c=Us.dot(yl),f=Ns.dot(yl);if(f>=0&&c<=f)return e.copy(r);let _=c*h-l*f;if(_<=0&&h>=0&&f<=0)return a=h/(h-f),e.copy(i).addScaledVector(Ns,a);let m=d*f-c*g;if(m<=0&&g-d>=0&&c-f>=0)return yf.subVectors(r,s),a=(g-d)/(g-d+(c-f)),e.copy(s).addScaledVector(yf,a);let p=1/(m+_+u);return o=_*p,a=u*p,e.copy(i).addScaledVector(Us,o).addScaledVector(Ns,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},bu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hi={h:0,s:0,l:0},To={h:0,s:0,l:0};function Ml(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var fe=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=vn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ne.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=Ne.workingColorSpace){return this.r=t,this.g=e,this.b=i,Ne.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=Ne.workingColorSpace){if(t=ph(t,1),e=_n(e,0,1),i=_n(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=Ml(o,r,t+1/3),this.g=Ml(o,r,t),this.b=Ml(o,r,t-1/3)}return Ne.toWorkingColorSpace(this,s),this}setStyle(t,e=vn){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=vn){let i=bu[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ei(t.r),this.g=Ei(t.g),this.b=Ei(t.b),this}copyLinearToSRGB(t){return this.r=Js(t.r),this.g=Js(t.g),this.b=Js(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=vn){return Ne.fromWorkingColorSpace(An.copy(this),t),Math.round(_n(An.r*255,0,255))*65536+Math.round(_n(An.g*255,0,255))*256+Math.round(_n(An.b*255,0,255))}getHexString(t=vn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Ne.workingColorSpace){Ne.fromWorkingColorSpace(An.copy(this),e);let i=An.r,s=An.g,r=An.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,h,d=(a+o)/2;if(a===o)l=0,h=0;else{let g=o-a;switch(h=d<=.5?g/(o+a):g/(2-o-a),o){case i:l=(s-r)/g+(s<r?6:0);break;case s:l=(r-i)/g+2;break;case r:l=(i-s)/g+4;break}l/=6}return t.h=l,t.s=h,t.l=d,t}getRGB(t,e=Ne.workingColorSpace){return Ne.fromWorkingColorSpace(An.copy(this),e),t.r=An.r,t.g=An.g,t.b=An.b,t}getStyle(t=vn){Ne.fromWorkingColorSpace(An.copy(this),t);let e=An.r,i=An.g,s=An.b;return t!==vn?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Hi),this.setHSL(Hi.h+t,Hi.s+e,Hi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Hi),t.getHSL(To);let i=Dr(Hi.h,To.h,e),s=Dr(Hi.s,To.s,e),r=Dr(Hi.l,To.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},An=new fe;fe.NAMES=bu;var Vp=0,Ci=class extends Yi{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Vp++}),this.uuid=di(),this.name="",this.blending=Ys,this.side=qi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ol,this.blendDst=Fl,this.blendEquation=ps,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new fe(0,0,0),this.blendAlpha=0,this.depthFunc=Ks,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Qh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=As,this.stencilZFail=As,this.stencilZPass=As,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ys&&(i.blending=this.blending),this.side!==qi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ol&&(i.blendSrc=this.blendSrc),this.blendDst!==Fl&&(i.blendDst=this.blendDst),this.blendEquation!==ps&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ks&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Qh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==As&&(i.stencilFail=this.stencilFail),this.stencilZFail!==As&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==As&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Un=class extends Ci{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ni,this.combine=lu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var ln=new $,Ao=new zt,Ze=class{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=bc,this.updateRanges=[],this.gpuType=fi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Ao.fromBufferAttribute(this,e),Ao.applyMatrix3(t),this.setXY(e,Ao.x,Ao.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)ln.fromBufferAttribute(this,e),ln.applyMatrix3(t),this.setXYZ(e,ln.x,ln.y,ln.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)ln.fromBufferAttribute(this,e),ln.applyMatrix4(t),this.setXYZ(e,ln.x,ln.y,ln.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)ln.fromBufferAttribute(this,e),ln.applyNormalMatrix(t),this.setXYZ(e,ln.x,ln.y,ln.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)ln.fromBufferAttribute(this,e),ln.transformDirection(t),this.setXYZ(e,ln.x,ln.y,ln.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=ei(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Be(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ei(e,this.array)),e}setX(t,e){return this.normalized&&(e=Be(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ei(e,this.array)),e}setY(t,e){return this.normalized&&(e=Be(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ei(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Be(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ei(e,this.array)),e}setW(t,e){return this.normalized&&(e=Be(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Be(e,this.array),i=Be(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=Be(e,this.array),i=Be(i,this.array),s=Be(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=Be(e,this.array),i=Be(i,this.array),s=Be(s,this.array),r=Be(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==bc&&(t.usage=this.usage),t}};var aa=class extends Ze{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var la=class extends Ze{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var be=class extends Ze{constructor(t,e,i){super(new Float32Array(t),e,i)}},Gp=0,Xn=new ke,bl=new $e,Os=new $,zn=new Ri,wr=new Ri,xn=new $,Ve=class n extends Yi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Gp++}),this.uuid=di(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Mu(t)?la:aa)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Re().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Xn.makeRotationFromQuaternion(t),this.applyMatrix4(Xn),this}rotateX(t){return Xn.makeRotationX(t),this.applyMatrix4(Xn),this}rotateY(t){return Xn.makeRotationY(t),this.applyMatrix4(Xn),this}rotateZ(t){return Xn.makeRotationZ(t),this.applyMatrix4(Xn),this}translate(t,e,i){return Xn.makeTranslation(t,e,i),this.applyMatrix4(Xn),this}scale(t,e,i){return Xn.makeScale(t,e,i),this.applyMatrix4(Xn),this}lookAt(t){return bl.lookAt(t),bl.updateMatrix(),this.applyMatrix4(bl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Os).negate(),this.translate(Os.x,Os.y,Os.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new be(i,3))}else{for(let i=0,s=e.count;i<s;i++){let r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ri);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];zn.setFromBufferAttribute(r),this.morphTargetsRelative?(xn.addVectors(this.boundingBox.min,zn.min),this.boundingBox.expandByPoint(xn),xn.addVectors(this.boundingBox.max,zn.max),this.boundingBox.expandByPoint(xn)):(this.boundingBox.expandByPoint(zn.min),this.boundingBox.expandByPoint(zn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(t){let i=this.boundingSphere.center;if(zn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];wr.setFromBufferAttribute(a),this.morphTargetsRelative?(xn.addVectors(zn.min,wr.min),zn.expandByPoint(xn),xn.addVectors(zn.max,wr.max),zn.expandByPoint(xn)):(zn.expandByPoint(wr.min),zn.expandByPoint(wr.max))}zn.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)xn.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(xn));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let h=0,d=a.count;h<d;h++)xn.fromBufferAttribute(a,h),l&&(Os.fromBufferAttribute(t,h),xn.add(Os)),s=Math.max(s,i.distanceToSquared(xn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ze(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let T=0;T<i.count;T++)a[T]=new $,l[T]=new $;let h=new $,d=new $,g=new $,u=new zt,c=new zt,f=new zt,_=new $,m=new $;function p(T,x,y){h.fromBufferAttribute(i,T),d.fromBufferAttribute(i,x),g.fromBufferAttribute(i,y),u.fromBufferAttribute(r,T),c.fromBufferAttribute(r,x),f.fromBufferAttribute(r,y),d.sub(h),g.sub(h),c.sub(u),f.sub(u);let b=1/(c.x*f.y-f.x*c.y);isFinite(b)&&(_.copy(d).multiplyScalar(f.y).addScaledVector(g,-c.y).multiplyScalar(b),m.copy(g).multiplyScalar(c.x).addScaledVector(d,-f.x).multiplyScalar(b),a[T].add(_),a[x].add(_),a[y].add(_),l[T].add(m),l[x].add(m),l[y].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let T=0,x=S.length;T<x;++T){let y=S[T],b=y.start,C=y.count;for(let E=b,L=b+C;E<L;E+=3)p(t.getX(E+0),t.getX(E+1),t.getX(E+2))}let v=new $,M=new $,D=new $,w=new $;function A(T){D.fromBufferAttribute(s,T),w.copy(D);let x=a[T];v.copy(x),v.sub(D.multiplyScalar(D.dot(x))).normalize(),M.crossVectors(w,x);let b=M.dot(l[T])<0?-1:1;o.setXYZW(T,v.x,v.y,v.z,b)}for(let T=0,x=S.length;T<x;++T){let y=S[T],b=y.start,C=y.count;for(let E=b,L=b+C;E<L;E+=3)A(t.getX(E+0)),A(t.getX(E+1)),A(t.getX(E+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ze(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let u=0,c=i.count;u<c;u++)i.setXYZ(u,0,0,0);let s=new $,r=new $,o=new $,a=new $,l=new $,h=new $,d=new $,g=new $;if(t)for(let u=0,c=t.count;u<c;u+=3){let f=t.getX(u+0),_=t.getX(u+1),m=t.getX(u+2);s.fromBufferAttribute(e,f),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),d.subVectors(o,r),g.subVectors(s,r),d.cross(g),a.fromBufferAttribute(i,f),l.fromBufferAttribute(i,_),h.fromBufferAttribute(i,m),a.add(d),l.add(d),h.add(d),i.setXYZ(f,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,h.x,h.y,h.z)}else for(let u=0,c=e.count;u<c;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),d.subVectors(o,r),g.subVectors(s,r),d.cross(g),i.setXYZ(u+0,d.x,d.y,d.z),i.setXYZ(u+1,d.x,d.y,d.z),i.setXYZ(u+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)xn.fromBufferAttribute(t,e),xn.normalize(),t.setXYZ(e,xn.x,xn.y,xn.z)}toNonIndexed(){function t(a,l){let h=a.array,d=a.itemSize,g=a.normalized,u=new h.constructor(l.length*d),c=0,f=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?c=l[_]*a.data.stride+a.offset:c=l[_]*d;for(let p=0;p<d;p++)u[f++]=h[c++]}return new Ze(u,d,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],h=t(l,i);e.setAttribute(a,h)}let r=this.morphAttributes;for(let a in r){let l=[],h=r[a];for(let d=0,g=h.length;d<g;d++){let u=h[d],c=t(u,i);l.push(c)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let h=o[a];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let h in l)l[h]!==void 0&&(t[h]=l[h]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let h=i[l];t.data.attributes[l]=h.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let h=this.morphAttributes[l],d=[];for(let g=0,u=h.length;g<u;g++){let c=h[g];d.push(c.toJSON(t.data))}d.length>0&&(s[l]=d,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone(e));let s=t.attributes;for(let h in s){let d=s[h];this.setAttribute(h,d.clone(e))}let r=t.morphAttributes;for(let h in r){let d=[],g=r[h];for(let u=0,c=g.length;u<c;u++)d.push(g[u].clone(e));this.morphAttributes[h]=d}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let h=0,d=o.length;h<d;h++){let g=o[h];this.addGroup(g.start,g.count,g.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},xf=new ke,cs=new ra,Ro=new Zi,vf=new $,Co=new $,Io=new $,Po=new $,Sl=new $,Lo=new $,_f=new $,ko=new $,ze=class extends $e{constructor(t=new Ve,e=new Un){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Lo.set(0,0,0);for(let l=0,h=r.length;l<h;l++){let d=a[l],g=r[l];d!==0&&(Sl.fromBufferAttribute(g,t),o?Lo.addScaledVector(Sl,d):Lo.addScaledVector(Sl.sub(e),d))}e.add(Lo)}return e}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ro.copy(i.boundingSphere),Ro.applyMatrix4(r),cs.copy(t.ray).recast(t.near),!(Ro.containsPoint(cs.origin)===!1&&(cs.intersectSphere(Ro,vf)===null||cs.origin.distanceToSquared(vf)>(t.far-t.near)**2))&&(xf.copy(r).invert(),cs.copy(t.ray).applyMatrix4(xf),!(i.boundingBox!==null&&cs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,cs)))}_computeIntersections(t,e,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,h=r.attributes.uv,d=r.attributes.uv1,g=r.attributes.normal,u=r.groups,c=r.drawRange;if(a!==null)if(Array.isArray(o))for(let f=0,_=u.length;f<_;f++){let m=u[f],p=o[m.materialIndex],S=Math.max(m.start,c.start),v=Math.min(a.count,Math.min(m.start+m.count,c.start+c.count));for(let M=S,D=v;M<D;M+=3){let w=a.getX(M),A=a.getX(M+1),T=a.getX(M+2);s=Do(this,p,t,i,h,d,g,w,A,T),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let f=Math.max(0,c.start),_=Math.min(a.count,c.start+c.count);for(let m=f,p=_;m<p;m+=3){let S=a.getX(m),v=a.getX(m+1),M=a.getX(m+2);s=Do(this,o,t,i,h,d,g,S,v,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let f=0,_=u.length;f<_;f++){let m=u[f],p=o[m.materialIndex],S=Math.max(m.start,c.start),v=Math.min(l.count,Math.min(m.start+m.count,c.start+c.count));for(let M=S,D=v;M<D;M+=3){let w=M,A=M+1,T=M+2;s=Do(this,p,t,i,h,d,g,w,A,T),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let f=Math.max(0,c.start),_=Math.min(l.count,c.start+c.count);for(let m=f,p=_;m<p;m+=3){let S=m,v=m+1,M=m+2;s=Do(this,o,t,i,h,d,g,S,v,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function Wp(n,t,e,i,s,r,o,a){let l;if(t.side===Mn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===qi,a),l===null)return null;ko.copy(a),ko.applyMatrix4(n.matrixWorld);let h=e.ray.origin.distanceTo(ko);return h<e.near||h>e.far?null:{distance:h,point:ko.clone(),object:n}}function Do(n,t,e,i,s,r,o,a,l,h){n.getVertexPosition(a,Co),n.getVertexPosition(l,Io),n.getVertexPosition(h,Po);let d=Wp(n,t,e,i,Co,Io,Po,_f);if(d){let g=new $;Gi.getBarycoord(_f,Co,Io,Po,g),s&&(d.uv=Gi.getInterpolatedAttribute(s,a,l,h,g,new zt)),r&&(d.uv1=Gi.getInterpolatedAttribute(r,a,l,h,g,new zt)),o&&(d.normal=Gi.getInterpolatedAttribute(o,a,l,h,g,new $),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));let u={a,b:l,c:h,normal:new $,materialIndex:0};Gi.getNormal(Co,Io,Po,u.normal),d.face=u,d.barycoord=g}return d}var Ue=class n extends Ve{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],h=[],d=[],g=[],u=0,c=0;f("z","y","x",-1,-1,i,e,t,o,r,0),f("z","y","x",1,-1,i,e,-t,o,r,1),f("x","z","y",1,1,t,i,e,s,o,2),f("x","z","y",1,-1,t,i,-e,s,o,3),f("x","y","z",1,-1,t,e,i,s,r,4),f("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new be(h,3)),this.setAttribute("normal",new be(d,3)),this.setAttribute("uv",new be(g,2));function f(_,m,p,S,v,M,D,w,A,T,x){let y=M/A,b=D/T,C=M/2,E=D/2,L=w/2,R=A+1,U=T+1,O=0,z=0,q=new $;for(let X=0;X<U;X++){let N=X*b-E;for(let gt=0;gt<R;gt++){let Rt=gt*y-C;q[_]=Rt*S,q[m]=N*v,q[p]=L,h.push(q.x,q.y,q.z),q[_]=0,q[m]=0,q[p]=w>0?1:-1,d.push(q.x,q.y,q.z),g.push(gt/A),g.push(1-X/T),O+=1}}for(let X=0;X<T;X++)for(let N=0;N<A;N++){let gt=u+N+R*X,Rt=u+N+R*(X+1),k=u+(N+1)+R*(X+1),W=u+(N+1)+R*X;l.push(gt,Rt,W),l.push(Rt,k,W),z+=6}a.addGroup(c,z,x),c+=z,u+=O}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function ir(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function In(n){let t={};for(let e=0;e<n.length;e++){let i=ir(n[e]);for(let s in i)t[s]=i[s]}return t}function Xp(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Su(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ne.workingColorSpace}var mh={clone:ir,merge:In},qp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Yp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,kn=class extends Ci{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=qp,this.fragmentShader=Yp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ir(t.uniforms),this.uniformsGroups=Xp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}},ca=class extends $e{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ke,this.projectionMatrix=new ke,this.projectionMatrixInverse=new ke,this.coordinateSystem=wi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},$i=new $,Mf=new zt,bf=new zt,Pn=class extends ca{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Br*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(kr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Br*2*Math.atan(Math.tan(kr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){$i.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set($i.x,$i.y).multiplyScalar(-t/$i.z),$i.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set($i.x,$i.y).multiplyScalar(-t/$i.z)}getViewSize(t,e){return this.getViewBounds(t,Mf,bf),e.subVectors(bf,Mf)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(kr*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,h=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/h,s*=o.width/l,i*=o.height/h}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Fs=-90,Bs=1,Tc=class extends $e{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Pn(Fs,Bs,t,e);s.layers=this.layers,this.add(s);let r=new Pn(Fs,Bs,t,e);r.layers=this.layers,this.add(r);let o=new Pn(Fs,Bs,t,e);o.layers=this.layers,this.add(o);let a=new Pn(Fs,Bs,t,e);a.layers=this.layers,this.add(a);let l=new Pn(Fs,Bs,t,e);l.layers=this.layers,this.add(l);let h=new Pn(Fs,Bs,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,l]=e;for(let h of e)this.remove(h);if(t===wi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ea)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,h,d]=this.children,g=t.getRenderTarget(),u=t.getActiveCubeFace(),c=t.getActiveMipmapLevel(),f=t.xr.enabled;t.xr.enabled=!1;let _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,o),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,h),i.texture.generateMipmaps=_,t.setRenderTarget(i,5,s),t.render(e,d),t.setRenderTarget(g,u,c),t.xr.enabled=f,i.texture.needsPMREMUpdate=!0}},ha=class extends Dn{constructor(t,e,i,s,r,o,a,l,h,d){t=t!==void 0?t:[],e=e!==void 0?e:Qs,super(t,e,i,s,r,o,a,l,h,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Ac=class extends Ai{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new ha(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:hi}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ue(5,5,5),r=new kn({name:"CubemapFromEquirect",uniforms:ir(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Mn,blending:Wi});r.uniforms.tEquirect.value=e;let o=new ze(s,r),a=e.minFilter;return e.minFilter===ys&&(e.minFilter=hi),new Tc(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}},wl=new $,Zp=new $,Jp=new Re,Si=class{constructor(t=new $(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=wl.subVectors(i,e).cross(Zp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let i=t.delta(wl),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||Jp.getNormalMatrix(t),s=this.coplanarPoint(wl).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},hs=new Zi,Uo=new $,zr=class{constructor(t=new Si,e=new Si,i=new Si,s=new Si,r=new Si,o=new Si){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=wi){let i=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],h=s[4],d=s[5],g=s[6],u=s[7],c=s[8],f=s[9],_=s[10],m=s[11],p=s[12],S=s[13],v=s[14],M=s[15];if(i[0].setComponents(l-r,u-h,m-c,M-p).normalize(),i[1].setComponents(l+r,u+h,m+c,M+p).normalize(),i[2].setComponents(l+o,u+d,m+f,M+S).normalize(),i[3].setComponents(l-o,u-d,m-f,M-S).normalize(),i[4].setComponents(l-a,u-g,m-_,M-v).normalize(),e===wi)i[5].setComponents(l+a,u+g,m+_,M+v).normalize();else if(e===ea)i[5].setComponents(a,g,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),hs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),hs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(hs)}intersectsSprite(t){return hs.center.set(0,0,0),hs.radius=.7071067811865476,hs.applyMatrix4(t.matrixWorld),this.intersectsSphere(hs)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(Uo.x=s.normal.x>0?t.max.x:t.min.x,Uo.y=s.normal.y>0?t.max.y:t.min.y,Uo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Uo)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function wu(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function jp(n){let t=new WeakMap;function e(a,l){let h=a.array,d=a.usage,g=h.byteLength,u=n.createBuffer();n.bindBuffer(l,u),n.bufferData(l,h,d),a.onUploadCallback();let c;if(h instanceof Float32Array)c=n.FLOAT;else if(h instanceof Uint16Array)a.isFloat16BufferAttribute?c=n.HALF_FLOAT:c=n.UNSIGNED_SHORT;else if(h instanceof Int16Array)c=n.SHORT;else if(h instanceof Uint32Array)c=n.UNSIGNED_INT;else if(h instanceof Int32Array)c=n.INT;else if(h instanceof Int8Array)c=n.BYTE;else if(h instanceof Uint8Array)c=n.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)c=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:u,type:c,bytesPerElement:h.BYTES_PER_ELEMENT,version:a.version,size:g}}function i(a,l,h){let d=l.array,g=l.updateRanges;if(n.bindBuffer(h,a),g.length===0)n.bufferSubData(h,0,d);else{g.sort((c,f)=>c.start-f.start);let u=0;for(let c=1;c<g.length;c++){let f=g[u],_=g[c];_.start<=f.start+f.count+1?f.count=Math.max(f.count,_.start+_.count-f.start):(++u,g[u]=_)}g.length=u+1;for(let c=0,f=g.length;c<f;c++){let _=g[c];n.bufferSubData(h,_.start*d.BYTES_PER_ELEMENT,d,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let d=t.get(a);(!d||d.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let h=t.get(a);if(h===void 0)t.set(a,e(a,l));else if(h.version<a.version){if(h.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(h.buffer,a,l),h.version=a.version}}return{get:s,remove:r,update:o}}var bn=class n extends Ve{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),h=a+1,d=l+1,g=t/a,u=e/l,c=[],f=[],_=[],m=[];for(let p=0;p<d;p++){let S=p*u-o;for(let v=0;v<h;v++){let M=v*g-r;f.push(M,-S,0),_.push(0,0,1),m.push(v/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let S=0;S<a;S++){let v=S+h*p,M=S+h*(p+1),D=S+1+h*(p+1),w=S+1+h*p;c.push(v,M,w),c.push(M,D,w)}this.setIndex(c),this.setAttribute("position",new be(f,3)),this.setAttribute("normal",new be(_,3)),this.setAttribute("uv",new be(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}},Kp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Qp=`#ifdef USE_ALPHAHASH
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
#endif`,tm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,em=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,im=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,sm=`#ifdef USE_AOMAP
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
#endif`,rm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,om=`#ifdef USE_BATCHING
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
#endif`,am=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,lm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,cm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,hm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,fm=`#ifdef USE_IRIDESCENCE
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
#endif`,um=`#ifdef USE_BUMPMAP
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
#endif`,dm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,pm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,mm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,gm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ym=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,xm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,vm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,_m=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Mm=`#define PI 3.141592653589793
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
} // validated`,bm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Sm=`vec3 transformedNormal = objectNormal;
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
#endif`,wm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Em=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Tm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Am=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Rm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Cm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Im=`#ifdef USE_ENVMAP
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
#endif`,Pm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Lm=`#ifdef USE_ENVMAP
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
#endif`,km=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Dm=`#ifdef USE_ENVMAP
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
#endif`,Um=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Nm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Om=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Fm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Bm=`#ifdef USE_GRADIENTMAP
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
}`,zm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Hm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,$m=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Vm=`uniform bool receiveShadow;
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
#endif`,Gm=`#ifdef USE_ENVMAP
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
#endif`,Wm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Xm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,qm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ym=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Zm=`PhysicalMaterial material;
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
#endif`,Jm=`struct PhysicalMaterial {
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
}`,jm=`
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
#endif`,Km=`#if defined( RE_IndirectDiffuse )
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
#endif`,Qm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,t0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,e0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,n0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,i0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,s0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,r0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,o0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,a0=`#if defined( USE_POINTS_UV )
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
#endif`,l0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,c0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,h0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,f0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,u0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,d0=`#ifdef USE_MORPHTARGETS
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
#endif`,p0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,m0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,g0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,y0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,x0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,v0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,_0=`#ifdef USE_NORMALMAP
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
#endif`,M0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,b0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,S0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,w0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,E0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,T0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,A0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,R0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,C0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,I0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,P0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,L0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,k0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,D0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,U0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,N0=`float getShadowMask() {
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
}`,O0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,F0=`#ifdef USE_SKINNING
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
#endif`,B0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,z0=`#ifdef USE_SKINNING
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
#endif`,H0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,$0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,V0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,G0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,W0=`#ifdef USE_TRANSMISSION
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
#endif`,X0=`#ifdef USE_TRANSMISSION
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
#endif`,q0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Y0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Z0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,J0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,j0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,K0=`uniform sampler2D t2D;
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
}`,Q0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,eg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ng=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ig=`#include <common>
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
}`,sg=`#if DEPTH_PACKING == 3200
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
}`,rg=`#define DISTANCE
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
}`,og=`#define DISTANCE
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
}`,ag=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,lg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cg=`uniform float scale;
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
}`,hg=`uniform vec3 diffuse;
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
}`,fg=`#include <common>
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
}`,ug=`uniform vec3 diffuse;
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
}`,dg=`#define LAMBERT
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
}`,pg=`#define LAMBERT
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
}`,mg=`#define MATCAP
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
}`,gg=`#define MATCAP
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
}`,yg=`#define NORMAL
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
}`,xg=`#define NORMAL
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
}`,vg=`#define PHONG
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
}`,_g=`#define PHONG
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
}`,Mg=`#define STANDARD
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
}`,bg=`#define STANDARD
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
}`,Sg=`#define TOON
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
}`,wg=`#define TOON
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
}`,Eg=`uniform float size;
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
}`,Tg=`uniform vec3 diffuse;
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
}`,Ag=`#include <common>
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
}`,Rg=`uniform vec3 color;
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
}`,Cg=`uniform float rotation;
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
}`,Ig=`uniform vec3 diffuse;
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
}`,we={alphahash_fragment:Kp,alphahash_pars_fragment:Qp,alphamap_fragment:tm,alphamap_pars_fragment:em,alphatest_fragment:nm,alphatest_pars_fragment:im,aomap_fragment:sm,aomap_pars_fragment:rm,batching_pars_vertex:om,batching_vertex:am,begin_vertex:lm,beginnormal_vertex:cm,bsdfs:hm,iridescence_fragment:fm,bumpmap_pars_fragment:um,clipping_planes_fragment:dm,clipping_planes_pars_fragment:pm,clipping_planes_pars_vertex:mm,clipping_planes_vertex:gm,color_fragment:ym,color_pars_fragment:xm,color_pars_vertex:vm,color_vertex:_m,common:Mm,cube_uv_reflection_fragment:bm,defaultnormal_vertex:Sm,displacementmap_pars_vertex:wm,displacementmap_vertex:Em,emissivemap_fragment:Tm,emissivemap_pars_fragment:Am,colorspace_fragment:Rm,colorspace_pars_fragment:Cm,envmap_fragment:Im,envmap_common_pars_fragment:Pm,envmap_pars_fragment:Lm,envmap_pars_vertex:km,envmap_physical_pars_fragment:Gm,envmap_vertex:Dm,fog_vertex:Um,fog_pars_vertex:Nm,fog_fragment:Om,fog_pars_fragment:Fm,gradientmap_pars_fragment:Bm,lightmap_pars_fragment:zm,lights_lambert_fragment:Hm,lights_lambert_pars_fragment:$m,lights_pars_begin:Vm,lights_toon_fragment:Wm,lights_toon_pars_fragment:Xm,lights_phong_fragment:qm,lights_phong_pars_fragment:Ym,lights_physical_fragment:Zm,lights_physical_pars_fragment:Jm,lights_fragment_begin:jm,lights_fragment_maps:Km,lights_fragment_end:Qm,logdepthbuf_fragment:t0,logdepthbuf_pars_fragment:e0,logdepthbuf_pars_vertex:n0,logdepthbuf_vertex:i0,map_fragment:s0,map_pars_fragment:r0,map_particle_fragment:o0,map_particle_pars_fragment:a0,metalnessmap_fragment:l0,metalnessmap_pars_fragment:c0,morphinstance_vertex:h0,morphcolor_vertex:f0,morphnormal_vertex:u0,morphtarget_pars_vertex:d0,morphtarget_vertex:p0,normal_fragment_begin:m0,normal_fragment_maps:g0,normal_pars_fragment:y0,normal_pars_vertex:x0,normal_vertex:v0,normalmap_pars_fragment:_0,clearcoat_normal_fragment_begin:M0,clearcoat_normal_fragment_maps:b0,clearcoat_pars_fragment:S0,iridescence_pars_fragment:w0,opaque_fragment:E0,packing:T0,premultiplied_alpha_fragment:A0,project_vertex:R0,dithering_fragment:C0,dithering_pars_fragment:I0,roughnessmap_fragment:P0,roughnessmap_pars_fragment:L0,shadowmap_pars_fragment:k0,shadowmap_pars_vertex:D0,shadowmap_vertex:U0,shadowmask_pars_fragment:N0,skinbase_vertex:O0,skinning_pars_vertex:F0,skinning_vertex:B0,skinnormal_vertex:z0,specularmap_fragment:H0,specularmap_pars_fragment:$0,tonemapping_fragment:V0,tonemapping_pars_fragment:G0,transmission_fragment:W0,transmission_pars_fragment:X0,uv_pars_fragment:q0,uv_pars_vertex:Y0,uv_vertex:Z0,worldpos_vertex:J0,background_vert:j0,background_frag:K0,backgroundCube_vert:Q0,backgroundCube_frag:tg,cube_vert:eg,cube_frag:ng,depth_vert:ig,depth_frag:sg,distanceRGBA_vert:rg,distanceRGBA_frag:og,equirect_vert:ag,equirect_frag:lg,linedashed_vert:cg,linedashed_frag:hg,meshbasic_vert:fg,meshbasic_frag:ug,meshlambert_vert:dg,meshlambert_frag:pg,meshmatcap_vert:mg,meshmatcap_frag:gg,meshnormal_vert:yg,meshnormal_frag:xg,meshphong_vert:vg,meshphong_frag:_g,meshphysical_vert:Mg,meshphysical_frag:bg,meshtoon_vert:Sg,meshtoon_frag:wg,points_vert:Eg,points_frag:Tg,shadow_vert:Ag,shadow_frag:Rg,sprite_vert:Cg,sprite_frag:Ig},Kt={common:{diffuse:{value:new fe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Re},alphaMap:{value:null},alphaMapTransform:{value:new Re},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Re}},envmap:{envMap:{value:null},envMapRotation:{value:new Re},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Re}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Re}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Re},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Re},normalScale:{value:new zt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Re},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Re}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Re}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Re}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Re},alphaTest:{value:0},uvTransform:{value:new Re}},sprite:{diffuse:{value:new fe(16777215)},opacity:{value:1},center:{value:new zt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Re},alphaMap:{value:null},alphaMapTransform:{value:new Re},alphaTest:{value:0}}},ci={basic:{uniforms:In([Kt.common,Kt.specularmap,Kt.envmap,Kt.aomap,Kt.lightmap,Kt.fog]),vertexShader:we.meshbasic_vert,fragmentShader:we.meshbasic_frag},lambert:{uniforms:In([Kt.common,Kt.specularmap,Kt.envmap,Kt.aomap,Kt.lightmap,Kt.emissivemap,Kt.bumpmap,Kt.normalmap,Kt.displacementmap,Kt.fog,Kt.lights,{emissive:{value:new fe(0)}}]),vertexShader:we.meshlambert_vert,fragmentShader:we.meshlambert_frag},phong:{uniforms:In([Kt.common,Kt.specularmap,Kt.envmap,Kt.aomap,Kt.lightmap,Kt.emissivemap,Kt.bumpmap,Kt.normalmap,Kt.displacementmap,Kt.fog,Kt.lights,{emissive:{value:new fe(0)},specular:{value:new fe(1118481)},shininess:{value:30}}]),vertexShader:we.meshphong_vert,fragmentShader:we.meshphong_frag},standard:{uniforms:In([Kt.common,Kt.envmap,Kt.aomap,Kt.lightmap,Kt.emissivemap,Kt.bumpmap,Kt.normalmap,Kt.displacementmap,Kt.roughnessmap,Kt.metalnessmap,Kt.fog,Kt.lights,{emissive:{value:new fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:we.meshphysical_vert,fragmentShader:we.meshphysical_frag},toon:{uniforms:In([Kt.common,Kt.aomap,Kt.lightmap,Kt.emissivemap,Kt.bumpmap,Kt.normalmap,Kt.displacementmap,Kt.gradientmap,Kt.fog,Kt.lights,{emissive:{value:new fe(0)}}]),vertexShader:we.meshtoon_vert,fragmentShader:we.meshtoon_frag},matcap:{uniforms:In([Kt.common,Kt.bumpmap,Kt.normalmap,Kt.displacementmap,Kt.fog,{matcap:{value:null}}]),vertexShader:we.meshmatcap_vert,fragmentShader:we.meshmatcap_frag},points:{uniforms:In([Kt.points,Kt.fog]),vertexShader:we.points_vert,fragmentShader:we.points_frag},dashed:{uniforms:In([Kt.common,Kt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:we.linedashed_vert,fragmentShader:we.linedashed_frag},depth:{uniforms:In([Kt.common,Kt.displacementmap]),vertexShader:we.depth_vert,fragmentShader:we.depth_frag},normal:{uniforms:In([Kt.common,Kt.bumpmap,Kt.normalmap,Kt.displacementmap,{opacity:{value:1}}]),vertexShader:we.meshnormal_vert,fragmentShader:we.meshnormal_frag},sprite:{uniforms:In([Kt.sprite,Kt.fog]),vertexShader:we.sprite_vert,fragmentShader:we.sprite_frag},background:{uniforms:{uvTransform:{value:new Re},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:we.background_vert,fragmentShader:we.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Re}},vertexShader:we.backgroundCube_vert,fragmentShader:we.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:we.cube_vert,fragmentShader:we.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:we.equirect_vert,fragmentShader:we.equirect_frag},distanceRGBA:{uniforms:In([Kt.common,Kt.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:we.distanceRGBA_vert,fragmentShader:we.distanceRGBA_frag},shadow:{uniforms:In([Kt.lights,Kt.fog,{color:{value:new fe(0)},opacity:{value:1}}]),vertexShader:we.shadow_vert,fragmentShader:we.shadow_frag}};ci.physical={uniforms:In([ci.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Re},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Re},clearcoatNormalScale:{value:new zt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Re},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Re},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Re},sheen:{value:0},sheenColor:{value:new fe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Re},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Re},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Re},transmissionSamplerSize:{value:new zt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Re},attenuationDistance:{value:0},attenuationColor:{value:new fe(0)},specularColor:{value:new fe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Re},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Re},anisotropyVector:{value:new zt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Re}}]),vertexShader:we.meshphysical_vert,fragmentShader:we.meshphysical_frag};var No={r:0,b:0,g:0},fs=new ni,Pg=new ke;function Lg(n,t,e,i,s,r,o){let a=new fe(0),l=r===!0?0:1,h,d,g=null,u=0,c=null;function f(S){let v=S.isScene===!0?S.background:null;return v&&v.isTexture&&(v=(S.backgroundBlurriness>0?e:t).get(v)),v}function _(S){let v=!1,M=f(S);M===null?p(a,l):M&&M.isColor&&(p(M,1),v=!0);let D=n.xr.getEnvironmentBlendMode();D==="additive"?i.buffers.color.setClear(0,0,0,1,o):D==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(S,v){let M=f(v);M&&(M.isCubeTexture||M.mapping===Ua)?(d===void 0&&(d=new ze(new Ue(1,1,1),new kn({name:"BackgroundCubeMaterial",uniforms:ir(ci.backgroundCube.uniforms),vertexShader:ci.backgroundCube.vertexShader,fragmentShader:ci.backgroundCube.fragmentShader,side:Mn,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(D,w,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(d)),fs.copy(v.backgroundRotation),fs.x*=-1,fs.y*=-1,fs.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(fs.y*=-1,fs.z*=-1),d.material.uniforms.envMap.value=M,d.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(Pg.makeRotationFromEuler(fs)),d.material.toneMapped=Ne.getTransfer(M.colorSpace)!==He,(g!==M||u!==M.version||c!==n.toneMapping)&&(d.material.needsUpdate=!0,g=M,u=M.version,c=n.toneMapping),d.layers.enableAll(),S.unshift(d,d.geometry,d.material,0,0,null)):M&&M.isTexture&&(h===void 0&&(h=new ze(new bn(2,2),new kn({name:"BackgroundMaterial",uniforms:ir(ci.background.uniforms),vertexShader:ci.background.vertexShader,fragmentShader:ci.background.fragmentShader,side:qi,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(h)),h.material.uniforms.t2D.value=M,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.toneMapped=Ne.getTransfer(M.colorSpace)!==He,M.matrixAutoUpdate===!0&&M.updateMatrix(),h.material.uniforms.uvTransform.value.copy(M.matrix),(g!==M||u!==M.version||c!==n.toneMapping)&&(h.material.needsUpdate=!0,g=M,u=M.version,c=n.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null))}function p(S,v){S.getRGB(No,Su(n)),i.buffers.color.setClear(No.r,No.g,No.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(S,v=1){a.set(S),l=v,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,p(a,l)},render:_,addToRenderList:m}}function kg(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=u(null),r=s,o=!1;function a(y,b,C,E,L){let R=!1,U=g(E,C,b);r!==U&&(r=U,h(r.object)),R=c(y,E,C,L),R&&f(y,E,C,L),L!==null&&t.update(L,n.ELEMENT_ARRAY_BUFFER),(R||o)&&(o=!1,M(y,b,C,E),L!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(L).buffer))}function l(){return n.createVertexArray()}function h(y){return n.bindVertexArray(y)}function d(y){return n.deleteVertexArray(y)}function g(y,b,C){let E=C.wireframe===!0,L=i[y.id];L===void 0&&(L={},i[y.id]=L);let R=L[b.id];R===void 0&&(R={},L[b.id]=R);let U=R[E];return U===void 0&&(U=u(l()),R[E]=U),U}function u(y){let b=[],C=[],E=[];for(let L=0;L<e;L++)b[L]=0,C[L]=0,E[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:b,enabledAttributes:C,attributeDivisors:E,object:y,attributes:{},index:null}}function c(y,b,C,E){let L=r.attributes,R=b.attributes,U=0,O=C.getAttributes();for(let z in O)if(O[z].location>=0){let X=L[z],N=R[z];if(N===void 0&&(z==="instanceMatrix"&&y.instanceMatrix&&(N=y.instanceMatrix),z==="instanceColor"&&y.instanceColor&&(N=y.instanceColor)),X===void 0||X.attribute!==N||N&&X.data!==N.data)return!0;U++}return r.attributesNum!==U||r.index!==E}function f(y,b,C,E){let L={},R=b.attributes,U=0,O=C.getAttributes();for(let z in O)if(O[z].location>=0){let X=R[z];X===void 0&&(z==="instanceMatrix"&&y.instanceMatrix&&(X=y.instanceMatrix),z==="instanceColor"&&y.instanceColor&&(X=y.instanceColor));let N={};N.attribute=X,X&&X.data&&(N.data=X.data),L[z]=N,U++}r.attributes=L,r.attributesNum=U,r.index=E}function _(){let y=r.newAttributes;for(let b=0,C=y.length;b<C;b++)y[b]=0}function m(y){p(y,0)}function p(y,b){let C=r.newAttributes,E=r.enabledAttributes,L=r.attributeDivisors;C[y]=1,E[y]===0&&(n.enableVertexAttribArray(y),E[y]=1),L[y]!==b&&(n.vertexAttribDivisor(y,b),L[y]=b)}function S(){let y=r.newAttributes,b=r.enabledAttributes;for(let C=0,E=b.length;C<E;C++)b[C]!==y[C]&&(n.disableVertexAttribArray(C),b[C]=0)}function v(y,b,C,E,L,R,U){U===!0?n.vertexAttribIPointer(y,b,C,L,R):n.vertexAttribPointer(y,b,C,E,L,R)}function M(y,b,C,E){_();let L=E.attributes,R=C.getAttributes(),U=b.defaultAttributeValues;for(let O in R){let z=R[O];if(z.location>=0){let q=L[O];if(q===void 0&&(O==="instanceMatrix"&&y.instanceMatrix&&(q=y.instanceMatrix),O==="instanceColor"&&y.instanceColor&&(q=y.instanceColor)),q!==void 0){let X=q.normalized,N=q.itemSize,gt=t.get(q);if(gt===void 0)continue;let Rt=gt.buffer,k=gt.type,W=gt.bytesPerElement,et=k===n.INT||k===n.UNSIGNED_INT||q.gpuType===ah;if(q.isInterleavedBufferAttribute){let G=q.data,J=G.stride,ct=q.offset;if(G.isInstancedInterleavedBuffer){for(let Tt=0;Tt<z.locationSize;Tt++)p(z.location+Tt,G.meshPerAttribute);y.isInstancedMesh!==!0&&E._maxInstanceCount===void 0&&(E._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let Tt=0;Tt<z.locationSize;Tt++)m(z.location+Tt);n.bindBuffer(n.ARRAY_BUFFER,Rt);for(let Tt=0;Tt<z.locationSize;Tt++)v(z.location+Tt,N/z.locationSize,k,X,J*W,(ct+N/z.locationSize*Tt)*W,et)}else{if(q.isInstancedBufferAttribute){for(let G=0;G<z.locationSize;G++)p(z.location+G,q.meshPerAttribute);y.isInstancedMesh!==!0&&E._maxInstanceCount===void 0&&(E._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let G=0;G<z.locationSize;G++)m(z.location+G);n.bindBuffer(n.ARRAY_BUFFER,Rt);for(let G=0;G<z.locationSize;G++)v(z.location+G,N/z.locationSize,k,X,N*W,N/z.locationSize*G*W,et)}}else if(U!==void 0){let X=U[O];if(X!==void 0)switch(X.length){case 2:n.vertexAttrib2fv(z.location,X);break;case 3:n.vertexAttrib3fv(z.location,X);break;case 4:n.vertexAttrib4fv(z.location,X);break;default:n.vertexAttrib1fv(z.location,X)}}}}S()}function D(){T();for(let y in i){let b=i[y];for(let C in b){let E=b[C];for(let L in E)d(E[L].object),delete E[L];delete b[C]}delete i[y]}}function w(y){if(i[y.id]===void 0)return;let b=i[y.id];for(let C in b){let E=b[C];for(let L in E)d(E[L].object),delete E[L];delete b[C]}delete i[y.id]}function A(y){for(let b in i){let C=i[b];if(C[y.id]===void 0)continue;let E=C[y.id];for(let L in E)d(E[L].object),delete E[L];delete C[y.id]}}function T(){x(),o=!0,r!==s&&(r=s,h(r.object))}function x(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:T,resetDefaultState:x,dispose:D,releaseStatesOfGeometry:w,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:m,disableUnusedAttributes:S}}function Dg(n,t,e){let i;function s(h){i=h}function r(h,d){n.drawArrays(i,h,d),e.update(d,i,1)}function o(h,d,g){g!==0&&(n.drawArraysInstanced(i,h,d,g),e.update(d,i,g))}function a(h,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,h,0,d,0,g);let c=0;for(let f=0;f<g;f++)c+=d[f];e.update(c,i,1)}function l(h,d,g,u){if(g===0)return;let c=t.get("WEBGL_multi_draw");if(c===null)for(let f=0;f<h.length;f++)o(h[f],d[f],u[f]);else{c.multiDrawArraysInstancedWEBGL(i,h,0,d,0,u,0,g);let f=0;for(let _=0;_<g;_++)f+=d[_]*u[_];e.update(f,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Ug(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let A=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(A){return!(A!==Hn&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){let T=A===Kr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==Ti&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==fi&&!T)}function l(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=e.precision!==void 0?e.precision:"highp",d=l(h);d!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",d,"instead."),h=d);let g=e.logarithmicDepthBuffer===!0,u=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),c=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),f=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),S=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),v=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),D=f>0,w=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:h,logarithmicDepthBuffer:g,reverseDepthBuffer:u,maxTextures:c,maxVertexTextures:f,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:S,maxVaryings:v,maxFragmentUniforms:M,vertexTextures:D,maxSamples:w}}function Ng(n){let t=this,e=null,i=0,s=!1,r=!1,o=new Si,a=new Re,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(g,u){let c=g.length!==0||u||i!==0||s;return s=u,i=g.length,c},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(g,u){e=d(g,u,0)},this.setState=function(g,u,c){let f=g.clippingPlanes,_=g.clipIntersection,m=g.clipShadows,p=n.get(g);if(!s||f===null||f.length===0||r&&!m)r?d(null):h();else{let S=r?0:i,v=S*4,M=p.clippingState||null;l.value=M,M=d(f,u,v,c);for(let D=0;D!==v;++D)M[D]=e[D];p.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function h(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function d(g,u,c,f){let _=g!==null?g.length:0,m=null;if(_!==0){if(m=l.value,f!==!0||m===null){let p=c+_*4,S=u.matrixWorldInverse;a.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let v=0,M=c;v!==_;++v,M+=4)o.copy(g[v]).applyMatrix4(S,a),o.normal.toArray(m,M),m[M+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function Og(n){let t=new WeakMap;function e(o,a){return a===Xl?o.mapping=Qs:a===ql&&(o.mapping=tr),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===Xl||a===ql)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let h=new Ac(l.height);return h.fromEquirectangularTexture(n,o),t.set(o,h),o.addEventListener("dispose",s),e(h.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}var fa=class extends ca{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let h=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,o=r+h*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Xs=4,Sf=[.125,.215,.35,.446,.526,.582],ms=20,El=new fa,wf=new fe,Tl=null,Al=0,Rl=0,Cl=!1,ds=(1+Math.sqrt(5))/2,zs=1/ds,Ef=[new $(-ds,zs,0),new $(ds,zs,0),new $(-zs,0,ds),new $(zs,0,ds),new $(0,ds,-zs),new $(0,ds,zs),new $(-1,1,-1),new $(1,1,-1),new $(-1,1,1),new $(1,1,1)],ua=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){Tl=this._renderer.getRenderTarget(),Al=this._renderer.getActiveCubeFace(),Rl=this._renderer.getActiveMipmapLevel(),Cl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Rf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Af(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Tl,Al,Rl),this._renderer.xr.enabled=Cl,t.scissorTest=!1,Oo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Qs||t.mapping===tr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Tl=this._renderer.getRenderTarget(),Al=this._renderer.getActiveCubeFace(),Rl=this._renderer.getActiveMipmapLevel(),Cl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:hi,minFilter:hi,generateMipmaps:!1,type:Kr,format:Hn,colorSpace:lr,depthBuffer:!1},s=Tf(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Tf(t,e,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Fg(r)),this._blurMaterial=Bg(r,t,e)}return s}_compileMaterial(t){let e=new ze(this._lodPlanes[0],t);this._renderer.compile(e,El)}_sceneToCubeUV(t,e,i,s){let a=new Pn(90,1,e,i),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,g=d.autoClear,u=d.toneMapping;d.getClearColor(wf),d.toneMapping=ui,d.autoClear=!1;let c=new Un({name:"PMREM.Background",side:Mn,depthWrite:!1,depthTest:!1}),f=new ze(new Ue,c),_=!1,m=t.background;m?m.isColor&&(c.color.copy(m),t.background=null,_=!0):(c.color.copy(wf),_=!0);for(let p=0;p<6;p++){let S=p%3;S===0?(a.up.set(0,l[p],0),a.lookAt(h[p],0,0)):S===1?(a.up.set(0,0,l[p]),a.lookAt(0,h[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,h[p]));let v=this._cubeSize;Oo(s,S*v,p>2?v:0,v,v),d.setRenderTarget(s),_&&d.render(f,a),d.render(t,a)}f.geometry.dispose(),f.material.dispose(),d.toneMapping=u,d.autoClear=g,t.background=m}_textureToCubeUV(t,e){let i=this._renderer,s=t.mapping===Qs||t.mapping===tr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Rf()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Af());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new ze(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;Oo(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,El)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Ef[(s-r-1)%Ef.length];this._blur(t,r-1,r,o,a)}e.autoClear=i}_blur(t,e,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){let l=this._renderer,h=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let d=3,g=new ze(this._lodPlanes[s],h),u=h.uniforms,c=this._sizeLods[i]-1,f=isFinite(r)?Math.PI/(2*c):2*Math.PI/(2*ms-1),_=r/f,m=isFinite(r)?1+Math.floor(d*_):ms;m>ms&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ms}`);let p=[],S=0;for(let A=0;A<ms;++A){let T=A/_,x=Math.exp(-T*T/2);p.push(x),A===0?S+=x:A<m&&(S+=2*x)}for(let A=0;A<p.length;A++)p[A]=p[A]/S;u.envMap.value=t.texture,u.samples.value=m,u.weights.value=p,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);let{_lodMax:v}=this;u.dTheta.value=f,u.mipInt.value=v-i;let M=this._sizeLods[s],D=3*M*(s>v-Xs?s-v+Xs:0),w=4*(this._cubeSize-M);Oo(e,D,w,3*M,2*M),l.setRenderTarget(e),l.render(g,El)}};function Fg(n){let t=[],e=[],i=[],s=n,r=n-Xs+1+Sf.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>n-Xs?l=Sf[o-n+Xs-1]:o===0&&(l=0),i.push(l);let h=1/(a-2),d=-h,g=1+h,u=[d,d,g,d,g,g,d,d,g,g,d,g],c=6,f=6,_=3,m=2,p=1,S=new Float32Array(_*f*c),v=new Float32Array(m*f*c),M=new Float32Array(p*f*c);for(let w=0;w<c;w++){let A=w%3*2/3-1,T=w>2?0:-1,x=[A,T,0,A+2/3,T,0,A+2/3,T+1,0,A,T,0,A+2/3,T+1,0,A,T+1,0];S.set(x,_*f*w),v.set(u,m*f*w);let y=[w,w,w,w,w,w];M.set(y,p*f*w)}let D=new Ve;D.setAttribute("position",new Ze(S,_)),D.setAttribute("uv",new Ze(v,m)),D.setAttribute("faceIndex",new Ze(M,p)),t.push(D),s>Xs&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Tf(n,t,e){let i=new Ai(n,t,e);return i.texture.mapping=Ua,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Oo(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function Bg(n,t,e){let i=new Float32Array(ms),s=new $(0,1,0);return new kn({name:"SphericalGaussianBlur",defines:{n:ms,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:gh(),fragmentShader:`

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
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function Af(){return new kn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:gh(),fragmentShader:`

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
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function Rf(){return new kn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:gh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function gh(){return`

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
	`}function zg(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){let l=a.mapping,h=l===Xl||l===ql,d=l===Qs||l===tr;if(h||d){let g=t.get(a),u=g!==void 0?g.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return e===null&&(e=new ua(n)),g=h?e.fromEquirectangular(a,g):e.fromCubemap(a,g),g.texture.pmremVersion=a.pmremVersion,t.set(a,g),g.texture;if(g!==void 0)return g.texture;{let c=a.image;return h&&c&&c.height>0||d&&c&&s(c)?(e===null&&(e=new ua(n)),g=h?e.fromEquirectangular(a):e.fromCubemap(a),g.texture.pmremVersion=a.pmremVersion,t.set(a,g),a.addEventListener("dispose",r),g.texture):null}}}return a}function s(a){let l=0,h=6;for(let d=0;d<h;d++)a[d]!==void 0&&l++;return l===h}function r(a){let l=a.target;l.removeEventListener("dispose",r);let h=t.get(l);h!==void 0&&(t.delete(l),h.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function Hg(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&Pr("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function $g(n,t,e,i){let s={},r=new WeakMap;function o(g){let u=g.target;u.index!==null&&t.remove(u.index);for(let f in u.attributes)t.remove(u.attributes[f]);for(let f in u.morphAttributes){let _=u.morphAttributes[f];for(let m=0,p=_.length;m<p;m++)t.remove(_[m])}u.removeEventListener("dispose",o),delete s[u.id];let c=r.get(u);c&&(t.remove(c),r.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(g,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,e.memory.geometries++),u}function l(g){let u=g.attributes;for(let f in u)t.update(u[f],n.ARRAY_BUFFER);let c=g.morphAttributes;for(let f in c){let _=c[f];for(let m=0,p=_.length;m<p;m++)t.update(_[m],n.ARRAY_BUFFER)}}function h(g){let u=[],c=g.index,f=g.attributes.position,_=0;if(c!==null){let S=c.array;_=c.version;for(let v=0,M=S.length;v<M;v+=3){let D=S[v+0],w=S[v+1],A=S[v+2];u.push(D,w,w,A,A,D)}}else if(f!==void 0){let S=f.array;_=f.version;for(let v=0,M=S.length/3-1;v<M;v+=3){let D=v+0,w=v+1,A=v+2;u.push(D,w,w,A,A,D)}}else return;let m=new(Mu(u)?la:aa)(u,1);m.version=_;let p=r.get(g);p&&t.remove(p),r.set(g,m)}function d(g){let u=r.get(g);if(u){let c=g.index;c!==null&&u.version<c.version&&h(g)}else h(g);return r.get(g)}return{get:a,update:l,getWireframeAttribute:d}}function Vg(n,t,e){let i;function s(u){i=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,c){n.drawElements(i,c,r,u*o),e.update(c,i,1)}function h(u,c,f){f!==0&&(n.drawElementsInstanced(i,c,r,u*o,f),e.update(c,i,f))}function d(u,c,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,c,0,r,u,0,f);let m=0;for(let p=0;p<f;p++)m+=c[p];e.update(m,i,1)}function g(u,c,f,_){if(f===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<u.length;p++)h(u[p]/o,c[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(i,c,0,r,u,0,_,0,f);let p=0;for(let S=0;S<f;S++)p+=c[S]*_[S];e.update(p,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=g}function Gg(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function Wg(n,t,e){let i=new WeakMap,s=new nn;function r(o,a,l){let h=o.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,g=d!==void 0?d.length:0,u=i.get(a);if(u===void 0||u.count!==g){let x=function(){A.dispose(),i.delete(a),a.removeEventListener("dispose",x)};u!==void 0&&u.texture.dispose();let c=a.morphAttributes.position!==void 0,f=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],S=a.morphAttributes.color||[],v=0;c===!0&&(v=1),f===!0&&(v=2),_===!0&&(v=3);let M=a.attributes.position.count*v,D=1;M>t.maxTextureSize&&(D=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);let w=new Float32Array(M*D*4*g),A=new sa(w,M,D,g);A.type=fi,A.needsUpdate=!0;let T=v*4;for(let y=0;y<g;y++){let b=m[y],C=p[y],E=S[y],L=M*D*4*y;for(let R=0;R<b.count;R++){let U=R*T;c===!0&&(s.fromBufferAttribute(b,R),w[L+U+0]=s.x,w[L+U+1]=s.y,w[L+U+2]=s.z,w[L+U+3]=0),f===!0&&(s.fromBufferAttribute(C,R),w[L+U+4]=s.x,w[L+U+5]=s.y,w[L+U+6]=s.z,w[L+U+7]=0),_===!0&&(s.fromBufferAttribute(E,R),w[L+U+8]=s.x,w[L+U+9]=s.y,w[L+U+10]=s.z,w[L+U+11]=E.itemSize===4?s.w:1)}}u={count:g,texture:A,size:new zt(M,D)},i.set(a,u),a.addEventListener("dispose",x)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let c=0;for(let _=0;_<h.length;_++)c+=h[_];let f=a.morphTargetsRelative?1:1-c;l.getUniforms().setValue(n,"morphTargetBaseInfluence",f),l.getUniforms().setValue(n,"morphTargetInfluences",h)}l.getUniforms().setValue(n,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:r}}function Xg(n,t,e,i){let s=new WeakMap;function r(l){let h=i.render.frame,d=l.geometry,g=t.get(l,d);if(s.get(g)!==h&&(t.update(g),s.set(g,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==h&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,h))),l.isSkinnedMesh){let u=l.skeleton;s.get(u)!==h&&(u.update(),s.set(u,h))}return g}function o(){s=new WeakMap}function a(l){let h=l.target;h.removeEventListener("dispose",a),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:r,dispose:o}}var da=class extends Dn{constructor(t,e,i,s,r,o,a,l,h,d=Zs){if(d!==Zs&&d!==nr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&d===Zs&&(i=vs),i===void 0&&d===nr&&(i=er),super(null,s,r,o,a,l,d,i,h),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Ln,this.minFilter=l!==void 0?l:Ln,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Eu=new Dn,Cf=new da(1,1),Tu=new sa,Au=new Ec,Ru=new ha,If=[],Pf=[],Lf=new Float32Array(16),kf=new Float32Array(9),Df=new Float32Array(4);function cr(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=If[s];if(r===void 0&&(r=new Float32Array(s),If[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function un(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function dn(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Oa(n,t){let e=Pf[t];e===void 0&&(e=new Int32Array(t),Pf[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function qg(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function Yg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(un(e,t))return;n.uniform2fv(this.addr,t),dn(e,t)}}function Zg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(un(e,t))return;n.uniform3fv(this.addr,t),dn(e,t)}}function Jg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(un(e,t))return;n.uniform4fv(this.addr,t),dn(e,t)}}function jg(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(un(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),dn(e,t)}else{if(un(e,i))return;Df.set(i),n.uniformMatrix2fv(this.addr,!1,Df),dn(e,i)}}function Kg(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(un(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),dn(e,t)}else{if(un(e,i))return;kf.set(i),n.uniformMatrix3fv(this.addr,!1,kf),dn(e,i)}}function Qg(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(un(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),dn(e,t)}else{if(un(e,i))return;Lf.set(i),n.uniformMatrix4fv(this.addr,!1,Lf),dn(e,i)}}function ty(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function ey(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(un(e,t))return;n.uniform2iv(this.addr,t),dn(e,t)}}function ny(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(un(e,t))return;n.uniform3iv(this.addr,t),dn(e,t)}}function iy(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(un(e,t))return;n.uniform4iv(this.addr,t),dn(e,t)}}function sy(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function ry(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(un(e,t))return;n.uniform2uiv(this.addr,t),dn(e,t)}}function oy(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(un(e,t))return;n.uniform3uiv(this.addr,t),dn(e,t)}}function ay(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(un(e,t))return;n.uniform4uiv(this.addr,t),dn(e,t)}}function ly(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Cf.compareFunction=_u,r=Cf):r=Eu,e.setTexture2D(t||r,s)}function cy(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Au,s)}function hy(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||Ru,s)}function fy(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Tu,s)}function uy(n){switch(n){case 5126:return qg;case 35664:return Yg;case 35665:return Zg;case 35666:return Jg;case 35674:return jg;case 35675:return Kg;case 35676:return Qg;case 5124:case 35670:return ty;case 35667:case 35671:return ey;case 35668:case 35672:return ny;case 35669:case 35673:return iy;case 5125:return sy;case 36294:return ry;case 36295:return oy;case 36296:return ay;case 35678:case 36198:case 36298:case 36306:case 35682:return ly;case 35679:case 36299:case 36307:return cy;case 35680:case 36300:case 36308:case 36293:return hy;case 36289:case 36303:case 36311:case 36292:return fy}}function dy(n,t){n.uniform1fv(this.addr,t)}function py(n,t){let e=cr(t,this.size,2);n.uniform2fv(this.addr,e)}function my(n,t){let e=cr(t,this.size,3);n.uniform3fv(this.addr,e)}function gy(n,t){let e=cr(t,this.size,4);n.uniform4fv(this.addr,e)}function yy(n,t){let e=cr(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function xy(n,t){let e=cr(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function vy(n,t){let e=cr(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function _y(n,t){n.uniform1iv(this.addr,t)}function My(n,t){n.uniform2iv(this.addr,t)}function by(n,t){n.uniform3iv(this.addr,t)}function Sy(n,t){n.uniform4iv(this.addr,t)}function wy(n,t){n.uniform1uiv(this.addr,t)}function Ey(n,t){n.uniform2uiv(this.addr,t)}function Ty(n,t){n.uniform3uiv(this.addr,t)}function Ay(n,t){n.uniform4uiv(this.addr,t)}function Ry(n,t,e){let i=this.cache,s=t.length,r=Oa(e,s);un(i,r)||(n.uniform1iv(this.addr,r),dn(i,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Eu,r[o])}function Cy(n,t,e){let i=this.cache,s=t.length,r=Oa(e,s);un(i,r)||(n.uniform1iv(this.addr,r),dn(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Au,r[o])}function Iy(n,t,e){let i=this.cache,s=t.length,r=Oa(e,s);un(i,r)||(n.uniform1iv(this.addr,r),dn(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Ru,r[o])}function Py(n,t,e){let i=this.cache,s=t.length,r=Oa(e,s);un(i,r)||(n.uniform1iv(this.addr,r),dn(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Tu,r[o])}function Ly(n){switch(n){case 5126:return dy;case 35664:return py;case 35665:return my;case 35666:return gy;case 35674:return yy;case 35675:return xy;case 35676:return vy;case 5124:case 35670:return _y;case 35667:case 35671:return My;case 35668:case 35672:return by;case 35669:case 35673:return Sy;case 5125:return wy;case 36294:return Ey;case 36295:return Ty;case 36296:return Ay;case 35678:case 36198:case 36298:case 36306:case 35682:return Ry;case 35679:case 36299:case 36307:return Cy;case 35680:case 36300:case 36308:case 36293:return Iy;case 36289:case 36303:case 36311:case 36292:return Py}}var Rc=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=uy(e.type)}},Cc=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Ly(e.type)}},Ic=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],i)}}},Il=/(\w+)(\])?(\[|\.)?/g;function Uf(n,t){n.seq.push(t),n.map[t.id]=t}function ky(n,t,e){let i=n.name,s=i.length;for(Il.lastIndex=0;;){let r=Il.exec(i),o=Il.lastIndex,a=r[1],l=r[2]==="]",h=r[3];if(l&&(a=a|0),h===void 0||h==="["&&o+2===s){Uf(e,h===void 0?new Rc(a,n,t):new Cc(a,n,t));break}else{let g=e.map[a];g===void 0&&(g=new Ic(a),Uf(e,g)),e=g}}}var js=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);ky(r,o,this)}}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&i.push(o)}return i}};function Nf(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var Dy=37297,Uy=0;function Ny(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}var Of=new Re;function Oy(n){Ne._getMatrix(Of,Ne.workingColorSpace,n);let t=`mat3( ${Of.elements.map(e=>e.toFixed(4))} )`;switch(Ne.getTransfer(n)){case Na:return[t,"LinearTransferOETF"];case He:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Ff(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Ny(n.getShaderSource(t),o)}else return s}function Fy(n,t){let e=Oy(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function By(n,t){let e;switch(t){case Jd:e="Linear";break;case jd:e="Reinhard";break;case Kd:e="Cineon";break;case Qd:e="ACESFilmic";break;case ep:e="AgX";break;case np:e="Neutral";break;case tp:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Fo=new $;function zy(){Ne.getLuminanceCoefficients(Fo);let n=Fo.x.toFixed(4),t=Fo.y.toFixed(4),e=Fo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Hy(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Lr).join(`
`)}function $y(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Vy(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function Lr(n){return n!==""}function Bf(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function zf(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Gy=/^[ \t]*#include +<([\w\d./]+)>/gm;function Pc(n){return n.replace(Gy,Xy)}var Wy=new Map;function Xy(n,t){let e=we[t];if(e===void 0){let i=Wy.get(t);if(i!==void 0)e=we[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Pc(e)}var qy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Hf(n){return n.replace(qy,Yy)}function Yy(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function $f(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}function Zy(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===au?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===oh?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===bi&&(t="SHADOWMAP_TYPE_VSM"),t}function Jy(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Qs:case tr:t="ENVMAP_TYPE_CUBE";break;case Ua:t="ENVMAP_TYPE_CUBE_UV";break}return t}function jy(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case tr:t="ENVMAP_MODE_REFRACTION";break}return t}function Ky(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case lu:t="ENVMAP_BLENDING_MULTIPLY";break;case Yd:t="ENVMAP_BLENDING_MIX";break;case Zd:t="ENVMAP_BLENDING_ADD";break}return t}function Qy(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function tx(n,t,e,i){let s=n.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=Zy(e),h=Jy(e),d=jy(e),g=Ky(e),u=Qy(e),c=Hy(e),f=$y(r),_=s.createProgram(),m,p,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(Lr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(Lr).join(`
`),p.length>0&&(p+=`
`)):(m=[$f(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Lr).join(`
`),p=[$f(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",e.envMap?"#define "+g:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ui?"#define TONE_MAPPING":"",e.toneMapping!==ui?we.tonemapping_pars_fragment:"",e.toneMapping!==ui?By("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",we.colorspace_pars_fragment,Fy("linearToOutputTexel",e.outputColorSpace),zy(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Lr).join(`
`)),o=Pc(o),o=Bf(o,e),o=zf(o,e),a=Pc(a),a=Bf(a,e),a=zf(a,e),o=Hf(o),a=Hf(a),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[c,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===tf?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===tf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let v=S+m+o,M=S+p+a,D=Nf(s,s.VERTEX_SHADER,v),w=Nf(s,s.FRAGMENT_SHADER,M);s.attachShader(_,D),s.attachShader(_,w),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function A(b){if(n.debug.checkShaderErrors){let C=s.getProgramInfoLog(_).trim(),E=s.getShaderInfoLog(D).trim(),L=s.getShaderInfoLog(w).trim(),R=!0,U=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(R=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,D,w);else{let O=Ff(s,D,"vertex"),z=Ff(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+b.name+`
Material Type: `+b.type+`

Program Info Log: `+C+`
`+O+`
`+z)}else C!==""?console.warn("THREE.WebGLProgram: Program Info Log:",C):(E===""||L==="")&&(U=!1);U&&(b.diagnostics={runnable:R,programLog:C,vertexShader:{log:E,prefix:m},fragmentShader:{log:L,prefix:p}})}s.deleteShader(D),s.deleteShader(w),T=new js(s,_),x=Vy(s,_)}let T;this.getUniforms=function(){return T===void 0&&A(this),T};let x;this.getAttributes=function(){return x===void 0&&A(this),x};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(_,Dy)),y},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Uy++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=D,this.fragmentShader=w,this}var ex=0,Lc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new kc(t),e.set(t,i)),i}},kc=class{constructor(t){this.id=ex++,this.code=t,this.usedTimes=0}};function nx(n,t,e,i,s,r,o){let a=new oa,l=new Lc,h=new Set,d=[],g=s.logarithmicDepthBuffer,u=s.vertexTextures,c=s.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(x){return h.add(x),x===0?"uv":`uv${x}`}function m(x,y,b,C,E){let L=C.fog,R=E.geometry,U=x.isMeshStandardMaterial?C.environment:null,O=(x.isMeshStandardMaterial?e:t).get(x.envMap||U),z=O&&O.mapping===Ua?O.image.height:null,q=f[x.type];x.precision!==null&&(c=s.getMaxPrecision(x.precision),c!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",c,"instead."));let X=R.morphAttributes.position||R.morphAttributes.normal||R.morphAttributes.color,N=X!==void 0?X.length:0,gt=0;R.morphAttributes.position!==void 0&&(gt=1),R.morphAttributes.normal!==void 0&&(gt=2),R.morphAttributes.color!==void 0&&(gt=3);let Rt,k,W,et;if(q){let nt=ci[q];Rt=nt.vertexShader,k=nt.fragmentShader}else Rt=x.vertexShader,k=x.fragmentShader,l.update(x),W=l.getVertexShaderID(x),et=l.getFragmentShaderID(x);let G=n.getRenderTarget(),J=n.state.buffers.depth.getReversed(),ct=E.isInstancedMesh===!0,Tt=E.isBatchedMesh===!0,Ut=!!x.map,st=!!x.matcap,pt=!!O,H=!!x.aoMap,Vt=!!x.lightMap,K=!!x.bumpMap,Z=!!x.normalMap,yt=!!x.displacementMap,Y=!!x.emissiveMap,Lt=!!x.metalnessMap,B=!!x.roughnessMap,P=x.anisotropy>0,ht=x.clearcoat>0,_t=x.dispersion>0,Pt=x.iridescence>0,j=x.sheen>0,at=x.transmission>0,lt=P&&!!x.anisotropyMap,xt=ht&&!!x.clearcoatMap,Ct=ht&&!!x.clearcoatNormalMap,St=ht&&!!x.clearcoatRoughnessMap,Nt=Pt&&!!x.iridescenceMap,Yt=Pt&&!!x.iridescenceThicknessMap,re=j&&!!x.sheenColorMap,jt=j&&!!x.sheenRoughnessMap,ye=!!x.specularMap,ce=!!x.specularColorMap,Pe=!!x.specularIntensityMap,rt=at&&!!x.transmissionMap,Zt=at&&!!x.thicknessMap,It=!!x.gradientMap,Ot=!!x.alphaMap,ee=x.alphaTest>0,Qt=!!x.alphaHash,ve=!!x.extensions,I=ui;x.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(I=n.toneMapping);let it={shaderID:q,shaderType:x.type,shaderName:x.name,vertexShader:Rt,fragmentShader:k,defines:x.defines,customVertexShaderID:W,customFragmentShaderID:et,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:c,batching:Tt,batchingColor:Tt&&E._colorsTexture!==null,instancing:ct,instancingColor:ct&&E.instanceColor!==null,instancingMorph:ct&&E.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:G===null?n.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:lr,alphaToCoverage:!!x.alphaToCoverage,map:Ut,matcap:st,envMap:pt,envMapMode:pt&&O.mapping,envMapCubeUVHeight:z,aoMap:H,lightMap:Vt,bumpMap:K,normalMap:Z,displacementMap:u&&yt,emissiveMap:Y,normalMapObjectSpace:Z&&x.normalMapType===op,normalMapTangentSpace:Z&&x.normalMapType===vu,metalnessMap:Lt,roughnessMap:B,anisotropy:P,anisotropyMap:lt,clearcoat:ht,clearcoatMap:xt,clearcoatNormalMap:Ct,clearcoatRoughnessMap:St,dispersion:_t,iridescence:Pt,iridescenceMap:Nt,iridescenceThicknessMap:Yt,sheen:j,sheenColorMap:re,sheenRoughnessMap:jt,specularMap:ye,specularColorMap:ce,specularIntensityMap:Pe,transmission:at,transmissionMap:rt,thicknessMap:Zt,gradientMap:It,opaque:x.transparent===!1&&x.blending===Ys&&x.alphaToCoverage===!1,alphaMap:Ot,alphaTest:ee,alphaHash:Qt,combine:x.combine,mapUv:Ut&&_(x.map.channel),aoMapUv:H&&_(x.aoMap.channel),lightMapUv:Vt&&_(x.lightMap.channel),bumpMapUv:K&&_(x.bumpMap.channel),normalMapUv:Z&&_(x.normalMap.channel),displacementMapUv:yt&&_(x.displacementMap.channel),emissiveMapUv:Y&&_(x.emissiveMap.channel),metalnessMapUv:Lt&&_(x.metalnessMap.channel),roughnessMapUv:B&&_(x.roughnessMap.channel),anisotropyMapUv:lt&&_(x.anisotropyMap.channel),clearcoatMapUv:xt&&_(x.clearcoatMap.channel),clearcoatNormalMapUv:Ct&&_(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:St&&_(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Nt&&_(x.iridescenceMap.channel),iridescenceThicknessMapUv:Yt&&_(x.iridescenceThicknessMap.channel),sheenColorMapUv:re&&_(x.sheenColorMap.channel),sheenRoughnessMapUv:jt&&_(x.sheenRoughnessMap.channel),specularMapUv:ye&&_(x.specularMap.channel),specularColorMapUv:ce&&_(x.specularColorMap.channel),specularIntensityMapUv:Pe&&_(x.specularIntensityMap.channel),transmissionMapUv:rt&&_(x.transmissionMap.channel),thicknessMapUv:Zt&&_(x.thicknessMap.channel),alphaMapUv:Ot&&_(x.alphaMap.channel),vertexTangents:!!R.attributes.tangent&&(Z||P),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!R.attributes.color&&R.attributes.color.itemSize===4,pointsUvs:E.isPoints===!0&&!!R.attributes.uv&&(Ut||Ot),fog:!!L,useFog:x.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:g,reverseDepthBuffer:J,skinning:E.isSkinnedMesh===!0,morphTargets:R.morphAttributes.position!==void 0,morphNormals:R.morphAttributes.normal!==void 0,morphColors:R.morphAttributes.color!==void 0,morphTargetsCount:N,morphTextureStride:gt,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&b.length>0,shadowMapType:n.shadowMap.type,toneMapping:I,decodeVideoTexture:Ut&&x.map.isVideoTexture===!0&&Ne.getTransfer(x.map.colorSpace)===He,decodeVideoTextureEmissive:Y&&x.emissiveMap.isVideoTexture===!0&&Ne.getTransfer(x.emissiveMap.colorSpace)===He,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===on,flipSided:x.side===Mn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ve&&x.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ve&&x.extensions.multiDraw===!0||Tt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return it.vertexUv1s=h.has(1),it.vertexUv2s=h.has(2),it.vertexUv3s=h.has(3),h.clear(),it}function p(x){let y=[];if(x.shaderID?y.push(x.shaderID):(y.push(x.customVertexShaderID),y.push(x.customFragmentShaderID)),x.defines!==void 0)for(let b in x.defines)y.push(b),y.push(x.defines[b]);return x.isRawShaderMaterial===!1&&(S(y,x),v(y,x),y.push(n.outputColorSpace)),y.push(x.customProgramCacheKey),y.join()}function S(x,y){x.push(y.precision),x.push(y.outputColorSpace),x.push(y.envMapMode),x.push(y.envMapCubeUVHeight),x.push(y.mapUv),x.push(y.alphaMapUv),x.push(y.lightMapUv),x.push(y.aoMapUv),x.push(y.bumpMapUv),x.push(y.normalMapUv),x.push(y.displacementMapUv),x.push(y.emissiveMapUv),x.push(y.metalnessMapUv),x.push(y.roughnessMapUv),x.push(y.anisotropyMapUv),x.push(y.clearcoatMapUv),x.push(y.clearcoatNormalMapUv),x.push(y.clearcoatRoughnessMapUv),x.push(y.iridescenceMapUv),x.push(y.iridescenceThicknessMapUv),x.push(y.sheenColorMapUv),x.push(y.sheenRoughnessMapUv),x.push(y.specularMapUv),x.push(y.specularColorMapUv),x.push(y.specularIntensityMapUv),x.push(y.transmissionMapUv),x.push(y.thicknessMapUv),x.push(y.combine),x.push(y.fogExp2),x.push(y.sizeAttenuation),x.push(y.morphTargetsCount),x.push(y.morphAttributeCount),x.push(y.numDirLights),x.push(y.numPointLights),x.push(y.numSpotLights),x.push(y.numSpotLightMaps),x.push(y.numHemiLights),x.push(y.numRectAreaLights),x.push(y.numDirLightShadows),x.push(y.numPointLightShadows),x.push(y.numSpotLightShadows),x.push(y.numSpotLightShadowsWithMaps),x.push(y.numLightProbes),x.push(y.shadowMapType),x.push(y.toneMapping),x.push(y.numClippingPlanes),x.push(y.numClipIntersection),x.push(y.depthPacking)}function v(x,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),x.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reverseDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),x.push(a.mask)}function M(x){let y=f[x.type],b;if(y){let C=ci[y];b=mh.clone(C.uniforms)}else b=x.uniforms;return b}function D(x,y){let b;for(let C=0,E=d.length;C<E;C++){let L=d[C];if(L.cacheKey===y){b=L,++b.usedTimes;break}}return b===void 0&&(b=new tx(n,y,x,r),d.push(b)),b}function w(x){if(--x.usedTimes===0){let y=d.indexOf(x);d[y]=d[d.length-1],d.pop(),x.destroy()}}function A(x){l.remove(x)}function T(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:M,acquireProgram:D,releaseProgram:w,releaseShaderCache:A,programs:d,dispose:T}}function ix(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function sx(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Vf(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Gf(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(g,u,c,f,_,m){let p=n[t];return p===void 0?(p={id:g.id,object:g,geometry:u,material:c,groupOrder:f,renderOrder:g.renderOrder,z:_,group:m},n[t]=p):(p.id=g.id,p.object=g,p.geometry=u,p.material=c,p.groupOrder=f,p.renderOrder=g.renderOrder,p.z=_,p.group=m),t++,p}function a(g,u,c,f,_,m){let p=o(g,u,c,f,_,m);c.transmission>0?i.push(p):c.transparent===!0?s.push(p):e.push(p)}function l(g,u,c,f,_,m){let p=o(g,u,c,f,_,m);c.transmission>0?i.unshift(p):c.transparent===!0?s.unshift(p):e.unshift(p)}function h(g,u){e.length>1&&e.sort(g||sx),i.length>1&&i.sort(u||Vf),s.length>1&&s.sort(u||Vf)}function d(){for(let g=t,u=n.length;g<u;g++){let c=n[g];if(c.id===null)break;c.id=null,c.object=null,c.geometry=null,c.material=null,c.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:d,sort:h}}function rx(){let n=new WeakMap;function t(i,s){let r=n.get(i),o;return r===void 0?(o=new Gf,n.set(i,[o])):s>=r.length?(o=new Gf,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function ox(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new $,color:new fe};break;case"SpotLight":e={position:new $,direction:new $,color:new fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new $,color:new fe,distance:0,decay:0};break;case"HemisphereLight":e={direction:new $,skyColor:new fe,groundColor:new fe};break;case"RectAreaLight":e={color:new fe,position:new $,halfWidth:new $,halfHeight:new $};break}return n[t.id]=e,e}}}function ax(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var lx=0;function cx(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function hx(n){let t=new ox,e=ax(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new $);let s=new $,r=new ke,o=new ke;function a(h){let d=0,g=0,u=0;for(let x=0;x<9;x++)i.probe[x].set(0,0,0);let c=0,f=0,_=0,m=0,p=0,S=0,v=0,M=0,D=0,w=0,A=0;h.sort(cx);for(let x=0,y=h.length;x<y;x++){let b=h[x],C=b.color,E=b.intensity,L=b.distance,R=b.shadow&&b.shadow.map?b.shadow.map.texture:null;if(b.isAmbientLight)d+=C.r*E,g+=C.g*E,u+=C.b*E;else if(b.isLightProbe){for(let U=0;U<9;U++)i.probe[U].addScaledVector(b.sh.coefficients[U],E);A++}else if(b.isDirectionalLight){let U=t.get(b);if(U.color.copy(b.color).multiplyScalar(b.intensity),b.castShadow){let O=b.shadow,z=e.get(b);z.shadowIntensity=O.intensity,z.shadowBias=O.bias,z.shadowNormalBias=O.normalBias,z.shadowRadius=O.radius,z.shadowMapSize=O.mapSize,i.directionalShadow[c]=z,i.directionalShadowMap[c]=R,i.directionalShadowMatrix[c]=b.shadow.matrix,S++}i.directional[c]=U,c++}else if(b.isSpotLight){let U=t.get(b);U.position.setFromMatrixPosition(b.matrixWorld),U.color.copy(C).multiplyScalar(E),U.distance=L,U.coneCos=Math.cos(b.angle),U.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),U.decay=b.decay,i.spot[_]=U;let O=b.shadow;if(b.map&&(i.spotLightMap[D]=b.map,D++,O.updateMatrices(b),b.castShadow&&w++),i.spotLightMatrix[_]=O.matrix,b.castShadow){let z=e.get(b);z.shadowIntensity=O.intensity,z.shadowBias=O.bias,z.shadowNormalBias=O.normalBias,z.shadowRadius=O.radius,z.shadowMapSize=O.mapSize,i.spotShadow[_]=z,i.spotShadowMap[_]=R,M++}_++}else if(b.isRectAreaLight){let U=t.get(b);U.color.copy(C).multiplyScalar(E),U.halfWidth.set(b.width*.5,0,0),U.halfHeight.set(0,b.height*.5,0),i.rectArea[m]=U,m++}else if(b.isPointLight){let U=t.get(b);if(U.color.copy(b.color).multiplyScalar(b.intensity),U.distance=b.distance,U.decay=b.decay,b.castShadow){let O=b.shadow,z=e.get(b);z.shadowIntensity=O.intensity,z.shadowBias=O.bias,z.shadowNormalBias=O.normalBias,z.shadowRadius=O.radius,z.shadowMapSize=O.mapSize,z.shadowCameraNear=O.camera.near,z.shadowCameraFar=O.camera.far,i.pointShadow[f]=z,i.pointShadowMap[f]=R,i.pointShadowMatrix[f]=b.shadow.matrix,v++}i.point[f]=U,f++}else if(b.isHemisphereLight){let U=t.get(b);U.skyColor.copy(b.color).multiplyScalar(E),U.groundColor.copy(b.groundColor).multiplyScalar(E),i.hemi[p]=U,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Kt.LTC_FLOAT_1,i.rectAreaLTC2=Kt.LTC_FLOAT_2):(i.rectAreaLTC1=Kt.LTC_HALF_1,i.rectAreaLTC2=Kt.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=g,i.ambient[2]=u;let T=i.hash;(T.directionalLength!==c||T.pointLength!==f||T.spotLength!==_||T.rectAreaLength!==m||T.hemiLength!==p||T.numDirectionalShadows!==S||T.numPointShadows!==v||T.numSpotShadows!==M||T.numSpotMaps!==D||T.numLightProbes!==A)&&(i.directional.length=c,i.spot.length=_,i.rectArea.length=m,i.point.length=f,i.hemi.length=p,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=M+D-w,i.spotLightMap.length=D,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=A,T.directionalLength=c,T.pointLength=f,T.spotLength=_,T.rectAreaLength=m,T.hemiLength=p,T.numDirectionalShadows=S,T.numPointShadows=v,T.numSpotShadows=M,T.numSpotMaps=D,T.numLightProbes=A,i.version=lx++)}function l(h,d){let g=0,u=0,c=0,f=0,_=0,m=d.matrixWorldInverse;for(let p=0,S=h.length;p<S;p++){let v=h[p];if(v.isDirectionalLight){let M=i.directional[g];M.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),g++}else if(v.isSpotLight){let M=i.spot[c];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),c++}else if(v.isRectAreaLight){let M=i.rectArea[f];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(m),o.identity(),r.copy(v.matrixWorld),r.premultiply(m),o.extractRotation(r),M.halfWidth.set(v.width*.5,0,0),M.halfHeight.set(0,v.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),f++}else if(v.isPointLight){let M=i.point[u];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(m),u++}else if(v.isHemisphereLight){let M=i.hemi[_];M.direction.setFromMatrixPosition(v.matrixWorld),M.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:i}}function Wf(n){let t=new hx(n),e=[],i=[];function s(d){h.camera=d,e.length=0,i.length=0}function r(d){e.push(d)}function o(d){i.push(d)}function a(){t.setup(e)}function l(d){t.setupView(e,d)}let h={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:h,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function fx(n){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new Wf(n),t.set(s,[a])):r>=o.length?(a=new Wf(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}var Dc=class extends Ci{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=sp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Uc=class extends Ci{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},ux=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,dx=`uniform sampler2D shadow_pass;
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
}`;function px(n,t,e){let i=new zr,s=new zt,r=new zt,o=new nn,a=new Dc({depthPacking:rp}),l=new Uc,h={},d=e.maxTextureSize,g={[qi]:Mn,[Mn]:qi,[on]:on},u=new kn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new zt},radius:{value:4}},vertexShader:ux,fragmentShader:dx}),c=u.clone();c.defines.HORIZONTAL_PASS=1;let f=new Ve;f.setAttribute("position",new Ze(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new ze(f,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=au;let p=this.type;this.render=function(w,A,T){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;let x=n.getRenderTarget(),y=n.getActiveCubeFace(),b=n.getActiveMipmapLevel(),C=n.state;C.setBlending(Wi),C.buffers.color.setClear(1,1,1,1),C.buffers.depth.setTest(!0),C.setScissorTest(!1);let E=p!==bi&&this.type===bi,L=p===bi&&this.type!==bi;for(let R=0,U=w.length;R<U;R++){let O=w[R],z=O.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",O,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);let q=z.getFrameExtents();if(s.multiply(q),r.copy(z.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/q.x),s.x=r.x*q.x,z.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/q.y),s.y=r.y*q.y,z.mapSize.y=r.y)),z.map===null||E===!0||L===!0){let N=this.type!==bi?{minFilter:Ln,magFilter:Ln}:{};z.map!==null&&z.map.dispose(),z.map=new Ai(s.x,s.y,N),z.map.texture.name=O.name+".shadowMap",z.camera.updateProjectionMatrix()}n.setRenderTarget(z.map),n.clear();let X=z.getViewportCount();for(let N=0;N<X;N++){let gt=z.getViewport(N);o.set(r.x*gt.x,r.y*gt.y,r.x*gt.z,r.y*gt.w),C.viewport(o),z.updateMatrices(O,N),i=z.getFrustum(),M(A,T,z.camera,O,this.type)}z.isPointLightShadow!==!0&&this.type===bi&&S(z,T),z.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(x,y,b)};function S(w,A){let T=t.update(_);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,c.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,c.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Ai(s.x,s.y)),u.uniforms.shadow_pass.value=w.map.texture,u.uniforms.resolution.value=w.mapSize,u.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(A,null,T,u,_,null),c.uniforms.shadow_pass.value=w.mapPass.texture,c.uniforms.resolution.value=w.mapSize,c.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(A,null,T,c,_,null)}function v(w,A,T,x){let y=null,b=T.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(b!==void 0)y=b;else if(y=T.isPointLight===!0?l:a,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){let C=y.uuid,E=A.uuid,L=h[C];L===void 0&&(L={},h[C]=L);let R=L[E];R===void 0&&(R=y.clone(),L[E]=R,A.addEventListener("dispose",D)),y=R}if(y.visible=A.visible,y.wireframe=A.wireframe,x===bi?y.side=A.shadowSide!==null?A.shadowSide:A.side:y.side=A.shadowSide!==null?A.shadowSide:g[A.side],y.alphaMap=A.alphaMap,y.alphaTest=A.alphaTest,y.map=A.map,y.clipShadows=A.clipShadows,y.clippingPlanes=A.clippingPlanes,y.clipIntersection=A.clipIntersection,y.displacementMap=A.displacementMap,y.displacementScale=A.displacementScale,y.displacementBias=A.displacementBias,y.wireframeLinewidth=A.wireframeLinewidth,y.linewidth=A.linewidth,T.isPointLight===!0&&y.isMeshDistanceMaterial===!0){let C=n.properties.get(y);C.light=T}return y}function M(w,A,T,x,y){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&y===bi)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,w.matrixWorld);let E=t.update(w),L=w.material;if(Array.isArray(L)){let R=E.groups;for(let U=0,O=R.length;U<O;U++){let z=R[U],q=L[z.materialIndex];if(q&&q.visible){let X=v(w,q,x,y);w.onBeforeShadow(n,w,A,T,E,X,z),n.renderBufferDirect(T,null,E,X,w,z),w.onAfterShadow(n,w,A,T,E,X,z)}}}else if(L.visible){let R=v(w,L,x,y);w.onBeforeShadow(n,w,A,T,E,R,null),n.renderBufferDirect(T,null,E,R,w,null),w.onAfterShadow(n,w,A,T,E,R,null)}}let C=w.children;for(let E=0,L=C.length;E<L;E++)M(C[E],A,T,x,y)}function D(w){w.target.removeEventListener("dispose",D);for(let T in h){let x=h[T],y=w.target.uuid;y in x&&(x[y].dispose(),delete x[y])}}}var mx={[Bl]:zl,[Hl]:Gl,[$l]:Wl,[Ks]:Vl,[zl]:Bl,[Gl]:Hl,[Wl]:$l,[Vl]:Ks};function gx(n,t){function e(){let rt=!1,Zt=new nn,It=null,Ot=new nn(0,0,0,0);return{setMask:function(ee){It!==ee&&!rt&&(n.colorMask(ee,ee,ee,ee),It=ee)},setLocked:function(ee){rt=ee},setClear:function(ee,Qt,ve,I,it){it===!0&&(ee*=I,Qt*=I,ve*=I),Zt.set(ee,Qt,ve,I),Ot.equals(Zt)===!1&&(n.clearColor(ee,Qt,ve,I),Ot.copy(Zt))},reset:function(){rt=!1,It=null,Ot.set(-1,0,0,0)}}}function i(){let rt=!1,Zt=!1,It=null,Ot=null,ee=null;return{setReversed:function(Qt){if(Zt!==Qt){let ve=t.get("EXT_clip_control");Zt?ve.clipControlEXT(ve.LOWER_LEFT_EXT,ve.ZERO_TO_ONE_EXT):ve.clipControlEXT(ve.LOWER_LEFT_EXT,ve.NEGATIVE_ONE_TO_ONE_EXT);let I=ee;ee=null,this.setClear(I)}Zt=Qt},getReversed:function(){return Zt},setTest:function(Qt){Qt?G(n.DEPTH_TEST):J(n.DEPTH_TEST)},setMask:function(Qt){It!==Qt&&!rt&&(n.depthMask(Qt),It=Qt)},setFunc:function(Qt){if(Zt&&(Qt=mx[Qt]),Ot!==Qt){switch(Qt){case Bl:n.depthFunc(n.NEVER);break;case zl:n.depthFunc(n.ALWAYS);break;case Hl:n.depthFunc(n.LESS);break;case Ks:n.depthFunc(n.LEQUAL);break;case $l:n.depthFunc(n.EQUAL);break;case Vl:n.depthFunc(n.GEQUAL);break;case Gl:n.depthFunc(n.GREATER);break;case Wl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Ot=Qt}},setLocked:function(Qt){rt=Qt},setClear:function(Qt){ee!==Qt&&(Zt&&(Qt=1-Qt),n.clearDepth(Qt),ee=Qt)},reset:function(){rt=!1,It=null,Ot=null,ee=null,Zt=!1}}}function s(){let rt=!1,Zt=null,It=null,Ot=null,ee=null,Qt=null,ve=null,I=null,it=null;return{setTest:function(nt){rt||(nt?G(n.STENCIL_TEST):J(n.STENCIL_TEST))},setMask:function(nt){Zt!==nt&&!rt&&(n.stencilMask(nt),Zt=nt)},setFunc:function(nt,ft,Mt){(It!==nt||Ot!==ft||ee!==Mt)&&(n.stencilFunc(nt,ft,Mt),It=nt,Ot=ft,ee=Mt)},setOp:function(nt,ft,Mt){(Qt!==nt||ve!==ft||I!==Mt)&&(n.stencilOp(nt,ft,Mt),Qt=nt,ve=ft,I=Mt)},setLocked:function(nt){rt=nt},setClear:function(nt){it!==nt&&(n.clearStencil(nt),it=nt)},reset:function(){rt=!1,Zt=null,It=null,Ot=null,ee=null,Qt=null,ve=null,I=null,it=null}}}let r=new e,o=new i,a=new s,l=new WeakMap,h=new WeakMap,d={},g={},u=new WeakMap,c=[],f=null,_=!1,m=null,p=null,S=null,v=null,M=null,D=null,w=null,A=new fe(0,0,0),T=0,x=!1,y=null,b=null,C=null,E=null,L=null,R=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),U=!1,O=0,z=n.getParameter(n.VERSION);z.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(z)[1]),U=O>=1):z.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),U=O>=2);let q=null,X={},N=n.getParameter(n.SCISSOR_BOX),gt=n.getParameter(n.VIEWPORT),Rt=new nn().fromArray(N),k=new nn().fromArray(gt);function W(rt,Zt,It,Ot){let ee=new Uint8Array(4),Qt=n.createTexture();n.bindTexture(rt,Qt),n.texParameteri(rt,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(rt,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ve=0;ve<It;ve++)rt===n.TEXTURE_3D||rt===n.TEXTURE_2D_ARRAY?n.texImage3D(Zt,0,n.RGBA,1,1,Ot,0,n.RGBA,n.UNSIGNED_BYTE,ee):n.texImage2D(Zt+ve,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ee);return Qt}let et={};et[n.TEXTURE_2D]=W(n.TEXTURE_2D,n.TEXTURE_2D,1),et[n.TEXTURE_CUBE_MAP]=W(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),et[n.TEXTURE_2D_ARRAY]=W(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),et[n.TEXTURE_3D]=W(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),G(n.DEPTH_TEST),o.setFunc(Ks),K(!1),Z(Xh),G(n.CULL_FACE),H(Wi);function G(rt){d[rt]!==!0&&(n.enable(rt),d[rt]=!0)}function J(rt){d[rt]!==!1&&(n.disable(rt),d[rt]=!1)}function ct(rt,Zt){return g[rt]!==Zt?(n.bindFramebuffer(rt,Zt),g[rt]=Zt,rt===n.DRAW_FRAMEBUFFER&&(g[n.FRAMEBUFFER]=Zt),rt===n.FRAMEBUFFER&&(g[n.DRAW_FRAMEBUFFER]=Zt),!0):!1}function Tt(rt,Zt){let It=c,Ot=!1;if(rt){It=u.get(Zt),It===void 0&&(It=[],u.set(Zt,It));let ee=rt.textures;if(It.length!==ee.length||It[0]!==n.COLOR_ATTACHMENT0){for(let Qt=0,ve=ee.length;Qt<ve;Qt++)It[Qt]=n.COLOR_ATTACHMENT0+Qt;It.length=ee.length,Ot=!0}}else It[0]!==n.BACK&&(It[0]=n.BACK,Ot=!0);Ot&&n.drawBuffers(It)}function Ut(rt){return f!==rt?(n.useProgram(rt),f=rt,!0):!1}let st={[ps]:n.FUNC_ADD,[Pd]:n.FUNC_SUBTRACT,[Ld]:n.FUNC_REVERSE_SUBTRACT};st[kd]=n.MIN,st[Dd]=n.MAX;let pt={[Ud]:n.ZERO,[Nd]:n.ONE,[Od]:n.SRC_COLOR,[Ol]:n.SRC_ALPHA,[Vd]:n.SRC_ALPHA_SATURATE,[Hd]:n.DST_COLOR,[Bd]:n.DST_ALPHA,[Fd]:n.ONE_MINUS_SRC_COLOR,[Fl]:n.ONE_MINUS_SRC_ALPHA,[$d]:n.ONE_MINUS_DST_COLOR,[zd]:n.ONE_MINUS_DST_ALPHA,[Gd]:n.CONSTANT_COLOR,[Wd]:n.ONE_MINUS_CONSTANT_COLOR,[Xd]:n.CONSTANT_ALPHA,[qd]:n.ONE_MINUS_CONSTANT_ALPHA};function H(rt,Zt,It,Ot,ee,Qt,ve,I,it,nt){if(rt===Wi){_===!0&&(J(n.BLEND),_=!1);return}if(_===!1&&(G(n.BLEND),_=!0),rt!==Id){if(rt!==m||nt!==x){if((p!==ps||M!==ps)&&(n.blendEquation(n.FUNC_ADD),p=ps,M=ps),nt)switch(rt){case Ys:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case qh:n.blendFunc(n.ONE,n.ONE);break;case Yh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Zh:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",rt);break}else switch(rt){case Ys:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case qh:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Yh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Zh:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",rt);break}S=null,v=null,D=null,w=null,A.set(0,0,0),T=0,m=rt,x=nt}return}ee=ee||Zt,Qt=Qt||It,ve=ve||Ot,(Zt!==p||ee!==M)&&(n.blendEquationSeparate(st[Zt],st[ee]),p=Zt,M=ee),(It!==S||Ot!==v||Qt!==D||ve!==w)&&(n.blendFuncSeparate(pt[It],pt[Ot],pt[Qt],pt[ve]),S=It,v=Ot,D=Qt,w=ve),(I.equals(A)===!1||it!==T)&&(n.blendColor(I.r,I.g,I.b,it),A.copy(I),T=it),m=rt,x=!1}function Vt(rt,Zt){rt.side===on?J(n.CULL_FACE):G(n.CULL_FACE);let It=rt.side===Mn;Zt&&(It=!It),K(It),rt.blending===Ys&&rt.transparent===!1?H(Wi):H(rt.blending,rt.blendEquation,rt.blendSrc,rt.blendDst,rt.blendEquationAlpha,rt.blendSrcAlpha,rt.blendDstAlpha,rt.blendColor,rt.blendAlpha,rt.premultipliedAlpha),o.setFunc(rt.depthFunc),o.setTest(rt.depthTest),o.setMask(rt.depthWrite),r.setMask(rt.colorWrite);let Ot=rt.stencilWrite;a.setTest(Ot),Ot&&(a.setMask(rt.stencilWriteMask),a.setFunc(rt.stencilFunc,rt.stencilRef,rt.stencilFuncMask),a.setOp(rt.stencilFail,rt.stencilZFail,rt.stencilZPass)),Y(rt.polygonOffset,rt.polygonOffsetFactor,rt.polygonOffsetUnits),rt.alphaToCoverage===!0?G(n.SAMPLE_ALPHA_TO_COVERAGE):J(n.SAMPLE_ALPHA_TO_COVERAGE)}function K(rt){y!==rt&&(rt?n.frontFace(n.CW):n.frontFace(n.CCW),y=rt)}function Z(rt){rt!==Rd?(G(n.CULL_FACE),rt!==b&&(rt===Xh?n.cullFace(n.BACK):rt===Cd?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):J(n.CULL_FACE),b=rt}function yt(rt){rt!==C&&(U&&n.lineWidth(rt),C=rt)}function Y(rt,Zt,It){rt?(G(n.POLYGON_OFFSET_FILL),(E!==Zt||L!==It)&&(n.polygonOffset(Zt,It),E=Zt,L=It)):J(n.POLYGON_OFFSET_FILL)}function Lt(rt){rt?G(n.SCISSOR_TEST):J(n.SCISSOR_TEST)}function B(rt){rt===void 0&&(rt=n.TEXTURE0+R-1),q!==rt&&(n.activeTexture(rt),q=rt)}function P(rt,Zt,It){It===void 0&&(q===null?It=n.TEXTURE0+R-1:It=q);let Ot=X[It];Ot===void 0&&(Ot={type:void 0,texture:void 0},X[It]=Ot),(Ot.type!==rt||Ot.texture!==Zt)&&(q!==It&&(n.activeTexture(It),q=It),n.bindTexture(rt,Zt||et[rt]),Ot.type=rt,Ot.texture=Zt)}function ht(){let rt=X[q];rt!==void 0&&rt.type!==void 0&&(n.bindTexture(rt.type,null),rt.type=void 0,rt.texture=void 0)}function _t(){try{n.compressedTexImage2D.apply(n,arguments)}catch(rt){console.error("THREE.WebGLState:",rt)}}function Pt(){try{n.compressedTexImage3D.apply(n,arguments)}catch(rt){console.error("THREE.WebGLState:",rt)}}function j(){try{n.texSubImage2D.apply(n,arguments)}catch(rt){console.error("THREE.WebGLState:",rt)}}function at(){try{n.texSubImage3D.apply(n,arguments)}catch(rt){console.error("THREE.WebGLState:",rt)}}function lt(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(rt){console.error("THREE.WebGLState:",rt)}}function xt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(rt){console.error("THREE.WebGLState:",rt)}}function Ct(){try{n.texStorage2D.apply(n,arguments)}catch(rt){console.error("THREE.WebGLState:",rt)}}function St(){try{n.texStorage3D.apply(n,arguments)}catch(rt){console.error("THREE.WebGLState:",rt)}}function Nt(){try{n.texImage2D.apply(n,arguments)}catch(rt){console.error("THREE.WebGLState:",rt)}}function Yt(){try{n.texImage3D.apply(n,arguments)}catch(rt){console.error("THREE.WebGLState:",rt)}}function re(rt){Rt.equals(rt)===!1&&(n.scissor(rt.x,rt.y,rt.z,rt.w),Rt.copy(rt))}function jt(rt){k.equals(rt)===!1&&(n.viewport(rt.x,rt.y,rt.z,rt.w),k.copy(rt))}function ye(rt,Zt){let It=h.get(Zt);It===void 0&&(It=new WeakMap,h.set(Zt,It));let Ot=It.get(rt);Ot===void 0&&(Ot=n.getUniformBlockIndex(Zt,rt.name),It.set(rt,Ot))}function ce(rt,Zt){let Ot=h.get(Zt).get(rt);l.get(Zt)!==Ot&&(n.uniformBlockBinding(Zt,Ot,rt.__bindingPointIndex),l.set(Zt,Ot))}function Pe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},q=null,X={},g={},u=new WeakMap,c=[],f=null,_=!1,m=null,p=null,S=null,v=null,M=null,D=null,w=null,A=new fe(0,0,0),T=0,x=!1,y=null,b=null,C=null,E=null,L=null,Rt.set(0,0,n.canvas.width,n.canvas.height),k.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:G,disable:J,bindFramebuffer:ct,drawBuffers:Tt,useProgram:Ut,setBlending:H,setMaterial:Vt,setFlipSided:K,setCullFace:Z,setLineWidth:yt,setPolygonOffset:Y,setScissorTest:Lt,activeTexture:B,bindTexture:P,unbindTexture:ht,compressedTexImage2D:_t,compressedTexImage3D:Pt,texImage2D:Nt,texImage3D:Yt,updateUBOMapping:ye,uniformBlockBinding:ce,texStorage2D:Ct,texStorage3D:St,texSubImage2D:j,texSubImage3D:at,compressedTexSubImage2D:lt,compressedTexSubImage3D:xt,scissor:re,viewport:jt,reset:Pe}}function Xf(n,t,e,i){let s=yx(i);switch(e){case du:return n*t;case mu:return n*t;case gu:return n*t*2;case hh:return n*t/s.components*s.byteLength;case fh:return n*t/s.components*s.byteLength;case yu:return n*t*2/s.components*s.byteLength;case uh:return n*t*2/s.components*s.byteLength;case pu:return n*t*3/s.components*s.byteLength;case Hn:return n*t*4/s.components*s.byteLength;case dh:return n*t*4/s.components*s.byteLength;case Zo:case Jo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case jo:case Ko:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Jl:case Kl:return Math.max(n,16)*Math.max(t,8)/4;case Zl:case jl:return Math.max(n,8)*Math.max(t,8)/2;case Ql:case tc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case ec:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case nc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case ic:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case sc:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case rc:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case oc:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case ac:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case lc:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case cc:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case hc:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case fc:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case uc:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case dc:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case pc:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case mc:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Qo:case gc:case yc:return Math.ceil(n/4)*Math.ceil(t/4)*16;case xu:case xc:return Math.ceil(n/4)*Math.ceil(t/4)*8;case vc:case _c:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function yx(n){switch(n){case Ti:case hu:return{byteLength:1,components:1};case Fr:case fu:case Kr:return{byteLength:2,components:1};case lh:case ch:return{byteLength:2,components:4};case vs:case ah:case fi:return{byteLength:4,components:1};case uu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function xx(n,t,e,i,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new zt,d=new WeakMap,g,u=new WeakMap,c=!1;try{c=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function f(B,P){return c?new OffscreenCanvas(B,P):na("canvas")}function _(B,P,ht){let _t=1,Pt=Lt(B);if((Pt.width>ht||Pt.height>ht)&&(_t=ht/Math.max(Pt.width,Pt.height)),_t<1)if(typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&B instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&B instanceof ImageBitmap||typeof VideoFrame<"u"&&B instanceof VideoFrame){let j=Math.floor(_t*Pt.width),at=Math.floor(_t*Pt.height);g===void 0&&(g=f(j,at));let lt=P?f(j,at):g;return lt.width=j,lt.height=at,lt.getContext("2d").drawImage(B,0,0,j,at),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Pt.width+"x"+Pt.height+") to ("+j+"x"+at+")."),lt}else return"data"in B&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Pt.width+"x"+Pt.height+")."),B;return B}function m(B){return B.generateMipmaps}function p(B){n.generateMipmap(B)}function S(B){return B.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:B.isWebGL3DRenderTarget?n.TEXTURE_3D:B.isWebGLArrayRenderTarget||B.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function v(B,P,ht,_t,Pt=!1){if(B!==null){if(n[B]!==void 0)return n[B];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+B+"'")}let j=P;if(P===n.RED&&(ht===n.FLOAT&&(j=n.R32F),ht===n.HALF_FLOAT&&(j=n.R16F),ht===n.UNSIGNED_BYTE&&(j=n.R8)),P===n.RED_INTEGER&&(ht===n.UNSIGNED_BYTE&&(j=n.R8UI),ht===n.UNSIGNED_SHORT&&(j=n.R16UI),ht===n.UNSIGNED_INT&&(j=n.R32UI),ht===n.BYTE&&(j=n.R8I),ht===n.SHORT&&(j=n.R16I),ht===n.INT&&(j=n.R32I)),P===n.RG&&(ht===n.FLOAT&&(j=n.RG32F),ht===n.HALF_FLOAT&&(j=n.RG16F),ht===n.UNSIGNED_BYTE&&(j=n.RG8)),P===n.RG_INTEGER&&(ht===n.UNSIGNED_BYTE&&(j=n.RG8UI),ht===n.UNSIGNED_SHORT&&(j=n.RG16UI),ht===n.UNSIGNED_INT&&(j=n.RG32UI),ht===n.BYTE&&(j=n.RG8I),ht===n.SHORT&&(j=n.RG16I),ht===n.INT&&(j=n.RG32I)),P===n.RGB_INTEGER&&(ht===n.UNSIGNED_BYTE&&(j=n.RGB8UI),ht===n.UNSIGNED_SHORT&&(j=n.RGB16UI),ht===n.UNSIGNED_INT&&(j=n.RGB32UI),ht===n.BYTE&&(j=n.RGB8I),ht===n.SHORT&&(j=n.RGB16I),ht===n.INT&&(j=n.RGB32I)),P===n.RGBA_INTEGER&&(ht===n.UNSIGNED_BYTE&&(j=n.RGBA8UI),ht===n.UNSIGNED_SHORT&&(j=n.RGBA16UI),ht===n.UNSIGNED_INT&&(j=n.RGBA32UI),ht===n.BYTE&&(j=n.RGBA8I),ht===n.SHORT&&(j=n.RGBA16I),ht===n.INT&&(j=n.RGBA32I)),P===n.RGB&&ht===n.UNSIGNED_INT_5_9_9_9_REV&&(j=n.RGB9_E5),P===n.RGBA){let at=Pt?Na:Ne.getTransfer(_t);ht===n.FLOAT&&(j=n.RGBA32F),ht===n.HALF_FLOAT&&(j=n.RGBA16F),ht===n.UNSIGNED_BYTE&&(j=at===He?n.SRGB8_ALPHA8:n.RGBA8),ht===n.UNSIGNED_SHORT_4_4_4_4&&(j=n.RGBA4),ht===n.UNSIGNED_SHORT_5_5_5_1&&(j=n.RGB5_A1)}return(j===n.R16F||j===n.R32F||j===n.RG16F||j===n.RG32F||j===n.RGBA16F||j===n.RGBA32F)&&t.get("EXT_color_buffer_float"),j}function M(B,P){let ht;return B?P===null||P===vs||P===er?ht=n.DEPTH24_STENCIL8:P===fi?ht=n.DEPTH32F_STENCIL8:P===Fr&&(ht=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):P===null||P===vs||P===er?ht=n.DEPTH_COMPONENT24:P===fi?ht=n.DEPTH_COMPONENT32F:P===Fr&&(ht=n.DEPTH_COMPONENT16),ht}function D(B,P){return m(B)===!0||B.isFramebufferTexture&&B.minFilter!==Ln&&B.minFilter!==hi?Math.log2(Math.max(P.width,P.height))+1:B.mipmaps!==void 0&&B.mipmaps.length>0?B.mipmaps.length:B.isCompressedTexture&&Array.isArray(B.image)?P.mipmaps.length:1}function w(B){let P=B.target;P.removeEventListener("dispose",w),T(P),P.isVideoTexture&&d.delete(P)}function A(B){let P=B.target;P.removeEventListener("dispose",A),y(P)}function T(B){let P=i.get(B);if(P.__webglInit===void 0)return;let ht=B.source,_t=u.get(ht);if(_t){let Pt=_t[P.__cacheKey];Pt.usedTimes--,Pt.usedTimes===0&&x(B),Object.keys(_t).length===0&&u.delete(ht)}i.remove(B)}function x(B){let P=i.get(B);n.deleteTexture(P.__webglTexture);let ht=B.source,_t=u.get(ht);delete _t[P.__cacheKey],o.memory.textures--}function y(B){let P=i.get(B);if(B.depthTexture&&(B.depthTexture.dispose(),i.remove(B.depthTexture)),B.isWebGLCubeRenderTarget)for(let _t=0;_t<6;_t++){if(Array.isArray(P.__webglFramebuffer[_t]))for(let Pt=0;Pt<P.__webglFramebuffer[_t].length;Pt++)n.deleteFramebuffer(P.__webglFramebuffer[_t][Pt]);else n.deleteFramebuffer(P.__webglFramebuffer[_t]);P.__webglDepthbuffer&&n.deleteRenderbuffer(P.__webglDepthbuffer[_t])}else{if(Array.isArray(P.__webglFramebuffer))for(let _t=0;_t<P.__webglFramebuffer.length;_t++)n.deleteFramebuffer(P.__webglFramebuffer[_t]);else n.deleteFramebuffer(P.__webglFramebuffer);if(P.__webglDepthbuffer&&n.deleteRenderbuffer(P.__webglDepthbuffer),P.__webglMultisampledFramebuffer&&n.deleteFramebuffer(P.__webglMultisampledFramebuffer),P.__webglColorRenderbuffer)for(let _t=0;_t<P.__webglColorRenderbuffer.length;_t++)P.__webglColorRenderbuffer[_t]&&n.deleteRenderbuffer(P.__webglColorRenderbuffer[_t]);P.__webglDepthRenderbuffer&&n.deleteRenderbuffer(P.__webglDepthRenderbuffer)}let ht=B.textures;for(let _t=0,Pt=ht.length;_t<Pt;_t++){let j=i.get(ht[_t]);j.__webglTexture&&(n.deleteTexture(j.__webglTexture),o.memory.textures--),i.remove(ht[_t])}i.remove(B)}let b=0;function C(){b=0}function E(){let B=b;return B>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+B+" texture units while this GPU supports only "+s.maxTextures),b+=1,B}function L(B){let P=[];return P.push(B.wrapS),P.push(B.wrapT),P.push(B.wrapR||0),P.push(B.magFilter),P.push(B.minFilter),P.push(B.anisotropy),P.push(B.internalFormat),P.push(B.format),P.push(B.type),P.push(B.generateMipmaps),P.push(B.premultiplyAlpha),P.push(B.flipY),P.push(B.unpackAlignment),P.push(B.colorSpace),P.join()}function R(B,P){let ht=i.get(B);if(B.isVideoTexture&&yt(B),B.isRenderTargetTexture===!1&&B.version>0&&ht.__version!==B.version){let _t=B.image;if(_t===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(_t.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{k(ht,B,P);return}}e.bindTexture(n.TEXTURE_2D,ht.__webglTexture,n.TEXTURE0+P)}function U(B,P){let ht=i.get(B);if(B.version>0&&ht.__version!==B.version){k(ht,B,P);return}e.bindTexture(n.TEXTURE_2D_ARRAY,ht.__webglTexture,n.TEXTURE0+P)}function O(B,P){let ht=i.get(B);if(B.version>0&&ht.__version!==B.version){k(ht,B,P);return}e.bindTexture(n.TEXTURE_3D,ht.__webglTexture,n.TEXTURE0+P)}function z(B,P){let ht=i.get(B);if(B.version>0&&ht.__version!==B.version){W(ht,B,P);return}e.bindTexture(n.TEXTURE_CUBE_MAP,ht.__webglTexture,n.TEXTURE0+P)}let q={[xs]:n.REPEAT,[gs]:n.CLAMP_TO_EDGE,[Yl]:n.MIRRORED_REPEAT},X={[Ln]:n.NEAREST,[ip]:n.NEAREST_MIPMAP_NEAREST,[xo]:n.NEAREST_MIPMAP_LINEAR,[hi]:n.LINEAR,[il]:n.LINEAR_MIPMAP_NEAREST,[ys]:n.LINEAR_MIPMAP_LINEAR},N={[ap]:n.NEVER,[dp]:n.ALWAYS,[lp]:n.LESS,[_u]:n.LEQUAL,[cp]:n.EQUAL,[up]:n.GEQUAL,[hp]:n.GREATER,[fp]:n.NOTEQUAL};function gt(B,P){if(P.type===fi&&t.has("OES_texture_float_linear")===!1&&(P.magFilter===hi||P.magFilter===il||P.magFilter===xo||P.magFilter===ys||P.minFilter===hi||P.minFilter===il||P.minFilter===xo||P.minFilter===ys)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(B,n.TEXTURE_WRAP_S,q[P.wrapS]),n.texParameteri(B,n.TEXTURE_WRAP_T,q[P.wrapT]),(B===n.TEXTURE_3D||B===n.TEXTURE_2D_ARRAY)&&n.texParameteri(B,n.TEXTURE_WRAP_R,q[P.wrapR]),n.texParameteri(B,n.TEXTURE_MAG_FILTER,X[P.magFilter]),n.texParameteri(B,n.TEXTURE_MIN_FILTER,X[P.minFilter]),P.compareFunction&&(n.texParameteri(B,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(B,n.TEXTURE_COMPARE_FUNC,N[P.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(P.magFilter===Ln||P.minFilter!==xo&&P.minFilter!==ys||P.type===fi&&t.has("OES_texture_float_linear")===!1)return;if(P.anisotropy>1||i.get(P).__currentAnisotropy){let ht=t.get("EXT_texture_filter_anisotropic");n.texParameterf(B,ht.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(P.anisotropy,s.getMaxAnisotropy())),i.get(P).__currentAnisotropy=P.anisotropy}}}function Rt(B,P){let ht=!1;B.__webglInit===void 0&&(B.__webglInit=!0,P.addEventListener("dispose",w));let _t=P.source,Pt=u.get(_t);Pt===void 0&&(Pt={},u.set(_t,Pt));let j=L(P);if(j!==B.__cacheKey){Pt[j]===void 0&&(Pt[j]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,ht=!0),Pt[j].usedTimes++;let at=Pt[B.__cacheKey];at!==void 0&&(Pt[B.__cacheKey].usedTimes--,at.usedTimes===0&&x(P)),B.__cacheKey=j,B.__webglTexture=Pt[j].texture}return ht}function k(B,P,ht){let _t=n.TEXTURE_2D;(P.isDataArrayTexture||P.isCompressedArrayTexture)&&(_t=n.TEXTURE_2D_ARRAY),P.isData3DTexture&&(_t=n.TEXTURE_3D);let Pt=Rt(B,P),j=P.source;e.bindTexture(_t,B.__webglTexture,n.TEXTURE0+ht);let at=i.get(j);if(j.version!==at.__version||Pt===!0){e.activeTexture(n.TEXTURE0+ht);let lt=Ne.getPrimaries(Ne.workingColorSpace),xt=P.colorSpace===Vi?null:Ne.getPrimaries(P.colorSpace),Ct=P.colorSpace===Vi||lt===xt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,P.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,P.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ct);let St=_(P.image,!1,s.maxTextureSize);St=Y(P,St);let Nt=r.convert(P.format,P.colorSpace),Yt=r.convert(P.type),re=v(P.internalFormat,Nt,Yt,P.colorSpace,P.isVideoTexture);gt(_t,P);let jt,ye=P.mipmaps,ce=P.isVideoTexture!==!0,Pe=at.__version===void 0||Pt===!0,rt=j.dataReady,Zt=D(P,St);if(P.isDepthTexture)re=M(P.format===nr,P.type),Pe&&(ce?e.texStorage2D(n.TEXTURE_2D,1,re,St.width,St.height):e.texImage2D(n.TEXTURE_2D,0,re,St.width,St.height,0,Nt,Yt,null));else if(P.isDataTexture)if(ye.length>0){ce&&Pe&&e.texStorage2D(n.TEXTURE_2D,Zt,re,ye[0].width,ye[0].height);for(let It=0,Ot=ye.length;It<Ot;It++)jt=ye[It],ce?rt&&e.texSubImage2D(n.TEXTURE_2D,It,0,0,jt.width,jt.height,Nt,Yt,jt.data):e.texImage2D(n.TEXTURE_2D,It,re,jt.width,jt.height,0,Nt,Yt,jt.data);P.generateMipmaps=!1}else ce?(Pe&&e.texStorage2D(n.TEXTURE_2D,Zt,re,St.width,St.height),rt&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,St.width,St.height,Nt,Yt,St.data)):e.texImage2D(n.TEXTURE_2D,0,re,St.width,St.height,0,Nt,Yt,St.data);else if(P.isCompressedTexture)if(P.isCompressedArrayTexture){ce&&Pe&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Zt,re,ye[0].width,ye[0].height,St.depth);for(let It=0,Ot=ye.length;It<Ot;It++)if(jt=ye[It],P.format!==Hn)if(Nt!==null)if(ce){if(rt)if(P.layerUpdates.size>0){let ee=Xf(jt.width,jt.height,P.format,P.type);for(let Qt of P.layerUpdates){let ve=jt.data.subarray(Qt*ee/jt.data.BYTES_PER_ELEMENT,(Qt+1)*ee/jt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,It,0,0,Qt,jt.width,jt.height,1,Nt,ve)}P.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,It,0,0,0,jt.width,jt.height,St.depth,Nt,jt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,It,re,jt.width,jt.height,St.depth,0,jt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ce?rt&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,It,0,0,0,jt.width,jt.height,St.depth,Nt,Yt,jt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,It,re,jt.width,jt.height,St.depth,0,Nt,Yt,jt.data)}else{ce&&Pe&&e.texStorage2D(n.TEXTURE_2D,Zt,re,ye[0].width,ye[0].height);for(let It=0,Ot=ye.length;It<Ot;It++)jt=ye[It],P.format!==Hn?Nt!==null?ce?rt&&e.compressedTexSubImage2D(n.TEXTURE_2D,It,0,0,jt.width,jt.height,Nt,jt.data):e.compressedTexImage2D(n.TEXTURE_2D,It,re,jt.width,jt.height,0,jt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ce?rt&&e.texSubImage2D(n.TEXTURE_2D,It,0,0,jt.width,jt.height,Nt,Yt,jt.data):e.texImage2D(n.TEXTURE_2D,It,re,jt.width,jt.height,0,Nt,Yt,jt.data)}else if(P.isDataArrayTexture)if(ce){if(Pe&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Zt,re,St.width,St.height,St.depth),rt)if(P.layerUpdates.size>0){let It=Xf(St.width,St.height,P.format,P.type);for(let Ot of P.layerUpdates){let ee=St.data.subarray(Ot*It/St.data.BYTES_PER_ELEMENT,(Ot+1)*It/St.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Ot,St.width,St.height,1,Nt,Yt,ee)}P.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,St.width,St.height,St.depth,Nt,Yt,St.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,re,St.width,St.height,St.depth,0,Nt,Yt,St.data);else if(P.isData3DTexture)ce?(Pe&&e.texStorage3D(n.TEXTURE_3D,Zt,re,St.width,St.height,St.depth),rt&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,St.width,St.height,St.depth,Nt,Yt,St.data)):e.texImage3D(n.TEXTURE_3D,0,re,St.width,St.height,St.depth,0,Nt,Yt,St.data);else if(P.isFramebufferTexture){if(Pe)if(ce)e.texStorage2D(n.TEXTURE_2D,Zt,re,St.width,St.height);else{let It=St.width,Ot=St.height;for(let ee=0;ee<Zt;ee++)e.texImage2D(n.TEXTURE_2D,ee,re,It,Ot,0,Nt,Yt,null),It>>=1,Ot>>=1}}else if(ye.length>0){if(ce&&Pe){let It=Lt(ye[0]);e.texStorage2D(n.TEXTURE_2D,Zt,re,It.width,It.height)}for(let It=0,Ot=ye.length;It<Ot;It++)jt=ye[It],ce?rt&&e.texSubImage2D(n.TEXTURE_2D,It,0,0,Nt,Yt,jt):e.texImage2D(n.TEXTURE_2D,It,re,Nt,Yt,jt);P.generateMipmaps=!1}else if(ce){if(Pe){let It=Lt(St);e.texStorage2D(n.TEXTURE_2D,Zt,re,It.width,It.height)}rt&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,Nt,Yt,St)}else e.texImage2D(n.TEXTURE_2D,0,re,Nt,Yt,St);m(P)&&p(_t),at.__version=j.version,P.onUpdate&&P.onUpdate(P)}B.__version=P.version}function W(B,P,ht){if(P.image.length!==6)return;let _t=Rt(B,P),Pt=P.source;e.bindTexture(n.TEXTURE_CUBE_MAP,B.__webglTexture,n.TEXTURE0+ht);let j=i.get(Pt);if(Pt.version!==j.__version||_t===!0){e.activeTexture(n.TEXTURE0+ht);let at=Ne.getPrimaries(Ne.workingColorSpace),lt=P.colorSpace===Vi?null:Ne.getPrimaries(P.colorSpace),xt=P.colorSpace===Vi||at===lt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,P.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,P.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt);let Ct=P.isCompressedTexture||P.image[0].isCompressedTexture,St=P.image[0]&&P.image[0].isDataTexture,Nt=[];for(let Ot=0;Ot<6;Ot++)!Ct&&!St?Nt[Ot]=_(P.image[Ot],!0,s.maxCubemapSize):Nt[Ot]=St?P.image[Ot].image:P.image[Ot],Nt[Ot]=Y(P,Nt[Ot]);let Yt=Nt[0],re=r.convert(P.format,P.colorSpace),jt=r.convert(P.type),ye=v(P.internalFormat,re,jt,P.colorSpace),ce=P.isVideoTexture!==!0,Pe=j.__version===void 0||_t===!0,rt=Pt.dataReady,Zt=D(P,Yt);gt(n.TEXTURE_CUBE_MAP,P);let It;if(Ct){ce&&Pe&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Zt,ye,Yt.width,Yt.height);for(let Ot=0;Ot<6;Ot++){It=Nt[Ot].mipmaps;for(let ee=0;ee<It.length;ee++){let Qt=It[ee];P.format!==Hn?re!==null?ce?rt&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ot,ee,0,0,Qt.width,Qt.height,re,Qt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ot,ee,ye,Qt.width,Qt.height,0,Qt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ce?rt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ot,ee,0,0,Qt.width,Qt.height,re,jt,Qt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ot,ee,ye,Qt.width,Qt.height,0,re,jt,Qt.data)}}}else{if(It=P.mipmaps,ce&&Pe){It.length>0&&Zt++;let Ot=Lt(Nt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,Zt,ye,Ot.width,Ot.height)}for(let Ot=0;Ot<6;Ot++)if(St){ce?rt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ot,0,0,0,Nt[Ot].width,Nt[Ot].height,re,jt,Nt[Ot].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ot,0,ye,Nt[Ot].width,Nt[Ot].height,0,re,jt,Nt[Ot].data);for(let ee=0;ee<It.length;ee++){let ve=It[ee].image[Ot].image;ce?rt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ot,ee+1,0,0,ve.width,ve.height,re,jt,ve.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ot,ee+1,ye,ve.width,ve.height,0,re,jt,ve.data)}}else{ce?rt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ot,0,0,0,re,jt,Nt[Ot]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ot,0,ye,re,jt,Nt[Ot]);for(let ee=0;ee<It.length;ee++){let Qt=It[ee];ce?rt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ot,ee+1,0,0,re,jt,Qt.image[Ot]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ot,ee+1,ye,re,jt,Qt.image[Ot])}}}m(P)&&p(n.TEXTURE_CUBE_MAP),j.__version=Pt.version,P.onUpdate&&P.onUpdate(P)}B.__version=P.version}function et(B,P,ht,_t,Pt,j){let at=r.convert(ht.format,ht.colorSpace),lt=r.convert(ht.type),xt=v(ht.internalFormat,at,lt,ht.colorSpace),Ct=i.get(P),St=i.get(ht);if(St.__renderTarget=P,!Ct.__hasExternalTextures){let Nt=Math.max(1,P.width>>j),Yt=Math.max(1,P.height>>j);Pt===n.TEXTURE_3D||Pt===n.TEXTURE_2D_ARRAY?e.texImage3D(Pt,j,xt,Nt,Yt,P.depth,0,at,lt,null):e.texImage2D(Pt,j,xt,Nt,Yt,0,at,lt,null)}e.bindFramebuffer(n.FRAMEBUFFER,B),Z(P)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,_t,Pt,St.__webglTexture,0,K(P)):(Pt===n.TEXTURE_2D||Pt>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Pt<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,_t,Pt,St.__webglTexture,j),e.bindFramebuffer(n.FRAMEBUFFER,null)}function G(B,P,ht){if(n.bindRenderbuffer(n.RENDERBUFFER,B),P.depthBuffer){let _t=P.depthTexture,Pt=_t&&_t.isDepthTexture?_t.type:null,j=M(P.stencilBuffer,Pt),at=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,lt=K(P);Z(P)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,lt,j,P.width,P.height):ht?n.renderbufferStorageMultisample(n.RENDERBUFFER,lt,j,P.width,P.height):n.renderbufferStorage(n.RENDERBUFFER,j,P.width,P.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,at,n.RENDERBUFFER,B)}else{let _t=P.textures;for(let Pt=0;Pt<_t.length;Pt++){let j=_t[Pt],at=r.convert(j.format,j.colorSpace),lt=r.convert(j.type),xt=v(j.internalFormat,at,lt,j.colorSpace),Ct=K(P);ht&&Z(P)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ct,xt,P.width,P.height):Z(P)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ct,xt,P.width,P.height):n.renderbufferStorage(n.RENDERBUFFER,xt,P.width,P.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function J(B,P){if(P&&P.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,B),!(P.depthTexture&&P.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let _t=i.get(P.depthTexture);_t.__renderTarget=P,(!_t.__webglTexture||P.depthTexture.image.width!==P.width||P.depthTexture.image.height!==P.height)&&(P.depthTexture.image.width=P.width,P.depthTexture.image.height=P.height,P.depthTexture.needsUpdate=!0),R(P.depthTexture,0);let Pt=_t.__webglTexture,j=K(P);if(P.depthTexture.format===Zs)Z(P)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Pt,0,j):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Pt,0);else if(P.depthTexture.format===nr)Z(P)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Pt,0,j):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Pt,0);else throw new Error("Unknown depthTexture format")}function ct(B){let P=i.get(B),ht=B.isWebGLCubeRenderTarget===!0;if(P.__boundDepthTexture!==B.depthTexture){let _t=B.depthTexture;if(P.__depthDisposeCallback&&P.__depthDisposeCallback(),_t){let Pt=()=>{delete P.__boundDepthTexture,delete P.__depthDisposeCallback,_t.removeEventListener("dispose",Pt)};_t.addEventListener("dispose",Pt),P.__depthDisposeCallback=Pt}P.__boundDepthTexture=_t}if(B.depthTexture&&!P.__autoAllocateDepthBuffer){if(ht)throw new Error("target.depthTexture not supported in Cube render targets");J(P.__webglFramebuffer,B)}else if(ht){P.__webglDepthbuffer=[];for(let _t=0;_t<6;_t++)if(e.bindFramebuffer(n.FRAMEBUFFER,P.__webglFramebuffer[_t]),P.__webglDepthbuffer[_t]===void 0)P.__webglDepthbuffer[_t]=n.createRenderbuffer(),G(P.__webglDepthbuffer[_t],B,!1);else{let Pt=B.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,j=P.__webglDepthbuffer[_t];n.bindRenderbuffer(n.RENDERBUFFER,j),n.framebufferRenderbuffer(n.FRAMEBUFFER,Pt,n.RENDERBUFFER,j)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,P.__webglFramebuffer),P.__webglDepthbuffer===void 0)P.__webglDepthbuffer=n.createRenderbuffer(),G(P.__webglDepthbuffer,B,!1);else{let _t=B.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Pt=P.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Pt),n.framebufferRenderbuffer(n.FRAMEBUFFER,_t,n.RENDERBUFFER,Pt)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Tt(B,P,ht){let _t=i.get(B);P!==void 0&&et(_t.__webglFramebuffer,B,B.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),ht!==void 0&&ct(B)}function Ut(B){let P=B.texture,ht=i.get(B),_t=i.get(P);B.addEventListener("dispose",A);let Pt=B.textures,j=B.isWebGLCubeRenderTarget===!0,at=Pt.length>1;if(at||(_t.__webglTexture===void 0&&(_t.__webglTexture=n.createTexture()),_t.__version=P.version,o.memory.textures++),j){ht.__webglFramebuffer=[];for(let lt=0;lt<6;lt++)if(P.mipmaps&&P.mipmaps.length>0){ht.__webglFramebuffer[lt]=[];for(let xt=0;xt<P.mipmaps.length;xt++)ht.__webglFramebuffer[lt][xt]=n.createFramebuffer()}else ht.__webglFramebuffer[lt]=n.createFramebuffer()}else{if(P.mipmaps&&P.mipmaps.length>0){ht.__webglFramebuffer=[];for(let lt=0;lt<P.mipmaps.length;lt++)ht.__webglFramebuffer[lt]=n.createFramebuffer()}else ht.__webglFramebuffer=n.createFramebuffer();if(at)for(let lt=0,xt=Pt.length;lt<xt;lt++){let Ct=i.get(Pt[lt]);Ct.__webglTexture===void 0&&(Ct.__webglTexture=n.createTexture(),o.memory.textures++)}if(B.samples>0&&Z(B)===!1){ht.__webglMultisampledFramebuffer=n.createFramebuffer(),ht.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,ht.__webglMultisampledFramebuffer);for(let lt=0;lt<Pt.length;lt++){let xt=Pt[lt];ht.__webglColorRenderbuffer[lt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,ht.__webglColorRenderbuffer[lt]);let Ct=r.convert(xt.format,xt.colorSpace),St=r.convert(xt.type),Nt=v(xt.internalFormat,Ct,St,xt.colorSpace,B.isXRRenderTarget===!0),Yt=K(B);n.renderbufferStorageMultisample(n.RENDERBUFFER,Yt,Nt,B.width,B.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+lt,n.RENDERBUFFER,ht.__webglColorRenderbuffer[lt])}n.bindRenderbuffer(n.RENDERBUFFER,null),B.depthBuffer&&(ht.__webglDepthRenderbuffer=n.createRenderbuffer(),G(ht.__webglDepthRenderbuffer,B,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(j){e.bindTexture(n.TEXTURE_CUBE_MAP,_t.__webglTexture),gt(n.TEXTURE_CUBE_MAP,P);for(let lt=0;lt<6;lt++)if(P.mipmaps&&P.mipmaps.length>0)for(let xt=0;xt<P.mipmaps.length;xt++)et(ht.__webglFramebuffer[lt][xt],B,P,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,xt);else et(ht.__webglFramebuffer[lt],B,P,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0);m(P)&&p(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(at){for(let lt=0,xt=Pt.length;lt<xt;lt++){let Ct=Pt[lt],St=i.get(Ct);e.bindTexture(n.TEXTURE_2D,St.__webglTexture),gt(n.TEXTURE_2D,Ct),et(ht.__webglFramebuffer,B,Ct,n.COLOR_ATTACHMENT0+lt,n.TEXTURE_2D,0),m(Ct)&&p(n.TEXTURE_2D)}e.unbindTexture()}else{let lt=n.TEXTURE_2D;if((B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)&&(lt=B.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(lt,_t.__webglTexture),gt(lt,P),P.mipmaps&&P.mipmaps.length>0)for(let xt=0;xt<P.mipmaps.length;xt++)et(ht.__webglFramebuffer[xt],B,P,n.COLOR_ATTACHMENT0,lt,xt);else et(ht.__webglFramebuffer,B,P,n.COLOR_ATTACHMENT0,lt,0);m(P)&&p(lt),e.unbindTexture()}B.depthBuffer&&ct(B)}function st(B){let P=B.textures;for(let ht=0,_t=P.length;ht<_t;ht++){let Pt=P[ht];if(m(Pt)){let j=S(B),at=i.get(Pt).__webglTexture;e.bindTexture(j,at),p(j),e.unbindTexture()}}}let pt=[],H=[];function Vt(B){if(B.samples>0){if(Z(B)===!1){let P=B.textures,ht=B.width,_t=B.height,Pt=n.COLOR_BUFFER_BIT,j=B.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,at=i.get(B),lt=P.length>1;if(lt)for(let xt=0;xt<P.length;xt++)e.bindFramebuffer(n.FRAMEBUFFER,at.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+xt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,at.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+xt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,at.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,at.__webglFramebuffer);for(let xt=0;xt<P.length;xt++){if(B.resolveDepthBuffer&&(B.depthBuffer&&(Pt|=n.DEPTH_BUFFER_BIT),B.stencilBuffer&&B.resolveStencilBuffer&&(Pt|=n.STENCIL_BUFFER_BIT)),lt){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,at.__webglColorRenderbuffer[xt]);let Ct=i.get(P[xt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ct,0)}n.blitFramebuffer(0,0,ht,_t,0,0,ht,_t,Pt,n.NEAREST),l===!0&&(pt.length=0,H.length=0,pt.push(n.COLOR_ATTACHMENT0+xt),B.depthBuffer&&B.resolveDepthBuffer===!1&&(pt.push(j),H.push(j),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,H)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,pt))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),lt)for(let xt=0;xt<P.length;xt++){e.bindFramebuffer(n.FRAMEBUFFER,at.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+xt,n.RENDERBUFFER,at.__webglColorRenderbuffer[xt]);let Ct=i.get(P[xt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,at.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+xt,n.TEXTURE_2D,Ct,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,at.__webglMultisampledFramebuffer)}else if(B.depthBuffer&&B.resolveDepthBuffer===!1&&l){let P=B.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[P])}}}function K(B){return Math.min(s.maxSamples,B.samples)}function Z(B){let P=i.get(B);return B.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&P.__useRenderToTexture!==!1}function yt(B){let P=o.render.frame;d.get(B)!==P&&(d.set(B,P),B.update())}function Y(B,P){let ht=B.colorSpace,_t=B.format,Pt=B.type;return B.isCompressedTexture===!0||B.isVideoTexture===!0||ht!==lr&&ht!==Vi&&(Ne.getTransfer(ht)===He?(_t!==Hn||Pt!==Ti)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ht)),P}function Lt(B){return typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement?(h.width=B.naturalWidth||B.width,h.height=B.naturalHeight||B.height):typeof VideoFrame<"u"&&B instanceof VideoFrame?(h.width=B.displayWidth,h.height=B.displayHeight):(h.width=B.width,h.height=B.height),h}this.allocateTextureUnit=E,this.resetTextureUnits=C,this.setTexture2D=R,this.setTexture2DArray=U,this.setTexture3D=O,this.setTextureCube=z,this.rebindTextures=Tt,this.setupRenderTarget=Ut,this.updateRenderTargetMipmap=st,this.updateMultisampleRenderTarget=Vt,this.setupDepthRenderbuffer=ct,this.setupFrameBufferTexture=et,this.useMultisampledRTT=Z}function vx(n,t){function e(i,s=Vi){let r,o=Ne.getTransfer(s);if(i===Ti)return n.UNSIGNED_BYTE;if(i===lh)return n.UNSIGNED_SHORT_4_4_4_4;if(i===ch)return n.UNSIGNED_SHORT_5_5_5_1;if(i===uu)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===hu)return n.BYTE;if(i===fu)return n.SHORT;if(i===Fr)return n.UNSIGNED_SHORT;if(i===ah)return n.INT;if(i===vs)return n.UNSIGNED_INT;if(i===fi)return n.FLOAT;if(i===Kr)return n.HALF_FLOAT;if(i===du)return n.ALPHA;if(i===pu)return n.RGB;if(i===Hn)return n.RGBA;if(i===mu)return n.LUMINANCE;if(i===gu)return n.LUMINANCE_ALPHA;if(i===Zs)return n.DEPTH_COMPONENT;if(i===nr)return n.DEPTH_STENCIL;if(i===hh)return n.RED;if(i===fh)return n.RED_INTEGER;if(i===yu)return n.RG;if(i===uh)return n.RG_INTEGER;if(i===dh)return n.RGBA_INTEGER;if(i===Zo||i===Jo||i===jo||i===Ko)if(o===He)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Zo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Jo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===jo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ko)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Zo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Jo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===jo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ko)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Zl||i===Jl||i===jl||i===Kl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Zl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Jl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===jl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Kl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ql||i===tc||i===ec)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Ql||i===tc)return o===He?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===ec)return o===He?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===nc||i===ic||i===sc||i===rc||i===oc||i===ac||i===lc||i===cc||i===hc||i===fc||i===uc||i===dc||i===pc||i===mc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===nc)return o===He?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ic)return o===He?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===sc)return o===He?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===rc)return o===He?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===oc)return o===He?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ac)return o===He?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===lc)return o===He?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===cc)return o===He?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===hc)return o===He?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===fc)return o===He?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===uc)return o===He?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===dc)return o===He?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===pc)return o===He?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===mc)return o===He?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Qo||i===gc||i===yc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Qo)return o===He?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===gc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===yc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===xu||i===xc||i===vc||i===_c)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Qo)return r.COMPRESSED_RED_RGTC1_EXT;if(i===xc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===vc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===_c)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===er?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var Nc=class extends Pn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},xe=class extends $e{constructor(){super(),this.isGroup=!0,this.type="Group"}},_x={type:"move"},Ur=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){o=!0;for(let _ of t.hand.values()){let m=e.getJointPose(_,i),p=this._getHandJoint(h,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let d=h.joints["index-finger-tip"],g=h.joints["thumb-tip"],u=d.position.distanceTo(g.position),c=.02,f=.005;h.inputState.pinching&&u>c+f?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&u<=c-f&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(_x)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),h!==null&&(h.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new xe;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},Mx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,bx=`
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

}`,Oc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){let s=new Dn,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new kn({vertexShader:Mx,fragmentShader:bx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ze(new bn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Fc=class extends Yi{constructor(t,e){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,h=null,d=null,g=null,u=null,c=null,f=null,_=new Oc,m=e.getContextAttributes(),p=null,S=null,v=[],M=[],D=new zt,w=null,A=new Pn;A.viewport=new nn;let T=new Pn;T.viewport=new nn;let x=[A,T],y=new Nc,b=null,C=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let W=v[k];return W===void 0&&(W=new Ur,v[k]=W),W.getTargetRaySpace()},this.getControllerGrip=function(k){let W=v[k];return W===void 0&&(W=new Ur,v[k]=W),W.getGripSpace()},this.getHand=function(k){let W=v[k];return W===void 0&&(W=new Ur,v[k]=W),W.getHandSpace()};function E(k){let W=M.indexOf(k.inputSource);if(W===-1)return;let et=v[W];et!==void 0&&(et.update(k.inputSource,k.frame,h||o),et.dispatchEvent({type:k.type,data:k.inputSource}))}function L(){s.removeEventListener("select",E),s.removeEventListener("selectstart",E),s.removeEventListener("selectend",E),s.removeEventListener("squeeze",E),s.removeEventListener("squeezestart",E),s.removeEventListener("squeezeend",E),s.removeEventListener("end",L),s.removeEventListener("inputsourceschange",R);for(let k=0;k<v.length;k++){let W=M[k];W!==null&&(M[k]=null,v[k].disconnect(W))}b=null,C=null,_.reset(),t.setRenderTarget(p),c=null,u=null,g=null,s=null,S=null,Rt.stop(),i.isPresenting=!1,t.setPixelRatio(w),t.setSize(D.width,D.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){r=k,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){a=k,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||o},this.setReferenceSpace=function(k){h=k},this.getBaseLayer=function(){return u!==null?u:c},this.getBinding=function(){return g},this.getFrame=function(){return f},this.getSession=function(){return s},this.setSession=async function(k){if(s=k,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",E),s.addEventListener("selectstart",E),s.addEventListener("selectend",E),s.addEventListener("squeeze",E),s.addEventListener("squeezestart",E),s.addEventListener("squeezeend",E),s.addEventListener("end",L),s.addEventListener("inputsourceschange",R),m.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(D),s.renderState.layers===void 0){let W={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};c=new XRWebGLLayer(s,e,W),s.updateRenderState({baseLayer:c}),t.setPixelRatio(1),t.setSize(c.framebufferWidth,c.framebufferHeight,!1),S=new Ai(c.framebufferWidth,c.framebufferHeight,{format:Hn,type:Ti,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let W=null,et=null,G=null;m.depth&&(G=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,W=m.stencil?nr:Zs,et=m.stencil?er:vs);let J={colorFormat:e.RGBA8,depthFormat:G,scaleFactor:r};g=new XRWebGLBinding(s,e),u=g.createProjectionLayer(J),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),S=new Ai(u.textureWidth,u.textureHeight,{format:Hn,type:Ti,depthTexture:new da(u.textureWidth,u.textureHeight,et,void 0,void 0,void 0,void 0,void 0,void 0,W),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),h=null,o=await s.requestReferenceSpace(a),Rt.setContext(s),Rt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function R(k){for(let W=0;W<k.removed.length;W++){let et=k.removed[W],G=M.indexOf(et);G>=0&&(M[G]=null,v[G].disconnect(et))}for(let W=0;W<k.added.length;W++){let et=k.added[W],G=M.indexOf(et);if(G===-1){for(let ct=0;ct<v.length;ct++)if(ct>=M.length){M.push(et),G=ct;break}else if(M[ct]===null){M[ct]=et,G=ct;break}if(G===-1)break}let J=v[G];J&&J.connect(et)}}let U=new $,O=new $;function z(k,W,et){U.setFromMatrixPosition(W.matrixWorld),O.setFromMatrixPosition(et.matrixWorld);let G=U.distanceTo(O),J=W.projectionMatrix.elements,ct=et.projectionMatrix.elements,Tt=J[14]/(J[10]-1),Ut=J[14]/(J[10]+1),st=(J[9]+1)/J[5],pt=(J[9]-1)/J[5],H=(J[8]-1)/J[0],Vt=(ct[8]+1)/ct[0],K=Tt*H,Z=Tt*Vt,yt=G/(-H+Vt),Y=yt*-H;if(W.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(Y),k.translateZ(yt),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert(),J[10]===-1)k.projectionMatrix.copy(W.projectionMatrix),k.projectionMatrixInverse.copy(W.projectionMatrixInverse);else{let Lt=Tt+yt,B=Ut+yt,P=K-Y,ht=Z+(G-Y),_t=st*Ut/B*Lt,Pt=pt*Ut/B*Lt;k.projectionMatrix.makePerspective(P,ht,_t,Pt,Lt,B),k.projectionMatrixInverse.copy(k.projectionMatrix).invert()}}function q(k,W){W===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(W.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(s===null)return;let W=k.near,et=k.far;_.texture!==null&&(_.depthNear>0&&(W=_.depthNear),_.depthFar>0&&(et=_.depthFar)),y.near=T.near=A.near=W,y.far=T.far=A.far=et,(b!==y.near||C!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),b=y.near,C=y.far),A.layers.mask=k.layers.mask|2,T.layers.mask=k.layers.mask|4,y.layers.mask=A.layers.mask|T.layers.mask;let G=k.parent,J=y.cameras;q(y,G);for(let ct=0;ct<J.length;ct++)q(J[ct],G);J.length===2?z(y,A,T):y.projectionMatrix.copy(A.projectionMatrix),X(k,y,G)};function X(k,W,et){et===null?k.matrix.copy(W.matrixWorld):(k.matrix.copy(et.matrixWorld),k.matrix.invert(),k.matrix.multiply(W.matrixWorld)),k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0),k.projectionMatrix.copy(W.projectionMatrix),k.projectionMatrixInverse.copy(W.projectionMatrixInverse),k.isPerspectiveCamera&&(k.fov=Br*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(u===null&&c===null))return l},this.setFoveation=function(k){l=k,u!==null&&(u.fixedFoveation=k),c!==null&&c.fixedFoveation!==void 0&&(c.fixedFoveation=k)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(y)};let N=null;function gt(k,W){if(d=W.getViewerPose(h||o),f=W,d!==null){let et=d.views;c!==null&&(t.setRenderTargetFramebuffer(S,c.framebuffer),t.setRenderTarget(S));let G=!1;et.length!==y.cameras.length&&(y.cameras.length=0,G=!0);for(let ct=0;ct<et.length;ct++){let Tt=et[ct],Ut=null;if(c!==null)Ut=c.getViewport(Tt);else{let pt=g.getViewSubImage(u,Tt);Ut=pt.viewport,ct===0&&(t.setRenderTargetTextures(S,pt.colorTexture,u.ignoreDepthValues?void 0:pt.depthStencilTexture),t.setRenderTarget(S))}let st=x[ct];st===void 0&&(st=new Pn,st.layers.enable(ct),st.viewport=new nn,x[ct]=st),st.matrix.fromArray(Tt.transform.matrix),st.matrix.decompose(st.position,st.quaternion,st.scale),st.projectionMatrix.fromArray(Tt.projectionMatrix),st.projectionMatrixInverse.copy(st.projectionMatrix).invert(),st.viewport.set(Ut.x,Ut.y,Ut.width,Ut.height),ct===0&&(y.matrix.copy(st.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),G===!0&&y.cameras.push(st)}let J=s.enabledFeatures;if(J&&J.includes("depth-sensing")){let ct=g.getDepthInformation(et[0]);ct&&ct.isValid&&ct.texture&&_.init(t,ct,s.renderState)}}for(let et=0;et<v.length;et++){let G=M[et],J=v[et];G!==null&&J!==void 0&&J.update(G,W,h||o)}N&&N(k,W),W.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:W}),f=null}let Rt=new wu;Rt.setAnimationLoop(gt),this.setAnimationLoop=function(k){N=k},this.dispose=function(){}}},us=new ni,Sx=new ke;function wx(n,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Su(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,S,v,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),g(m,p)):p.isMeshPhongMaterial?(r(m,p),d(m,p)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&c(m,p,M)):p.isMeshMatcapMaterial?(r(m,p),f(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,S,v):p.isSpriteMaterial?h(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Mn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Mn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let S=t.get(p),v=S.envMap,M=S.envMapRotation;v&&(m.envMap.value=v,us.copy(M),us.x*=-1,us.y*=-1,us.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(us.y*=-1,us.z*=-1),m.envMapRotation.value.setFromMatrix4(Sx.makeRotationFromEuler(us)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,S,v){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=v*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function d(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function g(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function c(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Mn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function f(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){let S=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Ex(n,t,e,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,v){let M=v.program;i.uniformBlockBinding(S,M)}function h(S,v){let M=s[S.id];M===void 0&&(f(S),M=d(S),s[S.id]=M,S.addEventListener("dispose",m));let D=v.program;i.updateUBOMapping(S,D);let w=t.render.frame;r[S.id]!==w&&(u(S),r[S.id]=w)}function d(S){let v=g();S.__bindingPointIndex=v;let M=n.createBuffer(),D=S.__size,w=S.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,D,w),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,M),M}function g(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(S){let v=s[S.id],M=S.uniforms,D=S.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let w=0,A=M.length;w<A;w++){let T=Array.isArray(M[w])?M[w]:[M[w]];for(let x=0,y=T.length;x<y;x++){let b=T[x];if(c(b,w,x,D)===!0){let C=b.__offset,E=Array.isArray(b.value)?b.value:[b.value],L=0;for(let R=0;R<E.length;R++){let U=E[R],O=_(U);typeof U=="number"||typeof U=="boolean"?(b.__data[0]=U,n.bufferSubData(n.UNIFORM_BUFFER,C+L,b.__data)):U.isMatrix3?(b.__data[0]=U.elements[0],b.__data[1]=U.elements[1],b.__data[2]=U.elements[2],b.__data[3]=0,b.__data[4]=U.elements[3],b.__data[5]=U.elements[4],b.__data[6]=U.elements[5],b.__data[7]=0,b.__data[8]=U.elements[6],b.__data[9]=U.elements[7],b.__data[10]=U.elements[8],b.__data[11]=0):(U.toArray(b.__data,L),L+=O.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,C,b.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function c(S,v,M,D){let w=S.value,A=v+"_"+M;if(D[A]===void 0)return typeof w=="number"||typeof w=="boolean"?D[A]=w:D[A]=w.clone(),!0;{let T=D[A];if(typeof w=="number"||typeof w=="boolean"){if(T!==w)return D[A]=w,!0}else if(T.equals(w)===!1)return T.copy(w),!0}return!1}function f(S){let v=S.uniforms,M=0,D=16;for(let A=0,T=v.length;A<T;A++){let x=Array.isArray(v[A])?v[A]:[v[A]];for(let y=0,b=x.length;y<b;y++){let C=x[y],E=Array.isArray(C.value)?C.value:[C.value];for(let L=0,R=E.length;L<R;L++){let U=E[L],O=_(U),z=M%D,q=z%O.boundary,X=z+q;M+=q,X!==0&&D-X<O.storage&&(M+=D-X),C.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=M,M+=O.storage}}}let w=M%D;return w>0&&(M+=D-w),S.__size=M,S.__cache={},this}function _(S){let v={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(v.boundary=4,v.storage=4):S.isVector2?(v.boundary=8,v.storage=8):S.isVector3||S.isColor?(v.boundary=16,v.storage=12):S.isVector4?(v.boundary=16,v.storage=16):S.isMatrix3?(v.boundary=48,v.storage=48):S.isMatrix4?(v.boundary=64,v.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),v}function m(S){let v=S.target;v.removeEventListener("dispose",m);let M=o.indexOf(v.__bindingPointIndex);o.splice(M,1),n.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function p(){for(let S in s)n.deleteBuffer(s[S]);o=[],s={},r={}}return{bind:l,update:h,dispose:p}}var pa=class{constructor(t={}){let{canvas:e=Ip(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:h=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:g=!1,reverseDepthBuffer:u=!1}=t;this.isWebGLRenderer=!0;let c;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");c=i.getContextAttributes().alpha}else c=o;let f=new Uint32Array(4),_=new Int32Array(4),m=null,p=null,S=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=vn,this.toneMapping=ui,this.toneMappingExposure=1;let M=this,D=!1,w=0,A=0,T=null,x=-1,y=null,b=new nn,C=new nn,E=null,L=new fe(0),R=0,U=e.width,O=e.height,z=1,q=null,X=null,N=new nn(0,0,U,O),gt=new nn(0,0,U,O),Rt=!1,k=new zr,W=!1,et=!1,G=new ke,J=new ke,ct=new $,Tt=new nn,Ut={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},st=!1;function pt(){return T===null?z:1}let H=i;function Vt(F,ot){return e.getContext(F,ot)}try{let F={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:h,powerPreference:d,failIfMajorPerformanceCaveat:g};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${rh}`),e.addEventListener("webglcontextlost",Ot,!1),e.addEventListener("webglcontextrestored",ee,!1),e.addEventListener("webglcontextcreationerror",Qt,!1),H===null){let ot="webgl2";if(H=Vt(ot,F),H===null)throw Vt(ot)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(F){throw console.error("THREE.WebGLRenderer: "+F.message),F}let K,Z,yt,Y,Lt,B,P,ht,_t,Pt,j,at,lt,xt,Ct,St,Nt,Yt,re,jt,ye,ce,Pe,rt;function Zt(){K=new Hg(H),K.init(),ce=new vx(H,K),Z=new Ug(H,K,t,ce),yt=new gx(H,K),Z.reverseDepthBuffer&&u&&yt.buffers.depth.setReversed(!0),Y=new Gg(H),Lt=new ix,B=new xx(H,K,yt,Lt,Z,ce,Y),P=new Og(M),ht=new zg(M),_t=new jp(H),Pe=new kg(H,_t),Pt=new $g(H,_t,Y,Pe),j=new Xg(H,Pt,_t,Y),re=new Wg(H,Z,B),St=new Ng(Lt),at=new nx(M,P,ht,K,Z,Pe,St),lt=new wx(M,Lt),xt=new rx,Ct=new fx(K),Yt=new Lg(M,P,ht,yt,j,c,l),Nt=new px(M,j,Z),rt=new Ex(H,Y,Z,yt),jt=new Dg(H,K,Y),ye=new Vg(H,K,Y),Y.programs=at.programs,M.capabilities=Z,M.extensions=K,M.properties=Lt,M.renderLists=xt,M.shadowMap=Nt,M.state=yt,M.info=Y}Zt();let It=new Fc(M,H);this.xr=It,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){let F=K.get("WEBGL_lose_context");F&&F.loseContext()},this.forceContextRestore=function(){let F=K.get("WEBGL_lose_context");F&&F.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(F){F!==void 0&&(z=F,this.setSize(U,O,!1))},this.getSize=function(F){return F.set(U,O)},this.setSize=function(F,ot,vt=!0){if(It.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}U=F,O=ot,e.width=Math.floor(F*z),e.height=Math.floor(ot*z),vt===!0&&(e.style.width=F+"px",e.style.height=ot+"px"),this.setViewport(0,0,F,ot)},this.getDrawingBufferSize=function(F){return F.set(U*z,O*z).floor()},this.setDrawingBufferSize=function(F,ot,vt){U=F,O=ot,z=vt,e.width=Math.floor(F*vt),e.height=Math.floor(ot*vt),this.setViewport(0,0,F,ot)},this.getCurrentViewport=function(F){return F.copy(b)},this.getViewport=function(F){return F.copy(N)},this.setViewport=function(F,ot,vt,Et){F.isVector4?N.set(F.x,F.y,F.z,F.w):N.set(F,ot,vt,Et),yt.viewport(b.copy(N).multiplyScalar(z).round())},this.getScissor=function(F){return F.copy(gt)},this.setScissor=function(F,ot,vt,Et){F.isVector4?gt.set(F.x,F.y,F.z,F.w):gt.set(F,ot,vt,Et),yt.scissor(C.copy(gt).multiplyScalar(z).round())},this.getScissorTest=function(){return Rt},this.setScissorTest=function(F){yt.setScissorTest(Rt=F)},this.setOpaqueSort=function(F){q=F},this.setTransparentSort=function(F){X=F},this.getClearColor=function(F){return F.copy(Yt.getClearColor())},this.setClearColor=function(){Yt.setClearColor.apply(Yt,arguments)},this.getClearAlpha=function(){return Yt.getClearAlpha()},this.setClearAlpha=function(){Yt.setClearAlpha.apply(Yt,arguments)},this.clear=function(F=!0,ot=!0,vt=!0){let Et=0;if(F){let dt=!1;if(T!==null){let Xt=T.texture.format;dt=Xt===dh||Xt===uh||Xt===fh}if(dt){let Xt=T.texture.type,ne=Xt===Ti||Xt===vs||Xt===Fr||Xt===er||Xt===lh||Xt===ch,de=Yt.getClearColor(),V=Yt.getClearAlpha(),tt=de.r,kt=de.g,wt=de.b;ne?(f[0]=tt,f[1]=kt,f[2]=wt,f[3]=V,H.clearBufferuiv(H.COLOR,0,f)):(_[0]=tt,_[1]=kt,_[2]=wt,_[3]=V,H.clearBufferiv(H.COLOR,0,_))}else Et|=H.COLOR_BUFFER_BIT}ot&&(Et|=H.DEPTH_BUFFER_BIT),vt&&(Et|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(Et)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Ot,!1),e.removeEventListener("webglcontextrestored",ee,!1),e.removeEventListener("webglcontextcreationerror",Qt,!1),xt.dispose(),Ct.dispose(),Lt.dispose(),P.dispose(),ht.dispose(),j.dispose(),Pe.dispose(),rt.dispose(),at.dispose(),It.dispose(),It.removeEventListener("sessionstart",ut),It.removeEventListener("sessionend",Dt),Gt.stop()};function Ot(F){F.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function ee(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;let F=Y.autoReset,ot=Nt.enabled,vt=Nt.autoUpdate,Et=Nt.needsUpdate,dt=Nt.type;Zt(),Y.autoReset=F,Nt.enabled=ot,Nt.autoUpdate=vt,Nt.needsUpdate=Et,Nt.type=dt}function Qt(F){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",F.statusMessage)}function ve(F){let ot=F.target;ot.removeEventListener("dispose",ve),I(ot)}function I(F){it(F),Lt.remove(F)}function it(F){let ot=Lt.get(F).programs;ot!==void 0&&(ot.forEach(function(vt){at.releaseProgram(vt)}),F.isShaderMaterial&&at.releaseShaderCache(F))}this.renderBufferDirect=function(F,ot,vt,Et,dt,Xt){ot===null&&(ot=Ut);let ne=dt.isMesh&&dt.matrixWorld.determinant()<0,de=Ie(F,ot,vt,Et,dt);yt.setMaterial(Et,ne);let V=vt.index,tt=1;if(Et.wireframe===!0){if(V=Pt.getWireframeAttribute(vt),V===void 0)return;tt=2}let kt=vt.drawRange,wt=vt.attributes.position,Ht=kt.start*tt,Jt=(kt.start+kt.count)*tt;Xt!==null&&(Ht=Math.max(Ht,Xt.start*tt),Jt=Math.min(Jt,(Xt.start+Xt.count)*tt)),V!==null?(Ht=Math.max(Ht,0),Jt=Math.min(Jt,V.count)):wt!=null&&(Ht=Math.max(Ht,0),Jt=Math.min(Jt,wt.count));let ae=Jt-Ht;if(ae<0||ae===1/0)return;Pe.setup(dt,Et,de,vt,V);let qe,Wt=jt;if(V!==null&&(qe=_t.get(V),Wt=ye,Wt.setIndex(qe)),dt.isMesh)Et.wireframe===!0?(yt.setLineWidth(Et.wireframeLinewidth*pt()),Wt.setMode(H.LINES)):Wt.setMode(H.TRIANGLES);else if(dt.isLine){let te=Et.linewidth;te===void 0&&(te=1),yt.setLineWidth(te*pt()),dt.isLineSegments?Wt.setMode(H.LINES):dt.isLineLoop?Wt.setMode(H.LINE_LOOP):Wt.setMode(H.LINE_STRIP)}else dt.isPoints?Wt.setMode(H.POINTS):dt.isSprite&&Wt.setMode(H.TRIANGLES);if(dt.isBatchedMesh)if(dt._multiDrawInstances!==null)Wt.renderMultiDrawInstances(dt._multiDrawStarts,dt._multiDrawCounts,dt._multiDrawCount,dt._multiDrawInstances);else if(K.get("WEBGL_multi_draw"))Wt.renderMultiDraw(dt._multiDrawStarts,dt._multiDrawCounts,dt._multiDrawCount);else{let te=dt._multiDrawStarts,Se=dt._multiDrawCounts,$t=dt._multiDrawCount,pe=V?_t.get(V).bytesPerElement:1,Fe=Lt.get(Et).currentProgram.getUniforms();for(let Le=0;Le<$t;Le++)Fe.setValue(H,"_gl_DrawID",Le),Wt.render(te[Le]/pe,Se[Le])}else if(dt.isInstancedMesh)Wt.renderInstances(Ht,ae,dt.count);else if(vt.isInstancedBufferGeometry){let te=vt._maxInstanceCount!==void 0?vt._maxInstanceCount:1/0,Se=Math.min(vt.instanceCount,te);Wt.renderInstances(Ht,ae,Se)}else Wt.render(Ht,ae)};function nt(F,ot,vt){F.transparent===!0&&F.side===on&&F.forceSinglePass===!1?(F.side=Mn,F.needsUpdate=!0,he(F,ot,vt),F.side=qi,F.needsUpdate=!0,he(F,ot,vt),F.side=on):he(F,ot,vt)}this.compile=function(F,ot,vt=null){vt===null&&(vt=F),p=Ct.get(vt),p.init(ot),v.push(p),vt.traverseVisible(function(dt){dt.isLight&&dt.layers.test(ot.layers)&&(p.pushLight(dt),dt.castShadow&&p.pushShadow(dt))}),F!==vt&&F.traverseVisible(function(dt){dt.isLight&&dt.layers.test(ot.layers)&&(p.pushLight(dt),dt.castShadow&&p.pushShadow(dt))}),p.setupLights();let Et=new Set;return F.traverse(function(dt){if(!(dt.isMesh||dt.isPoints||dt.isLine||dt.isSprite))return;let Xt=dt.material;if(Xt)if(Array.isArray(Xt))for(let ne=0;ne<Xt.length;ne++){let de=Xt[ne];nt(de,vt,dt),Et.add(de)}else nt(Xt,vt,dt),Et.add(Xt)}),v.pop(),p=null,Et},this.compileAsync=function(F,ot,vt=null){let Et=this.compile(F,ot,vt);return new Promise(dt=>{function Xt(){if(Et.forEach(function(ne){Lt.get(ne).currentProgram.isReady()&&Et.delete(ne)}),Et.size===0){dt(F);return}setTimeout(Xt,10)}K.get("KHR_parallel_shader_compile")!==null?Xt():setTimeout(Xt,10)})};let ft=null;function Mt(F){ft&&ft(F)}function ut(){Gt.stop()}function Dt(){Gt.start()}let Gt=new wu;Gt.setAnimationLoop(Mt),typeof self<"u"&&Gt.setContext(self),this.setAnimationLoop=function(F){ft=F,It.setAnimationLoop(F),F===null?Gt.stop():Gt.start()},It.addEventListener("sessionstart",ut),It.addEventListener("sessionend",Dt),this.render=function(F,ot){if(ot!==void 0&&ot.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),ot.parent===null&&ot.matrixWorldAutoUpdate===!0&&ot.updateMatrixWorld(),It.enabled===!0&&It.isPresenting===!0&&(It.cameraAutoUpdate===!0&&It.updateCamera(ot),ot=It.getCamera()),F.isScene===!0&&F.onBeforeRender(M,F,ot,T),p=Ct.get(F,v.length),p.init(ot),v.push(p),J.multiplyMatrices(ot.projectionMatrix,ot.matrixWorldInverse),k.setFromProjectionMatrix(J),et=this.localClippingEnabled,W=St.init(this.clippingPlanes,et),m=xt.get(F,S.length),m.init(),S.push(m),It.enabled===!0&&It.isPresenting===!0){let Xt=M.xr.getDepthSensingMesh();Xt!==null&&Ft(Xt,ot,-1/0,M.sortObjects)}Ft(F,ot,0,M.sortObjects),m.finish(),M.sortObjects===!0&&m.sort(q,X),st=It.enabled===!1||It.isPresenting===!1||It.hasDepthSensing()===!1,st&&Yt.addToRenderList(m,F),this.info.render.frame++,W===!0&&St.beginShadows();let vt=p.state.shadowsArray;Nt.render(vt,F,ot),W===!0&&St.endShadows(),this.info.autoReset===!0&&this.info.reset();let Et=m.opaque,dt=m.transmissive;if(p.setupLights(),ot.isArrayCamera){let Xt=ot.cameras;if(dt.length>0)for(let ne=0,de=Xt.length;ne<de;ne++){let V=Xt[ne];bt(Et,dt,F,V)}st&&Yt.render(F);for(let ne=0,de=Xt.length;ne<de;ne++){let V=Xt[ne];Q(m,F,V,V.viewport)}}else dt.length>0&&bt(Et,dt,F,ot),st&&Yt.render(F),Q(m,F,ot);T!==null&&(B.updateMultisampleRenderTarget(T),B.updateRenderTargetMipmap(T)),F.isScene===!0&&F.onAfterRender(M,F,ot),Pe.resetDefaultState(),x=-1,y=null,v.pop(),v.length>0?(p=v[v.length-1],W===!0&&St.setGlobalState(M.clippingPlanes,p.state.camera)):p=null,S.pop(),S.length>0?m=S[S.length-1]:m=null};function Ft(F,ot,vt,Et){if(F.visible===!1)return;if(F.layers.test(ot.layers)){if(F.isGroup)vt=F.renderOrder;else if(F.isLOD)F.autoUpdate===!0&&F.update(ot);else if(F.isLight)p.pushLight(F),F.castShadow&&p.pushShadow(F);else if(F.isSprite){if(!F.frustumCulled||k.intersectsSprite(F)){Et&&Tt.setFromMatrixPosition(F.matrixWorld).applyMatrix4(J);let ne=j.update(F),de=F.material;de.visible&&m.push(F,ne,de,vt,Tt.z,null)}}else if((F.isMesh||F.isLine||F.isPoints)&&(!F.frustumCulled||k.intersectsObject(F))){let ne=j.update(F),de=F.material;if(Et&&(F.boundingSphere!==void 0?(F.boundingSphere===null&&F.computeBoundingSphere(),Tt.copy(F.boundingSphere.center)):(ne.boundingSphere===null&&ne.computeBoundingSphere(),Tt.copy(ne.boundingSphere.center)),Tt.applyMatrix4(F.matrixWorld).applyMatrix4(J)),Array.isArray(de)){let V=ne.groups;for(let tt=0,kt=V.length;tt<kt;tt++){let wt=V[tt],Ht=de[wt.materialIndex];Ht&&Ht.visible&&m.push(F,ne,Ht,vt,Tt.z,wt)}}else de.visible&&m.push(F,ne,de,vt,Tt.z,null)}}let Xt=F.children;for(let ne=0,de=Xt.length;ne<de;ne++)Ft(Xt[ne],ot,vt,Et)}function Q(F,ot,vt,Et){let dt=F.opaque,Xt=F.transmissive,ne=F.transparent;p.setupLightsView(vt),W===!0&&St.setGlobalState(M.clippingPlanes,vt),Et&&yt.viewport(b.copy(Et)),dt.length>0&&At(dt,ot,vt),Xt.length>0&&At(Xt,ot,vt),ne.length>0&&At(ne,ot,vt),yt.buffers.depth.setTest(!0),yt.buffers.depth.setMask(!0),yt.buffers.color.setMask(!0),yt.setPolygonOffset(!1)}function bt(F,ot,vt,Et){if((vt.isScene===!0?vt.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[Et.id]===void 0&&(p.state.transmissionRenderTarget[Et.id]=new Ai(1,1,{generateMipmaps:!0,type:K.has("EXT_color_buffer_half_float")||K.has("EXT_color_buffer_float")?Kr:Ti,minFilter:ys,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ne.workingColorSpace}));let Xt=p.state.transmissionRenderTarget[Et.id],ne=Et.viewport||b;Xt.setSize(ne.z,ne.w);let de=M.getRenderTarget();M.setRenderTarget(Xt),M.getClearColor(L),R=M.getClearAlpha(),R<1&&M.setClearColor(16777215,.5),M.clear(),st&&Yt.render(vt);let V=M.toneMapping;M.toneMapping=ui;let tt=Et.viewport;if(Et.viewport!==void 0&&(Et.viewport=void 0),p.setupLightsView(Et),W===!0&&St.setGlobalState(M.clippingPlanes,Et),At(F,vt,Et),B.updateMultisampleRenderTarget(Xt),B.updateRenderTargetMipmap(Xt),K.has("WEBGL_multisampled_render_to_texture")===!1){let kt=!1;for(let wt=0,Ht=ot.length;wt<Ht;wt++){let Jt=ot[wt],ae=Jt.object,qe=Jt.geometry,Wt=Jt.material,te=Jt.group;if(Wt.side===on&&ae.layers.test(Et.layers)){let Se=Wt.side;Wt.side=Mn,Wt.needsUpdate=!0,qt(ae,vt,Et,qe,Wt,te),Wt.side=Se,Wt.needsUpdate=!0,kt=!0}}kt===!0&&(B.updateMultisampleRenderTarget(Xt),B.updateRenderTargetMipmap(Xt))}M.setRenderTarget(de),M.setClearColor(L,R),tt!==void 0&&(Et.viewport=tt),M.toneMapping=V}function At(F,ot,vt){let Et=ot.isScene===!0?ot.overrideMaterial:null;for(let dt=0,Xt=F.length;dt<Xt;dt++){let ne=F[dt],de=ne.object,V=ne.geometry,tt=Et===null?ne.material:Et,kt=ne.group;de.layers.test(vt.layers)&&qt(de,ot,vt,V,tt,kt)}}function qt(F,ot,vt,Et,dt,Xt){F.onBeforeRender(M,ot,vt,Et,dt,Xt),F.modelViewMatrix.multiplyMatrices(vt.matrixWorldInverse,F.matrixWorld),F.normalMatrix.getNormalMatrix(F.modelViewMatrix),dt.onBeforeRender(M,ot,vt,Et,F,Xt),dt.transparent===!0&&dt.side===on&&dt.forceSinglePass===!1?(dt.side=Mn,dt.needsUpdate=!0,M.renderBufferDirect(vt,ot,Et,dt,F,Xt),dt.side=qi,dt.needsUpdate=!0,M.renderBufferDirect(vt,ot,Et,dt,F,Xt),dt.side=on):M.renderBufferDirect(vt,ot,Et,dt,F,Xt),F.onAfterRender(M,ot,vt,Et,dt,Xt)}function he(F,ot,vt){ot.isScene!==!0&&(ot=Ut);let Et=Lt.get(F),dt=p.state.lights,Xt=p.state.shadowsArray,ne=dt.state.version,de=at.getParameters(F,dt.state,Xt,ot,vt),V=at.getProgramCacheKey(de),tt=Et.programs;Et.environment=F.isMeshStandardMaterial?ot.environment:null,Et.fog=ot.fog,Et.envMap=(F.isMeshStandardMaterial?ht:P).get(F.envMap||Et.environment),Et.envMapRotation=Et.environment!==null&&F.envMap===null?ot.environmentRotation:F.envMapRotation,tt===void 0&&(F.addEventListener("dispose",ve),tt=new Map,Et.programs=tt);let kt=tt.get(V);if(kt!==void 0){if(Et.currentProgram===kt&&Et.lightsStateVersion===ne)return me(F,de),kt}else de.uniforms=at.getUniforms(F),F.onBeforeCompile(de,M),kt=at.acquireProgram(de,V),tt.set(V,kt),Et.uniforms=de.uniforms;let wt=Et.uniforms;return(!F.isShaderMaterial&&!F.isRawShaderMaterial||F.clipping===!0)&&(wt.clippingPlanes=St.uniform),me(F,de),Et.needsLights=We(F),Et.lightsStateVersion=ne,Et.needsLights&&(wt.ambientLightColor.value=dt.state.ambient,wt.lightProbe.value=dt.state.probe,wt.directionalLights.value=dt.state.directional,wt.directionalLightShadows.value=dt.state.directionalShadow,wt.spotLights.value=dt.state.spot,wt.spotLightShadows.value=dt.state.spotShadow,wt.rectAreaLights.value=dt.state.rectArea,wt.ltc_1.value=dt.state.rectAreaLTC1,wt.ltc_2.value=dt.state.rectAreaLTC2,wt.pointLights.value=dt.state.point,wt.pointLightShadows.value=dt.state.pointShadow,wt.hemisphereLights.value=dt.state.hemi,wt.directionalShadowMap.value=dt.state.directionalShadowMap,wt.directionalShadowMatrix.value=dt.state.directionalShadowMatrix,wt.spotShadowMap.value=dt.state.spotShadowMap,wt.spotLightMatrix.value=dt.state.spotLightMatrix,wt.spotLightMap.value=dt.state.spotLightMap,wt.pointShadowMap.value=dt.state.pointShadowMap,wt.pointShadowMatrix.value=dt.state.pointShadowMatrix),Et.currentProgram=kt,Et.uniformsList=null,kt}function ue(F){if(F.uniformsList===null){let ot=F.currentProgram.getUniforms();F.uniformsList=js.seqWithValue(ot.seq,F.uniforms)}return F.uniformsList}function me(F,ot){let vt=Lt.get(F);vt.outputColorSpace=ot.outputColorSpace,vt.batching=ot.batching,vt.batchingColor=ot.batchingColor,vt.instancing=ot.instancing,vt.instancingColor=ot.instancingColor,vt.instancingMorph=ot.instancingMorph,vt.skinning=ot.skinning,vt.morphTargets=ot.morphTargets,vt.morphNormals=ot.morphNormals,vt.morphColors=ot.morphColors,vt.morphTargetsCount=ot.morphTargetsCount,vt.numClippingPlanes=ot.numClippingPlanes,vt.numIntersection=ot.numClipIntersection,vt.vertexAlphas=ot.vertexAlphas,vt.vertexTangents=ot.vertexTangents,vt.toneMapping=ot.toneMapping}function Ie(F,ot,vt,Et,dt){ot.isScene!==!0&&(ot=Ut),B.resetTextureUnits();let Xt=ot.fog,ne=Et.isMeshStandardMaterial?ot.environment:null,de=T===null?M.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:lr,V=(Et.isMeshStandardMaterial?ht:P).get(Et.envMap||ne),tt=Et.vertexColors===!0&&!!vt.attributes.color&&vt.attributes.color.itemSize===4,kt=!!vt.attributes.tangent&&(!!Et.normalMap||Et.anisotropy>0),wt=!!vt.morphAttributes.position,Ht=!!vt.morphAttributes.normal,Jt=!!vt.morphAttributes.color,ae=ui;Et.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(ae=M.toneMapping);let qe=vt.morphAttributes.position||vt.morphAttributes.normal||vt.morphAttributes.color,Wt=qe!==void 0?qe.length:0,te=Lt.get(Et),Se=p.state.lights;if(W===!0&&(et===!0||F!==y)){let Wn=F===y&&Et.id===x;St.setState(Et,F,Wn)}let $t=!1;Et.version===te.__version?(te.needsLights&&te.lightsStateVersion!==Se.state.version||te.outputColorSpace!==de||dt.isBatchedMesh&&te.batching===!1||!dt.isBatchedMesh&&te.batching===!0||dt.isBatchedMesh&&te.batchingColor===!0&&dt.colorTexture===null||dt.isBatchedMesh&&te.batchingColor===!1&&dt.colorTexture!==null||dt.isInstancedMesh&&te.instancing===!1||!dt.isInstancedMesh&&te.instancing===!0||dt.isSkinnedMesh&&te.skinning===!1||!dt.isSkinnedMesh&&te.skinning===!0||dt.isInstancedMesh&&te.instancingColor===!0&&dt.instanceColor===null||dt.isInstancedMesh&&te.instancingColor===!1&&dt.instanceColor!==null||dt.isInstancedMesh&&te.instancingMorph===!0&&dt.morphTexture===null||dt.isInstancedMesh&&te.instancingMorph===!1&&dt.morphTexture!==null||te.envMap!==V||Et.fog===!0&&te.fog!==Xt||te.numClippingPlanes!==void 0&&(te.numClippingPlanes!==St.numPlanes||te.numIntersection!==St.numIntersection)||te.vertexAlphas!==tt||te.vertexTangents!==kt||te.morphTargets!==wt||te.morphNormals!==Ht||te.morphColors!==Jt||te.toneMapping!==ae||te.morphTargetsCount!==Wt)&&($t=!0):($t=!0,te.__version=Et.version);let pe=te.currentProgram;$t===!0&&(pe=he(Et,ot,dt));let Fe=!1,Le=!1,Ye=!1,Te=pe.getUniforms(),fn=te.uniforms;if(yt.useProgram(pe.program)&&(Fe=!0,Le=!0,Ye=!0),Et.id!==x&&(x=Et.id,Le=!0),Fe||y!==F){yt.buffers.depth.getReversed()?(G.copy(F.projectionMatrix),Lp(G),kp(G),Te.setValue(H,"projectionMatrix",G)):Te.setValue(H,"projectionMatrix",F.projectionMatrix),Te.setValue(H,"viewMatrix",F.matrixWorldInverse);let ki=Te.map.cameraPosition;ki!==void 0&&ki.setValue(H,ct.setFromMatrixPosition(F.matrixWorld)),Z.logarithmicDepthBuffer&&Te.setValue(H,"logDepthBufFC",2/(Math.log(F.far+1)/Math.LN2)),(Et.isMeshPhongMaterial||Et.isMeshToonMaterial||Et.isMeshLambertMaterial||Et.isMeshBasicMaterial||Et.isMeshStandardMaterial||Et.isShaderMaterial)&&Te.setValue(H,"isOrthographic",F.isOrthographicCamera===!0),y!==F&&(y=F,Le=!0,Ye=!0)}if(dt.isSkinnedMesh){Te.setOptional(H,dt,"bindMatrix"),Te.setOptional(H,dt,"bindMatrixInverse");let Wn=dt.skeleton;Wn&&(Wn.boneTexture===null&&Wn.computeBoneTexture(),Te.setValue(H,"boneTexture",Wn.boneTexture,B))}dt.isBatchedMesh&&(Te.setOptional(H,dt,"batchingTexture"),Te.setValue(H,"batchingTexture",dt._matricesTexture,B),Te.setOptional(H,dt,"batchingIdTexture"),Te.setValue(H,"batchingIdTexture",dt._indirectTexture,B),Te.setOptional(H,dt,"batchingColorTexture"),dt._colorsTexture!==null&&Te.setValue(H,"batchingColorTexture",dt._colorsTexture,B));let Rn=vt.morphAttributes;if((Rn.position!==void 0||Rn.normal!==void 0||Rn.color!==void 0)&&re.update(dt,vt,pe),(Le||te.receiveShadow!==dt.receiveShadow)&&(te.receiveShadow=dt.receiveShadow,Te.setValue(H,"receiveShadow",dt.receiveShadow)),Et.isMeshGouraudMaterial&&Et.envMap!==null&&(fn.envMap.value=V,fn.flipEnvMap.value=V.isCubeTexture&&V.isRenderTargetTexture===!1?-1:1),Et.isMeshStandardMaterial&&Et.envMap===null&&ot.environment!==null&&(fn.envMapIntensity.value=ot.environmentIntensity),Le&&(Te.setValue(H,"toneMappingExposure",M.toneMappingExposure),te.needsLights&&De(fn,Ye),Xt&&Et.fog===!0&&lt.refreshFogUniforms(fn,Xt),lt.refreshMaterialUniforms(fn,Et,z,O,p.state.transmissionRenderTarget[F.id]),js.upload(H,ue(te),fn,B)),Et.isShaderMaterial&&Et.uniformsNeedUpdate===!0&&(js.upload(H,ue(te),fn,B),Et.uniformsNeedUpdate=!1),Et.isSpriteMaterial&&Te.setValue(H,"center",dt.center),Te.setValue(H,"modelViewMatrix",dt.modelViewMatrix),Te.setValue(H,"normalMatrix",dt.normalMatrix),Te.setValue(H,"modelMatrix",dt.matrixWorld),Et.isShaderMaterial||Et.isRawShaderMaterial){let Wn=Et.uniformsGroups;for(let ki=0,Di=Wn.length;ki<Di;ki++){let Lh=Wn[ki];rt.update(Lh,pe),rt.bind(Lh,pe)}}return pe}function De(F,ot){F.ambientLightColor.needsUpdate=ot,F.lightProbe.needsUpdate=ot,F.directionalLights.needsUpdate=ot,F.directionalLightShadows.needsUpdate=ot,F.pointLights.needsUpdate=ot,F.pointLightShadows.needsUpdate=ot,F.spotLights.needsUpdate=ot,F.spotLightShadows.needsUpdate=ot,F.rectAreaLights.needsUpdate=ot,F.hemisphereLights.needsUpdate=ot}function We(F){return F.isMeshLambertMaterial||F.isMeshToonMaterial||F.isMeshPhongMaterial||F.isMeshStandardMaterial||F.isShadowMaterial||F.isShaderMaterial&&F.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(F,ot,vt){Lt.get(F.texture).__webglTexture=ot,Lt.get(F.depthTexture).__webglTexture=vt;let Et=Lt.get(F);Et.__hasExternalTextures=!0,Et.__autoAllocateDepthBuffer=vt===void 0,Et.__autoAllocateDepthBuffer||K.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Et.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(F,ot){let vt=Lt.get(F);vt.__webglFramebuffer=ot,vt.__useDefaultFramebuffer=ot===void 0},this.setRenderTarget=function(F,ot=0,vt=0){T=F,w=ot,A=vt;let Et=!0,dt=null,Xt=!1,ne=!1;if(F){let V=Lt.get(F);if(V.__useDefaultFramebuffer!==void 0)yt.bindFramebuffer(H.FRAMEBUFFER,null),Et=!1;else if(V.__webglFramebuffer===void 0)B.setupRenderTarget(F);else if(V.__hasExternalTextures)B.rebindTextures(F,Lt.get(F.texture).__webglTexture,Lt.get(F.depthTexture).__webglTexture);else if(F.depthBuffer){let wt=F.depthTexture;if(V.__boundDepthTexture!==wt){if(wt!==null&&Lt.has(wt)&&(F.width!==wt.image.width||F.height!==wt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");B.setupDepthRenderbuffer(F)}}let tt=F.texture;(tt.isData3DTexture||tt.isDataArrayTexture||tt.isCompressedArrayTexture)&&(ne=!0);let kt=Lt.get(F).__webglFramebuffer;F.isWebGLCubeRenderTarget?(Array.isArray(kt[ot])?dt=kt[ot][vt]:dt=kt[ot],Xt=!0):F.samples>0&&B.useMultisampledRTT(F)===!1?dt=Lt.get(F).__webglMultisampledFramebuffer:Array.isArray(kt)?dt=kt[vt]:dt=kt,b.copy(F.viewport),C.copy(F.scissor),E=F.scissorTest}else b.copy(N).multiplyScalar(z).floor(),C.copy(gt).multiplyScalar(z).floor(),E=Rt;if(yt.bindFramebuffer(H.FRAMEBUFFER,dt)&&Et&&yt.drawBuffers(F,dt),yt.viewport(b),yt.scissor(C),yt.setScissorTest(E),Xt){let V=Lt.get(F.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+ot,V.__webglTexture,vt)}else if(ne){let V=Lt.get(F.texture),tt=ot||0;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,V.__webglTexture,vt||0,tt)}x=-1},this.readRenderTargetPixels=function(F,ot,vt,Et,dt,Xt,ne){if(!(F&&F.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let de=Lt.get(F).__webglFramebuffer;if(F.isWebGLCubeRenderTarget&&ne!==void 0&&(de=de[ne]),de){yt.bindFramebuffer(H.FRAMEBUFFER,de);try{let V=F.texture,tt=V.format,kt=V.type;if(!Z.textureFormatReadable(tt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Z.textureTypeReadable(kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}ot>=0&&ot<=F.width-Et&&vt>=0&&vt<=F.height-dt&&H.readPixels(ot,vt,Et,dt,ce.convert(tt),ce.convert(kt),Xt)}finally{let V=T!==null?Lt.get(T).__webglFramebuffer:null;yt.bindFramebuffer(H.FRAMEBUFFER,V)}}},this.readRenderTargetPixelsAsync=async function(F,ot,vt,Et,dt,Xt,ne){if(!(F&&F.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let de=Lt.get(F).__webglFramebuffer;if(F.isWebGLCubeRenderTarget&&ne!==void 0&&(de=de[ne]),de){let V=F.texture,tt=V.format,kt=V.type;if(!Z.textureFormatReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Z.textureTypeReadable(kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(ot>=0&&ot<=F.width-Et&&vt>=0&&vt<=F.height-dt){yt.bindFramebuffer(H.FRAMEBUFFER,de);let wt=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,wt),H.bufferData(H.PIXEL_PACK_BUFFER,Xt.byteLength,H.STREAM_READ),H.readPixels(ot,vt,Et,dt,ce.convert(tt),ce.convert(kt),0);let Ht=T!==null?Lt.get(T).__webglFramebuffer:null;yt.bindFramebuffer(H.FRAMEBUFFER,Ht);let Jt=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await Pp(H,Jt,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,wt),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,Xt),H.deleteBuffer(wt),H.deleteSync(Jt),Xt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(F,ot=null,vt=0){F.isTexture!==!0&&(Pr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),ot=arguments[0]||null,F=arguments[1]);let Et=Math.pow(2,-vt),dt=Math.floor(F.image.width*Et),Xt=Math.floor(F.image.height*Et),ne=ot!==null?ot.x:0,de=ot!==null?ot.y:0;B.setTexture2D(F,0),H.copyTexSubImage2D(H.TEXTURE_2D,vt,0,0,ne,de,dt,Xt),yt.unbindTexture()},this.copyTextureToTexture=function(F,ot,vt=null,Et=null,dt=0){F.isTexture!==!0&&(Pr("WebGLRenderer: copyTextureToTexture function signature has changed."),Et=arguments[0]||null,F=arguments[1],ot=arguments[2],dt=arguments[3]||0,vt=null);let Xt,ne,de,V,tt,kt,wt,Ht,Jt,ae=F.isCompressedTexture?F.mipmaps[dt]:F.image;vt!==null?(Xt=vt.max.x-vt.min.x,ne=vt.max.y-vt.min.y,de=vt.isBox3?vt.max.z-vt.min.z:1,V=vt.min.x,tt=vt.min.y,kt=vt.isBox3?vt.min.z:0):(Xt=ae.width,ne=ae.height,de=ae.depth||1,V=0,tt=0,kt=0),Et!==null?(wt=Et.x,Ht=Et.y,Jt=Et.z):(wt=0,Ht=0,Jt=0);let qe=ce.convert(ot.format),Wt=ce.convert(ot.type),te;ot.isData3DTexture?(B.setTexture3D(ot,0),te=H.TEXTURE_3D):ot.isDataArrayTexture||ot.isCompressedArrayTexture?(B.setTexture2DArray(ot,0),te=H.TEXTURE_2D_ARRAY):(B.setTexture2D(ot,0),te=H.TEXTURE_2D),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,ot.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ot.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,ot.unpackAlignment);let Se=H.getParameter(H.UNPACK_ROW_LENGTH),$t=H.getParameter(H.UNPACK_IMAGE_HEIGHT),pe=H.getParameter(H.UNPACK_SKIP_PIXELS),Fe=H.getParameter(H.UNPACK_SKIP_ROWS),Le=H.getParameter(H.UNPACK_SKIP_IMAGES);H.pixelStorei(H.UNPACK_ROW_LENGTH,ae.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,ae.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,V),H.pixelStorei(H.UNPACK_SKIP_ROWS,tt),H.pixelStorei(H.UNPACK_SKIP_IMAGES,kt);let Ye=F.isDataArrayTexture||F.isData3DTexture,Te=ot.isDataArrayTexture||ot.isData3DTexture;if(F.isRenderTargetTexture||F.isDepthTexture){let fn=Lt.get(F),Rn=Lt.get(ot),Wn=Lt.get(fn.__renderTarget),ki=Lt.get(Rn.__renderTarget);yt.bindFramebuffer(H.READ_FRAMEBUFFER,Wn.__webglFramebuffer),yt.bindFramebuffer(H.DRAW_FRAMEBUFFER,ki.__webglFramebuffer);for(let Di=0;Di<de;Di++)Ye&&H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Lt.get(F).__webglTexture,dt,kt+Di),F.isDepthTexture?(Te&&H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Lt.get(ot).__webglTexture,dt,Jt+Di),H.blitFramebuffer(V,tt,Xt,ne,wt,Ht,Xt,ne,H.DEPTH_BUFFER_BIT,H.NEAREST)):Te?H.copyTexSubImage3D(te,dt,wt,Ht,Jt+Di,V,tt,Xt,ne):H.copyTexSubImage2D(te,dt,wt,Ht,Jt+Di,V,tt,Xt,ne);yt.bindFramebuffer(H.READ_FRAMEBUFFER,null),yt.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else Te?F.isDataTexture||F.isData3DTexture?H.texSubImage3D(te,dt,wt,Ht,Jt,Xt,ne,de,qe,Wt,ae.data):ot.isCompressedArrayTexture?H.compressedTexSubImage3D(te,dt,wt,Ht,Jt,Xt,ne,de,qe,ae.data):H.texSubImage3D(te,dt,wt,Ht,Jt,Xt,ne,de,qe,Wt,ae):F.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,dt,wt,Ht,Xt,ne,qe,Wt,ae.data):F.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,dt,wt,Ht,ae.width,ae.height,qe,ae.data):H.texSubImage2D(H.TEXTURE_2D,dt,wt,Ht,Xt,ne,qe,Wt,ae);H.pixelStorei(H.UNPACK_ROW_LENGTH,Se),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,$t),H.pixelStorei(H.UNPACK_SKIP_PIXELS,pe),H.pixelStorei(H.UNPACK_SKIP_ROWS,Fe),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Le),dt===0&&ot.generateMipmaps&&H.generateMipmap(te),yt.unbindTexture()},this.copyTextureToTexture3D=function(F,ot,vt=null,Et=null,dt=0){return F.isTexture!==!0&&(Pr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),vt=arguments[0]||null,Et=arguments[1]||null,F=arguments[2],ot=arguments[3],dt=arguments[4]||0),Pr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(F,ot,vt,Et,dt)},this.initRenderTarget=function(F){Lt.get(F).__webglFramebuffer===void 0&&B.setupRenderTarget(F)},this.initTexture=function(F){F.isCubeTexture?B.setTextureCube(F,0):F.isData3DTexture?B.setTexture3D(F,0):F.isDataArrayTexture||F.isCompressedArrayTexture?B.setTexture2DArray(F,0):B.setTexture2D(F,0),yt.unbindTexture()},this.resetState=function(){w=0,A=0,T=null,yt.reset(),Pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return wi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=Ne._getDrawingBufferColorSpace(t),e.unpackColorSpace=Ne._getUnpackColorSpace()}};var ma=class n{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new fe(t),this.near=e,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},ga=class extends $e{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ni,this.environmentIntensity=1,this.environmentRotation=new ni,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},ya=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=bc,this.updateRanges=[],this.version=0,this.uuid=di()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=di()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=di()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Cn=new $,Hr=class n{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)Cn.fromBufferAttribute(this,e),Cn.applyMatrix4(t),this.setXYZ(e,Cn.x,Cn.y,Cn.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Cn.fromBufferAttribute(this,e),Cn.applyNormalMatrix(t),this.setXYZ(e,Cn.x,Cn.y,Cn.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Cn.fromBufferAttribute(this,e),Cn.transformDirection(t),this.setXYZ(e,Cn.x,Cn.y,Cn.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=ei(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Be(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=Be(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Be(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Be(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Be(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=ei(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=ei(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=ei(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=ei(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Be(e,this.array),i=Be(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Be(e,this.array),i=Be(i,this.array),s=Be(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Be(e,this.array),i=Be(i,this.array),s=Be(s,this.array),r=Be(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Ze(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new n(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},$r=class extends Ci{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new fe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Hs,Er=new $,$s=new $,Vs=new $,Gs=new zt,Tr=new zt,Cu=new ke,Bo=new $,Ar=new $,zo=new $,qf=new zt,Pl=new zt,Yf=new zt,xa=class extends $e{constructor(t=new $r){if(super(),this.isSprite=!0,this.type="Sprite",Hs===void 0){Hs=new Ve;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new ya(e,5);Hs.setIndex([0,1,2,0,2,3]),Hs.setAttribute("position",new Hr(i,3,0,!1)),Hs.setAttribute("uv",new Hr(i,2,3,!1))}this.geometry=Hs,this.material=t,this.center=new zt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),$s.setFromMatrixScale(this.matrixWorld),Cu.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Vs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&$s.multiplyScalar(-Vs.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;Ho(Bo.set(-.5,-.5,0),Vs,o,$s,s,r),Ho(Ar.set(.5,-.5,0),Vs,o,$s,s,r),Ho(zo.set(.5,.5,0),Vs,o,$s,s,r),qf.set(0,0),Pl.set(1,0),Yf.set(1,1);let a=t.ray.intersectTriangle(Bo,Ar,zo,!1,Er);if(a===null&&(Ho(Ar.set(-.5,.5,0),Vs,o,$s,s,r),Pl.set(0,1),a=t.ray.intersectTriangle(Bo,zo,Ar,!1,Er),a===null))return;let l=t.ray.origin.distanceTo(Er);l<t.near||l>t.far||e.push({distance:l,point:Er.clone(),uv:Gi.getInterpolation(Er,Bo,Ar,zo,qf,Pl,Yf,new zt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Ho(n,t,e,i,s,r){Gs.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(Tr.x=r*Gs.x-s*Gs.y,Tr.y=s*Gs.x+r*Gs.y):Tr.copy(Gs),n.copy(t),n.x+=Tr.x,n.y+=Tr.y,n.applyMatrix4(Cu)}var Vr=class extends Dn{constructor(t=null,e=1,i=1,s,r,o,a,l,h=Ln,d=Ln,g,u){super(null,o,a,l,h,d,s,r,g,u),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Gr=class extends Ze{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Ws=new ke,Zf=new ke,$o=[],Jf=new Ri,Tx=new ke,Rr=new ze,Cr=new Zi,cn=class extends ze{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Gr(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Tx)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Ri),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Ws),Jf.copy(t.boundingBox).applyMatrix4(Ws),this.boundingBox.union(Jf)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Zi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Ws),Cr.copy(t.boundingSphere).applyMatrix4(Ws),this.boundingSphere.union(Cr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=t*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(t,e){let i=this.matrixWorld,s=this.count;if(Rr.geometry=this.geometry,Rr.material=this.material,Rr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Cr.copy(this.boundingSphere),Cr.applyMatrix4(i),t.ray.intersectsSphere(Cr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ws),Zf.multiplyMatrices(i,Ws),Rr.matrixWorld=Zf,Rr.raycast(t,$o);for(let o=0,a=$o.length;o<a;o++){let l=$o[o];l.instanceId=r,l.object=this,e.push(l)}$o.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Gr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Vr(new Float32Array(s*this.count),s,this.count,hh,fi));let r=this.morphTexture.source.data.data,o=0;for(let h=0;h<i.length;h++)o+=i[h];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;r[l]=a,r.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var _s=class extends Ci{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new fe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},va=new $,_a=new $,jf=new ke,Ir=new ra,Vo=new Zi,Ll=new $,Kf=new $,Bc=class extends $e{constructor(t=new Ve,e=new _s){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)va.fromBufferAttribute(e,s-1),_a.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=va.distanceTo(_a);t.setAttribute("lineDistance",new be(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Vo.copy(i.boundingSphere),Vo.applyMatrix4(s),Vo.radius+=r,t.ray.intersectsSphere(Vo)===!1)return;jf.copy(s).invert(),Ir.copy(t.ray).applyMatrix4(jf);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,h=this.isLineSegments?2:1,d=i.index,u=i.attributes.position;if(d!==null){let c=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let _=c,m=f-1;_<m;_+=h){let p=d.getX(_),S=d.getX(_+1),v=Go(this,t,Ir,l,p,S);v&&e.push(v)}if(this.isLineLoop){let _=d.getX(f-1),m=d.getX(c),p=Go(this,t,Ir,l,_,m);p&&e.push(p)}}else{let c=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let _=c,m=f-1;_<m;_+=h){let p=Go(this,t,Ir,l,_,_+1);p&&e.push(p)}if(this.isLineLoop){let _=Go(this,t,Ir,l,f-1,c);_&&e.push(_)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Go(n,t,e,i,s,r){let o=n.geometry.attributes.position;if(va.fromBufferAttribute(o,s),_a.fromBufferAttribute(o,r),e.distanceSqToSegment(va,_a,Ll,Kf)>i)return;Ll.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(Ll);if(!(l<t.near||l>t.far))return{distance:l,point:Kf.clone().applyMatrix4(n.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:n}}var Qf=new $,tu=new $,sr=class extends Bc{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[];for(let s=0,r=e.count;s<r;s+=2)Qf.fromBufferAttribute(e,s),tu.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Qf.distanceTo(tu);t.setAttribute("lineDistance",new be(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var rr=class extends Dn{constructor(t,e,i,s,r,o,a,l,h){super(t,e,i,s,r,o,a,l,h),this.isCanvasTexture=!0,this.needsUpdate=!0}},qn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let i=this.getLengths(),s=0,r=i.length,o;e?o=e:o=t*i[r-1];let a=0,l=r-1,h;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),h=i[s]-o,h<0)a=s+1;else if(h>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);let d=i[s],u=i[s+1]-d,c=(o-d)/u;return(s+c)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new zt:new $);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){let i=new $,s=[],r=[],o=[],a=new $,l=new ke;for(let c=0;c<=t;c++){let f=c/t;s[c]=this.getTangentAt(f,new $)}r[0]=new $,o[0]=new $;let h=Number.MAX_VALUE,d=Math.abs(s[0].x),g=Math.abs(s[0].y),u=Math.abs(s[0].z);d<=h&&(h=d,i.set(1,0,0)),g<=h&&(h=g,i.set(0,1,0)),u<=h&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let c=1;c<=t;c++){if(r[c]=r[c-1].clone(),o[c]=o[c-1].clone(),a.crossVectors(s[c-1],s[c]),a.length()>Number.EPSILON){a.normalize();let f=Math.acos(_n(s[c-1].dot(s[c]),-1,1));r[c].applyMatrix4(l.makeRotationAxis(a,f))}o[c].crossVectors(s[c],r[c])}if(e===!0){let c=Math.acos(_n(r[0].dot(r[t]),-1,1));c/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(c=-c);for(let f=1;f<=t;f++)r[f].applyMatrix4(l.makeRotationAxis(s[f],c*f)),o[f].crossVectors(s[f],r[f])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Wr=class extends qn{constructor(t=0,e=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new zt){let i=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),h=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let d=Math.cos(this.aRotation),g=Math.sin(this.aRotation),u=l-this.aX,c=h-this.aY;l=u*d-c*g+this.aX,h=u*g+c*d+this.aY}return i.set(l,h)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},zc=class extends Wr{constructor(t,e,i,s,r,o){super(t,e,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function yh(){let n=0,t=0,e=0,i=0;function s(r,o,a,l){n=r,t=a,e=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,h){s(o,a,h*(a-r),h*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,h,d,g){let u=(o-r)/h-(a-r)/(h+d)+(a-o)/d,c=(a-o)/d-(l-o)/(d+g)+(l-a)/g;u*=d,c*=d,s(o,a,u,c)},calc:function(r){let o=r*r,a=o*r;return n+t*r+e*o+i*a}}}var Wo=new $,kl=new yh,Dl=new yh,Ul=new yh,Xr=class extends qn{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new $){let i=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let h,d;this.closed||a>0?h=s[(a-1)%r]:(Wo.subVectors(s[0],s[1]).add(s[0]),h=Wo);let g=s[a%r],u=s[(a+1)%r];if(this.closed||a+2<r?d=s[(a+2)%r]:(Wo.subVectors(s[r-1],s[r-2]).add(s[r-1]),d=Wo),this.curveType==="centripetal"||this.curveType==="chordal"){let c=this.curveType==="chordal"?.5:.25,f=Math.pow(h.distanceToSquared(g),c),_=Math.pow(g.distanceToSquared(u),c),m=Math.pow(u.distanceToSquared(d),c);_<1e-4&&(_=1),f<1e-4&&(f=_),m<1e-4&&(m=_),kl.initNonuniformCatmullRom(h.x,g.x,u.x,d.x,f,_,m),Dl.initNonuniformCatmullRom(h.y,g.y,u.y,d.y,f,_,m),Ul.initNonuniformCatmullRom(h.z,g.z,u.z,d.z,f,_,m)}else this.curveType==="catmullrom"&&(kl.initCatmullRom(h.x,g.x,u.x,d.x,this.tension),Dl.initCatmullRom(h.y,g.y,u.y,d.y,this.tension),Ul.initCatmullRom(h.z,g.z,u.z,d.z,this.tension));return i.set(kl.calc(l),Dl.calc(l),Ul.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new $().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function eu(n,t,e,i,s){let r=(i-t)*.5,o=(s-e)*.5,a=n*n,l=n*a;return(2*e-2*i+r+o)*l+(-3*e+3*i-2*r-o)*a+r*n+e}function Ax(n,t){let e=1-n;return e*e*t}function Rx(n,t){return 2*(1-n)*n*t}function Cx(n,t){return n*n*t}function Nr(n,t,e,i){return Ax(n,t)+Rx(n,e)+Cx(n,i)}function Ix(n,t){let e=1-n;return e*e*e*t}function Px(n,t){let e=1-n;return 3*e*e*n*t}function Lx(n,t){return 3*(1-n)*n*n*t}function kx(n,t){return n*n*n*t}function Or(n,t,e,i,s){return Ix(n,t)+Px(n,e)+Lx(n,i)+kx(n,s)}var Ma=class extends qn{constructor(t=new zt,e=new zt,i=new zt,s=new zt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new zt){let i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Or(t,s.x,r.x,o.x,a.x),Or(t,s.y,r.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Hc=class extends qn{constructor(t=new $,e=new $,i=new $,s=new $){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new $){let i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Or(t,s.x,r.x,o.x,a.x),Or(t,s.y,r.y,o.y,a.y),Or(t,s.z,r.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ba=class extends qn{constructor(t=new zt,e=new zt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new zt){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new zt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},$c=class extends qn{constructor(t=new $,e=new $){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new $){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new $){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Sa=class extends qn{constructor(t=new zt,e=new zt,i=new zt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new zt){let i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(Nr(t,s.x,r.x,o.x),Nr(t,s.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},wa=class extends qn{constructor(t=new $,e=new $,i=new $){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new $){let i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(Nr(t,s.x,r.x,o.x),Nr(t,s.y,r.y,o.y),Nr(t,s.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ea=class extends qn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new zt){let i=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],h=s[o],d=s[o>s.length-2?s.length-1:o+1],g=s[o>s.length-3?s.length-1:o+2];return i.set(eu(a,l.x,h.x,d.x,g.x),eu(a,l.y,h.y,d.y,g.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new zt().fromArray(s))}return this}},Ta=Object.freeze({__proto__:null,ArcCurve:zc,CatmullRomCurve3:Xr,CubicBezierCurve:Ma,CubicBezierCurve3:Hc,EllipseCurve:Wr,LineCurve:ba,LineCurve3:$c,QuadraticBezierCurve:Sa,QuadraticBezierCurve3:wa,SplineCurve:Ea}),Vc=class extends qn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ta[i](e,t))}return this}getPoint(t,e){let i=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let o=s[r]-i,a=this.curves[r],l=a.getLength(),h=l===0?0:1-o/l;return a.getPointAt(h,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],i;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let h=0;h<l.length;h++){let d=l[h];i&&i.equals(d)||(e.push(d),i=d)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(new Ta[s.type]().fromJSON(s))}return this}},qr=class extends Vc{constructor(t){super(),this.type="Path",this.currentPoint=new zt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let i=new ba(this.currentPoint.clone(),new zt(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){let r=new Sa(this.currentPoint.clone(),new zt(t,e),new zt(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,r,o){let a=new Ma(this.currentPoint.clone(),new zt(t,e),new zt(i,s),new zt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),i=new Ea(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,i,s,r,o),this}absarc(t,e,i,s,r,o){return this.absellipse(t,e,i,i,s,r,o),this}ellipse(t,e,i,s,r,o,a,l){let h=this.currentPoint.x,d=this.currentPoint.y;return this.absellipse(t+h,e+d,i,s,r,o,a,l),this}absellipse(t,e,i,s,r,o,a,l){let h=new Wr(t,e,i,s,r,o,a,l);if(this.curves.length>0){let g=h.getPoint(0);g.equals(this.currentPoint)||this.lineTo(g.x,g.y)}this.curves.push(h);let d=h.getPoint(1);return this.currentPoint.copy(d),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Yr=class n extends Ve{constructor(t=[new zt(0,-.5),new zt(.5,0),new zt(0,.5)],e=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:i,phiLength:s},e=Math.floor(e),s=_n(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],h=[],d=1/e,g=new $,u=new zt,c=new $,f=new $,_=new $,m=0,p=0;for(let S=0;S<=t.length-1;S++)switch(S){case 0:m=t[S+1].x-t[S].x,p=t[S+1].y-t[S].y,c.x=p*1,c.y=-m,c.z=p*0,_.copy(c),c.normalize(),l.push(c.x,c.y,c.z);break;case t.length-1:l.push(_.x,_.y,_.z);break;default:m=t[S+1].x-t[S].x,p=t[S+1].y-t[S].y,c.x=p*1,c.y=-m,c.z=p*0,f.copy(c),c.x+=_.x,c.y+=_.y,c.z+=_.z,c.normalize(),l.push(c.x,c.y,c.z),_.copy(f)}for(let S=0;S<=e;S++){let v=i+S*d*s,M=Math.sin(v),D=Math.cos(v);for(let w=0;w<=t.length-1;w++){g.x=t[w].x*M,g.y=t[w].y,g.z=t[w].x*D,o.push(g.x,g.y,g.z),u.x=S/e,u.y=w/(t.length-1),a.push(u.x,u.y);let A=l[3*w+0]*M,T=l[3*w+1],x=l[3*w+0]*D;h.push(A,T,x)}}for(let S=0;S<e;S++)for(let v=0;v<t.length-1;v++){let M=v+S*t.length,D=M,w=M+t.length,A=M+t.length+1,T=M+1;r.push(D,w,T),r.push(A,T,w)}this.setIndex(r),this.setAttribute("position",new be(o,3)),this.setAttribute("uv",new be(a,2)),this.setAttribute("normal",new be(h,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.points,t.segments,t.phiStart,t.phiLength)}},ii=class n extends Yr{constructor(t=1,e=1,i=4,s=8){let r=new qr;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(i),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:i,radialSegments:s}}static fromJSON(t){return new n(t.radius,t.length,t.capSegments,t.radialSegments)}};var ge=class n extends Ve{constructor(t=1,e=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let h=this;s=Math.floor(s),r=Math.floor(r);let d=[],g=[],u=[],c=[],f=0,_=[],m=i/2,p=0;S(),o===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(d),this.setAttribute("position",new be(g,3)),this.setAttribute("normal",new be(u,3)),this.setAttribute("uv",new be(c,2));function S(){let M=new $,D=new $,w=0,A=(e-t)/i;for(let T=0;T<=r;T++){let x=[],y=T/r,b=y*(e-t)+t;for(let C=0;C<=s;C++){let E=C/s,L=E*l+a,R=Math.sin(L),U=Math.cos(L);D.x=b*R,D.y=-y*i+m,D.z=b*U,g.push(D.x,D.y,D.z),M.set(R,A,U).normalize(),u.push(M.x,M.y,M.z),c.push(E,1-y),x.push(f++)}_.push(x)}for(let T=0;T<s;T++)for(let x=0;x<r;x++){let y=_[x][T],b=_[x+1][T],C=_[x+1][T+1],E=_[x][T+1];(t>0||x!==0)&&(d.push(y,b,E),w+=3),(e>0||x!==r-1)&&(d.push(b,C,E),w+=3)}h.addGroup(p,w,0),p+=w}function v(M){let D=f,w=new zt,A=new $,T=0,x=M===!0?t:e,y=M===!0?1:-1;for(let C=1;C<=s;C++)g.push(0,m*y,0),u.push(0,y,0),c.push(.5,.5),f++;let b=f;for(let C=0;C<=s;C++){let L=C/s*l+a,R=Math.cos(L),U=Math.sin(L);A.x=x*U,A.y=m*y,A.z=x*R,g.push(A.x,A.y,A.z),u.push(0,y,0),w.x=R*.5+.5,w.y=U*.5*y+.5,c.push(w.x,w.y),f++}for(let C=0;C<s;C++){let E=D+C,L=b+C;M===!0?d.push(L,L+1,E):d.push(L+1,L,E),T+=3}h.addGroup(p,T,M===!0?1:2),p+=T}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},tn=class n extends ge{constructor(t=1,e=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new n(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Gc=class n extends Ve{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};let r=[],o=[];a(s),h(i),d(),this.setAttribute("position",new be(r,3)),this.setAttribute("normal",new be(r.slice(),3)),this.setAttribute("uv",new be(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(S){let v=new $,M=new $,D=new $;for(let w=0;w<e.length;w+=3)c(e[w+0],v),c(e[w+1],M),c(e[w+2],D),l(v,M,D,S)}function l(S,v,M,D){let w=D+1,A=[];for(let T=0;T<=w;T++){A[T]=[];let x=S.clone().lerp(M,T/w),y=v.clone().lerp(M,T/w),b=w-T;for(let C=0;C<=b;C++)C===0&&T===w?A[T][C]=x:A[T][C]=x.clone().lerp(y,C/b)}for(let T=0;T<w;T++)for(let x=0;x<2*(w-T)-1;x++){let y=Math.floor(x/2);x%2===0?(u(A[T][y+1]),u(A[T+1][y]),u(A[T][y])):(u(A[T][y+1]),u(A[T+1][y+1]),u(A[T+1][y]))}}function h(S){let v=new $;for(let M=0;M<r.length;M+=3)v.x=r[M+0],v.y=r[M+1],v.z=r[M+2],v.normalize().multiplyScalar(S),r[M+0]=v.x,r[M+1]=v.y,r[M+2]=v.z}function d(){let S=new $;for(let v=0;v<r.length;v+=3){S.x=r[v+0],S.y=r[v+1],S.z=r[v+2];let M=m(S)/2/Math.PI+.5,D=p(S)/Math.PI+.5;o.push(M,1-D)}f(),g()}function g(){for(let S=0;S<o.length;S+=6){let v=o[S+0],M=o[S+2],D=o[S+4],w=Math.max(v,M,D),A=Math.min(v,M,D);w>.9&&A<.1&&(v<.2&&(o[S+0]+=1),M<.2&&(o[S+2]+=1),D<.2&&(o[S+4]+=1))}}function u(S){r.push(S.x,S.y,S.z)}function c(S,v){let M=S*3;v.x=t[M+0],v.y=t[M+1],v.z=t[M+2]}function f(){let S=new $,v=new $,M=new $,D=new $,w=new zt,A=new zt,T=new zt;for(let x=0,y=0;x<r.length;x+=9,y+=6){S.set(r[x+0],r[x+1],r[x+2]),v.set(r[x+3],r[x+4],r[x+5]),M.set(r[x+6],r[x+7],r[x+8]),w.set(o[y+0],o[y+1]),A.set(o[y+2],o[y+3]),T.set(o[y+4],o[y+5]),D.copy(S).add(v).add(M).divideScalar(3);let b=m(D);_(w,y+0,S,b),_(A,y+2,v,b),_(T,y+4,M,b)}}function _(S,v,M,D){D<0&&S.x===1&&(o[v]=S.x-1),M.x===0&&M.z===0&&(o[v]=D/2/Math.PI+.5)}function m(S){return Math.atan2(S.z,-S.x)}function p(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.vertices,t.indices,t.radius,t.details)}};var Ms=class extends qr{constructor(t){super(t),this.uuid=di(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(new qr().fromJSON(s))}return this}},Dx={triangulate:function(n,t,e=2){let i=t&&t.length,s=i?t[0]*e:n.length,r=Iu(n,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,h,d,g,u,c;if(i&&(r=Bx(n,t,r,e)),n.length>80*e){a=h=n[0],l=d=n[1];for(let f=e;f<s;f+=e)g=n[f],u=n[f+1],g<a&&(a=g),u<l&&(l=u),g>h&&(h=g),u>d&&(d=u);c=Math.max(h-a,d-l),c=c!==0?32767/c:0}return Zr(r,o,e,a,l,c,0),o}};function Iu(n,t,e,i,s){let r,o;if(s===Jx(n,t,e,i)>0)for(r=t;r<e;r+=i)o=nu(r,n[r],n[r+1],o);else for(r=e-i;r>=t;r-=i)o=nu(r,n[r],n[r+1],o);return o&&Fa(o,o.next)&&(jr(o),o=o.next),o}function bs(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(Fa(e,e.next)||Qe(e.prev,e,e.next)===0)){if(jr(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function Zr(n,t,e,i,s,r,o){if(!n)return;!o&&r&&Gx(n,i,s,r);let a=n,l,h;for(;n.prev!==n.next;){if(l=n.prev,h=n.next,r?Nx(n,i,s,r):Ux(n)){t.push(l.i/e|0),t.push(n.i/e|0),t.push(h.i/e|0),jr(n),n=h.next,a=h.next;continue}if(n=h,n===a){o?o===1?(n=Ox(bs(n),t,e),Zr(n,t,e,i,s,r,2)):o===2&&Fx(n,t,e,i,s,r):Zr(bs(n),t,e,i,s,r,1);break}}}function Ux(n){let t=n.prev,e=n,i=n.next;if(Qe(t,e,i)>=0)return!1;let s=t.x,r=e.x,o=i.x,a=t.y,l=e.y,h=i.y,d=s<r?s<o?s:o:r<o?r:o,g=a<l?a<h?a:h:l<h?l:h,u=s>r?s>o?s:o:r>o?r:o,c=a>l?a>h?a:h:l>h?l:h,f=i.next;for(;f!==t;){if(f.x>=d&&f.x<=u&&f.y>=g&&f.y<=c&&qs(s,a,r,l,o,h,f.x,f.y)&&Qe(f.prev,f,f.next)>=0)return!1;f=f.next}return!0}function Nx(n,t,e,i){let s=n.prev,r=n,o=n.next;if(Qe(s,r,o)>=0)return!1;let a=s.x,l=r.x,h=o.x,d=s.y,g=r.y,u=o.y,c=a<l?a<h?a:h:l<h?l:h,f=d<g?d<u?d:u:g<u?g:u,_=a>l?a>h?a:h:l>h?l:h,m=d>g?d>u?d:u:g>u?g:u,p=Wc(c,f,t,e,i),S=Wc(_,m,t,e,i),v=n.prevZ,M=n.nextZ;for(;v&&v.z>=p&&M&&M.z<=S;){if(v.x>=c&&v.x<=_&&v.y>=f&&v.y<=m&&v!==s&&v!==o&&qs(a,d,l,g,h,u,v.x,v.y)&&Qe(v.prev,v,v.next)>=0||(v=v.prevZ,M.x>=c&&M.x<=_&&M.y>=f&&M.y<=m&&M!==s&&M!==o&&qs(a,d,l,g,h,u,M.x,M.y)&&Qe(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;v&&v.z>=p;){if(v.x>=c&&v.x<=_&&v.y>=f&&v.y<=m&&v!==s&&v!==o&&qs(a,d,l,g,h,u,v.x,v.y)&&Qe(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;M&&M.z<=S;){if(M.x>=c&&M.x<=_&&M.y>=f&&M.y<=m&&M!==s&&M!==o&&qs(a,d,l,g,h,u,M.x,M.y)&&Qe(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function Ox(n,t,e){let i=n;do{let s=i.prev,r=i.next.next;!Fa(s,r)&&Pu(s,i,i.next,r)&&Jr(s,r)&&Jr(r,s)&&(t.push(s.i/e|0),t.push(i.i/e|0),t.push(r.i/e|0),jr(i),jr(i.next),i=n=r),i=i.next}while(i!==n);return bs(i)}function Fx(n,t,e,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&qx(o,a)){let l=Lu(o,a);o=bs(o,o.next),l=bs(l,l.next),Zr(o,t,e,i,s,r,0),Zr(l,t,e,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function Bx(n,t,e,i){let s=[],r,o,a,l,h;for(r=0,o=t.length;r<o;r++)a=t[r]*i,l=r<o-1?t[r+1]*i:n.length,h=Iu(n,a,l,i,!1),h===h.next&&(h.steiner=!0),s.push(Xx(h));for(s.sort(zx),r=0;r<s.length;r++)e=Hx(s[r],e);return e}function zx(n,t){return n.x-t.x}function Hx(n,t){let e=$x(n,t);if(!e)return t;let i=Lu(e,n);return bs(i,i.next),bs(e,e.next)}function $x(n,t){let e=t,i=-1/0,s,r=n.x,o=n.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let u=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=r&&u>i&&(i=u,s=e.x<e.next.x?e:e.next,u===r))return s}e=e.next}while(e!==t);if(!s)return null;let a=s,l=s.x,h=s.y,d=1/0,g;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&qs(o<h?r:i,o,l,h,o<h?i:r,o,e.x,e.y)&&(g=Math.abs(o-e.y)/(r-e.x),Jr(e,n)&&(g<d||g===d&&(e.x>s.x||e.x===s.x&&Vx(s,e)))&&(s=e,d=g)),e=e.next;while(e!==a);return s}function Vx(n,t){return Qe(n.prev,n,t.prev)<0&&Qe(t.next,n,n.next)<0}function Gx(n,t,e,i){let s=n;do s.z===0&&(s.z=Wc(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,Wx(s)}function Wx(n){let t,e,i,s,r,o,a,l,h=1;do{for(e=n,n=null,r=null,o=0;e;){for(o++,i=e,a=0,t=0;t<h&&(a++,i=i.nextZ,!!i);t++);for(l=h;a>0||l>0&&i;)a!==0&&(l===0||!i||e.z<=i.z)?(s=e,e=e.nextZ,a--):(s=i,i=i.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;e=i}r.nextZ=null,h*=2}while(o>1);return n}function Wc(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function Xx(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function qs(n,t,e,i,s,r,o,a){return(s-o)*(t-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(i-a)}function qx(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!Yx(n,t)&&(Jr(n,t)&&Jr(t,n)&&Zx(n,t)&&(Qe(n.prev,n,t.prev)||Qe(n,t.prev,t))||Fa(n,t)&&Qe(n.prev,n,n.next)>0&&Qe(t.prev,t,t.next)>0)}function Qe(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function Fa(n,t){return n.x===t.x&&n.y===t.y}function Pu(n,t,e,i){let s=qo(Qe(n,t,e)),r=qo(Qe(n,t,i)),o=qo(Qe(e,i,n)),a=qo(Qe(e,i,t));return!!(s!==r&&o!==a||s===0&&Xo(n,e,t)||r===0&&Xo(n,i,t)||o===0&&Xo(e,n,i)||a===0&&Xo(e,t,i))}function Xo(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function qo(n){return n>0?1:n<0?-1:0}function Yx(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&Pu(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function Jr(n,t){return Qe(n.prev,n,n.next)<0?Qe(n,t,n.next)>=0&&Qe(n,n.prev,t)>=0:Qe(n,t,n.prev)<0||Qe(n,n.next,t)<0}function Zx(n,t){let e=n,i=!1,s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function Lu(n,t){let e=new Xc(n.i,n.x,n.y),i=new Xc(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function nu(n,t,e,i){let s=new Xc(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function jr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Xc(n,t,e){this.i=n,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Jx(n,t,e,i){let s=0;for(let r=t,o=e-i;r<e;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}var Xi=class n{static area(t){let e=t.length,i=0;for(let s=e-1,r=0;r<e;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return n.area(t)<0}static triangulateShape(t,e){let i=[],s=[],r=[];iu(t),su(i,t);let o=t.length;e.forEach(iu);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,su(i,e[l]);let a=Dx.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function iu(n){let t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function su(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}var Aa=class n extends Ve{constructor(t=new Ms([new zt(.5,.5),new zt(-.5,.5),new zt(-.5,-.5),new zt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let i=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){let h=t[a];o(h)}this.setAttribute("position",new be(s,3)),this.setAttribute("uv",new be(r,2)),this.computeVertexNormals();function o(a){let l=[],h=e.curveSegments!==void 0?e.curveSegments:12,d=e.steps!==void 0?e.steps:1,g=e.depth!==void 0?e.depth:1,u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,c=e.bevelThickness!==void 0?e.bevelThickness:.2,f=e.bevelSize!==void 0?e.bevelSize:c-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,S=e.UVGenerator!==void 0?e.UVGenerator:jx,v,M=!1,D,w,A,T;p&&(v=p.getSpacedPoints(d),M=!0,u=!1,D=p.computeFrenetFrames(d,!1),w=new $,A=new $,T=new $),u||(m=0,c=0,f=0,_=0);let x=a.extractPoints(h),y=x.shape,b=x.holes;if(!Xi.isClockWise(y)){y=y.reverse();for(let st=0,pt=b.length;st<pt;st++){let H=b[st];Xi.isClockWise(H)&&(b[st]=H.reverse())}}let E=Xi.triangulateShape(y,b),L=y;for(let st=0,pt=b.length;st<pt;st++){let H=b[st];y=y.concat(H)}function R(st,pt,H){return pt||console.error("THREE.ExtrudeGeometry: vec does not exist"),st.clone().addScaledVector(pt,H)}let U=y.length,O=E.length;function z(st,pt,H){let Vt,K,Z,yt=st.x-pt.x,Y=st.y-pt.y,Lt=H.x-st.x,B=H.y-st.y,P=yt*yt+Y*Y,ht=yt*B-Y*Lt;if(Math.abs(ht)>Number.EPSILON){let _t=Math.sqrt(P),Pt=Math.sqrt(Lt*Lt+B*B),j=pt.x-Y/_t,at=pt.y+yt/_t,lt=H.x-B/Pt,xt=H.y+Lt/Pt,Ct=((lt-j)*B-(xt-at)*Lt)/(yt*B-Y*Lt);Vt=j+yt*Ct-st.x,K=at+Y*Ct-st.y;let St=Vt*Vt+K*K;if(St<=2)return new zt(Vt,K);Z=Math.sqrt(St/2)}else{let _t=!1;yt>Number.EPSILON?Lt>Number.EPSILON&&(_t=!0):yt<-Number.EPSILON?Lt<-Number.EPSILON&&(_t=!0):Math.sign(Y)===Math.sign(B)&&(_t=!0),_t?(Vt=-Y,K=yt,Z=Math.sqrt(P)):(Vt=yt,K=Y,Z=Math.sqrt(P/2))}return new zt(Vt/Z,K/Z)}let q=[];for(let st=0,pt=L.length,H=pt-1,Vt=st+1;st<pt;st++,H++,Vt++)H===pt&&(H=0),Vt===pt&&(Vt=0),q[st]=z(L[st],L[H],L[Vt]);let X=[],N,gt=q.concat();for(let st=0,pt=b.length;st<pt;st++){let H=b[st];N=[];for(let Vt=0,K=H.length,Z=K-1,yt=Vt+1;Vt<K;Vt++,Z++,yt++)Z===K&&(Z=0),yt===K&&(yt=0),N[Vt]=z(H[Vt],H[Z],H[yt]);X.push(N),gt=gt.concat(N)}for(let st=0;st<m;st++){let pt=st/m,H=c*Math.cos(pt*Math.PI/2),Vt=f*Math.sin(pt*Math.PI/2)+_;for(let K=0,Z=L.length;K<Z;K++){let yt=R(L[K],q[K],Vt);G(yt.x,yt.y,-H)}for(let K=0,Z=b.length;K<Z;K++){let yt=b[K];N=X[K];for(let Y=0,Lt=yt.length;Y<Lt;Y++){let B=R(yt[Y],N[Y],Vt);G(B.x,B.y,-H)}}}let Rt=f+_;for(let st=0;st<U;st++){let pt=u?R(y[st],gt[st],Rt):y[st];M?(A.copy(D.normals[0]).multiplyScalar(pt.x),w.copy(D.binormals[0]).multiplyScalar(pt.y),T.copy(v[0]).add(A).add(w),G(T.x,T.y,T.z)):G(pt.x,pt.y,0)}for(let st=1;st<=d;st++)for(let pt=0;pt<U;pt++){let H=u?R(y[pt],gt[pt],Rt):y[pt];M?(A.copy(D.normals[st]).multiplyScalar(H.x),w.copy(D.binormals[st]).multiplyScalar(H.y),T.copy(v[st]).add(A).add(w),G(T.x,T.y,T.z)):G(H.x,H.y,g/d*st)}for(let st=m-1;st>=0;st--){let pt=st/m,H=c*Math.cos(pt*Math.PI/2),Vt=f*Math.sin(pt*Math.PI/2)+_;for(let K=0,Z=L.length;K<Z;K++){let yt=R(L[K],q[K],Vt);G(yt.x,yt.y,g+H)}for(let K=0,Z=b.length;K<Z;K++){let yt=b[K];N=X[K];for(let Y=0,Lt=yt.length;Y<Lt;Y++){let B=R(yt[Y],N[Y],Vt);M?G(B.x,B.y+v[d-1].y,v[d-1].x+H):G(B.x,B.y,g+H)}}}k(),W();function k(){let st=s.length/3;if(u){let pt=0,H=U*pt;for(let Vt=0;Vt<O;Vt++){let K=E[Vt];J(K[2]+H,K[1]+H,K[0]+H)}pt=d+m*2,H=U*pt;for(let Vt=0;Vt<O;Vt++){let K=E[Vt];J(K[0]+H,K[1]+H,K[2]+H)}}else{for(let pt=0;pt<O;pt++){let H=E[pt];J(H[2],H[1],H[0])}for(let pt=0;pt<O;pt++){let H=E[pt];J(H[0]+U*d,H[1]+U*d,H[2]+U*d)}}i.addGroup(st,s.length/3-st,0)}function W(){let st=s.length/3,pt=0;et(L,pt),pt+=L.length;for(let H=0,Vt=b.length;H<Vt;H++){let K=b[H];et(K,pt),pt+=K.length}i.addGroup(st,s.length/3-st,1)}function et(st,pt){let H=st.length;for(;--H>=0;){let Vt=H,K=H-1;K<0&&(K=st.length-1);for(let Z=0,yt=d+m*2;Z<yt;Z++){let Y=U*Z,Lt=U*(Z+1),B=pt+Vt+Y,P=pt+K+Y,ht=pt+K+Lt,_t=pt+Vt+Lt;ct(B,P,ht,_t)}}}function G(st,pt,H){l.push(st),l.push(pt),l.push(H)}function J(st,pt,H){Tt(st),Tt(pt),Tt(H);let Vt=s.length/3,K=S.generateTopUV(i,s,Vt-3,Vt-2,Vt-1);Ut(K[0]),Ut(K[1]),Ut(K[2])}function ct(st,pt,H,Vt){Tt(st),Tt(pt),Tt(Vt),Tt(pt),Tt(H),Tt(Vt);let K=s.length/3,Z=S.generateSideWallUV(i,s,K-6,K-3,K-2,K-1);Ut(Z[0]),Ut(Z[1]),Ut(Z[3]),Ut(Z[1]),Ut(Z[2]),Ut(Z[3])}function Tt(st){s.push(l[st*3+0]),s.push(l[st*3+1]),s.push(l[st*3+2])}function Ut(st){r.push(st.x),r.push(st.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return Kx(e,i,t)}static fromJSON(t,e){let i=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];i.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Ta[s.type]().fromJSON(s)),new n(i,t.options)}},jx={generateTopUV:function(n,t,e,i,s){let r=t[e*3],o=t[e*3+1],a=t[i*3],l=t[i*3+1],h=t[s*3],d=t[s*3+1];return[new zt(r,o),new zt(a,l),new zt(h,d)]},generateSideWallUV:function(n,t,e,i,s,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],h=t[i*3],d=t[i*3+1],g=t[i*3+2],u=t[s*3],c=t[s*3+1],f=t[s*3+2],_=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(a-d)<Math.abs(o-h)?[new zt(o,1-l),new zt(h,1-g),new zt(u,1-f),new zt(_,1-p)]:[new zt(a,1-l),new zt(d,1-g),new zt(c,1-f),new zt(m,1-p)]}};function Kx(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var hn=class n extends Gc{constructor(t=1,e=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new n(t.radius,t.detail)}};var or=class n extends Ve{constructor(t=.5,e=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);let a=[],l=[],h=[],d=[],g=t,u=(e-t)/s,c=new $,f=new zt;for(let _=0;_<=s;_++){for(let m=0;m<=i;m++){let p=r+m/i*o;c.x=g*Math.cos(p),c.y=g*Math.sin(p),l.push(c.x,c.y,c.z),h.push(0,0,1),f.x=(c.x/e+1)/2,f.y=(c.y/e+1)/2,d.push(f.x,f.y)}g+=u}for(let _=0;_<s;_++){let m=_*(i+1);for(let p=0;p<i;p++){let S=p+m,v=S,M=S+i+1,D=S+i+2,w=S+1;a.push(v,M,w),a.push(M,D,w)}}this.setIndex(a),this.setAttribute("position",new be(l,3)),this.setAttribute("normal",new be(h,3)),this.setAttribute("uv",new be(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},Ra=class n extends Ve{constructor(t=new Ms([new zt(0,.5),new zt(-.5,-.5),new zt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let i=[],s=[],r=[],o=[],a=0,l=0;if(Array.isArray(t)===!1)h(t);else for(let d=0;d<t.length;d++)h(t[d]),this.addGroup(a,l,d),a+=l,l=0;this.setIndex(i),this.setAttribute("position",new be(s,3)),this.setAttribute("normal",new be(r,3)),this.setAttribute("uv",new be(o,2));function h(d){let g=s.length/3,u=d.extractPoints(e),c=u.shape,f=u.holes;Xi.isClockWise(c)===!1&&(c=c.reverse());for(let m=0,p=f.length;m<p;m++){let S=f[m];Xi.isClockWise(S)===!0&&(f[m]=S.reverse())}let _=Xi.triangulateShape(c,f);for(let m=0,p=f.length;m<p;m++){let S=f[m];c=c.concat(S)}for(let m=0,p=c.length;m<p;m++){let S=c[m];s.push(S.x,S.y,0),r.push(0,0,1),o.push(S.x,S.y)}for(let m=0,p=_.length;m<p;m++){let S=_[m],v=S[0]+g,M=S[1]+g,D=S[2]+g;i.push(v,M,D),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return Qx(e,t)}static fromJSON(t,e){let i=[];for(let s=0,r=t.shapes.length;s<r;s++){let o=e[t.shapes[s]];i.push(o)}return new n(i,t.curveSegments)}};function Qx(n,t){if(t.shapes=[],Array.isArray(n))for(let e=0,i=n.length;e<i;e++){let s=n[e];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t}var Ee=class n extends Ve{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),h=0,d=[],g=new $,u=new $,c=[],f=[],_=[],m=[];for(let p=0;p<=i;p++){let S=[],v=p/i,M=0;p===0&&o===0?M=.5/e:p===i&&l===Math.PI&&(M=-.5/e);for(let D=0;D<=e;D++){let w=D/e;g.x=-t*Math.cos(s+w*r)*Math.sin(o+v*a),g.y=t*Math.cos(o+v*a),g.z=t*Math.sin(s+w*r)*Math.sin(o+v*a),f.push(g.x,g.y,g.z),u.copy(g).normalize(),_.push(u.x,u.y,u.z),m.push(w+M,1-v),S.push(h++)}d.push(S)}for(let p=0;p<i;p++)for(let S=0;S<e;S++){let v=d[p][S+1],M=d[p][S],D=d[p+1][S],w=d[p+1][S+1];(p!==0||o>0)&&c.push(v,M,w),(p!==i-1||l<Math.PI)&&c.push(M,D,w)}this.setIndex(c),this.setAttribute("position",new be(f,3)),this.setAttribute("normal",new be(_,3)),this.setAttribute("uv",new be(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var sn=class n extends Ve{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);let o=[],a=[],l=[],h=[],d=new $,g=new $,u=new $;for(let c=0;c<=i;c++)for(let f=0;f<=s;f++){let _=f/s*r,m=c/i*Math.PI*2;g.x=(t+e*Math.cos(m))*Math.cos(_),g.y=(t+e*Math.cos(m))*Math.sin(_),g.z=e*Math.sin(m),a.push(g.x,g.y,g.z),d.x=t*Math.cos(_),d.y=t*Math.sin(_),u.subVectors(g,d).normalize(),l.push(u.x,u.y,u.z),h.push(f/s),h.push(c/i)}for(let c=1;c<=i;c++)for(let f=1;f<=s;f++){let _=(s+1)*c+f-1,m=(s+1)*(c-1)+f-1,p=(s+1)*(c-1)+f,S=(s+1)*c+f;o.push(_,m,S),o.push(m,p,S)}this.setIndex(o),this.setAttribute("position",new be(a,3)),this.setAttribute("normal",new be(l,3)),this.setAttribute("uv",new be(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Ca=class n extends Ve{constructor(t=new wa(new $(-1,-1,0),new $(-1,1,0),new $(1,1,0)),e=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:i,radialSegments:s,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new $,l=new $,h=new zt,d=new $,g=[],u=[],c=[],f=[];_(),this.setIndex(f),this.setAttribute("position",new be(g,3)),this.setAttribute("normal",new be(u,3)),this.setAttribute("uv",new be(c,2));function _(){for(let v=0;v<e;v++)m(v);m(r===!1?e:0),S(),p()}function m(v){d=t.getPointAt(v/e,d);let M=o.normals[v],D=o.binormals[v];for(let w=0;w<=s;w++){let A=w/s*Math.PI*2,T=Math.sin(A),x=-Math.cos(A);l.x=x*M.x+T*D.x,l.y=x*M.y+T*D.y,l.z=x*M.z+T*D.z,l.normalize(),u.push(l.x,l.y,l.z),a.x=d.x+i*l.x,a.y=d.y+i*l.y,a.z=d.z+i*l.z,g.push(a.x,a.y,a.z)}}function p(){for(let v=1;v<=e;v++)for(let M=1;M<=s;M++){let D=(s+1)*(v-1)+(M-1),w=(s+1)*v+(M-1),A=(s+1)*v+M,T=(s+1)*(v-1)+M;f.push(D,w,T),f.push(w,A,T)}}function S(){for(let v=0;v<=e;v++)for(let M=0;M<=s;M++)h.x=v/e,h.y=M/s,c.push(h.x,h.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new n(new Ta[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var Ia=class extends Ci{static get type(){return"MeshToonMaterial"}constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.color=new fe(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=vu,this.normalScale=new zt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};function Yo(n,t,e){return!n||!e&&n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function tv(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var ar=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=i+2;;){if(s===void 0){if(t<r)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=e[++i],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=e[--i-1],t>=r)break t}o=i,i=0;break e}break n}for(;i<o;){let a=i+o>>>1;t<e[a]?o=a:i=a+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=i[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},qc=class extends ar{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Jh,endingEnd:Jh}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case jh:r=t,a=2*e-i;break;case Kh:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case jh:o=t,l=2*i-e;break;case Kh:o=1,l=i+s[1]-s[0];break;default:o=t-1,l=e}let h=(i-e)*.5,d=this.valueSize;this._weightPrev=h/(e-a),this._weightNext=h/(l-i),this._offsetPrev=r*d,this._offsetNext=o*d}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,h=l-a,d=this._offsetPrev,g=this._offsetNext,u=this._weightPrev,c=this._weightNext,f=(i-e)/(s-e),_=f*f,m=_*f,p=-u*m+2*u*_-u*f,S=(1+u)*m+(-1.5-2*u)*_+(-.5+u)*f+1,v=(-1-c)*m+(1.5+c)*_+.5*f,M=c*m-c*_;for(let D=0;D!==a;++D)r[D]=p*o[d+D]+S*o[h+D]+v*o[l+D]+M*o[g+D];return r}},Yc=class extends ar{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,h=l-a,d=(i-e)/(s-e),g=1-d;for(let u=0;u!==a;++u)r[u]=o[h+u]*g+o[l+u]*d;return r}},Zc=class extends ar{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},si=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Yo(e,this.TimeBufferType),this.values=Yo(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:Yo(t.times,Array),values:Yo(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Zc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Yc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new qc(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case ta:e=this.InterpolantFactoryMethodDiscrete;break;case Mc:e=this.InterpolantFactoryMethodLinear;break;case sl:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ta;case this.InterpolantFactoryMethodLinear:return Mc;case this.InterpolantFactoryMethodSmooth:return sl}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t}return this}trim(t,e){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<t;)++r;for(;o!==-1&&i[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&tv(s))for(let a=0,l=s.length;a!==l;++a){let h=s[a];if(isNaN(h)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,h),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===sl,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,h=t[a],d=t[a+1];if(h!==d&&(a!==1||h!==t[0]))if(s)l=!0;else{let g=a*i,u=g-i,c=g+i;for(let f=0;f!==i;++f){let _=e[g+f];if(_!==e[u+f]||_!==e[c+f]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let g=a*i,u=o*i;for(let c=0;c!==i;++c)e[u+c]=e[g+c]}++o}}if(r>0){t[o]=t[r];for(let a=r*i,l=o*i,h=0;h!==i;++h)e[l+h]=e[a+h];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};si.prototype.TimeBufferType=Float32Array;si.prototype.ValueBufferType=Float32Array;si.prototype.DefaultInterpolation=Mc;var Ss=class extends si{constructor(t,e,i){super(t,e,i)}};Ss.prototype.ValueTypeName="bool";Ss.prototype.ValueBufferType=Array;Ss.prototype.DefaultInterpolation=ta;Ss.prototype.InterpolantFactoryMethodLinear=void 0;Ss.prototype.InterpolantFactoryMethodSmooth=void 0;var Jc=class extends si{};Jc.prototype.ValueTypeName="color";var jc=class extends si{};jc.prototype.ValueTypeName="number";var Kc=class extends ar{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-e)/(s-e),h=t*a;for(let d=h+a;h!==d;h+=4)$n.slerpFlat(r,0,o,h-a,o,h,l);return r}},Pa=class extends si{InterpolantFactoryMethodLinear(t){return new Kc(this.times,this.values,this.getValueSize(),t)}};Pa.prototype.ValueTypeName="quaternion";Pa.prototype.InterpolantFactoryMethodSmooth=void 0;var ws=class extends si{constructor(t,e,i){super(t,e,i)}};ws.prototype.ValueTypeName="string";ws.prototype.ValueBufferType=Array;ws.prototype.DefaultInterpolation=ta;ws.prototype.InterpolantFactoryMethodLinear=void 0;ws.prototype.InterpolantFactoryMethodSmooth=void 0;var Qc=class extends si{};Qc.prototype.ValueTypeName="vector";var th=class{constructor(t,e,i){let s=this,r=!1,o=0,a=0,l,h=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(d){a++,r===!1&&s.onStart!==void 0&&s.onStart(d,o,a),r=!0},this.itemEnd=function(d){o++,s.onProgress!==void 0&&s.onProgress(d,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(d){s.onError!==void 0&&s.onError(d)},this.resolveURL=function(d){return l?l(d):d},this.setURLModifier=function(d){return l=d,this},this.addHandler=function(d,g){return h.push(d,g),this},this.removeHandler=function(d){let g=h.indexOf(d);return g!==-1&&h.splice(g,2),this},this.getHandler=function(d){for(let g=0,u=h.length;g<u;g+=2){let c=h[g],f=h[g+1];if(c.global&&(c.lastIndex=0),c.test(d))return f}return null}}},ev=new th,eh=class{constructor(t){this.manager=t!==void 0?t:ev,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};eh.DEFAULT_MATERIAL_NAME="__DEFAULT";var La=class extends $e{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new fe(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},ka=class extends La{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy($e.DEFAULT_UP),this.updateMatrix(),this.groundColor=new fe(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Nl=new ke,ru=new $,ou=new $,nh=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new zt(512,512),this.map=null,this.mapPass=null,this.matrix=new ke,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new zr,this._frameExtents=new zt(1,1),this._viewportCount=1,this._viewports=[new nn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,i=this.matrix;ru.setFromMatrixPosition(t.matrixWorld),e.position.copy(ru),ou.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ou),e.updateMatrixWorld(),Nl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Nl),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Nl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var ih=class extends nh{constructor(){super(new fa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Da=class extends La{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy($e.DEFAULT_UP),this.updateMatrix(),this.target=new $e,this.shadow=new ih}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var xh="\\[\\]\\.:\\/",nv=new RegExp("["+xh+"]","g"),vh="[^"+xh+"]",iv="[^"+xh.replace("\\.","")+"]",sv=/((?:WC+[\/:])*)/.source.replace("WC",vh),rv=/(WCOD+)?/.source.replace("WCOD",iv),ov=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",vh),av=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",vh),lv=new RegExp("^"+sv+rv+ov+av+"$"),cv=["material","materials","bones","map"],sh=class{constructor(t,e,i){let s=i||Ke.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},Ke=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(nv,"")}static parseTrackName(t){let e=lv.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);cv.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=i(a.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let h=e.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let d=0;d<t.length;d++)if(t[d].name===h){h=d;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(h!==void 0){if(t[h]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[h]}}let o=t[s];if(o===void 0){let h=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ke.Composite=sh;Ke.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ke.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ke.prototype.GetterByBindingType=[Ke.prototype._getValue_direct,Ke.prototype._getValue_array,Ke.prototype._getValue_arrayElement,Ke.prototype._getValue_toArray];Ke.prototype.SetterByBindingTypeAndVersioning=[[Ke.prototype._setValue_direct,Ke.prototype._setValue_direct_setNeedsUpdate,Ke.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ke.prototype._setValue_array,Ke.prototype._setValue_array_setNeedsUpdate,Ke.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ke.prototype._setValue_arrayElement,Ke.prototype._setValue_arrayElement_setNeedsUpdate,Ke.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ke.prototype._setValue_fromArray,Ke.prototype._setValue_fromArray_setNeedsUpdate,Ke.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var L1=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:rh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=rh);var hv=2.3,Je=7.2,Ba=.16,ji=(n,t,e)=>{let i=Math.max(0,Math.min(1,(e-n)/(t-n)));return i*i*(3-2*i)};function ku(n,t,e){let i=n.points,s=i.length-1,r=n.lengthM/s,o=k=>{let W=Math.max(0,Math.min(s,k/r)),et=Math.min(s-1,Math.floor(W)),G=W-et,J=i[Math.max(0,et-1)],ct=i[et],Tt=i[et+1],Ut=i[Math.min(s,et+2)],st=pt=>.5*(2*ct[pt]+(-J[pt]+Tt[pt])*G+(2*J[pt]-5*ct[pt]+4*Tt[pt]-Ut[pt])*G*G+(-J[pt]+3*ct[pt]-3*Tt[pt]+Ut[pt])*G*G*G);return[st(0),st(2),ct[1]+(Tt[1]-ct[1])*G]},a=k=>{if(k<=n.lengthM)return o(k);let W=o(n.lengthM-20),et=o(n.lengthM),G=(k-n.lengthM)/20;return[et[0]+(et[0]-W[0])*G,et[1]+(et[1]-W[1])*G,et[2]]},l=2700,h=2585,d=n.overlaps.filter(([k,W])=>W>k).sort((k,W)=>k[1]-W[1]),g=k=>{for(let G=0;G<d.length-1;G++){let[J,ct]=d[G],[Tt,Ut]=d[G+1];if(k<=Ut)return J+(k-ct)*(Tt-J)/(Ut-ct)}let[W,et]=d.at(-1);return W+(k-et)},u=[];for(let k=0;k<=l;k+=2)u.push([k,...o(k)]);let c=2600,f=4900,_=[];for(let k=c;k<=f;k+=10){let W=o(k),et=g(k),G=et,J=1e9;for(let ct of u){if(Math.abs(ct[0]-et)>60)continue;let Tt=(ct[1]-W[0])**2+(ct[2]-W[1])**2;Tt<J&&(J=Tt,G=ct[0])}_.push(G)}let m=_.map((k,W)=>{let et=0,G=0;for(let J=-3;J<=3;J++){let ct=W+J;ct>=0&&ct<_.length&&(et+=_[ct],G++)}return et/G});for(let k=1;k<m.length;k++)m[k]=Math.max(m[k],m[k-1]+.5);let p=k=>{let W=(k-c)/10,et=Math.max(0,Math.min(m.length-2,Math.floor(W))),G=W-et;return m[et]+(m[et+1]-m[et])*G},S={};function v(k){for(let W of Object.keys(S))delete S[W];for(let W of k?.runners||[])!W.diversions||!W.diversions.length||(S[W.id]=W.diversions.map(et=>{let G=et.path,J=[0];for(let ct=1;ct<G.length;ct++)J.push(J[ct-1]+Math.hypot(G[ct][0]-G[ct-1][0],G[ct][1]-G[ct-1][1]));return{...et,cum:J,len:J.at(-1)}}))}v(e);let M=(k,W)=>{let et=Math.max(0,Math.min(1,(W-k.fromM)/(k.toM-k.fromM)))*k.len,G=0;for(;G<k.cum.length-2&&k.cum[G+1]<et;)G++;let J=(et-k.cum[G])/Math.max(1e-6,k.cum[G+1]-k.cum[G]);return[k.path[G][0]+(k.path[G+1][0]-k.path[G][0])*J,k.path[G][1]+(k.path[G+1][1]-k.path[G][1])*J]};function D(k){if(k<c-60){let J=a(k);return[J[0],J[1]]}let W=a(k);if(k>=f+40)return[W[0],W[1]];let et=ji(c-60,c+60,k)*(1-ji(f-60,f,k));if(et<=0)return[W[0],W[1]];let G=o(Math.min(l,p(Math.max(c,Math.min(f,k)))));return[W[0]+(G[0]-W[0])*et,W[1]+(G[1]-W[1])*et]}function w(k,W){let et=D(k),G=W&&S[W];if(G){for(let J of G)if(k>J.fromM&&k<J.toM){let ct=ji(J.fromM,J.fromM+30,k)*(1-ji(J.toM-30,J.toM,k)),Tt=M(J,k);return et=[et[0]+(Tt[0]-et[0])*ct,et[1]+(Tt[1]-et[1])*ct],{x:et[0],z:et[1],div:ct,divInfo:J}}}return{x:et[0],z:et[1],div:0,divInfo:null}}let[A,T,x,y]=t.bounds,b={x0:A-60,z0:T-60,cell:5};b.nx=Math.ceil((x+60-b.x0)/b.cell)+1,b.nz=Math.ceil((y+60-b.z0)/b.cell)+1,b.h=new Float32Array(b.nx*b.nz);let C=[];for(let k=0;k<=s;k+=2)C.push(i[k]);let E=0;for(let k of C)E+=k[1];E/=C.length;let L=(k,W)=>Math.sin(k*.011+1.3)*Math.cos(W*.009-.4)*2.2+Math.sin(k*.027+W*.019)*.9;for(let k=0;k<b.nz;k++)for(let W=0;W<b.nx;W++){let et=b.x0+W*b.cell,G=b.z0+k*b.cell,J=0,ct=0,Tt=1e9;for(let pt of C){let H=(pt[0]-et)**2+(pt[2]-G)**2;H<Tt&&(Tt=H);let Vt=1/(H+400),K=Vt*Vt;J+=K,ct+=K*pt[1]}let Ut=ji(30,160,Math.sqrt(Tt)),st=ct/J*(1-Ut*.4)+E*Ut*.4+L(et,G)*Ut;b.h[k*b.nx+W]=st*hv}let R=t.features.filter(k=>k.closed&&["water","track","tennis","pitch"].includes(k.kind)&&k.pts.length>3);for(let k of R){let W=Yn(k.pts),et=[];for(let ct=Math.max(0,Math.floor((W[1]-12-b.z0)/b.cell));ct<=Math.min(b.nz-1,Math.ceil((W[3]+12-b.z0)/b.cell));ct++)for(let Tt=Math.max(0,Math.floor((W[0]-12-b.x0)/b.cell));Tt<=Math.min(b.nx-1,Math.ceil((W[2]+12-b.x0)/b.cell));Tt++){let Ut=b.x0+Tt*b.cell,st=b.z0+ct*b.cell,pt=Qr(k.pts,Ut,st);pt<12&&et.push([ct*b.nx+Tt,pt])}let G=0,J=0;for(let[ct,Tt]of et)Tt<0&&(G+=b.h[ct],J++);if(J){G/=J,k.kind==="water"&&(G=Math.min(...et.filter(ct=>ct[1]<0).map(ct=>b.h[ct[0]]))-.2),k._level=G;for(let[ct,Tt]of et){let Ut=1-ji(0,12,Tt);b.h[ct]=b.h[ct]*(1-Ut)+G*Ut-(k.kind==="water"?1.6*(1-ji(-6,0,Tt)):0)}}}{for(let st=0;st<3;st++){let pt=new Float32Array(b.h);for(let H=1;H<b.nz-1;H++)for(let Vt=1;Vt<b.nx-1;Vt++){let K=H*b.nx+Vt;pt[K]=(b.h[K]*4+b.h[K-1]+b.h[K+1]+b.h[K-b.nx]+b.h[K+b.nx])/8}b.h.set(pt)}let k=new Float32Array(b.nx*b.nz).fill(1e9),W=new Float32Array(b.nx*b.nz),et=new Float32Array(b.nx*b.nz),G=(st,pt)=>b.h[pt*b.nx+st],J=(st,pt)=>{let H=Math.round((st-b.x0)/b.cell),Vt=Math.round((pt-b.z0)/b.cell);return G(Math.max(0,Math.min(b.nx-1,H)),Math.max(0,Math.min(b.nz-1,Vt)))},ct=[[0,h],[2540,2690],[f-80,n.lengthM+45]],Tt=[];for(let[st,pt]of ct)for(let H=st;H<=pt;H+=2){let Vt=D(H);Tt.push([Vt[0],Vt[1],J(Vt[0],Vt[1])])}for(let st=0;st<4;st++)for(let pt=1;pt<Tt.length-1;pt++)Tt[pt][2]=(Tt[pt-1][2]+Tt[pt][2]*2+Tt[pt+1][2])/4;let Ut=Je/2+7;for(let[st,pt,H]of Tt){let Vt=Math.floor((st-Ut-b.x0)/b.cell),K=Math.ceil((st+Ut-b.x0)/b.cell),Z=Math.floor((pt-Ut-b.z0)/b.cell),yt=Math.ceil((pt+Ut-b.z0)/b.cell);for(let Y=Math.max(0,Z);Y<=Math.min(b.nz-1,yt);Y++)for(let Lt=Math.max(0,Vt);Lt<=Math.min(b.nx-1,K);Lt++){let B=Math.hypot(b.x0+Lt*b.cell-st,b.z0+Y*b.cell-pt);if(B>Ut)continue;let P=Y*b.nx+Lt,ht=(1-B/Ut)**2;W[P]+=ht,et[P]+=ht*H,B<k[P]&&(k[P]=B)}}for(let st=0;st<k.length;st++)if(k[st]<Ut&&W[st]>0){let pt=1-ji(Je/2+.5,Ut,k[st]);b.h[st]=b.h[st]*(1-pt)+et[st]/W[st]*pt}b.pathSamples=Tt}let U=R.filter(k=>k.kind==="water").sort((k,W)=>W.pts.length-k.pts.length)[0];function O(k,W){let et=(k-b.x0)/b.cell,G=(W-b.z0)/b.cell,J=Math.max(0,Math.min(b.nx-2,Math.floor(et))),ct=Math.max(0,Math.min(b.nz-2,Math.floor(G))),Tt=Math.max(0,Math.min(1,et-J)),Ut=Math.max(0,Math.min(1,G-ct)),st=b.h[ct*b.nx+J],pt=b.h[ct*b.nx+J+1],H=b.h[(ct+1)*b.nx+J],Vt=b.h[(ct+1)*b.nx+J+1];return Tt+Ut<=1?st+(pt-st)*Tt+(H-st)*Ut:Vt+(H-Vt)*(1-Tt)+(pt-Vt)*(1-Ut)}let z=new $;function q(k,W,et={}){let G=w(k,W),J=Math.max(0,k-4),ct=J+8,Tt=w(J,W),Ut=w(ct,W),st=Ut.x-Tt.x,pt=Ut.z-Tt.z,H=Math.hypot(st,pt)||1;return st/=H,pt/=H,et.x=G.x,et.z=G.z,et.y=O(G.x,G.z)+Ba,et.tx=st,et.tz=pt,et.rx=-pt,et.rz=st,et.slope=(O(Ut.x,Ut.z)-O(Tt.x,Tt.z))/Math.max(1,H),et.div=G.div,et.divInfo=G.divInfo,et}function X(k,W=25){let et=Math.max(0,k-W),G=D(et),J=D(et+2*W),ct=Math.hypot(J[0]-G[0],J[1]-G[1])||1;return z.set((J[0]-G[0])/ct,0,(J[1]-G[1])/ct).clone()}let N=[{from:0,to:h,lift:0},{from:2540,to:2690,lift:.02},{from:f-80,to:n.lengthM+45,lift:.035}],gt=n.lengthM;return{P:i,raw:o,rawExt:a,baseXZ:D,LAP1_END_DRAW:h,xzAt:w,sample:q,heading:X,heightAt:O,terrain:b,ribbons:N,finishM:gt,lake:U,flat:R,geoOf:k=>k>=c&&k<=f?p(k):k,diversions:S,setPlan:v,LAP1_END:l,MAP_FROM:c,MAP_TO:f}}function Yn(n){let t=[1e9,1e9,-1e9,-1e9];for(let e of n)t[0]=Math.min(t[0],e[0]),t[1]=Math.min(t[1],e[1]),t[2]=Math.max(t[2],e[0]),t[3]=Math.max(t[3],e[1]);return t}function hr(n,t,e){let i=!1;for(let s=0,r=n.length-1;s<n.length;r=s++){let[o,a]=n[s],[l,h]=n[r];a>e!=h>e&&t<(l-o)*(e-a)/(h-a)+o&&(i=!i)}return i}function Qr(n,t,e){let i=1e9;for(let s=0,r=n.length-1;s<n.length;r=s++){let[o,a]=n[r],[l,h]=n[s],d=l-o,g=h-a,u=d*d+g*g||1,c=Math.max(0,Math.min(1,((t-o)*d+(e-a)*g)/u));i=Math.min(i,Math.hypot(t-o-d*c,e-a-g*c))}return hr(n,t,e)?-i:i}function an(n,t=!1){let e=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,l=new Ve,h=0;for(let d=0;d<n.length;++d){let g=n[d],u=0;if(e!==(g.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let c in g.attributes){if(!i.has(c))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+'. All geometries must have compatible attributes; make sure "'+c+'" attribute exists among all geometries, or in none of them.'),null;r[c]===void 0&&(r[c]=[]),r[c].push(g.attributes[c]),u++}if(u!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". Make sure all geometries have the same number of attributes."),null;if(a!==g.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let c in g.morphAttributes){if(!s.has(c))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+".  .morphAttributes must be consistent throughout all geometries."),null;o[c]===void 0&&(o[c]=[]),o[c].push(g.morphAttributes[c])}if(t){let c;if(e)c=g.index.count;else if(g.attributes.position!==void 0)c=g.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". The geometry must have either an index or a position attribute"),null;l.addGroup(h,c,d),h+=c}}if(e){let d=0,g=[];for(let u=0;u<n.length;++u){let c=n[u].index;for(let f=0;f<c.count;++f)g.push(c.getX(f)+d);d+=n[u].attributes.position.count}l.setIndex(g)}for(let d in r){let g=Du(r[d]);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+d+" attribute."),null;l.setAttribute(d,g)}for(let d in o){let g=o[d][0].length;if(g===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[d]=[];for(let u=0;u<g;++u){let c=[];for(let _=0;_<o[d].length;++_)c.push(o[d][_][u]);let f=Du(c);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+d+" morphAttribute."),null;l.morphAttributes[d].push(f)}}return l}function Du(n){let t,e,i,s=-1,r=0;for(let h=0;h<n.length;++h){let d=n[h];if(t===void 0&&(t=d.array.constructor),t!==d.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=d.itemSize),e!==d.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=d.normalized),i!==d.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=d.gpuType),s!==d.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=d.count*e}let o=new t(r),a=new Ze(o,e,i),l=0;for(let h=0;h<n.length;++h){let d=n[h];if(d.isInterleavedBufferAttribute){let g=l/e;for(let u=0,c=d.count;u<c;u++)for(let f=0;f<e;f++){let _=d.getComponent(u,f);a.setComponent(u+g,f,_)}}else o.set(d.array,l);l+=d.count*e}return s!==void 0&&(a.gpuType=s),a}var to=new $;function Zn(n,t,e,i,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;to.copy(t),to[i]=0,to.normalize();let h=.5*o/(o+a),d=1-to.angleTo(n)/l;return Math.sign(to[e])===1?d*h:a/(o+a)+h+h*(1-d)}var Ce=class extends Ue{constructor(t=1,e=1,i=1,s=2,r=.1){if(s=s*2+1,r=Math.min(t/2,e/2,i/2,r),super(1,1,1,s,s,s),s===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let a=new $,l=new $,h=new $(t,e,i).divideScalar(2).subScalar(r),d=this.attributes.position.array,g=this.attributes.normal.array,u=this.attributes.uv.array,c=d.length/6,f=new $,_=.5/s;for(let m=0,p=0;m<d.length;m+=3,p+=2)switch(a.fromArray(d,m),l.copy(a),l.x-=Math.sign(l.x)*_,l.y-=Math.sign(l.y)*_,l.z-=Math.sign(l.z)*_,l.normalize(),d[m+0]=h.x*Math.sign(a.x)+l.x*r,d[m+1]=h.y*Math.sign(a.y)+l.y*r,d[m+2]=h.z*Math.sign(a.z)+l.z*r,g[m+0]=l.x,g[m+1]=l.y,g[m+2]=l.z,Math.floor(m/c)){case 0:f.set(1,0,0),u[p+0]=Zn(f,l,"z","y",r,i),u[p+1]=1-Zn(f,l,"y","z",r,e);break;case 1:f.set(-1,0,0),u[p+0]=1-Zn(f,l,"z","y",r,i),u[p+1]=1-Zn(f,l,"y","z",r,e);break;case 2:f.set(0,1,0),u[p+0]=1-Zn(f,l,"x","z",r,t),u[p+1]=Zn(f,l,"z","x",r,i);break;case 3:f.set(0,-1,0),u[p+0]=1-Zn(f,l,"x","z",r,t),u[p+1]=1-Zn(f,l,"z","x",r,i);break;case 4:f.set(0,0,1),u[p+0]=1-Zn(f,l,"x","y",r,t),u[p+1]=1-Zn(f,l,"y","x",r,e);break;case 5:f.set(0,0,-1),u[p+0]=Zn(f,l,"x","y",r,t),u[p+1]=1-Zn(f,l,"y","x",r,e);break}}};var Ki=null;function fv(){if(Ki)return Ki;let n=[118,172,228,255],t=new Uint8Array(n.length*4);return n.forEach((e,i)=>t.set([e,e,e,255],i*4)),Ki=new Vr(t,n.length,1,Hn),Ki.minFilter=Ki.magFilter=Ln,Ki.generateMipmaps=!1,Ki.needsUpdate=!0,Ki}var eo=new Map;function mt(n,t={}){let e=!t.map&&(typeof n=="number"||typeof n=="string")?`${n}|${JSON.stringify(t)}`:null;if(e&&!t.map&&eo.has(e))return eo.get(e);let i=new Ia({color:new fe(n??16777215),gradientMap:fv(),...t});return e&&!t.map&&eo.set(e,i),i}function Uu(){for(let n of eo.values())n.dispose();eo.clear(),no.forEach(n=>n.dispose()),no.clear()}var _h={uRes:{value:new zt(1920,1080)}},no=new Map;function uv(n=3,t=1709088,e=14){let i=`${n}|${t}|${e}`;if(no.has(i))return no.get(i);let s=new kn({uniforms:{...mh.clone(Kt.fog),uRes:_h.uRes,uWidth:{value:n},uRef:{value:e},uColor:{value:new fe(t)}},vertexShader:`
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
      }`,side:Mn,fog:!0});return no.set(i,s),s}function Mh(n){if(n.getAttribute("onormal"))return n;n.getAttribute("normal")||n.computeVertexNormals();let t=n.getAttribute("position"),e=n.getAttribute("normal"),i=new Map,s=a=>`${Math.round(t.getX(a)*1e3)},${Math.round(t.getY(a)*1e3)},${Math.round(t.getZ(a)*1e3)}`,r=[];for(let a=0;a<t.count;a++){let l=s(a),h=i.get(l);h||(h=[0,0,0],i.set(l,h)),h[0]+=e.getX(a),h[1]+=e.getY(a),h[2]+=e.getZ(a),r.push(h)}let o=new Float32Array(t.count*3);for(let a=0;a<t.count;a++){let l=r[a],h=Math.hypot(l[0],l[1],l[2])||1;o[a*3]=l[0]/h,o[a*3+1]=l[1]/h,o[a*3+2]=l[2]/h}return n.setAttribute("onormal",new Ze(o,3)),n}function ri(n,t=3,e,i){Mh(n.geometry);let s=uv(t,e,i),r;return n.isInstancedMesh?(r=new cn(n.geometry,s,n.count),r.instanceMatrix=n.instanceMatrix,r.count=n.count,n.frustumCulled&&n.boundingSphere?(r.boundingSphere=n.boundingSphere,r.frustumCulled=!0):(r.frustumCulled=!1,n.frustumCulled=!1),n.userData.outline=r):(r=new ze(n.geometry,s),r.frustumCulled=n.frustumCulled),r.castShadow=!1,r.receiveShadow=!1,r.userData.isOutline=!0,r.renderOrder=n.renderOrder,n.add(r),r}function Ae(n,t,{cast:e=!0,receive:i=!0,ol:s=0,olColor:r,olRef:o}={}){let a=new ze(n,t);return a.castShadow=e,a.receiveShadow=i,s&&ri(a,s,r,o),a}function pn(n,t,e,{repeat:i=!1,srgb:s=!0,aniso:r=8}={}){let o=document.createElement("canvas");o.width=n,o.height=t;let a=o.getContext("2d");e(a,n,t);let l=new rr(o);return s&&(l.colorSpace=vn),i&&(l.wrapS=l.wrapT=xs),l.anisotropy=r,l}var bh='"Lilita One", "Arial Black", "Arial Rounded MT Bold", Impact, sans-serif',le=Nn(20240817);function Nn(n){return()=>{n|=0,n=n+1831565813|0;let t=Math.imul(n^n>>>15,1|n);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function oi(n,t,e,i){let s=pn(n,t,e);return document.fonts&&document.fonts.load&&document.fonts.load('64px "Lilita One"').then(()=>{let r=s.image.getContext("2d");r.clearRect(0,0,n,t),e(r,n,t),s.needsUpdate=!0}).catch(()=>{}),i?.push(s),s}function mn(n,t,e,i,s,r="#fff",o="#1a1420",a=.16,l="center"){n.font=`${s}px ${bh}`,n.textAlign=l,n.textBaseline="middle",n.lineJoin="round",n.lineWidth=s*a,n.strokeStyle=o,n.strokeText(t,e,i),n.fillStyle=r,n.fillText(t,e,i)}function Ou(n,t,e){let{course:i,park:s,hasFunfair:r}=e,o=[],a=new xe;n.add(a);let l=I=>(a.add(I),I),h=t.terrain,d=(h.nx-1)*h.cell,g=(h.nz-1)*h.cell,u=new Map,c=6,f=(I,it)=>`${Math.floor(I/c)},${Math.floor(it/c)}`,_=(I,it,nt)=>{let ft=f(I,it),Mt=u.get(ft);Mt||u.set(ft,Mt=[]),Mt.push([I,it,nt])},m=(I,it,nt)=>{let ft=Math.floor(I/c),Mt=Math.floor(it/c),ut=Math.ceil((nt+30)/c);for(let Dt=-ut;Dt<=ut;Dt++)for(let Gt=-ut;Gt<=ut;Gt++){let Ft=u.get(`${ft+Dt},${Mt+Gt}`);if(Ft){for(let[Q,bt,At]of Ft)if((Q-I)**2+(bt-it)**2<(At+nt)**2)return!1}}return!0},p=[];for(let I of t.ribbons)for(let it=I.from;it<=I.to;it+=3){let nt=t.baseXZ(it);p.push(nt),_(nt[0],nt[1],Je/2+1.5)}for(let I in t.diversions)for(let it of t.diversions[I])for(let nt of it.path)_(nt[0],nt[1],4);let S=s.features.filter(I=>I.kind==="park").sort((I,it)=>it.pts.length-I.pts.length)[0].pts,v=(I,it)=>hr(S,I,it),D=s.features.filter(I=>I.closed&&["water","track","tennis","pitch","playground","building"].includes(I.kind)).map(I=>[Yn(I.pts),I]),w=(I,it,nt=2)=>D.some(([ft,Mt])=>I>ft[0]-nt&&I<ft[2]+nt&&it>ft[1]-nt&&it<ft[3]+nt&&Qr(Mt.pts,I,it)<nt),A=1.7,T=[];function x(I,it,nt=!1){T.push({im:I,list:it,occluder:nt})}let y=new Set,b=new ke;function C(I,it,nt=5){let ft=new Set,Mt=I?I.x:0,ut=I?I.z:0,Dt=it?it.x:0,Gt=it?it.z:0,Ft=Dt-Mt,Q=Gt-ut,bt=Ft*Ft+Q*Q||1;for(let At of T)At.occluder&&At.list.forEach((qt,he)=>{let ue=!1;if(I&&!qt.cleared){let Ie=((qt.x-Mt)*Ft+(qt.z-ut)*Q)/bt;if(Ie>.02&&Ie<1){let De=Mt+Ft*Ie-qt.x,We=ut+Q*Ie-qt.z;ue=!((1-Ie)*Math.sqrt(bt)<6)&&De*De+We*We<(nt*(qt.s||1))**2}}let me=At.im.id*1e5+he;ue&&!y.has(me)?(y.add(me),At.im.setMatrixAt(he,E),ft.add(At.im)):!ue&&y.has(me)&&(y.delete(me),At.im.setMatrixAt(he,qt._m||b.identity()),ft.add(At.im))});for(let At of ft)At.instanceMatrix.needsUpdate=!0}let E=new ke().makeScale(0,0,0);function L(I){for(let{im:it,list:nt}of T){let ft=!1;nt.forEach((Mt,ut)=>{!Mt.cleared&&I(Mt.x,Mt.z)&&(Mt.cleared=!0,it.setMatrixAt(ut,E),ft=!0)}),ft&&(it.instanceMatrix.needsUpdate=!0)}}function R(){let I=U.image.getContext("2d");O(I,U.image.width,U.image.height),U.needsUpdate=!0}let U=pn(Math.round(d*A),Math.round(g*A),(I,it,nt)=>O(I,it,nt),{aniso:8});o.push(U);function O(I,it,nt){let ft=Q=>(Q-h.x0)*A,Mt=Q=>(Q-h.z0)*A,ut=(Q,bt=!0)=>{I.beginPath(),Q.forEach((At,qt)=>qt?I.lineTo(ft(At[0]),Mt(At[1])):I.moveTo(ft(At[0]),Mt(At[1]))),bt&&I.closePath()};I.fillStyle="#d8d2c2",I.fillRect(0,0,it,nt);for(let Q=0;Q<9e3;Q++)I.fillStyle=le()<.5?"#cfc8b6":"#e2dccd",I.fillRect(le()*it,le()*nt,3,3);ut(S),I.fillStyle="#66cf45",I.fill(),I.save(),ut(S),I.clip(),I.translate(it/2,nt/2),I.rotate(-.62);for(let Q=-2e3;Q<2e3;Q+=2*14*A)I.fillStyle="rgba(255,255,140,0.10)",I.fillRect(Q,-2500,14*A,5e3);I.setTransform(1,0,0,1,0,0);for(let Q=0;Q<26e3;Q++){let bt=le()*it,At=le()*nt;I.fillStyle=le()<.6?"rgba(40,140,40,0.35)":"rgba(190,255,120,0.35)",I.fillRect(bt,At,2+le()*2,2+le()*3)}I.restore();let Dt=(Q,bt,At)=>{for(let qt of s.features)qt.kind===Q&&qt.closed&&(ut(qt.pts),I.fillStyle=bt,I.fill(),At&&(I.strokeStyle=At,I.lineWidth=2,I.stroke()))};Dt("grass","#72d64e"),Dt("garden","#86dc5c"),Dt("wood","#3f9e3a"),Dt("scrub","#5cb544");for(let Q of s.features)if(Q.kind==="pitch"&&Q.closed){I.save(),ut(Q.pts),I.clip(),I.fillStyle="#5ccc3f",I.fill();let bt=Yn(Q.pts);for(let At=bt[0];At<bt[2];At+=8)I.fillStyle="rgba(255,255,255,0.10)",I.fillRect(ft(At),Mt(bt[1]),4*A,(bt[3]-bt[1])*A);I.restore(),ut(Q.pts),I.strokeStyle="#ffffff",I.lineWidth=2.2,I.stroke()}for(let Q of s.features)if(Q.kind==="playground"&&Q.closed){ut(Q.pts),I.fillStyle="#7fcfb4",I.fill(),I.save(),ut(Q.pts),I.clip();let bt=Yn(Q.pts);for(let At=0;At<260;At++)I.fillStyle=le()<.5?"rgba(20,80,70,0.18)":"rgba(255,255,255,0.22)",I.fillRect(ft(bt[0]+le()*(bt[2]-bt[0])),Mt(bt[1]+le()*(bt[3]-bt[1])),3,3);for(let At=0;At<(bt[2]-bt[0])*(bt[3]-bt[1])/400;At++)I.beginPath(),I.arc(ft(bt[0]+le()*(bt[2]-bt[0])),Mt(bt[1]+le()*(bt[3]-bt[1])),1.6*A,0,7),I.fillStyle=["#ffd93b","#57c7ff","#ff6f91"][At%3],I.fill();I.restore(),ut(Q.pts),I.strokeStyle="#ffffff",I.lineWidth=.8*A,I.stroke()}let Gt=Q=>{let bt=0;for(let At=0,qt=Q.pts.length-1;At<Q.pts.length;qt=At++)bt+=(Q.pts[qt][0]+Q.pts[At][0])*(Q.pts[qt][1]-Q.pts[At][1]);return Math.abs(bt/2)};for(let Q of s.features)if(Q.kind==="track"&&Q.closed&&Gt(Q)>5e3){I.save(),ut(Q.pts),I.clip(),I.fillStyle="#e2523a",I.fill();let bt=9*A,At=za(Q.pts),qt=Yn(Q.pts),he=qt[2]-qt[0],ue=qt[3]-qt[1],me=De=>Q.pts.map(We=>[At[0]+(We[0]-At[0])*De,At[1]+(We[1]-At[1])*De]),Ie=1-2*9/Math.min(he,ue);for(let De=1;De<=5;De++)ut(me(1-(1-Ie)*(De/6))),I.strokeStyle="rgba(255,255,255,0.9)",I.lineWidth=1.6,I.stroke();ut(me(Ie)),I.fillStyle="#5ccc3f",I.fill(),I.strokeStyle="#ffffff",I.lineWidth=3,I.stroke(),I.restore(),ut(Q.pts),I.strokeStyle="#ffffff",I.lineWidth=3,I.stroke()}for(let Q of s.features)if(Q.kind==="track"&&Q.closed&&Gt(Q)<=5e3){let bt=Q.tags?.surface==="sand";if(!Q.tags?.surface)continue;ut(Q.pts),I.fillStyle=bt?"#f2d58f":"#e2523a",I.fill(),I.strokeStyle="#ffffff",I.lineWidth=1.5,I.stroke()}for(let Q of s.features)if(Q.kind==="tennis"&&Q.closed){ut(Q.pts),I.fillStyle="#3f9fd1",I.fill(),I.strokeStyle="#ffffff",I.lineWidth=2.5,I.stroke();let bt=za(Q.pts),At=Yn(Q.pts);I.save(),ut(Q.pts),I.clip(),I.strokeStyle="rgba(255,255,255,0.9)",I.lineWidth=1.5,I.beginPath(),I.moveTo(ft(bt[0]),Mt(At[1])),I.lineTo(ft(bt[0]),Mt(At[3])),I.stroke(),I.restore()}for(let Q of s.features)Q.kind==="water"&&Q.closed&&(ut(Q.pts),I.strokeStyle="#f4efe0",I.lineWidth=3.4*A,I.lineJoin="round",I.stroke(),I.fillStyle="#2f8fe0",I.fill());for(let Q of s.features)Q.kind==="path"&&(ut(Q.pts,!1),I.lineCap="round",I.lineJoin="round",I.strokeStyle="#c9ad78",I.lineWidth=3.6*A,I.stroke());for(let Q of s.features)Q.kind==="path"&&(ut(Q.pts,!1),I.strokeStyle="#ecd8a6",I.lineWidth=2.6*A,I.stroke());let Ft=Q=>({primary:15,secondary:12,tertiary:11,residential:8,unclassified:8,service:5,trunk:16})[Q.tags?.highway]||7;for(let Q of s.features)Q.kind==="road"&&(ut(Q.pts,Q.closed),I.lineCap="round",I.lineJoin="round",I.strokeStyle="#ece6d6",I.lineWidth=(Ft(Q)+4)*A,I.stroke());for(let Q of s.features)Q.kind==="road"&&(ut(Q.pts,Q.closed),I.strokeStyle="#7f8597",I.lineWidth=Ft(Q)*A,I.stroke());for(let Q of s.features)Q.kind==="road"&&Ft(Q)>=11&&(ut(Q.pts,!1),I.setLineDash([5*A,5*A]),I.strokeStyle="#f4f1e6",I.lineWidth=.5*A,I.stroke(),I.setLineDash([]));for(let Q of s.features)Q.kind==="rail"&&(ut(Q.pts,!1),I.strokeStyle="#9b8f84",I.lineWidth=5*A,I.stroke());for(let Q of s.features)Q.kind==="rail"&&(ut(Q.pts,!1),I.setLineDash([1,2]),I.strokeStyle="#5b4f46",I.lineWidth=3*A,I.stroke(),I.setLineDash([]),ut(Q.pts,!1),I.strokeStyle="#c9ccd6",I.lineWidth=.8,I.stroke());for(let Q of s.features)Q.kind==="building"&&Q.closed&&(ut(Q.pts),I.fillStyle="#9c968a",I.fill());for(let Q in t.diversions)for(let bt of t.diversions[Q])I.beginPath(),bt.path.forEach((At,qt)=>qt?I.lineTo(ft(At[0]),Mt(At[1])):I.moveTo(ft(At[0]),Mt(At[1]))),I.lineCap="round",I.lineJoin="round",I.strokeStyle="rgba(196,160,96,0.85)",I.lineWidth=4*A,I.stroke(),I.setLineDash([2*A,3*A]),I.strokeStyle="rgba(255,240,200,0.8)",I.lineWidth=.6*A,I.stroke(),I.setLineDash([])}{let I=h.nx*h.nz,it=new Float32Array(I*3),nt=new Float32Array(I*2);for(let At=0;At<h.nz;At++)for(let qt=0;qt<h.nx;qt++){let he=At*h.nx+qt;it[he*3]=h.x0+qt*h.cell,it[he*3+1]=h.h[he],it[he*3+2]=h.z0+At*h.cell,nt[he*2]=qt/(h.nx-1),nt[he*2+1]=1-At/(h.nz-1)}let ft=new Uint32Array((h.nx-1)*(h.nz-1)*6),Mt=0;for(let At=0;At<h.nz-1;At++)for(let qt=0;qt<h.nx-1;qt++){let he=At*h.nx+qt,ue=he+1,me=he+h.nx,Ie=me+1;ft[Mt++]=he,ft[Mt++]=me,ft[Mt++]=ue,ft[Mt++]=ue,ft[Mt++]=me,ft[Mt++]=Ie}let ut=new Ve;ut.setAttribute("position",new Ze(it,3)),ut.setAttribute("uv",new Ze(nt,2)),ut.setIndex(new Ze(ft,1)),ut.computeVertexNormals();let Dt=mt(16777215,{map:U}),Gt=pn(256,256,(At,qt,he)=>{At.fillStyle="#808080",At.fillRect(0,0,qt,he);for(let ue=0;ue<1800;ue++){let me=100+Math.floor(le()*70);At.fillStyle=`rgb(${me},${me},${me})`;let Ie=le()*qt,De=le()*he;At.fillRect(Ie,De,2,3+le()*5)}for(let ue=0;ue<500;ue++)At.fillStyle="rgba(255,255,255,0.18)",At.fillRect(le()*qt,le()*he,2,2)},{repeat:!0,srgb:!1});o.push(Gt),Dt.onBeforeCompile=At=>{At.uniforms.uDetail={value:Gt},At.vertexShader=At.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWPos;`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
vWPos = (modelMatrix * vec4(transformed, 1.0)).xyz;`),At.fragmentShader=At.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vWPos; uniform sampler2D uDetail;`).replace("#include <map_fragment>",`#include <map_fragment>
          float dd = length(vWPos - cameraPosition);
          float d1 = texture2D(uDetail, vWPos.xz / 3.0).r, d2 = texture2D(uDetail, vWPos.xz / 11.0).r;
          float fade = 1.0 - smoothstep(25.0, 140.0, dd);
          diffuseColor.rgb *= mix(1.0, 0.8 + 0.4 * mix(d2, d1, fade), 0.55);`)},Dt.customProgramCacheKey=()=>"terrain-detail";let Ft=Ae(ut,Dt,{cast:!1});Ft.name="terrain",l(Ft);let Q=new ze(new or(700,5200,48,1),mt(13227680));Q.rotation.x=-Math.PI/2,Q.position.set(h.x0+d/2,-2,h.z0+g/2),Q.receiveShadow=!1,l(Q);let bt=new ze(new bn(d+1800,g+1800),mt(13686197));bt.rotation.x=-Math.PI/2,bt.position.set(h.x0+d/2,-3,h.z0+g/2),l(bt)}let z=pn(256,256,(I,it,nt)=>{I.fillStyle="#7f8fb0",I.fillRect(0,0,it,nt);for(let ft=0;ft<1600;ft++)I.fillStyle=le()<.5?"rgba(255,255,255,0.07)":"rgba(30,40,70,0.08)",I.fillRect(le()*it,le()*nt,2,2);I.fillStyle="#6b7a9b",I.fillRect(0,0,it*.035,nt),I.fillRect(it*.965,0,it*.035,nt),I.fillStyle="#ffffff",I.fillRect(it*.06,0,it*.045,nt),I.fillRect(it*.895,0,it*.045,nt),I.fillStyle="rgba(255,255,255,0.35)",I.fillRect(it*.49,0,it*.02,nt*.5)},{repeat:!0});o.push(z);{let I=[];for(let ut of t.ribbons)I.push(q(ut));let it=an(I),nt=Ae(it,mt(16777215,{map:z}),{cast:!1});nt.name="path",l(nt);let ft=an(t.ribbons.map(ut=>q(ut,!0))),Mt=Ae(ft,mt(5924226),{cast:!1});l(Mt)}function q(I,it=!1){let nt=[];for(let Q=I.from;Q<=I.to+.01;Q+=2)nt.push(t.baseXZ(Q));let ft=[],Mt=[],ut=[],Dt=0;for(let Q=0;Q<nt.length;Q++){let bt=nt[Math.max(0,Q-1)],At=nt[Math.min(nt.length-1,Q+1)],qt=At[0]-bt[0],he=At[1]-bt[1],ue=Math.hypot(qt,he)||1;qt/=ue,he/=ue;let me=-he,Ie=qt,De=Je/2,We=[nt[Q][0]-me*De,nt[Q][1]-Ie*De],F=[nt[Q][0]+me*De,nt[Q][1]+Ie*De],ot=t.heightAt(nt[Q][0],nt[Q][1]),vt=Math.max(t.heightAt(We[0],We[1]),ot-.05)+Ba+I.lift,Et=Math.max(t.heightAt(F[0],F[1]),ot-.05)+Ba+I.lift;it?(ft.push(We[0]-me*.15,vt-.45,We[1]-Ie*.15,We[0],vt,We[1],F[0],Et,F[1],F[0]+me*.15,Et-.45,F[1]+Ie*.15),Mt.push(0,0,0,1,0,1,0,0)):(ft.push(We[0],vt,We[1],F[0],Et,F[1]),Mt.push(0,Dt/8,1,Dt/8)),Q&&(Dt+=2)}let Gt=it?4:2;for(let Q=0;Q<nt.length-1;Q++){let bt=Q*Gt,At=(Q+1)*Gt;it?(ut.push(bt,At,bt+1,bt+1,At,At+1),ut.push(bt+2,At+2,bt+3,bt+3,At+2,At+3)):ut.push(bt,At,bt+1,bt+1,At,At+1)}let Ft=new Ve;if(Ft.setAttribute("position",new be(ft,3)),Ft.setAttribute("uv",new be(Mt,2)),Ft.setIndex(ut),Ft.computeVertexNormals(),Ft.getAttribute("normal").getY(0)<0&&!it){let Q=Ft.index.array;for(let bt=0;bt<Q.length;bt+=3){let At=Q[bt+1];Q[bt+1]=Q[bt+2],Q[bt+2]=At}Ft.computeVertexNormals()}return Ft}let X={uTime:{value:0}},N=s.features.filter(I=>I.kind==="water"&&I.closed);for(let I of N){let it=(I._level??Math.min(...I.pts.map(Dt=>t.heightAt(Dt[0],Dt[1]))))+.05,nt=new Ms(I.pts.map(Dt=>new zt(Dt[0],-Dt[1]))),ft=new Ra(nt,4);ft.rotateX(-Math.PI/2),ft.translate(0,it,0);let Mt=new kn({uniforms:{...X,...Kt.fog},vertexShader:`varying vec3 vW;
${we.fog_pars_vertex}
        void main(){ vec4 w = modelMatrix*vec4(position,1.); vW=w.xyz; vec4 mvPosition = viewMatrix*w; gl_Position=projectionMatrix*mvPosition;
${we.fog_vertex}
}`,fragmentShader:`uniform float uTime; varying vec3 vW;
${we.fog_pars_fragment}
        void main(){
          vec2 p = vW.xz*0.09;
          float w1 = sin(p.x*3.1 + uTime*1.3 + sin(p.y*2.3+uTime*0.7)*1.7);
          float w2 = sin(p.y*2.7 - uTime*1.1 + sin(p.x*1.9-uTime*0.5)*1.9);
          float r = smoothstep(0.86,0.9, w1*w2);
          vec3 c = mix(vec3(0.16,0.55,0.93), vec3(0.24,0.70,1.0), smoothstep(-0.6,0.8,w1*0.5+w2*0.5));
          c = mix(c, vec3(0.92,0.98,1.0), r);
          gl_FragColor = vec4(c,1.);
          #include <colorspace_fragment>

${we.fog_fragment}
        }`,fog:!0}),ut=new ze(ft,Mt);ut.name="water",l(ut),o.push(Mt),I._waterLevel=it}let gt=[];if(t.lake){let I=t.lake,it=Yn(I.pts),nt=[16767291,16735581,5752831,16777215,16748497,8257418],ft=new Ce(2,.7,3.6,2,.32),Mt=new Ce(1.2,.5,.8,2,.2);for(let ut=0,Dt=0;ut<9&&Dt<300;Dt++){let Gt=it[0]+le()*(it[2]-it[0]),Ft=it[1]+le()*(it[3]-it[1]);if(Qr(I.pts,Gt,Ft)>-7)continue;let Q=new xe,bt=Ae(ft,mt(nt[ut%nt.length]),{ol:2.5});Q.add(bt);let At=Ae(Mt,mt(16777215),{ol:2});At.position.y=.45,Q.add(At);let qt=Ae(new Ee(.42,12,8),mt(nt[(ut+2)%nt.length]),{ol:2});qt.position.set(0,.9,.7),Q.add(qt),Q.position.set(Gt,(I._waterLevel??0)+.1,Ft),Q.rotation.y=le()*6.28,l(Q),gt.push({g:Q,ph:le()*6.28,x:Gt,z:Ft,a:Q.rotation.y}),ut++}}{let I=pn(128,128,(ut,Dt,Gt)=>{ut.fillStyle="#ffffff",ut.fillRect(0,0,Dt,Gt),ut.fillStyle="#ffffff",ut.fillRect(0,0,14,14),ut.fillStyle="#3b4a6b",ut.fillRect(34,30,60,58),ut.fillStyle="#9ec9ff",ut.fillRect(38,34,52,50),ut.fillStyle="#ffffff",ut.fillRect(62,34,4,50),ut.fillRect(38,56,52,4),ut.fillStyle="rgba(0,0,0,0.08)",ut.fillRect(0,118,Dt,10)},{repeat:!0});o.push(I);let it={generateTopUV:(ut,Dt,Gt,Ft,Q)=>[new zt(.02,.98),new zt(.02,.98),new zt(.02,.98)],generateSideWallUV:(ut,Dt,Gt,Ft,Q,bt)=>{let At=Dt[Gt*3],qt=Dt[Gt*3+1],he=Dt[Gt*3+2],ue=Dt[Ft*3],me=Dt[Ft*3+1],Ie=Dt[Ft*3+2],De=Dt[Q*3+2],We=Dt[bt*3+2],F=(Math.abs(qt-me)<Math.abs(At-ue)?At:qt)/4.2,ot=(Math.abs(qt-me)<Math.abs(At-ue)?ue:me)/4.2;return[new zt(F,he/3.2),new zt(ot,Ie/3.2),new zt(ot,De/3.2),new zt(F,We/3.2)]}},nt=["#e98a64","#f3d9a6","#d86f5a","#f6efe0","#a8c8e6","#f2b5a0","#c9b6e4","#f4c46a"],ft=["#5d6488","#7a5d6c","#4f6b78"],Mt=[];for(let ut of s.features){if(ut.kind!=="building"||!ut.closed||ut.pts.length<4)continue;let Dt=za(ut.pts);if(v(Dt[0],Dt[1]))continue;let Gt=parseFloat(ut.tags?.["building:levels"])||(le()<.7?3:4),Ft=Math.min(30,Gt*3.1),Q=new Ms(ut.pts.map(De=>new zt(De[0],-De[1]))),bt;try{bt=new Aa(Q,{depth:Ft,bevelEnabled:!1,UVGenerator:it})}catch{continue}bt.rotateX(-Math.PI/2);let At=Math.min(...ut.pts.map(De=>t.heightAt(De[0],De[1])))-1.5;bt.translate(0,At,0);let qt=bt.getAttribute("normal"),he=qt.count,ue=new Float32Array(he*3),me=new fe(nt[Math.floor(le()*nt.length)]).convertSRGBToLinear(),Ie=new fe(ft[Math.floor(le()*ft.length)]).convertSRGBToLinear();for(let De=0;De<he;De++){let We=qt.getY(De)>.5?Ie:me;ue[De*3]=We.r,ue[De*3+1]=We.g,ue[De*3+2]=We.b}bt.setAttribute("color",new Ze(ue,3)),Mt.push(bt.index?bt.toNonIndexed():bt)}if(Mt.length){let ut=an(Mt),Dt=Ae(ut,mt(16777215,{map:I,vertexColors:!0}),{cast:!0,ol:1.6,olRef:60});Dt.name="buildings",l(Dt)}}let Rt=t.sample(t.finishM),k=t.sample(0),W={start:k,finish:Rt},et=new xe;l(et);function G(I,it,nt,ft){let Mt=new xe,ut=Je/2+1.4,Dt=.85,Gt=pn(256,32,(he,ue,me)=>{for(let Ie=0;Ie<16;Ie++)he.fillStyle=Ie%2?nt:ft,he.fillRect(Ie*ue/16,0,ue/16+1,me)},{repeat:!1});o.push(Gt);let Ft=new sn(ut,Dt,14,40,Math.PI);Ft.scale(1,1.25,1);let Q=Ae(Ft,mt(16777215,{map:Gt}),{ol:3.5});Mt.add(Q);let bt=new ge(Dt*1.4,Dt*1.6,.8,16);for(let he of[-1,1]){let ue=Ae(bt,mt(ft),{ol:3});ue.position.set(he*ut,.3,0),Mt.add(ue)}let At=oi(1024,256,(he,ue,me)=>{he.fillStyle="#1b1b3a",en(he,0,0,ue,me,60),he.fill(),he.fillStyle=nt,en(he,12,12,ue-24,me-24,50),he.fill(),mn(he,"MARKRUN",ue/2,me*.42,150,"#ffffff","#1b1b3a",.18),mn(he,it,ue/2,me*.83,56,"#ffe14d","#1b1b3a",.2)},o),qt=Ae(new Ce(ut*1.55,ut*.4,.7,3,.25),[mt(ft),mt(ft),mt(ft),mt(ft),mt(16777215,{map:At}),mt(16777215,{map:At})],{ol:3.5});return qt.position.y=ut*1.25+Dt*1.25+ut*.2-.15,Mt.add(qt),Mt.position.set(I.x,I.y-.1,I.z),Mt.rotation.y=Math.atan2(-I.rz,I.rx),et.add(Mt),Mt}W.finishArch=G(Rt,"FINISH","#ff3d8b","#ffd23f"),G(k,"START","#2e9bff","#ffd23f");let J=pn(256,64,(I,it,nt)=>{let Mt=it/16;for(let ut=0;ut<16;ut++)for(let Dt=0;Dt<4;Dt++)I.fillStyle=(ut+Dt)%2?"#111":"#fff",I.fillRect(ut*Mt,Dt*Mt,Mt,Mt)});o.push(J);function ct(I,it,nt,ft=.03){let Mt=new bn(Je,nt);Mt.rotateX(-Math.PI/2);let ut=new ze(Mt,mt(16777215,{map:it,transparent:!0,alphaTest:.3,polygonOffset:!0,polygonOffsetFactor:-2}));return ut.position.set(I.x,I.y+ft,I.z),ut.rotation.y=Math.atan2(-I.rz,I.rx),ut.receiveShadow=!0,l(ut),ut}ct(Rt,J,2.2,.05);let Tt=oi(512,128,(I,it,nt)=>{I.fillStyle="#ffffff",I.fillRect(0,0,it,22),mn(I,"START",it/2,80,72,"#ffffff","rgba(0,0,0,0)",0)},o);{let I=t.sample(2.5);ct(I,Tt,3,.05).rotation.y+=Math.PI}let Ut=new $e;function st(I,it,nt,{ol:ft=0,olRef:Mt,cast:ut=!0,colors:Dt,chunk:Gt=0,occluder:Ft=!1}={}){if(!nt.length)return null;if(Gt){let bt=new Map;nt.forEach((qt,he)=>{let ue=`${Math.floor(qt.x/Gt)},${Math.floor(qt.z/Gt)}`,me=bt.get(ue);me||bt.set(ue,me={l:[],c:[]}),me.l.push(qt),Dt&&me.c.push(Dt[he])});let At=null;for(let{l:qt,c:he}of bt.values()){let ue=st(I,it,qt,{ol:ft,olRef:Mt,cast:ut,colors:Dt?he:null,occluder:Ft});At=At||ue}return At}let Q=new cn(I,it,nt.length);return nt.forEach((bt,At)=>{Ut.position.set(bt.x,bt.y,bt.z),Ut.rotation.set(bt.rx||0,bt.ry||0,bt.rz||0),Ut.scale.set(bt.sx??bt.s??1,bt.sy??bt.s??1,bt.sz??bt.s??1),Ut.updateMatrix(),Q.setMatrixAt(At,Ut.matrix),Ft&&(bt._m=Ut.matrix.clone()),Dt&&Q.setColorAt(At,new fe(Dt[At]))}),Q.castShadow=ut,Q.receiveShadow=!0,Q.computeBoundingSphere(),ft&&ri(Q,ft,void 0,Mt),x(Q,nt,Ft),l(Q),Q}let pt=[];{let I=nt=>{let ft=t.rawExt(nt-12),Mt=t.rawExt(nt),ut=t.rawExt(nt+12),Dt=Math.atan2(Mt[1]-ft[1],Mt[0]-ft[0]),Ft=Math.atan2(ut[1]-Mt[1],ut[0]-Mt[0])-Dt;for(;Ft>Math.PI;)Ft-=2*Math.PI;for(;Ft<-Math.PI;)Ft+=2*Math.PI;return Ft},it=[[20,t.LAP1_END_DRAW-20],[t.MAP_TO-40,t.finishM-10]];for(let[nt,ft]of it){let Mt=null;for(let ut=nt;ut<ft;ut+=4){let Dt=I(ut);Math.abs(Dt)>.45?(!Mt||Math.abs(Dt)>Math.abs(Mt.d))&&(Mt={m:ut,d:Dt}):Mt&&(pt.some(Gt=>Math.abs(Gt.m-Mt.m)<50)||pt.push(Mt),Mt=null)}}}let H=[],Vt=[],K=[],Z=[];for(let I of pt){let it=I.d>0;for(let nt=-2;nt<=2;nt++){let ft=t.sample(I.m+nt*5),Mt=it?-1:1,ut=Je/2+1.6,Dt=ft.x+ft.rx*ut*Mt,Gt=ft.z+ft.rz*ut*Mt;m(Dt,Gt,.3),(it?Vt:H).push({x:Dt,y:t.heightAt(Dt,Gt),z:Gt,ry:Math.atan2(-ft.tz,ft.tx)+(Mt>0?Math.PI:0)})}for(let nt=-3;nt<=3;nt++){let ft=t.sample(I.m+nt*3.5),Mt=it?1:-1,ut=Je/2+.7;K.push({x:ft.x+ft.rx*ut*Mt,y:t.heightAt(ft.x+ft.rx*ut*Mt,ft.z+ft.rz*ut*Mt),z:ft.z+ft.rz*ut*Mt,ry:le()*6});for(let Dt=0;Dt<2;Dt++){let Gt=t.sample(I.m+nt*3.5+Dt*1.75),Ft=Je/2+.1;Z.push({x:Gt.x+Gt.rx*Ft*Mt,y:Gt.y-.05,z:Gt.z+Gt.rz*Ft*Mt,ry:Math.atan2(Gt.tx,Gt.tz),red:(nt*2+Dt)%2===0})}}}W.corners=pt;{let I=pn(256,96,(Ft,Q,bt)=>{Ft.fillStyle="#2f6fe0",Ft.fillRect(0,0,Q,bt),Ft.fillStyle="#ffffff";for(let At=0;At<4;At++){let qt=18+At*60;Ft.beginPath(),Ft.moveTo(qt,12),Ft.lineTo(qt+26,12),Ft.lineTo(qt+54,bt/2),Ft.lineTo(qt+26,bt-12),Ft.lineTo(qt,bt-12),Ft.lineTo(qt+28,bt/2),Ft.closePath(),Ft.fill()}Ft.strokeStyle="#1b3f8f",Ft.lineWidth=8,Ft.strokeRect(0,0,Q,bt)}),it=I.clone();it.repeat.x=-1,it.offset.x=1,it.wrapS=xs,it.needsUpdate=!0,o.push(I,it);let ft=(Ft=>{let Q=new Ue(3.2,1.2,.12);Q.rotateX(-.32),Q.translate(0,.62,.22);let bt=new Ue(3.2,1.2,.12);return bt.rotateX(.32),bt.translate(0,.62,-.22),bt.rotateY(Math.PI),an([Q,bt])})();Mh(ft),st(ft,mt(16777215,{map:I}),Vt,{ol:2.5}),st(ft,mt(16777215,{map:it}),H,{ol:2.5});let Mt=pn(16,64,(Ft,Q,bt)=>{for(let At=0;At<4;At++)Ft.fillStyle=At%2?"#ffffff":"#ff6a2b",Ft.fillRect(0,At*bt/4,Q,bt/4)});o.push(Mt);let ut=new ge(.06,.32,.9,12,1);ut.translate(0,.5,0);let Dt=new Ue(.8,.08,.8);Dt.translate(0,.04,0),st(ut,mt(16777215,{map:Mt}),K,{ol:2}),st(Dt,mt(16738859),K,{ol:1.5});let Gt=new Ue(.5,.22,1.75);Gt.translate(0,.11,0),st(Gt,mt(16777215),Z.map(Ft=>Ft),{ol:1.5,colors:Z.map(Ft=>Ft.red?15216959:16777215)})}let yt=new xe;l(yt);function Y(I,it,nt,ft,Mt,{postH:ut=1.6,face:Dt=0,scale:Gt=1}={}){let Ft=oi(512,Math.round(512*ft/nt),Mt,o),Q=new xe,bt=Ae(new Ce(nt,ft,.25,2,.08),[mt(5978660),mt(5978660),mt(5978660),mt(5978660),mt(16777215,{map:Ft}),mt(16777215,{map:Ft})],{ol:3});bt.position.y=ut+ft/2,Q.add(bt);let At=new Ue(.25,ut+ft*.5,.25);for(let me of[-1,1]){let Ie=Ae(At,mt(9067062),{ol:2});Ie.position.set(me*nt*.35,(ut+ft*.5)/2,-.1),Q.add(Ie)}let qt=Je/2+2.2+nt*.15,he=I.x+I.rx*qt*it,ue=I.z+I.rz*qt*it;return Q.position.set(he,t.heightAt(he,ue)-.1,ue),Q.rotation.y=Math.atan2(-I.tx,-I.tz)+it*.5+Dt,Q.scale.setScalar(Gt),yt.add(Q),Q}let Lt=1720,B=t.sample(Lt-10);W.hillSign=Y(B,1,6,3.2,(I,it,nt)=>{I.fillStyle="#ffd23f",en(I,0,0,it,nt,40),I.fill(),I.lineWidth=16,I.strokeStyle="#1b1b3a",en(I,8,8,it-16,nt-16,34),I.stroke(),I.fillStyle="#3aa845",I.beginPath(),I.moveTo(40,nt-40),I.lineTo(150,70),I.lineTo(260,nt-40),I.closePath(),I.fill(),I.strokeStyle="#1b1b3a",I.lineWidth=8,I.stroke(),I.fillStyle="#fff",I.beginPath(),I.moveTo(118,118),I.lineTo(150,70),I.lineTo(182,118),I.closePath(),I.fill(),mn(I,"THE",380,nt*.3,72,"#ffffff","#1b1b3a",.2),mn(I,"HILL",370,nt*.66,120,"#ff3d8b","#1b1b3a",.16)},{postH:1.4}),W.hillM=Lt;for(let I of[1,2,3,4]){let it=I*1e3,nt=t.sample(t.geoOf(it));Y(nt,-1,1.6,1.3,(ft,Mt,ut)=>{ft.fillStyle="#ffffff",en(ft,0,0,Mt,ut,50),ft.fill(),ft.fillStyle="#ff3d8b",en(ft,20,20,Mt-40,ut-40,36),ft.fill(),mn(ft,`${I}K`,Mt/2,ut/2+8,230,"#ffffff","#1b1b3a",.14)},{postH:.7})}let P=t.sample(2475);W.lapBoard=Y(P,1,4.4,2.6,(I,it,nt)=>{I.fillStyle="#1b1b3a",en(I,0,0,it,nt,40),I.fill(),I.fillStyle="#2e9bff",en(I,14,14,it-28,nt-28,30),I.fill(),mn(I,"LAP",it/2,nt*.28,90,"#ffffff","#1b1b3a",.18),mn(I,"2 OF 2",it/2,nt*.66,150,"#ffe14d","#1b1b3a",.14)},{postH:1.2}),W.lapM=2500;let ht=[],_t=[],Pt=[],j=[];function at(I,it,nt,ft=3.2,Mt=12){let ut=null;for(let Dt=I;Dt<=it;Dt+=Mt){let Gt=t.sample(Dt),Ft=Je/2+1,Q=Gt.x+Gt.rx*Ft*nt,bt=Gt.z+Gt.rz*Ft*nt,At=t.heightAt(Q,bt);_t.push({x:Q,y:At,z:bt});let qt=new $(Q,At+ft,bt);if(ut){let he=[];for(let ue=0;ue<=12;ue++){let me=ue/12,Ie=ut.clone().lerp(qt,me);Ie.y-=Math.sin(me*Math.PI)*.6,he.push(Ie)}Pt.push(he);for(let ue=1;ue<12;ue++){let me=he[ue],Ie=he[ue+1].clone().sub(he[ue-1]);ht.push({x:me.x,y:me.y,z:me.z,ry:Math.atan2(-Ie.z,Ie.x)})}}ut=qt}}function lt(I,it,nt,ft=Je/2+2.2){for(let Mt=I;Mt<=it;Mt+=2.4){let ut=t.sample(Mt),Dt=ut.x+ut.rx*ft*nt,Gt=ut.z+ut.rz*ft*nt;j.push({x:Dt,y:t.heightAt(Dt,Gt),z:Gt,ry:Math.atan2(ut.tx,ut.tz)})}}let xt=t.finishM;at(xt-70,xt+10,1),at(xt-70,xt+10,-1),at(-6,50,1),at(-6,50,-1),lt(xt-60,xt+14,1),lt(xt-60,xt+14,-1),lt(-4,40,1),lt(-4,40,-1);{let I=new Ve;I.setAttribute("position",new be([-.3,0,0,.3,0,0,0,-.62,0],3)),I.setAttribute("normal",new be([0,0,1,0,0,1,0,0,1],3));let it=ht.map((Q,bt)=>[16727435,16765503,3054591,4054148,16747069,16777215][bt%6]);st(I,mt(16777215,{side:on}),ht,{colors:it,cast:!1});let nt=new ge(.07,.09,3.3,6);nt.translate(0,1.65,0),st(nt,mt(16777215),_t,{ol:1.5});let ft=new Ve().setFromPoints(Pt.flatMap(Q=>Q.slice(0,-1).flatMap((bt,At)=>[bt,Q[At+1]]))),Mt=new sr(ft,new _s({color:3355443}));l(Mt),o.push(ft);let ut=[];for(let Q=0;Q<4;Q++){let bt=new Ue(.16,1,.06);bt.translate(-.9+Q*.6,.5,0),ut.push(bt)}let Dt=new Ue(2.4,.12,.05);Dt.translate(0,.65,.05),ut.push(Dt);let Gt=Dt.clone();Gt.translate(0,-.35,0),ut.push(Gt);let Ft=an(ut);Ft.rotateY(Math.PI/2),st(Ft,mt(16777215),j,{ol:1.8})}let Ct=[],St=(I,it,nt,ft,Mt,ut=1.35)=>Ct.push({m0:I,m1:it,side:nt,off:Je/2+3,depth:ft,density:Mt,spacing:ut});St(xt-58,xt+12,1,6,1),St(xt-58,xt+12,-1,6,1),St(-2,38,1,5,.9),St(-2,38,-1,5,.9),St(1940,2010,1,4,.7),St(1960,2010,-1,3,.6),St(Lt-10,Lt+40,-1,3,.55),St(2440,2490,-1,3,.7),St(Lt-70,Lt+10,1,3,.5),St(Lt-70,Lt-20,-1,3,.45),St(2080,2160,1,4,.75),St(2080,2160,-1,4,.75),St(800,860,1,3,.6),St(1250,1310,-1,3,.6),W.crowdZones=Ct;{let I=s.pois.filter(ft=>ft.kind==="bench"&&v(ft.pos[0],ft.pos[1])&&m(ft.pos[0],ft.pos[1],1)).map(ft=>({x:ft.pos[0],y:t.heightAt(ft.pos[0],ft.pos[1]),z:ft.pos[1],ry:le()*6})),it=an([new Ue(1.8,.12,.5).translate(0,.5,0),new Ue(1.8,.4,.1).translate(0,.8,-.22),new Ue(.1,.5,.45).translate(-.8,.25,0),new Ue(.1,.5,.45).translate(.8,.25,0)]);st(it,mt(11892031),I,{ol:1.5});let nt=s.pois.filter(ft=>ft.kind==="cafe"&&v(ft.pos[0],ft.pos[1])&&m(ft.pos[0],ft.pos[1],4));for(let ft of nt){let Mt=new xe;Mt.add(Ae(new Ce(5,3,4,2,.2),mt(16774108),{ol:2.5})).position.y=1.5;let ut=pn(128,16,(Ft,Q,bt)=>{for(let At=0;At<8;At++)Ft.fillStyle=At%2?"#fff":"#ff4f6d",Ft.fillRect(At*16,0,16,bt)});o.push(ut);let Dt=Ae(new Ue(5.6,.2,2),mt(16777215,{map:ut}),{ol:2});Dt.position.set(0,2.9,2.3),Dt.rotation.x=.35,Mt.add(Dt);let Gt=Ae(new tn(4,1.6,4),mt(3054591),{ol:2.5});Gt.position.y=3.8,Gt.rotation.y=Math.PI/4,Mt.add(Gt),Mt.position.set(ft.pos[0],t.heightAt(ft.pos[0],ft.pos[1]),ft.pos[1]),Mt.rotation.y=le()*6,l(Mt),_(ft.pos[0],ft.pos[1],5)}}for(let I of Ct)for(let it=I.m0-8;it<=I.m1+8;it+=4){let nt=t.sample(it),ft=I.off+I.depth/2;_(nt.x+nt.rx*ft*I.side,nt.z+nt.rz*ft*I.side,I.depth/2+3)}for(let I of[k,Rt])_(I.x,I.z,14);function Nt(I,it){let nt=null,ft=1e9;for(let Mt of p){let ut=(Mt[0]-I)**2+(Mt[1]-it)**2;ut<ft&&(ft=ut,nt=Mt)}return nt}W.nearestOnRibbon=Nt,W.ribbonSamples=p;let Yt=new Map;for(let I of p){let it=`${Math.floor(I[0]/10)},${Math.floor(I[1]/10)}`,nt=Yt.get(it);nt||Yt.set(it,nt=[]),nt.push(I)}let re=(I,it,nt=1)=>{let ft=Math.floor(I/10),Mt=Math.floor(it/10),ut=(Je/2+nt)**2;for(let Dt=-1;Dt<=1;Dt++)for(let Gt=-1;Gt<=1;Gt++)for(let Ft of Yt.get(`${ft+Dt},${Mt+Gt}`)||[])if((Ft[0]-I)**2+(Ft[1]-it)**2<ut)return!0;return!1};W.reserve=_,W.clearOf=m;let jt=[],ye=(I,it,nt,ft)=>!m(I,it,2.5*ft)||w(I,it,1.5)?!1:(jt.push({x:I,z:it,kind:nt,s:ft}),_(I,it,2.2*ft),!0);for(let I of s.pois)I.kind==="tree"&&ye(I.pos[0],I.pos[1],0,.85+le()*.35);for(let I of s.features)if(I.kind==="wood"&&I.closed){let it=Yn(I.pts),nt=(it[2]-it[0])*(it[3]-it[1]);for(let ft=0;ft<nt/90;ft++){let Mt=it[0]+le()*(it[2]-it[0]),ut=it[1]+le()*(it[3]-it[1]);hr(I.pts,Mt,ut)&&ye(Mt,ut,1,.9+le()*.5)}}{let I=Yn(S);for(let it=0;it<2600;it++){let nt=I[0]+le()*(I[2]-I[0]),ft=I[1]+le()*(I[3]-I[1]);!v(nt,ft)||-Qr(S,nt,ft)>45&&le()<.75||ye(nt,ft,le()<.7?1:2,.8+le()*.5)}for(let it of s.features)if(it.kind==="road"&&!it.closed)for(let nt=1;nt<it.pts.length;nt++){let ft=it.pts[nt-1],Mt=it.pts[nt],ut=Math.hypot(Mt[0]-ft[0],Mt[1]-ft[1]);for(let Dt=0;Dt<ut;Dt+=22){let Gt=Dt/ut,Ft=ft[0]+(Mt[0]-ft[0])*Gt,Q=ft[1]+(Mt[1]-ft[1])*Gt,bt=-(Mt[1]-ft[1])/ut,At=(Mt[0]-ft[0])/ut,qt=8+le()*2;le()<.5&&ye(Ft+bt*qt,Q+At*qt,0,.6+le()*.2)}}}{let I=[3978315,5031250,3121226,6539594,8376650,3450963],it=new ge(.32,.5,4.2,7);it.translate(0,2.1,0);let nt=new hn(3.2,1);nt.scale(1,1.08,1),nt.translate(0,6.6,0);let ft=an([new hn(3,1).translate(0,6.2,0),new hn(2.3,0).translate(1.9,5.3,.6),new hn(2.2,0).translate(-1.7,5.5,-.8),new hn(2,0).translate(.2,8.2,.3)].map(Nu)),Mt=an([new tn(3,4.2,8).translate(0,5,0),new tn(2.4,3.6,8).translate(0,7.2,0),new tn(1.6,3,8).translate(0,9.2,0)].map(Nu)),ut=jt.map(Ft=>({x:Ft.x,y:t.heightAt(Ft.x,Ft.z)-.2,z:Ft.z,ry:le()*6.28,s:Ft.s}));st(it,mt(9067062),ut,{ol:2,olRef:40,chunk:160,occluder:!0});let Dt=mt(16777215);nt.computeVertexNormals(),[nt,ft,Mt].forEach((Ft,Q)=>{let bt=ut.filter((At,qt)=>jt[qt].kind===Q);st(Ft,Dt,bt,{ol:2.2,olRef:40,colors:bt.map(()=>I[Math.floor(le()*I.length)]),chunk:160,occluder:!0})}),W.treeCount=jt.length}{let I=an([0,1,2,3].map(ut=>{let Dt=new tn(.09,.55,3);return Dt.translate(0,.27,0),Dt.rotateZ((ut-1.5)*.25),Dt.rotateY(ut*1.7),Dt.translate((ut-1.5)*.08,0,ut%2*.06),Dt.index?Dt.toNonIndexed():Dt})),it=an([new ge(.03,.03,.35,4).translate(0,.17,0).toNonIndexed(),new hn(.13,0).translate(0,.38,0)]),nt=[],ft=[],Mt=[];for(let ut=0;ut<9e3;ut++){let Dt=p[Math.floor(le()*p.length)],Gt=le()*6.283,Ft=Je/2+1+le()*22,Q=Dt[0]+Math.cos(Gt)*Ft,bt=Dt[1]+Math.sin(Gt)*Ft;if(!v(Q,bt)||w(Q,bt,.5)||!m(Q,bt,.2))continue;let At=t.heightAt(Q,bt)-.03;le()<.62?nt.push({x:Q,y:At,z:bt,ry:le()*6,s:.5+le()*.6}):(ft.push({x:Q,y:At,z:bt,ry:le()*6,s:.35+le()*.25}),Mt.push(["#ff5d8f","#ffd93b","#ffffff","#b06bff","#ff8a3d","#57c7ff"][Math.floor(le()*6)]))}st(I,mt(5226296),nt,{cast:!1,chunk:120}),st(it,mt(16777215),ft,{cast:!1,colors:Mt,chunk:120})}let ce=new kn({side:Mn,depthWrite:!1,fog:!1,uniforms:{top:{value:new fe(3116287)},mid:{value:new fe(9425919)},bot:{value:new fe(15333631)}},vertexShader:"varying vec3 vP; void main(){ vP = normalize(position); gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:`uniform vec3 top; uniform vec3 mid; uniform vec3 bot; varying vec3 vP; void main(){ float h=vP.y; vec3 c = h>0.12? mix(mid, top, smoothstep(0.12,0.7,h)) : mix(bot, mid, smoothstep(-0.05,0.12,h)); gl_FragColor=vec4(c,1.);
#include <colorspace_fragment>
}`}),Pe=new ze(new Ee(5e3,32,16),ce);Pe.renderOrder=-10,Pe.frustumCulled=!1,n.add(Pe),o.push(ce,Pe.geometry);let rt=an([[0,0,0,14],[13,-3,2,10],[-13,-4,-1,10],[6,6,-2,9],[-6,5,3,8],[22,-6,0,6],[-22,-7,1,6]].map(([I,it,nt,ft])=>new hn(ft,2).translate(I,it,nt)));rt.scale(1,.7,.8);let Zt=[h.x0+d/2,h.z0+g/2],It=[];for(let I=0;I<26;I++){let it=le()*6.28,nt=300+le()*1300;It.push({x:Zt[0]+Math.cos(it)*nt,y:170+le()*120,z:Zt[1]+Math.sin(it)*nt,ry:le()*6,s:.8+le()*1.4})}let Ot=st(rt,mt(16777215,{emissive:6981808,emissiveIntensity:.35,fog:!1}),It,{ol:1.5,olRef:300,cast:!1}),ee=[];for(let I=0;I<18;I++){let it=I/18*6.28+le()*.2,nt=1900+le()*500;ee.push({x:Zt[0]+Math.cos(it)*nt,y:-40,z:Zt[1]+Math.sin(it)*nt,sx:320+le()*260,sy:80+le()*90,sz:260+le()*200,ry:le()*6})}st(new Ee(1,24,12),mt(7128954),ee,{cast:!1,colors:ee.map((I,it)=>[8047487,6273413,9425290][it%3])});function Qt(I){X.uTime.value=I;for(let it of gt)it.g.position.y=(t.lake?._waterLevel??0)+.1+Math.sin(I*1.7+it.ph)*.08,it.g.rotation.z=Math.sin(I*1.3+it.ph)*.06,it.g.rotation.y=it.a+Math.sin(I*.1+it.ph)*.4;Ot&&(Ot.position.x=Math.sin(I*.01)*40)}function ve(){a.traverse(I=>{I.geometry&&I.geometry.dispose()});for(let I of o)I.dispose?.();n.remove(a),n.remove(Pe)}return{group:a,anchors:W,update:Qt,dispose:ve,inPark:v,clearOf:m,reserve:_,blocked:w,groundTex:U,onPath:re,registerInstanced:x,clearArea:L,redrawGround:R,setOcclusionCorridor:C}}function Nu(n){let t=n.index?n.toNonIndexed():n;return t.computeVertexNormals(),t}function za(n){let t=0,e=0;for(let i of n)t+=i[0],e+=i[1];return[t/n.length,e/n.length]}function en(n,t,e,i,s,r){n.beginPath(),n.moveTo(t+r,e),n.arcTo(t+i,e,t+i,e+s,r),n.arcTo(t+i,e+s,t,e+s,r),n.arcTo(t,e+s,t,e,r),n.arcTo(t,e,t+i,e,r),n.closePath()}var Fu=[16735631,16765503,5752831,8248938,16747069,11566079,5234888,16739179,16777215,9414911],Bu=[4054148,16727435,16765503,3054591,16777215];function dv(){let n=[];for(let i=0;i<=8;i++){let s=i/8,r=s*1.25,o=s<.12?.48+s*1.2:Math.sqrt(Math.max(0,1-Math.pow((s-.12)/.88,2.2)))*.62;n.push(new zt(Math.max(.001,o),r))}n.unshift(new zt(.001,0));let e=new Yr(n,12);return e.computeVertexNormals(),e}function Sh(n,t){let e=Nn(99),i=t.length,s=new xe;if(n.add(s),!i)return{update(){},hideWhere(){},setMask(){},dispose(){n.remove(s)},group:s};let r=dv(),o=new Ee(.15,8,5);o.scale(.8,1.15,.5);let a=new Ee(.075,6,4);a.scale(.85,1.2,.5);let l=new Ee(.13,6,5),h=new tn(.14,.36,6);h.translate(0,.18,0);let d=new tn(.26,.55,8);d.translate(0,.27,0);let g=new Ee(.2,7,5),u=(X,N,gt,Rt)=>{let k=new cn(X,N,gt);return k.castShadow=!0,k.receiveShadow=!0,k.userData.ol=Rt,s.add(k),k},c=u(r,mt(16777215),i,2.6),f=u(o,new Un({color:16777215}),i*2,0),_=u(a,new Un({color:1709088}),i*2,0),m=u(l,mt(16777215),i*2,2);f.castShadow=_.castShadow=!1;let p=[u(h,mt(16777215),i,2),u(d,mt(16777215),i,2),u(g,mt(16777215),i,2)],S=[0,0,0],v=new fe,M=t.map((X,N)=>{let gt=X.colour??Fu[Math.floor(e()*Fu.length)];c.setColorAt(N,v.set(gt)),m.setColorAt(N*2,v),m.setColorAt(N*2+1,v);let Rt=e()<.3?-1:Math.floor(e()*3),k=-1;return Rt>=0&&(k=S[Rt]++,p[Rt].setColorAt(k,v.set(Bu[Math.floor(e()*Bu.length)]))),{...X,s:X.scale??.85+e()*.35,ph:e()*6.28,sp:5+e()*4,tk:Rt,ti:k,wave:e()<.5,ex:.3}});p.forEach((X,N)=>{X.count=S[N]});for(let X of[c,m,...p])X.instanceColor&&(X.instanceColor.needsUpdate=!0);let D=new ke().makeScale(0,0,0),w=null,A=new ke,T=new $n,x=new ni,y=new $,b=new $,C=new ke,E=new ke;function L(X,N,gt){let Rt=M[X];if(Rt.hidden||w&&w(Rt.x,Rt.z)){for(let J of[c])J.setMatrixAt(X,D);for(let J=0;J<2;J++)f.setMatrixAt(X*2+J,D),_.setMatrixAt(X*2+J,D),m.setMatrixAt(X*2+J,D);Rt.tk>=0&&p[Rt.tk].setMatrixAt(Rt.ti,D);return}let k=Rt.ex,W=N*Rt.sp*(.5+k*.6)+Rt.ph,et=Math.max(0,Math.sin(W))*.32*k,G=1-Math.cos(W*2)*.05*k;x.set(0,Rt.yaw+Math.sin(N*.8+Rt.ph)*.25*(1-k),Math.sin(W*.5)*.08*k),T.setFromEuler(x),C.compose(y.set(Rt.x,Rt.y+et,Rt.z),T,b.set(Rt.s/Math.sqrt(G),Rt.s*G,Rt.s/Math.sqrt(G))),c.setMatrixAt(X,C);for(let J=0;J<2;J++){let ct=J?.19:-.19;E.makeTranslation(ct,.86,.5),A.multiplyMatrices(C,E),f.setMatrixAt(X*2+J,A),E.makeTranslation(ct*1.02,.84+(k>.6?.03:0),.565),A.multiplyMatrices(C,E),_.setMatrixAt(X*2+J,A);let Tt=k>.55?1:.15+.2*Math.max(0,Math.sin(W)),Ut=Rt.wave?Math.sin(W*1.5+J*3)*.25*k:0,st=(J?1:-1)*(.62+Tt*.05+Ut*.3),pt=.45+Tt*.85+Ut;E.makeTranslation(st,pt,.12),A.multiplyMatrices(C,E),m.setMatrixAt(X*2+J,A)}Rt.tk>=0&&(E.makeTranslation(0,1.22,0),Rt.tk===0&&E.multiply(new ke().makeRotationZ(Math.sin(W)*.3)),A.multiplyMatrices(C,E),p[Rt.tk].setMatrixAt(Rt.ti,A))}for(let X=0;X<i;X++)L(X,0,!0);let R=()=>{for(let X of[c,f,_,m,...p])X.instanceMatrix.needsUpdate=!0};R();for(let X of[c,f,_,m,...p]){if(!X.count){X.visible=!1;continue}X.computeBoundingSphere(),X.boundingSphere.radius+=2,X.userData.ol&&ri(X,X.userData.ol,void 0,18)}function U(X,N,gt=[],Rt=null){let k=!1;for(let W=0;W<i;W++){let et=M[W];if(N&&(et.x-N.x)**2+(et.z-N.z)**2>260*260)continue;let G=.25;if(Rt!=null)G=Rt;else for(let J of gt){let ct=(J.x-et.x)**2+(J.z-et.z)**2;ct<45*45&&(G=Math.max(G,1-Math.sqrt(ct)/70))}et.ex+=(G-et.ex)*.05,L(W,X),k=!0}k&&R()}function O(){for(let X of[r,o,a,l,h,d,g])X.dispose();for(let X of[c,f,_,m,...p])X.dispose();n.remove(s)}function z(X){let N=!1;for(let gt=0;gt<i;gt++)!M[gt].hidden&&X(M[gt].x,M[gt].z)&&(M[gt].hidden=!0,L(gt,0),N=!0);N&&R()}function q(X){if(X!==w){w=X;for(let N=0;N<i;N++)L(N,0);R()}}return{update:U,dispose:O,hideWhere:z,setMask:q,group:s,members:M}}function zu(n,t,e=5,i=null,s=null){let r=Nn(e),o=[];for(let[a,l]of t.entries())for(let h=l.m0;h<=l.m1;h+=l.spacing??1.35){let d=n.sample(h),g=Math.max(1,Math.round(l.depth/1.25));for(let u=0;u<g;u++){if(r()>l.density)continue;let c=l.off+u*1.25+r()*.35,f=(r()-.5)*.6,_=d.x+d.rx*c*l.side+d.tx*f,m=d.z+d.rz*c*l.side+d.tz*f;i&&i(_,m,1.4)||s&&s(_,m,.6)||o.push({zone:a,x:_,y:n.heightAt(_,m),z:m,yaw:Math.atan2(-d.rx*l.side,-d.rz*l.side)+(r()-.5)*.5})}}return o}var Hu={stocky:{torso:[.9,.76,.58],leg:.66,legR:.16,arm:.66,armR:.14,head:.47,hand:.19,shoe:[.34,.25,.6]},lanky:{torso:[.56,.86,.38],leg:1.06,legR:.095,arm:.9,armR:.085,head:.39,hand:.15,shoe:[.27,.21,.62]},compact:{torso:[.68,.6,.5],leg:.52,legR:.13,arm:.52,armR:.11,head:.5,hand:.17,shoe:[.3,.23,.5]},tall:{torso:[.7,.94,.46],leg:.92,legR:.125,arm:.8,armR:.11,head:.43,hand:.17,shoe:[.31,.24,.6]}},$u=["#2b1d14","#5a3a1e","#c8642a","#e8c66a","#1d1d24","#a9a9b3","#3a2a1e","#8a5a2b","#ff5fa2"],pv=3.2,io=new Map,ie=(n,t)=>(io.has(n)||io.set(n,t()),io.get(n));function Vu(){for(let n of io.values())n.dispose();io.clear()}function mv(n){let t=2166136261;for(let e of n)t^=e.charCodeAt(0),t=Math.imul(t,16777619);return t>>>0}function gv(n,t,e,i,s,r){n.fillStyle=i,n.fillRect(0,0,t,e);let o=t*.25,a=e*.47,l=e*.64,h=t*.058,d="#1a1420";n.fillStyle="rgba(255,90,90,0.28)";for(let m of[-1,1])n.beginPath(),n.ellipse(o+m*h*1.75,l-e*.03,t*.022,e*.03,0,0,7),n.fill();let g=(m,p)=>{if(p==="heart"){n.fillStyle="#ff2d6f",n.strokeStyle=d,n.lineWidth=5,n.beginPath();let w=t*.03;n.moveTo(m,a+w*1.1),n.bezierCurveTo(m-w*2.2,a-w*.2,m-w*.9,a-w*1.9,m,a-w*.6),n.bezierCurveTo(m+w*.9,a-w*1.9,m+w*2.2,a-w*.2,m,a+w*1.1),n.fill(),n.stroke();return}if(p==="closed"||p==="happy"){n.strokeStyle=d,n.lineWidth=9,n.lineCap="round",n.beginPath(),p==="happy"?n.arc(m,a+e*.02,t*.024,Math.PI*1.1,Math.PI*1.9):(n.moveTo(m-t*.025,a),n.lineTo(m+t*.025,a)),n.stroke();return}if(p==="x"){n.strokeStyle=d,n.lineWidth=8,n.lineCap="round";let w=t*.02;n.beginPath(),n.moveTo(m-w,a-w),n.lineTo(m+w,a+w),n.moveTo(m+w,a-w),n.lineTo(m-w,a+w),n.stroke();return}if(p==="wink"&&m>o&&(p="happy"),p==="wink"&&(p="open"),p==="happy"){n.strokeStyle=d,n.lineWidth=9,n.lineCap="round",n.beginPath(),n.arc(m,a+e*.02,t*.024,Math.PI*1.1,Math.PI*1.9),n.stroke();return}let S=p==="wide"?1.3:1,v=t*.03*S,M=e*.085*S;n.fillStyle="#fff",n.strokeStyle=d,n.lineWidth=6,n.beginPath(),n.ellipse(m,a,v,M,0,0,7),n.fill(),n.stroke();let D=p==="wide"?.38:.55;n.fillStyle=d,n.beginPath(),n.ellipse(m+v*.15,a+M*.12,v*D,M*D*1.1,0,0,7),n.fill(),n.fillStyle="#fff",n.beginPath(),n.arc(m+v*.35,a-M*.2,v*.22,0,7),n.fill(),p==="half"&&(n.fillStyle=i,n.fillRect(m-v-4,a-M-4,v*2+8,M*1.05),n.strokeStyle=d,n.lineWidth=7,n.beginPath(),n.moveTo(m-v-2,a-M*.1),n.lineTo(m+v+2,a-M*.1),n.stroke())},u={sleepy:"half",smug:"half",cheeky:"wink","wide-eyed":"wide"}[s]||"open";r==="happy"&&(u="happy"),r==="love"&&(u="heart"),r==="dead"&&(u="x"),r==="effort"&&s!=="goofy"&&(u="open");for(let m of[-1,1])g(o+m*h,u);n.strokeStyle=d,n.lineWidth=10,n.lineCap="round";let c=r==="effort"||s==="determined"||s==="gritted"?.35:r==="sad"||s==="worried"?-.35:s==="smug"||s==="cheeky"?.15:s==="wide-eyed"?-.2:0;for(let m of[-1,1]){let p=o+m*h,S=a-e*.13,v=t*.026,M=p-m*v,D=p+m*v;n.beginPath(),n.moveTo(D,S-c*18),n.lineTo(M,S+c*18),n.stroke()}n.lineWidth=8,n.strokeStyle=d,n.fillStyle="#7a1e2e";let f=o,_=r||"normal";if(_==="happy"||_==="normal"&&s==="grin")n.beginPath(),n.moveTo(f-t*.04,l-e*.02),n.quadraticCurveTo(f,l+e*.12,f+t*.04,l-e*.02),n.closePath(),n.fill(),n.stroke(),n.fillStyle="#fff",n.fillRect(f-t*.03,l-e*.018,t*.06,e*.03),n.fillStyle="#ff7d8f",n.beginPath(),n.ellipse(f,l+e*.06,t*.015,e*.02,0,0,7),n.fill();else if(_==="effort"){n.fillStyle="#fff",n.beginPath(),en(n,f-t*.035,l-e*.03,t*.07,e*.065,10),n.fill(),n.stroke(),n.lineWidth=4,n.beginPath(),n.moveTo(f-t*.035,l),n.lineTo(f+t*.035,l);for(let m=-2;m<=2;m++)n.moveTo(f+m*t*.012,l-e*.03),n.lineTo(f+m*t*.012,l+e*.035);n.stroke()}else if(_==="sad"||_==="dead")n.beginPath(),n.moveTo(f-t*.03,l+e*.04),n.quadraticCurveTo(f,l-e*.04,f+t*.03,l+e*.04),n.stroke(),_==="dead"&&(n.fillStyle="#ff7d8f",n.beginPath(),n.ellipse(f+t*.012,l+e*.07,t*.012,e*.04,.2,0,7),n.fill(),n.stroke());else if(_==="love"||_==="pant")n.beginPath(),n.ellipse(f,l+e*.02,t*.022,e*.05,0,0,7),n.fill(),n.stroke();else if(s==="gritted"){n.fillStyle="#fff",n.beginPath(),en(n,f-t*.04,l-e*.03,t*.08,e*.06,10),n.fill(),n.stroke(),n.lineWidth=4,n.beginPath(),n.moveTo(f-t*.04,l),n.lineTo(f+t*.04,l);for(let m=-2;m<=2;m++)n.moveTo(f+m*t*.014,l-e*.03),n.lineTo(f+m*t*.014,l+e*.03);n.stroke()}else if(s==="tongue-out")n.beginPath(),n.moveTo(f-t*.035,l),n.quadraticCurveTo(f,l+e*.05,f+t*.035,l),n.stroke(),n.fillStyle="#ff6f8a",n.beginPath(),n.ellipse(f+t*.008,l+e*.06,t*.016,e*.05,.15,0,7),n.fill(),n.stroke(),n.strokeStyle="rgba(0,0,0,0.35)",n.lineWidth=3,n.beginPath(),n.moveTo(f+t*.008,l+e*.03),n.lineTo(f+t*.01,l+e*.08),n.stroke();else if(s==="wide-eyed")n.beginPath(),n.ellipse(f,l+e*.02,t*.016,e*.04,0,0,7),n.fill(),n.stroke();else if(s==="cheeky")n.beginPath(),n.moveTo(f-t*.04,l-e*.01),n.quadraticCurveTo(f,l+e*.08,f+t*.045,l-e*.035),n.stroke();else if(s==="smug")n.beginPath(),n.moveTo(f-t*.03,l+e*.01),n.quadraticCurveTo(f+t*.01,l+e*.05,f+t*.04,l-e*.03),n.stroke();else if(s==="worried"){n.beginPath(),n.moveTo(f-t*.03,l+e*.02);for(let m=0;m<=6;m++)n.lineTo(f-t*.03+m*t*.01,l+e*.02+(m%2?-1:1)*e*.012);n.stroke()}else s==="goofy"?(n.beginPath(),n.moveTo(f-t*.04,l),n.quadraticCurveTo(f,l+e*.09,f+t*.04,l),n.closePath(),n.fill(),n.stroke(),n.fillStyle="#ff7d8f",n.beginPath(),n.ellipse(f+t*.01,l+e*.07,t*.016,e*.045,0,0,7),n.fill(),n.stroke(),n.fillStyle="#fff",n.fillRect(f-t*.02,l-2,t*.016,e*.03)):s==="determined"?(n.beginPath(),n.moveTo(f-t*.03,l+e*.01),n.lineTo(f+t*.03,l+e*.01),n.stroke()):(n.beginPath(),n.moveTo(f-t*.035,l-e*.01),n.quadraticCurveTo(f,l+e*.07,f+t*.035,l-e*.01),n.stroke());n.strokeStyle="rgba(0,0,0,0.25)",n.lineWidth=6,n.beginPath(),n.arc(o,a+e*.09,t*.012,.2,Math.PI-.2),n.stroke()}function yv(n,t){return pn(256,200,(e,i,s)=>{e.fillStyle="#ffffff",en(e,0,0,i,s,20),e.fill(),e.fillStyle=t,e.fillRect(0,0,i,44),e.font=`30px ${bh}`,e.fillStyle="#fff",e.textAlign="center",e.textBaseline="middle",e.fillText("MARKRUN",i/2,24),mn(e,String(n),i/2,128,140,"#1a1420","#1a1420",0),e.fillStyle="#c33";for(let[r,o]of[[16,60],[i-16,60],[16,s-16],[i-16,s-16]])e.beginPath(),e.arc(r,o,6,0,7),e.fill()})}function xv(n){return pn(128,128,(t,e,i)=>{if(t.fillStyle="#ffffff",t.strokeStyle="#1a1420",t.lineWidth=8,t.beginPath(),t.arc(e/2,i/2-6,48,0,7),t.fill(),t.stroke(),t.beginPath(),t.moveTo(e/2-12,i-26),t.lineTo(e/2,i-4),t.lineTo(e/2+8,i-28),t.fill(),n==="!")mn(t,"!",e/2,i/2-4,84,"#ff3d8b","#1a1420",.12);else if(n==="heart"){t.fillStyle="#ff2d6f";let s=e/2,r=i/2-2,o=16;t.beginPath(),t.moveTo(s,r+o*1.3),t.bezierCurveTo(s-o*2.6,r-o*.3,s-o,r-o*2.2,s,r-o*.7),t.bezierCurveTo(s+o,r-o*2.2,s+o*2.6,r-o*.3,s,r+o*1.3),t.fill(),t.stroke()}else if(n==="floss"){t.fillStyle="#ff9bd2";for(let[s,r,o]of[[54,44,18],[74,46,17],[64,30,16],[62,54,16]])t.beginPath(),t.arc(s,r,o,0,7),t.fill();t.strokeStyle="#c99a5a",t.lineWidth=6,t.beginPath(),t.moveTo(64,62),t.lineTo(64,96),t.stroke()}else if(n==="sweat"){t.fillStyle="#57c7ff";for(let[s,r]of[[50,50],[78,64]])t.beginPath(),t.moveTo(s,r-22),t.quadraticCurveTo(s+14,r,s,r+10),t.quadraticCurveTo(s-14,r,s,r-22),t.fill(),t.stroke()}})}function Gu(n,t={}){let e=n.look||{},i=Hu[e.build]||Hu.compact,s=mv(n.id+(n.nickname||"")),r=Nn(s),o=n.colour?.primary||"#ff4757",a=n.colour?.secondary||"#ffffff",l=e.skin||"#f1c6a5",h=$u[s%$u.length],d=[],g=mt(o),u=mt(a),c=mt(l),f=mt(h),_=new fe(a).getHSL({}).l>.85?"#ffffff":a,m=mt(_),p=mt("#ffffff"),S=mt("#22202c"),v=(j,at,lt=pv)=>Ae(j,at,{ol:lt,olRef:9}),M=new xe;M.name=`runner-${n.id}`;let D=new xe;M.add(D);let w=new xe;D.add(w);let A=i.leg/2,T=i.leg+i.shoe[1]*.75;w.position.y=T;let x=v(ie(`shorts${e.build}`,()=>new Ce(i.torso[0]*.92,.32,i.torso[2]*.95,3,.12)),u);x.position.y=.02,w.add(x);let y=new xe;y.position.y=.12,w.add(y);let b=v(ie(`torso${e.build}`,()=>new Ce(...i.torso,4,Math.min(i.torso[2],i.torso[0])*.42)),g);b.position.y=i.torso[1]/2,y.add(b);for(let j of[-1,1]){let at=Ae(ie(`stripe${e.build}`,()=>new Ue(.06,i.torso[1]*.8,i.torso[2]*.7)),mt(a),{cast:!1});at.position.set(j*i.torso[0]*.5,i.torso[1]*.5,0),y.add(at)}let C=yv(n.lane??0,o);d.push(C);let E=new ze(ie("bib",()=>new bn(1,.78)),mt(16777215,{map:C})),L=Math.min(.42,i.torso[0]*.6);E.scale.setScalar(L),E.position.set(0,i.torso[1]*.45,i.torso[2]/2+.012),y.add(E);let R=new xe;R.position.y=i.torso[1]+.02,y.add(R);let U=new xe;R.add(U);let O=document.createElement("canvas");O.width=1024,O.height=512;let z=new rr(O);z.colorSpace=vn,z.anisotropy=4,d.push(z);let q=null,X=j=>{j!==q&&(q=j,gv(O.getContext("2d"),1024,512,l,e.face||"grin",j),z.needsUpdate=!0)};X("normal");let N=i.head,gt=v(ie(`head${N}`,()=>new Ee(N,32,20).scale(1,.98,.96)),mt(16777215,{map:z}));gt.position.y=N*.92,U.add(gt);for(let j of[-1,1]){let at=v(ie(`ear${N}`,()=>new Ee(N*.2,10,8).scale(.6,1,.8)),c,2.5);at.position.set(j*N*.97,N*.9,0),U.add(at)}let Rt=v(ie(`nose${N}`,()=>new Ee(N*.14,10,8)),c,2);Rt.position.set(0,N*.84,N*.97),U.add(Rt),pt(e.hair,e.hat),H(e.hat);let k=[];for(let j of[-1,1]){let at=new xe;at.position.set(j*(i.torso[0]/2+i.armR*.55),i.torso[1]-i.armR*1.1,0),y.add(at);let lt=v(ie(`sleeve${e.build}`,()=>new Ee(i.armR*1.65,14,10)),g);at.add(lt);let xt=v(ie(`uarm${e.build}`,()=>new ii(i.armR,i.arm/2-i.armR,4,10).translate(0,-i.arm/4,0)),c);at.add(xt);let Ct=new xe;Ct.position.y=-i.arm/2+i.armR*.4,at.add(Ct);let St=v(ie(`farm${e.build}`,()=>new ii(i.armR*.95,i.arm/2-i.armR,4,10).translate(0,-i.arm/4,0)),c);Ct.add(St);let Nt=v(ie(`hand${e.build}`,()=>new Ee(i.hand,14,10).scale(1,1.1,.9)),c);Nt.position.y=-i.arm/2-i.hand*.4,Ct.add(Nt),k.push({sh:at,el:Ct,hand:Nt})}let W=[];for(let j of[-1,1]){let at=new xe;at.position.set(j*i.torso[0]*.24,0,0),w.add(at);let lt=v(ie(`thigh${e.build}`,()=>new ii(i.legR*1.15,A-i.legR,4,10).translate(0,-A/2,0)),c);at.add(lt);let xt=v(ie(`sleg${e.build}`,()=>new ge(i.legR*1.6,i.legR*1.5,A*.5,12).translate(0,-A*.2,0)),u);at.add(xt);let Ct=new xe;Ct.position.y=-A,at.add(Ct);let St=v(ie(`shin${e.build}`,()=>new ii(i.legR,A-i.legR,4,10).translate(0,-A/2,0)),c);Ct.add(St);let Nt=v(ie(`sock${e.build}`,()=>new ge(i.legR*1.12,i.legR*1.12,A*.25,10).translate(0,-A*.86,0)),mt(16777215),2.5);Ct.add(Nt);let Yt=new xe;Yt.position.y=-A,Ct.add(Yt);let re=v(ie(`shoe${e.build}`,()=>new Ce(...i.shoe,3,i.shoe[1]*.45).translate(0,-i.shoe[1]*.25,i.shoe[2]*.22)),m);Yt.add(re);let jt=Ae(ie(`sole${e.build}`,()=>new Ce(i.shoe[0]*1.04,i.shoe[1]*.3,i.shoe[2]*1.03,2,.05).translate(0,-i.shoe[1]*.62,i.shoe[2]*.22)),p,{ol:2.5,olRef:9});Yt.add(jt);let ye=Ae(ie(`swoosh${e.build}`,()=>new Ue(i.shoe[0]*1.06,i.shoe[1]*.18,i.shoe[2]*.5).translate(0,-i.shoe[1]*.2,i.shoe[2]*.2)),mt(o),{cast:!1});Yt.add(ye),W.push({hp:at,kn:Ct,an:Yt})}Vt(e.accessory);let et=new xe;et.visible=!1;{let j=Ae(ie("flossStick",()=>new ge(.025,.025,.6,5).rotateX(Math.PI/2).translate(0,0,.3)),mt("#e8d0a0"),{cast:!1}),at=Ae(ie("flossFluff",()=>{let lt=Nn(5);return an(Array.from({length:7},()=>new hn(.16+lt()*.06,1).translate((lt()-.5)*.22,(lt()-.5)*.22,.72+(lt()-.5)*.2)))}),mt("#ff9bd2"),{ol:2.5,olRef:9});et.add(j,at),et.userData.fluff=at,et.position.y=-i.arm/2-i.hand*.4,k[0].el.add(et)}function G(j,at){j==="floss"&&(et.visible=at>0,at>0&&et.userData.fluff.scale.setScalar(Math.max(.15,at)))}let J={},ct=new xa(new $r({transparent:!0,depthTest:!1}));ct.scale.setScalar(.9),ct.visible=!1,ct.renderOrder=20,M.add(ct);let Tt=j=>{if(!j){ct.visible=!1;return}J[j]||(J[j]=xv(j),d.push(J[j])),ct.material.map=J[j],ct.material.needsUpdate=!0,ct.visible=!0},Ut=T+.12+i.torso[1]+.02+N*2;ct.position.y=Ut+.45;let st=new Set([b,x,gt,...k.flatMap(j=>[j.hand]),...W.map(j=>j.an.children[0])]);for(let j of k)j.sh.children.forEach(at=>at.isMesh&&st.add(at));for(let j of W)j.hp.children.forEach(at=>at.isMesh&&st.add(at));M.traverse(j=>{j.isMesh&&!j.userData.isOutline&&(j.castShadow=st.has(j))});function pt(j,at){let lt=j||"short";if(lt==="bald")return;let xt=(Ct=1.07,St=.48)=>{let Nt=v(ie(`hcap${N}${Ct}${St}`,()=>new Ee(N*Ct,24,14,0,Math.PI*2,0,Math.PI*St)),f);return Nt.position.y=N*.92,Nt.rotation.x=-.32,U.add(Nt),Nt};if(lt==="curly"||lt==="afro"){let Ct=ie(`curly${N}`,()=>{let Nt=Nn(7),Yt=[];for(let re=0;re<26;re++){let jt=Nt()*Math.PI*.55,ye=Nt()*Math.PI*2,ce=new $(Math.sin(jt)*Math.cos(ye),Math.cos(jt),Math.sin(jt)*Math.sin(ye)).multiplyScalar(N*1.02);ce.z>N*.55&&ce.y<N*.75||Yt.push(new hn(N*.33,1).translate(ce.x,ce.y,ce.z-N*.08))}return an(Yt)}),St=v(Ct,f);St.position.y=N*.98,lt==="afro"&&(St.scale.setScalar(1.28),St.position.y=N*1.05),U.add(St);return}if(at==="beanie"||at==="bucket"||at==="bobble"){if(xt(1.05,.5),lt==="mullet"||lt==="long"||lt==="ponytail"){let Ct=v(ie(`mul${N}`,()=>new Ce(N*1.5,N*.9,N*.4,3,N*.15)),f);Ct.position.set(0,N*.35,-N*.78),U.add(Ct)}return}if(lt==="buzz"){let Ct=v(ie(`buzz${N}`,()=>new Ee(N*1.025,24,14,0,Math.PI*2,0,Math.PI*.45)),f,2);Ct.position.y=N*.92,Ct.rotation.x=-.32,U.add(Ct);return}if(xt(),lt==="quiff"||lt==="swept"){let Ct=v(ie(`quiff${N}${lt}`,()=>new Ee(N*.55,16,10).scale(lt==="quiff"?1.3:1.7,lt==="quiff"?.75:.45,1)),f);Ct.position.set(lt==="swept"?N*.25:0,N*1.82,N*.38),Ct.rotation.set(-.5,0,lt==="swept"?-.35:0),U.add(Ct)}if(lt==="mullet"){let Ct=v(ie(`mul${N}`,()=>new Ce(N*1.5,N*.9,N*.4,3,N*.15)),f);Ct.position.set(0,N*.35,-N*.78),U.add(Ct)}if(lt==="long"){let Ct=v(ie(`hlong${N}`,()=>new Ce(N*1.8,N*1.6,N*.5,3,N*.2)),f);Ct.position.set(0,N*.4,-N*.62),U.add(Ct)}if(lt==="ponytail"){let Ct=new xe;Ct.position.set(0,N*1.35,-N*.85),U.add(Ct);for(let St=0;St<3;St++){let Nt=v(ie(`pt${N}${St}`,()=>new Ee(N*(.32-St*.05),12,8)),f);Nt.position.set(0,-St*N*.32,-St*N*.18),Ct.add(Nt)}U.userData.pony=Ct}if(lt==="bun"){let Ct=v(ie(`bun${N}`,()=>new Ee(N*.38,14,10)),f);Ct.position.set(0,N*2,-N*.2),U.add(Ct)}if(lt==="mohawk"||lt==="spiky"){let Ct=lt==="mohawk"?5:9;for(let St=0;St<Ct;St++){let Nt=v(ie(`spk${N}`,()=>new tn(N*.2,N*.7,8)),f),Yt=lt==="mohawk"?0:St/Ct*Math.PI*2,re=lt==="mohawk"?-.9+St/(Ct-1)*1.8:.6;Nt.position.set(Math.sin(Yt)*Math.sin(re)*N,N*.92+Math.cos(re)*N*1.05,(lt==="mohawk"?Math.sin(re):Math.cos(Yt)*Math.sin(re))*N),Nt.lookAt(Nt.position.clone().multiplyScalar(3)),Nt.rotateX(Math.PI/2),U.add(Nt)}}}function H(j){if(!j)return;let at=mt(a==="#ffffff"||a==="#f8f8f8"?o:a),lt=mt(o);if(j==="backwards-cap"){let xt=v(ie(`capd${N}`,()=>new Ee(N*1.1,24,12,0,Math.PI*2,0,Math.PI*.42)),at);xt.position.y=N*.98,xt.rotation.x=-.18,U.add(xt);let Ct=v(ie(`brim${N}`,()=>new ge(N*.75,N*.75,N*.08,20,1,!1,-Math.PI/2,Math.PI).scale(1.2,1,1.15)),lt);Ct.position.set(0,N*1.42,-N*.62),Ct.rotation.set(-.12,Math.PI,0),U.add(Ct)}else if(j==="bobble"){let xt=v(ie(`bean${N}`,()=>new Ee(N*1.1,24,14,0,Math.PI*2,0,Math.PI*.5).scale(1,1.15,1)),lt);xt.position.y=N*.96,xt.rotation.x=-.12,U.add(xt);let Ct=v(ie(`brim2${N}`,()=>new sn(N*1.05,N*.17,8,24)),at);Ct.rotation.x=Math.PI/2-.12,Ct.position.y=N*1.12,U.add(Ct);let St=v(ie(`bigbob${N}`,()=>new hn(N*.48,1)),at);St.position.y=N*2.45,U.add(St),U.userData.bobble=St}else if(j==="cap"||j==="visor"){if(j==="cap"){let Ct=v(ie(`capd${N}`,()=>new Ee(N*1.1,24,12,0,Math.PI*2,0,Math.PI*.42)),at);Ct.position.y=N*.98,Ct.rotation.x=-.18,U.add(Ct)}else{let Ct=v(ie(`vband${N}`,()=>new sn(N*1,N*.12,8,24)),at);Ct.rotation.x=Math.PI/2-.25,Ct.position.y=N*1.35,U.add(Ct)}let xt=v(ie(`brim${N}`,()=>new ge(N*.75,N*.75,N*.08,20,1,!1,-Math.PI/2,Math.PI).scale(1.2,1,1.15)),lt);xt.position.set(0,N*1.42,N*.62),xt.rotation.x=.12,U.add(xt)}else if(j==="beanie"){let xt=v(ie(`bean${N}`,()=>new Ee(N*1.1,24,14,0,Math.PI*2,0,Math.PI*.5).scale(1,1.15,1)),at);xt.position.y=N*.96,xt.rotation.x=-.12,U.add(xt);let Ct=v(ie(`brim2${N}`,()=>new sn(N*1.05,N*.17,8,24)),lt);Ct.rotation.x=Math.PI/2-.12,Ct.position.y=N*1.12,U.add(Ct);let St=v(ie(`bob${N}`,()=>new hn(N*.3,1)),lt);St.position.y=N*2.25,U.add(St)}else if(j==="headband"||j==="sweatband"){let xt=v(ie(`hb${N}`,()=>new sn(N*1,N*.13,8,28)),at);xt.rotation.x=Math.PI/2-.2,xt.position.y=N*1.3,U.add(xt);let Ct=v(ie(`hbt${N}`,()=>new Ce(N*.2,N*.5,N*.08,2,.02)),at);Ct.position.set(.12,N*1.1,-N*1.05),Ct.rotation.z=.5,U.add(Ct),U.userData.tail=Ct}else if(j==="bucket"){let xt=v(ie(`buck${N}`,()=>new ge(N*.8,N*1.02,N*.7,20)),at);xt.position.y=N*1.75,U.add(xt);let Ct=v(ie(`buckb${N}`,()=>new ge(N*1.5,N*1.5,N*.06,24)),lt);Ct.position.y=N*1.42,Ct.rotation.x=.1,U.add(Ct)}else if(j==="crown"||j==="tiara"){let xt=v(ie(`crown${N}`,()=>new ge(N*.7,N*.62,N*.5,8,1,!0)),mt("#ffd23f",{side:on}));xt.position.y=N*2,U.add(xt)}else if(j==="wizard"||j==="party"){let xt=v(ie(`cone${N}`,()=>new tn(N*.8,N*1.8,16)),at);xt.position.y=N*2.3,xt.rotation.z=.15,U.add(xt);let Ct=v(ie(`bob${N}`,()=>new hn(N*.3,1)),lt);Ct.position.set(-N*.12,N*3.15,0),U.add(Ct)}else if(j==="helmet"||j==="bike_helmet"){let xt=v(ie(`helm${N}`,()=>new Ee(N*1.14,20,12,0,Math.PI*2,0,Math.PI*.46).scale(1,.9,1.15)),at);xt.position.y=N*1,U.add(xt)}else if(j==="santa"){let xt=v(ie(`santa${N}`,()=>new tn(N*.95,N*1.6,16)),mt("#e8313f"));xt.position.y=N*2.2,xt.rotation.z=.5,U.add(xt);let Ct=v(ie(`santar${N}`,()=>new sn(N*.95,N*.2,8,24)),mt("#ffffff"));Ct.rotation.x=Math.PI/2,Ct.position.y=N*1.45,U.add(Ct)}else{let xt=v(ie(`cone${N}`,()=>new tn(N*.8,N*1.8,16)),at);xt.position.y=N*2.3,U.add(xt)}}function Vt(j){if(j){if(j==="sunglasses"||j==="glasses"){let at=j==="sunglasses";for(let xt of[-1,1]){let Ct=v(ie(`lens${N}${at}`,()=>new Ce(N*.5,N*.32,N*.08,2,N*.06)),at?mt("#141420"):mt("#cfefff"),2);Ct.position.set(xt*N*.3,N*1.02,N*.98),Ct.rotation.y=xt*.28,U.add(Ct)}let lt=Ae(ie(`bridge${N}`,()=>new Ue(N*.3,N*.06,N*.06)),mt("#141420"),{cast:!1});lt.position.set(0,N*1.06,N*1.04),U.add(lt)}else if(j==="medal"){let at=v(ie("ribbon",()=>new sn(.2,.03,6,20,Math.PI)),mt("#2e9bff"),2);at.rotation.z=Math.PI,at.position.set(0,i.torso[1]+.02,i.torso[2]/2-.05),at.rotation.x=-.3,y.add(at);let lt=v(ie("medal",()=>new ge(.11,.11,.04,16).rotateX(Math.PI/2)),mt("#ffd23f",{emissive:"#664400",emissiveIntensity:.3}),2.5);lt.position.set(0,i.torso[1]-.22,i.torso[2]/2+.05),y.add(lt),E.position.y-=.1,E.position.x=.12,E.scale.multiplyScalar(.8)}else if(j==="headphones"){let at=v(ie(`hp${N}`,()=>new sn(N*1.08,N*.07,6,24,Math.PI)),mt("#22202c"),2);at.position.y=N*.95,U.add(at);for(let lt of[-1,1]){let xt=v(ie(`hpc${N}`,()=>new ge(N*.3,N*.3,N*.2,14).rotateZ(Math.PI/2)),mt(o),2.5);xt.position.set(lt*N*1.02,N*.92,0),U.add(xt)}}else if(j==="sweatband"||j==="wristbands"||j==="watch")for(let at of k){let lt=v(ie(`wb${e.build}`,()=>new ge(i.armR*1.3,i.armR*1.3,.12,10).translate(0,-i.arm/2+.1,0)),mt(j==="watch"?"#22202c":a),2);if(at.el.add(lt),j==="watch")break}else if(j==="scarf"){let at=v(ie("scarf",()=>new sn(.22,.08,8,18)),mt(a));at.rotation.x=Math.PI/2,at.position.y=.02,R.add(at);let lt=v(ie("scarft",()=>new Ce(.14,.5,.06,2,.03)),mt(a));lt.position.set(.1,-.15,-.25),lt.rotation.x=.5,R.add(lt),U.userData.tail2=lt}else if(j==="cape"){let at=v(ie(`cape${e.build}`,()=>new bn(i.torso[0]*1.2,i.torso[1]*1.5,1,4).translate(0,-i.torso[1]*.75,0)),mt(a,{side:on}),2),lt=new xe;lt.position.set(0,i.torso[1],-i.torso[2]/2-.03),lt.add(at),y.add(lt),U.userData.cape=lt}else if(j==="backpack"){let at=v(ie(`bp${e.build}`,()=>new Ce(i.torso[0]*.7,i.torso[1]*.7,.25,3,.08)),mt(a));at.position.set(0,i.torso[1]*.5,-i.torso[2]/2-.12),y.add(at)}else if(j==="moustache"||j==="mustache"){let at=v(ie(`mou${N}`,()=>new ii(N*.09,N*.5,4,8).rotateZ(Math.PI/2)),mt("#3a2616"),2);at.position.set(0,N*.7,N*.98),U.add(at)}else if(j==="beard"){let at=v(ie(`beard${N}`,()=>new Ee(N*.78,18,12,0,Math.PI*2,Math.PI*.45,Math.PI*.55).scale(1.05,1,.75)),f,2.5);at.position.set(0,N*.78,N*.32),U.add(at);let lt=v(ie(`mou${N}`,()=>new ii(N*.09,N*.5,4,8).rotateZ(Math.PI/2)),f,2);lt.position.set(0,N*.7,N*.98),U.add(lt)}else if(j==="bumbag"){let at=v(ie(`bum${e.build}`,()=>new Ce(i.torso[0]*.5,.2,.18,2,.07)),mt(a==="#ffffff"||a==="#f8f8f8"?"#22202c":a));at.position.set(i.torso[0]*.12,.08,i.torso[2]/2+.08),w.add(at);let lt=Ae(ie(`strap${e.build}`,()=>new sn(i.torso[0]*.48,.025,6,24).scale(1,i.torso[2]/i.torso[0]*1.05,1).rotateX(Math.PI/2)),mt("#22202c"),{cast:!1});lt.position.y=.1,w.add(lt)}else if(j==="bib"){let at=new ze(ie("bib",()=>new bn(1,.78)),E.material);at.scale.copy(E.scale),at.position.set(0,i.torso[1]*.5,-i.torso[2]/2-.012),at.rotation.y=Math.PI,y.add(at),E.scale.multiplyScalar(1.3)}else if(j==="bowtie")for(let at of[-1,1]){let lt=v(ie("bow",()=>new tn(.08,.16,4).rotateZ(Math.PI/2)),mt(a),2);lt.position.set(at*.08,i.torso[1]-.06,i.torso[2]/2+.03),lt.rotation.z=at>0?Math.PI:0,y.add(lt)}else if(j==="tutu"){let at=v(ie(`tutu${e.build}`,()=>new ge(i.torso[0]*.55,i.torso[0]*.9,.18,16,1,!0)),mt("#ff9bd2",{side:on}),2);at.position.y=-.05,w.add(at)}}}let K={phase:r()*6.28,t:r()*10,lean:0,j:{},look:0,lookPitch:0},Z=K.j,yt=["hipLx","hipRx","kneeL","kneeR","ankL","ankR","shLx","shRx","shLz","shRz","elL","elR","twist","lean","bob","roll","headY","headX","bodyX","bodyY","bodyZ","hipSpread"];for(let j of yt)Z[j]=0;let Y={},Lt="idle",B=null,P=0;function ht(j,at=null){(j!==Lt||at!==B)&&(Lt=j,B=at,P=0)}function _t(j,at={}){K.t+=j,P+=j;let lt=K.t;for(let Nt of yt)Y[Nt]=0;let xt="normal",Ct=10;if(Lt==="run"||Lt==="jog"||Lt==="trudge"||Lt==="distracted"){let Nt=Math.max(.5,at.speed??3.5),Yt=Math.max(.2,at.rate??1),re=Lt==="trudge",jt=re?1.7:(2.55+.14*(Nt-3.5))*Math.pow(Yt,.3)*(Lt==="jog"?.8:1);K.phase+=j*Math.PI*jt;let ye=K.phase,ce=Math.sin(ye),Pe=Math.cos(ye),rt=re?.4:Math.max(.45,Math.min(1,.62+.13*(Nt-3.5)));Y.hipLx=-rt*ce,Y.hipRx=rt*ce,Y.kneeL=.2+(re?.5:1.35)*Math.max(0,Pe)*(.7+rt*.3),Y.kneeR=.2+(re?.5:1.35)*Math.max(0,-Pe)*(.7+rt*.3),Y.ankL=-.2*ce,Y.ankR=.2*ce;let Zt=re?.3:.75*rt+.15;Y.shLx=Zt*ce,Y.shRx=-Zt*ce,Y.shLz=-.18,Y.shRz=.18,Y.elL=re?-.5:-1.5,Y.elR=re?-.5:-1.5,Y.twist=.16*ce,Y.roll=.05*ce,Y.bob=(re?.03:.11)*(Math.abs(Pe)-.4),Y.lean=(re?.05:.16)+Math.max(-.25,Math.min(.45,(at.slope??0)*1.6)),Y.headX=-Y.lean*.6,Y.headY=-.08*ce,Ct=18,xt=at.effort>.6?"effort":at.effort>.3?"pant":"normal",re&&(Y.headX=.35,Y.lean=.25,xt="sad"),Lt==="distracted"&&(Y.headY=at.lookYaw??.9,Y.headX=-.15,Y.twist+=(at.lookYaw??.9)*.3,xt="love")}else if(Lt==="ready")Y.hipLx=-.5,Y.hipRx=.35,Y.kneeL=.6,Y.kneeR=.5,Y.lean=.35,Y.bob=-.12,Y.shLx=.5,Y.shRx=-.6,Y.elL=-1.3,Y.elR=-1.3,Y.headX=-.25,Y.bob+=Math.sin(lt*3)*.01,xt="effort";else if(Lt==="wave")Y.shRz=2.7,Y.elR=.2*Math.sin(lt*9)-.25,Y.shRx=Math.sin(lt*9)*.25,Y.shLz=-.3,Y.elL=-.4,Y.bob=Math.abs(Math.sin(lt*4))*.05,Y.headY=.1*Math.sin(lt*2),xt="happy";else if(Lt==="pose"){let Nt=B||"flex";if(Nt==="flex")Y.shLz=-1.5,Y.shRz=1.5,Y.elL=-1.9-Math.sin(lt*6)*.15,Y.elR=-1.9-Math.sin(lt*6+1)*.15,Y.shLx=-0,Y.bob=-.06+Math.abs(Math.sin(lt*3))*.03,Y.hipSpread=.25,Y.kneeL=.3,Y.kneeR=.3,xt="effort";else if(Nt==="point")Y.shRx=-1.5,Y.elR=0,Y.shLz=-.3,Y.elL=-1.6,Y.shLx=-.3,Y.headX=-.1,Y.lean=-.05,xt="happy",Y.bob=Math.sin(lt*5)*.02;else if(Nt==="stretch")Y.hipRx=-.2,Y.kneeR=2.3,Y.shRx=.8,Y.elR=-.6,Y.shLz=-2.6,Y.lean=.08+Math.sin(lt*2)*.04,xt="smug";else if(Nt==="spin"){let Yt=Math.min(1,P/1.1);Y.bodyY=(1-(1-Yt)**2)*Math.PI*4,Y.shLz=Yt<1?-1.3:-2.6,Y.shRz=Yt<1?1.3:2.6,Y.bob=Yt<1?Math.abs(Math.sin(lt*7))*.2:Math.abs(Math.sin(lt*5))*.12,xt="happy"}else Nt==="bow"?(Y.lean=.75+Math.sin(lt*2)*.05,Y.shLx=.4,Y.shRx=-1.2,Y.elR=-1.6,Y.shRz=.4,Y.headX=-.2,xt="happy"):(Y.shLz=-2.5,Y.shRz=2.5,Y.bob=Math.abs(Math.sin(lt*6))*.25,xt="happy");xt==="smug"&&(xt="normal")}else if(Lt==="celebrate"){let Nt=B||"jump";if(Nt==="jump"){let Yt=Math.abs(Math.sin(lt*5.5));Y.bob=Yt*.55,Y.shLz=-2.6-Yt*.3,Y.shRz=2.6+Yt*.3,Y.elL=-.2,Y.elR=-.2,Y.kneeL=Y.kneeR=(1-Yt)*.8,Y.hipLx=Y.hipRx=-(1-Yt)*.4,xt="happy",Ct=22}else if(Nt==="fist"){let Yt=Math.sin(lt*7);Y.shRx=-2.6,Y.elR=-.4+Yt*.4,Y.shLx=.4,Y.elL=-1.8,Y.bob=Math.abs(Yt)*.08,Y.lean=-.1,xt="happy"}else Nt==="kneel"?(Y.lean=.85,Y.kneeL=Y.kneeR=.7,Y.hipLx=Y.hipRx=-.6,Y.bob=-.25+Math.sin(lt*7)*.025,Y.shLx=Y.shRx=-.55,Y.elL=Y.elR=-.1,Y.shLz=-.15,Y.shRz=.15,Y.headX=-.6,xt="pant"):Nt==="collapse"?(Y.bodyX=-Math.PI/2+.05,Y.shLz=-2.2,Y.shRz=2.2,Y.hipSpread=.4,Y.kneeL=.3+Math.max(0,Math.sin(lt*9))*.4*(Math.sin(lt*.7)>.6?1:0),Y.kneeR=.2,xt="dead",Ct=4):Nt==="shrug"&&(Y.shLz=-.9,Y.shRz=.9,Y.elL=-1.4,Y.elR=-1.4,Y.shLx=-.5,Y.shRx=-.5,Y.headX=.1,Y.headY=Math.sin(lt*1.5)*.3,xt="sad")}else Y.bob=Math.sin(lt*2)*.015,Y.shLz=-.18,Y.shRz=.18,Y.elL=-.25,Y.elR=-.25,Y.headY=Math.sin(lt*.7)*.25,Y.lean=.02,Y.kneeL=Y.kneeR=.05;at.lookYaw!=null&&Lt!=="distracted"&&(Y.headY+=at.lookYaw);let St=1-Math.exp(-Ct*j);for(let Nt of yt){if(Nt==="bodyY"&&Lt==="pose"&&B==="spin"){Z[Nt]=Y[Nt];continue}Z[Nt]+=(Y[Nt]-Z[Nt])*St}if(Lt==="pose"&&B==="spin"||(Z.bodyY=Z.bodyY%(Math.PI*2),Z.bodyY>Math.PI&&(Z.bodyY-=Math.PI*2)),W[0].hp.rotation.set(Z.hipLx,0,-Z.hipSpread),W[1].hp.rotation.set(Z.hipRx,0,Z.hipSpread),W[0].kn.rotation.x=Z.kneeL,W[1].kn.rotation.x=Z.kneeR,W[0].an.rotation.x=Z.ankL-Z.kneeL*.35,W[1].an.rotation.x=Z.ankR-Z.kneeR*.35,k[0].sh.rotation.set(Z.shLx,0,Z.shLz-0),k[1].sh.rotation.set(Z.shRx,0,Z.shRz),k[0].el.rotation.x=Z.elL,k[1].el.rotation.x=Z.elR,y.rotation.set(Z.lean,Z.twist,0),w.rotation.set(0,-Z.twist*.5,Z.roll),w.position.y=T+Z.bob,U.rotation.set(Z.headX,Z.headY,0),D.rotation.set(Z.bodyX,Z.bodyY,Z.bodyZ),D.position.y+=((Lt==="celebrate"&&B==="collapse"?i.torso[2]*.5+.08:0)-D.position.y)*St,U.userData.bobble&&(U.userData.bobble.position.y=N*2.45+Math.abs(Math.sin(K.phase))*.04),U.userData.pony&&(U.userData.pony.rotation.x=.4+Math.sin(K.phase*2)*.35),U.userData.tail&&(U.userData.tail.rotation.x=.6+Math.sin(K.phase*2)*.3),U.userData.cape&&(U.userData.cape.rotation.x=-.3-Math.min(1.1,(at.speed??0)*.15)+Math.sin(lt*8)*.08),at.expr&&(xt=at.expr),X(xt),ct.visible){ct.position.y=Ut+.45+Math.sin(lt*6)*.08;let Nt=.9+Math.sin(lt*9)*.05;ct.scale.set(Nt,Nt,Nt)}}function Pt(){for(let j of d)j.dispose?.();ct.material.dispose()}return{id:n.id,info:n,root:M,update:_t,set:ht,setPop:Tt,setExpr:X,setProp:G,dispose:Pt,height:Ut,hipH:T,get state(){return Lt},get variant(){return B}}}var vv=(n,t,e)=>{let i=Math.max(0,Math.min(1,(e-n)/(t-n)));return i*i*(3-2*i)};function Wu(n,t,e){let i=n.timeMap,s={};e.forEach((x,y)=>s[x.id]=x.lane??y+1);let r=n.runners.length,o=Object.values(s),a=(Math.min(...o)+Math.max(...o))/2,l=Math.min(1.25,(Je-1.6)/Math.max(1,r-1)),h=n.runners.map((x,y)=>{let b=li(i,x.officialS),C=((s[x.id]??y+1)-a)*l;return{...x,finishB:b,base:C,seed:y*1.7+.3}}),d=Object.fromEntries(h.map(x=>[x.id,x])),g=[...h].sort((x,y)=>x.officialS-y.officialS).map(x=>x.id),u=Object.fromEntries(g.map((x,y)=>[x,y+1])),c=d[g[0]],f=g.map(x=>d[x].officialS),_=d[g[0]].finishB,m=d[g.at(-1)].finishB,p=r>1&&f[1]-f[0]<=1.5,S=x=>Math.max(.05,(Ni(i,x+.05)-Ni(i,x-.05))/.1),v=new Map;function M(x){let y=Math.round(x*1e3);if(v.has(y))return v.get(y);let b=x<=0?0:Ni(i,x),C=x<=0?4:S(x),E={b:x,raceS:b,rate:C,byId:{},order:[]};for(let O of h){let z=On(O.progress,b),q=b>=O.officialS&&x>=O.finishB-1e-6,X=(On(O.progress,b+1)-On(O.progress,Math.max(0,b-1)))/(b>1?2:1);E.byId[O.id]={id:O.id,m:z,finished:q,vRace:q?0:X,place:u[O.id]}}for(let O of h){let z=E.byId[O.id],q=z.m,X=O.base;X+=.22*Math.sin(z.m/85+O.seed);for(let Rt of h){if(Rt===O)continue;let k=E.byId[Rt.id],W=z.m-k.m;if(Math.abs(W)<4&&!z.finished&&!k.finished){let et=(1-Math.abs(W)/4)*.32;X+=Math.sign(O.base-Rt.base||O.seed-Rt.seed)*et}}let N=0;if(z.finished){let Rt=x-O.finishB,k=(On(O.progress,O.officialS)-On(O.progress,O.officialS-2))/2*S(O.finishB),W=Math.min(14,Math.max(4,k)),et=1.6;q=5e3+(Rt<et?W*(Rt-Rt*Rt/(2*et)):W*et/2+Math.min(10+u[O.id]*1.5,(Rt-et)*.9));let J=(u[O.id]-(r+1)/2)*1.6;X=X+(J-X)*vv(0,2.5,Rt),N=Rt}let gt=t.sample(q,O.id);X*=1-gt.div,X=Math.max(-Je/2+.6,Math.min(Je/2-.6,X)),Object.assign(z,{mVis:q,x:gt.x+gt.rx*X,z:gt.z+gt.rz*X,y:t.heightAt(gt.x+gt.rx*X,gt.z+gt.rz*X)+.16,tx:gt.tx,tz:gt.tz,slope:gt.slope,div:gt.div,divInfo:gt.divInfo,lat:X,post:N,distToFinish:Math.max(0,5e3-z.m)})}let L=h.filter(O=>E.byId[O.id].finished).sort((O,z)=>O.officialS-z.officialS),R=h.filter(O=>!E.byId[O.id].finished).sort((O,z)=>E.byId[z.id].m-E.byId[O.id].m||O.officialS-z.officialS);E.order=[...L,...R].map(O=>O.id),E.leader=E.byId[E.order[0]];let U=d[E.order[0]];for(let[O,z]of E.order.entries()){let q=E.byId[z];if(q.finished)q.gapText=O===0?Ha(d[z].officialS):`+${(d[z].officialS-c.officialS).toFixed(0)}s`;else if(O===0)q.gapText="LEADER";else{let X=E.byId[E.order[0]].finished?c:U;q.gapText=`+${Math.max(0,b-Fn(X.progress,q.m)).toFixed(1)}s`}}return v.size>400&&v.clear(),v.set(y,E),E}return{stateAt:M,orderAt:x=>M(x).order,gapM:(x,y,b)=>{let C=M(b);return Math.abs((C.byId[x]?.m??0)-(C.byId[y]?.m??0))},finishedAt:(x,y)=>M(y).byId[x]?.finished,allFinishedAt:x=>x>m,firstFinishB:_,lastFinishB:m,photoFinish:p,finishOrder:g,place:u,byId:d,R:h,rateAt:S,durationS:i.durationS}}function Ha(n){let t=Math.floor(n/60),e=Math.round(n-t*60);return`${t}:${String(e).padStart(2,"0")}`}var _v=1.3,Mv=2.4,bv=.24,Sv=16/9,qu=n=>n*180/Math.PI,Xu=(n,t=bv)=>qu(2*Math.atan(Mv/(2*t*n)));function wh({plan:n,sim:t,backedIds:e=[],C:i,world:s,funfair:r}){let o=[],a=n.timeMap,l=R=>li(a,Math.min(...n.runners.map(U=>Fn(U.progress,R)))),h=R=>R<=0?4:t.rateAt(R),d=(R,U)=>{let O=0,z=0;for(let q=R;q<=U;q+=Math.max(.5,(U-R)/12))O+=h(q),z++;return O/Math.max(1,z)},g=t.firstFinishB,u=t.lastFinishB,c=R=>{let U=t.stateAt(Math.max(0,R)),O=U.order.filter(q=>!U.byId[q].finished),z=O[0]??U.order[0];return(O.length?O:U.order).filter(q=>Math.abs(U.byId[q].m-U.byId[z].m)<120)},f=R=>{let U=t.stateAt(Math.max(0,R)),O=U.order.filter(q=>!U.byId[q].finished),z=O[0]??U.order[0];return(O.length?O:U.order).filter(q=>Math.abs(U.byId[q].m-U.byId[z].m)<20)},_=(R,U)=>{let O=t.stateAt(Math.max(0,U));return O.order.filter(z=>!O.byId[z].finished&&Math.abs(O.byId[z].m-O.byId[R].m)<20)},m=.25+8;for(let R=.25;R<30;R+=.25)if(h(R)>7){m=Math.max(m,R);break}let p=g-6;for(let R=g-12;R>m;R-=.25)if(h(R)>6){p=R;break}let S=Math.max(p+4,Math.min(g-3,l(4850))),v=Math.max(p,Math.min(S,l(4700)));o.push({type:"heli",a:-8.5,b:-3.2,hard:!0}),o.push({type:"startgo",a:-3.2,b:.25}),o.push({type:"side",a:.25,b:m,hard:!0,ids:null});let M=[],D=n.runners.find(R=>R.diversions?.length);if(D&&r){let R=D.diversions[0],U=li(a,Fn(D.progress,R.fromM))-.5,O=li(a,Fn(D.progress,R.toM))+.8;M.push({type:"side",tag:"fair",a:U,b:Math.max(U+8,O),ids:[D.id],fair:!0,prio:3})}for(let R of nl){let U=l(R);M.push({type:"headon",tag:"hill",a:U-1.5,b:U+8,prio:2})}M.sort((R,U)=>U.prio-R.prio);let w=[];for(let R of M){let U=Math.min(p,R.b),O=Math.max(m,Math.min(R.a,U-8));U-O<6||w.some(z=>O<z.b&&U>z.a)||w.push({...R,a:O,b:U})}w.sort((R,U)=>R.a-U.a);let A=["side","drone","headon"],T=0,x=0,y=(R,U)=>{let O=U-R;if(O<=.01)return;if(O<8&&o.length>=3){o.at(-1).b=U;return}let z=Math.max(1,Math.round(O/11));for(let q=0;q<z;q++){let X=R+O*q/z,N=R+O*(q+1)/z,gt=(X+N)/2,Rt=A[T++%A.length];Rt===o.at(-1)?.type&&(Rt=A[T++%A.length]);let k=t.stateAt(gt),W=k.byId[k.order[0]],et=e.filter(J=>k.byId[J]&&!k.byId[J].finished&&W.m-k.byId[J].m>40),G=null;et.length&&x++%2===0&&(G=_(et[x%et.length],gt),Rt=Rt==="drone"?"side":Rt),o.push({type:Rt,a:X,b:N,ids:G})}},b=m;for(let R of w)y(b,R.a),o.push(R),b=R.b;y(b,p);{let R=v-p;if(R>=8){let U=Math.max(1,Math.round(R/11));for(let O=0;O<U;O++)o.push({type:O%2?"headon":"side",a:p+R*O/U,b:p+R*(O+1)/U})}o.at(-1).type==="headon"&&o.at(-1).a>=p?o.at(-1).b=S:o.push({type:"headon",a:Math.max(p,o.at(-1).b),b:S})}if(o.at(-1).b-o.at(-1).a<6&&o.length>4){let R=o.pop();o.at(-1).b=R.b}o.push({type:"finishcam",a:S,b:u+2.5,hard:!0}),o.push({type:"celebrate",a:u+2.5,b:u+90});let C=(n.events||[]).filter(R=>(R.type==="lead_change"||R.type==="overtake"&&(e.includes(R.by)||e.includes(R.on)))&&R.broadcastS>m+2&&R.broadcastS<p-3),E=-1e9;for(let R of C){let U=R.type==="lead_change"?[R.to,R.from]:[R.by,R.on];if(R.broadcastS-E<12)continue;let O=o.findIndex(X=>R.broadcastS>=X.a&&R.broadcastS<X.b);if(O<0)continue;let z=o[O];if(["heli","startgo","finishcam","celebrate","drone"].includes(z.type)||z.interrupt||z.tag||z.hard)continue;let q=z.ids||f((z.a+z.b)/2);if(!U.every(X=>q.includes(X))){if(R.broadcastS-z.a<8||z.b-R.broadcastS<8)Object.assign(z,{type:"side",ids:U,interrupt:R.type});else{let X=R.broadcastS-1.8;o.splice(O,1,{...z,b:X},{type:"side",a:X,b:z.b,ids:U,interrupt:R.type})}E=R.broadcastS}}for(let R of o)if(R.rate=d(Math.max(0,R.a),Math.max(.5,R.b)),R.ids=R.ids||null,R.type==="side"||R.type==="headon"||R.type==="drone"){let U=R.ids||(R.type==="drone"?c((R.a+R.b)/2):f((R.a+R.b)/2));R.type==="drone"&&!R.ids&&(R.pack=!0);let O=0;for(let z=0;z<=6;z++){let q=t.stateAt(Math.max(0,R.a+(R.b-R.a)*z/6)),X=U.map(N=>q.byId[N]).filter(N=>N&&!N.finished).map(N=>N.m);X.length&&(O=Math.max(O,Math.max(...X)-Math.min(...X)))}if(R.spread=O,R.type==="side"){R.dist=Ji.clamp(14+1.7*R.rate,18,48);let z=Xu(R.dist),q=O+7,X=qu(2*Math.atan(q/(2*Sv*R.dist)));R.fov=Ji.clamp(Math.max(z,X),10,34),R.side=L(R,U)}else R.type==="headon"?(R.dist=Ji.clamp(16+1.9*R.rate,20,52)+O*.6,R.fov=Ji.clamp(Xu(R.dist-O*.3,.2),10,30)):(R.back=30+2.2*R.rate+O*.35,R.height=16+1.9*R.rate+O*.25,R.fov=40,R.side=L(R,U))}return o;function L(R,U){let O=J=>{let ct=t.stateAt(Math.max(0,J)),Tt=U.map(pt=>ct.byId[pt]).filter(Boolean),Ut=Tt.reduce((pt,H)=>pt+H.x,0)/Tt.length,st=Tt.reduce((pt,H)=>pt+H.z,0)/Tt.length;return[Ut,st]},z=O(R.a),q=O((R.a+R.b)/2),X=O(R.b),N=(q[0]-z[0])*(X[1]-q[1])-(q[1]-z[1])*(X[0]-q[0]),gt=R.fair?null:N>0?1:-1;if(R.fair&&r){let J=r.anchors.center,ct=[X[0]-z[0],X[1]-z[1]],Tt=[-ct[1],ct[0]];return gt=(J.x-q[0])*Tt[0]+(J.z-q[1])*Tt[1]>0?-1:1,gt}let Rt=[X[0]-z[0],X[1]-z[1]],k=Math.hypot(...Rt)||1,W=[-Rt[1]/k,Rt[0]/k],et=R.dist||40,G=J=>s.inPark(q[0]+W[0]*et*J,q[1]+W[1]*et*J);return!G(gt)&&G(-gt)&&(gt=-gt),gt}}function Yu({camera:n,C:t,sim:e,world:i,funfair:s}){let r={pos:new $,look:new $},o=new $(0,1,0),a=null,l=null,h=!0,d=null,g=new $n,u=new ke;function c(v,M){let D=e.stateAt(Math.max(0,M)),w=(v||D.order.slice(0,1)).map(x=>D.byId[x]).filter(Boolean),A=w.filter(x=>!x.finished);A.length&&(w=A);let T=new $;for(let x of w)T.add(new $(x.x,x.y,x.z));return T.divideScalar(Math.max(1,w.length))}function f(v,M,D){let w=c(v,M),A=c(v,M-D*1.5),T=c(v,M+D*1.5),x=new $(T.x-A.x,0,T.z-A.z);if(x.lengthSq()<1e-4){let y=v?.[0]??e.stateAt(Math.max(0,M)).order[0],b=e.stateAt(Math.max(0,M)).byId[y];x.set(b.tx,0,b.tz)}return x.normalize(),{c:w,h:x,r:new $(-x.z,0,x.x)}}let _=(v,M)=>{if(v.ids)return v.ids;if(!v._group){let D=(v.a+v.b)/2,w=e.stateAt(Math.max(0,D)),A=w.order.filter(x=>!w.byId[x].finished),T=A[0]??w.order[0];v._group=(A.length?A:w.order).filter(x=>Math.abs(w.byId[x].m-w.byId[T].m)<(v.pack?120:20)),v._group.length||(v._group=[T])}return v._group};function m(v,M){let D=i.anchors.finish,w=i.anchors.start,A,T,x=40,y=v.rate>8?2.2:1.2;switch(v.type){case"heli":{let b=(M-v.a)/Math.max(.01,v.b-v.a),C=new $(150,0,0),E=new $(w.x,w.y,w.z),L=Eh(Math.min(1,b)),R=-1.2+L*1.6,U=420-L*360;A=new $(C.x+Math.cos(R)*U,170-L*140,C.z+Math.sin(R)*U).lerp(new $(E.x-w.tx*40+w.rx*25,E.y+22,E.z-w.tz*40+w.rz*25),L*L),T=C.clone().setY(10).lerp(E,Math.min(1,L*1.3)),x=50;break}case"startgo":{let b=new $(w.x,w.y,w.z),C=new $(w.tx,0,w.tz),E=new $(-C.z,0,C.x);A=b.clone().addScaledVector(C,10.5).addScaledVector(E,2.6).add(o.clone().multiplyScalar(1.9)),T=b.clone().add(o.clone().multiplyScalar(1.3)).addScaledVector(C,-1),x=42;break}case"side":{let{c:b,h:C,r:E}=f(_(v,M),M,y);A=b.clone().addScaledVector(E,v.side*v.dist).addScaledVector(C,v.dist*.18).add(o.clone().multiplyScalar(2.5+v.dist*.2)),T=b.clone().add(o.clone().multiplyScalar(1.1)),x=v.fov;break}case"headon":{let{c:b,h:C,r:E}=f(_(v,M),M,y);A=b.clone().addScaledVector(C,v.dist).addScaledVector(E,1.5).add(o.clone().multiplyScalar(2+v.dist*.16)),T=b.clone().add(o.clone().multiplyScalar(1.15)),x=v.fov;break}case"drone":{let{c:b,h:C,r:E}=f(_(v,M),M,y*1.3);A=b.clone().addScaledVector(C,-v.back).addScaledVector(E,v.side*v.back*.5).add(o.clone().multiplyScalar(v.height)),T=b.clone().addScaledVector(C,v.back*.15),x=v.fov;break}case"finishcam":{let b=new $(D.tx,0,D.tz),C=new $(-b.z,0,b.x);v.fside||(v.fside=i.inPark(D.x+C.x*16,D.z+C.z*16)?1:-1);let E=new $(D.x,D.y+1,D.z);A=E.clone().addScaledVector(C,v.fside*15).addScaledVector(b,11).add(o.clone().multiplyScalar(1.9));let L=e.stateAt(Math.max(0,M)),R=L.order.map(z=>L.byId[z]).find(z=>!z.finished),O=L.order.map(z=>L.byId[z]).filter(z=>z.finished).sort((z,q)=>z.post-q.post)[0];if(O&&O.post<6&&(!R||R.distToFinish>45))T=new $(O.x,O.y+1.1,O.z);else{let z=R?Math.min(1,Math.max(0,R.distToFinish/150)):0;T=R?E.clone().lerp(new $(R.x,R.y+1,R.z),Math.min(1,.25+z)):E}x=22,v.smoothLook=!0;break}case"celebrate":{let b=e.stateAt(Math.max(0,M)),C=new $;for(let U of b.order)C.add(new $(b.byId[U].x,b.byId[U].y,b.byId[U].z));C.divideScalar(b.order.length);let E=new $(D.tx,0,D.tz),L=new $(-E.z,0,E.x),R=Math.sin((M-v.a)*.08)*.5;A=C.clone().addScaledVector(E,-11*Math.cos(R)).addScaledVector(L,11*Math.sin(R)).add(o.clone().multiplyScalar(2.8)),T=C.clone().add(o.clone().multiplyScalar(1.2)),x=44;break}default:{let{c:b,h:C}=f(_(v,M),M,y);A=b.clone().addScaledVector(C,-12).add(o.clone().multiplyScalar(5)),T=b.clone()}}return{pos:A,look:T,fov:x}}function p(v,M,D){let w=D.find(E=>v>=E.a&&v<E.b)||D.at(-1),A=!1;if(w!==a){let E=h||!!w.hard;l=E?null:{from:{pos:n.position.clone(),look:r.look.clone(),fov:n.fov},t0:v},A=E,h=!1,a=w,d=null}let T=m(w,v),x=t.heightAt(T.pos.x,T.pos.z)+1.2;T.pos.y<x&&(T.pos.y=x),w.smoothLook&&(d||(d=T.look.clone()),d.lerp(T.look,1-Math.exp(-2.5*M)),T.look.copy(d)),u.lookAt(T.pos,T.look,o),g.setFromRotationMatrix(u);let y=T.pos,b=g,C=T.fov;if(l){let E=(v-l.t0)/_v;if(E>=1||E<0)l=null;else{let L=E*E*E*(E*(E*6-15)+10),R=Math.sin(Math.PI*L)*Math.min(12,l.from.pos.distanceTo(T.pos)*.12);y=l.from.pos.clone().lerp(T.pos,L).add(o.clone().multiplyScalar(R));let U=l.from.look.clone().lerp(T.look,L);u.lookAt(y,U,o),b=new $n().setFromRotationMatrix(u),C=l.from.fov+(T.fov-l.from.fov)*L}}return r.pos.copy(T.pos),r.look.copy(T.look),n.position.copy(y),n.quaternion.copy(b),Math.abs(n.fov-C)>.001&&(n.fov=C,n.updateProjectionMatrix()),{shot:w,cut:A}}function S(v=!0){a=null,l=null,h=!!v,d=null}return{update:p,reset:S,evaluate:m,get shot(){return a},get gliding(){return!!l},cam:r}}function Eh(n){return n<.5?2*n*n:1-Math.pow(-2*n+2,2)/2}var so=new Set(["drone","heli"]);var wv=`
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
`,Zu=n=>`${n}<sup>${["th","st","nd","rd"][n%100>10&&n%100<14||n%10>3?0:n%10]}</sup>`,Ev=n=>`${n}${["th","st","nd","rd"][n%100>10&&n%100<14||n%10>3?0:n%10]}`,Tv=n=>{n=Math.max(0,n);let t=Math.floor(n/60),e=Math.floor(n%60);return`${t}:${String(e).padStart(2,"0")}`},ro=n=>String(n??"").replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]),Av=n=>{let t=parseInt(n.slice(1),16);return(t>>16&255)*.299+(t>>8&255)*.587+(t&255)*.114>165?"#1a1420":"#ffffff"};function ju(n,{runners:t,backedBy:e={},course:i,park:s,C:r}){if(!document.getElementById("mr-hud-css")){let K=document.createElement("style");K.id="mr-hud-css",K.textContent=wv,document.head.appendChild(K)}let o=document.createElement("div");o.className="mr-hud mr-dim",o.innerHTML=`
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
    <div class="mr-replayframe"></div><div class="mr-replay"><i></i><span>REPLAY</span></div><div class="mr-wipe"></div>`,n.appendChild(o);let a=K=>o.querySelector(K),l={};o.querySelectorAll("[data-k]").forEach(K=>l[K.dataset.k]=K);let h=a(".mr-tower"),d={},g={};for(let K of t){let Z=document.createElement("div");Z.className="mr-row",Z.innerHTML=`<div class="mr-pos mr-num">1</div><div class="mr-card"><div class="mr-chip" style="background:${K.colour.primary};border-right:4px solid ${K.colour.secondary}"></div><div class="mr-name">${ro(fr(K))}</div><span class="mr-inis"></span><div class="mr-gap"></div></div>`,h.appendChild(Z),d[K.id]={el:Z,pos:Z.querySelector(".mr-pos"),gap:Z.querySelector(".mr-gap"),last:""};let yt=document.createElement("div");yt.className="mr-tag",yt.innerHTML=`<span class="mr-tp mr-num"></span><span class="mr-tb"></span><span class="mr-tn" style="background:${K.colour.primary};color:#fff">${ro(fr(K))}</span>`,yt.style.opacity="0",a(".mr-tags").appendChild(yt),g[K.id]={el:yt,pos:yt.querySelector(".mr-tp"),x:0,y:0,vis:!1}}function u(K={}){for(let Z of t){let yt=(K[Z.id]||[]).filter(B=>B!=null&&B!==""),Y=yt.map(B=>`<span class="mr-ini" style="--bc:${Th(B)}">${ro(Cv(B))}</span>`).join(""),Lt=d[Z.id].el;Lt.classList.toggle("backed",yt.length>0),Lt.querySelector(".mr-inis").innerHTML=Y,g[Z.id].el.querySelector(".mr-tb").innerHTML=Y}}u(e);let c=a(".mr-map canvas"),f=c.getContext("2d"),_=null,m=340,p=420;c.width=m,c.height=p;let S=i.points,v=1e9,M=1e9,D=-1e9,w=-1e9;for(let K of S)v=Math.min(v,K[0]),D=Math.max(D,K[0]),M=Math.min(M,K[2]),w=Math.max(w,K[2]);if(i.funfair){let[K,Z]=i.funfair.center,yt=i.funfair.radius*.6;v=Math.min(v,K-yt),D=Math.max(D,K+yt),M=Math.min(M,Z-yt),w=Math.max(w,Z+yt)}for(let K in r.diversions)for(let Z of r.diversions[K])for(let yt of Z.path)v=Math.min(v,yt[0]),D=Math.max(D,yt[0]),M=Math.min(M,yt[1]),w=Math.max(w,yt[1]);let A=26,T=Math.min((m-A*2)/(D-v),(p-A*2)/(w-M)),x=(m-(D-v)*T)/2,y=(p-(w-M)*T)/2,b=K=>x+(K-v)*T,C=K=>y+(K-M)*T;function E(){let K=document.createElement("canvas");K.width=m,K.height=p;let Z=K.getContext("2d"),yt=(_t,Pt,j,at)=>{Z.beginPath(),_t.forEach((lt,xt)=>xt?Z.lineTo(b(lt[0]),C(lt[1])):Z.moveTo(b(lt[0]),C(lt[1]))),Z.strokeStyle=Pt,Z.lineWidth=j,Z.lineJoin=Z.lineCap="round",Z.setLineDash(at||[]),Z.stroke(),Z.setLineDash([])},Y=(_t,Pt)=>{for(let j of s.features)j.kind===_t&&j.closed&&(Z.beginPath(),j.pts.forEach((at,lt)=>lt?Z.lineTo(b(at[0]),C(at[1])):Z.moveTo(b(at[0]),C(at[1]))),Z.fillStyle=Pt,Z.fill())},Lt=s.features.filter(_t=>_t.kind==="park").sort((_t,Pt)=>Pt.pts.length-_t.pts.length)[0];Z.save(),Z.beginPath(),Lt.pts.forEach((_t,Pt)=>Pt?Z.lineTo(b(_t[0]),C(_t[1])):Z.moveTo(b(_t[0]),C(_t[1]))),Z.fillStyle="#9be27a",Z.fill(),Z.restore(),Y("water","#49a6ff"),Y("track","#ff7a5c");for(let _t in r.diversions)for(let Pt of r.diversions[_t])yt(Pt.path,"#c79a5a",4,[6,6]);let B=[];for(let _t=0;_t<=r.LAP1_END_DRAW;_t+=10)B.push(r.baseXZ(_t));yt(B,"#1a1420",11),yt(B,"#8fa0c4",6);let P=[];for(let _t=r.MAP_TO-80;_t<=r.finishM;_t+=10)P.push(r.baseXZ(_t));yt(P,"#1a1420",11),yt(P,"#8fa0c4",6);let ht=r.rawExt(r.finishM);return Z.fillStyle="#fff",Z.strokeStyle="#1a1420",Z.lineWidth=3,Z.fillRect(b(ht[0])-7,C(ht[1])-7,14,14),Z.strokeRect(b(ht[0])-7,C(ht[1])-7,14,14),Z.fillStyle="#1a1420",Z.fillRect(b(ht[0])-7,C(ht[1])-7,7,7),Z.fillRect(b(ht[0]),C(ht[1]),7,7),K}_=E();function L(){_=E()}let R=0,U=0,O=[],z=a(".mr-banner");function q(){for(;O.length&&U-O[0].at>2;)O.shift();let K=O.shift();K&&(z.querySelector(".mr-b1 span").textContent=K.text,z.querySelector(".mr-b1").style.background=K.colour,z.querySelector(".mr-b2").textContent="",z.classList.remove("on"),z.offsetWidth,z.classList.add("on"),R=Math.min(1.5,K.secs))}function X(K,Z="",yt="#ff3d8b",Y=1.4){O.length>=3&&O.shift(),O.push({text:K,colour:yt,secs:Y,at:U}),R<=0&&q()}let N="";function gt(K,Z){if(U+=K,R>0?(R-=K,R<=0&&(z.classList.remove("on"),R=-.25)):R<0&&(R=Math.min(0,R+K),R===0&&q()),!!Z){if(Z.map!=null&&o.classList.toggle("mr-nomap",!Z.map),Z.raceS!=null&&(l.clock.textContent=Tv(Z.raceS)),Z.leaderM!=null&&(l.lap.textContent=Z.leaderM>=2500?"2":"1",l.dist.textContent=`${(Math.min(5e3,Z.leaderM)/1e3).toFixed(1)} KM`),Z.order){let yt=h.clientHeight||0,Y=(h.querySelector(".mr-row")?.offsetHeight||40)+6,Lt=0;Z.order.forEach((B,P)=>{let ht=d[B.id];if(!ht||(ht.el.classList.toggle("off",!!B.hidden),B.hidden))return;Lt===3&&(Lt+=.35),ht.el.style.transform=`translateY(${Lt*Y}px)`,Lt++;let Pt=`${P}|${B.gapText}|${B.finished}`+(B.posHtml||"");Pt!==ht.last&&(ht.last=Pt,ht.pos.innerHTML=B.posHtml??Zu(P+1),ht.gap.textContent=B.gapText,ht.el.classList.toggle("lead",P===0&&!B.posHtml),ht.el.classList.toggle("fin",!!B.finished))})}if(Z.tags)for(let yt of Z.tags){let Y=g[yt.id];Y&&(yt.visible!==Y.vis&&(Y.vis=yt.visible,Y.el.style.opacity=yt.visible?"1":"0"),yt.visible&&(Y.el.style.transform=`translate(${yt.x}px, ${yt.y}px) translate(-50%,-100%) scale(${yt.scale??1})`,Y.p!==yt.pos&&(Y.p=yt.pos,Y.pos.textContent=yt.pos?Ev(yt.pos):"",Y.pos.style.display=yt.pos?"":"none")))}if(Z.dots){f.clearRect(0,0,m,p),f.drawImage(_,0,0);for(let yt of[...Z.dots].reverse())f.beginPath(),f.arc(b(yt.x),C(yt.z),yt.lead?11:9,0,7),f.fillStyle=yt.colour,f.fill(),f.lineWidth=3.5,f.strokeStyle="#1a1420",f.stroke(),yt.focus&&(f.beginPath(),f.arc(b(yt.x),C(yt.z),15,0,7),f.strokeStyle="#fff",f.lineWidth=3,f.stroke());Z.camDot&&(f.save(),f.translate(b(Z.camDot.x),C(Z.camDot.z)),f.rotate(Z.camDot.a),f.fillStyle="rgba(26,20,32,.6)",f.beginPath(),f.moveTo(0,0),f.lineTo(-10,-22),f.lineTo(10,-22),f.fill(),f.restore())}}}function Rt(K){o.classList.toggle("mr-dim",!!K)}function k(K){o.classList.toggle("mr-dimtop",!!K)}function W(){R=0,O.length=0,z.classList.remove("on")}function et(K){let Z=a(".mr-card3");if(!K){Z.classList.remove("on");return}Z.querySelector(".mr-lane span").textContent=K.lane??"",Z.querySelector(".mr-lane").style.background=K.colour.primary,Z.querySelector(".mr-info").style.background=`linear-gradient(180deg, ${K.colour.primary}, ${Iv(K.colour.primary,-.25)})`,Z.querySelector(".mr-nick").textContent=K.nickname,Z.querySelector(".mr-nick").style.color="#fff",Z.querySelector(".mr-tagl").textContent=K.tagline||"",Z.querySelector(".mr-tagl").style.color=Av(K.colour.primary)==="#ffffff"?"#fff":"#1a1420",Z.classList.remove("on"),Z.offsetWidth,Z.classList.add("on")}function G(K){let Z=a(".mr-count");Z.textContent=K,Z.classList.remove("pop"),Z.offsetWidth,Z.classList.add("pop")}function J(){let K=a(".mr-wipe");K.classList.remove("go"),K.offsetWidth,K.classList.add("go")}function ct(K){let Z=o.classList.contains("mr-inreplay");o.classList.toggle("mr-inreplay",!!K),!!K!==Z&&J()}function Tt(K,Z=""){a(".mr-photo").classList.toggle("on",!!K),a(".mr-pcap").textContent=Z,a(".mr-pcap").style.display=Z?"":"none"}function Ut(K,Z="Place your halfway bets!"){a(".mr-market").classList.toggle("on",!!K),a(".mr-market .mr-m2").textContent=Z}function st(K,{title:Z="",kicker:yt="",theme:Y=""}={}){let Lt=a(".mr-title");if(K){Lt.querySelector(".mr-t0").textContent=yt,Lt.querySelector(".mr-t1").textContent=Z;let B=Lt.querySelector(".mr-t2");B.textContent=Y,B.style.display=Y?"":"none",Lt.querySelector(".mr-t0").style.display=yt?"":"none"}Lt.classList.toggle("on",!!K)}function pt(K,Z){let yt=Z[0]-K[0],Y=Z[1]-K[1],Lt=Math.hypot(yt,Y)||1,B=yt/Lt,P=Y/Lt,ht=K[0]-B*Lt*.6,_t=K[1]-P*Lt*.6,Pt=a(".mr-photo .mr-line");Pt.style.width=`${Lt*2.2}px`,Pt.style.transform=`translate(${ht}px, ${_t}px) rotate(${Math.atan2(P,B)}rad)`}function H(K){let Z=a(".mr-results");if(!K){Z.classList.remove("on");return}Z.innerHTML='<div class="mr-panel mr-rh"><div class="mr-unskew">RESULTS</div></div>'+K.map(yt=>`<div class="mr-rr"><span class="mr-num">${Zu(yt.place)}</span><span style="width:calc(var(--u)*1.2);height:calc(var(--u)*2.2);background:${yt.colour};border:2px solid #1a1420;border-radius:4px"></span><span>${ro(yt.nickname)}</span><span class="mr-t">${ro(yt.timeText||"")}</span></div>`).join(""),requestAnimationFrame(()=>Z.classList.add("on"))}function Vt(){o.remove()}return{root:o,update:gt,setBackedBy:u,replay:ct,wipe:J,redrawMap:L,showBanner:X,clearBanner:W,setDim:Rt,setDimTop:k,introCard:et,countdown:G,photo:Tt,photoLine:pt,results:H,market:Ut,titleCard:st,dispose:Vt}}function fr(n){if(n.shortName)return n.shortName;let t=String(n.nickname||n.id).replace(/^the\s+/i,"");if(t.length<=14)return t;let e=t.split(/\s+/),i=e.slice(-2).join(" ");return i.length<=14?i:e.at(-1).slice(0,14)}var Ju=["#ffd23f","#ff8fc8","#7fe0ff","#9dff8a","#ffb067","#c7a6ff"],$a=new Map;function Th(n){return $a.has(n)||$a.set(n,$a.size),Ju[$a.get(n)%Ju.length]}var Rv=n=>/\p{Extended_Pictographic}/u.test(String(n));function Cv(n){let t=String(n).trim();if(Rv(t))return[...t][0];let e=t.split(/\s+/).filter(Boolean);return(e.length>1&&e[0].length<=3?e[0][0]+e[1][0]:t[0]||"?").toUpperCase()}function Iv(n,t){let e=parseInt(n.slice(1),16),i=e>>16&255,s=e>>8&255,r=e&255,o=a=>Math.max(0,Math.min(255,Math.round(t<0?a*(1+t):a+(255-a)*t)));return`rgb(${o(i)},${o(s)},${o(r)})`}var Va=(n,t,e=12,i=!0)=>pn(256,256,(s,r,o)=>{for(let a=0;a<e;a++)s.fillStyle=a%2?n:t,i?s.fillRect(a*r/e,0,r/e+1,o):s.fillRect(0,a*o/e,r,o/e+1)});function Ku(n,t,e,i){let s=Nn(42),r=new xe;n.add(r);let o=[],a=[],l=(C,E=3)=>(ri(C,E,void 0,30),C),h=(C,E,L=3)=>Ae(C,E,{ol:L,olRef:30}),d=[];for(let C=0;C<i.path.length;C++){let E=i.path[C],L=e.anchors.nearestOnRibbon(E[0],E[1]),R=Math.hypot(E[0]-L[0],E[1]-L[1]);d.push({x:(E[0]+L[0])/2,z:(E[1]+L[1])/2,gap:R})}let g=0;d.forEach((C,E)=>{E&&(g+=Math.hypot(C.x-d[E-1].x,C.z-d[E-1].z)),C.s=g});let u=g,c=C=>{let E=0;for(;E<d.length-2&&d[E+1].s<C;)E++;let L=d[E],R=d[E+1],U=Math.max(0,Math.min(1,(C-L.s)/Math.max(1e-6,R.s-L.s))),O=L.x+(R.x-L.x)*U,z=L.z+(R.z-L.z)*U,q=Math.hypot(R.x-L.x,R.z-L.z)||1;return{x:O,z,gap:L.gap+(R.gap-L.gap)*U,tx:(R.x-L.x)/q,tz:(R.z-L.z)/q,y:t.heightAt(O,z)}},f=d.filter(C=>C.gap>26),_=f.length?f[0].s:u*.25,m=f.length?f.at(-1).s:u*.75,p=C=>Array.from({length:C},(E,L)=>c(_+(L+.5)/C*(m-_))),S=(C,E,L=0)=>(C.position.set(E.x,E.y-.1,E.z),C.rotation.y=Math.atan2(E.tx,E.tz)+L,r.add(C),C),v={center:c((_+m)/2),rides:[]},M=p(7);{let C=M.slice(1,6).sort((G,J)=>J.gap-G.gap)[0],E=new xe,L=17,R=L+2.6,U=new ge(.35,.5,R/Math.cos(.32)+1,8);for(let G of[-1,1])for(let J of[-1,1]){let ct=h(U,mt("#ffffff"));ct.position.set(G*1.8,R/2,J*Math.tan(.32)*R/2),ct.rotation.x=-J*.32,E.add(ct)}let O=h(new Ce(6,1,8,2,.3),mt("#2e9bff"));O.position.y=.5,E.add(O);let z=new xe;z.position.y=R,E.add(z);let q=h(new sn(L,.45,8,64),mt("#ff3d8b"));q.rotation.y=Math.PI/2,q.position.x=1.2,z.add(q);let X=h(new sn(L,.45,8,64),mt("#ff3d8b"));X.rotation.y=Math.PI/2,X.position.x=-1.2,z.add(X);let N=h(new ge(1.3,1.3,3.2,16).rotateZ(Math.PI/2),mt("#ffd23f"));z.add(N);let gt=16,Rt=[],k=[];for(let G=0;G<gt;G++){let J=G/gt*Math.PI*2,ct=h(new Ue(.18,L,.18).translate(0,L/2,0),mt("#ffffff"),2);ct.rotation.x=J,ct.position.x=1.2,z.add(ct);let Tt=ct.clone();Tt.position.x=-1.2,z.add(Tt);let Ut=new xe;Ut.position.set(0,Math.cos(J)*L,Math.sin(J)*L),z.add(Ut);let st=new xe;Ut.add(st);let pt=["#ffd23f","#3ddc84","#2e9bff","#ff8a3d","#b07bff"][G%5],H=h(new Ce(1.7,1.3,1.5,2,.35),mt(pt));H.position.y=-1.3,st.add(H);let Vt=h(new tn(1.2,.7,4).rotateY(Math.PI/4),mt("#ffffff"),2);Vt.position.y=-.1,st.add(Vt),Rt.push(Ut);for(let K=0;K<3;K++){let Z=J+K/3*(Math.PI*2/gt);k.push([1.2,Math.cos(Z)*L,Math.sin(Z)*L],[-1.2,Math.cos(Z)*L,Math.sin(Z)*L])}}let W=new cn(new Ee(.32,8,6),new Un({color:16777215}),k.length),et=new $e;k.forEach((G,J)=>{et.position.set(...G),et.updateMatrix(),W.setMatrixAt(J,et.matrix),W.setColorAt(J,new fe(["#fff27a","#ff7ac8","#7affff"][J%3]))}),z.add(W),S(E,C,0),a.push(G=>{z.rotation.x=G*.18;for(let J of Rt)J.rotation.x=-G*.18}),v.rides.push({kind:"wheel",obj:E,pos:new $(C.x,C.y+R,C.z),r:L}),C.used=!0}{let C=M.filter(k=>!k.used).sort((k,W)=>W.gap-k.gap)[0];C.used=!0;let E=new xe,L=Math.min(6.5,C.gap*.28);E.scale.setScalar(1.45);let R=Va("#ffffff","#ff4f6d",16);o.push(R);let U=h(new ge(L,L+.3,.9,32),mt("#ffffff",{map:R}));U.position.y=.45,E.add(U);let O=new xe;E.add(O);let z=h(new ge(.7,.7,5,16),mt("#ffd23f"));z.position.y=3,O.add(z);let q=Va("#ffd23f","#ff3d8b",16);o.push(q);let X=h(new tn(L+.8,2.8,16),mt("#ffffff",{map:q}));X.position.y=6.6,O.add(X);let N=h(new ge(L+.8,L+.8,.7,16,1,!0),mt("#2e9bff",{side:on}));N.position.y=4.9,O.add(N);let gt=h(new Ee(.5,12,8),mt("#ff3d8b"));gt.position.y=8.2,O.add(gt);let Rt=[];for(let k=0;k<8;k++){let W=k/8*Math.PI*2,et=L*.72,G=new xe;G.position.set(Math.cos(W)*et,0,Math.sin(W)*et),G.rotation.y=-W,O.add(G);let J=h(new ge(.06,.06,4.2,6),mt("#ffd23f"),1.5);J.position.y=2.9,G.add(J);let ct=new xe;G.add(ct);let Tt=["#ffffff","#ffd6f0","#d6f0ff","#fff2b0"][k%4],Ut=h(new Ce(.7,.7,1.6,2,.3),mt(Tt));ct.add(Ut);let st=h(new Ce(.45,.9,.5,2,.2),mt(Tt));st.position.set(0,.55,.7),st.rotation.x=.4,ct.add(st);let pt=h(new Ce(.45,.45,.8,2,.2),mt(Tt));pt.position.set(0,.95,1.05),ct.add(pt);let H=h(new Ce(.15,.8,.3,1,.06),mt(["#ff3d8b","#2e9bff","#3ddc84","#ff8a3d"][k%4]),2);H.position.set(0,.75,.55),H.rotation.x=.4,ct.add(H);let Vt=h(new Ce(.75,.2,.6,1,.08),mt("#ff3d8b"),2);Vt.position.y=.4,ct.add(Vt);for(let[K,Z]of[[-.22,.55],[.22,.55],[-.22,-.55],[.22,-.55]]){let yt=h(new Ue(.16,.7,.16),mt(Tt),1.5);yt.position.set(K,-.55,Z),yt.rotation.x=Z>0?-.5:.5,ct.add(yt)}ct.rotation.y=Math.PI/2,Rt.push({horse:ct,ph:k*.8})}S(E,C),a.push(k=>{O.rotation.y=k*.6;for(let W of Rt)W.horse.position.y=2+Math.sin(k*2.2+W.ph)*.35}),v.rides.push({kind:"carousel",obj:E,pos:new $(C.x,C.y+6,C.z),r:L*1.45})}{let C=M.filter(k=>!k.used).sort((k,W)=>W.gap-k.gap)[0];C.used=!0;let E=new xe,L=15;E.scale.setScalar(1.5);let R=Va("#ff3d3d","#ffffff",10,!1);o.push(R);let U=h(new ge(1.6,2.6,L,16),mt("#ffffff",{map:R}));U.position.y=L/2,E.add(U);let O=h(new tn(2.6,3.4,16),mt("#2e9bff"));O.position.y=L+1.7,E.add(O);let z=h(new ge(.06,.06,2,6),mt("#ffffff"),1.5);z.position.y=L+4.2,E.add(z);let q=h(new bn(1.2,.7).translate(.6,0,0),mt("#ffd23f",{side:on}),1.5);q.position.y=L+4.8,E.add(q);let X=[],N=3.2;for(let k=0;k<=160;k++){let W=k/160,et=W*N*Math.PI*2,G=2.6+(1-W)*-.8+1.6;X.push(new $(Math.cos(et)*G,L-1-W*(L-2),Math.sin(et)*G))}let gt=h(new Ca(new Xr(X),220,.55,8,!1),mt("#ffd23f"));gt.scale.y=1,E.add(gt);let Rt=h(new Ce(3,.3,2,2,.1),mt("#3ddc84"),2);Rt.position.set(X.at(-1).x+1,.15,X.at(-1).z),E.add(Rt),S(E,C),a.push(k=>{q.rotation.y=Math.sin(k*3)*.4}),v.rides.push({kind:"helter",obj:E,pos:new $(C.x,C.y+12,C.z),r:6})}let D=[["CANDYFLOSS","#ff9bd2"],["HOOK-A-DUCK","#57c7ff"],["DOUGHNUTS","#ffb347"],["COCONUT SHY","#8ee86b"],["TOFFEE APPLES","#ff5d5d"],["HOOK-A-DUCK","#57c7ff"]],w=[];[...M.filter(C=>!C.used),...p(13).filter((C,E)=>E%2===1)].slice(0,7).forEach((C,E)=>{let[L,R]=D[E%D.length],U=new xe,O=E%2?1:-1,z=h(new Ce(4.2,2.4,3,2,.2),mt("#fff6e0"));z.position.y=1.2,U.add(z);let q=h(new Ce(4.4,1.1,.8,2,.15),mt(R));q.position.set(0,.55,1.7),U.add(q);let X=Va("#ffffff",R,10);o.push(X);let N=h(new Ue(4.8,.18,2.4),mt("#ffffff",{map:X}));N.position.set(0,2.9,1.4),N.rotation.x=.32,U.add(N);for(let J of[-1,1]){let ct=h(new ge(.09,.09,2.6,6),mt("#ffffff"),1.5);ct.position.set(J*2.2,1.6,2.4),U.add(ct)}let gt=oi(512,128,(J,ct,Tt)=>{J.fillStyle="#1a1420",en(J,0,0,ct,Tt,30),J.fill(),J.fillStyle=R,en(J,8,8,ct-16,Tt-16,24),J.fill(),mn(J,L,ct/2,Tt/2+4,L.length>11?52:64,"#ffffff","#1a1420",.2)},o),Rt=Ae(new Ce(4.2,1.05,.3,2,.1),[mt(R),mt(R),mt(R),mt(R),mt("#ffffff",{map:gt}),mt("#ffffff",{map:gt})],{ol:2.5,olRef:30});if(Rt.position.set(0,3.7,.4),U.add(Rt),L==="CANDYFLOSS")for(let J=0;J<4;J++){let ct=h(new hn(.32,1),mt("#ff9bd2"),1.5);ct.position.set(-1.4+J*.9,1.45,1.75),U.add(ct)}if(L==="HOOK-A-DUCK"){let J=h(new ge(1.6,1.6,.6,20),mt("#57c7ff"),2);J.position.set(0,.3,3.6),U.add(J);let ct=new xe;ct.position.set(0,.7,3.6),U.add(ct);for(let Tt=0;Tt<6;Tt++){let Ut=Tt/6*Math.PI*2,st=h(new Ee(.22,10,8),mt("#ffd23f"),1.5);st.position.set(Math.cos(Ut)*1.1,0,Math.sin(Ut)*1.1);let pt=h(new Ee(.14,8,6),mt("#ffd23f"),1.2);pt.position.set(0,.22,.12),st.add(pt),ct.add(st)}w.push(ct)}let k=e.anchors.nearestOnRibbon(C.x,C.z),W=Math.atan2(k[0]-C.x,k[1]-C.z),et=Math.min(C.gap*.3,7)*O,G=S(U,{...C,x:C.x+C.tz*et,z:C.z-C.tx*et,y:t.heightAt(C.x+C.tz*et,C.z-C.tx*et)});G.rotation.y=W+(O>0?0:Math.PI)*0}),a.push(C=>{for(let E of w)E.rotation.y=C*.8});{let C=[],E=[],L=[],R=[],U=[];for(let gt of[-1,1]){let Rt=null;for(let k=_-10;k<=m+10;k+=9){let W=c(k),et=(W.gap/2-6)*gt,G=W.x+W.tz*et,J=W.z-W.tx*et,ct=t.heightAt(G,J),Tt=new $(G,ct+4.2,J),Ut=h(new ge(.08,.1,4.3,6),mt("#ffffff"),1.5);if(Ut.position.set(G,ct+2.1,J),r.add(Ut),Rt)for(let st=0;st<=10;st++){let pt=st/10,H=Rt.clone().lerp(Tt,pt);H.y-=Math.sin(pt*Math.PI)*.7,C.push(H),st<10&&(st%2?(E.push(H.clone()),L.push(["#fff27a","#ff7ac8","#7affff","#9dff7a"][(st+Math.round(k))%4])):(R.push({v:H.clone(),a:Math.atan2(-(Tt.z-Rt.z),Tt.x-Rt.x)}),U.push(["#ff3d8b","#ffd23f","#2e9bff","#3ddc84","#ff8a3d"][(st+Math.round(k/9))%5])))}Rt=Tt}}let O=new $e,z=new cn(new Ee(.16,8,6),new Un({color:16777215}),E.length);E.forEach((gt,Rt)=>{O.position.copy(gt),O.updateMatrix(),z.setMatrixAt(Rt,O.matrix),z.setColorAt(Rt,new fe(L[Rt]))}),r.add(z);let q=new Ve;q.setAttribute("position",new be([-.32,0,0,.32,0,0,0,-.65,0],3)),q.setAttribute("normal",new be([0,0,1,0,0,1,0,0,1],3));let X=new cn(q,mt("#ffffff",{side:on}),R.length);R.forEach((gt,Rt)=>{O.position.copy(gt.v),O.rotation.set(0,gt.a,0),O.updateMatrix(),X.setMatrixAt(Rt,O.matrix),X.setColorAt(Rt,new fe(U[Rt]))}),r.add(X);let N=[];for(let gt=0;gt+1<C.length;gt++)C[gt].distanceTo(C[gt+1])<3&&N.push(C[gt],C[gt+1]);r.add(new sr(new Ve().setFromPoints(N),new _s({color:3355443}))),a.push(gt=>{z.material.color.setScalar(.85+.15*Math.sin(gt*6))})}{let C=c(_-4),E=oi(1024,256,(R,U,O)=>{R.fillStyle="#1a1420",en(R,0,0,U,O,60),R.fill(),R.fillStyle="#ff3d8b",en(R,10,10,U-20,O-20,52),R.fill(),mn(R,"\u2605 FUNFAIR \u2605",U/2,O/2+6,120,"#ffe14d","#1a1420",.18)},o),L=Ae(new Ce(10,2.4,.4,2,.15),[mt("#ff3d8b"),mt("#ff3d8b"),mt("#ff3d8b"),mt("#ff3d8b"),mt("#ffffff",{map:E}),mt("#ffffff",{map:E})],{ol:3,olRef:30});L.position.set(C.x,C.y+7.5,C.z),L.rotation.y=Math.atan2(C.tx,C.tz)+Math.PI/2,r.add(L);for(let R of[-1,1]){let U=h(new ge(.25,.3,7.6,8),mt("#ffd23f"));U.position.set(C.x+C.tz*4.5*R,C.y+3.8,C.z-C.tx*4.5*R),r.add(U)}}let T=[];for(let C=0;C<60;C++){let E=_+s()*(m-_),L=c(E),R=(s()-.5)*(L.gap-16),U=L.x+L.tz*R,O=L.z-L.tx*R;T.push({x:U,y:t.heightAt(U,O),z:O,yaw:s()*6.28})}function x(C,E){for(let L of d){if(L.s<_-20||L.s>m+20)continue;let R=Math.max(6,L.gap/2-4);if((C-L.x)**2+(E-L.z)**2<R*R)return!0}return!1}function y(C){for(let E of a)E(C)}function b(){r.traverse(C=>{C.geometry&&C.geometry.dispose()});for(let C of o)C.dispose?.();n.remove(r)}return{group:r,update:y,dispose:b,anchors:v,crowd:T,at:c,s0:_,s1:m,contains:x}}function Qu(n,t,e,i,s,{camera:r,offsetX:o=3.2}){let a=new xe;n.add(a);let l=[],h=t.sample(t.finishM+28),d=new $(h.tx,0,h.tz),g=new $(h.rx,0,h.rz),u=new $(h.x,t.heightAt(h.x,h.z),h.z),c=Math.atan2(d.x,d.z);a.position.copy(u),a.rotation.y=c;let f=[{place:2,x:-2.3,hgt:1.3,col:"#c9d3e6"},{place:1,x:0,hgt:1.9,col:"#ffd23f"},{place:3,x:2.3,hgt:.9,col:"#e59a5c"}];for(let E of f){let L=oi(256,256,(U,O,z)=>{U.fillStyle="#2e6fe0",U.fillRect(0,0,O,z),U.fillStyle=E.col,U.fillRect(0,0,O,26),mn(U,String(E.place),O/2,z/2+14,170,E.col,"#1a1420",.16)},l),R=Ae(new Ce(2.25,E.hgt,2,3,.12),[mt("#2e6fe0"),mt("#2e6fe0"),mt(E.col),mt("#2e6fe0"),mt("#ffffff",{map:L}),mt("#2e6fe0")],{ol:3.5,olRef:12});R.position.set(E.x,E.hgt/2,0),a.add(R),E.top=E.hgt}let _=oi(1024,256,(E,L,R)=>{E.fillStyle="#1a1420",en(E,0,0,L,R,50),E.fill(),E.fillStyle="#ff3d8b",en(E,10,10,L-20,R-20,42),E.fill(),mn(E,"MARKRUN CHAMPIONS",L/2,R/2+6,80,"#ffffff","#1a1420",.16)},l),m=Ae(new Ce(9,2.2,.3,2,.1),[mt("#ff3d8b"),mt("#ff3d8b"),mt("#ff3d8b"),mt("#ff3d8b"),mt("#ffffff",{map:_}),mt("#ffffff",{map:_})],{ol:3,olRef:14});m.position.set(0,5.6,-2.4),a.add(m);for(let E of[-1,1]){let L=Ae(new ge(.14,.16,5.6,8),mt("#ffffff"),{ol:2,olRef:14});L.position.set(E*4.3,2.8,-2.4),a.add(L)}let p=s.length,S=[];for(let E of s){let L=i[E.runnerId];if(!L)continue;let R=f.find(z=>z.place===E.place),U=R?new $(R.x,R.top,.1):null,O;if(E.place===1?O=["celebrate","jump"]:E.place===2?O=["pose","flex"]:E.place===3?O=["celebrate","fist"]:E.place===p&&p>3?O=["celebrate","collapse"]:O=["celebrate","shrug"],!U){S.push({rr:L,o:E,pose:O});continue}v(L,U,O)}S.forEach((E,L)=>{let R=L%2?1:-1,U=Math.floor(L/2),O=E.pose[1]==="collapse",z=new $(R*(O?4.6:4.2+U*1.6),0,O?1.6:.6+U*.8);v(E.rr,z,E.pose,O?-R*Math.PI/2:0)});function v(E,L,R,U=0){let O=L.clone().applyAxisAngle(new $(0,1,0),c).add(u);L.y===0&&(O.y=t.heightAt(O.x,O.z)+.05),E.root.position.copy(O),E.root.rotation.set(0,c+U,0),E.set(...R),E.setPop(null)}let M=Nn(3),D=420,w=new cn(new bn(.16,.26),new Un({side:on}),D),A=[],T=["#ff3d8b","#ffd23f","#2e9bff","#3ddc84","#ff8a3d","#ffffff","#b07bff"];for(let E=0;E<D;E++)A.push({x:(M()-.5)*14,y:M()*12,z:(M()-.5)*8,vy:1+M()*1.6,sp:M()*6,ph:M()*6.28}),w.setColorAt(E,new fe(T[E%T.length]));w.frustumCulled=!1,a.add(w);let x=new $e,y=0;function b(E,L){y+=E;for(let q=0;q<D;q++){let X=A[q];X.y-=X.vy*E,X.y<0&&(X.y+=12),x.position.set(X.x+Math.sin(y*1.3+X.ph)*.5,X.y,X.z+Math.cos(y+X.ph)*.4),x.rotation.set(y*X.sp+X.ph,y*X.sp*.7,X.ph),x.updateMatrix(),w.setMatrixAt(q,x.matrix)}w.instanceMatrix.needsUpdate=!0;let R=Math.sin(y*.18)*.4,U=15-Math.min(2.5,y*.2),O=new $(Math.sin(R)*U,3+Math.sin(y*.3)*.3,Math.cos(R)*U).applyAxisAngle(new $(0,1,0),c);r.position.copy(u).add(O);let z=new $(o,2.2,0).applyAxisAngle(new $(0,1,0),c).add(u);r.lookAt(z),r.fov!==42&&(r.fov=42,r.updateProjectionMatrix())}function C(){a.traverse(E=>{E.geometry&&E.geometry.dispose()}),w.material.dispose();for(let E of l)E.dispose?.();n.remove(a)}return{update:b,dispose:C,center:u}}var je=(n,t)=>{n=n.index?n.toNonIndexed():n;let e=new fe(t).convertSRGBToLinear(),i=n.getAttribute("position").count,s=new Float32Array(i*3);for(let r=0;r<i;r++)s[r*3]=e.r,s[r*3+1]=e.g,s[r*3+2]=e.b;return n.setAttribute("color",new Ze(s,3)),n.getAttribute("uv")&&n.deleteAttribute("uv"),n},wn=(n,t,e,i,s=0,r=1.6)=>(n.scale(r,r,r),n.rotateY(s),n.translate(t,e,i),n);function td(n,t,e,i){let s=Nn(777),r=new xe;n.add(r);let o=[],a=[],l=(f,_)=>`lawn:${Math.floor(f/140)},${Math.floor(_/140)}`,h=(f,_,m,p=.8,S)=>a.push({x:f,y:t.heightAt(f,_),z:_,yaw:m,scale:p,colour:S,zone:l(f,_)}),{ribbonSamples:d}=e.anchors;function g(f,_,m){for(let p=0;p<40;p++){let S=d[Math.floor(s()*d.length)],v=s()*Math.PI*2,M=f+s()*(_-f),D=S[0]+Math.cos(v)*M,w=S[1]+Math.sin(v)*M;if(!(!e.inPark(D,w)||e.blocked(D,w,m+1)||!e.clearOf(D,w,m)||e.onPath(D,w,m+2)))return e.reserve(D,w,m),{x:D,z:w,y:t.heightAt(D,w),toPath:Math.atan2(S[0]-D,S[1]-w)}}return null}{let f=[],_=["#ff5d8f","#ffd23f","#2e9bff","#3ddc84","#ff8a3d","#b07bff"],m=(w,A,T,x,y,b)=>{f.push(wn(je(new Ue(1.6,.2,1.6).translate(0,2,0),y),w,A,T,x));for(let[L,R]of[[-.7,-.7],[.7,-.7],[-.7,.7],[.7,.7]])f.push(wn(je(new ge(.08,.08,2,6).translate(L,1,R),"#ffffff"),w,A,T,x));f.push(wn(je(new tn(1.25,1,4).rotateY(Math.PI/4).translate(0,2.6,0),b),w,A,T,x));let C=new Ue(.9,.12,3.3);C.rotateX(-.62),C.translate(0,1.05,2.1),f.push(wn(je(C,b),w,A,T,x));let E=new Ue(.8,.08,2.4);E.rotateX(1),E.translate(0,1,-1.3),f.push(wn(je(E,"#ffffff"),w,A,T,x))},p=(w,A,T,x,y)=>{for(let b of[-1.8,1.8])for(let C of[-.6,.6]){let E=new ge(.08,.08,2.8,6);E.rotateX(C>0?.22:-.22),E.translate(b,1.35,C*.5),f.push(wn(je(E,y),w,A,T,x))}f.push(wn(je(new ge(.1,.1,3.8,8).rotateZ(Math.PI/2).translate(0,2.7,0),y),w,A,T,x));for(let b of[-.8,.8]){f.push(wn(je(new Ue(.6,.08,.35).translate(b,.75,0),"#22202c"),w,A,T,x));for(let C of[-.25,.25])f.push(wn(je(new ge(.02,.02,1.9,4).translate(b+C,1.7,0),"#888888"),w,A,T,x))}},S=(w,A,T,x)=>{let y=new Ee(1.6,8,5,0,Math.PI*2,0,Math.PI/2);f.push(wn(je(y,x),w,A,T)),f.push(wn(je(new ge(.4,.4,.5,8).translate(0,1.7,0),"#ffffff"),w,A,T))},v=(w,A,T,x,y)=>{f.push(wn(je(new ge(1.5,1.5,.25,16).translate(0,.35,0),x),w,A,T)),f.push(wn(je(new ge(.1,.1,1,6).translate(0,.9,0),y),w,A,T)),f.push(wn(je(new sn(.9,.06,6,16).rotateX(Math.PI/2).translate(0,1.2,0),y),w,A,T))},M=(w,A,T,x,y)=>{f.push(wn(je(new Ee(.45,10,8).scale(1,.9,1.4).translate(0,.95,0),y),w,A,T,x)),f.push(wn(je(new Ee(.3,8,6).translate(0,1.4,.55),y),w,A,T,x)),f.push(wn(je(new ge(.12,.12,.6,6).translate(0,.3,0),"#888888"),w,A,T,x))},D=[m,p,S,v,M];for(let w of i.features){if(w.kind!=="playground"||!w.closed)continue;let A=Yn(w.pts),T=(A[2]-A[0])*(A[3]-A[1]),x=Math.max(1,Math.min(9,Math.round(T/380))),y=[];for(let b=0,C=0;b<x&&C<80;C++){let E=A[0]+3+s()*(A[2]-A[0]-6),L=A[1]+3+s()*(A[3]-A[1]-6);if(!hr(w.pts,E,L)||y.some(X=>Math.hypot(X[0]-E,X[1]-L)<8.5))continue;y.push([E,L]),b++;let R=t.heightAt(E,L)-.05,U=s()*6.28,O=_[Math.floor(s()*_.length)],z=_[Math.floor(s()*_.length)],q=D[(b+y.length+Math.floor(s()*5))%D.length];q===m||q===p||q===M?q(E,R,L,U,O,z):q(E,R,L,O,z),s()<.6&&h(E+2.5,L+1.5,s()*6,.55)}}if(f.length){let w=Ae(an(f),mt("#ffffff",{vertexColors:!0}),{ol:2,olRef:30});r.add(w)}}{let f=pn(64,64,(T,x,y)=>{for(let b=0;b<6;b++)for(let C=0;C<6;C++)T.fillStyle=(b+C)%2?"#ffffff":"#c8c8c8",T.fillRect(b*x/6,C*y/6,x/6+1,y/6+1)});o.push(f);let _=new bn(2.8,2.2);_.rotateX(-Math.PI/2);let m=[],p=[],S=[],v=["#ff4f6d","#2e9bff","#3ddc84","#ffd23f","#ff8a3d","#b07bff"];for(let T=0;T<90;T++){let x=g(12,70,3);if(!x)continue;let y=s()*6.28;m.push({x:x.x,y:x.y+.06,z:x.z,ry:y}),p.push(v[T%v.length]),S.push({x:x.x+Math.cos(y)*.7,y:x.y+.05,z:x.z-Math.sin(y)*.7,ry:y});let b=1+Math.floor(s()*3);for(let C=0;C<b;C++){let E=y+C/b*Math.PI*2+.5,L=x.x+Math.cos(E)*.9,R=x.z-Math.sin(E)*.9;h(L,R,x.toPath+(s()-.5),.62+s()*.15)}}let M=new cn(_,mt("#ffffff",{map:f,polygonOffset:!0,polygonOffsetFactor:-1}),m.length),D=new $e;m.forEach((T,x)=>{D.position.set(T.x,T.y,T.z),D.rotation.set(0,T.ry,0),D.updateMatrix(),M.setMatrixAt(x,D.matrix),M.setColorAt(x,new fe(p[x]))}),M.receiveShadow=!0,M.computeBoundingSphere(),r.add(M),e.registerInstanced(M,m);let w=an([je(new Ce(.7,.45,.5,2,.08).translate(0,.22,0),"#c98a4a"),je(new sn(.25,.04,6,12,Math.PI).translate(0,.45,0),"#8a5a36")]),A=new cn(w,mt("#ffffff",{vertexColors:!0}),S.length);S.forEach((T,x)=>{D.position.set(T.x,T.y,T.z),D.rotation.set(0,T.ry,0),D.updateMatrix(),A.setMatrixAt(x,D.matrix)}),A.castShadow=!0,A.computeBoundingSphere(),ri(A,1.6,void 0,20),r.add(A),e.registerInstanced(A,S)}{let f=an([new ii(.22,.5,4,8).rotateX(Math.PI/2).translate(0,.45,0),new Ee(.22,10,8).translate(0,.72,.42),new Ee(.1,6,5).scale(.6,1.4,.6).translate(-.14,.86,.36),new Ee(.1,6,5).scale(.6,1.4,.6).translate(.14,.86,.36),new Ee(.09,6,5).translate(0,.66,.64),...[[-.13,.25],[.13,.25],[-.13,-.25],[.13,-.25]].map(([T,x])=>new ge(.06,.06,.32,6).translate(T,.16,x)),new ge(.04,.03,.35,5).rotateX(-.9).translate(0,.6,-.42)].map(T=>T.index?T.toNonIndexed():T).map(T=>(T.deleteAttribute("uv"),T))),_=an([je(new Ee(.55,12,8,0,Math.PI*2,Math.PI*.45,Math.PI*.55).scale(1,.8,1.3).translate(0,.95,0),"#ffffff"),je(new Ee(.56,12,8,Math.PI,Math.PI,0,Math.PI*.5).scale(1,.9,.9).translate(0,.95,-.2),"#ffffff"),...[[-.45,.45],[.45,.45],[-.45,-.45],[.45,-.45]].map(([T,x])=>je(new sn(.2,.06,6,12).rotateY(Math.PI/2).translate(T,.22,x),"#22202c")),je(new ge(.03,.03,.9,5).rotateX(.6).translate(0,1.15,-.85),"#22202c")]),m=[],p=[],S=[],v=[],M=["#c98a4a","#3b2a20","#f2e6d0","#8a8a8a","#e0b070","#ffffff"];for(let T=0;T<64;T++){let x=g(8,60,1.6);if(!x)continue;let y=s()*6.28;h(x.x,x.z,y,.82);let b=Math.sin(y),C=Math.cos(y);T%4===3?(S.push({x:x.x+b*1.4,y:x.y,z:x.z+C*1.4,ry:y,s:1}),v.push(["#ffb3c7","#b3dcff","#c8f0b0","#fff0a0"][T%4])):(m.push({x:x.x+b*1.6+C*.8,y:x.y,z:x.z+C*1.6-b*.8,ry:y+(s()-.5)*.8,s:.8+s()*.6}),p.push(M[Math.floor(s()*M.length)]))}let D=new $e,w=(T,x,y,b)=>{let C=new cn(T,x,y.length);return y.forEach((E,L)=>{D.position.set(E.x,E.y,E.z),D.rotation.set(0,E.ry,0),D.scale.setScalar(E.s),D.updateMatrix(),C.setMatrixAt(L,D.matrix),b&&C.setColorAt(L,new fe(b[L]))}),C.castShadow=!0,C.receiveShadow=!0,C.computeBoundingSphere(),ri(C,2,void 0,18),r.add(C),e.registerInstanced(C,y),C},A=m.length?w(f,mt("#ffffff"),m,p):null;S.length&&w(_,mt("#ffffff",{vertexColors:!0}),S,v)}{let f=[],_=[],m=[],p=["#ff5d8f","#ffd23f","#ffffff","#b06bff","#ff8a3d","#ff3d3d"];for(let A=0;A<26;A++){let T=g(9,40,3.2);if(!T)continue;let x=2.2+s()*.8;f.push({x:T.x,y:T.y-.05,z:T.z,s:x});let y=[p[A%p.length],p[(A+2)%p.length]];for(let b=0;b<60;b++){let C=s()*6.28,E=Math.sqrt(s())*(x-.25);_.push({x:T.x+Math.cos(C)*E,y:T.y+.25,z:T.z+Math.sin(C)*E,s:.8+s()*.5}),m.push(y[b%2])}}let S=new $e,v=an([je(new ge(1,1.05,.35,20).translate(0,.17,0),"#4f9e3a"),je(new sn(1.02,.08,6,24).rotateX(Math.PI/2).translate(0,.35,0),"#ffffff")]),M=new cn(v,mt("#ffffff",{vertexColors:!0}),f.length);f.forEach((A,T)=>{S.position.set(A.x,A.y,A.z),S.scale.set(A.s,1,A.s),S.updateMatrix(),M.setMatrixAt(T,S.matrix)}),M.receiveShadow=!0,M.computeBoundingSphere(),ri(M,1.6,void 0,20),r.add(M),e.registerInstanced(M,f);let D=new hn(.24,0);D.computeVertexNormals();let w=new cn(D,mt("#ffffff"),_.length);S.scale.setScalar(1),_.forEach((A,T)=>{S.position.set(A.x,A.y,A.z),S.scale.setScalar(A.s),S.updateMatrix(),w.setMatrixAt(T,S.matrix),w.setColorAt(T,new fe(m[T]))}),w.computeBoundingSphere(),r.add(w),e.registerInstanced(w,_)}{let f=t.sample(55),_=-1,m=Je/2+9,p=f.x+f.rx*m*_,S=f.z+f.rz*m*_;e.blocked(p,S,3)&&(p=f.x-f.rx*m*_,S=f.z-f.rz*m*_);let v=new xe,M=pn(128,16,(L,R,U)=>{for(let O=0;O<8;O++)L.fillStyle=O%2?"#fff":"#3a9d5d",L.fillRect(O*16,0,16,U)});o.push(M),v.add(Ae(new Ce(3.2,1.6,1.8,3,.25),mt("#3a9d5d"),{ol:3,olRef:20})).position.y=1.15;let D=Ae(new Ce(3.4,.15,2,2,.05),mt("#f4e3c0"),{ol:2,olRef:20});D.position.y=2,v.add(D);let w=Ae(new Ue(3.8,.15,2.4),mt("#ffffff",{map:M}),{ol:2.5,olRef:20});w.position.y=3.2,v.add(w);for(let L of[-1.6,1.6]){let R=Ae(new ge(.06,.06,1.2,6),mt("#ffffff"),{ol:1.5});R.position.set(L,2.6,.9),v.add(R)}for(let L of[-1.1,1.1]){let R=Ae(new ge(.4,.4,.2,14).rotateZ(Math.PI/2),mt("#22202c"),{ol:2});R.position.set(L,.4,.95),v.add(R);let U=R.clone();U.position.z=-.95,v.add(U)}let A=Ae(new ge(.75,.55,1.3,16),mt("#ffffff"),{ol:3,olRef:20});A.position.y=4,v.add(A);let T=Ae(new ge(.82,.82,.22,16),mt("#5a3a24"),{ol:2.5,olRef:20});T.position.y=4.75,v.add(T);let x=Ae(new ge(.72,.62,.45,16),mt("#c98a4a"),{ol:2,olRef:20});x.position.y=3.95,v.add(x);let y=oi(512,128,(L,R,U)=>{L.fillStyle="#1a1420",en(L,0,0,R,U,28),L.fill(),L.fillStyle="#ffd23f",en(L,6,6,R-12,U-12,22),L.fill(),mn(L,"FLAT WHITES",R/2,U/2+4,62,"#ffffff","#1a1420",.2)},o),b=new ze(new bn(2.8,.7),mt("#ffffff",{map:y}));b.position.set(0,1.4,.92),v.add(b);let C=b.clone();C.rotation.y=Math.PI,C.position.z=-.92,v.add(C);let E=Math.atan2(f.x-p,f.z-S);v.position.set(p,t.heightAt(p,S),S),v.rotation.y=E,r.add(v);for(let L=0;L<5;L++){let R=p+Math.sin(E)*(2.2+L*1.1)+Math.cos(E)*(L%2?.3:-.3),U=S+Math.cos(E)*(2.2+L*1.1);h(R,U,E+Math.PI,.8)}e.anchors.coffeeCart=v}function u(){}function c(){r.traverse(f=>{f.geometry&&f.geometry.dispose()});for(let f of o)f.dispose?.();n.remove(r)}return{group:r,crowd:a,update:u,dispose:c}}var oo=8.5;function Pv(n,t={}){let{course:e,park:i,round:s}=t,r=t.plan||null,o=t.backedBy||{},a=Object.keys(o).filter(V=>(o[V]||[]).length),l=[...s?.runners||[]].sort((V,tt)=>(V.lane??0)-(tt.lane??0)),h=!1,d=new pa({antialias:!0,powerPreference:"high-performance",preserveDrawingBuffer:!!t.preserveDrawingBuffer});d.setPixelRatio(Math.min(window.devicePixelRatio||1,t.maxPixelRatio??1.5)),d.outputColorSpace=vn,d.toneMapping=ui,d.shadowMap.enabled=!0,d.shadowMap.type=oh;let g=d.domElement;g.style.cssText="position:absolute;inset:0;width:100%;height:100%;display:block",getComputedStyle(n).position==="static"&&(n.style.position="relative"),n.appendChild(g);let u=new ga;u.fog=new ma(13496063,700,3200);let c=new Pn(45,16/9,.3,9e3),f=new ka(14676223,9420912,1.45);u.add(f);let _=new Da(16774109,2.3),m=new $(-.45,.82,.38).normalize();_.castShadow=!0,_.shadow.mapSize.set(2048,2048),_.shadow.bias=-4e-4,_.shadow.normalBias=.03,_.shadow.radius=3,u.add(_),u.add(_.target);let p=ku(e,i,r),S=Ou(u,p,{course:e,park:i}),v=null,M=null,D=zu(p,S.anchors.crowdZones,5,S.onPath,S.blocked),w=td(u,p,S,i);D.push(...w.crowd);let A=new Map;for(let V of D){let tt=V.zone??"x";A.has(tt)||A.set(tt,[]),A.get(tt).push(V)}let T=[...A.values()].map(V=>Sh(u,V)),x={update:(...V)=>{T.forEach(tt=>tt.update(...V)),M?.update(...V)},setMask:V=>T.forEach(tt=>tt.setMask(V)),dispose:()=>{T.forEach(V=>V.dispose()),M?.dispose()}},y={};for(let V of l){let tt=Gu(V);y[V.id]=tt,u.add(tt.root)}let b=l.map(V=>V.id),C=Object.fromEntries(l.map(V=>[V.id,V])),E=ju(n,{runners:l,backedBy:o,course:e,park:i,C:p}),L=null,R=null,U=[],O=null,z=[],q=!1;function X(V){if(r=V||null,p.setPlan(r),h=!!r?.runners?.some(tt=>tt.diversions&&tt.diversions.length),v&&(v.dispose(),v=null),M&&(M.dispose(),M=null),h){let tt=r.runners.find(kt=>kt.diversions?.length).id;v=Ku(u,p,S,p.diversions[tt][0]),S.clearArea(v.contains),T.forEach(kt=>kt.hideWhere(v.contains)),M=Sh(u,v.crowd)}if((h||q)&&(S.redrawGround(),E.redrawMap()),q=h,z=[],r){R=Wu(r,p,l),U=wh({plan:r,sim:R,backedIds:a,hasDiversion:h,C:p,world:S,funfair:v}),O=Yu({camera:c,C:p,sim:R,world:S,funfair:v});for(let tt of r.events||[])z.push({at:tt.broadcastS,evt:{...tt,kind:"event"}});for(let tt of r.commentary||[])z.push({at:tt.broadcastS,evt:{...tt,kind:"commentary"}});z.sort((tt,kt)=>tt.at-kt.at)}else R=null,U=[],O=null}let N="idle",gt=!1,Rt=!1,k=-oo,W=0,et=null,G=null,J=0,ct=!1,Tt=!1,Ut=null,st=!1,pt=1,H=0,Vt=.35,K=3.2,Z=0,yt=0,Y=!1,Lt=0,B=Math.max(.05,Number(t.speed)||1),P=null,ht=0,_t=new Set;function Pt(){let V=n.clientWidth||window.innerWidth,tt=n.clientHeight||window.innerHeight;d.setSize(V,tt,!1),c.aspect=V/tt,c.updateProjectionMatrix(),_h.uRes.value.set(V*d.getPixelRatio(),tt*d.getPixelRatio())}let j=typeof ResizeObserver<"u"?new ResizeObserver(Pt):null;j?.observe(n),window.addEventListener("resize",Pt),Pt();let at={};{let V=b.length;b.forEach((tt,kt)=>{let wt=(kt-(V-1)/2)*Math.min(1.25,(Je-1.6)/Math.max(1,V-1)),Ht=p.sample(0);at[tt]={x:Ht.x+Ht.rx*wt-Ht.tx*1.2,z:Ht.z+Ht.rz*wt-Ht.tz*1.2,yaw:Math.atan2(Ht.tx,Ht.tz)},at[tt].y=p.heightAt(at[tt].x,at[tt].z)+.16})}function lt(V="idle"){for(let tt of b){let kt=at[tt],wt=y[tt];wt.root.position.set(kt.x,kt.y,kt.z),wt.root.rotation.set(0,kt.yaw,0),V&&wt.set(V),wt.setPop(null)}}lt(),X(r);let xt=(V,tt)=>V===1?"jump":V===2||V===3?"fist":V===tt?"collapse":"kneel";function Ct(V,tt){let kt=R.stateAt(Math.max(0,V)),wt=b.length;for(let Ht of b){let Jt=kt.byId[Ht],ae=y[Ht];if(V<0)continue;ae.root.position.set(Jt.x,Jt.y,Jt.z);let qe=Math.atan2(Jt.tx,Jt.tz)+(Jt.finished&&Jt.post>2.4&&!(Jt.place>3&&Jt.post<4)?Math.PI*(Jt.place%2?1:-1)*.92:0),Wt=ae.root.rotation.y,te=qe-Wt;for(;te>Math.PI;)te-=2*Math.PI;for(;te<-Math.PI;)te+=2*Math.PI;ae.root.rotation.y=Wt+te*Math.min(1,tt*10);let Se={speed:Jt.vRace,rate:kt.rate*pt,slope:Jt.slope},$t=p.diversions[Ht]?.[0];if($t&&ae.setProp("floss",Jt.m>$t.toM-20?Math.max(.25,1-(Jt.m-$t.toM)/3500):0),Jt.finished){let pe=Jt.place;Jt.post<1.6?(ae.set("run"),Se.speed=3,Se.rate=1.2):pe>3&&Jt.post<4?ae.set("trudge"):ae.set("celebrate",xt(pe,wt)),ae.setPop(null)}else if(Jt.div>.3){ae.set("distracted");let pe=v?.anchors.rides.reduce((Fe,Le)=>!Fe||Le.pos.distanceToSquared(ae.root.position)<Fe.pos.distanceToSquared(ae.root.position)?Le:Fe,null);if(pe){let Le=Math.atan2(pe.pos.x-Jt.x,pe.pos.z-Jt.z)-ae.root.rotation.y;for(;Le>Math.PI;)Le-=2*Math.PI;for(;Le<-Math.PI;)Le+=2*Math.PI;Se.lookYaw=Math.max(-1.3,Math.min(1.3,Le))}ae.setPop(["!","heart","floss"][Math.floor((Jt.m-Jt.divInfo.fromM)/120)%3])}else{ae.set("run"),ae.setPop(null);let pe=p.geoOf(Jt.m);Se.effort=Jt.m>4300?.4+(Jt.m-4300)/700*.5:pe>1700&&pe<2060?.7:.1}ae.update(tt*pt,Se)}}let St=new $,Nt=null,Yt=-1,re=()=>{if(Yt!==W||!Nt){let V=g.getBoundingClientRect();Nt=[...E.root.querySelectorAll(".mr-tower, .mr-map, .mr-top")].filter(tt=>!E.root.classList.contains("mr-dim")&&!(E.root.classList.contains("mr-dimtop")&&!tt.classList.contains("mr-map"))).map(tt=>{let kt=tt.getBoundingClientRect(),wt=kt.right,Ht=kt.bottom;if(tt.classList.contains("mr-tower")){Ht=kt.top+tt.querySelectorAll(".mr-row").length*((tt.querySelector(".mr-row")?.offsetHeight||40)+6);for(let Jt of tt.querySelectorAll(".mr-badges")){let ae=Jt.getBoundingClientRect();ae.width&&(wt=Math.max(wt,ae.right))}}return{left:kt.left-V.left,right:wt-V.left,top:kt.top-V.top,bottom:Ht-V.top}}),Yt=W}return Nt};function jt(V,tt=!0){c.updateMatrixWorld();let kt=g.clientWidth,wt=g.clientHeight,Ht=[];for(let $t of b){let pe=y[$t];St.set(pe.root.position.x,pe.root.position.y+pe.height+.55,pe.root.position.z);let Fe=St.distanceTo(c.position);St.project(c);let Le=tt&&St.z<1&&St.z>-1&&Math.abs(St.x)<.95&&St.y<.82&&St.y>-.62&&Fe>9.5&&Fe<(so.has(O?.shot?.type)?450:150);pe.height/Math.max(.1,Fe)*(wt/(2*Math.tan(Ji.degToRad(c.fov)/2)))>wt*.3&&(Le=!1),Ht.push({id:$t,x:(St.x*.5+.5)*kt,y:(-St.y*.5+.5)*wt,visible:Le,pos:V?V.order.indexOf($t)+1:0,scale:Math.max(.7,Math.min(1.15,30/Fe)),dist:Fe})}let Jt=N==="race"&&so.has(O?.shot?.type)&&!O?.gliding,ae=V?V.order:b,qe=new Set([...ae.slice(0,3),...a]);Ht.sort(($t,pe)=>ae.indexOf($t.id)-ae.indexOf(pe.id));let Wt=[];for(let $t of Ht){if((!Jt||!qe.has($t.id))&&($t.visible=!1),!$t.visible)continue;let pe=(fr(C[$t.id]).length*10+50+(o[$t.id]?.length||0)*18)*$t.scale,Fe=26*$t.scale,Le=10,Ye={l:$t.x-pe/2,r:$t.x+pe/2,t:$t.y-Fe,b:$t.y+6};if(Wt.some(Te=>Ye.l<Te.r+4&&Ye.r>Te.l-4&&Ye.t<Te.b+2&&Ye.b>Te.t-2)){$t.visible=!1;continue}if(re().some(Te=>Ye.l<Te.right+Le&&Ye.r>Te.left-Le&&Ye.t<Te.bottom+Le&&Ye.b>Te.top-Le)){$t.visible=!1;continue}Wt.push(Ye)}if(!V)return N!=="race"?{tags:Ht}:{tags:Ht,raceS:0,leaderM:0,map:!1,order:b.map($t=>({id:$t,hidden:!0,gapText:""}))};let te=V.leader.m>=4e3,Se=V.order.map(($t,pe)=>{let Fe=V.byId[$t],Le=pe<3||a.includes($t),Ye=te||Fe.finished?Fe.gapText:"";if(!Ye&&a.includes($t)&&pe>0&&!Fe.finished){let Te=V.byId[V.order[pe-1]],fn=V.raceS-Fn(R.byId[V.order[pe-1]].progress,Fe.m);!Te.finished&&fn>=0&&fn<=5&&(Ye=`\u2191${fn.toFixed(1)}s`)}return{id:$t,gapText:Ye,finished:Fe.finished,hidden:!Le}});return{raceS:V.raceS,leaderM:V.leader.m,tags:Ht,order:Se,map:so.has(O?.shot?.type),dots:V.order.map(($t,pe)=>({x:V.byId[$t].x,z:V.byId[$t].z,colour:C[$t].colour.primary,lead:pe===0,focus:O?.shot?.ids?.includes($t)}))}}let ye=new or(.78,1,48);ye.rotateX(-Math.PI/2);let ce={};function Pe(){for(let V of b){let tt=ce[V]||(ce[V]=new xe);tt.parent||y[V].root.add(tt);for(let kt of[...tt.children])tt.remove(kt),kt.material.dispose();(o[V]||[]).forEach((kt,wt)=>{let Ht=new ze(ye,new Un({color:Th(kt),transparent:!0,opacity:.9,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-4}));Ht.scale.setScalar(1+wt*.32),Ht.position.y=.06+wt*.01,Ht.renderOrder=2,tt.add(Ht)})}}function rt(){for(let V of b){let tt=ce[V];if(!tt||!tt.children.length)continue;let kt=c.position.distanceTo(y[V].root.position);tt.scale.setScalar(Ji.clamp(kt*.016,.9,3.2))}}Pe();function Zt(V,tt){let kt=Math.max(30,Math.min(220,tt)),wt=_.shadow.camera;wt.right!==kt&&(wt.left=-kt,wt.right=kt,wt.top=kt,wt.bottom=-kt,wt.near=1,wt.far=900,wt.updateProjectionMatrix());let Ht=2*kt/_.shadow.mapSize.x,Jt=Math.round(V.x/Ht)*Ht,ae=Math.round(V.z/Ht)*Ht;_.target.position.set(Jt,V.y,ae),_.position.set(Jt+m.x*400,V.y+m.y*400,ae+m.z*400)}let It=["wave","flex","point","stretch","spin","bow"];function Ot(V,tt){let kt=[...V.personality||V.id].reduce((wt,Ht)=>wt+Ht.charCodeAt(0),tt);return It[kt%It.length]}function ee(V,tt={}){N="intro",E.setDim(!0),E.clearBanner(),E.photo(!1),E.results(null),me(),E.market(!1),P=null,gt=!1,g.style.filter="",lt("idle");let kt=tt.perRunnerS??t.introPerRunnerS??4.2,wt=tt.flyoverS??7;return G={t:0,idx:-1,per:kt,fly:wt,onDone:V,waiting:!1,segStart:0,minSeg:2.5,done:!1,group:!1},{flyoverS:wt,perRunnerS:kt,runners:b.slice()}}function Qt(V){let tt=G;if(!tt)return;tt.t+=V;let kt=at;if(tt.idx===-1){!tt.title&&tt.t>.8&&(tt.title=!0,ve(!0));let Se=Math.min(1,tt.t/tt.fly),$t=Eh(Se),pe=p.sample(0),Fe=new $(170,0,-40),Le=2.2-$t*2,Ye=520-$t*470,Te=new $(Fe.x+Math.cos(Le)*Ye,190-$t*170,Fe.z+Math.sin(Le)*Ye),fn=new $(pe.x+pe.tx*22+pe.rx*10,pe.y+9,pe.z+pe.tz*22+pe.rz*10);Te.lerp(fn,$t*$t);let Rn=Fe.clone().setY(15).lerp(new $(pe.x,pe.y+1,pe.z),Math.min(1,$t*1.2));c.position.copy(Te),c.lookAt(Rn),ot(50),Se>=1&&I();return}if(tt.group){let Se=p.sample(0),$t=(tt.t-tt.segStart)/3;if(c.position.set(Se.x+Se.tx*(9+$t*2)+Se.rx*2,Se.y+2.2+$t*.6,Se.z+Se.tz*(9+$t*2)+Se.rz*2),c.lookAt(Se.x,Se.y+1.3,Se.z),ot(46),$t>=1&&!tt.done){tt.done=!0,E.introCard(null);let pe=tt.onDone;G=null,N="idle",pe?.()}return}let wt=b[tt.idx],Ht=kt[wt],Jt=tt.t-tt.segStart,ae=new $(Math.sin(Ht.yaw),0,Math.cos(Ht.yaw)),qe=new $(-ae.z,0,ae.x),Wt=y[wt].height,te=3.2+Wt*.6-Math.min(.6,Jt*.12);c.position.set(Ht.x+ae.x*te+qe.x*.9,Ht.y+Wt*.62,Ht.z+ae.z*te+qe.z*.9),c.lookAt(Ht.x-qe.x*1.25,Ht.y+Wt*.55,Ht.z-qe.z*1.25),ot(40),!tt.waiting&&Jt>=tt.per&&I(),tt.waiting==="released"&&Jt>=tt.minSeg&&I()}function ve(V){let tt=s||{};E.titleCard(V,{title:tt.title||"MARKRUN",kicker:tt.number?`ROUND ${tt.number}`:"LIVE FROM FINSBURY PARK",theme:tt.theme?typeof tt.theme=="string"?tt.theme:tt.theme.label||tt.theme.name||"":""})}function I(){let V=G;V.idx===-1&&ve(!1),V.idx++,V.segStart=V.t;for(let Ht of b)y[Ht].set("idle");if(V.idx>=b.length){V.group=!0;for(let Ht of b)y[Ht].set("pose","point");E.introCard(null),setTimeout(()=>{},0);for(let Ht of b)y[Ht].set("wave");return}let tt=b[V.idx];y[tt].set(Ot(C[tt],V.idx)==="wave"?"wave":"pose",Ot(C[tt],V.idx)),t.introCards!==!1&&E.introCard(C[tt]),V.waiting=!1;let wt=t.onIntroRunner?.(tt,V.idx);wt&&typeof wt.then=="function"&&(V.waiting=!0,wt.then(()=>{G===V&&(V.waiting="released")},()=>{G===V&&(V.waiting="released")}))}function it(V,tt){if(!R)throw new Error("createRaceView: playRace needs a plan (pass opts.plan or call loadPlan(plan) first)");N="race",E.setDim(!1),E.results(null),me(),G=null,E.introCard(null),E.titleCard(!1),E.market(!1),P=null,gt=!1,g.style.filter="",k=-oo,Z=0,yt=0,J=0,ct=!1,Tt=!1,Ut=null,st=!1,pt=1,E.replay(!1),_t.clear(),Y=!!t.skipRaceTitle,E.setDimTop(!1),et={onEvent:V,onDone:tt},lt("idle"),O.reset()}let nt=[[-3,"3"],[-2,"2"],[-1,"1"],[0,"GO!"]];function ft(V){switch(V.type){case"lead_change":return["LEAD CHANGE","","#ff3d8b"];case"overtake":return a.includes(V.by)||a.includes(V.on)?["OVERTAKE","","#2e6fe0"]:null;case"hill":return["THE HILL","","#3aa845"];case"lap":return["LAP 2","","#2e6fe0"];case"final_stretch":return["FINAL STRETCH","","#ff8a1f"];case"diversion":return _t.has("div")?null:(_t.add("div"),["DISTRACTED!","","#b04bff"]);case"finish":return V.place===1&&!R.photoFinish?["WINNER","","#ffb000"]:null;default:return null}}function Mt(V){if(J>0){J-=V,J<=0&&(E.photo(!1),g.style.filter="",S.anchors.finishArch.visible=!0,Gt());return}if(Ut){Ft(V);return}let tt=k;for(pt=ut(k),k+=V*pt,k<-4.2&&!Y&&(Y=!0,ve(!0),E.setDimTop(!0)),k>=-3.6&&Y===!0&&(Y="done",ve(!1),E.setDimTop(!1));yt<nt.length&&k>=nt[yt][0];){let[kt,wt]=nt[yt++];if(E.countdown(wt),et?.onEvent?.({kind:"countdown",n:wt==="GO!"?0:Number(wt),text:wt,broadcastS:kt}),kt===-3)for(let Ht of b)y[Ht].set("ready")}for(;Z<z.length&&k>=z[Z].at;){let kt=z[Z++].evt;try{et?.onEvent?.(kt)}catch(wt){console.error(wt)}if(kt.kind==="event"){let wt=ft(kt);wt&&E.showBanner(...wt)}}if(R.photoFinish&&!ct&&k>=R.firstFinishB){ct=!0,k=R.firstFinishB,J=t.photoFreezeS??1.4;{let[kt,wt]=R.finishOrder;E.photo(!0,`${fr(C[kt])} or ${fr(C[wt])}? Checking the camera...`)}g.style.filter="grayscale(0.55) sepia(0.35) contrast(1.12)",et?.onEvent?.({kind:"photo_finish",broadcastS:k,ids:R.finishOrder.slice(0,2)})}!st&&!Ut&&k>=R.firstFinishB+1.1&&Gt(),!Tt&&k>=R.lastFinishB+3.5&&(Tt=!0,et?.onDone?.())}function ut(V){if(!R||t.finishSlowMo===!1)return 1;let tt=Math.abs(V-R.firstFinishB),kt=tt<1?1:tt<1.6?1-Dt((tt-1)/.6):0;return 1-(1-Vt)*kt}function Dt(V){return V=Math.max(0,Math.min(1,V)),V*V*(3-2*V)}function Gt(){if(st||t.finishReplay===!1){st=!0,bt();return}let V=R.byId[R.finishOrder[0]];Ut={t:0,b0:Math.max(0,li(r.timeMap,Fn(V.progress,4940))),b1:R.firstFinishB+.6,resume:k},E.replay(!0)}function Ft(V){Ut.t+=V,Ut.t>=K&&(Ut=null,st=!0,E.replay(!1),O.reset(!0),bt())}function Q(){let V=Math.min(1,Ut.t/K);return Ut.b0+(Ut.b1-Ut.b0)*(1-Math.pow(1-V,1.7))}function bt(){let V=R.finishOrder[0],tt={kind:"winner_replay_done",winnerId:V,photoFinish:!!R.photoFinish,broadcastS:k};try{et?.onEvent?.(tt)}catch(kt){console.error(kt)}if(t.onWinnerStamp)try{t.onWinnerStamp({winnerId:V,photoFinish:!!R.photoFinish})}catch(kt){console.error(kt)}else E.showBanner("WINNER","","#ffb000")}function At(V){o=V||{},a=Object.keys(o).filter(tt=>(o[tt]||[]).length),E.setBackedBy(o),Pe()}function qt(V,tt=1.2){if(!R)throw new Error("createRaceView: seek in a race needs a plan");V=Math.max(-oo,Math.min(R.lastFinishB+3.5,Number(V)||0)),N="race",G=null,me(),et=et||{},E.setDim(!1),E.introCard(null),E.results(null),E.photo(!1),E.market(!1),E.clearBanner(),E.titleCard(!1),E.setDimTop(!1),g.style.filter="",S.anchors.finishArch.visible=!0,P=null,Y=V>=-3.6?"done":V<-4.2?!1:"done",O.reset();let kt=Math.round(tt*30);for(let wt=kt;wt>=0;wt--){if(k=V-wt/30,k<-3)for(let Ht of b)y[Ht].set("idle");else if(k<0)for(let Ht of b)y[Ht].set("ready");if(wt>0)if(O.update(k,1/30,U),k>=0)Ct(k,1/30);else for(let Ht of b)y[Ht].update(1/30,{})}k=V,Z=z.findIndex(wt=>wt.at>k),Z<0&&(Z=z.length),yt=nt.findIndex(wt=>wt[0]>k),yt<0&&(yt=nt.length),ct=k>=R.firstFinishB,Tt=k>=R.lastFinishB+3.5,J=0,Ut=null,st=k>=R.firstFinishB+1.1,pt=1,E.replay(!1)}function he(V){let tt=G;if(!tt)return;V=Math.max(0,Number(V)||0);let kt=b.length;if(V<tt.fly){tt.t=V;return}ve(!1),tt.title=!0;let wt=Math.min(kt,Math.floor((V-tt.fly)/tt.per));tt.idx=wt-1,tt.t=V,I(),tt.segStart=tt.fly+wt*tt.per}function ue(V){return N==="intro"?he(V):qt(V)}function me(){L&&(L.dispose(),L=null)}function Ie(V,{card:tt}={}){N="podium",E.setDim(!0),E.clearBanner(),G=null,E.titleCard(!1),E.market(!1),P=null,gt=!1,g.style.filter="",E.photo(!1),me();let kt=V?.finishOrder?.length?[...V.finishOrder].sort((wt,Ht)=>wt.place-Ht.place):(R?.finishOrder||b).map((wt,Ht)=>({runnerId:wt,place:Ht+1,officialS:R?.byId[wt].officialS??0,timeText:R?Ha(R.byId[wt].officialS):""}));L=Qu(u,p,S,y,kt,{camera:c,offsetX:(tt??t.podiumCard)!==!1?3.2:0}),(tt??t.podiumCard)!==!1&&E.results(kt.map(wt=>({place:wt.place,nickname:C[wt.runnerId]?.nickname||wt.runnerId,colour:C[wt.runnerId]?.colour.primary||"#888",timeText:wt.timeText||Ha(wt.officialS)})))}let De=performance.now(),We=0,F={frames:0,acc:0,fps:0};function ot(V){Math.abs(c.fov-V)>.01&&(c.fov=V,c.updateProjectionMatrix())}function vt(V,tt=!1){W+=V;let kt=null;gt||(N==="intro"&&Qt(V),N==="race"&&Mt(V));let wt=gt?0:V;if(N==="race"){if(J>0){let Wt=S.anchors.finish;S.anchors.finishArch.visible=!1,c.position.set(Wt.x+Wt.rx*9-Wt.tx*.6,Wt.y+6.4,Wt.z+Wt.rz*9-Wt.tz*.6),c.lookAt(Wt.x-Wt.rx*.6-Wt.tx*.6,Wt.y+.8,Wt.z-Wt.rz*.6-Wt.tz*.6),ot(42),c.updateMatrixWorld();let te=new $(Wt.x+Wt.rx*3,Wt.y+.05,Wt.z+Wt.rz*3).project(c),Se=new $(Wt.x-Wt.rx*3,Wt.y+.05,Wt.z-Wt.rz*3).project(c);E.photoLine([(te.x*.5+.5)*g.clientWidth,(-te.y*.5+.5)*g.clientHeight],[(Se.x*.5+.5)*g.clientWidth,(-Se.y*.5+.5)*g.clientHeight])}else if(Ut){let Wt=S.anchors.finish,te=Q(),Se=R.stateAt(te).byId[R.finishOrder[0]];c.position.set(Wt.x+Wt.tx*30+Wt.rx*2.2,Wt.y+1.1,Wt.z+Wt.tz*30+Wt.rz*2.2),c.lookAt(Se.x,Se.y+1,Se.z),ot(13)}else if(gt&&P!=null){P+=V;let Wt=R.stateAt(Math.max(0,k)),te=Wt.byId[Wt.order[0]],Se=Wt.order.slice(0,3).map(Rn=>Wt.byId[Rn]).filter(Rn=>Math.abs(Rn.m-te.m)<25),$t=new $;for(let Rn of Se)$t.add(new $(Rn.x,Rn.y,Rn.z));$t.divideScalar(Math.max(1,Se.length)),ht||(ht=Math.atan2(c.position.x-$t.x,c.position.z-$t.z));let pe=ht+P*.12,Fe=10+Math.min(25,te.m-Se.at(-1).m)*.4,Le=Math.min(1,P/1.2),Ye=Le*Le*(3-2*Le),Te=$t.x+Math.sin(pe)*Fe,fn=$t.z+Math.cos(pe)*Fe;c.position.set(Te,Math.max($t.y+3+Ye*2,p.heightAt(Te,fn)+2.5),fn),c.lookAt($t.x,$t.y+2.3,$t.z),ot(44)}else O.update(k,wt,U);kt=k>=0?R.stateAt(k):null,Ut&&(kt=R.stateAt(Q()));let Jt=!J&&P==null&&["side","headon","finishcam"].includes(O.shot?.type);S.setOcclusionCorridor(Jt?c.position:null,Jt?O.cam.look:null);let ae=!J&&!Ut&&O.shot?.type==="finishcam"?O.shot.fside:0;if(ae!==H){H=ae;let Wt=S.anchors.finish;x.setMask(ae?(te,Se)=>{let $t=((te-Wt.x)*Wt.rx+(Se-Wt.z)*Wt.rz)*ae,pe=(te-Wt.x)*Wt.tx+(Se-Wt.z)*Wt.tz;return $t>0&&$t<16&&pe>-75&&pe<14&&$t<15*(pe+150)/161+2.5}:null)}if(k<0)for(let Wt of b)y[Wt].update(wt,{});else if(Ut){let Wt=Math.min(1,Ut.t/K);pt=Math.max(.2,(Ut.b1-Ut.b0)/K*1.7*Math.pow(1-Wt,.7)),Ct(Q(),wt)}else Ct(k,J>0?0:wt);let qe=O.shot?.type;Zt(O.cam.look,so.has(qe)?160:70)}else if(N==="podium"&&L){S.setOcclusionCorridor(null),L.update(wt,W);for(let Jt of b)y[Jt].update(wt,{});Zt(L.center,40)}else{for(let Jt of b)y[Jt].update(wt,{});if(N==="idle"){let Jt=p.sample(0),ae=W*.12;c.position.set(Jt.x+Math.sin(ae)*14,Jt.y+4.5,Jt.z+Math.cos(ae)*14),c.lookAt(Jt.x,Jt.y+1.2,Jt.z),ot(45)}Zt(new $(at[b[0]]?.x??0,0,at[b[0]]?.z??0),N==="intro"&&G?.idx===-1?160:40)}if(Lt+=V,tt)return;rt(),S.update(W),v?.update(W);let Ht=b.map(Jt=>y[Jt].root.position);x.update(W,c.position,Ht,N==="podium"?.9:null),E.update(Lt,N==="race"?jt(kt,k>-1&&P==null&&!Ut):jt(null,!1)),Lt=0,d.render(u,c)}let Et=2;function dt(V){if(Rt)return;We=requestAnimationFrame(dt);let tt=Math.max(0,(V-De)/1e3);De=V,F.frames++,F.acc+=tt,F.acc>1&&(F.fps=F.frames/F.acc,F.frames=0,F.acc=0),Xt(Math.min(Et,tt)*B)}function Xt(V){let tt=V;if(tt<=1e-6){vt(0);return}for(;tt>1e-6;){let kt=Math.min(tt,.1);tt-=kt,vt(kt,tt>1e-6)}}t.manualLoop||(We=requestAnimationFrame(dt));function ne(){Rt=!0,cancelAnimationFrame(We),j?.disconnect(),window.removeEventListener("resize",Pt);for(let V in ce)for(let tt of ce[V].children)tt.material.dispose();ye.dispose(),me();for(let V of b)u.remove(y[V].root),y[V].dispose();x.dispose(),v?.dispose(),w.dispose(),S.dispose(),E.dispose(),u.traverse(V=>{V.geometry&&V.geometry.dispose()}),Vu(),Uu(),d.dispose(),d.forceContextLoss?.(),g.remove()}let de={seek(V,tt=1.2){qt(V,tt),gt=!0,vt(0)},introAt(V,tt=1.5){if(ee(()=>{},{}),gt=!1,V<0){G.t=tt,Qt(0),vt(0),gt=!0;return}for(G.t=G.fly,Qt(0);G&&G.idx<V;)G.t=G.segStart+G.per+.01,Qt(0);for(let kt=0;kt<tt*30;kt++){Qt(1/30);for(let wt of b)y[wt].update(1/30,{})}gt=!0,vt(0)},podiumAt(V=3){E.introCard(null),Ie(null);for(let tt=0;tt<V*30;tt++){L.update(1/30,tt/30);for(let kt of b)y[kt].update(1/30,{})}gt=!0,vt(0)},photoAt(){this.seek(R.firstFinishB-.05),gt=!1,ct=!1;for(let V=0;V<3;V++)vt(1/30);gt=!0,vt(0)},render(){vt(0)},unpause(){gt=!1},lookFrom(V,tt,kt,wt,Ht,Jt,ae=45){N="debugcam",c.position.set(V,tt,kt),c.lookAt(wt,Ht,Jt),ot(ae),E.setDim(!0),d.render(u,c)},step(V,tt=!0){vt(V,!tt)},get mode(){return N},get b(){return k},get shots(){return U},get sim(){return R},C:p,get director(){return O},renderer:d,scene:u,camera:c,info:()=>d.info,fps:()=>F.fps};return{playIntro:ee,playRace:it,showPodium:Ie,setPaused(V,{market:tt=!0,marketText:kt}={}){V=!!V,V!==gt&&(gt=V,N==="race"&&J<=0&&t.marketOnPause!==!1&&tt&&(V?(P=0,ht=0,E.market(!0,kt??t.marketText??"Place your halfway bets!"),g.style.filter="saturate(1.2) contrast(1.06)"):(P=null,E.market(!1),g.style.filter="",O.reset(!1))))},setSpeed(V){B=Math.max(.05,Number(V)||1)},seek:ue,loadPlan(V,{backedBy:tt}={}){if(N==="race")throw new Error("createRaceView: loadPlan during a race");tt&&At(tt),X(V)},setBackedBy(V){At(V),R&&N!=="race"&&(U=wh({plan:r,sim:R,backedIds:a,hasDiversion:h,C:p,world:S,funfair:v}))},dispose:ne,hudRoot:E.root,get broadcastTime(){return N==="intro"?G?.t??0:k},get durationS(){return R?oo+R.lastFinishB+3.5:0},preRollS:oo,_debug:de}}function ed(n){let e=Array.from({length:201},(r,o)=>Math.round(o*25/5e3*1500*1e3)/1e3),i=(n?.runners||[]).map(r=>({id:r.id,officialS:1500,progress:e,pacingSource:"intro"})),s=Gh(n?.roundId||"intro",i);return s.events=[],s.commentary=[],s}function nd(n,t,e=1){return Math.round(n*(1+e*(t-1)))}function Dv(n,t=1){return 1+(n-1)*t}var Uv=(n,t)=>{if(t.type==="inplay")return typeof t.odds=="number"?t.odds:t.odds?.win??0;let e=n.runners.find(i=>i.id===t.runnerId)?.odds?.win??0;return id(n,t)?Dv(e,n.underdogSpecial.boost):e};function id(n,t,e=t.playerId){let i=n.underdogSpecial;return!!i&&(t.type==="special"||t.type==="win"&&t.boost===!0)&&(e==null||e===i.playerId)}function Ah(n,t,e){let i=n,s=i.payoutMultiplier??1,r=new Map((e||[]).map((a,l)=>[a,l])),o={};for(let[a,l]of Object.entries(t||{})){let h=0,d=!1;for(let g of l||[])if(g.type!=="prop"){if(g.type==="win"||g.type==="inplay"||g.type==="special"){let u=Uv(i,{...g,playerId:a});id(i,g,a)&&(d&&(u=i.runners.find(c=>c.id===g.runnerId)?.odds?.win??0),d=!0),h+=e?.[0]===g.runnerId?nd(g.stake,u,s)-g.stake:-g.stake}else if(g.type==="h2h"){let u=(i.matchups||[]).find(_=>_.id===g.matchupId);if(!u)continue;let c=u.a===g.pick?u.b:u.a,f=(r.get(g.pick)??99)<(r.get(c)??99);h+=f?nd(g.stake,u.a===g.pick?u.odds.a:u.odds.b,s)-g.stake:-g.stake}}o[a]=h}return o}var Wa={};kh(Wa,{awardLines:()=>Vv,coldOpenLines:()=>Bv,lockLine:()=>zv,rematchLine:()=>$v,stampLine:()=>Hv});var Nv=(n,t=Math.random)=>n[Math.floor(t()*n.length)],Ov=n=>(n||[]).map(t=>typeof t=="string"?t:t?.name).filter(Boolean),Fv=n=>n.length<=1?n[0]||"everyone":`${n.slice(0,-1).join(", ")} and ${n.at(-1)}`,Ga=[];function ts(n,t){let e=n.filter(s=>!Ga.includes(s)),i=Nv(e.length?e:n,t);return Ga.push(i),Ga.length>40&&Ga.shift(),i}var es=(n,t)=>n.replace(/\{(\w+)\}/g,(e,i)=>t[i]!=null?String(t[i]):"");function Bv(n,t){let e=Ov(n),i={all:Fv(e),a:e[0]||"our first player",b:e[1]||e[0]||"our guest"},s=[{speaker:"jeff",text:es(ts(["Good evening, {all}! Welcome to MARKRUN!","Live from the sofa, it's MARKRUN! Hello, {all}!","Ladies and gentlemen, {all}! The parkrun betting spectacular starts now!"],t),i)},{speaker:"pam",text:es(ts(e.length>=2?["{a}, {b}. I've seen your betting. I'm worried.","Evening, {a}. Evening, {b}. Try to read the clues this time.","Hello {a}, hello {b}. Somebody's going home poorer."]:["Evening, {a}. Just you and the bookie tonight.","Hello, {a}. Try not to bankrupt yourself."],t),i)}];return e.length>=2&&(t??Math.random)()<.6&&s.push({speaker:"jeff",text:es(ts(["Real runs, fake money, genuine grudges! Let's go!","Grab a drink, grab your phones, here we go!"],t),i)}),s}function zv(n,t){let e=typeof n=="string"?n:n?.name||"Somebody";return{speaker:(t??Math.random)()<.6?"jeff":"pam",text:es(ts(["{n}'s in!","{n} is locked and loaded!","And {n} has committed!","{n}: no going back now!","{n} has pressed the button. Brave.","Bets in from {n}!"],t),{n:e})}}function Hv(n,t){let{name:e="Somebody",net:i=0}=n||{};return i>0?{speaker:"jeff",text:es(ts(["{N} WINS {x}!","{n} cashes in: plus {x}!","Kerching! {x} to {n}!"],t),{n:e,N:e.toUpperCase(),x:i})}:i<0?{speaker:"pam",text:es(ts(["{n}'s {x} goes up in smoke.","{n} is down {x}. Unlucky.","That's {x} of {n}'s money gone."],t),{n:e,x:Math.abs(i)})}:{speaker:"pam",text:es(ts(["{n} breaks even. Thrilling.","Nothing gained, nothing lost for {n}."],t),{n:e})}}function $v(n,t){let e=(Array.isArray(n)?n:n?.players||[]).filter(o=>o&&o.name);if(e.length<2)return{speaker:"jeff",text:"Same again? The runners are ready when you are!"};let i=[...e].sort((o,a)=>(o.bankroll??0)-(a.bankroll??0)),s=i[0].name,r=i.at(-1).name;return{speaker:"pam",text:es(ts(["{l}, are you going to let {w} get away with that? Rematch?","Rematch? {l} looks like they want one.","{l}, revenge is one more game away.","I believe {l} is demanding a rematch. Loudly."],t),{l:s,w:r})}}function Vv(n,t){return(n||[]).map((e,i)=>({speaker:i%2?"pam":"jeff",text:`${e.title}! ${e.text}`}))}var Ya=(n,...t)=>{try{return typeof Wa[n]=="function"?Wa[n](...t):null}catch{return null}},uo=new URLSearchParams(location.search),xr=Math.max(.25,Number(uo.get("speed"))||1),Ch=uo.get("race")==="2d",Gn=n=>Math.round(n/xr);window.__markrun={events:[],speed:xr};var jn=n=>{window.__markrun.events.push({at:Date.now(),...n}),window.__markrun.events.length>500&&window.__markrun.events.shift()},mr=_e("#stage"),Li=_e("#screen"),gr=_e("#hud-bottom"),yr=_e("#subs"),Gv=_e("#reactions"),ao=_e("#next-hint"),pr=_e("#race-layer"),Me=null,Vn=null,co=uo.has("autostart"),ns=uo.has("mute"),se=Uh(),mi=$h({onLine:jv,onIdle:()=>{se.duck(!1)}});function ud(){let n=Math.min(window.innerWidth/1920,window.innerHeight/1080);mr.style.transform=`translate(-50%, -50%) scale(${n})`,mr.style.transformOrigin="center center",mr.style.left="50%",mr.style.top="50%"}window.addEventListener("resize",ud);ud();var Rh=null,Wv=Promise.all([fetch("/data/course.json").then(n=>n.json()),fetch("/data/park.json").then(n=>n.json()).catch(()=>null)]).then(([n,t])=>(Rh={course:n,park:t},Rh)),qa=uo.get("key");try{qa&&localStorage.setItem("markrun.tvkey",qa)}catch{}var Xv=()=>{try{return qa||localStorage.getItem("markrun.tvkey")}catch{return qa}},Za=Dh({role:"tv",getKey:Xv,onWelcome:n=>{if(n.key)try{localStorage.setItem("markrun.tvkey",n.key)}catch{}_e("#tvauth")?.remove()},onStatus:n=>{_e("#conn").classList.toggle("hidden",n==="open"||n==="connecting")},onState:n=>qv(n),onMessage:n=>{n.t==="react"?Qv(n.playerId,n.emoji):n.t==="refresh"?xd(n.step,n.msg):n.t==="refreshDone"?s1(n.ok,n.msg):n.t==="claimRequest"?i1(n):n.t==="claimClosed"?_e("#tvmodal")?.dataset.req===n.reqId&&Pi():n.t==="error"&&n.code==="tv_auth"?n1(n.msg):n.t==="error"&&ss(n.msg,"red")}}),Sn=n=>Za.send(n);function vr(){if(!(co&&se.ready())){co=!0,se.unlock(),_e("#gesture").classList.add("gone");try{window.speechSynthesis?.getVoices()}catch{}Ja(),Me&&md(Me,!0)}}co&&_e("#gesture").classList.add("gone");_e("#gesture").addEventListener("click",vr);window.addEventListener("pointerdown",()=>{se.ready()||vr()});function Ja(){let n=Me?.settings||{};se.setVolume(n.volume??.8),se.setMuted(ns),se.setMusicEnabled(n.music!==!1),mi.setEnabled(!ns&&n.voice!==!1&&xr<=1.5),mi.setVolume(Math.min(1,(n.volume??.8)+.1)),_e("#btn-mute").textContent=ns?"\u{1F507}":"\u{1F50A}"}_e("#btn-mute").addEventListener("click",n=>{n.stopPropagation(),ns=!ns,Ja()});_e("#btn-fs").addEventListener("click",n=>{n.stopPropagation(),dd()});function dd(){document.fullscreenElement?document.exitFullscreen?.():document.documentElement.requestFullscreen?.().catch(()=>{})}var sd;window.addEventListener("mousemove",()=>{document.body.classList.remove("hide-cursor"),clearTimeout(sd),sd=setTimeout(()=>document.body.classList.add("hide-cursor"),3e3)});window.addEventListener("keydown",n=>{if(n.target.closest?.("input, textarea"))return;if(!co){vr();return}if(e1()){if(n.key==="Escape"){let e=_e("#tvmodal [data-cancel]:not([disabled])");e?e.click():Pi()}else n.key==="Enter"&&_e("#tvmodal [data-ok]")?.click();return}se.ready()||se.unlock();let t=n.key;if(t==="m"||t==="M"){ns=!ns,Ja(),ss(ns?"Muted":"Sound on");return}if(t==="f"||t==="F"){dd();return}if(t==="l"||t==="L"){Me?.phase==="BETTING"&&!Me.revealed&&(Sn({t:"forceLock"}),ss("Locking everyone in!"));return}(t===" "||t==="Enter"||t==="ArrowRight"||t==="n"||t==="N")&&(n.preventDefault(),Ih())});function Ih(){if(Me){if(Me.phase==="LOBBY"&&!Me.players.length){ss("Scan the QR code to join first!","red");return}if(Me.phase==="BETTING"&&!Me.revealed){ss("Waiting for everyone to lock in (press L to force it)");return}Sn({t:"advance",from:Me.phase,stage:Me.phase==="RESULTS"?Me.resultsStage:void 0})}}var rd=new Map;function qv(n){let t=Me;Me=n,Ja();let e=new Map(n.players.map(s=>[s.id,s]));if(t)for(let s of n.players){let r=rd.get(s.id);if(!r)se.play("join"),n.phase==="LOBBY"&&mi.say(`${s.name} has entered the paddock!`,"pam",{priority:1});else if(!r.locked&&s.locked&&n.phase==="BETTING"){se.play("thunk"),se.play("lock");let o=Ya("lockLine",{name:s.name})||{text:Kv(s.name),speaker:"jeff"};mi.say(o.text,o.speaker,{priority:2})}else r.connected&&!s.connected&&setTimeout(()=>{let o=Me?.players.find(a=>a.id===s.id);o&&!o.connected&&ss(`${s.name}'s phone dropped out \u2014 it'll reconnect`,"red")},5e3)}rd=e;let i=Yv(n);if(!Vn||Vn.key!==i)if(!Vn)od(i,n,t);else{let s=Vn;Vn={key:i,pending:!0,destroy:()=>s.destroy?.()},pd(),setTimeout(()=>{Vn.key===i&&Vn.pending&&(Vn=s,od(i,Me,t))},210)}else Vn.pending||Vn.update?.(n,t);Zv(n),Jv(n),md(n)}function Yv(n){let t=n.round?.roundId||"";return n.phase==="BETTING"?`BETTING|${t}|${n.revealed?"reveal":"bet"}`:["INTRO","RACE","RESULTS","SCOREBOARD"].includes(n.phase)?`${n.phase}|${t}`:`${n.phase}|${n.gameNumber}`}var Xa=Xe('<div id="wipe"><i></i><b></b></div>');document.body.appendChild(Xa);function pd(){Xa.classList.remove("go"),Xa.offsetWidth,Xa.classList.add("go"),se.play("wipe")}function od(n,t,e){try{Vn?.destroy?.()}catch(o){console.warn(o)}Li.innerHTML="",mi.clear(),yr.innerHTML="";let i=t.phase;document.body.className=document.body.className.replace(/\bphase-\w+/g,"").trim()+` phase-${i}`,document.body.classList.toggle("revealed",!!t.revealed),document.body.classList.toggle("racing",i==="RACE"||i==="INTRO"&&!!Ge),jn({type:"screen",key:n});let s={LOBBY:t1,INTRO:r1,BETTING:t.revealed?f1:h1,RACE:u1,RESULTS:d1,SCOREBOARD:M1,FINALE:b1}[i];if(Vn=s?s(t,e):{},Vn.key=n,i==="BETTING"&&Ge&&Ka===t.round?.roundId&&vd(Ge)){try{Ge.setPaused(!0)}catch{}document.body.classList.remove("racing")}else i!=="RACE"&&i!=="RESULTS"&&i!=="INTRO"&&lo()}var ad=null;function md(n,t=!1){if(!co)return;let e={LOBBY:"lobby",BETTING:n.revealed?null:"betting",SCOREBOARD:"lobby",RESULTS:null,INTRO:null,RACE:null,FINALE:null}[n.phase];e===ad&&!t||(ad=e,e?se.startMusic(e):se.stopMusic(1.2))}function gd(n){let t=[...n].sort((i,s)=>s.bankroll-i.bankroll),e=new Map;return t.forEach((i,s)=>e.set(i.id,s>0&&i.bankroll===t[s-1].bankroll?e.get(t[s-1].id):s+1)),e}function Zv(n){let t=n.phase==="BETTING"&&!n.revealed;if(gr.classList.toggle("hidden",!t),document.body.classList.toggle("no-hud",!t),!t){gr.innerHTML="";return}let e=gd(n.players),i=n.phase==="RACE"?n.bets||{}:{};gr.innerHTML=n.players.map(s=>`<span class="pill ${s.connected?s.locked?"locked":"":"off"}" data-pid="${s.id}">${rn(s.avatar,40)}<b>${Bt(s.name)}</b><i>${s.connected?s.locked?"\u{1F512} locked":"\u{1F914}":"\u{1F4F5}"}</i></span>`).join("")}function Jv(n){let t={INTRO:"Skip intros \u23ED",RACE:"Skip race \u23ED",RESULTS:"Next \u25B6",SCOREBOARD:n.roundNumber>=n.roundsPerGame?"Final results \u25B6":"Next round \u25B6",FINALE:(()=>{let e=[...n.players].sort((i,s)=>i.bankroll-s.bankroll)[0];return n.players.length>1&&e?`${e.name} demands a REMATCH \u21BB`:"Play again \u21BB"})(),BETTING:n.revealed?"Start race \u25B6":null}[n.phase];if(!t){ao.innerHTML="";return}ao.dataset.label!==t&&(ao.dataset.label=t,ao.innerHTML=`<button class="btn ${n.phase==="RACE"||n.phase==="INTRO"?"ghost small":n.phase==="FINALE"?"red big rematch":"white"}">${t} <span style="opacity:.6;font-size:.7em">SPACE</span></button>`,ao.firstElementChild.addEventListener("click",e=>{e.stopPropagation(),vr(),Ih()}))}function ss(n,t=""){let e=Xe(`<div class="t panel ${t==="red"?"red":"yellow"} anim-pop">${Bt(n)}</div>`),i=_e("#toast");i.innerHTML="",i.appendChild(e),setTimeout(()=>{e.parentNode&&e.remove()},3200)}function jv(n){se.duck(!0);let t=Xe(`<div class="sub"><span class="who ${n.speaker==="pam"?"pam":"jeff"}">${n.speaker==="pam"?"PAM":"JEFF"}</span><span>${Bt(n.text)}</span></div>`);yr.appendChild(t);let e=1;for(;yr.children.length>e;)yr.firstElementChild.remove();let i=Math.max(3e3,n.text.split(/\s+/).length*420+1500);setTimeout(()=>{t.classList.add("out"),setTimeout(()=>t.remove(),450)},i),jn({type:"line",text:n.text,speaker:n.speaker})}var Oe=(n,t="jeff",e=2)=>mi.say(n,t,{priority:e});function Kv(n){let t=[`${n} has locked in. No take-backs!`,`And ${n}'s money is down!`,`${n} has committed. Bold. Possibly foolish.`,`Bets are in from ${n}!`];return t[Math.floor(Math.random()*t.length)]}function Qv(n,t){let e=Me?.players.find(o=>o.id===n),i=gr.querySelector(`[data-pid="${n}"]`),s;if(i&&!gr.classList.contains("hidden")){let o=i.getBoundingClientRect(),a=mr.getBoundingClientRect(),l=a.width/1920;s=(o.left+o.width/2-a.left)/l+(Math.random()-.5)*160}else s=((Me?.players.findIndex(a=>a.id===n)??0)%2===0?70:1790)+(Math.random()-.5)*80;let r=Xe(`<div class="react" style="left:${Math.round(s-60)}px;--rot:${Math.round((Math.random()-.5)*40)}deg"><span class="e">${Bt(t)}</span>${e?rn(e.avatar,46):""}</div>`);Gv.appendChild(r),se.play("pop"),setTimeout(()=>r.remove(),3300)}function gn(n,t){return new Promise(e=>{let i=setTimeout(e,Gn(n));t?.timers.push(i)})}function ja(){return{cancelled:!1,timers:[]}}function ho(n){n.cancelled=!0,n.timers.forEach(t=>{clearTimeout(t),clearInterval(t)})}async function Jn(n,t,e=12e3){let i=Date.now();if(await gn(t,n),!(xr>1.5))for(;!n.cancelled&&mi.busy&&Date.now()-i<e;)await new Promise(s=>setTimeout(s,150))}var Ii=(n,t=120)=>Hh(n,{size:t,idSuffix:Math.random().toString(36).slice(2,6)});function yd(){return`<div class="clouds">${[0,1,2,3,4].map(n=>`<div class="cloud" style="top:${40+n*70}px;width:${180+n%3*70}px;height:${50+n%2*18}px;animation-duration:${70+n*17}s;animation-delay:-${n*19}s"></div>`).join("")}</div>
  <svg class="hills" viewBox="0 0 1920 260" preserveAspectRatio="none"><path d="M0 150 Q 240 40 520 120 T 1040 110 T 1500 90 T 1920 130 V260 H0Z" fill="#2ec27e" stroke="#14183c" stroke-width="6"/><path d="M0 200 Q 300 140 640 190 T 1280 180 T 1920 190 V260 H0Z" fill="#169c5b" stroke="#14183c" stroke-width="6"/></svg>`}var ur=[100,250,500,1e3,2e3,5e3],dr=[0,60,90,120,180];function t1(n){let t=Xe(`<div class="lobby">
    ${yd()}
    <div class="logo"><div class="word outlined">MARK<span class="r">RUN</span></div><br><div class="ribbon"><span>THE FINSBURY PARK FORM GUIDE</span></div></div>
    <div class="tagline">Real parkruns. Real Mark. Fake money. \u{1F377}</div>
    <div class="qr-card panel white"><div class="qr"></div><div class="scan">\u{1F4F1} SCAN TO JOIN</div><div class="url"></div></div>
    <div class="slots"></div>
    <div class="settings panel cream hidden"></div>
    <div class="start-wrap"></div>
  </div>`);Li.appendChild(t),_e(".qr",t).innerHTML=n.qrSvg||"",_e(".url",t).textContent=(n.joinUrl||"").replace(/^https?:\/\//,""),Oe(n.players.length?"Welcome back to MARKRUN!":"Welcome to MARKRUN! Grab your phones and scan the code.","jeff",1);let e=(l,h,d,g)=>`<div class="set" data-k="${h}"><div class="lbl">${l}</div><div class="ctl-row">${g.replace("{val}",`<span class="val">${d}</span>`)}</div></div>`;function i(l){let h=[],d=Math.max(2,l.players.length);for(let f=0;f<d;f++){let _=l.players[f];if(_){let m=_.connected?_.ready?'<span class="tag" style="background:var(--grass);color:#fff">\u2713 READY</span>':'<span class="tag">joined</span>':'<span class="tag" style="background:var(--tomato);color:#fff">\u{1F4F5} offline</span>';h.push(`<div class="slot panel slant ${s.has(_.id)?"":"joined"}" style="background:${Bt(_.avatar.colour)}"><div class="unslant" style="display:flex;align-items:center;gap:24px;width:100%">${rn(_.avatar,92)}<div><div class="sname">${Bt(_.name)}${l.settings.runnerPlayerId===_.id?' <span class="tag markt">\u{1F3C3} THE REAL MARK</span>':""}</div><div class="ssub">${En(_.bankroll)} to gamble${l.settings.runnerPlayerId&&l.settings.runnerPlayerId!==_.id?" \xB7 gets an extra \u{1F525} hot tip":""}</div></div><span class="slot-badge">${m}</span><button class="btn small white kick" data-kick="${_.id}" title="Remove player">\u2715</button></div></div>`)}else h.push(`<div class="slot panel slant empty"><div class="unslant" style="display:flex;align-items:center;gap:24px"><div class="ghost-av">?</div><div><div class="sname">Player ${f+1}</div><div class="ssub">Scan the code to take this seat</div></div></div></div>`)}s=new Set(l.players.map(f=>f.id)),_e(".slots",t).innerHTML=h.join(""),_e(".slots",t).classList.toggle("many",d>2);let g=l.settings,u=Math.round((g.volume??.8)*10);_e(".settings",t).innerHTML=[e("Starting pot","startingBankroll",En(g.startingBankroll),'<button class="btn small white" data-d="-1">\u2212</button>{val}<button class="btn small white" data-d="1">+</button>'),e("Rounds","roundsPerGame",g.roundsPerGame,'<button class="btn small white" data-d="-1">\u2212</button>{val}<button class="btn small white" data-d="1">+</button>'),e("Bet timer","betTimer",g.betTimer?`${g.betTimer}s`:"Off",'<button class="btn small white" data-d="-1">\u2212</button>{val}<button class="btn small white" data-d="1">+</button>'),e("Drinking","drinkingMode","",`<button class="btn small toggle ${g.drinkingMode?"on":"off"}" data-toggle>${g.drinkingMode?"\u{1F37A} ON":"OFF"}</button>`),e("Voice","voice","",`<button class="btn small toggle ${g.voice?"on":"off"}" data-toggle>${g.voice?"\u{1F399}\uFE0F ON":"OFF"}</button>`),e("Music","music","",`<button class="btn small toggle ${g.music?"on":"off"}" data-toggle>${g.music?"\u{1F3B5} ON":"OFF"}</button>`),e("Volume","volume",`${u*10}%`,'<button class="btn small white" data-d="-1">\u2212</button>{val}<button class="btn small white" data-d="1">+</button>')].join("");let c=l.players.length&&l.players.every(f=>f.ready);_e(".start-wrap",t).innerHTML=`<button class="btn green ${l.players.length?"pulse":""}" data-start ${l.players.length?"":"disabled"}>${l.players.length?l.players.length===1?"START SOLO \u25B6":"LET'S RACE \u25B6":"Waiting for players\u2026"}</button>
      <div class="hint">${l.refreshing?"\u23F3 Refreshing historical data\u2026":l.players.length?c?"Everyone is ready!":"Press SPACE \u2014 or everyone taps READY on their phone":"Up to 4 players \xB7 best with 2"}</div>
      <button class="btn small white refresh-btn" data-options>\u2699 Options</button>`,r&&o(l)}let s=new Set(n.players.map(l=>l.id)),r=!1;function o(l){let h=_e("#tvmodal.opts");h||(h=fo('<h2 class="outlined white thin">\u2699 Options</h2><div class="optgrid"></div><div class="row"><button class="btn small white" data-refresh>\u27F3 Refresh Historical Data\u2026</button><span style="flex:1"></span><button class="btn green" data-ok>Done <small>ENTER</small></button></div>'),h.classList.add("opts"),h.addEventListener("click",d=>{let g=d.target.closest("button");if(g){if(g.dataset.ok!==void 0){r=!1,Pi();return}a(g)}})),_e(".optgrid",h).innerHTML=_e(".settings",t).innerHTML}function a(l){if(se.play("tick"),l.dataset.refresh!==void 0)return r=!1,ld();let h=l.closest("[data-k]")?.dataset.k;if(!h)return;let d=Me.settings;if(l.dataset.toggle!==void 0)return Sn({t:"settings",settings:{[h]:!d[h]}});let g=Number(l.dataset.d),u;if(h==="startingBankroll"){let c=ur.indexOf(d[h]);u=ur[Math.max(0,Math.min(ur.length-1,(c<0?2:c)+g))]}else if(h==="betTimer"){let c=dr.indexOf(d[h]);u=dr[Math.max(0,Math.min(dr.length-1,(c<0?0:c)+g))]}else h==="volume"?u=Math.round(Math.max(0,Math.min(1,(d.volume??.8)+g*.1))*10)/10:u=d[h]+g;return Sn({t:"settings",settings:{[h]:u}})}return i(n),t.addEventListener("click",l=>{vr();let h=l.target.closest("button");if(!h)return;if(se.play("tick"),h.dataset.start!==void 0)return Ih();if(h.dataset.refresh!==void 0)return ld();if(h.dataset.options!==void 0)return r=!0,o(Me);if(h.dataset.kick)return Sn({t:"kick",playerId:h.dataset.kick});let d=h.closest("[data-k]")?.dataset.k;if(!d)return;let g=Me.settings;if(h.dataset.toggle!==void 0)return Sn({t:"settings",settings:{[d]:!g[d]}});let u=Number(h.dataset.d),c;if(d==="startingBankroll"){let f=ur.indexOf(g[d]);c=ur[Math.max(0,Math.min(ur.length-1,(f<0?2:f)+u))]}else if(d==="betTimer"){let f=dr.indexOf(g[d]);c=dr[Math.max(0,Math.min(dr.length-1,(f<0?0:f)+u))]}else d==="volume"?c=Math.round(Math.max(0,Math.min(1,(g.volume??.8)+u*.1))*10)/10:c=g[d]+u;Sn({t:"settings",settings:{[d]:c}})}),{update:l=>i(l)}}var e1=()=>!!_e("#tvmodal");function Pi(){_e("#tvmodal")?.remove()}function fo(n){Pi();let t=Xe(`<div id="tvmodal"><div class="tvm panel white anim-pop">${n}</div></div>`);return mr.appendChild(t),t.addEventListener("click",e=>{e.target===t&&Pi()}),t}function n1(n){_e("#tvauth")||document.body.appendChild(Xe(`<div id="tvauth"><div class="panel white" style="padding:30px 40px;max-width:900px;font-size:26px"><h2 style="font-family:var(--font-display);font-weight:400;margin:0 0 10px">\u{1F4FA} Not the TV</h2><p>${Bt(n)}</p></div></div>`))}function i1(n){vr(),se.play("bell");let t=fo(`<h2 class="outlined white thin">\u{1F4F1} New phone for ${Bt(n.name||"a player")}?</h2>
    <p>Someone on a <b>new phone</b> wants to take over <b>${Bt(n.name||"")}</b>'s seat (and see their secret clues).</p>
    <p>Only allow it if ${Bt(n.name||"they")} really did switch phones. Auto-denied in 30 seconds.</p>
    <div class="row"><button class="btn white" data-cancel>Deny <small>ESC</small></button><button class="btn green" data-ok>Allow <small>ENTER</small></button></div>`);t.dataset.req=n.reqId,_e("[data-cancel]",t).onclick=()=>{Sn({t:"claimAnswer",reqId:n.reqId,allow:!1}),Pi()},_e("[data-ok]",t).onclick=()=>{Sn({t:"claimAnswer",reqId:n.reqId,allow:!0}),Pi()}}function ld(){if(Me?.phase!=="LOBBY")return;let n=fo(`<h2 class="outlined white thin">\u27F3 Refresh Historical Data</h2>
    <p><b>This uses the internet.</b> It contacts parkrun, Strava (if set up) and the weather archive to fetch any new runs since the last refresh, then rebuilds the local database.</p>
    <p>It can take a few minutes. The game itself never goes online \u2014 this is the only button that does.</p>
    <div class="row"><button class="btn white" data-cancel>Cancel <small>ESC</small></button><button class="btn green" data-ok>Refresh now <small>ENTER</small></button></div>`);_e("[data-cancel]",n).onclick=Pi,_e("[data-ok]",n).onclick=()=>{Sn({t:"refresh"}),fo('<h2 class="outlined white thin">\u27F3 Refreshing\u2026</h2><div class="rlog"></div><div class="row"><button class="btn white" data-cancel disabled>Working\u2026</button></div>')}}function xd(n,t){let e=_e("#tvmodal .rlog");for(e||(fo('<h2 class="outlined white thin">\u27F3 Refreshing\u2026</h2><div class="rlog"></div><div class="row"><button class="btn white" data-cancel disabled>Working\u2026</button></div>'),e=_e("#tvmodal .rlog")),e.appendChild(Xe(`<div class="rl"><b>${Bt(n)}</b> ${Bt(t)}</div>`));e.children.length>9;)e.firstElementChild.remove()}function s1(n,t){t&&xd("error",t);let e=_e("#tvmodal [data-cancel]");e&&(e.disabled=!1,e.textContent=n?"Done \u2713":"Close",e.onclick=Pi),ss(n?"Historical data refreshed!":"Refresh had problems \u2014 existing data kept",n?"":"red")}var cd=null,Ge=null,is=null,Ka=null,vd=n=>is==="3d"&&typeof n?.loadPlan=="function"&&(typeof n?.setBackedBy=="function"||n?.loadPlan.length>=2);function lo(){if(Ge){try{Ge.dispose()}catch(n){console.warn(n)}Ge=null,is=null,Ka=null,pr.innerHTML="",document.body.classList.remove("racing")}}async function _d(n,{allow2d:t=!0}={}){lo();let e=Rh||await Wv,i={course:e.course,park:e.park,speed:xr,...n};if(Qi?.createRaceView&&!Ch)try{try{Ge=await Qi.createRaceView(pr,i)}catch(s){if(i.plan||!i.round)throw s;pr.innerHTML="",Ge=await Qi.createRaceView(pr,{...i,plan:ed(i.round)})}return Ka=i.round?.roundId||null,is="3d",window.__markrun.raceView=Ge,jn({type:"raceview",kind:"3d"}),Ge}catch(s){console.error("3D race view failed, using 2D fallback",s),jn({type:"raceview-error",msg:String(s?.message||s)}),pr.innerHTML=""}return!t||!n.plan?null:(Ge=Wh(pr,i),is="2d",window.__markrun.raceView=Ge,jn({type:"raceview",kind:"2d"}),Ge)}function hd(n){(n.introLines?.length?n.introLines:[{speaker:"jeff",text:`Welcome to Finsbury Park for round ${n.number}: ${n.title}!`}]).slice(0,2).forEach(e=>Oe(e.text,e.speaker,3))}function r1(n){let t=ja(),e=n.round,i=[...e.runners].sort((f,_)=>f.lane-_.lane),s=Xe(`<div class="intro">${yd()}<div class="tint"></div><div class="stagebox"></div><div class="intro-dots">${i.map(()=>"<i></i>").join("")}</div></div>`);Li.appendChild(s);let r=_e(".stagebox",s),o=(n.bailouts||[]).map(f=>`${Bt(n.players.find(_=>_.id===f.playerId)?.name||"")} got a ${En(f.amount)} bailout from the Bank of Mum &amp; Dad`).join("<br>"),a=`<div class="title-card"><div class="anim-pop"><div class="rn outlined white">ROUND ${e.number} <span style="opacity:.8">of ${n.roundsPerGame}</span></div><div class="rt outlined" style="font-size:${e.title.length>22?104:150}px">${Bt(e.title)}</div><div class="rs">${i.length} runners. All of them Mark. Only one of them is having a good day.</div>${e.theme?.label?`<div class="theme-badge panel slant grape"><div class="unslant"><span class="tk">THEME</span>${Bt(e.theme.label)}</div></div>${e.theme.blurb?`<div class="tblurb">${Bt(e.theme.blurb)}</div>`:""}`:""}${Number(e.payoutMultiplier)>=2?'<div class="double-badge outlined">DOUBLE PAYOUT FINALE \xD72</div>':""}${e.notice?`<div class="bail panel grape" style="color:#fff">\u{1F0CF} ${Bt(e.notice)}</div><br>`:""}${o?`<div class="bail panel yellow">\u{1F4B8} ${o}</div>`:""}</div></div>`,l=f=>`<div class="l3 anim-left" style="--c1:${Bt(f.colour.primary)}"><div class="l3p">${Ii(f,150)}</div><div class="l3t"><b>${Bt(Ph(f))}</b><span>${Bt(f.tagline||"")}</span></div><div class="l3o"><small>ODDS</small><span class="num">${Bt(f.odds?.display||"")}</span></div></div>`;async function h(f){let _=i[f];ai(".intro-dots i",s).forEach((p,S)=>p.classList.toggle("on",S===f)),r.innerHTML=l(_),se.play("whoosh"),Oe(_.intro||`${_.nickname}. ${_.tagline||""}`,f%2?"pam":"jeff",3);let m=yo(_.publicClue,8);m.kicker&&!/^…/.test(m.kicker)&&Oe(`${m.headline} ${m.kicker}`,f%2?"jeff":"pam",2),await Jn(t,4800,6500)}async function d(){t.cancelled||(ai(".intro-dots i",s).forEach(f=>f.classList.remove("on")),r.innerHTML='<div class="bets-open"><div class="anim-pop"><div class="big outlined">BETS ARE OPEN!</div><div class="sub2 outlined white thin">\u{1F4F1} Grab your phones \u2014 your secret clues are waiting \u{1F92B}</div></div></div>',se.play("kaching"),Oe("The book is open! Check your phones for your secret clues.","pam",3),await Jn(t,2500,4e3),t.cancelled||Sn({t:"introDone",roundId:e.roundId}))}let g=Date.now(),u=setInterval(()=>Sn({t:"progress",phase:"INTRO",roundId:e.roundId,value:Date.now()-g}),2e3);t.timers.push(u);async function c(){if(e.number!==1||cd===n.gameNumber)return;cd=n.gameNumber,r.innerHTML=`<div class="cold"><div class="cw outlined">MARK<span>RUN</span></div><div class="cs outlined white thin">${Bt(n.players.map(_=>_.name).join(" vs "))}</div><div class="cp">${n.players.map(_=>rn(_.avatar,110)).join('<span class="vsx outlined">VS</span>')}</div></div>`,se.play("drumroll",{dur:1.4}),setTimeout(()=>{se.play("fanfare"),se.play("crowd",{dur:3,peak:.3})},Gn(1500));let f=Ya("coldOpenLines",n.players.map(_=>({name:_.name})))||[{speaker:"jeff",text:`Good evening, ${n.players.map(_=>_.name).join(" and ")}! Welcome to MARKRUN!`}];await gn(1600,t),f.slice(0,2).forEach(_=>Oe(_.text,_.speaker,3)),await Jn(t,6e3,9e3)}return(async()=>{if(await c(),!t.cancelled){if(!Ch&&Qi?.createRaceView){let f=new Map(i.map((m,p)=>[m.id,p])),_=await _d({round:e,backedBy:{},introCards:!1,onIntroRunner:m=>t.cancelled?void 0:h(f.get(m)??0)},{allow2d:!1}).catch(()=>null);if(_&&!t.cancelled){document.body.classList.add("racing"),s.classList.add("over3d"),s.querySelector(".clouds")?.remove(),s.querySelector(".hills")?.remove(),r.innerHTML=a,se.play("fanfare"),hd(e);let m=!1,p=setTimeout(()=>{m||(m=!0,d())},Gn(15e4));t.timers.push(p);try{_.playIntro(()=>{m||(m=!0,clearTimeout(p),d())})}catch(S){console.error(S),m=!0,d()}return}}if(!t.cancelled){r.innerHTML=a,se.play("fanfare"),hd(e),await Jn(t,4200,6e3);for(let f=0;f<i.length&&!t.cancelled;f++)await h(f),t.cancelled||await gn(700,t);await d()}}})(),{destroy:()=>{ho(t)}}}var Ph=n=>n.nickname.length<=18?n.nickname:rs(n);function o1(n){let{headline:t,kicker:e}=yo(n.publicClue,8);return`<div class="rc panel" data-rid="${n.id}">
    <div class="top stripe" style="--c1:${Bt(n.colour.primary)};--c2:${Bt(a1(n.colour.primary))}"><div class="rp">${Ii(n,170)}</div></div>
    <div class="odds"><span class="num">${Bt(n.odds?.display||"")}</span></div>
    <div class="nick">${Bt(Ph(n))}</div>
    <div class="clue"><b>${Bt(t)}</b>${e?`<small>${Bt(e)}</small>`:""}</div>
  </div>`}function a1(n){let t=parseInt(String(n).replace("#",""),16),e=i=>Math.round(i+(255-i)*.25);return`#${[t>>16&255,t>>8&255,t&255].map(i=>e(i).toString(16).padStart(2,"0")).join("")}`}function l1(n){let t=n?.theme,e=Number(n?.payoutMultiplier)>=2;return`${t?.label?`<div class="theme-badge panel slant grape"><div class="unslant"><span class="tk">THEME</span>${Bt(t.label)}</div></div>`:""}${e?'<div class="double-badge outlined">DOUBLE PAYOUT \xD72</div>':""}`}function c1(n){let t=(n.matchups||[]).map(i=>{let s=yn(n,i.a),r=yn(n,i.b);return!s||!r?"":`<span class="si"><i class="dot" style="background:${Bt(s.colour.primary)}"></i>${Bt(rs(s))} <em>${Bt(i.odds.displayA||`\xD7${i.odds.a}`)}</em> <span class="vs">v</span> <i class="dot" style="background:${Bt(r.colour.primary)}"></i>${Bt(rs(r))} <em>${Bt(i.odds.displayB||`\xD7${i.odds.b}`)}</em></span>`}),e=(n.props||[]).map(i=>`<span class="si prop">\u{1F3A1} ${Bt(i.text)} <em>${Bt(i.odds?.displayYes||"")}</em></span>`);return[...t,...e].filter(Boolean).join('<span class="sep">\xB7</span>')}function h1(n){let t=n.round,e=[...t.runners].sort((u,c)=>u.lane-c.lane),i=Xe(`<div class="betting">
    <div class="bet-head"><div class="h outlined">PLACE YOUR BETS!</div><div class="rt">Round ${t.number}/${n.roundsPerGame} \xB7 ${Bt(t.title)}</div>${l1(t)}<div class="timer num hidden"></div></div>
    <div class="runner-grid n${e.length}">${e.map(u=>o1(u)).join("")}</div>
    <div class="bstrip">${c1(t)}</div>
    ${t.notice?`<div class="notice panel grape">\u{1F0CF} ${Bt(t.notice)}</div>`:""}
  </div>`);Li.appendChild(i),ai(".rc",i).forEach((u,c)=>{u.style.animation=`slide-up .5s ${c*.08}s cubic-bezier(.2,1.3,.4,1) both`});let s=_e(".timer",i),r=null;function o(){if(!Me?.deadline||Me.phase!=="BETTING"||Me.revealed){s.classList.add("hidden");return}let u=Math.max(0,Math.ceil((Me.deadline-Za.serverNow())/1e3));s.classList.remove("hidden"),s.textContent=`${Math.floor(u/60)}:${String(u%60).padStart(2,"0")}`,u<=10&&u!==r&&se.play("tick"),r=u}let a=setInterval(o,250);o();let l=[["jeff","Each of you has one red-hot insider tip on your phone. Find it. Use it."],["pam","Every one of these runners is Mark. The question is: which Mark turned up?"],["jeff","Head-to-heads are a lovely way to lose money slowly."]];Number(t.payoutMultiplier)>=2?Oe("Final round, and every payout is doubled! Fortunes will be made. Mostly lost.","jeff",3):t.theme?.label&&Oe(`Today's theme: ${t.theme.label}. ${t.theme.blurb||""}`,"pam",2);let h=e.map(u=>({r:u,k:yo(u.publicClue,8).kicker})).filter(u=>u.k&&!/^…/.test(u.k)),d=h[Math.floor(Math.random()*h.length)],g=setTimeout(()=>{if(d)Oe(`${rs(d.r)}: ${d.k}`,"pam",1);else{let u=l[Math.floor(Math.random()*l.length)];Oe(u[1],u[0],1)}},Gn(12e3));return{destroy:()=>{clearInterval(a),clearTimeout(g)}}}function f1(n){let t=ja(),e=n.round,i=[...e.runners].sort((l,h)=>l.lane-h.lane),s=(n.revealSeq||[]).filter(l=>l&&l.bet);if(!s.length){let l=(n.betLines||[]).slice();s=n.players.flatMap(h=>(n.bets?.[h.id]||[]).map(d=>({playerId:h.id,bet:d}))).sort((h,d)=>h.bet.stake-d.bet.stake).map(h=>({...h,line:l.shift()||null}))}let r=l=>n.players.find(h=>h.id===l)?.avatar?.colour||"#fff",o=Xe(`<div class="faceoff">
    <div class="rh outlined">THE BETS ARE IN!</div>
    <div class="fo-grid">${i.map(l=>`<div class="fo-card" data-rid="${l.id}"><div class="fo-top" style="background:${Bt(l.colour.primary)}"><div class="rp">${Ii(l,150)}</div></div><b>${Bt(Ph(l))}</b><span class="num">${Bt(l.odds?.display||"")}</span><div class="fo-chips"></div></div>`).join("")}</div>
    <div class="fo-side"></div>
    <div class="fo-legend">${n.players.map(l=>`<span class="lg">${rn(l.avatar,40)}<b>${Bt(l.name)}</b><i data-tot="${l.id}">0pp</i></span>`).join("")}</div>
  </div>`);Li.appendChild(o);let a={};return(async()=>{se.play("drumroll",{dur:1.2/xr+.2}),Oe(s.length?"Right then. The bets, smallest first!":"Nobody has bet a penny. Cowards, the lot of them.","jeff",3),await gn(1300,t);let l=Math.max(1,...s.map(d=>d.bet.stake));for(let d=0;d<s.length&&!t.cancelled;d++){let{playerId:g,bet:u,line:c}=s[d],f=n.players.find(M=>M.id===g),_=go(u),m=d===s.length-1&&s.length>1,p=Xe(`<div class="fchip ${m?"big":""} anim-pop" style="--pc:${Bt(r(g))}">${rn(f?.avatar,34)}<b>${En(u.stake)}</b>${u.type==="h2h"?"<i>\u2694\uFE0F</i>":u.type==="special"||u.boost?"<i>\u{1F680}</i>":""}</div>`),S=_?o.querySelector(`.fo-card[data-rid="${_}"] .fo-chips`):null;S?S.appendChild(p):_e(".fo-side",o).appendChild(Xe(`<div class="fside anim-pop" style="--pc:${Bt(r(g))}">${rn(f?.avatar,34)}<span>\u{1F3A1} ${Bt(mo(e,u))}</span><b>${En(u.stake)}</b></div>`)),_&&o.querySelector(`.fo-card[data-rid="${_}"]`)?.classList.add("backed"),se.play(m?"kaching":"chip",{p:u.stake/l}),a[g]=(a[g]||0)+u.stake;let v=o.querySelector(`[data-tot="${g}"]`);v&&(v.textContent=En(a[g])),c?.text&&Oe(c.text,c.speaker||"jeff",m?3:1),await gn(m?1600:900,t)}if(t.cancelled)return;let h=[];if(n.players.length>=2){let[d,g]=n.players,u=n.bets?.[d.id]||[],c=n.bets?.[g.id]||[];for(let p of u.filter(S=>S.type==="h2h")){let S=c.find(v=>v.type==="h2h"&&v.matchupId===p.matchupId&&v.pick!==p.pick);S&&h.push([p.pick,S.pick])}let f=(p,S)=>p.filter(v=>v.type==="win"||v.type==="special").sort((v,M)=>M.stake-v.stake)[0],_=f(u),m=f(c);if(!h.length&&_&&m&&_.runnerId!==m.runnerId&&_.stake>=.2*d.bankroll&&m.stake>=.2*g.bankroll&&h.push([_.runnerId,m.runnerId]),h.length){for(let S of h[0])o.querySelector(`.fo-card[data-rid="${S}"]`)?.classList.add("clash");o.appendChild(Xe('<div class="clash-stamp"><div class="anim-pop outlined">CLASH!</div></div>')),se.play("sting"),se.play("stamp");let p=s.map(S=>S.line?.text).find(S=>/both|against|clash|opposite|other side/i.test(S||""));Oe(p||`${d.name} and ${g.name} are on opposite sides. Somebody's sleeping on the sofa tonight.`,"pam",3),await gn(2200,t)}}if(await Jn(t,1200,4e3),!t.cancelled){for(let d of Qi?.createRaceView&&!Ch?[]:["3","2","1"]){if(t.cancelled)return;let g=Xe(`<div class="countdown outlined anim-pop">${d}</div>`);o.appendChild(g),se.play("beep"),await gn(700,t),g.remove()}t.cancelled||Sn({t:"revealDone",roundId:e.roundId})}})(),{destroy:()=>ho(t)}}function fd(n){let t=n.market,e=n.round;if(!t)return'<div class="mk-wait outlined white thin">Opening the market\u2026</div>';let i=new Set(n.players.filter(r=>(n.bets?.[r.id]||[]).some(o=>o.type==="inplay")).map(r=>r.id));return`<div class="mk panel white"><div class="mkh"><span class="outlined">HALFWAY MARKET</span><span class="mkt num" data-mkt></span></div>
    <div class="mks">One bet each, on your phone. Prices from the standings right now.</div>
    <div class="mkrows">${(t.standings||[]).map(r=>{let o=yn(e,r.runnerId),a=t.odds?.[r.runnerId];return`<div class="mkrow">${os(r.place)}<span class="rp">${o?Ii(o,64):""}</span><span class="nm">${Bt(o?.nickname||r.runnerId)}</span><span class="gp">${r.place===1?"LEADS":`+${Number(r.gapS).toFixed(1)}s`}</span><span class="od num">${Bt(a?.display||"")}</span></div>`}).join("")}</div>
    <div class="mkp">${n.players.map(r=>`<span class="mkpl ${i.has(r.id)?"in":""}">${rn(r.avatar,44)}${Bt(r.name)} ${i.has(r.id)?"\u2713 IN":"\u2026"}</span>`).join("")}</div></div>`}function u1(n){let t=ja(),e=n.round,i=Xe(`<div class="race-ov"><div class="live panel slant red"><div class="unslant" style="display:flex;gap:14px;align-items:center"><span class="dot"></span>LIVE \xB7 ${Bt(e.title)}</div></div><div class="market-layer"></div><div class="ifnow"></div><div class="stamps"></div></div>`);Li.appendChild(i),document.body.classList.add("racing");let s=_e(".market-layer",i),r=0,o=0,a="idle",l=_e(".ifnow",i),h={},d=null;function g(w){let A=n.racePlan,T=Ni(A.timeMap,Math.max(0,w));return A.runners.map(x=>({id:x.id,d:On(x.progress,T),f:x.officialS,done:T>=x.officialS})).sort((x,y)=>x.done&&y.done?x.f-y.f:y.d-x.d||x.f-y.f).map(x=>x.id)}function u(w){let A=w?.broadcastTime;if(!Number.isFinite(A)||A<3||!Me?.bets)return;let T;try{T=Ah(Me.round,Me.bets,g(A))}catch{return}l.children.length||(l.innerHTML=Me.players.map(x=>`<div class="ifp" data-pid="${x.id}">${rn(x.avatar,40)}<span class="nm">${Bt(x.name)}</span><b class="num">\xB10</b></div>`).join("")+'<div class="ifl">if it ended now</div>');for(let x of Me.players){let y=Math.round(T?.[x.id]??0);if(h[x.id]===y)continue;let b=l.querySelector(`.ifp[data-pid="${x.id}"]`);if(!b)continue;let C=b.querySelector("b"),E=h[x.id];if(h[x.id]=y,E==null){C.textContent=gi(y);continue}Qa(C,E,y,600,L=>gi(L)),b.classList.remove("up","down"),b.offsetWidth,b.classList.add(y>E?"up":"down")}}let c=!1;function f(){if(c||t.cancelled)return;c=!0;let w={};try{w=Ah(Me.round,Me.bets||{},n.racePlan.finishOrder)}catch{}let A=_e(".stamps",i);Me.players.forEach((T,x)=>{let y=Math.round(w[T.id]??0);setTimeout(()=>{if(t.cancelled)return;A.appendChild(Xe(`<div class="stamp ${y>0?"win":y<0?"lose":""}" style="--c:${Bt(T.avatar.colour)}">${rn(T.avatar,70)}<span>${Bt(T.name.toUpperCase())} ${y>0?`WINS ${En(y)}`:y<0?gi(y):"BREAKS EVEN"}</span></div>`)),se.play(y>0?"kaching":y<0?"boo":"stamp");let b=Ya("stampLine",{name:T.name,net:y});b&&Oe(b.text,b.speaker,3)},Gn(350+x*1100))})}let _=!1,m=null,p=null,S=null;async function v(w){a="waiting";try{w.setPaused(!0,{market:!0,marketText:"Bet on your phones \u2014 one bet each!"})}catch{}if(se.play("bell"),se.play("crowd",{dur:2,peak:.2}),mi.clear(),yr.innerHTML="",Oe("Halfway! The market is open. One bet each \u2014 quick!","jeff",3),Sn({t:"marketOpen",roundId:e.roundId}),s.innerHTML=fd(Me),S=setInterval(()=>{let A=s.querySelector("[data-mkt]");if(A&&Me?.market?.closesAt){let T=Math.max(0,Math.ceil((Me.market.closesAt-Za.serverNow())/1e3));T<=10&&T!==A.dataset.last*1&&(A.dataset.last=T,se.play("tick")),A.textContent=`${T}s`}},200),await new Promise(A=>{m=A,setTimeout(A,2e4),t.timers.push(setTimeout(()=>{Me?.market||A()},3500))}),clearInterval(S),a="done",s.innerHTML="",!t.cancelled){Oe("Market closed! Back to the action!","pam",2);try{w.setPaused(!1)}catch{}}}let M=Date.now(),D=setInterval(()=>Sn({t:"raceTime",roundId:e.roundId,b:-1e5+(Date.now()-M)/1e3}),2e3);return t.timers.push(D),(async()=>{let w=null;if(Ge&&Ka===e.roundId&&vd(Ge))try{typeof Ge.setBackedBy=="function"?(Ge.setBackedBy(n.backedBy||{}),Ge.loadPlan(n.racePlan)):Ge.loadPlan(n.racePlan,{backedBy:n.backedBy||{}}),Ge.setPaused(!1),w=Ge,jn({type:"raceview",kind:"3d",reused:!0})}catch(T){console.warn("could not re-use the intro view",T)}if(w||(w=await _d({round:e,plan:n.racePlan,backedBy:n.backedBy||{},onWinnerStamp:()=>f()})),clearInterval(D),t.cancelled)return;if(!w){i.appendChild(Xe('<div class="race-err panel red">Race view failed to load</div>'));return}document.body.classList.add("racing"),is==="3d"&&i.querySelector(".live")?.remove(),is!=="3d"?(se.play("horn"),setTimeout(()=>se.play("crowd",{dur:3,peak:.25}),300),Oe("And they're off!","jeff",3)):se.play("crowd",{dur:4,peak:.2}),jn({type:"race-start",kind:is}),p=setInterval(()=>{let T=w.broadcastTime;Number.isFinite(T)&&Sn({t:"raceTime",roundId:e.roundId,b:T})},1e3),d=setInterval(()=>u(w),500),w.playRace(T=>{if(!(t.cancelled||!T)){if(jn({type:"race-event",e:T.type||"line",text:T.text}),T.kind==="countdown"){se.play(T.n===0?"go":"beep"),T.n===0&&(se.play("horn"),se.play("crowd",{dur:3,peak:.28}));return}if(T.kind==="photo_finish"){se.play("stamp"),se.play("heartbeat",{beats:5}),Oe("It's a photo finish! Hold your breath!","pam",3);return}if(T.kind==="winner_replay_done"){f();return}if(T.text&&(T.kind==="commentary"||!T.type)){a!=="waiting"&&mi.say(T.text,T.speaker||"jeff",{priority:T.priority||2});return}switch(T.type){case"overtake":Date.now()-r>1500&&(r=Date.now(),se.play("whoosh"));break;case"lead_change":se.play("whoosh"),se.play("crowd",{dur:2,peak:.18});break;case"breakaway":se.play("crowd",{dur:2.5,peak:.2});break;case"lap":a==="idle"&&Me?.marketAvailable?(jn({type:"market"}),v(w)):se.play("bell");break;case"final_stretch":se.play("crowd",{dur:6,peak:.4}),Me?.settings?.music!==!1&&se.startMusic("final");break;case"finish":o++,o===1&&(se.stopMusic(.6),se.play("fanfare"),se.play("crowd",{dur:4,peak:.45}));break;default:break}}},async()=>{t.cancelled||(jn({type:"race-done"}),c||(f(),await gn(400+Me.players.length*1100,t)),await gn(2500,t),t.cancelled||Sn({t:"raceDone",roundId:e.roundId}))});let A=Number(n.resumeB)||0;if(A>2)try{typeof w.seek=="function"?w.seek(A):w._debug?.seek&&(w._debug.seek(A),w.setPaused(!1)),jn({type:"race-resume",b:A}),ss("Back on air! Resuming the race\u2026")}catch(T){console.warn("resume failed",T)}})(),{update(w){if(a==="waiting"){if(w.market&&!w.market.open){m?.();return}if(w.market&&!_){_=!0;let A=w.market.standings?.find(b=>b.place===1)||w.market.standings?.[0],T=w.market.standings?.find(b=>b.place===2),x=yn(w.round,A?.runnerId),y=yn(w.round,T?.runnerId);x&&Oe(`${x.nickname} leads at halfway and is now ${w.market.odds?.[A.runnerId]?.display||"odds-on"}.${y?` ${y.nickname}, ${Number(T.gapS).toFixed(1)} seconds back, is ${w.market.odds?.[T.runnerId]?.display||""}.`:""}`,"jeff",3)}s.innerHTML=fd(w)}},destroy:()=>{ho(t),clearInterval(p),clearInterval(S),clearInterval(d),m?.(),se.stopMusic(.8)}}}function d1(n){let t=null,e=-1,i=Xe('<div class="results"></div>');Li.appendChild(i);let s=n.round,r=n.results;function o(m,p){return p.players.filter(S=>(p.bets?.[S.id]||[]).some(v=>go(v)===m)).map(S=>rn(S.avatar,50))}let a=(m,p="")=>`<div class="res-head"><div class="h outlined">${m}</div>${p?`<div class="sh">${p}</div>`:""}</div>`,l=m=>{t.cancelled||Sn({t:"stageDone",stage:m})};async function h(m){let p=t,S=r.finishOrder.map(D=>{let w=yn(s,D.runnerId);return`<div class="orow panel slant ${D.place===1?"first":""}" style="${D.place===1?"":`background:${Bt(w?.colour?.primary||"#2a62e0")}`}"><div class="unslant" style="display:flex;align-items:center;gap:26px;width:100%">
        ${os(D.place)}<div class="rp">${w?Ii(w,112):""}</div>
        <div class="nm ${D.place===1?"":"outlined white thin"}">${Bt(w?.nickname||D.runnerId)}${r.favouriteId===D.runnerId?' <span class="fav">FAV</span>':""}<small>${Bt(w?.tagline||"")}</small></div>
        <div class="bk">${o(D.runnerId,m).join("")}</div>
        <div class="tm"><span class="num">${Bt(D.timeText||Oh(D.officialS))}</span>${D.place>1&&D.gapS!=null?`<span class="gap">+${Math.round(D.gapS)}s</span>`:""}</div></div></div>`});i.innerHTML=a("THE RESULT","Official times, as recorded by the volunteers \u{1F4CB}")+`<div class="order">${S.join("")}</div>`;let v=ai(".orow",i);for(let D=v.length-1;D>=0;D--){if(p.cancelled)return;v[D].classList.add("show"),D===0?(se.play("fanfare"),_r(document.body,{count:90})):se.play("pop"),await gn(D===1?1600:800,p)}(r.commentary||[]).slice(0,2).forEach(D=>Oe(D.text,D.speaker,3)),await Jn(p,4e3,7e3),l(0)}async function d(){let m=t,p=r.finishOrder.map(A=>A.runnerId),S=new Map((r.reveal||[]).map(A=>[A.runnerId,A]));i.innerHTML=a("WHO WERE THEY REALLY?","Every runner was a real Mark, on a real Saturday \u{1F575}\uFE0F \u2014 details on your phones")+`<div class="reveal-grid">${p.map((A,T)=>{let x=yn(s,A),y=S.get(A)||{},b=r.finishOrder[T];return`<div class="rv" data-i="${T}">
        <div class="face front" style="background:${Bt(x?.colour?.primary)}"><div><div class="rp">${x?Ii(x,220):""}</div><div class="q outlined">?</div></div></div>
        <div class="face back"><div class="bh" style="background:${Bt(x?.colour?.primary)}"><div class="rp">${x?Ii(x,74):""}</div><div class="n">${Bt(x?.nickname||A)}</div></div>
          <div class="date">${Bt(y.dateText||y.date||y.headline||"")}</div>
          <div class="time num">${Bt(b?.timeText||"")}</div>
          ${(()=>{let C=(y.funFacts||[]).filter(Boolean),E=!y.stravaTitle||/^(morning|lunch|afternoon|evening|night)\s+(run|jog)$/i.test(String(y.stravaTitle).trim())||/^(run|parkrun)$/i.test(String(y.stravaTitle).trim()),L=E?C[0]?`<div class="strava fact"><span class="k">DID YOU KNOW?</span>${Bt(C[0])}</div>`:"":`<div class="strava"><span class="k">STRAVA TITLE</span>\u201C${Bt(y.stravaTitle)}\u201D</div>`,R=y.punchline||C[E?1:0];return L+(R?`<div class="ff">${Bt(R)}</div>`:"")})()}
          ${y.wasPB||y.pbKind?`<div class="pb">${y.pbKind==="finsbury"?"COURSE PB!":"PB! \u{1F3C5}"}</div>`:""}
          <div class="place">${os(b?.place||T+1)}</div>
        </div></div>`}).join("")}</div>`;let v=ai(".rv",i);await gn(900,m);for(let A=v.length-1;A>=0;A--){if(m.cancelled)return;v[A].classList.add("flip");let T=S.get(p[A]),x=yn(s,p[A]);se.play(A===0?"fanfare":"reveal"),A===v.length-1&&v.length>1&&Oe(`And in last place, ${x?.nickname}: ${T?.dateText||""}`,"pam",2),A===0&&(v[0].classList.add("winner-big"),Oe(`The winner, ${x?.nickname}: ${T?.dateText||""}, ${r.finishOrder[0]?.timeText||""}.`,"jeff",3)),await gn(A===0?1800:2200,m)}let M=S.get(p[0])||{},D=!M.stravaTitle||/^(morning|lunch|afternoon|evening|night)\s+(run|jog)$/i.test(String(M.stravaTitle).trim()),w=M.punchline||(D?"":`\u201C${M.stravaTitle}\u201D`);await Jn(m,900,5e3),w&&!m.cancelled&&(i.appendChild(Xe(`<div class="punch"><div class="anim-pop">${Bt(w)}</div></div>`)),se.play("stamp"),Oe(w.replace(/[“”]/g,""),"pam",3)),await Jn(m,3e3,6e3),l(1)}async function g(m){let p=t,S=r.clueReview||[],v=S.filter(w=>w.highlight).slice(0,3);if(v.length||(v=S.filter(w=>w.verdict!=="neutral").slice(0,3)),!v.length){i.innerHTML="",await gn(300,p),l(2);return}let M=new Map((m.clues||[]).map(w=>[w.id,w]));i.innerHTML=a("THE CLUES THAT MATTERED","Useful\u2026 or a red herring? \u{1F41F}")+`<div class="clue-list big">${v.map(w=>{let A=yn(s,w.runnerId),T=M.get(w.clueId),x=m.players.find(C=>C.id===w.owner),y=w.owner==="public"?`\u{1F4FA} PUBLIC CLUE${T?.label?` \xB7 ${Bt(T.label.toUpperCase())}`:""}`:`${T?.tier==="hot"?"\u{1F525}":"\u{1F92B}"} ${Bt(x?.name||"Secret")}'S ${T?.tier==="hot"?"HOT TIP":"SECRET CLUE"}`,b={useful:"USEFUL \u2713",red_herring:"RED HERRING \u{1F41F}",neutral:"MEH"}[w.verdict]||Bt(w.verdict);return`<div class="cl panel"><div class="rp">${A?Ii(A,100):""}</div><div class="txt"><div class="own">${y} \xB7 ${Bt(A?.nickname||"")}</div>${Bt(w.text||T?.text||"")}${w.quip?`<div class="quip">${Bt(w.quip)}</div>`:""}</div><div class="verdict ${Bt(w.verdict)}">${b}</div></div>`}).join("")}</div>`;let D=ai(".cl",i);for(let w=0;w<D.length;w++){if(p.cancelled)return;D[w].classList.add("show"),setTimeout(()=>{se.play("sting"),se.play("stamp")},Gn(250)),v[w].quip&&Oe(v[w].quip,w%2?"jeff":"pam",2),await Jn(p,2500,5e3)}await Jn(p,2e3,4e3),l(2)}async function u(m){let p=t,S=m.settings.drinkingMode;i.innerHTML=a("PAY DAY","The bookie settles up \u{1F4B0}")+`<div class="payouts">${m.players.map(w=>{let A=r.payouts?.[w.id]||{bets:[],net:0,bankroll:w.bankroll},T=(A.bets||[]).map(x=>{let y=Bh(x);return`<div class="pl ${y.kind==="won"?"won":y.kind==="push"?"push":"lost"}"><span class="mark">${y.kind==="won"?"\u2705":y.kind==="push"?"\u21A9\uFE0F":"\u274C"}</span><div class="lb">${Bt(mo(s,x))}<small>staked ${En(x.stake)} \xB7 ${Bt(Fh(s,x))}${y.kind==="won"?` \xB7 returned ${En(x.returned)}`:""}</small></div><div class="r">${y.text}</div></div>`}).join("")||'<div class="pl show"><div class="lb">No bets placed. Sensible. Boring.</div></div>';return`<div class="pay panel slant" data-pid="${w.id}" style="background:${Bt(w.avatar.colour)}"><div class="unslant" style="display:flex;flex-direction:column;height:100%">
        <div class="who">${rn(w.avatar,90)}${Bt(w.name)}</div>
        <div class="lines">${T}</div>
        <div class="net num outlined ${A.net>0?"green":A.net<0?"red":"white"}" data-net="${A.net}" style="visibility:hidden">${gi(A.net)}</div>
        ${S?c(A.net,w.id):""}
      </div></div>`}).join("")}</div>${p1(m,!0)}`,await gn(600,p);for(let w of ai(".pl",i)){if(p.cancelled)return;w.classList.add("show"),se.play(w.classList.contains("won")?"kaching":"pop"),await gn(700,p)}await gn(400,p);let v=null,M=null;for(let w of m.players){let A=r.payouts?.[w.id];if(!A)continue;let T=i.querySelector(`.pay[data-pid="${w.id}"]`),x=T.querySelector(".net"),y=null;x.style.visibility="visible",x.classList.add("anim-pop"),(!v||A.net>v.net)&&(v={...A,p:w,panel:T}),(!M||A.net<M.net)&&(M={...A,p:w,panel:T})}if(m1(i,m),v&&v.net>0&&se.play("coins",{n:Math.min(30,8+Math.round(v.net/40))}),await gn(1900,p),p.cancelled)return;let D=m.settings.drinkingMode?(r.drinks||[]).filter(w=>!w.playerId):[];D.length&&i.appendChild(Xe(`<div class="drink-all panel yellow anim-pop">\u{1F37B} ${D.map(w=>Bt(w.text)).join(" \xB7 ")}</div>`)),v&&v.net>0&&(se.play("kaching"),_r(document.body,{count:140}),v.panel.classList.add("big-win"),v.panel.appendChild(Xe('<div class="mood">\u{1F911}</div>')),Oe(g1(v.p.name,v.net),"jeff",3)),M&&M.net<0&&(setTimeout(()=>se.play("sadtrombone"),Gn(900)),M.panel.classList.add("big-loss"),M.panel.appendChild(Xe('<div class="raincloud">\u{1F327}\uFE0F</div>')),Oe(y1(M.p.name,M.net),"pam",3)),!v?.net&&!M?.net&&Oe("Nobody won, nobody lost. The bookie is furious.","pam",2),await Jn(p,5e3,8e3),l(3)}function c(m,p){if(Array.isArray(r.drinks))return r.drinks.filter(v=>v.playerId===p).map(v=>`<div class="drink panel yellow">\u{1F37A} ${Bt(v.text)}</div>`).join("");if(m<0){let S=Math.min(5,Math.max(1,Math.ceil(-m/100)));return`<div class="drink panel yellow">\u{1F37A} Take ${S} sip${S>1?"s":""}!</div>`}if(m>0){let S=Math.min(5,Math.max(1,Math.ceil(m/150)));return`<div class="drink panel yellow">\u{1F449} Hand out ${S} sip${S>1?"s":""}</div>`}return'<div class="drink panel yellow">\u{1F964} Water break</div>'}async function f(m){let p=t,S=r.awards||[];if(!S.length&&!r.archetype?.label){await gn(200,p),l(4);return}i.innerHTML=a("ROUND AWARDS","\u{1F3C6}")+`<div class="awards">${r.archetype?.label?`<div class="arch panel yellow anim-pop"><div class="al display">${Bt(r.archetype.label)}</div><div class="ab">${Bt(r.archetype.blurb||"")}</div></div>`:""}${S.map(v=>{let M=m.players.find(D=>D.id===v.playerId);return`<div class="award panel slant ${M?"":"yellow"}" style="${M?`background:${Bt(M.avatar.colour)}`:""}"><div class="unslant" style="display:flex;align-items:center;gap:28px"><span class="trophy">\u{1F3C6}</span>${M?rn(M.avatar,84):""}<div><div class="at outlined white thin">${Bt(v.title)}</div><div class="ax" style="color:${M?"#fff":"var(--ink)"}">${Bt(v.text||"")}</div></div></div></div>`}).join("")}</div>`;for(let v of ai(".award",i)){if(p.cancelled)return;v.classList.add("show"),se.play("fanfare"),await gn(1500,p)}S[0]&&Oe(`${S[0].title}! ${S[0].text||""}`,"jeff",2),await Jn(p,4500,7e3),l(4)}function _(m){if(m.resultsStage===e)return;t&&ho(t),t=ja();let p=e===-1;e=m.resultsStage,mi.clear(),yr.innerHTML="",p||pd();let S=m.resultStages[m.resultsStage];if(jn({type:"results-stage",stage:S}),S!=="order"&&Ge&&lo(),S==="order"&&Ge&&is==="3d")try{Ge.showPodium?.(r,{card:!1})}catch(v){console.warn(v)}else Ge&&S==="order"&&lo();document.body.classList.toggle("racing",!!Ge),({order:h,reveal:d,clues:g,payouts:u,awards:f}[S]||(async()=>l(m.resultsStage)))(m).catch(v=>console.error(v))}return r&&_(n),{update:m=>{m.results&&_(m)},destroy:()=>{t&&ho(t),lo()}}}function p1(n,t){let e=n.results,i=n.players.map(r=>{let o=e?.payouts?.[r.id],a=o?.bankroll??r.bankroll;return{p:r,before:Math.max(0,a-(o?.net||0)),after:Math.max(0,a)}}),s=i.reduce((r,o)=>r+(t?o.before:o.after),0)||1;return`<div class="tug">${i.map(r=>`<div class="seg" data-pid="${r.p.id}" data-after="${r.after}" style="flex-grow:${Math.max(1e-4,(t?r.before:r.after)/s)};background:${Bt(r.p.avatar.colour)}">${rn(r.p.avatar,56)}<b class="num" data-from="${r.before}">${En(t?r.before:r.after)}</b></div>`).join("")}</div>`}function m1(n,t){let e=ai(".tug .seg",n),i=e.reduce((s,r)=>s+Number(r.dataset.after),0)||1;e.forEach(s=>{s.style.flexGrow=String(Math.max(1e-4,Number(s.dataset.after)/i));let r=s.querySelector("b");Qa(r,Number(r.dataset.from),Number(s.dataset.after),Gn(1600),o=>En(o))})}function g1(n,t){let e=[`${n} cleans up! Up ${Ui(t)}. Insufferable for the rest of the evening.`,`Kerching! ${n} is ${Ui(t)} richer and won't let anyone forget it.`,`${n} read that race like a book.`];return e[Math.floor(Math.random()*e.length)]}function y1(n,t){let e=[`Oh dear. ${n} is down ${Ui(-t)}. The bank of Mark is not sympathetic.`,`${n} backed the wrong Mark. It happens to the best of us. Mostly to ${n}.`,`That's ${Ui(-t)} gone, ${n}. Thoughts and prayers.`];return e[Math.floor(Math.random()*e.length)]}function x1(n,{compact:t=!1}={}){let e=gd(n.players),i=n.history.at(-1);return[...n.players].sort((s,r)=>r.bankroll-s.bankroll).map(s=>{let r=e.get(s.id),o=i?.nets?.[s.id]??0;return`<div class="srow panel slant ${r===1&&!t?"lead":""}" style="${r===1&&!t?"":`background:${Bt(s.avatar.colour)}`}"><div class="unslant" style="display:flex;align-items:center;gap:26px;width:100%">
      ${os(r)}${rn(s.avatar,t?70:96)}<div class="nm">${Bt(s.name)}</div>
      ${t?"":`<span class="dl ${o>0?"up":o<0?"down":"flat"}">${gi(o)}</span>`}
      <div class="bk num">${En(s.bankroll)}</div>
      ${!t&&s.ready?'<span class="tag" style="background:var(--grass);color:#fff">\u2713 READY</span>':""}
    </div></div>`}).join("")}function v1(n){let t=n.history,e=n.settings.startingBankroll,i=n.players.map(_=>({p:_,pts:[e,...t.map(m=>m.bankrolls?.[_.id]??e)]})),s=Math.max(2,(t.length||0)+1),r=Math.max(e*1.2,...i.flatMap(_=>_.pts)),o=540,a=420,l=36,h=_=>l+_*(o-l*2)/(s-1),d=_=>a-l-_/r*(a-l*2),g=[0,.5,1].map(_=>`<line x1="${l}" x2="${o-l}" y1="${d(r*_)}" y2="${d(r*_)}" stroke="#14183c22" stroke-width="2"/>`).join(""),u=`<line x1="${l}" x2="${o-l}" y1="${d(e)}" y2="${d(e)}" stroke="#14183c55" stroke-width="2" stroke-dasharray="8 8"/>`,c=i.map(({p:_,pts:m})=>`<polyline fill="none" stroke="#14183c" stroke-width="12" stroke-linejoin="round" stroke-linecap="round" points="${m.map((p,S)=>`${h(S)},${d(p)}`).join(" ")}"/><polyline fill="none" stroke="${Bt(_.avatar.colour)}" stroke-width="6" stroke-linejoin="round" stroke-linecap="round" points="${m.map((p,S)=>`${h(S)},${d(p)}`).join(" ")}"/>${m.map((p,S)=>`<circle cx="${h(S)}" cy="${d(p)}" r="8" fill="${Bt(_.avatar.colour)}" stroke="#14183c" stroke-width="4"/>`).join("")}`).join(""),f=Array.from({length:s},(_,m)=>`<text x="${h(m)}" y="${a-6}" text-anchor="middle" font-family="Lilita One" font-size="20" fill="#14183c">${m===0?"Start":`R${m}`}</text>`).join("");return`<svg viewBox="0 0 ${o} ${a}" width="100%" height="440">${g}${u}${c}${f}</svg>`}function _1(n,t){let e=n.results;if(!e?.finishOrder?.length)return"";let i=yn(n.round,e.finishOrder[0].runnerId),s=n.players.map(o=>{let a=e.payouts?.[o.id],l=(a?.bets||[]).filter(h=>h.won).sort((h,d)=>d.returned-h.returned)[0];return`<div class="rcp">${rn(o.avatar,54)}<span class="rn">${Bt(o.name)}</span><span class="rx">${l?`\u2705 ${Bt(mo(n.round,l))}`:(a?.bets||[]).length?"\u274C nothing came in":"\u{1F648} no bets"}</span><span class="rnet ${a?.net>0?"up":a?.net<0?"down":""}">${gi(a?.net||0)}</span></div>`}).join(""),r=(e.awards||[]).slice(0,2).map(o=>`<span class="raw">\u{1F3C6} ${Bt(o.title)}</span>`).join("");return`<div class="recap panel white ${t?"narrow":""}"><div class="rch"><span class="rp">${i?Ii(i,64):""}</span><span>Last race: <b>${Bt(i?.nickname||"")}</b> won${e.archetype?.label?` \xB7 ${Bt(e.archetype.label)}`:""}</span>${r}</div>${s}</div>`}function M1(n){let t=Xe('<div class="score"></div>');Li.appendChild(t);let e=null;function i(r){let a=r.roundNumber>=r.roundsPerGame?"\u{1F3C1} That was the final round! Champion next\u2026":r.roundNumber===r.roundsPerGame-1?"Up next: THE FINAL ROUND \u{1F62C}":`Up next: Round ${r.roundNumber+1} of ${r.roundsPerGame}`,l=r.history.length>=2;t.innerHTML=`<div class="res-head"><div class="h outlined">STANDINGS</div><div class="sh">After round ${r.roundNumber} of ${r.roundsPerGame}</div></div>
      <div class="standings ${l?"":"solo"}">${x1(r)}</div>
      ${l?`<div class="chart panel white"><div class="ct">The money, round by round</div>${v1(r)}</div>`:""}
      ${_1(r,l)}
      <div class="upnext panel yellow">${a}<span class="cd"></span></div>`}i(n);let s=[...n.players].sort((r,o)=>o.bankroll-r.bankroll);if(s.length>=2){let r=s[0].bankroll-s[1].bankroll;Oe(r===0?"It's dead level at the top!":`${s[0].name} leads by ${Ui(r)}.`,"jeff",2)}else s[0]&&Oe(`${s[0].name} is on ${Ui(s[0].bankroll)}.`,"jeff",2);return e=setInterval(()=>{let r=t.querySelector(".cd");if(!(!r||!Me))if(Me.deadline&&Me.phase==="SCOREBOARD"){let o=Math.max(0,Math.ceil((Me.deadline-Za.serverNow())/1e3));r.textContent=` \u2014 starting in ${o}\u2026`}else r.textContent=Me.players.length?" \u2014 tap READY on your phones":""},300),{update:i,destroy:()=>clearInterval(e)}}function b1(n){let t=[...n.players].sort((f,_)=>_.bankroll-f.bankroll),e=t[0],i=t.length>1&&t[1].bankroll===e?.bankroll,s=(n.history||[]).flatMap(f=>(f.awards||[]).filter(_=>_.text).map(_=>({title:_.title,text:`${_.text} (round ${f.round})`,playerId:_.playerId}))).slice(0,3),r=[...(n.superlatives||[]).filter(f=>f&&f.title&&f.text),...s].slice(0,7),o=Xe(`<div class="finale"><div class="rays"></div><div class="fconf"></div>
    <div class="champ">${e?`<div class="h outlined">${i?"IT'S A DRAW!":"CHAMPION!"}</div>
      <div class="who"><div class="crown">\u{1F451}</div>${rn(e.avatar,200)}<div class="nm outlined white">${Bt(i?t.filter(f=>f.bankroll===e.bankroll).map(f=>f.name).join(" & "):e.name)}</div><div class="bk num">${En(e.bankroll)}</div></div>`:'<div class="h outlined">GAME OVER</div>'}
      <div class="others">${t.slice(1).map((f,_)=>`<div class="srow panel slant" style="background:${Bt(f.avatar.colour)}"><div class="unslant" style="display:flex;align-items:center;gap:20px">${os(_+2)}${rn(f.avatar,64)}<div class="nm">${Bt(f.name)}</div><div class="bk num">${En(f.bankroll)}</div></div></div>`).join("")}</div>
    </div>
    <div class="reel">${r.length?'<div class="reel-h outlined white thin">THE NIGHT IN AWARDS</div><div class="reel-card"></div><div class="reel-dots"></div>':""}</div>
  </div>`);Li.appendChild(o);let a=_e(".fconf",o);se.play("drumroll",{dur:1.6}),setTimeout(()=>{se.play("fanfare"),se.play("crowd",{dur:5,peak:.45}),_r(a,{count:200,duration:4500,contained:!0,zIndex:0})},Gn(1700));let l=setInterval(()=>_r(a,{count:50,duration:3500,contained:!0,zIndex:0}),Gn(7e3));e&&Oe(i?"We have a dead heat! Nobody wins, which is very British.":`Ladies and gentlemen, your MARKRUN champion: ${e.name}, with ${Ui(e.bankroll)}!`,"jeff",3);let h=0,d=null,g=_e(".reel-card",o);function u(){if(!g||!r.length)return;let f=r[h%r.length],_=n.players.find(m=>m.id===f.playerId);g.innerHTML=`<div class="rc2 panel ${_?"":"yellow"} anim-pop" style="${_?`background:${Bt(_.avatar.colour)}`:""}"><div class="tro">\u{1F3C6}</div>${_?rn(_.avatar,84):""}<div class="t outlined ${_?"white":""} thin">${Bt(f.title)}</div><div class="x">${Bt(f.text||"")}</div></div>`,_e(".reel-dots",o).innerHTML=r.map((m,p)=>`<i class="${p===h%r.length?"on":""}"></i>`).join(""),se.play("reveal"),h<r.length&&Oe(`${f.title}! ${f.text||""}`,h%2?"pam":"jeff",2),h++}let c=setTimeout(()=>{u(),d=setInterval(u,Gn(6500))},Gn(6500));return setTimeout(()=>{let f=Ya("rematchLine",n.players.map(_=>({name:_.name,bankroll:_.bankroll})));Oe(f?.text||"Press space, or tap ready on your phones, to go again.",f?.speaker||"pam",2)},Gn(6500*(Math.min(r.length,7)+1))),{destroy:()=>{clearInterval(l),clearInterval(d),clearTimeout(c)}}}
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
