# Build the Finsbury parkrun course centreline (from Mark's own GPS traces) and the park map (from OpenStreetMap).
# Output: data/course/course.json and data/course/park.json in local metres: x = east, z = south, y = up.
# Run once (or after a refresh): python3 -I tools/build_course.py
import json, math, sqlite3, gzip, statistics, os, sys
import xml.etree.ElementTree as ET

HERE = os.path.dirname(os.path.abspath(__file__))
DATA = os.path.join(HERE, '..', 'data')
db = sqlite3.connect(os.path.join(DATA, 'markrun.db'))

start = json.loads(db.execute("select value from meta where key='course_start'").fetchone()[0])
LAT0, LON0 = start
KX = 111320 * math.cos(math.radians(LAT0)); KZ = 110540
def local(lat, lon): return ((lon - LON0) * KX, -(lat - LAT0) * KZ)

# ------------------------------------------------------------ centreline from GPS
rows = db.execute("""select p.run_date, s.raw_json, p.quality from performances p join matches m using(run_date)
  join streams s on s.activity_id = m.activity_id where m.method='direct' order by p.run_date desc""").fetchall()
N = 501  # every 10 m
traces = []
for run_date, raw, q in rows:
    q = json.loads(q)
    st = json.loads(raw)
    if q.get('sampleInterval', 9) > 1.5 or 'location' not in st or 'altitude' not in st: continue
    d, loc, alt = st['distance'], st['location'], st['altitude']
    v = st.get('velocity_smooth') or [3] * len(d)
    vm = statistics.median([x for x in v if x > 1.5])
    i0 = 0
    while i0 < len(d) - 1 and d[i0 + 1] - d[0] < 2: i0 += 1
    i1 = len(d) - 1
    while i1 > i0 + 60 and v[i1] < 0.6 * vm: i1 -= 1
    D = d[i1] - d[i0]
    if not (4850 < D < 5200): continue
    pts = []; k = i0
    for n in range(N):
        target = n / (N - 1) * D
        while k < i1 and d[k + 1] - d[i0] < target: k += 1
        a, b = k, min(k + 1, i1)
        da, db_ = d[a] - d[i0], d[b] - d[i0]
        f = (target - da) / (db_ - da) if db_ > da else 0
        lat = loc[a][0] + f * (loc[b][0] - loc[a][0]); lon = loc[a][1] + f * (loc[b][1] - loc[a][1])
        pts.append((lat, lon, alt[a] + f * (alt[b] - alt[a])))
    traces.append((run_date, pts))
traces = traces[:40]
print('traces used', len(traces), 'from', traces[-1][0], 'to', traces[0][0], file=sys.stderr)

cl = []
for n in range(N):
    lat = statistics.median(t[1][n][0] for t in traces)
    lon = statistics.median(t[1][n][1] for t in traces)
    alt = statistics.median(t[1][n][2] for t in traces)
    cl.append((lat, lon, alt))
# smooth (3-pass moving average) positions and altitude
def smooth(arr, w=2, passes=3):
    for _ in range(passes):
        arr = [sum(arr[max(0, i - w):i + w + 1]) / len(arr[max(0, i - w):i + w + 1]) for i in range(len(arr))]
    return arr
xs, zs = zip(*[local(p[0], p[1]) for p in cl])
xs, zs = smooth(list(xs)), smooth(list(zs))
alts = smooth([p[2] for p in cl], w=4, passes=4)
amin = min(alts)
points = [[round(x, 2), round(a - amin, 2), round(z, 2)] for x, z, a in zip(xs, zs, alts)]
# scale so polyline length matches 5000 m exactly (positions are drawn along this line by distance fraction)
L = sum(math.dist((points[i][0], points[i][2]), (points[i + 1][0], points[i + 1][2])) for i in range(N - 1))
# lap structure: where does the course come back past the same place?
def near(i, j): return math.dist((points[i][0], points[i][2]), (points[j][0], points[j][2]))
overlap = []
for i in range(N):
    best = min((near(i, j), j) for j in range(N) if abs(j - i) > 60)
    overlap.append(best)
lap_pairs = [(i * 10, overlap[i][1] * 10) for i in range(0, N, 25) if overlap[i][0] < 15]
hill = max(range(N), key=lambda i: points[i][1])
climbs = []
for i in range(0, N - 10):
    g = (points[i + 10][1] - points[i][1]) / 100
    climbs.append(g)
course = {
  'origin': {'lat': LAT0, 'lon': LON0, 'note': 'course start; x east, z south, metres'},
  'stepM': 10, 'lengthM': 5000, 'polylineLengthM': round(L, 1),
  'points': points,
  'finish': [round(v, 2) for v in local(*json.loads(db.execute("select value from meta where key='course_finish'").fetchone()[0]))],
  'highestPointM': hill * 10, 'elevationRangeM': round(max(alts) - amin, 1),
  'steepestClimbStartM': climbs.index(max(climbs)) * 10, 'steepestClimbGrade': round(max(climbs), 3),
  'overlaps': lap_pairs,
  'source': f'Median of {len(traces)} of Mark\'s own Strava GPS traces of Finsbury parkrun ({traces[-1][0]} .. {traces[0][0]}), resampled every 10 m and smoothed.',
}
os.makedirs(os.path.join(DATA, 'course'), exist_ok=True)
json.dump(course, open(os.path.join(DATA, 'course', 'course.json'), 'w'), separators=(',', ':'))
print('course length', round(L), 'elev range', course['elevationRangeM'], 'hill at', course['highestPointM'], 'steepest climb at', course['steepestClimbStartM'], course['steepestClimbGrade'], file=sys.stderr)
print('overlaps (m, m):', lap_pairs[:40], file=sys.stderr)

