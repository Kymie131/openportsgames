import type { Port } from "@/lib/ports/schema";

export const megaManXSnesRecomp: Port = {
  schema: "port",
  id: "mega-man-x-snes-recomp",
  title: "Mega Man X SNES Recompiled",
  game: "Mega Man X",
  developers: ["Capcom"],
  publisher: "Capcom",
  originalYear: 1993,
  genre: "platformer",
  openSource: true,
  portType: "recompilation",
  platforms: ["windows", "linux"],
  status: "beta",
  release: { version: "1.6.6", date: "2026-09-25" },
  sources: ["https://github.com/mstan/MegaManXSNESRecomp"],
  license: {
    spdx: "NOASSERTION",
    note: "Repository declares no SPDX license, so reuse rights are unstated.",
  },
  verified: false,
  originalSystem: "Super Nintendo",
  features: [
    "Adaptive and fixed widescreen respecting display aspect",
    "Launcher can be reopened mid-game with Ctrl+L or Select+L3",
    "Shared SNES shader presets and pixel-aspect geometry, saved on close",
  ],
  notes:
    "Mega Man X recompiled for the Super Nintendo with snesrecomp; the player supplies their own legally obtained game.",
};
