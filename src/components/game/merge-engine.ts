export const WORLD_WIDTH = 360;
export const WORLD_HEIGHT = 480;

export const DEAD_LINE_Y = 74;

export const DROP_COOLDOWN = 0.28;

export const SPAWN_MAX_LEVEL = 4;

const LEVEL_RADII = [15, 20, 26, 33, 41, 50, 60, 71, 83, 96, 110];
export const MAX_LEVEL = LEVEL_RADII.length - 1;

const LEVEL_COLORS = [
  "#f87171",
  "#fb923c",
  "#fbbf24",
  "#a3e635",
  "#34d399",
  "#22d3ee",
  "#60a5fa",
  "#a78bfa",
  "#f472b6",
  "#f43f5e",
  "#e879f9",
];

const LEVEL_SYMBOLS = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "★"];

const SPAWN_WEIGHTS = [0.35, 0.3, 0.2, 0.1, 0.05];

const GRAVITY = 1500;
const SUBSTEP = 1 / 120;
const MAX_DROP_DT = 0.05;
const SOLVER_ITERATIONS = 6;
const RESTITUTION = 0.06;
const AIR_DAMPING = 0.9999;
const GROUND_FRICTION = 0.86;
const WALL_RESTITUTION = 0.3;
const MAX_SPEED = 1800;
const POSITION_CORRECTION = 0.9;
const FRICTION = 0.4;
const REST_SPEED = 14;
const OVERFLOW_TIME = 1.6;
const MAX_LEVEL_BONUS = 500;

export interface Body {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  level: number;
  radius: number;
  merged: boolean;
  settledFor: number;
}

export interface MergeWorld {
  width: number;
  height: number;
  gravity: number;
  deadLine: number;
  bodies: Body[];
  score: number;
  best: number;
  gameOver: boolean;
  dropCooldown: number;
  nextId: number;
}

export function radiusForLevel(level: number): number {
  const clamped = Math.max(0, Math.min(MAX_LEVEL, Math.trunc(level)));
  return LEVEL_RADII[clamped];
}

export function colorForLevel(level: number): string {
  const clamped = Math.max(0, Math.min(MAX_LEVEL, Math.trunc(level)));
  return LEVEL_COLORS[clamped];
}

export function symbolForLevel(level: number): string {
  const clamped = Math.max(0, Math.min(MAX_LEVEL, Math.trunc(level)));
  return LEVEL_SYMBOLS[clamped];
}

export function randomSpawnLevel(rng: () => number = Math.random): number {
  const roll = rng();
  let acc = 0;
  for (let level = 0; level < SPAWN_WEIGHTS.length; level += 1) {
    acc += SPAWN_WEIGHTS[level];
    if (roll < acc) return level;
  }
  return SPAWN_WEIGHTS.length - 1;
}

export function mergeScore(level: number): number {
  return ((level + 1) * (level + 2)) / 2;
}

export function canMerge(a: Body, b: Body): boolean {
  return !a.merged && !b.merged && a.level === b.level;
}

export function createWorld(best = 0): MergeWorld {
  return {
    width: WORLD_WIDTH,
    height: WORLD_HEIGHT,
    gravity: GRAVITY,
    deadLine: DEAD_LINE_Y,
    bodies: [],
    score: 0,
    best: Math.max(0, best),
    gameOver: false,
    dropCooldown: 0,
    nextId: 1,
  };
}

function makeBody(world: MergeWorld, x: number, y: number, level: number, vx = 0, vy = 0): Body {
  return {
    id: world.nextId++,
    x,
    y,
    vx,
    vy,
    level,
    radius: radiusForLevel(level),
    merged: false,
    settledFor: 0,
  };
}

export function clampDropX(x: number, level: number, world: MergeWorld): number {
  const radius = radiusForLevel(level);
  return Math.max(radius, Math.min(world.width - radius, x));
}

export function dropShape(world: MergeWorld, x: number, level: number): Body | null {
  if (world.gameOver || world.dropCooldown > 0) return null;
  const clamped = clampDropX(x, level, world);
  const body = makeBody(world, clamped, radiusForLevel(level) + 2, level);
  world.bodies.push(body);
  world.dropCooldown = DROP_COOLDOWN;
  return body;
}

function wallCollide(body: Body, world: MergeWorld): void {
  const { radius } = body;
  if (body.x - radius < 0) {
    body.x = radius;
    if (body.vx < 0) body.vx = -body.vx * WALL_RESTITUTION;
  } else if (body.x + radius > world.width) {
    body.x = world.width - radius;
    if (body.vx > 0) body.vx = -body.vx * WALL_RESTITUTION;
  }
  if (body.y + radius > world.height) {
    body.y = world.height - radius;
    if (body.vy > 0) body.vy = -body.vy * RESTITUTION;
    body.vx *= GROUND_FRICTION;
  }
}

