import type { Port } from "@/lib/ports/schema";

export const dinoCrisis2Recomp: Port = {
  schema: "port",
  id: "dino-crisis-2-recomp",
  title: "Dino Crisis 2 Recompiled",
  game: "Dino Crisis 2",
  developers: ["alexbeavs"],
  publisher: "Capcom",
  originalYear: 2000,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/alexbeavs-ps1-ports/dino-crisis-2-recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "PlayStation",
  notes:
    "Recompilation of Dino Crisis 2 (PS1, USA SLUS-01279) with PSXRecomp. The releases are build-it-yourself kits: you supply your disc and a compatible BIOS, and the game is generated and compiled on your machine. It is the framework's base recompilation, with no per-game enhancements.",
  notesEs:
    "Recompilación de Dino Crisis 2 (PS1, USA SLUS-01279) con PSXRecomp. Las releases son kits de compilación propia: aportas tu disco y una BIOS compatible, y el juego se genera y compila en tu equipo. Es la recompilación base del framework, sin mejoras por juego.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/4/49/Dino_Crisis_2.jpg",
    alt: "Dino Crisis 2 (box art)",
    credit: "Wikipedia",
  },
};
