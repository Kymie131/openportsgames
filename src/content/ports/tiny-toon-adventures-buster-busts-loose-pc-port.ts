import type { Port } from "@/lib/ports/schema";

export const TinyToonAdventuresBusterBustsLoosePcPort: Port = {
  schema: "port",
  id: "tiny-toon-adventures-buster-busts-loose-pc-port",
  title: "Tiny Toon Adventures: Buster Busts Loose! (PC port)",  game: "Tiny Toon Adventures: Buster Busts Loose!",
  developers: ["Darhkfox"],  publisher: "Konami",  originalYear: 1992,
  portType: "source-port",  genre: "platformer",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: "1.0", date: "2026-09-28" },
  sources: ["https://github.com/Darhkfox/BusterBustsLoose"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,  originalSystems: ["Super Nintendo"],  summary: "Tiny Toon Adventures: Buster Busts Loose! is a 1992 platform game developed and published by Konami for the Super Nintendo. Buster Bunny stars in stages based on the animated series, with a dash mechanic and bonus mini-games.",  summaryEs: "Tiny Toon Adventures: Buster Busts Loose! es un juego de plataformas de 1992 desarrollado y publicado por Konami para Super Nintendo. Buster Bunny protagoniza niveles basados en la serie animada, con una mecánica de carrera y minijuegos de bonus.",  downloads: [
    {
      label: "Windows",
      url: "https://github.com/Darhkfox/BusterBustsLoose/releases/download/v1.0/BusterBustsLoose-V1.0-win64.zip",
      size: "1.0 MB",
    },
  ],
  cover: {
    src: "https://openportsgames.com/covers/generated/tiny-toon-adventures-buster-busts-loose-pc-port.svg",
    alt: "Tiny Toon Adventures: Buster Busts Loose! (PC port) (generated cover)",
    credit: "OpenPortsGames",
  },
  notes:
    "Windows PC port of Tiny Toon Adventures: Buster Busts Loose! (SNES) with true widescreen, HUD re-anchoring, display options, cheats, level select and music player. Requires your own USA ROM.",
  notesEs:
    "Port a PC (Windows) de Tiny Toon Adventures: Buster Busts Loose! (SNES) con panorámico real, reubicación del HUD, trucos, selección de nivel y reproductor de música. Requiere tu propia ROM USA.",
};
