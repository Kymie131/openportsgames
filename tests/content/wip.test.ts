import { describe, expect, it } from "vitest";
import { getGamePorts } from "@/lib/ports";

describe("work-in-progress entries", () => {
  const games = getGamePorts();
  const wip = games.filter((port) => port.wip);

  it("flags the early decompilations, including the Pokemon Black example", () => {
    expect(wip.length).toBeGreaterThan(20);
    expect(wip.some((port) => port.id === "black")).toBe(true);
  });

  it("never marks an entry that already has a release", () => {
    for (const port of wip) {
      expect(port.release.version, port.id).toBeNull();
    }
  });

  it("only marks games", () => {
    for (const port of wip) {
      expect(port.kind ?? "game", port.id).toBe("game");
    }
  });
});
