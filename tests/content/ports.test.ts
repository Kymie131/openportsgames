import { describe, expect, it } from "vitest";
import { getPorts, ports, originalSystemOf } from "@/lib/ports";
import { todayIso, isBeforeOrOn } from "@/lib/dates";

describe("catalog ports", () => {
  it("exposes a non-empty sorted list", () => {
    const list = getPorts();
    expect(list.length).toBeGreaterThan(0);
    const titles = list.map((port) => port.title);
    expect(titles).toEqual([...titles].sort((a, b) => a.localeCompare(b)));
  });

  it("uses unique lowercase kebab ids and unique titles", () => {
    const ids = ports.map((port) => port.id);
    expect(new Set(ids).size).toBe(ids.length);
    expect(ids).toEqual(
      ids.map((id) =>
        id
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/^-|-$/g, ""),
      ),
    );
    const titles = ports.map((port) => port.title);
    expect(new Set(titles).size).toBe(titles.length);
  });

  it("declares a genre and an open source state on every port", () => {
    for (const port of ports) {
      expect(port.genre, port.id).toBeTruthy();
      expect(typeof port.openSource, port.id).toBe("boolean");
    }
  });

  it("keeps original-year fields plausible", () => {
    for (const port of ports) {
      expect(port.originalYear, port.id).toBeGreaterThanOrEqual(1970);
      expect(port.originalYear, port.id).toBeLessThanOrEqual(2030);
    }
  });

  it("links only to official https sources", () => {
    for (const port of ports) {
      expect(port.sources.length, port.id).toBeGreaterThan(0);
      for (const source of port.sources) {
        expect(source, port.id).toMatch(/^https:\/\//);
      }
    }
  });

  it("never lists the same source twice on one port", () => {
    for (const port of ports) {
      expect(new Set(port.sources).size, port.id).toBe(port.sources.length);
    }
  });

  it("shares a source across ports only where one repository covers both", () => {
    // Two ports pointing at the same repository reads as a copy-paste error on
    // the detail page, so each deliberate overlap is listed here. Namco System
    // 22 ships four games from one decompilation; DXX-Rebirth and D1X-Rebirth
    // live in the same repository.
    const intentional: Record<string, string[]> = {
      "https://github.com/spacestate1/namco22-decompile": [
        "namco-system-22-dirt-dash",
        "namco-system-22-prop-cycle",
        "namco-system-22-rave-racer",
        "namco-system-22-tokyo-wars",
      ],
      "https://github.com/dxx-rebirth/dxx-rebirth": [
        "d1x-rebirth",
        "dxx-rebirth",
      ],
    };

    const owners = new Map<string, string[]>();
    for (const port of ports) {
      for (const source of port.sources) {
        owners.set(source, [...(owners.get(source) ?? []), port.id]);
      }
    }

    for (const [source, ids] of owners) {
      if (ids.length < 2) continue;
      expect([...ids].sort(), source).toEqual(
        [...(intentional[source] ?? [])].sort(),
      );
    }
  });

  it("covers at least one Android port per hardware target", () => {
    expect(ports.some((port) => port.platforms.includes("android"))).toBe(true);
  });

  it("annotates every port with its original system", () => {
    for (const port of ports) {
      expect(originalSystemOf(port.id), port.id).toBeTruthy();
    }
  });

  it("keeps optional detail fields well-formed", () => {
    for (const port of ports) {
      for (const feature of port.features ?? []) {
        expect(feature, port.id).toMatch(/^.{3,120}$/);
      }
      if (port.requirements?.minimum) {
        expect(port.requirements.minimum, port.id).toMatch(/^.{2,200}$/);
      }
      for (const shot of port.screenshots ?? []) {
        expect(shot.src, port.id).toMatch(/^https:\/\//);
        expect(shot.credit, port.id).toMatch(/^.{2,80}$/);
      }
      if (port.installGuide) {
        expect(port.installGuide.steps.length, port.id).toBeGreaterThan(0);
        for (const step of port.installGuide.steps) {
          expect(step, port.id).toMatch(/^.{3,300}$/);
        }
        if (port.installGuide.stepsEs) {
          expect(port.installGuide.stepsEs.length, port.id).toBe(port.installGuide.steps.length);
          for (const step of port.installGuide.stepsEs) {
            expect(step, port.id).toMatch(/^.{3,300}$/);
          }
        }
      }
    }
  });
});

describe("release and verification invariants", () => {
  it("requires a version and verifiedAt when verified, and forbids them when not", () => {
    for (const port of ports) {
      if (port.verified) {
        expect(port.release.version, port.id).not.toBeNull();
        expect(port.verifiedAt, port.id).toBeTruthy();
      } else {
        expect(port.verifiedAt, port.id).toBeUndefined();
      }
      if (port.release.version === null) {
        expect(port.verified, port.id).toBe(false);
        expect(port.release.date, port.id).toBeNull();
      } else {
        expect(port.release.date, port.id).not.toBeNull();
      }
    }
  });

  it("uses ISO release dates and never dates from the future", () => {
    const today = todayIso();
    for (const port of ports) {
      if (port.release.date) {
        expect(port.release.date, port.id).toMatch(/^\d{4}-\d{2}-\d{2}$/);
        expect(isBeforeOrOn(port.release.date, today), `${port.id} release date`).toBe(true);
      }
      if (port.verifiedAt) {
        expect(isBeforeOrOn(port.verifiedAt, today), `${port.id} verifiedAt`).toBe(true);
      }
    }
  });
});
