import type { Port } from "@/lib/ports/schema";

export const valkyrieProfileRecomp: Port = {
  schema: "port",
  id: "valkyrie-profile-recomp",
  title: "Valkyrie Profile Recompiled",
  game: "Valkyrie Profile",
  developers: ["alexbeavs"],
  publisher: "Enix",
  originalYear: 1999,
  portType: "recompilation",
  genre: "rpg",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/alexbeavs-ps1-ports/valkyrie-profile-recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "PlayStation",
  notes:
    "Recompilation of Valkyrie Profile (PS1, USA SLUS-01156) with PSXRecomp. The releases are build-it-yourself kits: you supply your disc and a compatible BIOS, and the game is generated and compiled on your machine. It is the framework's base recompilation, with no per-game enhancements.",
  notesEs:
    "Recompilación de Valkyrie Profile (PS1, USA SLUS-01156) con PSXRecomp. Las releases son kits de compilación propia: aportas tu disco y una BIOS compatible, y el juego se genera y compila en tu equipo. Es la recompilación base del framework, sin mejoras por juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/Valkyrie%20Profile%20(Japan)%20(Rev%201).png",
    alt: "Valkyrie Profile (box art)",
    credit: "Box art",
  },
};
