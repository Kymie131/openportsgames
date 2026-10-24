import type { Port } from "@/lib/ports/schema";

export const galeriansRecomp: Port = {
  schema: "port",
  id: "galerians-recomp",
  title: "Galerians Recompiled",
  game: "Galerians",
  developers: ["alexbeavs"],
  publisher: "Crave Entertainment",
  originalYear: 1999,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/alexbeavs-ps1-ports/galerians-recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystems: ["PlayStation"],
  summary: "Galerians is a 1999 survival horror video game developed by Polygon Magic for the PlayStation. The game follows a boy named Rion who discovers he has psychic powers. He has amnesia, and in the process of learning his identity, he discovers that he is humanity's last hope for survival against the Galerians, genetically enhanced humans. The game has a sequel, Galerians: Ash, on PlayStation 2.",
  summaryEs: "Galerians es un videojuego de terror desarrollado por Polygon Magic, publicado por ASCII Corporation y distribuido por Crave Entertainment para la PlayStation. El juego sigue a un joven llamado Rion que descubre que tiene poderes psíquicos. Él tiene amnesia, y en el proceso de descubrir su identidad, el descubre que es la última esperanza de la humanidad por la supervivencia contra los Galerians, seres humanos genéticamente mejorados. El juego cuenta con una secuela, Galerians: Ash para PlayStation 2.",
  notes:
    "Recompilation of Galerians (PS1, Europe SLES-02328) with PSXRecomp. The releases are build-it-yourself kits: you supply your disc and a compatible BIOS, and the game is generated and compiled on your machine. It is the framework's base recompilation, with no per-game enhancements.",
  notesEs:
    "Recompilación de Galerians (PS1, Europe SLES-02328) con PSXRecomp. Las releases son kits de compilación propia: aportas tu disco y una BIOS compatible, y el juego se genera y compila en tu equipo. Es la recompilación base del framework, sin mejoras por juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/Galerians%20(Japan).png",
    alt: "Galerians (box art)",
    credit: "Box art",
  },
};
