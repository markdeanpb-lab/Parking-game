// Round themes made visible: season / weather / time of day from round.public.theme.visual (falls back to theme.key).
// Sky, light, fog and colour grade; frost + breath puffs (winter), blossom (spring), sun + heat shimmer (summer),
// leaves (autumn), rain + puddles + umbrellas (rain), flapping bunting + blown leaves (wind), fog.
// Cheap: one instanced particle draw call around the camera, a few breath sprites, one instanced puddle mesh.
import * as THREE from 'three';
import { canvasTexture } from './toon.js';
import { mulberry } from './world.js';
import { PATH_W } from './course.js';

const KEY_VISUAL = {
  winter: { season: 'winter', weather: 'frost' }, heat: { season: 'summer', weather: 'sun' }, windy: { season: 'autumn', weather: 'wind' },
  funfair: { season: 'summer', weather: 'clear' }, taper: { season: 'autumn', weather: 'clear' }, block: { season: 'spring', weather: 'clear' },
  rusty: { season: 'autumn', weather: 'fog' }, wildcard: { season: 'spring', weather: 'clear' },
  band_fast: { season: 'summer', weather: 'clear' }, band_mid: { season: 'spring', weather: 'clear' }, band_slow: { season: 'autumn', weather: 'clear' },
};
const SEASONS = new Set(['winter', 'spring', 'summer', 'autumn']);
const WEATHERS = new Set(['clear', 'rain', 'wind', 'fog', 'frost', 'sun']);
/** { season, weather, time } for a round theme (visual wins; then the theme key; then a bright spring morning) */
export function themeVisual(theme) {
  const v = (theme && typeof theme === 'object' && theme.visual) || {};
  const k = KEY_VISUAL[typeof theme === 'string' ? theme : theme?.key] || {};
  const season = SEASONS.has(v.season) ? v.season : k.season || 'spring';
  let weather = WEATHERS.has(v.weather) ? v.weather : k.weather || 'clear';
  if (weather === 'frost' && season !== 'winter' && season !== 'autumn') weather = 'clear';
  return { season, weather, time: v.time || 'morning' };
}
export function crowdStyleFor(vis) {
  if (vis.weather === 'rain') return 'rain';
  if (vis.weather === 'fog') return 'fog';
  if (vis.weather === 'wind') return 'wind';
  if (vis.season === 'winter' || vis.weather === 'frost') return 'cold';
  if (vis.weather === 'sun' || vis.season === 'summer') return 'sun';
  if (vis.season === 'autumn') return 'autumn';
  return 'default';
}

