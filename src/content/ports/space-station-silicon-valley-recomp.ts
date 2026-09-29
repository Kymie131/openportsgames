import type { Port } from "@/lib/ports/schema";

export const spaceStationSiliconValleyRecomp: Port = {
  schema: "port",
  id: "space-station-silicon-valley-recomp",
  title: "Space Station Silicon Valley Recompiled",
  game: "Space Station Silicon Valley",
  developers: ["DMA Design"],
  publisher: "Sony Computer Entertainment",
  originalYear: 1998,
  genre: "simulation",
  openSource: true,
  portType: "recompilation",
  platforms: ["windows", "linux", "macos"],
  status: "beta",
  release: { version: "0.2.0", date: "2026-03-13" },
  sources: ["https://github.com/Cellenseres/SSSV_Recomp"],
  license: {
    spdx: "NOASSERTION",
    note: "Repository ships no license file, so reuse rights are unstated.",
  },
  verified: false,
  originalSystem: "Nintendo 64",
  features: ["Widescreen support", "Mod support"],
  notes:
    "Recompilation of Space Station Silicon Valley; the player supplies their own legally obtained game.",
};
