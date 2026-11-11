#!/usr/bin/env python3
"""Convert an OpenStreetMap extract of central St Albans into the compact map
module used by the game (src/mapdata.js).

Usage:
    curl -o map.osm "https://api.openstreetmap.org/api/0.6/map?bbox=-0.3420,51.7540,-0.3340,51.7590"
    pip install shapely
    python3 tools/build_map.py map.osm src/mapdata.js

Map data (c) OpenStreetMap contributors, ODbL 1.0.

What is real: street centrelines, junctions, one-way tags on Church St and
Bernard St, speed cushions, driveway/alley access points and building footprints.
What is stylised: carriageway/pavement widths (OSM has no widths here), kerb radii,
and building fronts are trimmed back where our gameplay-width road would overlap them.
"""
import sys, json, math
import xml.etree.ElementTree as ET
from shapely.geometry import LineString, Polygon, Point, box, MultiPolygon
from shapely.ops import unary_union

LAT0, LON0 = 51.7572, -0.3372
BOUNDS = (-205.0, -170.0, 210.0, 225.0)   # minx, miny, maxx, maxy  (metres, x east / y north)
ROAD_W = 5.6        # residential carriageway with parking down one side (stylised)
BOTH_W = 7.4        # parking down both sides (Dalton St, Grange St)
CHURCH_W = 6.8      # Church St: parking both sides, the north row half up on the pavement
YARD_MAX = 2.8      # street-facing terraces further back than this behind the pavement get their fronts brought forward
YARD_TARGET = 1.5   # ... to leave a front yard this deep
MAIN_W = 7.6        # Catherine Street
PAVE_W = 1.5
FILLET = 2.5

src, dst = sys.argv[1], sys.argv[2]
root = ET.parse(src).getroot()
nodes = {n.get('id'): (float(n.get('lat')), float(n.get('lon'))) for n in root.iter('node')}
ntags = {n.get('id'): {t.get('k'): t.get('v') for t in n.iter('tag')}
         for n in root.iter('node') if n.find('tag') is not None}

def xy(i):
    lat, lon = nodes[i]
    return ((lon - LON0) * 111320 * math.cos(math.radians(LAT0)), (lat - LAT0) * 110574)

ways = {}
for w in root.iter('way'):
    ways[w.get('id')] = ({t.get('k'): t.get('v') for t in w.iter('tag')}, [n.get('ref') for n in w.iter('nd')])

def seq(way_id, a=None, b=None, rev=False):
    nd = list(ways[way_id][1])
    if rev: nd.reverse()
    i = nd.index(a) if a else 0
    j = nd.index(b) if b else len(nd) - 1
    return nd[i:j + 1]

# Junction nodes (OSM node ids)
A, B, C = '60663824', '60663825', '60663826'      # Grange/Dalton, Grange/Bernard, Grange/Church
D, E, F = '1645283881', '1645283876', '1645283853'  # Church/Bernard, Bernard/Catherine, Dalton/Catherine
G, H = '1645283852', '1645283872'                  # Grange St ends (NW dead end, SE at St Peter's St)
JUNCTIONS = {'A': A, 'B': B, 'C': C, 'D': D, 'E': E, 'F': F, 'G': G, 'H': H}

