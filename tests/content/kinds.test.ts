import { describe, expect, it } from "vitest";
import { getGamePorts, getPortCount, getPorts, getToolPorts } from "@/lib/ports";
import { portKind } from "@/lib/ports/schema";

/** Entries that are system software rather than games. */
const SYSTEM_IDS = ["wii-menu", "xbox-360-kernel"];
/** Utility / non-game entries classified as tools. */
const TOOL_IDS = [
  "amethyst-android",
  "ares",
  "awesome-open-source-games",
  "hagi",
  "psy-q-decomp",
  "rerac-launcher",
];
const NON_GAME_IDS = [...SYSTEM_IDS, ...TOOL_IDS].sort();

const byId = (id: string) => getPorts().find((port) => port.id === id);

describe("port kinds", () => {
  it("marks the Wii menu and the Xbox 360 kernel as system", () => {
    for (const id of SYSTEM_IDS) {
      const port = byId(id);
      expect(port, id).toBeDefined();
      expect(portKind(port!), id).toBe("system");
    }
  });

  it("marks the utilities as tool", () => {
    for (const id of TOOL_IDS) {
      const port = byId(id);
      expect(port, id).toBeDefined();
      expect(portKind(port!), id).toBe("tool");
    }
  });

  it("getToolPorts returns exactly the non-game entries", () => {
    expect(getToolPorts().map((port) => port.id).sort()).toEqual(NON_GAME_IDS);
  });

  it("defaults every other entry to game", () => {
    for (const port of getPorts()) {
      if (NON_GAME_IDS.includes(port.id)) continue;
      expect(portKind(port), port.id).toBe("game");
    }
  });

  it("counts only games in getPortCount", () => {
    expect(getPortCount()).toBe(getGamePorts().length);
    expect(getPortCount()).toBe(getPorts().length - getToolPorts().length);
  });

  it("keeps non-game entries reachable through the full catalog", () => {
    for (const port of getToolPorts()) {
      expect(getPorts().some((entry) => entry.id === port.id), port.id).toBe(true);
    }
  });
});
