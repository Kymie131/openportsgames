import type { Port } from "@/lib/ports/schema";

export const futureCopLapdRecomp: Port = {
  schema: "port",
  id: "future-cop-lapd-recomp",
  title: "Future Cop: L.A.P.D. Recompiled",
  game: "Future Cop: L.A.P.D.",
  developers: ["alexbeavs"],
  publisher: "Electronic Arts",
  originalYear: 1998,
  portType: "recompilation",
  genre: "shooter",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/alexbeavs-ps1-ports/future-cop-lapd-recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "PlayStation",
  notes:
    "Recompilation of Future Cop: L.A.P.D. (PS1, Europe SLES-01449) with PSXRecomp. The releases are build-it-yourself kits: you supply your disc and a compatible BIOS, and the game is generated and compiled on your machine. It is the framework's base recompilation, with no per-game enhancements.",
  notesEs:
    "Recompilación de Future Cop: L.A.P.D. (PS1, Europe SLES-01449) con PSXRecomp. Las releases son kits de compilación propia: aportas tu disco y una BIOS compatible, y el juego se genera y compila en tu equipo. Es la recompilación base del framework, sin mejoras por juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/Future%20Cop%20-%20L.A.P.D.%20(Europe)%20(En,Fr).png",
    alt: "Future Cop: L.A.P.D. (box art)",
    credit: "Box art",
  },
};
