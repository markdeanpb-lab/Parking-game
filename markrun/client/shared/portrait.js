// Original chunky toon portrait of a runner (SVG string) from its randomised `look` + colours.
// Thick ink outlines, flat colours, big head. Unknown look values fall back gracefully.
// resolveLook() is the ONE source of truth for a runner's look: the 3D runner (client/tv/race/runner.js) and these
// portraits (TV + phones) both build from it, so a runner looks the same everywhere: kit and hat in the runner's lane
// colour, plus ONE silhouette-defining signature (a big hairstyle, or a signature hat/cape for runners whose hair would
// not read from a distance). Hair styles are unique within a round (game module), so signatures never repeat.
const INK = '#14183c';
const SW = 5;

function hashStr(s) { let h = 2166136261; for (const c of String(s)) { h ^= c.charCodeAt(0); h = Math.imul(h, 16777619); } return h >>> 0; }
export const HAIR_COLOURS = ['#2b1a10', '#5a3418', '#8a5a2b', '#d8a24a', '#1b1b1b', '#b8432a', '#9aa0a8'];
// hairstyles that are a silhouette on their own (a hat would hide them, so they get at most a band)
const STRONG_HAIR = new Set(['afro', 'mohawk', 'mullet', 'bun', 'ponytail', 'spiky', 'curly', 'quiff', 'long']);
// the signature for runners whose hair does not read from the sofa (unique because hair is unique per round)
const WEAK_SIG = { short: { hat: 'cap' }, bald: { hat: 'bobble' }, buzz: { hat: 'bucket' }, swept: { prop: 'cape' }, bob: { hat: 'backwards-cap' } };
// small face/arm details that never change the silhouette
const SMALL_ACC = new Set(['sunglasses', 'glasses', 'moustache', 'beard', 'medal', 'wristbands']);
const BANDS = new Set(['headband', 'sweatband', 'visor']);

function lum(hex) { const n = parseInt(String(hex || '#888888').replace('#', '').padEnd(6, '8').slice(0, 6), 16); return ((n >> 16) & 255) * 0.299 + ((n >> 8) & 255) * 0.587 + (n & 255) * 0.114; }
function dist(a, b) { const x = parseInt(a.slice(1), 16), y = parseInt(b.slice(1), 16); return Math.hypot(((x >> 16) & 255) - ((y >> 16) & 255), ((x >> 8) & 255) - ((y >> 8) & 255), (x & 255) - (y & 255)); }

/** The canonical look of a runner (shared by the 3D model and the SVG portrait). */
export function resolveLook(runner) {
  const look = runner?.look || {};
  const primary = runner?.colour?.primary || '#ff4d5a';
  let secondary = runner?.colour?.secondary || '#ffffff';
  // trim must read against the lane colour
  const trim = dist(primary, secondary) < 90 ? (lum(primary) > 140 ? INK : '#ffffff') : secondary;
  const h = hashStr((runner?.id || '') + (runner?.nickname || ''));
  let hair = look.hair || 'short';
  if (!STRONG_HAIR.has(hair) && !WEAK_SIG[hair]) hair = 'short';
  let hat = null, prop = null, signature;
  if (STRONG_HAIR.has(hair)) {
    // a band in the lane colour if the runner had any hat; never a hat that hides the signature hair
    const band = ['ponytail', 'bun', 'long'].includes(hair) ? 'visor' : ['mullet', 'quiff'].includes(hair) ? 'headband' : 'sweatband';
    hat = look.hat ? (BANDS.has(look.hat) ? look.hat : band) : null;
    if (hat === 'visor' && (hair === 'afro' || hair === 'mohawk' || hair === 'spiky' || hair === 'quiff')) hat = 'sweatband';
    signature = hair;
  } else {
    hat = WEAK_SIG[hair].hat || null; prop = WEAK_SIG[hair].prop || null;
    signature = hat || prop;
  }
  const accessory = SMALL_ACC.has(look.accessory) ? look.accessory : null;
  return {
    build: look.build || 'compact', skin: look.skin || '#f1c6a5', face: look.face || 'grin',
    hair, hairCol: look.hairColour || look.hairColor || HAIR_COLOURS[h % HAIR_COLOURS.length],
    hat, prop, accessory, signature,
    primary, secondary: trim, shorts: trim,
    hatCol: primary, hatTrim: trim,
  };
}

