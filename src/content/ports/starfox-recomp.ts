import type { Port } from "@/lib/ports/schema";

export const StarfoxRecomp: Port = {
  schema: "port",
  id: "starfox-recomp",
  title: "Starfox Recomp",
  game: "Starfox Recomp",
  developers: ["mstan"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: "0.3.2", date: "2026-10-18" },
  sources: ["https://github.com/mstan/StarFoxSNESRecomp"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Super Nintendo"],
  summary: "Starfox Recomp is a action-adventure game for Super Nintendo, released in 2000.",
  summaryEs: "Starfox Recomp es un videojuego de acci�n y aventura para Super Nintendo, lanzado en 2000.",
  summaryGenerated: true,
  downloads: [
    {
      label: "Windows",
      url: "https://github.com/mstan/StarFoxSNESRecomp/releases/download/v0.3.2/StarFoxSNESRecomp-windows-x64-v0.3.2.zip",
      size: "6.7 MB",
    },
  ],
  cover: {
    src: "https://openportsgames.com/covers/generated/starfox-recomp.svg",
    alt: "Starfox Recomp (generated cover)",
    credit: "OpenPortsGames",
  },
  notes:
    "Star Fox recompiled for the Super Nintendo using snesrecomp · Part of the R.A.I.D. community.",
  notesEs:
    "Star Fox recompilado para Super Nintendo con snesrecomp, parte de la comunidad R.A.I.D.",
};