GRANGE, DALTON = '151687981', '151687980'
cath = seq('3997174')
EDGES = [
    # id, name, from, to, node list (in competition travel direction), width, flags
    ('dalton',   'Dalton Street',  'F', 'A', seq(DALTON), BOTH_W, dict(circuit=True, baySide='L', realOneway=False)),
    ('grangeAB', 'Grange Street',  'A', 'B', seq(GRANGE, A, B, rev=True), BOTH_W, dict(circuit=True, baySide='L', realOneway=False)),
    ('grangeBC', 'Grange Street',  'B', 'C', seq(GRANGE, B, C, rev=True), BOTH_W, dict(circuit=True, baySide='L', realOneway=False)),
    ('church',   'Church Street',  'C', 'D', seq('151687982') + seq('1230246220')[1:], CHURCH_W, dict(circuit=True, baySide='L', realOneway=True)),
    ('bernard',  'Bernard Street', 'D', 'B', seq('1230246221') + seq('151687985')[1:], ROAD_W, dict(circuit=True, baySide='R', realOneway=True)),
    ('bernardS', 'Bernard Street', 'D', 'E', seq('1230246222', rev=True), ROAD_W + 0.6, dict(circuit=True, baySide=None, realOneway=False)),
    ('catherine', 'Catherine Street', 'E', 'F', cath[cath.index(F):cath.index(E) + 1][::-1], MAIN_W, dict(circuit=True, baySide=None, realOneway=False)),
    ('grangeNW', 'Grange Street',  'A', 'G', seq(GRANGE, G, A, rev=True)[::-1] if False else seq(GRANGE, A, G), BOTH_W, dict(circuit=False, stub=True, baySide='L', realOneway=False)),
    ('grangeSE', 'Grange Street',  'C', 'H', seq(GRANGE, C, H, rev=True), BOTH_W, dict(circuit=False, stub=True, baySide='L', realOneway=False)),
    ('catherineW', 'Catherine Street', 'F', 'W', cath[:cath.index(F) + 1][::-1], MAIN_W, dict(circuit=False, stub=True, baySide=None, realOneway=False)),
    ('catherineE', 'Catherine Street', 'E', 'X', cath[cath.index(E):cath.index(E) + 4], MAIN_W, dict(circuit=False, stub=True, baySide=None, realOneway=False)),
]
JUNCTION_R = {'A': 5.2, 'B': 5.0, 'C': 5.0, 'D': 6.5, 'E': 5.5, 'F': 5.5}

def r2(p): return [round(p[0], 2), round(p[1], 2)]

edge_out, parts, net_nodes = [], [], set()
for eid, name, a, b, nd, w, flags in EDGES:
    pts = [xy(n) for n in nd]
    net_nodes.update(nd)
    parts.append(LineString(pts).buffer(w / 2, cap_style='round', join_style='round'))
    e = dict(id=eid, name=name, **{'from': a, 'to': b}, pts=[r2(p) for p in pts], width=w)
    e.update(flags)
    edge_out.append(e)
for k, r in JUNCTION_R.items():
    parts.append(Point(xy(JUNCTIONS[k])).buffer(r))

clip = box(*BOUNDS)
road = unary_union(parts).buffer(FILLET).buffer(-FILLET).intersection(clip).simplify(0.04)
pave = road.buffer(PAVE_W, join_style='round').difference(road).intersection(clip).simplify(0.04)
corridor = road.buffer(PAVE_W + 0.2)

def polys(g):
    if g.is_empty: return []
    gs = [g] if isinstance(g, Polygon) else [x for x in getattr(g, 'geoms', []) if isinstance(x, Polygon)]
    out = []
    for p in gs:
        if p.area < 0.5: continue
        out.append(dict(outer=[r2(c) for c in p.exterior.coords[:-1]],
                        holes=[[r2(c) for c in h.coords[:-1]] for h in p.interiors]))
    return out

# ---- buildings (trimmed back from the stylised road corridor) ----
# Church St's north side (right as you drive it) has front gardens with hedges and big overhanging trees.
church_line = LineString([e['pts'] for e in edge_out if e['id'] == 'church'][0])
bernard_line = LineString([e['pts'] for e in edge_out if e['id'] == 'bernard'][0])
church_gardens = church_line.buffer(-(CHURCH_W / 2 + PAVE_W + 2.4), single_sided=True)
buildings = []
for wid, (tags, nd) in ways.items():
    if 'building' not in tags or len(nd) < 4: continue
    p = Polygon([xy(n) for n in nd])
    if not p.is_valid: p = p.buffer(0)
    if not p.intersects(clip) or not clip.contains(p.centroid): continue
    # close up the traced bay-window zigzags so each terrace has one clean facade line (bays are modelled in 3D)
    closed = p.buffer(1.25, join_style='mitre', mitre_limit=2.0).buffer(-1.25, join_style='mitre', mitre_limit=2.0)
    if isinstance(closed, Polygon) and closed.is_valid and closed.area < p.area * 1.35: p = closed
    trimmed = p.difference(corridor).difference(church_gardens)
    if tags.get('building') in ('yes', 'house', 'semidetached_house', 'detached', 'terrace', 'residential') and not trimmed.is_empty:
        # square up the street front: fill the notches between (trimmed) bay windows along the pavement
        band = corridor.buffer(1.8).difference(corridor).difference(church_gardens)
        trimmed = unary_union([trimmed, trimmed.convex_hull.intersection(band).intersection(p.buffer(0.01).convex_hull)])
        trimmed = trimmed.buffer(0.05, join_style='mitre').buffer(-0.05, join_style='mitre')
    for q in polys(trimmed.simplify(0.45 if tags.get("building") in ("yes", "house", "terrace", "semidetached_house") else 0.15)):
        poly = Polygon(q['outer'])
        if poly.area < 12: continue
        kind = tags.get('building')
        if kind in ('yes', 'house', 'semidetached_house', 'detached', 'terrace', 'residential'): kind = 'house'
        buildings.append(dict(p=q['outer'], t=kind, d=round(poly.distance(road), 1), a=round(poly.area), poly=poly))

