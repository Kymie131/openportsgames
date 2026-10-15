import type { Port } from "@/lib/ports/schema";

export const TinyToonAdventuresBusterBustsLoosePcPort: Port = {
  schema: "port",
  id: "tiny-toon-adventures-buster-busts-loose-pc-port",
  title: "Tiny Toon Adventures: Buster Busts Loose! (PC port)",
  game: "Tiny Toon Adventures: Buster Busts Loose! (PC port)",
  developers: ["Darhkfox"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "source-port",
  genre: "music",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/Darhkfox/BusterBustsLoose"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Super Nintendo"],
  notes:
    "Windows PC port of Tiny Toon Adventures: Buster Busts Loose! (SNES) with true widescreen, HUD re-anchoring, display options, cheats, level select and music player. Requires your own USA ROM.",
  notesEs:
    "Port a PC (Windows) de Tiny Toon Adventures: Buster Busts Loose! (SNES) con panorámico real, reubicación del HUD, trucos, selección de nivel y reproductor de música. Requiere tu propia ROM USA.",
};
