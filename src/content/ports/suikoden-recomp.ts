import type { Port } from "@/lib/ports/schema";

export const suikodenRecomp: Port = {
  schema: "port",
  id: "suikoden-recomp",
  title: "Suikoden Recompiled",
  game: "Suikoden",
  developers: ["alexbeavs"],
  publisher: "Konami",
  originalYear: 1995,
  portType: "recompilation",
  genre: "rpg",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/alexbeavs-ps1-ports/suikoden-recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "PlayStation",
  notes:
    "Recompilation of Suikoden (PS1, USA SLUS-00292) with PSXRecomp. The releases are build-it-yourself kits: you supply your disc and a compatible BIOS, and the game is generated and compiled on your machine. It is the framework's base recompilation, with no per-game enhancements.",
  notesEs:
    "Recompilación de Suikoden (PS1, USA SLUS-00292) con PSXRecomp. Las releases son kits de compilación propia: aportas tu disco y una BIOS compatible, y el juego se genera y compila en tu equipo. Es la recompilación base del framework, sin mejoras por juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/Suikoden%20(Europe).png",
    alt: "Suikoden (box art)",
    credit: "Box art",
  },
};