# Real terraces here front almost straight onto the pavement. Where a street-facing facade sits well back
# from our stylised pavement, bring that facade forward (extrude the wall segment towards the street).
street_lines = unary_union([LineString(e['pts']) for e in edge_out if e['id'] in ('dalton', 'grangeAB', 'grangeBC', 'church', 'bernard', 'grangeNW', 'grangeSE')])
others = unary_union([bd['poly'] for bd in buildings])
extended = 0
for bd in buildings:
    poly = bd['poly']
    if bd['t'] not in ('house', 'apartments') or bd['a'] < 30: continue
    ring = list(poly.exterior.coords)[:-1]
    add = []
    for i in range(len(ring)):
        a, b = ring[i], ring[(i + 1) % len(ring)]
        L = math.hypot(b[0] - a[0], b[1] - a[1])
        if L < 3.5: continue
        tx, ty = (b[0] - a[0]) / L, (b[1] - a[1]) / L
        mid = ((a[0] + b[0]) / 2, (a[1] + b[1]) / 2)
        nx, ny = ty, -tx
        if poly.contains(Point(mid[0] + nx * 0.3, mid[1] + ny * 0.3)): nx, ny = -nx, -ny   # outward
        D = Point(mid).distance(road)
        if Point(mid[0] + nx * 1.0, mid[1] + ny * 1.0).distance(road) > D - 0.8: continue    # not facing the road
        if Point(mid).distance(street_lines) > 16: continue
        yard = D - PAVE_W
        ymax, ytarget = YARD_MAX, YARD_TARGET
        if Point(mid).distance(bernard_line) < 12 and bernard_line.project(Point(mid)) < 165:
            ymax, ytarget = 0.45, 0.12          # straight part of Bernard St: houses flush to the pavement (photo 6)
        if yard <= ymax or yard > 9: continue
        sh = yard - ytarget
        quad = Polygon([a, b, (b[0] + nx * sh, b[1] + ny * sh), (a[0] + nx * sh, a[1] + ny * sh)])
        quad = quad.difference(others.difference(poly).buffer(0.3)).difference(corridor).difference(church_gardens)
        if quad.area > 2: add.append(quad)
    if add:
        np_ = unary_union([poly] + add).buffer(0.05, join_style='mitre').buffer(-0.05, join_style='mitre')
        if isinstance(np_, Polygon):
            np_ = np_.simplify(0.15)
            bd['p'] = [r2(c) for c in np_.exterior.coords[:-1]]; bd['poly'] = np_; bd['a'] = round(np_.area); bd['d'] = round(np_.distance(road), 1)
            extended += 1
print('facades brought forward:', extended)
all_b = unary_union([bd['poly'] for bd in buildings])
for bd in buildings: del bd['poly']

