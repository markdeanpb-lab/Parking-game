// Bridge to the 3D race broadcast (client/tv/race/index.js, owned by the 3D specialist).
// Kept in its own module so the TV shell can fall back to the 2D view if the 3D one is missing or throws.
import * as Race3D from './race/index.js';
import { buildRacePlan, N_PTS, STEP_M } from '../../server/game/raceplan.mjs';

export { Race3D };

// A content-free plan for the runner intros: every runner identical, no events, no real times.
// The TV must not receive the real race plan before RACE, but the 3D view needs a plan object to build the scene.
export function introPlan(round) {
  const officialS = 1500;
  const progress = Array.from({ length: N_PTS }, (_, i) => Math.round(((i * STEP_M) / 5000) * officialS * 1000) / 1000);
  const runners = (round?.runners || []).map((r) => ({ id: r.id, officialS, progress, pacingSource: 'intro' }));
  const plan = buildRacePlan(round?.roundId || 'intro', runners);
  plan.events = []; plan.commentary = [];
  return plan;
}