function shade(hex, f) {
  const n = parseInt(String(hex || '#888888').replace('#', '').padEnd(6, '8').slice(0, 6), 16);
  let r = (n >> 16) & 255, g = (n >> 8) & 255, b = n & 255;
  const t = f < 0 ? 0 : 255, p = Math.abs(f);
  r = Math.round((t - r) * p + r); g = Math.round((t - g) * p + g); b = Math.round((t - b) * p + b);
  return `#${((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1)}`;
}

export function runnerPortrait(runner, { size = 120, idSuffix = '' } = {}) {
  const L = resolveLook(runner);
  const c1 = L.primary, c2 = L.secondary, skin = L.skin, hairCol = L.hairCol;
  const h = hashStr((runner?.id || '') + (runner?.nickname || ''));
  const build = L.build;
  const shoulders = { stocky: 50, tall: 40, lanky: 34, compact: 42 }[build] ?? 42;
  const neck = { tall: 8, lanky: 10, stocky: 2, compact: 4 }[build] ?? 4;
  const headR = { compact: 31, stocky: 30, lanky: 28, tall: 29 }[build] ?? 30;
  // big hats / hair need headroom: shift the figure down a little
  const tall = ['bobble', 'bucket'].includes(L.hat) || ['afro', 'mohawk', 'spiky', 'bun', 'quiff'].includes(L.hair);
  const cx = 60, cy = 48 - neck / 2 + (tall ? 4 : 0);
  const lane = runner?.lane ?? '';
  const clipId = `pc${h.toString(36)}${idSuffix}`;
  const parts = [];
  const P = (d, fill, sw = SW, extra = '') => `<path d="${d}" fill="${fill}" stroke="${INK}" stroke-width="${sw}" stroke-linejoin="round" stroke-linecap="round"${extra}/>`;

  // background disc in team colour
  parts.push(`<defs><clipPath id="${clipId}"><circle cx="60" cy="60" r="56"/></clipPath></defs>`);
  parts.push(`<circle cx="60" cy="60" r="56" fill="${shade(c1, 0.6)}"/>`);
  parts.push(`<g clip-path="url(#${clipId})">`);
  parts.push(`<path d="M0 ${92} L120 ${70} L120 120 L0 120Z" fill="${shade(c1, 0.4)}" opacity=".7"/>`);
  const sy = cy + headR + neck - 4;
  // cape behind the shoulders (signature prop)
  if (L.prop === 'cape') parts.push(P(`M${cx - 20} ${sy - 2} Q${cx - shoulders - 26} ${sy + 18} ${cx - shoulders - 22} 124 L${cx + shoulders + 22} 124 Q${cx + shoulders + 26} ${sy + 18} ${cx + 20} ${sy - 2}Z`, c2));
  // shoulders / vest
  parts.push(P(`M${cx - shoulders} 124 Q${cx - shoulders} ${sy + 6} ${cx - 14} ${sy} L${cx + 14} ${sy} Q${cx + shoulders} ${sy + 6} ${cx + shoulders} 124Z`, c1));
  // side trim stripes (as on the 3D kit)
  parts.push(`<path d="M${cx - shoulders + 7} 124 Q${cx - shoulders + 8} ${sy + 16} ${cx - shoulders + 14} ${sy + 8}" fill="none" stroke="${c2}" stroke-width="5"/><path d="M${cx + shoulders - 7} 124 Q${cx + shoulders - 8} ${sy + 16} ${cx + shoulders - 14} ${sy + 8}" fill="none" stroke="${c2}" stroke-width="5"/>`);
  // race bib (as on the 3D kit: white card, lane-colour header, big number)
  parts.push(`<g transform="rotate(-4 ${cx} ${sy + 18})"><rect x="${cx - 13}" y="${sy + 7}" width="26" height="20" rx="3" fill="#fff" stroke="${INK}" stroke-width="3"/><rect x="${cx - 11.5}" y="${sy + 8.5}" width="23" height="4.5" fill="${c1}"/>`);
  parts.push(`<text x="${cx}" y="${sy + 25}" font-family="Lilita One, Arial Black, sans-serif" font-size="13" text-anchor="middle" fill="${INK}">${lane}</text></g>`);
  if (L.prop === 'cape') parts.push(`<circle cx="${cx - 15}" cy="${sy + 3}" r="4" fill="#ffcf3a" stroke="${INK}" stroke-width="2.5"/><circle cx="${cx + 15}" cy="${sy + 3}" r="4" fill="#ffcf3a" stroke="${INK}" stroke-width="2.5"/>`);
  // neck
  parts.push(`<rect x="${cx - 9}" y="${cy + headR - 8}" width="18" height="${neck + 12}" fill="${skin}" stroke="${INK}" stroke-width="${SW}"/>`);
  if (L.accessory === 'medal') {
    parts.push(`<path d="M${cx - 12} ${sy} L${cx} ${sy + 14} L${cx + 12} ${sy}" fill="none" stroke="#2e9bff" stroke-width="5"/>`);
    parts.push(`<circle cx="${cx}" cy="${sy + 17}" r="7" fill="#ffcf3a" stroke="${INK}" stroke-width="3.5"/>`);
  }
  // hair behind head (long styles)
  const hair = L.hair;
  if (['long', 'ponytail'].includes(hair)) {
    parts.push(P(`M${cx - headR - 4} ${cy} Q${cx - headR - 6} ${cy + headR + 14} ${cx - headR + 10} ${cy + headR + 10} L${cx + headR - 10} ${cy + headR + 10} Q${cx + headR + 6} ${cy + headR + 14} ${cx + headR + 4} ${cy}Z`, hairCol));
  }
  if (hair === 'ponytail') parts.push(`<ellipse cx="${cx + headR + 8}" cy="${cy - 2}" rx="10" ry="18" fill="${hairCol}" stroke="${INK}" stroke-width="${SW}" transform="rotate(28 ${cx + headR + 8} ${cy - 2})"/>`);
  if (hair === 'mullet') parts.push(P(`M${cx - headR + 2} ${cy + 4} Q${cx - headR - 8} ${cy + headR + 8} ${cx - headR + 6} ${cy + headR + 14} L${cx + headR - 6} ${cy + headR + 14} Q${cx + headR + 8} ${cy + headR + 8} ${cx + headR - 2} ${cy + 4}Z`, hairCol));
  if (hair === 'afro') parts.push(`<circle cx="${cx}" cy="${cy - 10}" r="${headR + 12}" fill="${hairCol}" stroke="${INK}" stroke-width="${SW}"/>`);
  if (hair === 'curly') parts.push(`<g fill="${hairCol}" stroke="${INK}" stroke-width="${SW}">${[[-24, -8], [24, -8], [-19, -22], [19, -22], [-6, -30], [8, -30]].map(([dx, dy]) => `<circle cx="${cx + dx}" cy="${cy + dy}" r="11"/>`).join('')}</g>`);
  // ears + head
  parts.push(`<circle cx="${cx - headR + 1}" cy="${cy + 4}" r="7" fill="${skin}" stroke="${INK}" stroke-width="${SW}"/>`);
  parts.push(`<circle cx="${cx + headR - 1}" cy="${cy + 4}" r="7" fill="${skin}" stroke="${INK}" stroke-width="${SW}"/>`);
  parts.push(`<ellipse cx="${cx}" cy="${cy}" rx="${headR}" ry="${headR + 2}" fill="${skin}" stroke="${INK}" stroke-width="${SW}"/>`);
  parts.push(`<ellipse cx="${cx - 16}" cy="${cy + 11}" rx="6" ry="4" fill="#ff8f8f" opacity=".45"/><ellipse cx="${cx + 16}" cy="${cy + 11}" rx="6" ry="4" fill="#ff8f8f" opacity=".45"/>`);

  // hair on top (under any hat)
  const top = cy - headR - 2;
  const hairTop = {
    short: `<path d="M${cx - headR + 2} ${cy - 6} Q${cx - headR} ${top - 4} ${cx} ${top - 2} Q${cx + headR} ${top - 4} ${cx + headR - 2} ${cy - 6} Q${cx + 8} ${cy - 18} ${cx - headR + 2} ${cy - 6}Z"/>`,
    buzz: `<path d="M${cx - headR + 3} ${cy - 8} Q${cx} ${top - 6} ${cx + headR - 3} ${cy - 8} Q${cx} ${cy - 20} ${cx - headR + 3} ${cy - 8}Z"/>`,
    curly: `<path d="M${cx - headR + 2} ${cy - 4} Q${cx - headR} ${top - 6} ${cx} ${top - 4} Q${cx + headR} ${top - 6} ${cx + headR - 2} ${cy - 4} Q${cx} ${cy - 16} ${cx - headR + 2} ${cy - 4}Z"/>`,
    afro: `<path d="M${cx - headR + 1} ${cy - 2} Q${cx} ${cy - 16} ${cx + headR - 1} ${cy - 2} L${cx + headR} ${cy - 14} Q${cx} ${top - 4} ${cx - headR} ${cy - 14}Z"/>`,
    mohawk: `<path d="M${cx - 8} ${cy - 12} L${cx - 13} ${top - 6} L${cx - 6} ${top - 22} L${cx} ${top - 10} L${cx + 6} ${top - 24} L${cx + 11} ${top - 8} L${cx + 8} ${cy - 12}Z"/>`,
    quiff: `<path d="M${cx - headR + 2} ${cy - 6} Q${cx - headR} ${top} ${cx - 4} ${top - 2} Q${cx + 20} ${top - 22} ${cx + headR + 6} ${top} Q${cx + headR} ${cy - 8} ${cx + headR - 2} ${cy - 6} Q${cx + 8} ${cy - 18} ${cx - headR + 2} ${cy - 6}Z"/>`,
    bun: `<g><circle cx="${cx}" cy="${top - 9}" r="12"/><path d="M${cx - headR + 2} ${cy - 6} Q${cx - headR} ${top - 2} ${cx} ${top} Q${cx + headR} ${top - 2} ${cx + headR - 2} ${cy - 6} Q${cx} ${cy - 16} ${cx - headR + 2} ${cy - 6}Z"/></g>`,
    long: `<path d="M${cx - headR + 1} ${cy + 2} Q${cx - headR} ${top - 4} ${cx} ${top - 2} Q${cx + headR} ${top - 4} ${cx + headR - 1} ${cy + 2} Q${cx + 10} ${cy - 16} ${cx - 2} ${cy - 12} Q${cx - 14} ${cy - 16} ${cx - headR + 1} ${cy + 2}Z"/>`,
    bald: `<path d="M${cx - 12} ${top + 9} Q${cx - 4} ${top + 4} ${cx + 4} ${top + 7}" fill="none" stroke="#fff" stroke-opacity=".55" stroke-width="3.5"/>`,
  };
  hairTop.ponytail = hairTop.long; hairTop.bob = hairTop.long; hairTop.mullet = hairTop.short;
  hairTop.spiky = `<path d="M${cx - headR + 2} ${cy - 6} L${cx - headR + 1} ${top + 2} L${cx - 17} ${top - 14} L${cx - 9} ${top - 3} L${cx} ${top - 19} L${cx + 7} ${top - 3} L${cx + 17} ${top - 14} L${cx + headR - 1} ${top + 2} L${cx + headR - 2} ${cy - 6} Q${cx} ${cy - 18} ${cx - headR + 2} ${cy - 6}Z"/>`;
  hairTop.swept = `<path d="M${cx - headR + 2} ${cy - 4} Q${cx - headR - 4} ${top - 6} ${cx + 6} ${top - 6} Q${cx + headR + 8} ${top} ${cx + headR - 1} ${cy - 2} Q${cx + 4} ${cy - 22} ${cx - headR + 2} ${cy - 4}Z"/>`;
  const covered = ['cap', 'bobble', 'bucket', 'backwards-cap'].includes(L.hat);
  const ht = covered ? (hair === 'bald' ? '' : hairTop.buzz) : (hairTop[hair] ?? hairTop.short);
  if (ht) parts.push(`<g fill="${hairCol}" stroke="${INK}" stroke-width="${SW}" stroke-linejoin="round">${ht}</g>`);

  // face
  const face = L.face;
  const ey = cy + 1;
  const eye = (x, closed) => (closed
    ? `<path d="M${x - 5} ${ey} Q${x} ${ey + 4} ${x + 5} ${ey}" fill="none" stroke="${INK}" stroke-width="3.5" stroke-linecap="round"/>`
    : `<ellipse cx="${x}" cy="${ey}" rx="4.2" ry="5.6" fill="${INK}"/><circle cx="${x + 1.4}" cy="${ey - 2}" r="1.5" fill="#fff"/>`);
  let brows = '', mouth = '', eyes = eye(cx - 11) + eye(cx + 11);
  switch (face) {
    case 'determined': case 'focused': case 'fierce':
      brows = `<path d="M${cx - 18} ${ey - 12} L${cx - 5} ${ey - 7} M${cx + 18} ${ey - 12} L${cx + 5} ${ey - 7}" stroke="${INK}" stroke-width="4" stroke-linecap="round"/>`;
      mouth = `<path d="M${cx - 9} ${cy + 17} L${cx + 9} ${cy + 15}" stroke="${INK}" stroke-width="4" stroke-linecap="round"/>`;
      break;
    case 'smug': case 'cheeky':
      eyes = `<path d="M${cx - 16} ${ey} L${cx - 6} ${ey}" stroke="${INK}" stroke-width="4" stroke-linecap="round"/>` + eye(cx + 11);
      brows = `<path d="M${cx + 5} ${ey - 10} Q${cx + 11} ${ey - 15} ${cx + 18} ${ey - 10}" fill="none" stroke="${INK}" stroke-width="3.5" stroke-linecap="round"/>`;
      mouth = `<path d="M${cx - 8} ${cy + 15} Q${cx + 4} ${cy + 19} ${cx + 11} ${cy + 11}" fill="none" stroke="${INK}" stroke-width="4" stroke-linecap="round"/>`;
      break;
    case 'worried': case 'nervous': case 'anxious':
      brows = `<path d="M${cx - 17} ${ey - 8} L${cx - 6} ${ey - 13} M${cx + 17} ${ey - 8} L${cx + 6} ${ey - 13}" stroke="${INK}" stroke-width="3.5" stroke-linecap="round"/>`;
      mouth = `<path d="M${cx - 10} ${cy + 17} q5 -5 10 0 q5 5 10 0" fill="none" stroke="${INK}" stroke-width="3.5" stroke-linecap="round"/>`;
      break;
    case 'sleepy': case 'tired': case 'dozy':
      eyes = `<g><path d="M${cx - 16} ${ey - 1} L${cx - 6} ${ey - 1}" stroke="${INK}" stroke-width="4" stroke-linecap="round"/><path d="M${cx + 6} ${ey - 1} L${cx + 16} ${ey - 1}" stroke="${INK}" stroke-width="4" stroke-linecap="round"/><path d="M${cx - 15} ${ey} Q${cx - 11} ${ey + 5} ${cx - 7} ${ey}" fill="${INK}"/><path d="M${cx + 7} ${ey} Q${cx + 11} ${ey + 5} ${cx + 15} ${ey}" fill="${INK}"/></g>`;
      mouth = `<path d="M${cx - 7} ${cy + 15} Q${cx} ${cy + 19} ${cx + 7} ${cy + 15}" fill="none" stroke="${INK}" stroke-width="3.5" stroke-linecap="round"/>`;
      break;
    case 'wink':
      eyes = eye(cx - 11, true) + eye(cx + 11);
      mouth = `<path d="M${cx - 11} ${cy + 12} Q${cx} ${cy + 24} ${cx + 11} ${cy + 12}Z" fill="#fff" stroke="${INK}" stroke-width="3.5" stroke-linejoin="round"/>`;
      break;
    case 'gritted':
      brows = `<path d="M${cx - 18} ${ey - 11} L${cx - 5} ${ey - 7} M${cx + 18} ${ey - 11} L${cx + 5} ${ey - 7}" stroke="${INK}" stroke-width="4" stroke-linecap="round"/>`;
      mouth = `<rect x="${cx - 12}" y="${cy + 11}" width="24" height="10" rx="3" fill="#fff" stroke="${INK}" stroke-width="3.5"/><path d="M${cx - 4} ${cy + 11} v10 M${cx + 4} ${cy + 11} v10 M${cx - 12} ${cy + 16} h24" stroke="${INK}" stroke-width="2"/>`;
      break;
    case 'tongue-out': case 'goofy':
      eyes = eye(cx - 11, true) + eye(cx + 11);
      mouth = `<path d="M${cx - 11} ${cy + 12} Q${cx} ${cy + 20} ${cx + 11} ${cy + 12}" fill="none" stroke="${INK}" stroke-width="3.5" stroke-linecap="round"/><path d="M${cx - 2} ${cy + 15} q4 14 10 0z" fill="#ff6b7a" stroke="${INK}" stroke-width="3"/>`;
      break;
    case 'wide-eyed':
      eyes = `<circle cx="${cx - 11}" cy="${ey}" r="7.5" fill="#fff" stroke="${INK}" stroke-width="3"/><circle cx="${cx - 11}" cy="${ey}" r="3.2" fill="${INK}"/><circle cx="${cx + 11}" cy="${ey}" r="7.5" fill="#fff" stroke="${INK}" stroke-width="3"/><circle cx="${cx + 11}" cy="${ey}" r="3.2" fill="${INK}"/>`;
      mouth = `<ellipse cx="${cx}" cy="${cy + 17}" rx="5" ry="6" fill="${INK}"/>`;
      break;
    case 'shocked': case 'surprised':
      mouth = `<ellipse cx="${cx}" cy="${cy + 17}" rx="6" ry="8" fill="${INK}"/>`;
      brows = `<path d="M${cx - 17} ${ey - 13} Q${cx - 11} ${ey - 17} ${cx - 5} ${ey - 13} M${cx + 17} ${ey - 13} Q${cx + 11} ${ey - 17} ${cx + 5} ${ey - 13}" fill="none" stroke="${INK}" stroke-width="3.5" stroke-linecap="round"/>`;
      break;
    default: // grin
      mouth = `<path d="M${cx - 13} ${cy + 11} Q${cx} ${cy + 27} ${cx + 13} ${cy + 11}Z" fill="#fff" stroke="${INK}" stroke-width="3.5" stroke-linejoin="round"/><path d="M${cx - 6} ${cy + 19} Q${cx} ${cy + 23} ${cx + 6} ${cy + 19}" fill="#ff6b7a"/>`;
  }
  parts.push(eyes, brows, mouth);
  parts.push(`<path d="M${cx - 2} ${cy + 4} Q${cx + 3} ${cy + 8} ${cx - 1} ${cy + 10}" fill="none" stroke="${shade(skin, -0.35)}" stroke-width="3" stroke-linecap="round"/>`);

  // small accessories
  const acc = L.accessory;
  if (acc === 'sunglasses') {
    parts.push(`<g stroke="${INK}" stroke-width="3.5"><rect x="${cx - 21}" y="${ey - 7}" width="17" height="12" rx="4" fill="${INK}"/><rect x="${cx + 4}" y="${ey - 7}" width="17" height="12" rx="4" fill="${INK}"/><path d="M${cx - 4} ${ey - 3} L${cx + 4} ${ey - 3}"/></g><path d="M${cx - 18} ${ey - 4} l5 0 M${cx + 7} ${ey - 4} l5 0" stroke="#fff" stroke-width="2.5" stroke-linecap="round"/>`);
  } else if (acc === 'glasses') {
    parts.push(`<g stroke="${INK}" stroke-width="3.5" fill="rgba(255,255,255,.25)"><circle cx="${cx - 11}" cy="${ey}" r="8"/><circle cx="${cx + 11}" cy="${ey}" r="8"/><path d="M${cx - 3} ${ey} L${cx + 3} ${ey}"/></g>`);
  } else if (acc === 'moustache') {
    parts.push(`<path d="M${cx} ${cy + 12} q-8 -6 -16 0 q6 6 16 0 q8 -6 16 0 q-6 6 -16 0z" fill="${hairCol}" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>`);
  } else if (acc === 'beard') {
    parts.push(`<path d="M${cx - headR + 4} ${cy + 4} Q${cx - headR + 6} ${cy + headR + 6} ${cx} ${cy + headR + 8} Q${cx + headR - 6} ${cy + headR + 6} ${cx + headR - 4} ${cy + 4} Q${cx + 14} ${cy + 18} ${cx} ${cy + 22} Q${cx - 14} ${cy + 18} ${cx - headR + 4} ${cy + 4}Z" fill="${hairCol}" stroke="${INK}" stroke-width="3.5" stroke-linejoin="round"/>`);
  } else if (acc === 'wristbands') {
    parts.push(`<rect x="${cx - shoulders + 2}" y="${sy + 26}" width="12" height="9" rx="3" fill="${c2}" stroke="${INK}" stroke-width="3"/><rect x="${cx + shoulders - 14}" y="${sy + 26}" width="12" height="9" rx="3" fill="${c2}" stroke="${INK}" stroke-width="3"/>`);
  }

  // hats: always the lane colour (c1) with the trim colour (c2)
  const hat = L.hat;
  const dark = shade(c1, -0.22);
  if (hat === 'backwards-cap') {
    parts.push(P(`M${cx - headR + 1} ${cy - 8} Q${cx - headR + 2} ${top - 10} ${cx} ${top - 10} Q${cx + headR - 2} ${top - 10} ${cx + headR - 1} ${cy - 8}Z`, c1));
    parts.push(P(`M${cx - headR + 4} ${cy - 12} Q${cx - headR - 14} ${cy - 14} ${cx - headR - 18} ${cy - 4} L${cx - headR + 2} ${cy - 4}Z`, dark));
    parts.push(`<rect x="${cx + 4}" y="${cy - 14}" width="12" height="5" rx="2" fill="${c2}" stroke="${INK}" stroke-width="2.5"/>`);
  } else if (hat === 'cap') {
    parts.push(P(`M${cx - headR + 1} ${cy - 8} Q${cx - headR + 2} ${top - 10} ${cx} ${top - 10} Q${cx + headR - 2} ${top - 10} ${cx + headR - 1} ${cy - 8}Z`, c1));
    parts.push(P(`M${cx - 6} ${cy - 10} Q${cx + 24} ${cy - 18} ${cx + headR + 16} ${cy - 6} L${cx + headR - 2} ${cy - 4}Z`, dark));
    parts.push(`<circle cx="${cx}" cy="${top - 10}" r="3.5" fill="${c2}" stroke="${INK}" stroke-width="2.5"/>`);
    parts.push(`<path d="M${cx - 14} ${cy - 15} Q${cx - 4} ${top - 6} ${cx + 8} ${cy - 17}" fill="none" stroke="${c2}" stroke-width="4"/>`);
  } else if (hat === 'bobble') {
    parts.push(P(`M${cx - headR} ${cy - 6} Q${cx - headR} ${top - 18} ${cx} ${top - 18} Q${cx + headR} ${top - 18} ${cx + headR} ${cy - 6}Z`, c1));
    parts.push(`<path d="M${cx - 12} ${top - 14} L${cx - 12} ${cy - 10} M${cx} ${top - 17} L${cx} ${cy - 10} M${cx + 12} ${top - 14} L${cx + 12} ${cy - 10}" stroke="${dark}" stroke-width="3"/>`);
    parts.push(`<rect x="${cx - headR - 2}" y="${cy - 13}" width="${headR * 2 + 4}" height="12" rx="5" fill="${c2}" stroke="${INK}" stroke-width="${SW}"/>`);
    parts.push(`<circle cx="${cx}" cy="${top - 22}" r="11" fill="${c2}" stroke="${INK}" stroke-width="${SW}"/>`);
  } else if (hat === 'headband' || hat === 'sweatband') {
    parts.push(P(`M${cx - headR} ${cy - 13} Q${cx} ${cy - 22} ${cx + headR} ${cy - 13} L${cx + headR + 1} ${cy - 4} Q${cx} ${cy - 13} ${cx - headR - 1} ${cy - 4}Z`, c1, 4));
    parts.push(`<path d="M${cx - 10} ${cy - 15} L${cx + 10} ${cy - 15}" stroke="${c2}" stroke-width="3" stroke-linecap="round"/>`);
    if (hat === 'headband') parts.push(P(`M${cx + headR} ${cy - 9} l12 -5 l-1 11z`, c1, 3.5));
  } else if (hat === 'visor') {
    parts.push(`<path d="M${cx - headR} ${cy - 12} Q${cx} ${cy - 20} ${cx + headR} ${cy - 12} L${cx + headR} ${cy - 5} Q${cx} ${cy - 12} ${cx - headR} ${cy - 5}Z" fill="${c1}" stroke="${INK}" stroke-width="4"/>`);
    parts.push(P(`M${cx - 18} ${cy - 10} Q${cx + 4} ${cy - 2} ${cx + 30} ${cy - 10} L${cx + 20} ${cy - 15}Z`, dark, 4));
  } else if (hat === 'bucket') {
    parts.push(P(`M${cx - headR + 4} ${cy - 10} L${cx - headR + 7} ${top - 12} Q${cx} ${top - 19} ${cx + headR - 7} ${top - 12} L${cx + headR - 4} ${cy - 10}Z`, c1));
    parts.push(P(`M${cx - headR - 13} ${cy - 2} Q${cx} ${cy - 18} ${cx + headR + 13} ${cy - 2} Q${cx} ${cy - 9} ${cx - headR - 13} ${cy - 2}Z`, dark));
    parts.push(`<path d="M${cx - headR + 5} ${cy - 13} Q${cx} ${cy - 18} ${cx + headR - 5} ${cy - 13}" fill="none" stroke="${c2}" stroke-width="4"/>`);
  }
  parts.push('</g>');
  parts.push(`<circle cx="60" cy="60" r="56" fill="none" stroke="${INK}" stroke-width="6"/>`);
  return `<svg class="portrait" viewBox="0 0 120 120" width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">${parts.join('')}</svg>`;
}
