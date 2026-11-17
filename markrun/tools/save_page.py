# Copy a saved MCP tool-result file into the raw store and print paging info.
import json, sys, shutil, os
src = sys.argv[1]
d = json.load(open(src))
acts = d.get('activities', [])
first = acts[0]['start_local'] if acts else None
last = acts[-1]['start_local'] if acts else None
name = f"data/raw/strava/activities/page_{(first or 'empty').replace(':','')}.json"
shutil.copy(src, name)
pi = d.get('page_info') or {}
print(len(acts), first, last, 'next:', d.get('has_next_page', pi.get('has_next_page')), 'cursor:', d.get('end_cursor', pi.get('end_cursor')), [k for k in d.keys() if k!='activities'])
