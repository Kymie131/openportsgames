import type { Port } from "@/lib/ports/schema";

export const inColdBloodRecomp: Port = {
  schema: "port",
  id: "in-cold-blood-recomp",
  title: "In Cold Blood Recompiled",
  game: "In Cold Blood",
  developers: ["alexbeavs"],
  publisher: "DreamCatcher Interactive",
  originalYear: 1999,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/alexbeavs-ps1-ports/in-cold-blood-recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "PlayStation",
  notes:
    "Recompilation of In Cold Blood (PS1, USA SLUS-01294 / SLUS-01314) with PSXRecomp. The releases are build-it-yourself kits: you supply your disc and a compatible BIOS, and the game is generated and compiled on your machine. It is the framework's base recompilation, with no per-game enhancements.",
  notesEs:
    "Recompilación de In Cold Blood (PS1, USA SLUS-01294 / SLUS-01314) con PSXRecomp. Las releases son kits de compilación propia: aportas tu disco y una BIOS compatible, y el juego se genera y compila en tu equipo. Es la recompilación base del framework, sin mejoras por juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/In%20Cold%20Blood%20(USA)%20(Disc%201).png",
    alt: "In Cold Blood (box art)",
    credit: "Box art",
  },
};
