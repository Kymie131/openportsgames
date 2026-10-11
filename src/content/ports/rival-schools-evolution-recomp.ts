import type { Port } from "@/lib/ports/schema";

export const rivalSchoolsEvolutionRecomp: Port = {
  schema: "port",
  id: "rival-schools-evolution-recomp",
  title: "Rival Schools: Evolution Disc Recompiled",
  game: "Rival Schools: Evolution Disc",
  developers: ["alexbeavs"],
  publisher: "Capcom",
  originalYear: 1998,
  portType: "recompilation",
  genre: "fighting",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/alexbeavs-ps1-ports/rival-schools-evolution-recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "PlayStation",
  notes:
    "Recompilation of Rival Schools: Evolution Disc (PS1, USA SLUS-00771) with PSXRecomp. The releases are build-it-yourself kits: you supply your disc and a compatible BIOS, and the game is generated and compiled on your machine. It is the framework's base recompilation, with no per-game enhancements.",
  notesEs:
    "Recompilación de Rival Schools: Evolution Disc (PS1, USA SLUS-00771) con PSXRecomp. Las releases son kits de compilación propia: aportas tu disco y una BIOS compatible, y el juego se genera y compila en tu equipo. Es la recompilación base del framework, sin mejoras por juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/Rival%20Schools%20-%20United%20by%20Fate%20(USA)%20(Disc%202)%20(Evolution%20Disc).png",
    alt: "Rival Schools: Evolution Disc (cover)",
    credit: "Box art",
  },
};
