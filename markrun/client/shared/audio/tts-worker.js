// MARKRUN premium commentary voices: Kokoro-82M (q8 ONNX) running in a Web Worker, so the 3D broadcast stays smooth.
// Bundled by tools/build_tts.mjs into client/dist/tts-worker.js (kokoro-js 1.2.1 + transformers.js + onnxruntime-web).
//
// Model files come from one of two places, chosen by the TV page (see client/shared/audio/premium.js):
//   local  : the Node edition's host serves data/voices/ (npm run voices:download). Every Hugging Face / jsDelivr URL
//            the libraries would fetch is rewritten to that folder, so nothing ever leaves the LAN.
//   remote : the web edition loads from the Hugging Face CDN once and keeps it in the browser's Cache API.
//
// Protocol (main thread <-> worker):
//   -> { t:'init', source:'local'|'remote', localBase, ortBase, threads, voices:[ids], warm:boolean }
//   <- { t:'progress', file, loaded, total }   (download / load progress)
//   <- { t:'ready', loadMs, threads, isolated }
//   -> { t:'gen', id, text, voice, speed }
//   <- { t:'audio', id, pcm:Float32Array, sampleRate, ms }  (pcm is transferred)
//   <- { t:'error', id?, msg, fatal? }
import { KokoroTTS, env as kenv } from 'kokoro-js';
import { env as tenv } from '@huggingface/transformers';

const MODEL = 'onnx-community/Kokoro-82M-v1.0-ONNX';
const HF = 'https://huggingface.co/';
let tts = null;
let busy = false;
const queue = [];

function rewriteFetch(localBase) {
  const orig = self.fetch.bind(self);
  self.fetch = (input, init) => {
    const url = typeof input === 'string' ? input : input?.url || String(input);
    if (url.startsWith(HF)) return orig(`${localBase}hf/${url.slice(HF.length)}`, init);
    if (/^https?:\/\//.test(url) && !url.startsWith(self.location.origin)) {
      return Promise.reject(new Error(`offline voices: blocked ${url}`)); // belt and braces: never go online
    }
    return orig(input, init);
  };
}

function progressCb(p) {
  if (p?.status === 'progress' || p?.status === 'done') postMessage({ t: 'progress', file: p.file, loaded: p.loaded ?? 0, total: p.total ?? 0, status: p.status });
}

async function init(m) {
  const t0 = performance.now();
  const env = tenv || kenv;
  const onnx = env.backends?.onnx;
  if (m.source === 'local') {
    rewriteFetch(m.localBase);
    env.useBrowserCache = false; // the files are on the LAN already
  } else {
    env.useBrowserCache = typeof caches !== 'undefined';
  }
  env.allowLocalModels = false;
  if (onnx?.wasm) {
    onnx.wasm.wasmPaths = m.ortBase;
    const isolated = !!self.crossOriginIsolated;
    onnx.wasm.numThreads = isolated ? Math.max(1, m.threads || 1) : 1;
    onnx.wasm.proxy = false;
  }
  tts = await KokoroTTS.from_pretrained(MODEL, { dtype: 'q8', device: 'wasm', progress_callback: progressCb });
  // warm the voices (each is a 0.5 MB style table) and the graph, so the first real line isn't slower
  for (const v of m.voices || []) {
    try { await tts.generate('Hi.', { voice: v }); } catch (e) { postMessage({ t: 'error', msg: `voice ${v}: ${e.message}` }); }
    if (!m.warm) break;
  }
  postMessage({ t: 'ready', loadMs: Math.round(performance.now() - t0), threads: onnx?.wasm?.numThreads || 1, isolated: !!self.crossOriginIsolated });
  pump();
}

async function pump() {
  if (busy || !tts) return;
  const job = queue.shift();
  if (!job) return;
  busy = true;
  const t0 = performance.now();
  try {
    const audio = await tts.generate(job.text, { voice: job.voice, speed: job.speed || 1 });
    const pcm = audio.audio instanceof Float32Array ? audio.audio : new Float32Array(audio.audio);
    postMessage({ t: 'audio', id: job.id, pcm, sampleRate: audio.sampling_rate || 24000, ms: Math.round(performance.now() - t0) }, [pcm.buffer]);
  } catch (e) {
    postMessage({ t: 'error', id: job.id, msg: String(e?.message || e) });
  }
  busy = false;
  pump();
}

self.onmessage = (e) => {
  const m = e.data || {};
  if (m.t === 'init') init(m).catch((err) => postMessage({ t: 'error', msg: String(err?.message || err), fatal: true }));
  else if (m.t === 'gen') { queue.push(m); pump(); }
  else if (m.t === 'clear') queue.length = 0;
};
