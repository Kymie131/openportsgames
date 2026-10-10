import type { Port } from "@/lib/ports/schema";

export const finalFantasyIxRecomp: Port = {
  schema: "port",
  id: "final-fantasy-ix-recomp",
  title: "Final Fantasy IX Recompiled",
  game: "Final Fantasy IX",
  developers: ["alexbeavs"],
  publisher: "Square",
  originalYear: 2000,
  portType: "recompilation",
  genre: "rpg",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/alexbeavs-ps1-ports/final-fantasy-ix-recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "PlayStation",
  notes:
    "Recompilation of Final Fantasy IX (PS1, USA SLUS-01251) with PSXRecomp and the recomp-ui launcher. It requires your own disc and a European SCPH-5502/5552 BIOS, and the wizard compiles the game locally. For now it is the 0.1.0 release candidate, with gameplay acceptance not yet closed.",
  notesEs:
    "Recompilación de Final Fantasy IX (PS1, USA SLUS-01251) con PSXRecomp y el lanzador recomp-ui. Requiere tu propio disco y una BIOS europea SCPH-5502/5552, y el asistente compila el juego localmente. Por ahora es la candidata 0.1.0, sin aceptación de gameplay cerrada.",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/Final%20Fantasy%20IX%20(Europe).png",
    alt: "Final Fantasy IX (box art)",
    credit: "Box art",
  },
};
