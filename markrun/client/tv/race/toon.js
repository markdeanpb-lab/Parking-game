// Toon materials + inverted-hull outlines (screen-space width, shared by everything in the race view).
import * as THREE from 'three';

let _grad = null;
export function gradientMap() {
  if (_grad) return _grad;
  const steps = [118, 172, 228, 255];
  const data = new Uint8Array(steps.length * 4);
  steps.forEach((v, i) => data.set([v, v, v, 255], i * 4));
  _grad = new THREE.DataTexture(data, steps.length, 1, THREE.RGBAFormat);
  _grad.minFilter = _grad.magFilter = THREE.NearestFilter;
  _grad.generateMipmaps = false;
  _grad.needsUpdate = true;
  return _grad;
}

const matCache = new Map();
export function toon(color, opts = {}) {
  const key = typeof color === 'number' || typeof color === 'string' ? `${color}|${JSON.stringify(opts)}` : null;
  if (key && !opts.map && matCache.has(key)) return matCache.get(key);
  const m = new THREE.MeshToonMaterial({ color: new THREE.Color(color ?? 0xffffff), gradientMap: gradientMap(), ...opts });
  if (key && !opts.map) matCache.set(key, m);
  return m;
}
export function disposeMaterialCache() { for (const m of matCache.values()) m.dispose(); matCache.clear(); _outlineMats.forEach((m) => m.dispose()); _outlineMats.clear(); }

// ---- outlines ----
export const outlineUniforms = { uRes: { value: new THREE.Vector2(1920, 1080) } };
const _outlineMats = new Map();
export function outlineMaterial(widthPx = 3, color = 0x1a1420, refDist = 14) {
  const key = `${widthPx}|${color}|${refDist}`;
  if (_outlineMats.has(key)) return _outlineMats.get(key);
  const m = new THREE.ShaderMaterial({
    uniforms: { ...THREE.UniformsUtils.clone(THREE.UniformsLib.fog), uRes: outlineUniforms.uRes, uWidth: { value: widthPx }, uRef: { value: refDist }, uColor: { value: new THREE.Color(color) } },
    vertexShader: /* glsl */`
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
      }`,
    fragmentShader: /* glsl */`
      uniform vec3 uColor;
      #include <fog_pars_fragment>
      void main() { gl_FragColor = vec4(uColor, 1.0);
        #include <fog_fragment>
      }`,
    side: THREE.BackSide,
    fog: true,
  });
  _outlineMats.set(key, m);
  return m;
}

// Average normals over coincident positions -> 'onormal' attribute (keeps hard-edged meshes' hulls closed).
export function addOutlineNormals(geo) {
  if (geo.getAttribute('onormal')) return geo;
  if (!geo.getAttribute('normal')) geo.computeVertexNormals();
  const pos = geo.getAttribute('position'), nor = geo.getAttribute('normal');
  const map = new Map();
  const keyOf = (i) => `${Math.round(pos.getX(i) * 1000)},${Math.round(pos.getY(i) * 1000)},${Math.round(pos.getZ(i) * 1000)}`;
  const acc = [];
  for (let i = 0; i < pos.count; i++) {
    const k = keyOf(i);
    let a = map.get(k); if (!a) { a = [0, 0, 0]; map.set(k, a); }
    a[0] += nor.getX(i); a[1] += nor.getY(i); a[2] += nor.getZ(i);
    acc.push(a);
  }
  const on = new Float32Array(pos.count * 3);
  for (let i = 0; i < pos.count; i++) {
    const a = acc[i]; const l = Math.hypot(a[0], a[1], a[2]) || 1;
    on[i * 3] = a[0] / l; on[i * 3 + 1] = a[1] / l; on[i * 3 + 2] = a[2] / l;
  }
  geo.setAttribute('onormal', new THREE.BufferAttribute(on, 3));
  return geo;
}

// Attach an outline hull as a child (shares geometry; for InstancedMesh shares the instance matrices).
export function outline(mesh, widthPx = 3, color, refDist) {
  addOutlineNormals(mesh.geometry);
  const mat = outlineMaterial(widthPx, color, refDist);
  let o;
  if (mesh.isInstancedMesh) {
    o = new THREE.InstancedMesh(mesh.geometry, mat, mesh.count);
    o.instanceMatrix = mesh.instanceMatrix;
    o.count = mesh.count;
    // share culling bounds with the parent (computed by the caller when it wants instance culling)
    if (mesh.frustumCulled && mesh.boundingSphere) { o.boundingSphere = mesh.boundingSphere; o.frustumCulled = true; }
    else { o.frustumCulled = false; mesh.frustumCulled = false; }
    mesh.userData.outline = o;
  } else {
    o = new THREE.Mesh(mesh.geometry, mat);
    o.frustumCulled = mesh.frustumCulled;
  }
  o.castShadow = false; o.receiveShadow = false;
  o.userData.isOutline = true;
  o.renderOrder = mesh.renderOrder;
  mesh.add(o);
  return o;
}

export function mesh(geo, mat, { cast = true, receive = true, ol = 0, olColor, olRef } = {}) {
  const m = new THREE.Mesh(geo, mat);
  m.castShadow = cast; m.receiveShadow = receive;
  if (ol) outline(m, ol, olColor, olRef);
  return m;
}

export function canvasTexture(w, h, draw, { repeat = false, srgb = true, aniso = 8 } = {}) {
  const c = document.createElement('canvas'); c.width = w; c.height = h;
  const g = c.getContext('2d');
  draw(g, w, h);
  const t = new THREE.CanvasTexture(c);
  if (srgb) t.colorSpace = THREE.SRGBColorSpace;
  if (repeat) t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.anisotropy = aniso;
  return t;
}
