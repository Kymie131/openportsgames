import type { Port } from "@/lib/ports/schema";

export const nxEngine: Port = {
  schema: "port",
  id: "nxengine-evo",
  title: "NxEngine-Evo",
  game: "Cave Story",
  developers: ["Studio Pixel"],
  publisher: "Studio Pixel",
  originalYear: 2004,
  portType: "reimplementation",
  genre: "platformer",
  openSource: true,
  platforms: ["windows", "linux", "macos"],
  status: "stable",
  release: { version: "2.6.5-1", date: "2021-07-08" },
  sources: ["https://github.com/nxengine/nxengine-evo"],
  license: {
    spdx: "GPL-3.0",
  },
  aiDisclosure: false,
  verified: true,
  verifiedAt: "2026-09-19",
  notes:
    "Refactored continuation of NxEngine, a native engine recreation of the freeware original Cave Story. The repository's official release predates recent commits; builds also track master.",
};
