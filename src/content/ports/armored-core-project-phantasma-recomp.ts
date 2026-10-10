import type { Port } from "@/lib/ports/schema";

export const armoredCoreProjectPhantasmaRecomp: Port = {
  schema: "port",
  id: "armored-core-project-phantasma-recomp",
  title: "Armored Core: Project Phantasma Recompiled",
  game: "Armored Core: Project Phantasma",
  developers: ["alexbeavs"],
  publisher: "ASCII Entertainment",
  originalYear: 1997,
  portType: "recompilation",
  genre: "shooter",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/alexbeavs-ps1-ports/armored-core-project-phantasma-recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "PlayStation",
  notes:
    "Recompilation of Armored Core: Project Phantasma (PS1, USA SLUS-00670) with PSXRecomp. The releases are build-it-yourself kits: you supply your disc and a compatible BIOS, and the game is generated and compiled on your machine. It is the framework's base recompilation, with no per-game enhancements.",
  notesEs:
    "Recompilación de Armored Core: Project Phantasma (PS1, USA SLUS-00670) con PSXRecomp. Las releases son kits de compilación propia: aportas tu disco y una BIOS compatible, y el juego se genera y compila en tu equipo. Es la recompilación base del framework, sin mejoras por juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/Armored%20Core%20-%20Project%20Phantasma%20(Japan)%20(Rev%201).png",
    alt: "Armored Core: Project Phantasma (box art)",
    credit: "Box art",
  },
};
