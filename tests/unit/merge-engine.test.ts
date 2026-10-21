import { describe, expect, it } from "vitest";
import {
  DROP_COOLDOWN,
  MAX_LEVEL,
  SPAWN_MAX_LEVEL,
  WORLD_HEIGHT,
  WORLD_WIDTH,
  canMerge,
  clampDropX,
  colorForLevel,
  createWorld,
  dropShape,
  mergeScore,
  radiusForLevel,
  randomSpawnLevel,
  stepWorld,
  symbolForLevel,
  type Body,
  type MergeWorld,
} from "@/components/game/merge-engine";

function makeBody(x: number, y: number, level: number): Body {
  return {
    id: Math.random(),
    x,
    y,
    vx: 0,
    vy: 0,
    level,
    radius: radiusForLevel(level),
    merged: false,
    settledFor: 0,
  };
}

function runFrames(world: MergeWorld, frames: number, dt = 1 / 60): void {
  for (let i = 0; i < frames; i += 1) stepWorld(world, dt);
}

describe("level lookups", () => {
  it("grows the radius with every level and clamps out-of-range input", () => {
    for (let level = 0; level < MAX_LEVEL; level += 1) {
      expect(radiusForLevel(level + 1)).toBeGreaterThan(radiusForLevel(level));
    }
    expect(radiusForLevel(-10)).toBe(radiusForLevel(0));
    expect(radiusForLevel(999)).toBe(radiusForLevel(MAX_LEVEL));
  });

  it("exposes a color and a symbol for every level", () => {
    for (let level = 0; level <= MAX_LEVEL; level += 1) {
      expect(colorForLevel(level)).toMatch(/^#/);
      expect(symbolForLevel(level).length).toBeGreaterThan(0);
    }
  });
});

describe("randomSpawnLevel", () => {
  it("maps low and high rolls to the spawn bounds", () => {
    expect(randomSpawnLevel(() => 0)).toBe(0);
    expect(randomSpawnLevel(() => 0.99)).toBe(SPAWN_MAX_LEVEL);
  });

  it("never spawns above the spawn bound", () => {
    for (let i = 0; i < 1000; i += 1) {
      const level = randomSpawnLevel(() => Math.random());
      expect(level).toBeGreaterThanOrEqual(0);
      expect(level).toBeLessThanOrEqual(SPAWN_MAX_LEVEL);
    }
  });
});

describe("canMerge", () => {
  it("only allows equal, unconsumed levels to merge", () => {
    expect(canMerge(makeBody(0, 0, 2), makeBody(0, 0, 2))).toBe(true);
    expect(canMerge(makeBody(0, 0, 2), makeBody(0, 0, 3))).toBe(false);

    const consumed = makeBody(0, 0, 2);
    consumed.merged = true;
    expect(canMerge(consumed, makeBody(0, 0, 2))).toBe(false);
  });
});

describe("clampDropX", () => {
  it("keeps the whole shape inside the field", () => {
    const world = createWorld();
    const radius = radiusForLevel(0);
    expect(clampDropX(-100, 0, world)).toBe(radius);
    expect(clampDropX(10000, 0, world)).toBe(WORLD_WIDTH - radius);
    expect(clampDropX(WORLD_WIDTH / 2, 0, world)).toBe(WORLD_WIDTH / 2);
  });
});

describe("dropShape", () => {
  it("spawns a body, then enforces the drop cooldown", () => {
    const world = createWorld();
    const first = dropShape(world, 100, 0);
    expect(first).not.toBeNull();
    expect(world.bodies).toHaveLength(1);
    expect(world.dropCooldown).toBe(DROP_COOLDOWN);
    expect(dropShape(world, 100, 0)).toBeNull();

    stepWorld(world, DROP_COOLDOWN);
    expect(dropShape(world, 100, 0)).not.toBeNull();
  });

  it("does nothing once the game is over", () => {
    const world = createWorld();
    world.gameOver = true;
    expect(dropShape(world, 100, 0)).toBeNull();
    expect(world.bodies).toHaveLength(0);
  });
});

describe("stepWorld physics", () => {
  it("pulls a dropped shape down to the floor", () => {
    const world = createWorld();
    world.bodies = [makeBody(WORLD_WIDTH / 2, 40, 0)];
    runFrames(world, 300);
    const body = world.bodies[0];
    expect(body.y).toBeGreaterThan(40);
    expect(Math.abs(body.y - (WORLD_HEIGHT - body.radius))).toBeLessThan(6);
  });

  it("keeps shapes inside the side walls", () => {
    const world = createWorld();
    const body = makeBody(5, 40, 0);
    body.vx = -800;
    world.bodies = [body];
    runFrames(world, 120);
    expect(body.x).toBeGreaterThanOrEqual(body.radius - 0.5);
    expect(body.x).toBeLessThanOrEqual(WORLD_WIDTH - body.radius + 0.5);
  });
});

describe("merging", () => {
  it("combines two equal shapes into the next level and scores points", () => {
    const world = createWorld();
    world.bodies = [makeBody(100, 60, 0), makeBody(104, 60, 0)];
    stepWorld(world, 1 / 60);

    expect(world.bodies).toHaveLength(1);
    expect(world.bodies[0].level).toBe(1);
    expect(world.score).toBe(mergeScore(0));
  });

  it("removes two top-level shapes and awards the bonus", () => {
    const world = createWorld();
    world.bodies = [makeBody(140, 60, MAX_LEVEL), makeBody(144, 60, MAX_LEVEL)];
    stepWorld(world, 1 / 60);

    expect(world.bodies).toHaveLength(0);
    expect(world.score).toBeGreaterThan(mergeScore(MAX_LEVEL - 1));
  });
});

describe("game over", () => {
  it("ends the game when a shape rests above the line long enough", () => {
    const world = createWorld();
    world.gravity = 0;
    const radius = radiusForLevel(0);
    world.bodies = [makeBody(WORLD_WIDTH / 2, world.deadLine - radius - 5, 0)];
    runFrames(world, 140);
    expect(world.gameOver).toBe(true);
  });

  it("does not end the game for a shape below the line", () => {
    const world = createWorld();
    world.gravity = 0;
    world.bodies = [makeBody(WORLD_WIDTH / 2, world.deadLine + 300, 0)];
    runFrames(world, 200);
    expect(world.gameOver).toBe(false);
  });
});
