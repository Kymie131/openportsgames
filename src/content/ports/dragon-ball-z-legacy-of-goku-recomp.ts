import type { Port } from "@/lib/ports/schema";

export const dragonBallZLegacyOfGokuRecomp: Port = {
  schema: "port",
  id: "dragon-ball-z-legacy-of-goku-recomp",
  title: "Dragon Ball Z: The Legacy of Goku Recompiled",
  game: "Dragon Ball Z: The Legacy of Goku",
  developers: ["mstan"],
  publisher: "Bandai",
  originalYear: 2002,
  genre: "rpg",
  openSource: true,
  portType: "recompilation",
  platforms: ["windows"],
  status: "alpha",
  release: { version: "0.0.2", date: "2026-08-03" },
  sources: ["https://github.com/mstan/DragonBallZLegacyOfGokuRecomp"],
  license: {
    spdx: "NOASSERTION",
    note: "No project-wide license file detected in the repository.",
  },
  verified: false,
  originalSystem: "Game Boy Advance",
  features: [
    "Static recompilation of the GBA executable",
    "Experimental preview: byproduct of the gbarecomp framework",
  ],
  notes:
    "Experimental recompilation. The player supplies their own legally obtained ROM; the repository ships no game content.",
};
