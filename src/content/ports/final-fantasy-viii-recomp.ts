import type { Port } from "@/lib/ports/schema";

export const finalFantasyViiiRecomp: Port = {
  schema: "port",
  id: "final-fantasy-viii-recomp",
  title: "Final Fantasy VIII Recompiled",
  game: "Final Fantasy VIII",
  developers: ["alexbeavs"],
  publisher: "Square",
  originalYear: 1999,
  portType: "recompilation",
  genre: "rpg",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/alexbeavs-ps1-ports/final-fantasy-viii-recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "PlayStation",
  notes:
    "Recompilation of Final Fantasy VIII (PS1, USA SLUS-00892) with PSXRecomp and the recomp-ui launcher. It needs your own disc and a European SCPH-5502/5552 BIOS; the wizard generates and compiles the game on your machine. Published as release candidate 0.1.0, with gameplay acceptance still pending.",
  notesEs:
    "Recompilación de Final Fantasy VIII (PS1, USA SLUS-00892) con PSXRecomp y el lanzador recomp-ui. Necesita tu propio disco y una BIOS europea SCPH-5502/5552; el asistente genera y compila el juego en tu equipo. Publicada como candidata 0.1.0, con la aceptación de gameplay todavía pendiente.",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/Final%20Fantasy%20VIII%20(Europe,%20Australia).png",
    alt: "Final Fantasy VIII (box art)",
    credit: "Box art",
  },
};