# ------------------------------------------------------------ park map from OSM
root = ET.parse(gzip.open(os.path.join(DATA, 'raw', 'osm', 'finsbury_park_bbox.osm.gz'))).getroot()
nodes = {n.get('id'): (float(n.get('lat')), float(n.get('lon'))) for n in root.iter('node')}
ways = {}
for w in root.iter('way'):
    ways[w.get('id')] = ([r.get('ref') for r in w.findall('nd')], {t.get('k'): t.get('v') for t in w.findall('tag')})
def poly(refs):
    out = []
    for r in refs:
        if r in nodes:
            x, z = local(*nodes[r]); out.append([round(x, 1), round(z, 1)])
    return out

# keep features within the park area (+ margin) only
xs_, zs_ = [p[0] for p in points], [p[2] for p in points]
BX0, BX1, BZ0, BZ1 = min(xs_) - 260, max(xs_) + 260, min(zs_) - 260, max(zs_) + 260
def inside(pl): return any(BX0 < p[0] < BX1 and BZ0 < p[1] < BZ1 for p in pl)

def classify(t):
    if t.get('leisure') == 'park': return 'park'
    if t.get('natural') == 'water' or t.get('water') or t.get('leisure') == 'swimming_pool' and False: return 'water'
    if t.get('leisure') == 'track' or t.get('sport') == 'athletics' and t.get('leisure') in ('pitch', 'stadium', 'track'): return 'track'
    if t.get('sport') == 'tennis': return 'tennis'
    if t.get('leisure') == 'pitch': return 'pitch'
    if t.get('leisure') == 'playground': return 'playground'
    if t.get('natural') in ('wood',) or t.get('landuse') == 'forest': return 'wood'
    if t.get('natural') == 'scrub': return 'scrub'
    if t.get('leisure') == 'garden' and t.get('name'): return 'garden'
    if t.get('landuse') == 'grass' or t.get('leisure') == 'common': return 'grass'
    if 'building' in t: return 'building'
    if t.get('highway') in ('footway', 'path', 'cycleway', 'service', 'pedestrian', 'track', 'steps'): return 'path'
    if t.get('highway') in ('primary', 'secondary', 'tertiary', 'trunk', 'residential', 'unclassified'): return 'road'
    if t.get('railway') in ('rail',): return 'rail'
    if t.get('barrier') in ('fence', 'wall', 'hedge'): return 'barrier'
    if t.get('amenity') in ('cafe', 'toilets', 'restaurant'): return 'amenity'
    return None

feats = []
for wid, (refs, t) in ways.items():
    k = classify(t)
    if not k: continue
    pl = poly(refs)
    if len(pl) < 2 or not inside(pl): continue
    feats.append({'kind': k, 'name': t.get('name'), 'closed': refs[0] == refs[-1], 'pts': pl,
                  'tags': {kk: t[kk] for kk in ('highway', 'leisure', 'sport', 'building', 'amenity', 'surface', 'natural', 'barrier', 'building:levels') if kk in t}})
# multipolygon relations (lake, park outline, etc.)
for rel in root.iter('relation'):
    t = {x.get('k'): x.get('v') for x in rel.findall('tag')}
    if t.get('type') != 'multipolygon': continue
    k = classify(t)
    if not k: continue
    # stitch outer ways
    segs = [ways[m.get('ref')][0] for m in rel.findall('member') if m.get('type') == 'way' and m.get('role') == 'outer' and m.get('ref') in ways]
    rings = []
    while segs:
        ring = list(segs.pop(0))
        changed = True
        while changed and ring[0] != ring[-1]:
            changed = False
            for s in segs:
                if s[0] == ring[-1]: ring += s[1:]; segs.remove(s); changed = True; break
                if s[-1] == ring[-1]: ring += s[::-1][1:]; segs.remove(s); changed = True; break
        rings.append(ring)
    for ring in rings:
        pl = poly(ring)
        if len(pl) > 2 and inside(pl):
            feats.append({'kind': k, 'name': t.get('name'), 'closed': True, 'pts': pl, 'tags': {}})
pois = []
for n in root.iter('node'):
    t = {x.get('k'): x.get('v') for x in n.findall('tag')}
    if not t: continue
    k = None
    if t.get('natural') == 'tree': k = 'tree'
    elif t.get('amenity') in ('cafe', 'toilets', 'bench', 'drinking_water', 'fountain') or t.get('leisure') in ('picnic_table',): k = t.get('amenity') or t.get('leisure')
    elif t.get('historic') or t.get('tourism') in ('artwork', 'attraction'): k = 'landmark'
    elif t.get('barrier') == 'gate' or t.get('entrance'): k = 'gate'
    if not k: continue
    x, z = local(float(n.get('lat')), float(n.get('lon')))
    if BX0 < x < BX1 and BZ0 < z < BZ1: pois.append({'kind': k, 'name': t.get('name'), 'pos': [round(x, 1), round(z, 1)]})
park = {'origin': course['origin'], 'bounds': [BX0, BZ0, BX1, BZ1], 'features': feats, 'pois': pois,
        'attribution': '© OpenStreetMap contributors (ODbL)'}
json.dump(park, open(os.path.join(DATA, 'course', 'park.json'), 'w'), separators=(',', ':'))
import collections
print('park features', collections.Counter(f['kind'] for f in feats), 'pois', collections.Counter(p['kind'] for p in pois), file=sys.stderr)
print('named:', sorted({(f['kind'], f['name']) for f in feats if f['name'] and f['kind'] not in ('road', 'building')}), file=sys.stderr)
