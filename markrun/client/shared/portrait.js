// Original chunky toon portrait of a runner (SVG string) from its randomised `look` + colours.
// Thick ink outlines, flat colours, big head. Unknown look values fall back gracefully.
const INK = '#14183c';
const SW = 5;

function hashStr(s) { let h = 2166136261; for (const c of String(s)) { h ^= c.charCodeAt(0); h = Math.imul(h, 16777619); } return h >>> 0; }
const HAIR_COLOURS = ['#2b1a10', '#5a3418', '#8a5a2b', '#d8a24a', '#1b1b1b', '#b8432a', '#9aa0a8'];

function shade(hex, f) {
  const n = parseInt(String(hex || '#888888').replace('#', '').padEnd(6, '8').slice(0, 6), 16);
  let r = (n >> 16) & 255, g = (n >> 8) & 255, b = n & 255;
  const t = f < 0 ? 0 : 255, p = Math.abs(f);
  r = Math.round((t - r) * p + r); g = Math.round((t - g) * p + g); b = Math.round((t - b) * p + b);
  return `#${((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1)}`;
}

export function runnerPortrait(runner, { size = 120, idSuffix = '' } = {}) {
  const look = runner?.look || {};
  const c1 = runner?.colour?.primary || '#ff4d5a';
  const c2 = runner?.colour?.secondary || '#ffffff';
  const skin = look.skin || '#f1c6a5';
  const h = hashStr(runner?.id + (runner?.nickname || ''));
  const hairCol = look.hairColour || look.hairColor || HAIR_COLOURS[h % HAIR_COLOURS.length];
  const build = look.build || 'compact';
  const shoulders = { stocky: 50, tall: 40, lanky: 34, compact: 42 }[build] ?? 42;
  const neck = { tall: 8, lanky: 10, stocky: 2, compact: 4 }[build] ?? 4;
  const headR = { compact: 31, stocky: 30, lanky: 28, tall: 29 }[build] ?? 30;
  const cx = 60, cy = 50 - neck / 2;
  const lane = runner?.lane ?? '';
  const clipId = `pc${h.toString(36)}${idSuffix}`;
  const parts = [];

  // background disc in team colour
  parts.push(`<defs><clipPath id="${clipId}"><circle cx="60" cy="60" r="56"/></clipPath></defs>`);
  parts.push(`<circle cx="60" cy="60" r="56" fill="${shade(c1, 0.55)}"/>`);
  parts.push(`<g clip-path="url(#${clipId})">`);
  parts.push(`<path d="M0 ${92} L120 ${70} L120 120 L0 120Z" fill="${shade(c1, 0.35)}" opacity=".6"/>`);
  // shoulders / vest
  const sy = cy + headR + neck - 4;
  parts.push(`<path d="M${cx - shoulders} 124 Q${cx - shoulders} ${sy + 6} ${cx - 14} ${sy} L${cx + 14} ${sy} Q${cx + shoulders} ${sy + 6} ${cx + shoulders} 124Z" fill="${c1}" stroke="${INK}" stroke-width="${SW}" stroke-linejoin="round"/>`);
  // sash stripe
  parts.push(`<path d="M${cx - 18} ${sy + 1} L${cx - 2} ${sy + 1} L${cx + 26} 124 L${cx + 8} 124Z" fill="${c2}" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>`);
  // race bib
  parts.push(`<rect x="${cx - 30}" y="${sy + 14}" width="22" height="17" rx="3" fill="#fff" stroke="${INK}" stroke-width="3" transform="rotate(-6 ${cx - 19} ${sy + 22})"/>`);
  parts.push(`<text x="${cx - 19}" y="${sy + 28}" font-family="Lilita One, Arial Black, sans-serif" font-size="14" text-anchor="middle" fill="${INK}" transform="rotate(-6 ${cx - 19} ${sy + 22})">${lane}</text>`);
  // neck
  parts.push(`<rect x="${cx - 9}" y="${cy + headR - 8}" width="18" height="${neck + 12}" fill="${skin}" stroke="${INK}" stroke-width="${SW}"/>`);
  if (look.accessory === 'medal') {
    parts.push(`<path d="M${cx - 12} ${sy} L${cx} ${sy + 22} L${cx + 12} ${sy}" fill="none" stroke="${c2}" stroke-width="6"/>`);
    parts.push(`<circle cx="${cx}" cy="${sy + 26}" r="9" fill="#ffcf3a" stroke="${INK}" stroke-width="4"/>`);
  }
  // hair behind head (long styles)
  const hair = look.hair || 'short';
  if (['long', 'ponytail', 'bob'].includes(hair)) {
    parts.push(`<path d="M${cx - headR - 4} ${cy} Q${cx - headR - 6} ${cy + headR + 14} ${cx - headR + 10} ${cy + headR + 10} L${cx + headR - 10} ${cy + headR + 10} Q${cx + headR + 6} ${cy + headR + 14} ${cx + headR + 4} ${cy}Z" fill="${hairCol}" stroke="${INK}" stroke-width="${SW}" stroke-linejoin="round"/>`);
  }
  if (hair === 'ponytail') parts.push(`<ellipse cx="${cx + headR + 6}" cy="${cy - 6}" rx="9" ry="16" fill="${hairCol}" stroke="${INK}" stroke-width="${SW}" transform="rotate(25 ${cx + headR + 6} ${cy - 6})"/>`);
  // ears + head
  parts.push(`<circle cx="${cx - headR + 1}" cy="${cy + 4}" r="7" fill="${skin}" stroke="${INK}" stroke-width="${SW}"/>`);
  parts.push(`<circle cx="${cx + headR - 1}" cy="${cy + 4}" r="7" fill="${skin}" stroke="${INK}" stroke-width="${SW}"/>`);
  parts.push(`<ellipse cx="${cx}" cy="${cy}" rx="${headR}" ry="${headR + 2}" fill="${skin}" stroke="${INK}" stroke-width="${SW}"/>`);
  // cheeks
  parts.push(`<ellipse cx="${cx - 16}" cy="${cy + 11}" rx="6" ry="4" fill="#ff8f8f" opacity=".45"/><ellipse cx="${cx + 16}" cy="${cy + 11}" rx="6" ry="4" fill="#ff8f8f" opacity=".45"/>`);

  // hair on top
  const top = cy - headR - 2;
  const hairTop = {
    short: `<path d="M${cx - headR + 2} ${cy - 6} Q${cx - headR} ${top - 4} ${cx} ${top - 2} Q${cx + headR} ${top - 4} ${cx + headR - 2} ${cy - 6} Q${cx + 8} ${cy - 18} ${cx - headR + 2} ${cy - 6}Z"/>`,
    buzz: `<path d="M${cx - headR + 3} ${cy - 8} Q${cx} ${top - 6} ${cx + headR - 3} ${cy - 8} Q${cx} ${cy - 20} ${cx - headR + 3} ${cy - 8}Z"/>`,
    curly: `<path d="M${cx - headR} ${cy - 2} q-6 -12 4 -18 q0 -12 14 -12 q6 -10 18 -4 q12 -4 16 8 q12 4 8 18 q-14 -8 -30 -6 q-16 0 -30 14z"/>`,
    afro: `<circle cx="${cx}" cy="${cy - 14}" r="${headR + 8}"/>`,
    mohawk: `<path d="M${cx - 6} ${cy - 14} L${cx - 8} ${top - 16} L${cx + 8} ${top - 16} L${cx + 6} ${cy - 14}Z"/>`,
    quiff: `<path d="M${cx - headR + 2} ${cy - 6} Q${cx - headR} ${top} ${cx - 4} ${top - 2} Q${cx + 20} ${top - 18} ${cx + headR + 4} ${top + 2} Q${cx + headR} ${cy - 8} ${cx + headR - 2} ${cy - 6} Q${cx + 8} ${cy - 18} ${cx - headR + 2} ${cy - 6}Z"/>`,
    bun: `<g><circle cx="${cx}" cy="${top - 6}" r="10"/><path d="M${cx - headR + 2} ${cy - 6} Q${cx - headR} ${top - 2} ${cx} ${top} Q${cx + headR} ${top - 2} ${cx + headR - 2} ${cy - 6} Q${cx} ${cy - 16} ${cx - headR + 2} ${cy - 6}Z"/></g>`,
    long: `<path d="M${cx - headR + 1} ${cy + 2} Q${cx - headR} ${top - 4} ${cx} ${top - 2} Q${cx + headR} ${top - 4} ${cx + headR - 1} ${cy + 2} Q${cx + 10} ${cy - 16} ${cx - 2} ${cy - 12} Q${cx - 14} ${cy - 16} ${cx - headR + 1} ${cy + 2}Z"/>`,
    bald: '',
  };
  hairTop.ponytail = hairTop.long; hairTop.bob = hairTop.long;
  const ht = hairTop[hair] ?? hairTop.short;
  if (ht) parts.push(`<g fill="${hairCol}" stroke="${INK}" stroke-width="${SW}" stroke-linejoin="round">${ht}</g>`);

  // face
  const face = look.face || 'grin';
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
      eyes = eye(cx - 11, true) + eye(cx + 11, true);
      mouth = `<ellipse cx="${cx + 2}" cy="${cy + 17}" rx="5" ry="4" fill="${INK}"/>`;
      break;
    case 'wink':
      eyes = eye(cx - 11, true) + eye(cx + 11);
      mouth = `<path d="M${cx - 11} ${cy + 12} Q${cx} ${cy + 24} ${cx + 11} ${cy + 12}Z" fill="#fff" stroke="${INK}" stroke-width="3.5" stroke-linejoin="round"/>`;
      break;
    case 'shocked': case 'surprised':
      mouth = `<ellipse cx="${cx}" cy="${cy + 17}" rx="6" ry="8" fill="${INK}"/>`;
      brows = `<path d="M${cx - 17} ${ey - 13} Q${cx - 11} ${ey - 17} ${cx - 5} ${ey - 13} M${cx + 17} ${ey - 13} Q${cx + 11} ${ey - 17} ${cx + 5} ${ey - 13}" fill="none" stroke="${INK}" stroke-width="3.5" stroke-linecap="round"/>`;
      break;
    default: // grin
      mouth = `<path d="M${cx - 13} ${cy + 11} Q${cx} ${cy + 27} ${cx + 13} ${cy + 11}Z" fill="#fff" stroke="${INK}" stroke-width="3.5" stroke-linejoin="round"/><path d="M${cx - 6} ${cy + 19} Q${cx} ${cy + 23} ${cx + 6} ${cy + 19}" fill="#ff6b7a"/>`;
  }
  parts.push(eyes, brows, mouth);
  // nose
  parts.push(`<path d="M${cx - 2} ${cy + 4} Q${cx + 3} ${cy + 8} ${cx - 1} ${cy + 10}" fill="none" stroke="${shade(skin, -0.35)}" stroke-width="3" stroke-linecap="round"/>`);

  // accessories on the face
  const acc = look.accessory;
  if (acc === 'sunglasses' || acc === 'shades') {
    parts.push(`<g stroke="${INK}" stroke-width="3.5"><rect x="${cx - 21}" y="${ey - 7}" width="17" height="12" rx="4" fill="${INK}"/><rect x="${cx + 4}" y="${ey - 7}" width="17" height="12" rx="4" fill="${INK}"/><path d="M${cx - 4} ${ey - 3} L${cx + 4} ${ey - 3}"/></g><path d="M${cx - 18} ${ey - 4} l5 0 M${cx + 7} ${ey - 4} l5 0" stroke="#fff" stroke-width="2.5" stroke-linecap="round"/>`);
  } else if (acc === 'glasses' || acc === 'specs') {
    parts.push(`<g stroke="${INK}" stroke-width="3.5" fill="rgba(255,255,255,.25)"><circle cx="${cx - 11}" cy="${ey}" r="8"/><circle cx="${cx + 11}" cy="${ey}" r="8"/><path d="M${cx - 3} ${ey} L${cx + 3} ${ey}"/></g>`);
  } else if (acc === 'moustache' || acc === 'mustache' || acc === 'tache') {
    parts.push(`<path d="M${cx} ${cy + 12} q-8 -6 -16 0 q6 6 16 0 q8 -6 16 0 q-6 6 -16 0z" fill="${hairCol}" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>`);
  } else if (acc === 'headphones' || acc === 'earbuds') {
    parts.push(`<path d="M${cx - headR - 2} ${cy + 2} Q${cx} ${top - 22} ${cx + headR + 2} ${cy + 2}" fill="none" stroke="${INK}" stroke-width="7"/><rect x="${cx - headR - 8}" y="${cy - 6}" width="12" height="20" rx="5" fill="${c2}" stroke="${INK}" stroke-width="4"/><rect x="${cx + headR - 4}" y="${cy - 6}" width="12" height="20" rx="5" fill="${c2}" stroke="${INK}" stroke-width="4"/>`);
  } else if (acc === 'whistle') {
    parts.push(`<path d="M${cx - 10} ${sy} Q${cx} ${sy + 18} ${cx + 10} ${sy}" fill="none" stroke="${c2}" stroke-width="3"/><rect x="${cx - 6}" y="${sy + 12}" width="14" height="8" rx="3" fill="#cfd8e8" stroke="${INK}" stroke-width="3"/>`);
  }

  // hats
  const hat = look.hat;
  if (hat === 'cap' || hat === 'baseball cap' || hat === 'trucker') {
    parts.push(`<path d="M${cx - headR + 1} ${cy - 8} Q${cx - headR + 2} ${top - 10} ${cx} ${top - 10} Q${cx + headR - 2} ${top - 10} ${cx + headR - 1} ${cy - 8}Z" fill="${c1}" stroke="${INK}" stroke-width="${SW}" stroke-linejoin="round"/>`);
    parts.push(`<path d="M${cx - 6} ${cy - 10} Q${cx + 24} ${cy - 18} ${cx + headR + 16} ${cy - 6} L${cx + headR - 2} ${cy - 4}Z" fill="${shade(c1, -0.2)}" stroke="${INK}" stroke-width="${SW}" stroke-linejoin="round"/>`);
    parts.push(`<circle cx="${cx}" cy="${top - 10}" r="3.5" fill="${c2}" stroke="${INK}" stroke-width="2.5"/>`);
  } else if (hat === 'beanie' || hat === 'bobble' || hat === 'bobble hat' || hat === 'woolly hat') {
    parts.push(`<path d="M${cx - headR} ${cy - 6} Q${cx - headR} ${top - 14} ${cx} ${top - 14} Q${cx + headR} ${top - 14} ${cx + headR} ${cy - 6}Z" fill="${c2}" stroke="${INK}" stroke-width="${SW}" stroke-linejoin="round"/>`);
    parts.push(`<rect x="${cx - headR - 2}" y="${cy - 12}" width="${headR * 2 + 4}" height="11" rx="5" fill="${c1}" stroke="${INK}" stroke-width="${SW}"/>`);
    parts.push(`<circle cx="${cx}" cy="${top - 16}" r="8" fill="${c1}" stroke="${INK}" stroke-width="${SW}"/>`);
  } else if (hat === 'headband' || hat === 'sweatband') {
    parts.push(`<path d="M${cx - headR} ${cy - 13} Q${cx} ${cy - 22} ${cx + headR} ${cy - 13} L${cx + headR + 1} ${cy - 4} Q${cx} ${cy - 13} ${cx - headR - 1} ${cy - 4}Z" fill="${c2}" stroke="${INK}" stroke-width="4" stroke-linejoin="round"/>`);
    parts.push(`<path d="M${cx + headR} ${cy - 9} l12 -4 l-2 10z" fill="${c2}" stroke="${INK}" stroke-width="3.5" stroke-linejoin="round"/>`);
  } else if (hat === 'visor') {
    parts.push(`<path d="M${cx - headR} ${cy - 12} Q${cx} ${cy - 20} ${cx + headR} ${cy - 12} L${cx + headR} ${cy - 5} Q${cx} ${cy - 12} ${cx - headR} ${cy - 5}Z" fill="${c1}" stroke="${INK}" stroke-width="4"/><path d="M${cx - 18} ${cy - 10} Q${cx + 4} ${cy - 2} ${cx + 30} ${cy - 10} L${cx + 20} ${cy - 15}Z" fill="${shade(c1, -0.2)}" stroke="${INK}" stroke-width="4" stroke-linejoin="round"/>`);
  } else if (hat === 'bucket' || hat === 'bucket hat' || hat === 'sun hat') {
    parts.push(`<path d="M${cx - headR - 12} ${cy - 6} L${cx - headR + 4} ${top - 8} Q${cx} ${top - 16} ${cx + headR - 4} ${top - 8} L${cx + headR + 12} ${cy - 6} Q${cx} ${cy - 14} ${cx - headR - 12} ${cy - 6}Z" fill="${c2}" stroke="${INK}" stroke-width="${SW}" stroke-linejoin="round"/>`);
  } else if (hat === 'party' || hat === 'party hat') {
    parts.push(`<path d="M${cx - 14} ${top + 4} L${cx + 4} ${top - 30} L${cx + 16} ${top + 2}Z" fill="${c1}" stroke="${INK}" stroke-width="${SW}" stroke-linejoin="round"/><circle cx="${cx + 4}" cy="${top - 32}" r="5" fill="${c2}" stroke="${INK}" stroke-width="3"/>`);
  } else if (hat === 'tophat' || hat === 'top hat') {
    parts.push(`<rect x="${cx - 18}" y="${top - 30}" width="36" height="30" rx="3" fill="${INK}"/><rect x="${cx - 18}" y="${top - 10}" width="36" height="7" fill="${c1}"/><rect x="${cx - 30}" y="${top - 2}" width="60" height="8" rx="4" fill="${INK}"/>`);
  } else if (hat === 'crown') {
    parts.push(`<path d="M${cx - 20} ${top + 2} L${cx - 22} ${top - 20} L${cx - 10} ${top - 8} L${cx} ${top - 24} L${cx + 10} ${top - 8} L${cx + 22} ${top - 20} L${cx + 20} ${top + 2}Z" fill="#ffcf3a" stroke="${INK}" stroke-width="4" stroke-linejoin="round"/>`);
  } else if (hat) { // unknown hat: generic coloured cap
    parts.push(`<path d="M${cx - headR + 1} ${cy - 8} Q${cx - headR + 2} ${top - 10} ${cx} ${top - 10} Q${cx + headR - 2} ${top - 10} ${cx + headR - 1} ${cy - 8}Z" fill="${c2}" stroke="${INK}" stroke-width="${SW}" stroke-linejoin="round"/>`);
  }
  parts.push('</g>');
  parts.push(`<circle cx="60" cy="60" r="56" fill="none" stroke="${INK}" stroke-width="6"/>`);
  return `<svg class="portrait" viewBox="0 0 120 120" width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">${parts.join('')}</svg>`;
}
