import type { Port } from "@/lib/ports/schema";

export const castlevaniaRevamped: Port = {
  schema: "port",
  id: "castlevania-revamped",
  title: "Castlevania ReVamped",
  game: "Castlevania",
  developers: ["eboody"],
  publisher: "Konami",
  originalYear: 1986,
  portType: "reimplementation",
  genre: "platformer",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["android"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/eboody/Castlevania-ReVamped-Open-Source-Edition"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "Nintendo Entertainment System",
  notes:
    "Android reimplementation of the original Castlevania, distributed as an open-source build. It uses the game's original assets from your own copy.",
  notesEs:
    "Reimplementación para Android del Castlevania original, distribuida como build de código abierto. Usa los recursos del juego original de tu propia copia.",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%20Entertainment%20System/Named_Boxarts/Castlevania%20(Europe)%20(Virtual%20Console).png",
    alt: "Castlevania (box art)",
    credit: "Box art",
  },
};
