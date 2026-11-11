// Vehicle dimensions + handling. Pure data, shared by physics, AI, layout and the 3D model builder.
// Lengths in metres. `shape` selects the body style in carmodels.js.

export const CAR_TYPES = {
  hatch:  { shape: 'hatch',  len: 3.75, wid: 1.68, hgt: 1.42, wheelbase: 2.4, mass: 1.0, maxSpeed: 14.5, accel: 5.2, maxSteer: 0.62 },
  mini:   { shape: 'hatch',  len: 3.45, wid: 1.6,  hgt: 1.36, wheelbase: 2.25, mass: 0.85, maxSpeed: 13, accel: 4.6, maxSteer: 0.64 },
  saloon: { shape: 'saloon', len: 4.45, wid: 1.78, hgt: 1.38, wheelbase: 2.75, mass: 1.25, maxSpeed: 15, accel: 5.5, maxSteer: 0.6 },
  estate: { shape: 'estate', len: 4.5,  wid: 1.78, hgt: 1.44, wheelbase: 2.75, mass: 1.3, maxSpeed: 13.5, accel: 4.6, maxSteer: 0.6 },
  suv:    { shape: 'suv',    len: 4.6,  wid: 1.9,  hgt: 1.7,  wheelbase: 2.8, mass: 1.7, maxSpeed: 13.5, accel: 4.8, maxSteer: 0.6 },
  bigsuv: { shape: 'suv',    len: 5.05, wid: 2.02, hgt: 1.86, wheelbase: 3.0, mass: 2.2, maxSpeed: 13, accel: 4.4, maxSteer: 0.58 },
  van:    { shape: 'van',    len: 4.7,  wid: 1.92, hgt: 1.98, wheelbase: 2.9, mass: 1.8, maxSpeed: 14, accel: 5.0, maxSteer: 0.6 },
  camper: { shape: 'camper', len: 4.5,  wid: 1.74, hgt: 1.98, wheelbase: 2.5, mass: 1.4, maxSpeed: 11, accel: 3.4, maxSteer: 0.6 },
  lorry:  { shape: 'lorry',  len: 7.6,  wid: 2.4,  hgt: 3.1,  wheelbase: 4.2, mass: 9, maxSpeed: 6, accel: 1.5, maxSteer: 0.6 },
};

// Paint colours for resident cars (very British car-park palette: mostly grey).
export const PARKED_COLOURS = [
  0x8d9299, 0x8d9299, 0xb9bec4, 0xb9bec4, 0x2d3036, 0x2d3036, 0xe9ebee, 0xe9ebee,
  0x1f3a63, 0x7a1f24, 0x2f5d48, 0x5a6b7d, 0xc7b79a, 0x3d4a57, 0x9c2f2f, 0x30475e,
];

// Mix of what you actually find parked on a terraced street. Campervans are not in the random mix:
// the track places them deliberately (track.campervans) as type 'camper'.
export const PARKED_MIX = [
  'hatch', 'hatch', 'hatch', 'mini', 'mini', 'saloon', 'saloon', 'estate', 'estate', 'suv', 'suv', 'suv', 'bigsuv', 'van',
];