function resolveCollision(a: Body, b: Body, dx: number, dy: number, dist: number): void {
  const nx = dx / dist;
  const ny = dy / dist;
  const overlap = a.radius + b.radius - dist;
  const invA = 1 / (a.radius * a.radius);
  const invB = 1 / (b.radius * b.radius);
  const invSum = invA + invB;

  const correction = (Math.max(0, overlap) * POSITION_CORRECTION) / invSum;
  a.x -= nx * correction * invA;
  a.y -= ny * correction * invA;
  b.x += nx * correction * invB;
  b.y += ny * correction * invB;

  const rvx = b.vx - a.vx;
  const rvy = b.vy - a.vy;
  const normalVelocity = rvx * nx + rvy * ny;
  if (normalVelocity > 0) return;

  const impulse = (-(1 + RESTITUTION) * normalVelocity) / invSum;
  a.vx -= impulse * nx * invA;
  a.vy -= impulse * ny * invA;
  b.vx += impulse * nx * invB;
  b.vy += impulse * ny * invB;

  const tx = rvx - normalVelocity * nx;
  const ty = rvy - normalVelocity * ny;
  const tangentLength = Math.hypot(tx, ty);
  if (tangentLength <= 1e-4) return;
  const txn = tx / tangentLength;
  const tyn = ty / tangentLength;
  const tangentVelocity = rvx * txn + rvy * tyn;
  const frictionImpulse = (-tangentVelocity / invSum) * FRICTION;
  a.vx -= frictionImpulse * txn * invA;
  a.vy -= frictionImpulse * tyn * invA;
  b.vx += frictionImpulse * txn * invB;
  b.vy += frictionImpulse * tyn * invB;
}

interface PendingMerge {
  x: number;
  y: number;
  vx: number;
  vy: number;
  level: number;
}

function applyMerges(world: MergeWorld, merges: PendingMerge[]): void {
  if (merges.length === 0) return;
  world.bodies = world.bodies.filter((body) => !body.merged);
  for (const merge of merges) {
    if (merge.level > MAX_LEVEL) {
      world.score += MAX_LEVEL_BONUS;
      continue;
    }
    world.bodies.push(makeBody(world, merge.x, merge.y, merge.level, merge.vx, merge.vy));
    world.score += mergeScore(merge.level - 1);
  }
}

function updateOverflow(world: MergeWorld, dt: number): void {
  for (const body of world.bodies) {
    const speed = Math.hypot(body.vx, body.vy);
    if (body.y - body.radius < world.deadLine && speed < REST_SPEED) {
      body.settledFor += dt;
      if (body.settledFor >= OVERFLOW_TIME) world.gameOver = true;
    } else {
      body.settledFor = 0;
    }
  }
}

function substep(world: MergeWorld, dt: number): void {
  const { bodies } = world;

  for (const body of bodies) {
    body.vy += world.gravity * dt;
    body.vx *= AIR_DAMPING;
    body.vy *= AIR_DAMPING;
    const speed = Math.hypot(body.vx, body.vy);
    if (speed > MAX_SPEED) {
      const scale = MAX_SPEED / speed;
      body.vx *= scale;
      body.vy *= scale;
    }
    body.x += body.vx * dt;
    body.y += body.vy * dt;
    wallCollide(body, world);
  }

  const merges: PendingMerge[] = [];
  for (let iteration = 0; iteration < SOLVER_ITERATIONS; iteration += 1) {
    for (let i = 0; i < bodies.length; i += 1) {
      const a = bodies[i];
      if (a.merged) continue;
      for (let j = i + 1; j < bodies.length; j += 1) {
        const b = bodies[j];
        if (b.merged) continue;
        const dx = b.x - a.x;
        const dy = b.y - a.y;
        const minDist = a.radius + b.radius;
        const distSq = dx * dx + dy * dy;
        if (distSq >= minDist * minDist || distSq === 0) continue;

        if (canMerge(a, b)) {
          a.merged = true;
          b.merged = true;
          merges.push({
            x: (a.x + b.x) / 2,
            y: (a.y + b.y) / 2,
            vx: (a.vx + b.vx) / 2,
            vy: (a.vy + b.vy) / 2,
            level: a.level + 1,
          });
          continue;
        }

        resolveCollision(a, b, dx, dy, Math.sqrt(distSq));
      }
    }
  }

  applyMerges(world, merges);
  updateOverflow(world, dt);
}

export function stepWorld(world: MergeWorld, dt: number): void {
  world.dropCooldown = Math.max(0, world.dropCooldown - Math.max(0, dt));
  if (world.gameOver) return;

  let remaining = Math.min(Math.max(dt, 0), MAX_DROP_DT);
  while (remaining > 1e-5) {
    const step = Math.min(SUBSTEP, remaining);
    substep(world, step);
    remaining -= step;
    if (world.gameOver) break;
  }
  if (world.score > world.best) world.best = world.score;
}
