// Phone role: connect to the TV's room over WebRTC (PeerJS) and load the unmodified phone UI on that transport.
import { peerTransport, signallingFromParams } from './peerlink.js';
import { mountShell } from './shell.js';

export async function startPhone({ code, params, onProblem }) {
  const t = peerTransport({ code, sig: signallingFromParams(params), onProblem });
  globalThis.__markrunTransport = { connect: (opts) => (globalThis.__markrunPhoneNet = t.connect(opts)) };
  await mountShell('phone');
  await import('../client/phone/main.js');
}