# ---- context: other roads, paths, car parks, parks, walls ----
ctx_parts, foot_parts, accesses, walls, areas = [], [], [], [], []
net_lines = {e['id']: LineString(e['pts']) for e in edge_out}
for wid, (tags, nd) in ways.items():
    pts = [xy(n) for n in nd]
    if len(pts) < 2: continue
    hw = tags.get('highway')
    if hw:
        ls = LineString(pts)
        if not ls.intersects(clip): continue
        in_net = all(n in net_nodes for n in nd) and tags.get('name') in ('Grange Street', 'Dalton Street', 'Church Street', 'Bernard Street')
        if in_net: continue
        if hw in ('footway', 'path', 'cycleway', 'pedestrian', 'steps'):
            foot_parts.append(ls.buffer(1.0 if hw != 'pedestrian' else 2.5, cap_style='flat'))
        else:
            w = {'primary': 8.0, 'unclassified': 6.0, 'residential': 5.6, 'service': 3.2}.get(hw, 4.0)
            ctx_parts.append(ls.buffer(w / 2, cap_style='round'))
            if hw == 'service':
                for i, n in enumerate(nd):
                    if n in net_nodes and (i == 0 or i == len(nd) - 1):
                        other = pts[1] if i == 0 else pts[-2]
                        accesses.append(dict(at=r2(pts[i]), toward=r2(other), kind=tags.get('service') or 'service'))
    elif tags.get('barrier') in ('wall', 'fence'):
        ls = LineString(pts).intersection(clip).difference(corridor)
        for g in ([ls] if ls.geom_type == 'LineString' else getattr(ls, 'geoms', [])):
            if g.geom_type == 'LineString' and g.length > 1:
                walls.append([r2(c) for c in g.coords])
    elif tags.get('leisure') == 'park' or tags.get('amenity') == 'parking' or tags.get('landuse') in ('grass', 'cemetery', 'religious'):
        if len(pts) >= 4:
            p = Polygon(pts)
            if not p.is_valid: p = p.buffer(0)
            p = p.intersection(clip).difference(corridor)
            kind = 'park' if tags.get('leisure') == 'park' or tags.get('landuse') in ('grass', 'cemetery', 'religious') else 'carpark'
            for q in polys(p.simplify(0.2)):
                areas.append(dict(kind=kind, **q))

ctx = unary_union(ctx_parts)
yard_ctx = unary_union(ctx_parts + foot_parts).intersection(clip).difference(corridor).simplify(0.1)
foot = unary_union(foot_parts).intersection(clip).difference(corridor).difference(ctx.buffer(0.01)).simplify(0.1)

# front yards: the strip between the back of the pavement and the street-facing houses (paved, walled)
near_b = unary_union([Polygon(bd['p']).buffer(3.2) for bd in buildings if bd['d'] < PAVE_W + 4.5 and bd['t'] in ('house', 'apartments', 'retail')])
yard_zone = road.buffer(PAVE_W + YARD_MAX + 1.4).difference(road.buffer(PAVE_W - 0.02)).intersection(near_b)
yards = yard_zone.difference(all_b).difference(yard_ctx.buffer(0.2)).intersection(clip).simplify(0.08)

cushions = []
for n in net_nodes:
    if ntags.get(n, {}).get('traffic_calming') in ('cushion', 'hump'):
        cushions.append(r2(xy(n)))

out = dict(
    meta=dict(origin=[LAT0, LON0], bounds=list(BOUNDS), roadWidth=ROAD_W, paveWidth=PAVE_W,
              attribution='Map data (c) OpenStreetMap contributors, ODbL 1.0'),
    nodes={k: r2(xy(v)) for k, v in JUNCTIONS.items()},
    edges=edge_out, road=polys(road), pave=polys(pave), buildings=buildings,
    context=polys(ctx), footways=polys(foot), yards=polys(yards), areas=areas, walls=walls,
    accesses=accesses, cushions=cushions,
)
js = ('// GENERATED by tools/build_map.py from OpenStreetMap data. Do not edit by hand.\n'
      '// Map data (c) OpenStreetMap contributors, licensed under the ODbL 1.0.\n'
      '// Coordinates: metres, x = east, y = north, origin lat %.4f lon %.4f.\n'
      'export default %s;\n') % (LAT0, LON0, json.dumps(out, separators=(',', ':')))
open(dst, 'w').write(js)
print('edges', len(edge_out), 'road polys', len(out['road']), 'holes', sum(len(p['holes']) for p in out['road']),
      'pave', len(out['pave']), 'buildings', len(buildings), 'ctx', len(out['context']), 'foot', len(out['footways']),
      'areas', len(areas), 'walls', len(walls), 'accesses', accesses, 'cushions', cushions, 'bytes', len(js))
for e in edge_out: print(e['id'], e['from'], e['to'], round(LineString(e['pts']).length), e['pts'][0], e['pts'][-1])
