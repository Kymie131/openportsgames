import { describe, expect, it } from "vitest";
import { getGamePorts, getPortCount, getPorts, getToolPorts } from "@/lib/ports";
import { portKind } from "@/lib/ports/schema";

describe("port kinds", () => {
  it("marks only the Wii menu and the Xbox 360 kernel as system", () => {
    expect(getToolPorts().map((port) => port.id).sort()).toEqual([
      "wii-menu",
      "xbox-360-kernel",
    ]);
    for (const port of getToolPorts()) {
      expect(portKind(port), port.id).toBe("system");
    }
  });

  it("defaults every other entry to game", () => {
    for (const port of getPorts()) {
      if (port.id === "wii-menu" || port.id === "xbox-360-kernel") continue;
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
