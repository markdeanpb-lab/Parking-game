// Shared engine for tools/text_export.mjs and tools/text_import.mjs.
// A small JavaScript/HTML scanner that finds every string literal (and the text inside HTML markup) in a source
// file, together with enough context to decide whether a player can see it. Read-only on game files.
import { createHash } from 'node:crypto';

// ---------------------------------------------------------------------------------------------------------------
// JavaScript tokenizer: strings, template literals (with nested ${...}), regexes, comments, brackets.
// ---------------------------------------------------------------------------------------------------------------
const KEYWORDS_BEFORE_EXPR = new Set(['return', 'typeof', 'case', 'do', 'else', 'in', 'of', 'new', 'delete', 'void', 'throw',
  'instanceof', 'yield', 'await', 'export', 'default', 'extends']);
const ID_START = /[A-Za-z_$À-￿]/;
const ID_PART = /[A-Za-z0-9_$À-￿]/;

export function scanJs(src) {
  const tokens = []; // {type, value, start, end, depth}
  const literals = []; // {kind, start, end, quasis:[{start,end}], exprs:[{start,end}], parent, stack, decl}
  const stack = []; // {ch, label, args, start}
  let decl = null; // top-level declaration name
  let pendingFn = null; // function name waiting for its body
  let lastAssign = null;
  let freshExpr = false;
  let i = 0;
  const n = src.length;
  const lastTok = () => tokens[tokens.length - 1];
  const regexAllowed = () => {
    const t = lastTok();
    if (!t || freshExpr) return true; // start of file or just after ${
    if (t.type === 'num' || t.type === 'str' || t.type === 'tpl' || t.type === 'regex') return false;
    if (t.type === 'id') return KEYWORDS_BEFORE_EXPR.has(t.value);
    if (t.type === 'punc') return !(t.value === ')' || t.value === ']' || t.value === '}');
    return true;
  };
  const push = (type, value, start, end) => { freshExpr = false; const t = { type, value, start, end, depth: stack.length }; tokens.push(t); return t; };
  const snapshot = () => stack.map((s) => ({ ch: s.ch, label: s.label, args: s.args }));

  function labelFor(open) {
    const t = lastTok();
    const t2 = tokens[tokens.length - 2];
    if (!t) return null;
    if (open === '(' && t.type === 'punc' && t.value === '?.' && t2?.type === 'id') return 'call:' + t2.value;
    if (open === '(') {
      if (t.type === 'id' && !['if', 'for', 'while', 'switch', 'catch', 'return', 'typeof', 'await', 'of', 'in'].includes(t.value)) {
        // member chain: a.b.c(
        let k = tokens.length - 1;
        const parts = [tokens[k].value];
        while (k >= 2 && tokens[k - 1].type === 'punc' && (tokens[k - 1].value === '.' || tokens[k - 1].value === '?.') && tokens[k - 2].type === 'id') {
          parts.unshift(tokens[k - 2].value);
          k -= 2;
        }
        if (k >= 1 && tokens[k - 1].type === 'id' && tokens[k - 1].value === 'function') return 'params:' + parts.join('.');
        return 'call:' + parts.join('.');
      }
      if (t.type === 'id' && t.value === 'function') return 'params:';
      return null;
    }
    if (t.type === 'punc' && t.value === ':' && t2 && (t2.type === 'id' || t2.type === 'str')) return 'key:' + (t2.type === 'str' ? t2.cooked : t2.value);
    if (t.type === 'punc' && t.value === '=' && t2 && t2.type === 'id') return 'var:' + t2.value;
    if (open === '{' && t.type === 'punc' && (t.value === ')' || t.value === '=>') && pendingFn) { const f = pendingFn; pendingFn = null; return 'fn:' + f; }
    return null;
  }

  function readString(q, start, parent) {
    let j = start + 1;
    while (j < n) {
      const c = src[j];
      if (c === '\\') { j += 2; continue; }
      if (c === q) break;
      if (c === '\n') throw new Error(`unterminated string at ${lineOf(src, start)}`);
      j++;
    }
    const end = j + 1;
    const lit = { kind: q, start, end, quasis: [{ start: start + 1, end: j }], exprs: [], parent, stack: snapshot(), decl };
    literals.push(lit);
    const t = push('str', src.slice(start, end), start, end);
    t.cooked = cookJs(src.slice(start + 1, j));
    t.lit = lit;
    return end;
  }

  function readTemplate(start, parent) {
    const lit = { kind: '`', start, end: -1, quasis: [], exprs: [], parent, stack: snapshot(), decl };
    literals.push(lit);
    const tok = push('tpl', '', start, -1);
    tok.lit = lit;
    let j = start + 1;
    let qs = j;
    while (j < n) {
      const c = src[j];
      if (c === '\\') { j += 2; continue; }
      if (c === '`') break;
      if (c === '$' && src[j + 1] === '{') {
        lit.quasis.push({ start: qs, end: j });
        const exprStart = j + 2;
        stack.push({ ch: '${', label: 'tpl', args: 0, start: j });
        freshExpr = true;
        const exprEnd = scanUntil(exprStart, '}', { lit, exprIndex: lit.exprs.length });
        stack.pop();
        lit.exprs.push({ start: exprStart, end: exprEnd });
        j = exprEnd + 1;
        qs = j;
        continue;
      }
      j++;
    }
    if (j >= n) throw new Error(`unterminated template at ${lineOf(src, start)}`);
    lit.quasis.push({ start: qs, end: j });
    lit.end = j + 1;
    tok.end = j + 1;
    tok.value = src.slice(start, j + 1);
    return j + 1;
  }

  // Scan tokens from `pos`; when `close` is given, stop at the matching unbalanced closer and return its index.
  function scanUntil(pos, close, parent) {
    const base = stack.length;
    i = pos;
    while (i < n) {
      const c = src[i];
      if (c === ' ' || c === '\t' || c === '\n' || c === '\r' || c === '﻿' || c === ' ') { i++; continue; }
      if (c === '/' && src[i + 1] === '/') { const e = src.indexOf('\n', i); i = e < 0 ? n : e; continue; }
      if (c === '/' && src[i + 1] === '*') { const e = src.indexOf('*/', i + 2); if (e < 0) throw new Error('unterminated comment'); i = e + 2; continue; }
      if (c === '#' && i === 0 && src[1] === '!') { const e = src.indexOf('\n'); i = e < 0 ? n : e; continue; }
      if (c === "'" || c === '"') { i = readString(c, i, parent); continue; }
      if (c === '`') { i = readTemplate(i, parent); continue; }
      if (c === '/' && regexAllowed()) {
        let j = i + 1, inClass = false;
        while (j < n) {
          const d = src[j];
          if (d === '\\') { j += 2; continue; }
          if (d === '\n') throw new Error(`bad regex at ${lineOf(src, i)}`);
          if (inClass) { if (d === ']') inClass = false; } else if (d === '[') inClass = true; else if (d === '/') break;
          j++;
        }
        j++;
        while (j < n && /[a-z]/.test(src[j])) j++;
        push('regex', src.slice(i, j), i, j);
        i = j;
        continue;
      }
      if (/[0-9]/.test(c) || (c === '.' && /[0-9]/.test(src[i + 1]))) {
        let j = i + 1;
        while (j < n && /[0-9a-zA-Z_.]/.test(src[j])) { if ((src[j] === 'e' || src[j] === 'E') && (src[j + 1] === '-' || src[j + 1] === '+')) j++; j++; }
        push('num', src.slice(i, j), i, j);
        i = j;
        continue;
      }
      if (ID_START.test(c)) {
        let j = i + 1;
        while (j < n && ID_PART.test(src[j])) j++;
        const w = src.slice(i, j);
        const prev = lastTok();
        if (stack.length === 0 && ['const', 'let', 'var', 'function', 'class'].includes(prev?.value)) decl = w;
        else if (stack.length === 0 && prev?.value === 'function' ) decl = w;
        if (prev?.value === 'function' || (prev?.value === '*' && tokens[tokens.length - 2]?.value === 'function')) pendingFn = w;
        push('id', w, i, j);
        i = j;
        continue;
      }
      // punctuators
      if (c === '(' || c === '[' || c === '{') {
        const label = labelFor(c);
        push('punc', c, i, i + 1);
        stack.push({ ch: c, label, args: 0, start: i });
        i++;
        continue;
      }
      if (c === ')' || c === ']' || c === '}') {
        if (stack.length === base && close === c) return i;
        if (stack.length <= base) throw new Error(`unbalanced ${c} at ${lineOf(src, i)}`);
        stack.pop();
        push('punc', c, i, i + 1);
        i++;
        continue;
      }
      const three = src.slice(i, i + 4);
      const op = ['>>>=', '===', '!==', '**=', '...', '<<=', '>>=', '>>>', '&&=', '||=', '??=', '=>', '==', '!=', '<=', '>=', '&&', '||', '??', '?.', '++', '--', '+=', '-=', '*=', '/=', '%=', '&=', '|=', '^=', '**', '<<', '>>']
        .find((o) => three.startsWith(o)) || c;
      if (op === ',' && stack.length) stack[stack.length - 1].args++;
      const t = push('punc', op, i, i + op.length);
      if (op === '=' && tokens[tokens.length - 2]?.type === 'id') lastAssign = tokens[tokens.length - 2].value;
      if (op === ':' && tokens[tokens.length - 2]?.type === 'id') lastAssign = tokens[tokens.length - 2].value;
      if (op === '=>' && lastAssign && !pendingFn) pendingFn = lastAssign;
      if (op === ';' && stack.length === 0) { lastAssign = null; }
      void t;
      i += op.length;
    }
    if (close) throw new Error(`missing ${close}`);
    return n;
  }

  scanUntil(0, null, null);
  tokens.sort((a, b) => a.start - b.start);
  return { tokens, literals };
}

