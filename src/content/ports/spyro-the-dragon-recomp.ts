import type { Port } from "@/lib/ports/schema";

export const spyroTheDragonRecomp: Port = {
  schema: "port",
  id: "spyro-the-dragon-recomp",
  title: "Spyro the Dragon Recompiled",
  game: "Spyro the Dragon",
  developers: ["alexbeavs"],
  publisher: "Sony Computer Entertainment",
  originalYear: 1998,
  portType: "recompilation",
  genre: "platformer",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/alexbeavs-ps1-ports/spyro-the-dragon-recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "PlayStation",
  notes:
    "Recompilation of Spyro the Dragon (PS1, Europe SCES-01438) with PSXRecomp. The releases are build-it-yourself kits: you supply your disc and a compatible BIOS, and the game is generated and compiled on your machine. It is the framework's base recompilation, with no per-game enhancements.",
  notesEs:
    "Recompilación de Spyro the Dragon (PS1, Europe SCES-01438) con PSXRecomp. Las releases son kits de compilación propia: aportas tu disco y una BIOS compatible, y el juego se genera y compila en tu equipo. Es la recompilación base del framework, sin mejoras por juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/Spyro%20the%20Dragon%20(Europe)%20(En,Fr,De,Es,It).png",
    alt: "Spyro the Dragon (box art)",
    credit: "Box art",
  },
};
