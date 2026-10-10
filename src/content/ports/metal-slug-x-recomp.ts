import type { Port } from "@/lib/ports/schema";

export const metalSlugXRecomp: Port = {
  schema: "port",
  id: "metal-slug-x-recomp",
  title: "Metal Slug X Recompiled",
  game: "Metal Slug X",
  developers: ["alexbeavs"],
  publisher: "SNK",
  originalYear: 2001,
  portType: "recompilation",
  genre: "shooter",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/alexbeavs-ps1-ports/metal-slug-x-recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "PlayStation",
  notes:
    "Recompilation of Metal Slug X (PS1, USA SLUS-01212) with PSXRecomp. The releases are build-it-yourself kits: you supply your disc and a compatible BIOS, and the game is generated and compiled on your machine. It is the framework's base recompilation, with no per-game enhancements.",
  notesEs:
    "Recompilación de Metal Slug X (PS1, USA SLUS-01212) con PSXRecomp. Las releases son kits de compilación propia: aportas tu disco y una BIOS compatible, y el juego se genera y compila en tu equipo. Es la recompilación base del framework, sin mejoras por juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/Metal%20Slug%20X%20(Europe).png",
    alt: "Metal Slug X (box art)",
    credit: "Box art",
  },
};
