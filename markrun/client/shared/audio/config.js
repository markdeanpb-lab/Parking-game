// Premium voice configuration shared by the TV (browser), the Node host (serving data/voices/) and the tools
// (npm run voices:download, tools/build_tts.mjs). Plain data only: safe to import anywhere.
export const KOKORO_MODEL = 'onnx-community/Kokoro-82M-v1.0-ONNX';
export const KOKORO_REVISION = 'main';
// q8 model + tokenizer/config: what transformers.js fetches for dtype 'q8'
export const MODEL_FILES = ['config.json', 'tokenizer.json', 'tokenizer_config.json', 'onnx/model_quantized.onnx'];
// commentator -> Kokoro voice (British English)
export const VOICES = { jeff: 'bm_george', pam: 'bf_emma', anchor: 'bm_lewis' };
// speaking rate per commentator (Kokoro "speed"): Jeff is a touch brisker
export const VOICE_SPEED = { jeff: 1.06, pam: 1.02, anchor: 1.0 };
// the exact library versions bundled into client/dist/tts-worker.js (tools/build_tts.mjs)
export const TTS_PACKAGES = {
  'kokoro-js': '1.2.1',
  phonemizer: '1.2.1',
  '@huggingface/transformers': '3.8.1',
  '@huggingface/jinja': '0.5.13',
  'onnxruntime-web': '1.22.0-dev.20250409-89f8206ba4',
  'onnxruntime-common': '1.21.0',
};
export const ORT_VERSION = TTS_PACKAGES['onnxruntime-web'];
// the wasm runtime the worker loads (must match the bundled onnxruntime-web glue exactly)
export const ORT_FILES = ['ort-wasm-simd-threaded.mjs', 'ort-wasm-simd-threaded.wasm'];
export const ORT_CDN = `https://cdn.jsdelivr.net/npm/onnxruntime-web@${ORT_VERSION}/dist/`;
export const HF_BASE = 'https://huggingface.co/';
export const hfUrl = (file) => `${HF_BASE}${KOKORO_MODEL}/resolve/${KOKORO_REVISION}/${file}`;
// approximate one-off download (q8 model 92 MB + 3 voices + runtime 11 MB)
export const DOWNLOAD_MB = 90;
