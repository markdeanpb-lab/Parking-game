// Pick the LAN IPv4 address phones should use to reach this computer.
// Skips loopback, link-local and (where possible) docker / VM / VPN adapters.
import os from 'node:os';

const VIRTUAL_NAME = /^(docker|br-|veth|virbr|vmnet|vboxnet|vbox|utun|tun|tap|zt|tailscale|wg|ham|lo|vethernet|hyper-v|default switch|bridge|awdl|llw|anpi|ap\d|gif|stf|cni|flannel|cali|kube|podman|lxc|lxd)/i;

export function scoreAddress(name, address) {
  let s = 0;
  if (/^192\.168\./.test(address)) s += 30;
  else if (/^10\./.test(address)) s += 20;
  else if (/^172\.(1[6-9]|2\d|3[01])\./.test(address)) s += 10;
  else s += 5;
  if (/^172\.17\./.test(address)) s -= 25; // docker default bridge
  if (/^100\.(6[4-9]|[7-9]\d|1[01]\d|12[0-7])\./.test(address)) s -= 20; // CGNAT / tailscale
  if (/^169\.254\./.test(address)) s -= 100;
  if (VIRTUAL_NAME.test(name)) s -= 40;
  if (/^(en|eth|wlan|wl|wi-?fi|ethernet|wireless)/i.test(name)) s += 15;
  return s;
}

export function lanCandidates(ifaces = os.networkInterfaces()) {
  const out = [];
  for (const [name, list] of Object.entries(ifaces)) {
    for (const a of list || []) {
      const fam = typeof a.family === 'string' ? a.family : a.family === 4 ? 'IPv4' : 'IPv6';
      if (fam !== 'IPv4' || a.internal) continue;
      out.push({ name, address: a.address, score: scoreAddress(name, a.address) });
    }
  }
  return out.sort((x, y) => y.score - x.score);
}

export function pickLanAddress(override) {
  if (override) return override;
  const c = lanCandidates();
  return c.length ? c[0].address : '127.0.0.1';
}
