import type { Port } from "@/lib/ports/schema";

export const strikersAndroid: Port = {
  schema: "port",
  id: "strikers-android",
  title: "Super Mario Strikers (Android)",
  game: "Super Mario Strikers",
  developers: ["luisxl15"],
  publisher: "Nintendo",
  originalYear: 2005,
  portType: "runtime-port",
  genre: "sports",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["android"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/luisxl15/Strikers-Android-Port"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "GameCube",
  notes:
    "Community Android port of Super Mario Strikers (GameCube). It needs your own copy of the game and its files.",
  notesEs:
    "Port comunitario para Android de Super Mario Strikers (GameCube). Necesita tu propia copia del juego y sus archivos.",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20GameCube/Named_Boxarts/Super%20Mario%20Strikers%20(Japan).png",
    alt: "Super Mario Strikers (box art)",
    credit: "Box art",
  },
};
