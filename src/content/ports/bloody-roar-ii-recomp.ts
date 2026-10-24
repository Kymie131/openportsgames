import type { Port } from "@/lib/ports/schema";

export const bloodyRoarIiRecomp: Port = {
  schema: "port",
  id: "bloody-roar-ii-recomp",
  title: "Bloody Roar II Recompiled",
  game: "Bloody Roar II",
  developers: ["alexbeavs"],
  publisher: "Sony Computer Entertainment",
  originalYear: 1999,
  portType: "recompilation",
  genre: "fighting",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/alexbeavs-ps1-ports/bloody-roar-ii-recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystems: ["PlayStation"],
  summary: "Bloody Roar is a series of 3D fighting games developed by Eighting and primarily published by Hudson Soft, centering on characters known as \"zoanthropes\" who possess the ability to transform into anthropomorphic beasts during combat to unleash enhanced attacks and abilities. The franchise began with the original Bloody Roar, released in Japanese arcades in 1997 and subsequently ported to the PlayStation. The property is currently owned by Konami following their 2012 merger with Hudson Soft.",
  summaryEs: "El término null, nulo o nil es a menudo utilizado en la computación para hacer referencia a la nada. Su significado y uso varía según el lenguaje de programación.",
  notes:
    "Recompilation of Bloody Roar II (PS1, USA SCUS-94424) with PSXRecomp. The releases are build-it-yourself kits: you supply your disc and a compatible BIOS, and the game is generated and compiled on your machine. It is the framework's base recompilation, with no per-game enhancements.",
  notesEs:
    "Recompilación de Bloody Roar II (PS1, USA SCUS-94424) con PSXRecomp. Las releases son kits de compilación propia: aportas tu disco y una BIOS compatible, y el juego se genera y compila en tu equipo. Es la recompilación base del framework, sin mejoras por juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/Bloody%20Roar%20II%20(USA).png",
    alt: "Bloody Roar II (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Snaps/Bloody%20Roar%20II%20(USA).png",
      alt: "Bloody Roar II (screenshot)",
      credit: "Libretro",
    },
  ],
};
