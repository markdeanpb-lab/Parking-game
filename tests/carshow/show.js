// Vehicle showroom for close-up review of src/carmodels.js. Built + shot by tests/carshow/shoot.mjs.
import * as THREE from 'three';
import { createCarMesh, parkedCarGeometry, syncCarMesh, carMaterial } from '../../src/carmodels.js';
import { CAR_TYPES } from '../../src/cartypes.js';

const renderer = new THREE.WebGLRenderer({ antialias: true, preserveDrawingBuffer: true });
renderer.setSize(innerWidth, innerHeight); renderer.shadowMap.enabled = true; renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.toneMappingExposure = 1.05;
document.body.appendChild(renderer.domElement);
const scene = new THREE.Scene(); scene.background = new THREE.Color(0xcfdbe4);
scene.add(new THREE.HemisphereLight(0xd6e8ff, 0x9a9a84, 1.7));
const sun = new THREE.DirectionalLight(0xfff0d6, 2.3); sun.position.set(30, 50, 20); sun.castShadow = true;
sun.shadow.mapSize.set(2048, 2048); Object.assign(sun.shadow.camera, { left: -30, right: 30, top: 30, bottom: -30 }); scene.add(sun);
const ground = new THREE.Mesh(new THREE.PlaneGeometry(200, 200), new THREE.MeshStandardMaterial({ color: 0x55585e, roughness: 0.95 }));
ground.rotation.x = -Math.PI / 2; ground.receiveShadow = true; scene.add(ground);
const camera = new THREE.PerspectiveCamera(40, innerWidth / innerHeight, 0.1, 500);
const types = Object.keys(CAR_TYPES);
const COLS = { hatch: 0xffc928, mini: 0xd8332f, saloon: 0x1c2f55, estate: 0x2f6b4f, suv: 0xe9ebee, bigsuv: 0xf2f2f0, van: 0xfafafa, camper: 0x123, lorry: 0x2e7d4a };
const cars = {};
types.forEach((t, i) => {
  const m = createCarMesh(t, COLS[t], { learner: t === 'mini', roofBox: t === 'bigsuv', beacon: t === 'lorry', competitor: ['lorry', 'camper', 'suv'].includes(t) ? null : { number: i + 1, colour: COLS[t] } });
  m.position.set(0, 0, i * 6 + (t === 'lorry' ? 3 : 0)); m.rotation.y = 0; scene.add(m); cars[t] = m;
  syncCarMesh(m, { x: 0, z: i * 6 + (t === 'lorry' ? 3 : 0), h: 0, v: 0, steer: 0.35, wheelSpin: 0.3, braking: i % 2 === 0, bump: 0, stalled: 0, indicator: 1 }, 0, null);
});
// a parked (baked) row across the way with mixed colours
const pc = [0x8d9299, 0xb9bec4, 0x2d3036, 0xe9ebee, 0x1f3a63, 0x7a1f24, 0x2f5d48, 0xc7b79a, 0x445566];
const geos = types.map((t, i) => parkedCarGeometry(t, pc[i], 14, i * 6 + (t === 'lorry' ? 3 : 0), Math.PI));
geos.push(...types.filter((t) => t !== 'lorry').map((t, i) => parkedCarGeometry(t, pc[i], 22, i * 6, Math.PI, { lod: 'low' })));
for (const g of geos) { const m = new THREE.Mesh(g, carMaterial); m.castShadow = m.receiveShadow = true; scene.add(m); }
window.view = (pos, look) => { camera.position.set(...pos); camera.lookAt(...look); renderer.render(scene, camera); };
window.types = types;
window.ready = true;
