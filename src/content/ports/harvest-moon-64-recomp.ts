import type { Port } from "@/lib/ports/schema";

export const harvestMoon64Recomp: Port = {
  schema: "port",
  id: "harvest-moon-64-recomp",
  title: "Harvest Moon 64 Recompiled",
  game: "Harvest Moon 64",
  developers: ["Victor Interactive Software"],
  publisher: "Nintendo",
  originalYear: 1999,
  genre: "rpg",
  openSource: true,
  portType: "recompilation",
  platforms: ["windows", "linux", "macos"],
  status: "stable",
  release: { version: "1.2.2", date: "2026-09-25" },
  sources: ["https://github.com/HarvestMoon64Recomp/HarvestMoon64Recomp"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  originalSystem: "Nintendo 64",
  features: [
    "Widescreen and ultrawide support",
    "Mod support",
    "Windows, Linux and macOS builds",
  ],
  notes:
    "Recompilation of Harvest Moon 64; the player supplies their own legally obtained game.",
};
