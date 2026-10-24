import type { Port } from "@/lib/ports/schema";

export const vandalHeartsRecomp: Port = {
  schema: "port",
  id: "vandal-hearts-recomp",
  title: "Vandal Hearts Recompiled",
  game: "Vandal Hearts",
  developers: ["HalmyLyseas"],
  publisher: "Konami",
  originalYear: 1996,
  portType: "decompilation",
  genre: "strategy",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/HalmyLyseas/VandalHearts-PcPort"],
  license: { spdx: "GPL-2.0" },
  verified: false,
  originalSystems: ["PlayStation"],
  summary: "Vandal Hearts, known in Japan as Vandal Hearts: The Lost Ancient Civilization is a turn-based tactical role-playing video game developed by Konami Computer Entertainment Tokyo for the PlayStation and later ported to the Sega Saturn by Konami Computer Entertainment Nagoya. The PlayStation version was distributed in Japan, North America, and Europe. The Saturn version was only released in Japan. There was also a Microsoft Windows version which was released only in Japan and South Korea, with Software renderer and Direct3D Support.",
  summaryEs: "Vandal Hearts, conocido en Japón como Vandal Hearts: La civilización ancestral perdida es un videojuego de rol táctico por turnos desarrollado por Konami Computer Entertainment Tokyo para PlayStation y luego portado al Sega Saturn por Konami Computer Entertainment Nagoya. La versión de PlayStation se distribuyó en Japón, América del Norte y Europa. La versión de Saturn solo se lanzó en Japón. También hubo una versión de Microsoft Windows desarrollada y lanzada en Japón, Corea del Sur y China.",
  notes:
    "Native PC port of Vandal Hearts built on a byte-exact matching decompilation. It builds for Windows and Linux and needs your own disc.",
  notesEs:
    "Port nativo para PC de Vandal Hearts construido sobre una decompilación byte-exact. Compila para Windows y Linux y necesita tu propio disco.",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/Vandal%20Hearts%20(Europe)%20(En,Fr,De).png",
    alt: "Vandal Hearts (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Snaps/Vandal%20Hearts%20(Europe)%20(En,Fr,De).png",
      alt: "Vandal Hearts (screenshot)",
      credit: "Libretro",
    },
  ],
};
