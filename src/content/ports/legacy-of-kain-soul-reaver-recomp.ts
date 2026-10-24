import type { Port } from "@/lib/ports/schema";

export const legacyOfKainSoulReaverRecomp: Port = {
  schema: "port",
  id: "legacy-of-kain-soul-reaver-recomp",
  title: "Legacy of Kain: Soul Reaver Recompiled",
  game: "Legacy of Kain: Soul Reaver",
  developers: ["alexbeavs"],
  publisher: "Eidos Interactive",
  originalYear: 1999,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/alexbeavs-ps1-ports/legacy-of-kain-soul-reaver-recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystems: ["PlayStation"],
  summary: "Legacy of Kain: Soul Reaver is a 1999 action-adventure video game developed by Crystal Dynamics and published by Eidos Interactive for the PlayStation and Windows. A port to the Dreamcast developed by Nixxes Software was released in 2000, serving as Nixxes' first project. The second game in the Legacy of Kain series, Soul Reaver is the sequel to Blood Omen: Legacy of Kain. Soul Reaver was followed by three games, one of which, Soul Reaver 2, is a direct sequel.",
  summaryEs: "Legacy of Kain: Soul Reaver es un videojuego de acción-aventura desarrollado por Crystal Dynamics y publicado por Eidos Interactive. Fue publicado para la consola PlayStation, para el sistema operativo Microsoft Windows en 1999 y para Dreamcast en 2000. Soul Reaver es el segundo juego de la serie Legacy of Kain así como la secuela de Blood Omen: Legacy of Kain. Hay tres juegos más en la serie, de los cuales Legacy of Kain: Soul Reaver 2 es una secuela directa.",
  notes:
    "Recompilation of Legacy of Kain: Soul Reaver (PS1, Europe SLES-01301) with PSXRecomp. The releases are build-it-yourself kits: you supply your disc and a compatible BIOS, and the game is generated and compiled on your machine. It is the framework's base recompilation, with no per-game enhancements.",
  notesEs:
    "Recompilación de Legacy of Kain: Soul Reaver (PS1, Europe SLES-01301) con PSXRecomp. Las releases son kits de compilación propia: aportas tu disco y una BIOS compatible, y el juego se genera y compila en tu equipo. Es la recompilación base del framework, sin mejoras por juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/Legacy%20of%20Kain%20-%20Soul%20Reaver%20(Europe).png",
    alt: "Legacy of Kain: Soul Reaver (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Snaps/Legacy%20of%20Kain%20-%20Soul%20Reaver%20(Europe).png",
      alt: "Legacy of Kain: Soul Reaver (screenshot)",
      credit: "Libretro",
    },
  ],
};
