import { describe, expect, it } from "vitest";
import { applyPortExtras } from "@/content/port-extras";
import { portLastModified } from "@/lib/ports";
import type { Port } from "@/lib/ports/schema";

const base = {
  schema: "port",
  id: "ship-of-harkinian",
  status: "stable",
  title: "Ship of Harkinian",
  game: "The Legend of Zelda: Ocarina of Time",
  installGuide: { steps: ["Custom step from the content file."] },
  screenshots: [{ src: "https://example.com/a.jpg", alt: "A", credit: "Test" }],
};

describe("applyPortExtras", () => {
  it("keeps the content file steps and adds the extra controls", () => {
    const merged = applyPortExtras(base) as typeof base & {
      installGuide: { steps: string[]; controls?: unknown[] };
    };

    expect(merged.installGuide.steps).toEqual(["Custom step from the content file."]);
    expect(merged.installGuide.controls?.length).toBeGreaterThan(0);
  });

  it("adds videos to the entry", () => {
    const merged = applyPortExtras(base) as typeof base & { videos?: unknown[] };
    expect(merged.videos?.length).toBeGreaterThan(0);
  });

  it("does not duplicate screenshots that are already in the content file", () => {
    const extraScreenshots = [
      { src: "https://example.com/a.jpg", alt: "A", credit: "Test" },
      { src: "https://example.com/b.jpg", alt: "B", credit: "Test" },
    ];
    const merged = applyPortExtras({
      ...base,
      id: "2-ship-2-harkinian-2s2h",
      screenshots: extraScreenshots,
    }) as { screenshots: { src: string }[] };

    const sources = merged.screenshots.map((shot) => shot.src);
    expect(new Set(sources).size).toBe(sources.length);
  });

  it("ignores takedown entries and unknown ids", () => {
    const takedown = { schema: "port", id: "ship-of-harkinian", status: "takedown" };
    expect(applyPortExtras(takedown)).toBe(takedown);
    expect(applyPortExtras({ ...base, id: "not-a-real-port" })).toEqual({
      ...base,
      id: "not-a-real-port",
    });
  });
});

describe("portLastModified", () => {
  const port = {
    release: { version: "1.0.0", date: "2025-01-01" },
    verifiedAt: "2025-06-01",
  } as Port;

  it("uses the newest derived date", () => {
    expect(portLastModified(port)).toBe("2025-06-01");
  });

  it("takes release history and updatedAt into account", () => {
    expect(
      portLastModified({
        ...port,
        releases: [{ version: "1.1.0", date: "2025-09-01" }],
      }),
    ).toBe("2025-09-01");
    expect(portLastModified({ ...port, updatedAt: "2025-12-24" })).toBe("2025-12-24");
  });

  it("returns undefined when there is no date at all", () => {
    expect(portLastModified({ release: { version: null, date: null } } as Port)).toBeUndefined();
  });
});
