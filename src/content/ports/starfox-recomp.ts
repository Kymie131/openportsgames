import type { Port } from "@/lib/ports/schema";

export const StarfoxRecomp: Port = {
  schema: "port",
  id: "starfox-recomp",
  title: "Starfox Recomp",  game: "Star Fox 64",
  developers: ["mstan"],  publisher: "Nintendo",  originalYear: 1997,
  portType: "recompilation",  genre: "shooter",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: "0.3.2", date: "2026-10-18" },
  sources: ["https://github.com/mstan/StarFoxSNESRecomp"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,  originalSystems: ["Nintendo 64"],  summary: "Star Fox 64 is a 1997 rail shooter developed by Nintendo EAD and published by Nintendo for the Nintendo 64. Fox McCloud and his team fly Arwings across the Lylat System to stop Andross, with branching routes and full voice acting.",  summaryEs: "Star Fox 64 es un shooter sobre raíles de 1997 desarrollado por Nintendo EAD y publicado por Nintendo para Nintendo 64. Fox McCloud y su equipo pilotan Arwings por el sistema Lylat para detener a Andross, con rutas ramificadas y voces.",  downloads: [
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
