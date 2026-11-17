# Detect runs whose GPS leaves the canonical course (e.g. funfair diversions).
import json, math, sqlite3, os, sys
DATA = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'data')
db = sqlite3.connect(os.path.join(DATA, 'markrun.db'))
c = json.load(open(os.path.join(DATA, 'course', 'course.json')))
LAT0, LON0 = c['origin']['lat'], c['origin']['lon']
KX = 111320 * math.cos(math.radians(LAT0)); KZ = 110540
P = [(p[0], p[2]) for p in c['points']]
def segdist(p, a, b):
    ax, az = a; bx, bz = b; px, pz = p
    dx, dz = bx - ax, bz - az; L = dx * dx + dz * dz
    t = max(0, min(1, ((px - ax) * dx + (pz - az) * dz) / L)) if L else 0
    return math.hypot(px - ax - t * dx, pz - az - t * dz)
def dist_to_course(p):
    return min(segdist(p, P[i], P[i + 1]) for i in range(len(P) - 1))
rows = db.execute("select p.run_date, s.raw_json, m.activity_id from performances p join matches m using(run_date) join streams s on s.activity_id=m.activity_id").fetchall()
out = []
for rd, raw, aid in rows:
    st = json.loads(raw)
    if 'location' not in st: continue
    loc, d = st['location'], st['distance']
    dev = [dist_to_course(((q[1] - LON0) * KX, -(q[0] - LAT0) * KZ)) for q in loc]
    # sustained deviation segments
    segs = []; i = 0
    while i < len(dev):
        if dev[i] > 35:
            j = i
            while j < len(dev) and dev[j] > 20: j += 1
            if d[min(j, len(d) - 1)] - d[i] > 80: segs.append((i, j, round(d[i]), round(d[min(j, len(d)-1)]), round(max(dev[i:j]))))
            i = j
        else: i += 1
    if segs: out.append((rd, aid, segs))
for o in sorted(out): print(o)
