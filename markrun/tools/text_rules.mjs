// What counts as player-facing text, and where each piece goes in content/MARKRUN_TEXT.txt.
// Used by tools/text_export.mjs and tools/text_import.mjs (both must classify identically).
//
// The generic classifier in tools/text_lib.mjs decides most cases from context (object keys, comparisons, selectors,
// CSS, SQL, logs...). This file holds the hand-checked exceptions and the section layout.

// Files scanned, in this order. Anything new that matches these patterns is picked up automatically.
export const FILE_PATTERNS = [
  'web/index.html', 'web/*.js',
  'client/tv/index.html', 'client/phone/index.html', 'client/phone/*.js', 'client/tv/*.js', 'client/tv/race/*.js', 'client/tv/race/cutscenes/*.js', 'client/shared/*.js',
  'server/game/*.mjs', 'server/net/*.mjs',
];

// Whole files left out (nothing in them reaches a player).
export const EXCLUDED_FILES = {
  'server/game/leak.mjs': 'internal spoiler checker: its labels are only used in test/audit reports',
  'server/game/data.mjs': 'database loading only',
  'server/game/memory.mjs': 'session memory storage only',
  'server/game/rng.mjs': 'random numbers only',
  'server/game/raceplan.mjs': 'race maths only',
  'server/game/provisional.mjs': 'score maths only',
  'server/net/static.mjs': 'web server plumbing (MIME types, file routes)',
  'server/net/persist.mjs': 'save-file storage only',
  'server/net/lan.mjs': 'network address detection only',
  'server/net/emitter.mjs': 'event plumbing only',
  'server/net/roundsource.mjs': 'module loader: only console warnings',
  'server/net/fixturefx.mjs': 'developer fixture round (used only when the real game module is missing); placeholder text',
  'client/tv/race/preview.js': 'developer-only 3D race preview page',
  'client/tv/race-bridge.js': 'no text',
  'client/shared/sfx.js': 'sound synthesis only',
  'client/shared/portrait.js': 'SVG drawing only',
  'client/shared/net.js': 'connection plumbing only',
  'web/frames.js': 'test harness plumbing', 'web/storage.js': 'storage plumbing', 'web/shims.js': 'server shims (no player text)', 'web/phone-entry.js': 'bootstrap only',
};

// Declarations (top-level const/function names) or object keys left out, per file.
export const EXCLUDED_CONTEXTS = [
  { file: 'server/game/commentary.mjs', decl: 'COMMENTATORS', why: 'commentator names/bios are not displayed anywhere (the names inside lines are)' },
  { file: 'server/net/bets.mjs', decl: 'fallbackSettle', why: 'developer fallback when the game module fails to load' },
  { file: 'server/game/cutscenes.mjs', key: 'ref', why: 'catalogue reference codes (docs only)' },
  { file: 'client/tv/race/hud.js', decl: 'CSS', why: 'stylesheet' },
  { file: 'client/tv/race/world.js', decl: 'FONT', why: 'font name' },
  { file: 'server/game/settle.mjs', decl: 'ordinal', why: 'ordinal suffixes st/nd/rd/th (grammar, not wording)' },
  { file: 'server/game/characters.mjs', decl: 'PALETTE', why: 'colour names are never shown (only the colours)' },
];

