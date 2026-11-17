# Recover Strava stream tool results that came back inline, directly from an agent transcript (JSONL).
# The data is copied byte-for-byte from the tool_result content; nothing is retyped.
import json, sys, os, re
out_dir = sys.argv[2]
uses = {}
saved = []
for line in open(sys.argv[1], encoding='utf-8'):
    try: ev = json.loads(line)
    except Exception: continue
    msg = ev.get('message') or {}
    content = msg.get('content')
    if not isinstance(content, list): continue
    for c in content:
        if c.get('type') == 'tool_use' and 'get_activity_streams' in c.get('name', ''):
            uses[c['id']] = c['input'].get('activity_id')
        if c.get('type') == 'tool_result' and c.get('tool_use_id') in uses:
            aid = uses[c['tool_use_id']]
            body = c.get('content')
            if isinstance(body, list):
                body = ''.join(x.get('text', '') for x in body if x.get('type') == 'text')
            if not isinstance(body, str): continue
            m = re.search(r'Output has been saved to (\S+?\.txt)', body)
            if m and os.path.exists(m.group(1)):
                body = open(m.group(1), encoding='utf-8').read()
            if not body.lstrip().startswith('{'): continue
            try: d = json.loads(body)
            except Exception: continue
            if 'time' not in d or 'distance' not in d: continue
            n = len(d['time'])
            if any(len(v) != n for v in d.values()): print('length mismatch', aid); continue
            p = os.path.join(out_dir, f'{aid}.json')
            if not os.path.exists(p):
                open(p, 'w').write(body.strip()); saved.append((aid, n))
print('saved', len(saved), saved)
