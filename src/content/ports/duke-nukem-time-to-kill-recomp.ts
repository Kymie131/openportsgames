import type { Port } from "@/lib/ports/schema";

export const dukeNukemTimeToKillRecomp: Port = {
  schema: "port",
  id: "duke-nukem-time-to-kill-recomp",
  title: "Duke Nukem: Time to Kill Recompiled",
  game: "Duke Nukem: Time to Kill",
  developers: ["alexbeavs"],
  publisher: "GT Interactive",
  originalYear: 1998,
  portType: "recompilation",
  genre: "shooter",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/alexbeavs-ps1-ports/duke-nukem-time-to-kill-recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "PlayStation",
  notes:
    "Recompilation of Duke Nukem: Time to Kill (PS1, USA SLUS-00583) with PSXRecomp. The releases are build-it-yourself kits: you supply your disc and a compatible BIOS, and the game is generated and compiled on your machine. It is the framework's base recompilation, with no per-game enhancements.",
  notesEs:
    "Recompilación de Duke Nukem: Time to Kill (PS1, USA SLUS-00583) con PSXRecomp. Las releases son kits de compilación propia: aportas tu disco y una BIOS compatible, y el juego se genera y compila en tu equipo. Es la recompilación base del framework, sin mejoras por juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/Duke%20Nukem%20-%20Time%20to%20Kill%20(Europe).png",
    alt: "Duke Nukem: Time to Kill (box art)",
    credit: "Box art",
  },
};