// Single words the generic rules treat as code but a player does see (hand-checked).
// { file, text, decl? }  - decl narrows it to one declaration.
export const FORCE_INCLUDE = [
  ...['frosty', 'cold', 'chilly', 'mild', 'warm', 'hot'].map((text) => ({ file: 'server/game/settle.mjs', decl: 'SEASON_TEMP', text })),
  ...['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve'].map((text) => ({ file: 'server/game/settle.mjs', decl: 'NUMW', text })),
  ...['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty']
    .map((text) => ({ file: 'server/game/text.mjs', decl: 'SMALL', text })),
  { file: 'server/game/text.mjs', decl: 'raceType', text: 'marathon' },
  { file: 'server/game/text.mjs', decl: 'raceType', text: '10K' },
  { file: 'server/game/text.mjs', decl: 'raceType', text: '5K' },
  { file: 'server/game/text.mjs', decl: 'raceType', text: 'cross-country race' },
  { file: 'server/game/headlines.mjs', text: 'marathon' },
  { file: 'server/game/clues.mjs', text: 'marathon' },
  { file: 'server/game/clues.mjs', text: 'twice' },
  { file: 'server/game/clues.mjs', text: 'did no cross-training whatsoever' },
  ...['first', 'second', 'third', 'fourth', 'fifth', 'sixth'].map((text) => ({ file: 'server/game/commentary.mjs', decl: 'ORD', text })),
  { file: 'server/game/markets.mjs', text: 'nowhere' },
  { file: 'server/game/markets.mjs', text: 'eventually' },
  { file: 'server/game/moments.mjs', text: 'everyone' },
  { file: 'server/game/settle.mjs', text: ', and' },
  { file: 'client/tv/main.js', text: 'they' },
  { file: 'client/tv/main.js', text: 'odds-on' },
  { file: 'client/tv/race/index.js', text: 'closing' },
  { file: 'client/tv/race/index.js', text: 'chasing' },
  { file: 'client/tv/race/world.js', text: '2 OF 2' },
  { file: 'client/shared/ui.js', text: 'HEAD-TO-HEAD' },
  { file: 'client/shared/ui.js', decl: 'CURRENCY', text: 'pp' },
  { file: 'server/game/round.mjs', decl: 'CURRENCY', text: 'pp' },
];

// Visible words that merely look like a code value used elsewhere (checked: a different meaning, safe to edit).
export const COUPLING_OK = [
  { file: 'server/game/settle.mjs', text: 'hot' }, // "a hot morning" vs the clue tier 'hot' in round.mjs
];

// Text the generic rules would include but that no player sees (hand-checked).
export const FORCE_EXCLUDE = [
  { file: 'client/tv/race/sim.js', text: 'LEADER', why: 'internal gap label, replaced before display' },
  { file: 'client/tv/race/world.js', re: /^\{size\}px/, why: 'font size' },
];

// ---------------------------------------------------------------------------------------------------------------
// Sections, in the order a player meets them during a game night. First match wins.
// u: { file, decl, keys (bracket labels), bank (innermost object key holding the array), fns (enclosing functions), key, text }
// ---------------------------------------------------------------------------------------------------------------
const C = 'server/game/commentary.mjs';
const bankIn = (...names) => (u) => u.file === C && names.some((n) => (n.endsWith('*') ? u.bank?.startsWith(n.slice(0, -1)) : u.bank === n));
const inFile = (f, ...decls) => (u) => u.file === f && (!decls.length || decls.includes(u.decl) || decls.some((d) => u.fns.includes(d)));
const anyWeb = (u) => u.file.startsWith('web/');

