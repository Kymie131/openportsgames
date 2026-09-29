import type { Port } from "@/lib/ports/schema";

export const conkerBadFurDayRecomp: Port = {
  schema: "port",
  id: "conker-bad-fur-day-recomp",
  title: "Conker's Bad Fur Day Recompiled",
  game: "Conker's Bad Fur Day",
  developers: ["Rare"],
  publisher: "Rare",
  originalYear: 2001,
  genre: "platformer",
  openSource: true,
  portType: "recompilation",
  platforms: ["windows", "linux", "macos"],
  status: "beta",
  release: { version: "0.1.4", date: "2026-09-28" },
  sources: ["https://github.com/sciaschi/CBFD-Recompiled"],
  license: { spdx: "MIT" },
  aiDisclosure: false,
  verified: false,
  originalSystem: "Nintendo 64",
  features: [
    "RT64 renderer with higher resolutions, widescreen and anti-aliasing",
    "High frame-rate presentation",
    "Remappable controller and keyboard controls with rumble",
    "Mod support through .nrm function patches and hooks",
  ],
  notes:
    "Recompilation of Conker's Bad Fur Day; the player supplies their own legally obtained game.",
};
