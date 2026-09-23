import type { Port } from "@/lib/ports/schema";

export const unleashedRecompiled: Port = {
  schema: "port",
  id: "unleashed-recompiled",
  title: "UnleashedRecomp",
  game: "Sonic Unleashed",
  developers: ["Sonic Team"],
  publisher: "Sega",
  originalYear: 2008,
  genre: "platformer",
  openSource: true,
  portType: "recompilation",
  platforms: ["windows", "linux"],
  status: "stable",
  release: { version: "1.0.3", date: "2025-04-03" },
  sources: ["https://github.com/hedge-dev/UnleashedRecomp"],
  license: { spdx: "GPL-3.0" },
  aiDisclosure: false,
  verified: true,
  verifiedAt: "2026-09-22",
  originalSystem: "Xbox 360",
  features: [
    "60 FPS with high refresh rate support",
    "Ultrawide and high resolutions",
    "Mod support via the Hedge Mod Manager",
    "Achievements and mission progress",
  ],
  notes:
    "Native Windows and Linux port of Sonic Unleashed produced by statically recompiling the Xbox 360 PowerPC binary. Requires the game dump from a disc or digital copy you own; the project does not publish one and disclaims any affiliation with its author. Released by the hedge-dev team behind HedgeDev.",
};