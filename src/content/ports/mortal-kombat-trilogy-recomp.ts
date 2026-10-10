import type { Port } from "@/lib/ports/schema";

export const mortalKombatTrilogyRecomp: Port = {
  schema: "port",
  id: "mortal-kombat-trilogy-recomp",
  title: "Mortal Kombat Trilogy Recompiled",
  game: "Mortal Kombat Trilogy",
  developers: ["alexbeavs"],
  publisher: "Midway",
  originalYear: 1996,
  portType: "recompilation",
  genre: "fighting",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/alexbeavs-ps1-ports/mortal-kombat-trilogy-recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "PlayStation",
  notes:
    "Recompilation of Mortal Kombat Trilogy (PS1, USA SLUS-00330) with PSXRecomp. The releases are build-it-yourself kits: you supply your disc and a compatible BIOS, and the game is generated and compiled on your machine. It is the framework's base recompilation, with no per-game enhancements.",
  notesEs:
    "Recompilación de Mortal Kombat Trilogy (PS1, USA SLUS-00330) con PSXRecomp. Las releases son kits de compilación propia: aportas tu disco y una BIOS compatible, y el juego se genera y compila en tu equipo. Es la recompilación base del framework, sin mejoras por juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/Mortal%20Kombat%20Trilogy%20(Europe).png",
    alt: "Mortal Kombat Trilogy (box art)",
    credit: "Box art",
  },
};