export function lineOf(src, pos) {
  let l = 1;
  for (let k = 0; k < pos && k < src.length; k++) if (src.charCodeAt(k) === 10) l++;
  return l;
}

// JS escape sequences -> characters.
export function cookJs(raw) {
  return raw.replace(/\\(u\{[0-9a-fA-F]+\}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{2}|\r\n|[\s\S])/g, (m, e) => {
    if (e[0] === 'u' && e[1] === '{') return String.fromCodePoint(parseInt(e.slice(2, -1), 16));
    if (e[0] === 'u' && e.length === 5) return String.fromCharCode(parseInt(e.slice(1), 16));
    if (e[0] === 'x' && e.length === 3) return String.fromCharCode(parseInt(e.slice(1), 16));
    if (e === '\n' || e === '\r\n') return '';
    return { n: '\n', t: '\t', r: '\r', b: '\b', f: '\f', v: '\v', 0: '\0' }[e] ?? e;
  });
}
// characters -> source text for a literal of quote style q
export function encodeJs(text, q) {
  let s = text.replace(/\\/g, '\\\\').replace(/\n/g, '\\n').replace(/\r/g, '\\r').replace(/\t/g, '\\t');
  if (q === '`') s = s.replace(/`/g, '\\`').replace(/\$\{/g, '\\${');
  else s = s.split(q).join('\\' + q);
  return s;
}

// ---------------------------------------------------------------------------------------------------------------
// HTML entities
// ---------------------------------------------------------------------------------------------------------------
const ENT = { amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: ' ', middot: '·', times: '×', hellip: '…', mdash: '—', ndash: '–',
  rsquo: '’', lsquo: '‘', rdquo: '”', ldquo: '“', pound: '£', deg: '°', copy: '©', larr: '←', rarr: '→', uarr: '↑', darr: '↓', bull: '•', minus: '−', plusmn: '±', thinsp: ' ' };
export function decodeEntities(s) {
  return s.replace(/&(#x[0-9a-fA-F]+|#[0-9]+|[a-zA-Z]+);/g, (m, e) => {
    if (e[0] === '#') return String.fromCodePoint(e[1] === 'x' || e[1] === 'X' ? parseInt(e.slice(2), 16) : parseInt(e.slice(1), 10));
    return ENT[e] ?? m;
  });
}
export const encodeHtmlText = (s) => s.replace(/&/g, '&amp;').replace(/ /g, '&nbsp;');
export const encodeHtmlAttr = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/ /g, '&nbsp;');

// ---------------------------------------------------------------------------------------------------------------
// Markup scanning over a "stream" of characters and opaque expression tokens.
// stream: array of {ch, pos} | {expr: index, start, end}. Returns text runs and attribute values.
// ---------------------------------------------------------------------------------------------------------------
export const INLINE_TAGS = new Set(['b', 'strong', 'i', 'em', 'u', 'small', 'sup', 'sub', 'br', 'kbd', 'mark', 's']);
export const TEXT_ATTRS = new Set(['title', 'placeholder', 'aria-label', 'alt', 'data-tip', 'data-label', 'data-confirm', 'label']);
const RAW_TEXT_TAGS = new Set(['script', 'style', 'svg', 'textarea', 'template-x']);

export function looksLikeMarkup(text) {
  return /<\/?[a-zA-Z][\w-]*[\s>/]|<[a-zA-Z][\w-]*$|<!--/.test(text) || /^\s*(["'][^<>]*)?\/?>/.test(text) && /<|^\s*["']?\s*>/.test(text);
}

// Scan markup; `items` is an array where each element is a char ({c, pos}) or an expression ({x, start, end}).
// Returns spans: {kind:'text'|'attr', attr?, startPos, endPos, tag} where startPos/endPos are source positions
// (startPos of the first item, endPos = end of the last item).
export function scanMarkup(items, { startInTag = false } = {}) {
  const out = [];
  const exprCtx = {}; // expression index -> {inTag, attr}
  out.exprCtx = exprCtx;
  const N = items.length;
  const isC = (k, ch) => k < N && items[k].c === ch;
  const tagNameAt = (k) => { // k at '<'
    let j = k + 1; let close = false;
    if (isC(j, '/')) { close = true; j++; }
    let name = '';
    while (j < N && items[j].c != null && /[A-Za-z0-9-]/.test(items[j].c)) { name += items[j].c; j++; }
    return { name: name.toLowerCase(), close, after: j };
  };
  // find end of tag starting at '<' (k); returns index after '>' and the attribute spans
  const parseTag = (k) => {
    const { name, after } = tagNameAt(k);
    let j = after;
    const attrs = [];
    let hasAttr = false;
    while (j < N) {
      const it = items[j];
      if (it.c === '>') { j++; break; }
      if (it.x != null) { hasAttr = true; exprCtx[it.x] = { inTag: true, attr: null }; j++; continue; }
      if (/\s/.test(it.c) || it.c === '/') { j++; continue; }
      // attribute name
      let an = '';
      while (j < N && items[j].c != null && !/[\s=>/]/.test(items[j].c)) { an += items[j].c; j++; }
      if (!an && j < N && items[j].x != null) continue;
      if (!an) { j++; continue; }
      hasAttr = true;
      if (isC(j, '=')) {
        j++;
        const q = items[j]?.c === '"' || items[j]?.c === "'" ? items[j].c : null;
        if (q) {
          j++;
          const vs = j;
          while (j < N && !isC(j, q)) { if (items[j].x != null) exprCtx[items[j].x] = { inTag: true, attr: an.toLowerCase() }; j++; }
          attrs.push({ name: an.toLowerCase(), from: vs, to: j });
          j++;
        } else {
          const vs = j;
          while (j < N && !(items[j].c != null && /[\s>]/.test(items[j].c))) { if (items[j].x != null) exprCtx[items[j].x] = { inTag: true, attr: an.toLowerCase() }; j++; }
          attrs.push({ name: an.toLowerCase(), from: vs, to: j });
        }
      }
    }
    return { name, end: j, attrs, hasAttr };
  };
  let k = 0;
  let runStart = -1;
  let curTag = null;
  const tagStack = [];
  let runTags = [];
  const flush = (endK) => {
    if (runStart < 0) return;
    // split the run at inline tags that are not matched inside it (e.g. "{stake}</b> wins" -> "{stake}", "wins")
    const all = runTags.filter((t) => t.from >= runStart && t.to <= endK).sort((x, y) => x.from - y.from);
    const open = [], unmatched = new Set();
    for (const t of all) {
      if (t.name === 'br') continue;
      if (!t.close) open.push(t);
      else { const k = open.map((x) => x.name).lastIndexOf(t.name); if (k < 0) unmatched.add(t); else open.splice(k, 1); }
    }
    for (const t of open) unmatched.add(t);
    const segs = [];
    let s0 = runStart;
    for (const t of all) if (unmatched.has(t)) { segs.push([s0, t.from - 1]); s0 = t.to; }
    segs.push([s0, endK - 1]);
    for (const [sa, sb] of segs) {
      let a = sa, b = sb;
      const ws = () => {
        while (a <= b && items[a].c != null && /\s/.test(items[a].c)) a++;
        while (b >= a && items[b].c != null && /\s/.test(items[b].c)) b--;
      };
      ws();
      // strip <br>, empty pairs (<i></i>) and a wrapping pair (<small>ODDS</small>) at the edges
      for (let guard = 0; guard < 8 && a <= b; guard++) {
        const inRun = all.filter((t) => t.from >= a && t.to - 1 <= b);
        const head = inRun.find((t) => t.from === a);
        const tail = inRun.find((t) => t.to - 1 === b);
        const n = (nm, close) => inRun.filter((t) => t.name === nm && t.close === close).length;
        if (head && head.name === 'br') { a = head.to; ws(); continue; }
        if (tail && tail.name === 'br') { b = tail.from - 1; ws(); continue; }
        const emptyClose = head && !head.close && inRun.find((t) => t.from === head.to && t.close && t.name === head.name);
        if (emptyClose) { a = emptyClose.to; ws(); continue; }
        if (head && tail && head !== tail && !head.close && tail.close && head.name === tail.name && n(head.name, false) === 1 && n(head.name, true) === 1) { a = head.to; b = tail.from - 1; ws(); continue; }
        break;
      }
      if (a <= b) out.push({ kind: 'text', from: a, to: b + 1, tag: tagStack.at(-1) || null });
    }
    runStart = -1;
    runTags = [];
  };
  if (startInTag) {
    // the literal starts in the middle of a tag (e.g. '" title="Hello">'): skip to the first '>'
    while (k < N && !isC(k, '>')) k++;
    k++;
  }
  while (k < N) {
    const it = items[k];
    if (it.c === '<' && k + 1 < N && items[k + 1].c != null && /[A-Za-z/!]/.test(items[k + 1].c)) {
      if (isC(k + 1, '!')) { // comment / doctype
        let j = k + 2;
        while (j < N && !(isC(j, '>') && (items[j - 1]?.c === '-' || !isC(k + 2, '-')))) j++;
        flush(k);
        k = j + 1;
        continue;
      }
      const { name, close } = tagNameAt(k);
      const tag = parseTag(k);
      const inline = INLINE_TAGS.has(name) && !tag.hasAttr;
      if (inline && runStart >= 0) { runTags.push({ from: k, to: tag.end, name, close }); k = tag.end; continue; } // inline formatting stays inside the text run
      if (inline && runStart < 0 && !close) { runStart = k; runTags = [{ from: k, to: tag.end, name, close }]; k = tag.end; continue; }
      flush(k);
      for (const a of tag.attrs) if (TEXT_ATTRS.has(a.name) && a.to > a.from) out.push({ kind: 'attr', attr: a.name, from: a.from, to: a.to, tag: name });
      if (!close && !tag.hasVoid && !['br', 'img', 'input', 'meta', 'link', 'hr', 'source', 'wbr'].includes(name)) tagStack.push(name);
      else if (close) { const ix = tagStack.lastIndexOf(name); if (ix >= 0) tagStack.length = ix; }
      k = tag.end;
      curTag = name;
      if (!close && RAW_TEXT_TAGS.has(name)) { // skip to </name>
        let j = k;
        while (j < N) {
          if (isC(j, '<') && isC(j + 1, '/')) { const t2 = tagNameAt(j); if (t2.name === name) break; }
          j++;
        }
        k = j;
      }
      continue;
    }
    if (runStart < 0 && !(it.c != null && /\s/.test(it.c))) runStart = k;
    k++;
  }
  flush(N);
  void curTag;
  return out;
}

// ---------------------------------------------------------------------------------------------------------------
// Units: the editable pieces. A unit is either a whole JS literal, a text run / attribute inside a JS literal that
// holds markup, or a text run / attribute in an .html file.
// ---------------------------------------------------------------------------------------------------------------
export function hashOf(s, len = 5) { return createHash('sha1').update(s).digest('hex').slice(0, len); }

// placeholder name from an expression's source: `${esc(r.nickname)}` -> nickname, `${n === 1 ? '' : 's'}` -> s
const WRAPPERS = new Set(['esc', 'String', 'Number', 'cap', 'round', 'floor', 'ceil', 'abs', 'trim', 'toUpperCase', 'toLowerCase', 'Math.round', 'Math.abs', 'Math.floor', 'Math.ceil', 'parseInt', 'parseFloat', 'toFixed', 'toLocaleString']);
const FORMATTERS = { money: null, signedMoney: null, moneySay: null, fmtTime: 'time', fmt: 'time', ordinal: 'ordinal', ordinalHtml: 'ordinal', words: 'number', spokenOdds: 'odds', oddsText: 'odds', km: 'km', aOrAn: 'aOrAn', plural: null, pluralW: null, daysAgo: 'when', daysAhead: 'when', avatarHtml: 'avatar', runnerPortrait: 'portrait', portrait: 'portrait', ordinalSuffix: 'suffix', list: 'names', join: 'list' };
const NOT_NAMES = new Set(['this', 'length', 'map', 'filter', 'slice', 'at', 'join', 'find', 'some', 'every', 'Math', 'Object', 'Array', 'JSON', 'true', 'false', 'null', 'undefined', 'new', 'typeof', 'S', 'st', 'me', 'res', 'pub', 'round', 'i', 'k', 'x', 'e', 'c', 'd', 'o', 'v', 't', 'm', 'p', 'r', 'b', 'a', 'f', 'g', 'n', 's', 'l', 'u', 'w', 'y', 'z', 'q', 'h', 'j', 'idx', 'it', 'el', 'arr', 'obj', 'val', 'tmp', 'toFixed', 'toUpperCase', 'toLowerCase', 'toLocaleString', 'trim', 'replace', 'padStart', 'esc', 'String', 'Number']);
function lastSeg(chain) { const parts = chain.replace(/\[[^\]]*\]/g, '').split(/\??\./).filter(Boolean); for (let k = parts.length - 1; k >= 0; k--) if (!NOT_NAMES.has(parts[k])) return parts[k]; return parts.at(-1) || null; }
export function placeholderName(expr) {
  if (/(===?\s*1\s*\?\s*(''|"")\s*:\s*['"]s['"])|(!==?\s*1\s*\?\s*['"]s['"]\s*:\s*(''|""))|>\s*1\s*\?\s*['"]s['"]/.test(expr)) return 'plural';
  let e = expr.trim().replace(/'(?:\\.|[^'\\])*'|"(?:\\.|[^"\\])*"|`(?:\\.|[^`\\])*`/g, (m) => (m.length > 2 ? `${m[0]}x${m[0]}` : m));
  for (let guard = 0; guard < 6; guard++) { // peel wrappers: esc(x), String(x), (x), x.toUpperCase()
    const w = e.match(/^([A-Za-z_$][\w$.]*)\(([\s\S]*)\)$/);
    if (w && WRAPPERS.has(w[1]) && balanced(w[2])) { e = w[2].trim(); continue; }
    if (/^\(([\s\S]*)\)$/.test(e) && balanced(e.slice(1, -1))) { e = e.slice(1, -1).trim(); continue; }
    const m = e.match(/^([\s\S]*?)\.(toUpperCase|toLowerCase|trim|toFixed|toLocaleString)\([^()]*\)$/);
    if (m) { e = m[1].trim(); continue; }
    break;
  }
  if (/^[A-Za-z_$][\w$]*((\??\.)[A-Za-z_$][\w$]*|\[[^\]]+\])*$/.test(e)) return lastSeg(e);
  if (/(===?\s*1\s*\?\s*(''|"")\s*:\s*['"]s['"])|(!==?\s*1\s*\?\s*['"]s['"]\s*:\s*(''|""))|>\s*1\s*\?\s*['"]s['"]/.test(e)) return 'plural';
  // cond ? 'text' : ''  -> {extra};  cond ? 'A' : 'B' -> {choice}
  if (/\?(?!\.)[\s\S]*:/.test(e) && /['"`]/.test(e)) {
    if (/:\s*(''|""|``)\s*$/.test(e) || /\?\s*(''|""|``)\s*:/.test(e)) return 'extra';
    if (/\?\s*['"`][\s\S]*:\s*['"`][\s\S]*['"`]\s*$/.test(e)) return 'choice';
  }
  const call = e.match(/^([A-Za-z_$][\w$.]*)\(([\s\S]*)\)$/);
  if (call && balanced(call[2])) {
    const fn = call[1].split('.').at(-1);
    if (fn === 'at' && /^-1$/.test(call[2].trim())) return 'last';
    if (fn === 'join') return 'list';
    const firstArg = call[2].split(',')[0].trim();
    const argName = /^[A-Za-z_$][\w$.?\[\]]*$/.test(firstArg) ? lastSeg(firstArg) : null;
    if (fn in FORMATTERS) return FORMATTERS[fn] || (argName && argName.length > 1 ? argName : 'amount');
    return fn;
  }
  // ternary / logical: name after the first operand
  const first = e.split(/\s*(\?\?|\|\||&&|\?(?!\.)|===|!==|==|!=|>=|<=|>|<|\+|-|\*|\/)\s*/)[0];
  if (first && first !== e) { const nm = placeholderName(first); if (nm) return nm; }
  const ids = [...e.matchAll(/[A-Za-z_$][\w$]*(?:\??\.[A-Za-z_$][\w$]*)*/g)].map((m) => lastSeg(m[0])).filter((x) => x && !NOT_NAMES.has(x));
  return ids[0] || null;
}
function balanced(s) { let d = 0; for (const ch of s) { if (ch === '(') d++; else if (ch === ')') { d--; if (d < 0) return false; } } return d === 0; }

export function sanitizeName(s) { return String(s || 'x').replace(/[^A-Za-z0-9_]/g, '').replace(/^[0-9]+/, '') || 'x'; }

// Collect the "items" stream for a slice [from,to) of a JS literal (chars of quasis + expression tokens).
function itemsForLiteral(src, lit) {
  const items = [];
  lit.quasis.forEach((q, qi) => {
    const raw = src.slice(q.start, q.end);
    // cook per escape so positions survive: walk raw, map escape sequences to their char at the escape's start
    let j = 0;
    while (j < raw.length) {
      if (raw[j] === '\\') {
        const m = raw.slice(j).match(/^\\(u\{[0-9a-fA-F]+\}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{2}|\r\n|[\s\S])/);
        const ck = cookJs(m[0]);
        items.push({ c: ck || '', pos: q.start + j, end: q.start + j + m[0].length, esc: true });
        j += m[0].length;
        continue;
      }
      items.push({ c: raw[j], pos: q.start + j, end: q.start + j + 1 });
      j++;
    }
    if (qi < lit.exprs.length) items.push({ x: qi, pos: lit.exprs[qi].start - 2, end: lit.exprs[qi].end + 1 });
  });
  return items;
}

// Build the display text + placeholder map for items[from..to)
function textFromItems(src, items, from, to, { html, existingBraces = '' }) {
  let text = '';
  const ph = {}; // name -> expression source
  const used = new Set();
  for (const m of existingBraces.matchAll(/\{([A-Za-z_][\w]*)\}/g)) used.add(m[1]);
  let rawChars = '';
  const flushChars = () => { if (rawChars) { text += html ? decodeEntities(rawChars) : rawChars; rawChars = ''; } };
  for (let k = from; k < to; k++) {
    const it = items[k];
    if (it.x != null) {
      flushChars();
      const exprSrc = src.slice(it.pos + 2, it.end - 1);
      let base = sanitizeName(placeholderName(exprSrc) || 'value');
      let nm = base;
      let c = 2;
      while (used.has(nm) && ph[nm] !== exprSrc) nm = base + c++;
      used.add(nm);
      ph[nm] = exprSrc;
      text += `{${nm}}`;
    } else rawChars += it.c;
  }
  flushChars();
  return { text, ph };
}

// Cooked text of a whole literal with ${} -> {name}
function literalText(src, lit) {
  const items = itemsForLiteral(src, lit);
  const allChars = items.filter((x) => x.c != null).map((x) => x.c).join('');
  return { items, ...textFromItems(src, items, 0, items.length, { html: false, existingBraces: allChars }) };
}

// Extract all units from a JS source (no filtering). Each unit:
// {file, kind:'js'|'js-html'|'html', quote, start, end, raw, text, lead, trail, ph, lit, attr, line}
export function extractJsUnits(src, file) {
  const { tokens, literals } = scanJs(src);
  const units = [];
  for (const lit of literals) {
    // where does this literal sit inside its parent template? (e.g. inside class="${...}")
    const pc = lit.parent?.lit?.exprCtx?.[lit.parent.exprIndex];
    lit.inAttr = pc ? (pc.attr || '(tag)') : (lit.parent?.lit?.inAttr ?? null);
    const { items, text } = literalText(src, lit);
    const charText = items.filter((x) => x.c != null).map((x) => x.c).join('');
    const markup = looksLikeMarkup(charText);
    if (markup) {
      const startInTag = /^[^<]*>/.test(charText) && !/^\s*</.test(charText) && /^\s*[\w-]*=?["']?[^<]*["']?\s*\/?>/.test(charText) && /^[^<]*["']\s*\/?>/.test(charText);
      const spans = scanMarkup(items, { startInTag });
      lit.exprCtx = spans.exprCtx;
      for (const sp of spans) {
        const start = items[sp.from].pos;
        const end = items[sp.to - 1].end;
        const { text: t, ph } = textFromItems(src, items, sp.from, sp.to, { html: true, existingBraces: charText });
        units.push({ file, kind: 'js-html', quote: lit.kind, attr: sp.kind === 'attr' ? sp.attr : null, tag: sp.tag, start, end, raw: src.slice(start, end), text: t, lead: '', trail: '', ph, lit, items, from: sp.from, to: sp.to, html: true });
      }
      units.push({ file, kind: 'js-markup', quote: lit.kind, start: lit.start, end: lit.end, raw: src.slice(lit.start, lit.end), text, lit, markupOnly: true });
      continue;
    }
    const lead = text.match(/^\s*/)[0];
    const trail = text.slice(lead.length).match(/\s*$/)[0];
    const core = text.slice(lead.length, text.length - trail.length);
    const { ph } = textFromItems(src, items, 0, items.length, { html: false, existingBraces: charText });
    units.push({ file, kind: 'js', quote: lit.kind, start: lit.start, end: lit.end, raw: src.slice(lit.start, lit.end), text: core, lead, trail, ph, lit, items, from: 0, to: items.length, html: false });
  }
  return { units, tokens, literals };
}

// HTML file: text runs and attributes outside <script>/<style>. Inline <script type=module> blocks are scanned as JS.
export function extractHtmlUnits(src, file) {
  const items = [];
  for (let k = 0; k < src.length; k++) items.push({ c: src[k], pos: k, end: k + 1 });
  const spans = scanMarkup(items);
  const units = [];
  for (const sp of spans) {
    const start = sp.from, end = sp.to;
    const raw = src.slice(start, end);
    units.push({ file, kind: 'html', quote: sp.kind === 'attr' ? 'attr' : 'html', attr: sp.kind === 'attr' ? sp.attr : null, tag: sp.tag, start, end, raw, text: decodeEntities(raw), lead: '', trail: '', ph: {}, html: true, items, from: sp.from, to: sp.to });
  }
  return { units };
}

// ---------------------------------------------------------------------------------------------------------------
// Context helpers used by the classifier
// ---------------------------------------------------------------------------------------------------------------
export function tokenIndexAt(tokens, pos) { // first token with start >= pos
  let lo = 0, hi = tokens.length;
  while (lo < hi) { const mid = (lo + hi) >> 1; if (tokens[mid].start < pos) lo = mid + 1; else hi = mid; }
  return lo;
}
export function contextOf(scan, lit) {
  const { tokens } = scan;
  const ti = tokenIndexAt(tokens, lit.start); // the literal's own token
  // previous significant token (outside this literal)
  let pi = ti - 1;
  while (pi >= 0 && tokens[pi].end > lit.start) pi--;
  const prev = tokens[pi];
  const prev2 = tokens[pi - 1];
  const ni = tokenIndexAt(tokens, lit.end);
  const next = tokens[ni];
  const next2 = tokens[ni + 1];
  const st = lit.stack;
  const keys = st.map((s) => s.label).filter(Boolean);
  const inner = st.at(-1);
  let key = null;
  const prev3 = tokens[pi - 2];
  if (prev && prev.value === ':' && prev2 && (prev2.type === 'id' || prev2.type === 'str') && prev3 && (prev3.value === '{' || prev3.value === ',')) key = prev2.type === 'str' ? prev2.cooked : prev2.value;
  let assigned = null;
  if (prev && (prev.value === '=' || prev.value === '+=') && prev2?.type === 'id') assigned = prev2.value;
  if (prev && prev.value === '=' && prev2?.value === ']') assigned = '[]';
  // member being assigned: el.textContent = '...'
  let member = null;
  if (prev && (prev.value === '=' || prev.value === '+=' || prev.value === '||=' || prev.value === '??=')) { // a.b.c = '...'
    const parts = [];
    let k = pi - 1;
    while (k >= 0 && tokens[k].type === 'id') { parts.unshift(tokens[k].value); if (tokens[k - 1]?.value === '.' || tokens[k - 1]?.value === '?.') k -= 2; else break; }
    if (parts.length > 1) member = parts.join('.');
  }
  const calls = st.filter((s) => s.label?.startsWith('call:')).map((s) => s.label.slice(5));
  const innerCall = inner?.label?.startsWith('call:') && inner.ch === '(' ? inner.label.slice(5) : null;
  const argIndex = inner ? inner.args : 0;
  return { prev, prev2, next, next2, keys, key, assigned, member, calls, innerCall, argIndex, inner, decl: lit.decl, stack: st };
}

// ---------------------------------------------------------------------------------------------------------------
// Classifier: is this unit text a player can see or hear?
// Generic rules first, then the per-file overrides in RULES (tools/text_rules.mjs).
// Returns {include: bool, why: string}
// ---------------------------------------------------------------------------------------------------------------
// calls whose string arguments are never shown to a player (selectors, storage keys, events, sounds, SQL, logs...)
const BLOCK_CALL_LIST = [
  'console\\..*', '.*\\.addEventListener', '.*\\.removeEventListener', '.*querySelector(All)?', '\\$', '\\$\\$', '.*getElementById', '.*classList\\..*', '.*\\.toggle',
  '.*getAttribute', '.*removeAttribute', '.*hasAttribute', '.*setAttribute', '.*createElement(NS)?', '.*matchMedia', 'fetch', '.*\\.get', '.*\\.has', '.*\\.delete', '.*Storage\\..*',
  'store\\..*', '.*\\.includes', '.*\\.startsWith', '.*\\.endsWith', '.*\\.indexOf', '.*\\.lastIndexOf', '.*\\.split', '.*\\.match', '.*\\.matchAll', '.*\\.test', '.*\\.padStart',
  '.*\\.padEnd', '.*\\.on', '.*\\.once', '.*\\.off', '.*\\.emit', '.*\\.closest', '.*\\.matches', 'require', 'import', '.*\\.postMessage', 'Symbol', '.*\\.getContext',
  '.*\\.setProperty', '.*\\.getPropertyValue', '.*\\.play', '.*\\.stop', '.*\\.prepare', '.*\\.exec', '.*\\.pragma', '.*\\.writeHead', '.*\\.setHeader', '.*\\.listen',
  'path\\..*', 'join', 'resolve', 'readFileSync', 'writeFileSync', 'existsSync', 'mkdirSync', 'URL', '.*\\.searchParams\\..*', '.*\\.dispatchEvent', 'CustomEvent', 'Event',
  '.*\\.getItem', '.*\\.setItem', '.*\\.removeItem', '.*\\.getExtension', '.*\\.getObjectByName', 'Worker', 'Error', 'TypeError', 'RangeError', 'RegExp', 'Set', 'Map',
  'pickLine', 'pickLineId', 'pickFun', 'line', 'mem\\..*', 'log', 'warn', 'debugLog', '.*\\.log', '.*\\.warn', '.*\\.error', '.*\\.info', '.*\\.debug', '.*\\.trace'];
const BLOCK_CALLS = new RegExp(`^(${BLOCK_CALL_LIST.join('|')})$`);
// object keys whose values are code-ish even when they contain spaces
const BLOCK_KEYS = new Set(['t', 'type', 'kind', 'key', 'id', 'code', 'cls', 'className', 'class', 'colour', 'color', 'primary', 'secondary', 'src', 'href', 'url', 'path', 'file',
  'mime', 'contentType', 'easing', 'cursor', 'display', 'position', 'background', 'border', 'transform', 'transition', 'animation', 'filter', 'font', 'fontFamily', 'fontWeight',
  'textAlign', 'textBaseline', 'style', 'sql', 'query', 'shadow', 'boxShadow', 'gradient', 'fill', 'stroke']);
const CSSISH = /^(-?\d|#[0-9a-f]{3,8}\b|rgba?\(|hsla?\(|url\(|translate|rotate|scale|matrix|linear-gradient|radial-gradient|cubic-bezier|calc\(|var\(--)/i;
const ALLCAPS_WORD = /^[A-Z][A-Z0-9_]*$/;
// ALL-CAPS words that are code constants (game phases etc.), never shown as text
const CODE_CAPS = new Set(['LOBBY', 'INTRO', 'BETTING', 'RACE', 'RESULTS', 'SCOREBOARD', 'FINALE', 'ABCDEFGHJKLMNPQRSTUVWXYZ', 'GET', 'POST', 'HEAD', 'IPv4', 'IPv6', 'UTF-8', 'OK']);

export function genericClassify(u, ctx) {
  const plain = u.text.replace(/\{[A-Za-z_]\w*\}/g, '').replace(/<\/?[a-zA-Z][^>]*>/g, '');
  if (!/[A-Za-z]/.test(plain)) return { include: false, why: 'no words' };
  if (u.kind === 'html' || u.kind === 'js-html') {
    if (u.kind === 'html' && u.attr == null && /^[\w.-]+\.(js|css|json|png|svg)$/.test(u.text)) return { include: false, why: 'file name' };
    if (/^(https?:|wss?:)\/\/\S+$/.test(u.text)) return { include: false, why: 'example URL' };
    return { include: true, why: 'markup text' };
  }
  if (!ctx) return { include: true, why: 'no ctx' };
  const { prev, next, key, innerCall, argIndex } = ctx;
  if (u.lit?.inAttr && !TEXT_ATTRS.has(u.lit.inAttr)) return { include: false, why: `inside html attribute ${u.lit.inAttr}` };
  if (ctx.member && /(^|\.)(style|dataset|className|id|src|href|classList)(\.|$)/.test(ctx.member)) return { include: false, why: `assigned to ${ctx.member}` };
  if (prev && (prev.value === 'from' || prev.value === 'import')) return { include: false, why: 'import' };
  if (next && next.value === ':' && prev && (prev.value === '{' || prev.value === ',')) return { include: false, why: 'object key' };
  if (prev && ['===', '!==', '==', '!=', 'case', 'typeof'].includes(prev.value)) return { include: false, why: 'comparison' };
  if (next && ['===', '!==', '==', '!='].includes(next.value)) return { include: false, why: 'comparison' };
  if (next && next.value === 'in') return { include: false, why: 'property name test' };
  if (prev && prev.value === '[' && next && next.value === ']' && ctx.prev2 && (ctx.prev2.type === 'id' || ctx.prev2.value === ')' || ctx.prev2.value === ']' || ctx.prev2.value === '?.')) return { include: false, why: 'property access' };
  if (innerCall && (BLOCK_CALLS.test(innerCall) || BLOCK_CALLS.test('x.' + innerCall.split('.').at(-1)))) {
    // .replace(x, 'text') second arg can be text; .join(' · ') separators are excluded (no words anyway)
    return { include: false, why: `arg of ${innerCall}()` };
  }
  if (innerCall && /\.replace$/.test(innerCall) && argIndex === 0) return { include: false, why: 'replace pattern' };
  if (ctx.calls.some((c) => /^console\./.test(c))) return { include: false, why: 'console' };
  if (key && BLOCK_KEYS.has(key)) return { include: false, why: `key ${key}` };
  const t = u.text;
  if (/^(https?:|wss?:|data:|blob:|mailto:|\/|\.\/|\.\.\/)/.test(t) || /\.(m?js|json|css|html|png|jpe?g|svg|glb|gltf|mp3|wav|ogg|db|txt|zip|woff2?)(\?|$)/.test(t)) return { include: false, why: 'url/path' };
  if (CSSISH.test(t) || /^[\w-]+\s*:\s*[^ ]+;/.test(t) || /;\s*[\w-]+\s*:/.test(t)) return { include: false, why: 'css' };
  if (/^[.#[][\w-]/.test(t) && !/\s\w+\s\w+\s/.test(t)) return { include: false, why: 'selector' };
  if (/^\s*(SELECT|INSERT|UPDATE|DELETE|CREATE|PRAGMA|WITH|REPLACE INTO|DROP|ALTER|BEGIN|COMMIT)\b/.test(t)) return { include: false, why: 'sql' };
  if (/=>|\bfunction\b|\breturn\b.*;/.test(t) && /[;(){}]/.test(t)) return { include: false, why: 'code' };
  if (!/\s/.test(t)) {
    if (/[!?…]$/.test(t) && /[A-Za-z]{2}/.test(t)) return { include: true, why: 'exclamation' };
    if (t.length < 2 || CODE_CAPS.has(t)) return { include: false, why: 'constant-like' };
    if (/^[A-Z][A-Z0-9'’-]*[A-Z0-9][.!?…]*$/.test(t) && !/_/.test(t)) return { include: true, why: 'caps label' };
    if (ALLCAPS_WORD.test(t)) return { include: false, why: 'constant-like' };
    if (/^[A-Z][a-z]+(['’-][A-Za-z]+)*[.:]?$/.test(t)) return { include: true, why: 'capitalised word' };
    return { include: false, why: 'identifier-like' };
  }
  if (/^[a-z][\w-]*( [a-z][\w-]*)+$/.test(t)) {
    const w = t.split(' ');
    if (w.filter((x) => /[-_]/.test(x)).length * 2 >= w.length) return { include: false, why: 'class list' };
  }
  return { include: true, why: 'prose' };
}

// ===============================================================================================================
// Pipeline shared by export and import
// ===============================================================================================================
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { join as pjoin } from 'node:path';
import * as RULES from './text_rules.mjs';

const CODE_REASONS = /^(comparison|object key|property access|arg of .*\.(has|get|includes|indexOf|startsWith|endsWith|delete|test|match)\(\)|key (t|type|kind|key|id|code))$/;

export function listFiles(root) {
  const out = [];
  for (const pat of RULES.FILE_PATTERNS) {
    if (!pat.includes('*')) { if (existsSync(pjoin(root, pat))) out.push(pat); continue; }
    const dir = pat.slice(0, pat.lastIndexOf('/'));
    const ext = pat.slice(pat.lastIndexOf('*') + 1);
    if (!existsSync(pjoin(root, dir))) continue;
    for (const f of readdirSync(pjoin(root, dir)).sort()) if (f.endsWith(ext) && !out.includes(`${dir}/${f}`)) out.push(`${dir}/${f}`);
  }
  return out;
}

// whitespace handling for display: html collapses runs of whitespace; plain text keeps it (trimmed at the ends)
const displayText = (u) => (u.html ? u.text.replace(/\s+/g, ' ').trim() : u.text);

function speakerOf(scan, u, ctx, src) {
  if (!u.lit) return null;
  const { tokens } = scan;
  // say('text', 'pam') / voice.say(text, 'jeff')
  if (ctx.innerCall && /(^|\.)say(Line)?$/.test(ctx.innerCall)) {
    const ni = tokenIndexAt(tokens, u.lit.end);
    if (tokens[ni]?.value === ',' && tokens[ni + 1]?.type === 'str' && /^(jeff|pam)$/.test(tokens[ni + 1].cooked)) return tokens[ni + 1].cooked;
  }
  // nearest enclosing object literal with speaker: 'x'
  for (let d = u.lit.stack.length - 1; d >= 0; d--) {
    const fr = u.lit.stack[d];
    if (fr.ch !== '{') continue;
    let k = tokenIndexAt(tokens, fr.start) + 1;
    const depth = tokens[k - 1]?.depth + 1;
    for (; k < tokens.length && tokens[k].start < (u.lit.stackEnd?.[d] ?? Infinity); k++) {
      const t = tokens[k];
      if (t.depth < depth) break;
      if (t.depth === depth && t.type === 'id' && t.value === 'speaker' && tokens[k + 1]?.value === ':') {
        const v = tokens[k + 2];
        if (v?.type === 'str') return v.cooked;
        // speaker: cond ? 'jeff' : 'pam'
        let j = k + 2; const seen = new Set();
        while (j < tokens.length && tokens[j].depth >= depth && tokens[j].value !== ',' && tokens[j].value !== '}') { if (tokens[j].type === 'str' && /^(jeff|pam)$/.test(tokens[j].cooked)) seen.add(tokens[j].cooked); j++; }
        if (seen.size) return [...seen].join('/');
        return null;
      }
    }
    break; // only the nearest object
  }
  void src;
  return null;
}

// Extract and classify every unit of one file. Returns { units: [...all with .include/.why/.meta], src }
export function analyseFile(root, file, src = readFileSync(pjoin(root, file), 'utf8')) {
  const isHtml = file.endsWith('.html');
  const r = isHtml ? extractHtmlUnits(src, file) : extractJsUnits(src, file);
  const scan = r.tokens ? { tokens: r.tokens } : null;
  const out = [];
  // speaker maps declared as objects of bank -> 'jeff'|'pam' (e.g. markets.mjs SPEAKER)
  const speakerMap = {};
  for (const u of r.units) {
    if (!u.lit || u.markupOnly) continue;
    const c = contextOf(scan, u.lit);
    if (c.decl === 'SPEAKER' && c.key && /^(jeff|pam)$/.test(u.text)) speakerMap[c.key] = u.text;
  }
  for (const u of r.units) {
    if (u.markupOnly) continue;
    if (u.kind === 'js' && /&(#\d+|#x[0-9a-f]+|[a-z]+);/i.test(u.text)) { u.html = true; u.text = decodeEntities(u.text); } // goes to innerHTML
    const ctx = u.lit ? contextOf(scan, u.lit) : null;
    const keys = ctx ? ctx.keys : [];
    const bank = [...keys].reverse().find((k) => k.startsWith('key:'))?.slice(4) || ctx?.key || null;
    const fns = keys.filter((k) => k.startsWith('fn:') || k.startsWith('var:')).map((k) => k.split(':')[1]);
    const meta = { file, decl: ctx?.decl || null, keys, bank, fns, key: ctx?.key || null, text: u.text, line: lineOf(src, u.start) };
    meta.fragment = !!(ctx && ((ctx.prev && ctx.prev.value === '+') || (ctx.next && ctx.next.value === '+') || (ctx.innerCall && /join$/.test(ctx.innerCall))));
    let cls = RULES.EXCLUDED_FILES[file] ? { include: false, why: `file: ${RULES.EXCLUDED_FILES[file]}` } : genericClassify(u, ctx);
    if (cls.include) {
      const ex = RULES.EXCLUDED_CONTEXTS.find((x) => x.file === file && (x.decl ? meta.decl === x.decl || fns.includes(x.decl) : true) && (x.key ? meta.key === x.key : true));
      if (ex) cls = { include: false, why: ex.why };
    }
    if (!RULES.EXCLUDED_FILES[file]) {
      const fi = RULES.FORCE_INCLUDE.find((x) => x.file === file && x.text === u.text && (!x.decl || x.decl === meta.decl || fns.includes(x.decl)));
      if (fi && !cls.include && cls.why !== 'no words' && !/^(comparison|object key|property access|import)$/.test(cls.why)) cls = { include: true, why: 'hand-checked' };
      const fe = RULES.FORCE_EXCLUDE.find((x) => x.file === file && (x.text ? x.text === u.text : x.re.test(u.text)));
      if (fe && cls.include) cls = { include: false, why: fe.why };
    }
    // GLSL shader code and SVG paths can look like prose
    if (cls.include && u.lit && /\b(void main|gl_FragColor|gl_Position|modelMatrix|texture2D)\b|#include\s*</.test(src.slice(u.lit.start, u.lit.end))) cls = { include: false, why: 'shader code' };
    if (cls.include && /\b(void main|gl_FragColor|gl_Position|uniform |varying )|(^|\W)#(include|ifdef|endif|define)\b/.test(u.text)) cls = { include: false, why: 'shader code' };
    if (cls.include && /^[MmLlQqCcZzHhVvAaSsTt0-9{}\s.,-]+$/.test(u.text) && /^M/.test(u.text) && /\d|\{/.test(u.text)) cls = { include: false, why: 'svg path' };
    if (cls.include && /(^|\s)\{?\w*\}?px\b|sans-serif|\bserif\b/.test(u.text) && !/[.!?]$/.test(u.text)) cls = { include: false, why: 'font/css' };
    if (cls.include && (u.kind === 'js-html' || u.kind === 'html') && /[\w-]+\s*:\s*[^;{}]+;[\s\S]*[\w-]+\s*:/.test(u.text) && /[{}]/.test(u.text)) cls = { include: false, why: 'css' };
    meta.speaker = ctx ? (speakerOf(scan, u, ctx, src) || (bank && speakerMap[bank]) || null) : null;
    meta.nested = !!(u.lit && u.lit.parent);
    // small joining words glued between other pieces ("A" + ' and ' + "B") are visible text
    if (!cls.include && /^(identifier-like|constant-like)$/.test(cls.why) && meta.fragment && /^(and|or|vs|v|to|of|by|with|the|at|in|on|from|for|but|then|plus)$/i.test(u.text)) cls = { include: true, why: 'joining word' };
    const attrQuote = u.attr ? (u.kind === 'html' ? src[u.start - 1] : u.items[u.from - 1]?.c) : null;
    out.push({ ...u, include: cls.include, why: cls.why, meta, display: displayText(u), _src: src, attrQuote: attrQuote === '"' || attrQuote === "'" ? attrQuote : null });
  }
  return { units: out, src };
}

export const unitKey = (u) => `${u.file}\u0000${u.kind}\u0000${u.attr || ''}\u0000${u.raw}`;

// Collect all included units across the project, grouped into entries.
export function collectAll(root) {
  const files = listFiles(root);
  const perFile = {};
  const codeValues = new Map(); // cooked text -> [{file, line}] where it is compared / used as a key
  const imports = {}; // file -> Set of files it imports
  for (const f of files) {
    perFile[f] = analyseFile(root, f);
    imports[f] = new Set();
    for (const u of perFile[f].units) {
      if (u.why === 'import' && u.kind === 'js' && u.text.startsWith('.')) imports[f].add(pjoin(f, '..', u.text).replace(/\\/g, '/'));
      if (!u.include && u.kind === 'js' && CODE_REASONS.test(u.why)) { if (!codeValues.has(u.text)) codeValues.set(u.text, []); codeValues.get(u.text).push({ file: f, line: u.meta.line }); }
    }
  }
  // a visible string is "coupled" when the same file, or a file importing it, compares against the same text
  const coupledAt = (u) => (codeValues.get(u.text) || []).find((c) => c.file === u.file || imports[c.file]?.has(u.file));
  const groups = new Map();
  const excluded = [];
  for (const f of files) {
    for (const u of perFile[f].units) {
      const cp = u.include && u.kind === 'js' && !Object.keys(u.ph || {}).length && !RULES.COUPLING_OK.some((x) => x.file === u.file && x.text === u.text) ? coupledAt(u) : null;
      if (cp) {
        u.include = false;
        u.why = `also used as a code value at ${cp.file}:${cp.line} (editing it would change behaviour)`;
      }
      if (!u.include) { excluded.push(u); continue; }
      const k = unitKey(u);
      if (!groups.has(k)) groups.set(k, { key: k, units: [] });
      groups.get(k).units.push(u);
    }
  }
  return { files, perFile, groups: [...groups.values()], excluded };
}

export function sectionFor(u) {
  const m = { file: u.file, decl: u.meta.decl, keys: u.meta.keys, bank: u.meta.bank, fns: u.meta.fns, key: u.meta.key, text: u.text };
  for (const s of RULES.SECTIONS) if (s.match(m)) return s;
  return RULES.SECTIONS.at(-1);
}

// Assign stable IDs: <section prefix>-<5 hex of sha1(file, kind, raw)>, with -2, -3... on a (rare) collision.
export function assignIds(groups) {
  const byBase = new Map();
  for (const g of groups) {
    g.section = sectionFor(g.units[0]);
    g.fullHash = createHash('sha1').update(g.key).digest('hex');
    const base = `${g.section.prefix}-${g.fullHash.slice(0, 5)}`;
    if (!byBase.has(base)) byBase.set(base, []);
    byBase.get(base).push(g);
  }
  for (const [base, gs] of byBase) {
    gs.sort((a, b) => (a.fullHash < b.fullHash ? -1 : 1));
    gs.forEach((g, i) => { g.id = i === 0 ? base : `${base}-${i + 1}`; });
  }
  return groups;
}

// ---------------------------------------------------------------------------------------------------------------
// Turning edited text back into source
// ---------------------------------------------------------------------------------------------------------------
export const PLACEHOLDER_RE = /\{([A-Za-z_][A-Za-z0-9_]*)\}/g;
export const placeholdersIn = (t) => [...t.matchAll(PLACEHOLDER_RE)].map((m) => m[1]);

// core item range (no leading/trailing whitespace) of a unit
export function coreRange(u) {
  let a = u.from, b = u.to;
  while (a < b && u.items[a].c != null && /^\s*$/.test(u.items[a].c)) a++;
  while (b > a && u.items[b - 1].c != null && /^\s*$/.test(u.items[b - 1].c)) b--;
  return [a, b];
}

// Build an edit {start, end, parts} for unit u (current source) so that it shows `newText`.
// parts: strings (already encoded) and {start, end} expression ranges (re-emitted as ${...}).
export function buildEdit(u, newText) {
  const [a, b] = coreRange(u);
  const start = u.items[a].pos, end = u.items[b - 1].end;
  const exprByName = {};
  // reuse the exact naming done at extraction time (u.ph: name -> expression source) and locate each expression
  const exprItems = [];
  for (let k = a; k < b; k++) if (u.items[k].x != null) exprItems.push(u.items[k]);
  const srcOf = (it) => ({ start: it.pos + 2, end: it.end - 1 });
  const names = Object.keys(u.ph || {});
  // u.ph is in order of first appearance; map names to the first matching expression item by source text
  for (const nm of names) {
    const it = exprItems.find((x) => !Object.values(exprByName).includes(x) && u._src.slice(x.pos + 2, x.end - 1) === u.ph[nm]);
    if (it) exprByName[nm] = it;
  }
  for (const nm of names) if (!exprByName[nm]) throw new Error(`placeholder {${nm}} could not be matched to its code`);
  const quote = u.quote;
  const enc = (t) => {
    let s = t;
    if (u.html) {
      s = s.replace(/&/g, '&amp;').replace(/\u00a0/g, '&nbsp;');
      if (u.attr) s = u.attrQuote === "'" ? s.replace(/'/g, '&#39;') : s.replace(/"/g, '&quot;');
    }
    if (u.kind === 'html') return s;
    return encodeJs(s, quote);
  };
  const parts = [];
  let last = 0;
  for (const m of newText.matchAll(PLACEHOLDER_RE)) {
    const it = exprByName[m[1]];
    if (!it) continue; // a {name} that is literal text (fill-style placeholder): stays text
    parts.push(enc(newText.slice(last, m.index)));
    parts.push(srcOf(it));
    last = m.index + m[0].length;
  }
  parts.push(enc(newText.slice(last)));
  return { start, end, parts: parts.filter((p) => p !== '') };
}

// Apply edits (possibly nested: an edit's expression part may contain other edits) to src.
export function applyEdits(src, edits) {
  const sorted = [...edits].sort((x, y) => x.start - y.start || y.end - x.end);
  const render = (lo, hi, list) => {
    let out = '', pos = lo, i = 0;
    while (i < list.length) {
      const e = list[i];
      out += src.slice(pos, e.start);
      let j = i + 1;
      const kids = [];
      while (j < list.length && list[j].start < e.end) { kids.push(list[j]); j++; }
      out += e.parts.map((p) => (typeof p === 'string' ? p : '${' + render(p.start, p.end, kids.filter((k) => k.start >= p.start && k.end <= p.end)) + '}')).join('');
      pos = e.end;
      i = j;
    }
    return out + src.slice(pos, hi);
  };
  // reject overlapping (non-nested) edits
  for (let k = 1; k < sorted.length; k++) {
    const p = sorted[k - 1], q = sorted[k];
    if (q.start < p.end && q.end > p.end) throw new Error('overlapping edits');
  }
  return render(0, src.length, sorted);
}
