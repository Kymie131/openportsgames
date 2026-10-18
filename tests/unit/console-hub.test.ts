import { describe, expect, it } from "vitest";
import { consoleDefs } from "@/content/consoles";
import {
  SYSTEM_LABELS_BY_CONSOLE,
  getAllConsoleHubs,
  getConsoleHub,
} from "@/lib/console-hub";
import { originalSystemsOf, ports } from "@/lib/ports";

describe("console hub", () => {
  it("builds a hub for every console in the registry", () => {
    const hubs = getAllConsoleHubs();
    expect(hubs.map((hub) => hub.def.slug).sort()).toEqual(
      consoleDefs.map((def) => def.slug).sort(),
    );
  });

  it("lists only builds that target the console in `running`", () => {
    for (const hub of getAllConsoleHubs()) {
      for (const port of hub.running) {
        expect(port.platforms, `${hub.def.slug} / ${port.id}`).toContain(hub.def.platform);
      }
    }
  });

  it("lists only ports of that console's games in `games`, without duplicates", () => {
    for (const hub of getAllConsoleHubs()) {
      const labels = new Set(SYSTEM_LABELS_BY_CONSOLE[hub.def.slug] ?? []);
      const runningIds = new Set(hub.running.map((port) => port.id));
      for (const port of hub.games) {
        expect(runningIds.has(port.id), `${hub.def.slug} / ${port.id} duplicado`).toBe(false);
        expect(
          originalSystemsOf(port.id).some((system) => labels.has(system)),
          `${hub.def.slug} / ${port.id} no es de esa consola`,
        ).toBe(true);
      }
    }
  });

  it("groups every publishing host, GitHub or not", () => {
    for (const hub of getAllConsoleHubs()) {
      const entries = [...hub.running, ...hub.games];
      const expected = new Set<string>();
      for (const port of entries) {
        for (const url of port.sources) expected.add(new URL(url).host.replace(/^www\./, ""));
      }
      expect(hub.sources.map((source) => source.host).sort(), hub.def.slug).toEqual(
        [...expected].sort(),
      );
      for (const source of hub.sources) {
        expect(source.github).toBe(source.host === "github.com");
        expect(source.portIds.length).toBeGreaterThan(0);
      }
    }
  });

  it("keeps the PSP hub in sync with the PSP entries", () => {
    const hub = getConsoleHub("playstation-portable");
    expect(hub).toBeDefined();
    const ids = hub!.running.map((port) => port.id);
    for (const id of ["perfect-dark-psp", "mk64-portable", "gtasa-psp", "psp-latro"]) {
      expect(ids, id).toContain(id);
    }
    expect(ids.every((id) => ports.some((port) => port.id === id))).toBe(true);
  });

  it("returns undefined for an unknown console", () => {
    expect(getConsoleHub("no-existe")).toBeUndefined();
  });

  it("splits entries into ports, homebrew and plugins by category", () => {
    const psp = getConsoleHub("playstation-portable")!;
    const homebrewIds = psp.homebrew.map((port) => port.id);
    const pluginIds = psp.plugins.map((port) => port.id);
    const runningIds = psp.running.map((port) => port.id);

    expect(homebrewIds).toContain("spelunky-psp-homebrew-remake");
    expect(pluginIds).toContain("prxshot-psp-screenshot-plugin");
    for (const id of runningIds) {
      expect(homebrewIds.includes(id) || pluginIds.includes(id), id).toBe(false);
    }
    for (const group of [psp.running, psp.homebrew, psp.plugins]) {
      for (const port of group) expect(port.platforms).toContain("psp");
    }
  });

  it("exposes the emulators registered for the console", () => {
    expect(getConsoleHub("playstation")!.emulators.length).toBeGreaterThan(0);
    expect(getConsoleHub("mega-drive")!.emulators.length).toBeGreaterThan(0);
    expect(getConsoleHub("arcade")!.emulators.length).toBe(0);
  });
});
