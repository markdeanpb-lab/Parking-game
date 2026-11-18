// Web-edition additions to the TV screens, layered on top of client/tv/main.js without editing it:
//  - the lobby's QR card becomes "Go to <game page> on your phone and enter code: KBXM" with the code HUGE + the QR;
//  - Options gains "Game page link" (what the QR encodes) and "Data last updated: <date>"; Refresh Historical Data is
//    hidden (it needs the home-computer edition);
//  - a small status pill when the matchmaking (signalling) server can't be reached.
import { esc } from '../client/shared/ui.js';

const fmtDate = (iso) => {
  if (!iso) return 'unknown';
  const d = new Date(iso);
  return Number.isNaN(d.getTime()) ? String(iso) : d.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
};
const pretty = (u) => String(u || '').replace(/^https?:\/\//, '').replace(/\/$/, '');
const STATUS = {
  online: ['ok', 'Room open — phones can join'],
  connecting: ['wait', 'Opening the room…'],
  reconnecting: ['wait', 'Reconnecting to the matchmaking server…'],
  taken: ['warn', 'This room code is busy (another MARKRUN TV tab open?) — retrying…'],
  incompatible: ['bad', "This browser can't do peer-to-peer (WebRTC). Use Chrome, Edge or Safari."],
};

export function decorateTv(web) {
  document.body.classList.add('web-edition');
  let cardKey = '';

  function cardHtml() {
    const [cls, txt] = STATUS[web.peerStatus] || STATUS.connecting;
    const letters = [...web.code].map((c) => `<b>${esc(c)}</b>`).join('');
    const where = web.pageLink
      ? `<div class="wr-link">${esc(pretty(web.pageLink))}</div>`
      : '<div class="wr-link soft">this game\'s itch.io page</div>';
    return `<div class="wr-head">📱 On your phone, go to</div>${where}
      <div class="wr-and">and enter the code</div>
      <div class="wr-code" data-code="${esc(web.code)}">${letters}</div>
      <div class="wr-row"><div class="qr">${web.qrSvg || ''}</div><div class="wr-or"><b>…or just scan this</b> with the phone's camera${web.pageLink ? '' : ' (opens the game with the code filled in)'}</div></div>
      <div class="wr-status ${cls}"><i></i>${esc(txt)}</div>`;
  }
  function decorateCard(force = false) {
    const card = document.querySelector('.lobby .qr-card');
    if (!card) return;
    const key = `${web.code}|${web.peerStatus}|${web.pageLink}|${web.qrSvg.length}`;
    if (!force && card.dataset.web === key) return;
    card.dataset.web = key;
    card.classList.add('web-room');
    card.innerHTML = cardHtml();
    cardKey = key;
  }
  function decorateOptions() {
    const m = document.querySelector('#tvmodal.opts');
    if (!m || m.querySelector('.web-opt')) return;
    const row = m.querySelector('.row');
    const box = document.createElement('div');
    box.className = 'web-opt';
    box.innerHTML = `<label>🔗 Game page link <small>(what the QR code opens; leave empty for a direct link that fills in the code)</small></label>
      <div class="web-link-row"><input type="url" inputmode="url" spellcheck="false" autocomplete="off" placeholder="https://yourname.itch.io/markrun" value="${esc(web.pageLink)}"><button class="btn small green" data-weblink>Save</button></div>
      <div class="web-data">📅 Data last updated: <b>${esc(fmtDate(web.lastIngest))}</b> · new parkruns = rebuild the web zip and re-upload it to itch.io</div>`;
    (row ? row.parentNode.insertBefore(box, row) : m.querySelector('.tvm')?.appendChild(box));
    const input = box.querySelector('input');
    const saveLink = async () => {
      await web.setPageLink(input.value);
      input.value = web.pageLink;
      const b = box.querySelector('[data-weblink]');
      b.textContent = 'Saved ✓';
      setTimeout(() => { b.textContent = 'Save'; }, 1500);
    };
    box.querySelector('[data-weblink]').addEventListener('click', (e) => { e.stopPropagation(); saveLink(); });
    input.addEventListener('keydown', (e) => { e.stopPropagation(); if (e.key === 'Enter') { e.preventDefault(); saveLink(); } });
    input.addEventListener('keyup', (e) => e.stopPropagation());
  }
  let pill = null, pillTimer = null;
  function statusPill() {
    const bad = web.peerStatus !== 'online';
    const inLobby = !!document.querySelector('.lobby .qr-card');
    if (!bad || inLobby) { clearTimeout(pillTimer); pillTimer = null; pill?.remove(); pill = null; return; }
    if (pill || pillTimer) {
      const t = `📡 ${(STATUS[web.peerStatus] || STATUS.connecting)[1]}`;
      if (pill && pill.textContent !== t) pill.textContent = t; // (only on change: this runs inside the MutationObserver)
      return;
    }
    pillTimer = setTimeout(() => {
      pillTimer = null;
      if (web.peerStatus === 'online') return;
      pill = document.createElement('div');
      pill.id = 'web-pill';
      pill.textContent = `📡 ${(STATUS[web.peerStatus] || STATUS.connecting)[1]}`;
      document.body.appendChild(pill);
    }, 5000);
  }
  const apply = () => { decorateCard(); decorateOptions(); statusPill(); };
  new MutationObserver(apply).observe(document.body, { childList: true, subtree: true });
  web.onChange = () => { decorateCard(); statusPill(); };
  apply();
  return { refresh: () => decorateCard(true), get cardKey() { return cardKey; } };
}