// look per season, then weather overrides
function palette(vis) {
  const P = {
    sky: [0x2f8cff, 0x8fd3ff, 0xe9f8ff], fog: [0xcdeeff, 700, 3200], hemi: [0xdff0ff, 0x8fc070, 1.45], sun: [0xfff3dd, 2.3], sunDir: [-0.45, 0.82, 0.38],
    grass: [1, 1, 1], frost: 0, wet: 0, litter: 0, crowns: null, tuft: 0x4fbf38, far: [0xc9d6a0, 0xd0d5b5], hills: null, cloud: [0xffffff, 0x6a88b0, 0.35],
    particles: null, breath: false, puddles: false, sunDisc: false, heat: false, wind: 0.08, path: 0xffffff, cloudScale: 1,
  };
  switch (vis.season) {
    case 'winter':
      Object.assign(P, { sky: [0x5d9ee8, 0xbcdcf4, 0xf2f8ff], fog: [0xe2eef8, 380, 2400], hemi: [0xe6f0ff, 0x8aa0b0, 1.5], sun: [0xffe7c4, 1.75], sunDir: [-0.7, 0.42, 0.45],
        grass: [0.86, 0.95, 0.9], frost: 0.62, crowns: [0x2f7f52, 0x3a8a5c, 0x2a6e4a, 0xdfeef2, 0xc8dde6], tuft: 0x9fc9b4, far: [0xdfe8ea, 0xe3ebee], breath: true, cloud: [0xffffff, 0x8aa3c0, 0.45] });
      break;
    case 'summer':
      Object.assign(P, { sky: [0x1a78ff, 0x6cc4ff, 0xfff1d6], fog: [0xfff0d8, 800, 3600], hemi: [0xfff4dc, 0x9ac060, 1.5], sun: [0xffe9b8, 2.75], sunDir: [-0.35, 0.9, 0.3],
        grass: [1.06, 1.0, 0.72], crowns: [0x2fa83c, 0x3cb44b, 0x52c241, 0x6fcb3a, 0x2c9a44], tuft: 0x8cc23a, sunDisc: true, heat: true });
      break;
    case 'autumn':
      Object.assign(P, { sky: [0x3f86d6, 0x9fd0ee, 0xfbead2], fog: [0xf3e2c8, 520, 2800], hemi: [0xfff0dc, 0x9a8a50, 1.4], sun: [0xffd9a0, 2.1], sunDir: [-0.65, 0.5, 0.42],
        grass: [1.05, 0.93, 0.62], litter: 0.75, crowns: [0xe86a1f, 0xf2a127, 0xd8452b, 0xe9c23a, 0x7aa83a, 0xc4561f], tuft: 0xa8a83a, far: [0xd8cfa0, 0xdcd3ac],
        particles: { kind: 2, n: 380, vel: [0.6, -1.1, 0.3], sway: 0.9, size: 0.34, cols: [0xe86a1f, 0xf2a127, 0xd8452b, 0xe9c23a] } });
      break;
    default: // spring
      Object.assign(P, { crowns: [0x3cb44b, 0x4cc552, 0x63c94a, 0x7fd14a, 0xffb6d5, 0xffd1e4, 0xfff0f6],
        particles: { kind: 1, n: 260, vel: [0.4, -0.7, 0.2], sway: 0.7, size: 0.2, cols: [0xffc2dc, 0xffe3ee, 0xffffff, 0xff9fc8] } });
  }
  switch (vis.weather) {
    case 'rain':
      Object.assign(P, { sky: [0x6f7f95, 0x9eabbb, 0xc9d0d8], fog: [0xb4bec9, 140, 1300], hemi: [0xd6dee8, 0x6d8a6a, 1.55], sun: [0xe8eef8, 0.85], wet: 1, puddles: true, path: 0xb8c2d8,
        cloud: [0xd9dee6, 0x55606e, 0.45], cloudScale: 1.6, particles: { kind: 0, n: 1800, vel: [0.6, -15, 0.3], sway: 0, size: 0.04, cols: [0xdfeaff] } });
      P.grass = P.grass.map((v) => v * 0.92);
      break;
    case 'fog':
      Object.assign(P, { sky: [0xc9d3dc, 0xdfe5ea, 0xeef1f3], fog: [0xe4e9ed, 22, 230], hemi: [0xf0f4f8, 0x8a9a88, 1.6], sun: [0xfff6e8, 1.1], cloudScale: 0.001 });
      if (vis.season === 'winter' || vis.season === 'autumn') P.breath = true;
      break;
    case 'frost':
      Object.assign(P, { frost: Math.max(P.frost, 0.72), breath: true, sky: [0x5d9ee8, 0xc3e0f6, 0xf6fbff] });
      break;
    case 'wind':
      Object.assign(P, { wind: 1, cloudScale: 1.2, particles: { kind: 2, n: 340, vel: [7, -0.6, 2.5], sway: 1.4, size: 0.3, cols: vis.season === 'spring' ? [0x7fd14a, 0xa8d84a] : [0xe86a1f, 0xf2a127, 0xd8452b, 0xe9c23a, 0x9cc04a] } });
      break;
    case 'sun':
      Object.assign(P, { sunDisc: true, heat: vis.season === 'summer' || vis.season === 'spring', sun: [0xfff0c8, Math.max(P.sun[1], 2.6)] });
      break;
  }
  return P;
}