export const SECTIONS = [
  // ---- before the game ----
  { prefix: 'WEB', title: 'WEB EDITION: Start page, room codes and connection', match: anyWeb },
  { prefix: 'TVL', title: 'TV: Start screen, lobby and options', match: (u) => (u.file === 'client/tv/index.html') || inFile('client/tv/main.js', 'lobbyScreen', 'claimRequest', 'confirmRefresh', 'refreshLog', 'refreshFinished', 'showAuthError', 'cursorTimer', 'advance', 'onState', 'renderHud', 'renderNextHint', 'showSub', 'NIGHTS', 'nightHtml')(u) },
  { prefix: 'PHL', title: 'PHONE: Joining and lobby', match: (u) => u.file === 'client/phone/index.html' || inFile('client/phone/main.js', 'net', 'topbar', 'renderJoin', 'doJoin', 'renderLobby', 'toast')(u) },
  { prefix: 'ERR', title: 'MESSAGES: Errors and warnings from the host', match: (u) => u.file.startsWith('server/net/') },
  // ---- the cold open and round intro ----
  { prefix: 'CMT-OPN', title: 'COMMENTARY: Cold open (welcome to the players)', match: (u) => inFile('server/game/moments.mjs', 'coldOpenLines', 'list')(u) || inFile('server/game/cutscenes.mjs', 'newsDeskScript', 'newsDesk')(u) },
  { prefix: 'TVN', title: 'TV: News desk opening (presenters, headlines, ticker)', match: inFile('client/tv/main.js', 'PRESENTERS', 'newsDeskFallback', 'playNewsDesk') },
  { prefix: 'TTL', title: 'ROUND TITLES', match: inFile('server/game/characters.mjs', 'ROUND_TITLES', 'roundTitle') },
  { prefix: 'THM', title: 'THEMES: Labels and blurbs', match: (u) => inFile('server/game/themes.mjs')(u) || (u.file === 'server/game/round.mjs' && u.key === 'notice') },
  { prefix: 'CMT-INT', title: 'COMMENTARY: Round intro (welcome, theme, finale, wildcard)', match: bankIn('intro_jeff', 'intro_pam', 'theme_intro', 'finale_intro', 'wildcard_intro') },
  { prefix: 'TVI', title: 'TV: Round intro, explainer beats and runner introductions', match: inFile('client/tv/main.js', 'introScreen', 'sayIntroLines', 'themeBadge', 'stripHtml', 'themeLinesFor', 'playThemeCard') },
  // ---- meet the runners ----
  { prefix: 'NIC', title: 'RUNNERS: Nicknames (full name|short spoken name)', match: inFile('server/game/characters.mjs', 'NICKNAMES') },
  { prefix: 'TAG', title: 'RUNNERS: Taglines', match: inFile('server/game/characters.mjs', 'TAGLINES') },
  { prefix: 'PER', title: 'RUNNERS: Personalities and announcer intro lines', match: inFile('server/game/characters.mjs', 'PERSONALITIES', 'PALETTE', 'introLine') },
  // ---- clues ----
  { prefix: 'HDL', title: 'CLUES: Headlines (the short first line of a clue)', match: (u) => inFile('server/game/headlines.mjs')(u) && !['FALLBACK_KICK', 'kickerFrom'].includes(u.decl) },
  { prefix: 'KCK', title: 'CLUES: Fallback kickers (the joke line when a template has none)', match: inFile('server/game/headlines.mjs', 'FALLBACK_KICK', 'kickerFrom') },
  { prefix: 'CLC', title: 'CLUES: Category labels', match: inFile('server/game/clues.mjs', 'CATEGORY_LABEL') },
  { prefix: 'CLU', title: 'CLUES: Clue templates (all styles: fact, hedge, gossip) and the short "said" phrases the commentators quote back', match: (u) => (u.file === 'server/game/clues.mjs' && !['OPINIONS', 'VOICE'].includes(u.decl)) || (u.file === 'server/game/round.mjs' && u.fns.includes('createRound') && !/UNDERDOG|One win bet|HOT TIP|Player 1/.test(u.text) && u.key !== 'notice') },
  { prefix: 'TIP', title: 'CLUES: Tipster lines (Jeff and Pam tipping or slating a runner)', match: inFile('server/game/clues.mjs', 'OPINIONS', 'VOICE') },
  { prefix: 'HOT', title: 'HOT TIPS: Insider headlines, kickers and finish steers', match: (u) => inFile('server/game/hottips.mjs')(u) || (u.file === 'server/game/round.mjs' && /HOT TIP/.test(u.text)) },
  // ---- betting ----
  { prefix: 'TVB', title: 'TV: Betting screen', match: inFile('client/tv/main.js', 'bettingScreen') },
  { prefix: 'PHB', title: 'PHONE: Betting flow (runners, head-to-heads, side bet, review, lock-in)', match: inFile('client/phone/main.js', 'dotsHtml', 'clueBlock', 'renderFlow', 'trayHtml', 'openTray', 'wireFlow', 'doLock', 'renderLocked', 'screen', 'chips', 'clockHtml', 'hurried', 'RANK_SHORT', 'roundCardHtml') },
  { prefix: 'MKT', title: 'MARKETS: Side bets, Underdog Special and bet labels', match: (u) => inFile('server/game/markets.mjs', 'makeProps', 'inPlayMarket', 'makeMatchups', 'priceProp')(u) || (u.file === 'server/game/round.mjs' && /UNDERDOG|One win bet/.test(u.text)) || inFile('client/shared/ui.js', 'betLabel', 'betKind', 'betOutcome', 'clueHtml', 'oddsText')(u) },
  { prefix: 'CMT-BET', title: 'COMMENTARY: Bet reactions (Jeff, then Pam replies after ||)', match: bankIn('bet_big', 'bet_longshot', 'bet_fav', 'bet_same', 'bet_split', 'bet_none', 'bet_h2h') },
  { prefix: 'CMT-LCK', title: 'COMMENTARY: Lock-in callouts', match: (u) => inFile('server/game/moments.mjs', 'lockLine')(u) || inFile('client/tv/main.js', 'lockLine')(u) },
  { prefix: 'CMT-BCL', title: 'COMMENTARY: Betting closed', match: bankIn('bet_closed') },
  { prefix: 'TVR', title: 'TV: Bet reveal', match: inFile('client/tv/main.js', 'revealScreen') },
  { prefix: 'CMT-RVL', title: 'COMMENTARY: Bet reveal lines (one per bet, smallest first)', match: inFile('server/game/markets.mjs', 'RV', 'betRevealOrder', 'SPEAKER') },
  // ---- the race ----
  { prefix: 'CMT-STA', title: 'COMMENTARY: Race start', match: bankIn('start', 'start_pam') },
  { prefix: 'CMT-ELD', title: 'COMMENTARY: Early leader', match: bankIn('early_leader') },
  { prefix: 'CMT-LCH', title: 'COMMENTARY: Lead changes', match: bankIn('lead_change', 'lead_change_pam', 'lead_change_late', 'lead_swap') },
  { prefix: 'CMT-OVT', title: 'COMMENTARY: Overtakes', match: bankIn('overtake') },
  { prefix: 'CMT-BRK', title: 'COMMENTARY: Breakaways', match: bankIn('breakaway', 'breakaway_pam') },
  { prefix: 'CMT-HIL', title: 'COMMENTARY: The Hill (lap one and lap two)', match: bankIn('hill1', 'hill1_pam', 'hill2', 'hill2_pam') },
  { prefix: 'CMT-LAP', title: 'COMMENTARY: End of lap one', match: bankIn('lap', 'lap_pam') },
  { prefix: 'CMT-DIV', title: 'COMMENTARY: Funfair diversions', match: bankIn('diversion*', 'rejoin*') },
  { prefix: 'CMT-WLD', title: 'COMMENTARY: Wildcard (the runner who was not trying)', match: bankIn('wildcard_wait', 'wildcard_mid') },
  { prefix: 'CMT-CBK', title: 'COMMENTARY: Clue and hot-tip callbacks during the race', match: (u) => bankIn('callback_good', 'callback_surprise', 'callback_bad', 'callback_private', 'hot_callback')(u) || inFile(C, 'HOT_SAID')(u) },
  { prefix: 'CMT-PER', title: 'COMMENTARY: Personal lines about your bets and tips', match: (u) => inFile(C, 'PZ', 'ORD', 'personalise')(u) },
  { prefix: 'CMT-FIL', title: 'COMMENTARY: Filler (quiet moments)', match: bankIn('filler_pam', 'filler_jeff', 'gap_pam', 'gap_jeff') },
  { prefix: 'CMT-FST', title: 'COMMENTARY: Final stretch', match: bankIn('final_stretch') },
  { prefix: 'CMT-RUN', title: 'COMMENTARY: The run-in (position updates near the line)', match: bankIn('finale_close', 'finale_lead', 'finale_big', 'finale_second') },
  { prefix: 'CMT-FIN', title: 'COMMENTARY: The finish (winner, photo finish, second, last)', match: bankIn('finish_win', 'finish_photo', 'finish_photo_pam', 'finish_second', 'finish_last', 'finish_last_pam') },
  { prefix: 'CUT', title: 'RACE: Cutscenes (gags triggered by real pacing)', match: inFile('server/game/cutscenes.mjs') },
  { prefix: 'CUV', title: 'RACE: Cutscene captions, signs and name tags (3D)', match: (u) => u.file.startsWith('client/tv/race/cutscenes/') },
  { prefix: 'HUD', title: 'RACE: 3D broadcast banners, HUD and park signs', match: (u) => u.file.startsWith('client/tv/race/') || u.file === 'client/tv/fallback-race.js' },
  { prefix: 'TVH', title: 'TV: Race screen and halfway market', match: inFile('client/tv/main.js', 'marketHtml', 'raceScreen') },
  { prefix: 'PHR', title: 'PHONE: During the race and the halfway market', match: inFile('client/phone/main.js', 'renderRace', 'renderMarket') },
  // ---- results ----
  { prefix: 'TVS', title: 'TV: Results (order, reveal, clues, payouts, awards)', match: inFile('client/tv/main.js', 'resultsScreen', 'winLine', 'loseLine', 'drinkHtml') },
  { prefix: 'PHS', title: 'PHONE: Results', match: inFile('client/phone/main.js', 'renderResults') },
  { prefix: 'REV', title: 'REVEAL: Who were they really? (fun facts, conditions, dates)', match: inFile('server/game/settle.mjs', 'FUN', 'revealCard', 'revealContext', 'WEEKDAYS', 'MONTHS', 'SEASON_TEMP', 'NUMW', 'span', 'raceWord', 'ordinal', 'pickFun') },
  { prefix: 'RMF', title: 'REVEAL: Real Mark facts', match: inFile('server/game/settle.mjs', 'realMarkFact') },
  { prefix: 'ARC', title: 'RESULTS: Race archetypes (labels and blurbs)', match: inFile('server/game/select.mjs', 'ARCHETYPES') },
  { prefix: 'QUP', title: 'RESULTS: Clue review quips (useful / red herring / neutral)', match: inFile('server/game/settle.mjs', 'QUIPS', 'CAT_QUIPS', 'HOT_QUIPS', 'TIPSTER_QUIPS') },
  { prefix: 'CMT-RES', title: 'COMMENTARY: Results reactions', match: bankIn('res_*') },
  { prefix: 'CMT-STP', title: 'COMMENTARY: Payout stamps', match: inFile('server/game/moments.mjs', 'stampLine') },
  { prefix: 'AWD', title: 'RESULTS: Round awards (titles and texts)', match: (u) => inFile('server/game/settle.mjs', 'AWARD_TEXT')(u) || inFile('server/game/moments.mjs', 'awardLines')(u) },
  { prefix: 'DRK', title: 'RESULTS: Drinking-game prompts', match: (u) => u.file === 'server/game/settle.mjs' && (u.fns.includes('heartbreak') || /sip|drink/i.test(u.text)) },
  // ---- scoreboard and finale ----
  { prefix: 'TVF', title: 'TV: Standings, champion and the night in awards', match: inFile('client/tv/main.js', 'standingsHtml', 'chartSvg', 'recapHtml', 'scoreScreen', 'finaleScreen', 'scoreBarHtml') },
  { prefix: 'PHF', title: 'PHONE: Standings and finale', match: inFile('client/phone/main.js', 'renderScore', 'renderFinale') },
  { prefix: 'SUP', title: 'FINALE: Superlatives (the night in awards)', match: inFile('server/game/markets.mjs', 'sessionSuperlatives') },
  { prefix: 'CMT-RMT', title: 'COMMENTARY: Rematch', match: inFile('server/game/moments.mjs', 'rematchLine') },
  // ---- shared bits ----
  { prefix: 'FMT', title: 'SHARED: Money, numbers, race types and other small words', match: (u) => ['server/game/text.mjs', 'server/game/model.mjs', 'client/shared/ui.js', 'server/game/round.mjs', 'server/game/settle.mjs', 'server/game/markets.mjs', 'server/game/moments.mjs'].includes(u.file) },
  // ---- catch-alls (keep last) ----
  { prefix: 'CMT-ETC', title: 'COMMENTARY: Other lines', match: (u) => u.file === C },
  { prefix: 'TVX', title: 'TV: Other screens', match: (u) => u.file.startsWith('client/tv/') },
  { prefix: 'PHX', title: 'PHONE: Other screens', match: (u) => u.file.startsWith('client/phone/') },
  { prefix: 'ETC', title: 'OTHER TEXT', match: () => true },
];

// Commentary banks: who speaks first (the second part after " || " is the other commentator).
export const BANK_LEAD = {
  intro_pam: 'pam', start_pam: 'pam', lead_change_pam: 'pam', breakaway_pam: 'pam', hill1_pam: 'pam', hill2_pam: 'pam', lap_pam: 'pam', finish_photo_pam: 'pam',
  finish_last_pam: 'pam', filler_pam: 'pam', gap_pam: 'pam', diversion1_pam: 'pam', diversion2_pam: 'pam', diversion_mass_pam: 'pam',
  hot_callback: 'pam', callback_surprise: 'pam', callback_bad: 'pam', callback_private: 'pam', res_heartbreak: 'pam', res_bigloss: 'pam', res_pam: 'pam',
};
