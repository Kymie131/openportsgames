import type { Port } from "@/lib/ports/schema";

export const armoredCoreMasterOfArenaRecomp: Port = {
  schema: "port",
  id: "armored-core-master-of-arena-recomp",
  title: "Armored Core: Master of Arena Recompiled",
  game: "Armored Core: Master of Arena",
  developers: ["alexbeavs"],
  publisher: "Agetec",
  originalYear: 1999,
  portType: "recompilation",
  genre: "shooter",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/alexbeavs-ps1-ports/armored-core-master-of-arena-recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystems: ["PlayStation"],
  summary: "Armored Core: Master of Arena is a 1999 third-person shooter video game developed and published by FromSoftware for the PlayStation. Master of Arena is the third entry in the Armored Core series and a direct sequel to Armored Core: Project Phantasma. It is the final game in the original Armored Core trilogy. The game was not released in Europe. An indirect sequel, Armored Core 2, was released on August 3, 2000, for the PlayStation 2.",
  summaryEs: "Armored Core: Master of Arena es un videojuego de PlayStation. Este es parte de la serie Armored Core.",
  notes:
    "Recompilation of Armored Core: Master of Arena (PS1, USA SLUS-01030 / SLUS-01081) with PSXRecomp. The releases are build-it-yourself kits: you supply your disc and a compatible BIOS, and the game is generated and compiled on your machine. It is the framework's base recompilation, with no per-game enhancements.",
  notesEs:
    "Recompilación de Armored Core: Master of Arena (PS1, USA SLUS-01030 / SLUS-01081) con PSXRecomp. Las releases son kits de compilación propia: aportas tu disco y una BIOS compatible, y el juego se genera y compila en tu equipo. Es la recompilación base del framework, sin mejoras por juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/Armored%20Core%20-%20Master%20of%20Arena%20(Japan).png",
    alt: "Armored Core: Master of Arena (box art)",
    credit: "Box art",
  },
};