export function buildWeather({ scene, world, hemi, sun, sunDir, C, visual }) {
  const vis = visual || themeVisual(null);
  const P = palette(vis);
  const T = world.theme;
  const disposables = [];
  const R = mulberry(4242);
  const col = (h) => new THREE.Color(h);

  // ---- sky, fog, light ----
  T.skyMat.uniforms.top.value.set(P.sky[0]); T.skyMat.uniforms.mid.value.set(P.sky[1]); T.skyMat.uniforms.bot.value.set(P.sky[2]);
  scene.fog.color.set(P.fog[0]); scene.fog.near = P.fog[1]; scene.fog.far = P.fog[2];
  hemi.color.set(P.hemi[0]); hemi.groundColor.set(P.hemi[1]); hemi.intensity = P.hemi[2];
  sun.color.set(P.sun[0]); sun.intensity = P.sun[1];
  sunDir.set(...P.sunDir).normalize();
  if (vis.weather === 'rain' || vis.weather === 'fog') sun.shadow.radius = 6;
  T.cloudMat.color.set(P.cloud[0]); T.cloudMat.emissive.set(P.cloud[1]); T.cloudMat.emissiveIntensity = P.cloud[2];
  if (T.cloudMesh) T.cloudMesh.scale.set(1, P.cloudScale < 0.01 ? 0.001 : 1, 1), T.cloudMesh.visible = P.cloudScale > 0.01;
  // ---- ground + plants ----
  T.groundU.uGrassTint.value.setRGB(...P.grass); T.groundU.uFrost.value = P.frost; T.groundU.uWet.value = P.wet; T.groundU.uLitter.value = P.litter;
  T.tuftMat.color.set(P.tuft);
  T.farMats.forEach((m, i) => m.color.set(P.far[i] ?? P.far[0]));
  if (T.pathMat) T.pathMat.color.set(P.path);
  if (P.crowns) for (const im of T.crowns) { for (let i = 0; i < im.count; i++) im.setColorAt(i, col(P.crowns[Math.floor(R() * P.crowns.length)])); im.instanceColor.needsUpdate = true; }
  if (vis.season === 'winter' || vis.season === 'autumn') for (const im of T.flowers) im.visible = vis.season !== 'winter';
  T.windU.value = P.wind;

  // ---- sun disc (bright sunny mornings) ----
  let sunSprite = null;
  if (P.sunDisc) {
    const tex = canvasTexture(256, 256, (g, w, h) => {
      g.translate(w / 2, h / 2);
      g.fillStyle = 'rgba(255,230,120,0.35)'; for (let i = 0; i < 12; i++) { g.rotate(Math.PI / 6); g.beginPath(); g.moveTo(-14, 60); g.lineTo(0, 124); g.lineTo(14, 60); g.fill(); }
      g.beginPath(); g.arc(0, 0, 58, 0, 7); g.fillStyle = '#ffe14d'; g.fill(); g.lineWidth = 8; g.strokeStyle = '#ffb21f'; g.stroke();
    });
    disposables.push(tex);
    sunSprite = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, fog: false, depthWrite: false, transparent: true }));
    sunSprite.scale.setScalar(520); sunSprite.renderOrder = -9; scene.add(sunSprite);
  }

  // ---- particles around the camera (rain streaks / petals / leaves / heat squiggles) ----
  const systems = [];
  function particles(cfg) {
    const n = cfg.n;
    const geo = new THREE.InstancedBufferGeometry(); const base = new THREE.PlaneGeometry(1, 1);
    geo.index = base.index; geo.setAttribute('position', base.getAttribute('position')); geo.setAttribute('uv', base.getAttribute('uv'));
    const seed = new Float32Array(n * 4); for (let i = 0; i < n * 4; i++) seed[i] = R();
    geo.setAttribute('aSeed', new THREE.InstancedBufferAttribute(seed, 4)); geo.instanceCount = n;
    const cols = (cfg.cols || [0xffffff]).map(col); while (cols.length < 4) cols.push(cols[cols.length % Math.max(1, cfg.cols?.length || 1)]);
    const uni = {
      uTime: { value: 0 }, uCenter: { value: new THREE.Vector3() }, uBox: { value: new THREE.Vector3(...(cfg.box || [44, 26, 44])) }, uVel: { value: new THREE.Vector3(...cfg.vel) },
      uSize: { value: cfg.size }, uSway: { value: cfg.sway || 0 }, uKind: { value: cfg.kind }, uC0: { value: cols[0] }, uC1: { value: cols[1] }, uC2: { value: cols[2] }, uC3: { value: cols[3] }, uCam: { value: new THREE.Vector3() },
    };
    const mat = new THREE.ShaderMaterial({
      uniforms: uni, transparent: true, depthWrite: false, fog: false,
      vertexShader: /* glsl */`
        uniform float uTime, uSize, uSway, uKind; uniform vec3 uCenter, uBox, uVel, uCam;
        attribute vec4 aSeed; varying vec2 vUv; varying float vA, vC, vK;
        void main() {
          vec3 p = aSeed.xyz * uBox + uVel * uTime * (0.75 + 0.5 * aSeed.w);
          p.x += sin(uTime * 1.3 + aSeed.w * 31.0) * uSway; p.z += cos(uTime * 1.1 + aSeed.w * 17.0) * uSway;
          vec3 lo = uCenter - uBox * 0.5; p = lo + mod(p - lo, uBox);
          vec4 mv = viewMatrix * vec4(p, 1.0);
          float s = uSize * (0.7 + 0.6 * aSeed.w);
          vec2 off = position.xy;
          if (uKind < 0.5) { off *= vec2(s, s * 12.0); }                       // rain: long thin streak
          else if (uKind > 2.5) { off *= vec2(s * 0.5, s * 1.4); }             // heat squiggle
          else { float a = uTime * (1.5 + 3.0 * aSeed.y) + aSeed.x * 6.28; off = mat2(cos(a), -sin(a), sin(a), cos(a)) * (off * vec2(s, s * 0.62)); }
          mv.xy += off;
          gl_Position = projectionMatrix * mv;
          vUv = uv; vC = aSeed.y; vK = uKind;
          vec3 rel = (p - uCenter) / (uBox * 0.5);
          float edge = 1.0 - smoothstep(0.75, 1.0, max(abs(rel.x), max(abs(rel.y), abs(rel.z))));
          vA = edge * smoothstep(1.5, 4.0, -mv.z);
        }`,
      fragmentShader: /* glsl */`
        uniform vec3 uC0, uC1, uC2, uC3; uniform float uTime; varying vec2 vUv; varying float vA, vC, vK;
        void main() {
          vec2 q = vUv - 0.5; vec3 c = vC < 0.25 ? uC0 : vC < 0.5 ? uC1 : vC < 0.75 ? uC2 : uC3; float a;
          if (vK < 0.5) { a = (1.0 - smoothstep(0.15, 0.5, abs(q.x))) * 0.32 * (1.0 - smoothstep(0.3, 0.5, abs(q.y))); }
          else if (vK > 2.5) { float x = q.x - 0.22 * sin(vUv.y * 13.0 + uTime * 5.0 + vC * 9.0); a = (1.0 - smoothstep(0.05, 0.13, abs(x))) * sin(vUv.y * 3.1416) * 0.2; c = vec3(1.0, 0.98, 0.9); }
          else { float r = length(q * vec2(1.0, 1.0 + 0.4 * step(1.5, vK))); if (r > 0.5) discard; a = 1.0; if (r > 0.38) c *= 0.55; }
          if (a * vA < 0.02) discard;
          gl_FragColor = vec4(c, a * vA);
          #include <colorspace_fragment>
        }`,
    });
    const mesh = new THREE.Mesh(geo, mat); mesh.frustumCulled = false; mesh.renderOrder = 5; scene.add(mesh);
    disposables.push(geo, mat, base);
    systems.push({ mesh, uni, cfg });
  }
  if (P.particles) particles(P.particles);
  if (P.heat) particles({ kind: 3, n: 60, vel: [0, 0.7, 0], sway: 0.2, size: 0.55, box: [30, 2.2, 30], cols: [0xffffff], heat: true });

  // ---- puddles (rain) ----
  if (P.puddles) {
    const tex = canvasTexture(128, 128, (g, w, h) => {
      g.translate(w / 2, h / 2); g.beginPath(); g.ellipse(0, 0, 58, 40, 0, 0, 7); g.fillStyle = '#7f95b8'; g.fill(); g.lineWidth = 6; g.strokeStyle = 'rgba(40,50,80,0.55)'; g.stroke();
      g.strokeStyle = 'rgba(255,255,255,0.75)'; g.lineWidth = 5; g.lineCap = 'round'; g.beginPath(); g.moveTo(-34, -10); g.lineTo(-6, -22); g.moveTo(8, 8); g.lineTo(30, -2); g.stroke();
      g.strokeStyle = 'rgba(255,255,255,0.35)'; g.lineWidth = 3; g.beginPath(); g.ellipse(14, 12, 14, 8, 0, 0, 7); g.stroke();
    });
    disposables.push(tex);
    const geo = new THREE.PlaneGeometry(1, 1); geo.rotateX(-Math.PI / 2);
    const list = [];
    const { ribbonSamples } = world.anchors;
    for (let i = 0; i < 420; i++) {
      const s = ribbonSamples[Math.floor(R() * ribbonSamples.length)];
      const onPath = R() < 0.55; const a = R() * 6.28, d = onPath ? R() * (PATH_W / 2 - 0.4) : PATH_W / 2 + 1 + R() * 14;
      const x = s[0] + Math.cos(a) * d, z = s[1] + Math.sin(a) * d;
      if (!onPath && (!world.inPark(x, z) || world.blocked(x, z, 0.5))) continue;
      list.push({ x, z, y: (onPath ? C.heightAt(s[0], s[1]) + 0.2 : C.heightAt(x, z) + 0.05), ry: R() * 6.28, sx: 1.2 + R() * 2.2, sz: 0.9 + R() * 1.4 });
    }
    const im = new THREE.InstancedMesh(geo, new THREE.MeshBasicMaterial({ map: tex, transparent: true, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -3 }), list.length);
    const d = new THREE.Object3D();
    list.forEach((t, i) => { d.position.set(t.x, t.y, t.z); d.rotation.set(0, t.ry, 0); d.scale.set(t.sx, 1, t.sz); d.updateMatrix(); im.setMatrixAt(i, d.matrix); });
    im.computeBoundingSphere(); im.renderOrder = 1; scene.add(im); disposables.push(geo, im.material); systems.push({ mesh: im, static: true });
  }

  // ---- breath puffs (cold mornings): a few sprites per runner, in the runner's frame ----
  const puffs = [];
  let puffTex = null;
  if (P.breath) {
    puffTex = canvasTexture(64, 64, (g, w, h) => { g.beginPath(); g.arc(32, 32, 26, 0, 7); g.fillStyle = 'rgba(255,255,255,0.95)'; g.fill(); g.lineWidth = 3; g.strokeStyle = 'rgba(150,170,200,0.6)'; g.stroke(); g.beginPath(); g.arc(24, 24, 9, 0, 7); g.fillStyle = '#fff'; g.fill(); });
    disposables.push(puffTex);
  }
  function puffFor(runner) {
    let list = puffs.find((p) => p.r === runner);
    if (!list) {
      list = { r: runner, t: R() * 0.5, sprites: [] };
      for (let i = 0; i < 4; i++) { const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: puffTex, transparent: true, depthWrite: false })); sp.visible = false; sp.userData.age = 9; scene.add(sp); list.sprites.push(sp); disposables.push(sp.material); }
      puffs.push(list);
    }
    return list;
  }

  const fwd = new THREE.Vector3(), tmp = new THREE.Vector3();
  function update(t, dt, camera, look, runners = [], simOnly = false) {
    if (simOnly) { breathe(dt, runners); return; }
    if (sunSprite) sunSprite.position.copy(camera.position).addScaledVector(sunDir, 3000);
    for (const s of systems) {
      if (s.static) continue;
      s.uni.uTime.value = t;
      s.uni.uCam.value.copy(camera.position);
      // centre the volume between the camera and what it looks at (long lenses see far, not wide)
      camera.getWorldDirection(fwd);
      const dist = look ? Math.min(60, camera.position.distanceTo(look)) : 20;
      if (s.cfg.heat) { if (look) s.uni.uCenter.value.set(look.x, look.y - 0.2, look.z).addScaledVector(fwd, 12); }
      else s.uni.uCenter.value.copy(camera.position).addScaledVector(fwd, Math.max(14, dist * 0.75));
    }
    breathe(dt, runners);
  }
  function breathe(dt, runners) {
    if (P.breath) for (const r of runners) {
      if (!r.root.visible) continue;
      const L = puffFor(r); L.t -= dt;
      if (L.t <= 0) { L.t = 0.55 + R() * 0.25; const sp = L.sprites.find((x) => x.userData.age > 1.1); if (sp) { sp.userData.age = 0; sp.visible = true; } }
      r.root.getWorldDirection(fwd);
      for (const sp of L.sprites) {
        const a = (sp.userData.age += dt); if (a > 1.1) { sp.visible = false; continue; }
        tmp.copy(r.root.position).addScaledVector(fwd, 0.45 - a * 0.5); tmp.y += r.height - 0.55 + a * 0.25;
        sp.position.copy(tmp); sp.scale.setScalar(0.22 + a * 0.45); sp.material.opacity = 0.8 * (1 - a / 1.1);
      }
    }
  }
  function dispose() {
    for (const s of systems) scene.remove(s.mesh);
    if (sunSprite) scene.remove(sunSprite);
    for (const L of puffs) for (const sp of L.sprites) scene.remove(sp);
    for (const d of disposables) d.dispose?.();
  }
  return { vis, update, dispose, palette: P };
}
