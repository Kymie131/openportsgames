import type { Port } from "@/lib/ports/schema";

export const goldenSunAndroid: Port = {
  schema: "port",
  id: "golden-sun-android",
  title: "Golden Sun (Android)",
  game: "Golden Sun",
  developers: ["wootbeer"],
  publisher: "Nintendo",
  originalYear: 2001,
  portType: "recompilation",
  genre: "rpg",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["android"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/wootbeer/gsrandroid"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Game Boy Advance"],
  summary: "Golden Sun is a 2001 role-playing video game developed by Camelot Software Planning and published by Nintendo for the Game Boy Advance. The game follows a band of magic-attuned teenagers called Adepts on a mission to protect the world of Weyard from alchemy, a potentially destructive power that was sealed away long ago. During their quest, the Adepts develop new magic abilities called Psynergy, assist others, and learn more about why alchemy was sealed away. Golden Sun is followed by a sequel, The Lost Age, which together form a complete story.",
  summaryEs: "Golden Sun es la primera entrega de una serie de videojuegos RPG, lanzada para Game Boy Advance, distribuida por Nintendo y desarrollada por Camelot Software Planning. Fue lanzada en agosto de 2001 en Japón, en noviembre del mismo año en Estados Unidos y en Europa en febrero de 2002.",
  notes:
    "Android recompiled port of Golden Sun (Game Boy Advance), based on GSRecomp and brought over with the Descore framework. The player supplies their own legally obtained ROM; the app contains no game code, ROM or assets.",
  notesEs:
    "Port recompilado de Golden Sun (Game Boy Advance) para Android, basado en GSRecomp y llevado con el framework Descore. El jugador aporta su propia ROM obtenida legalmente; la app no contiene código, ROM ni recursos del juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Advance/Named_Boxarts/Golden%20Sun%20(USA,%20Europe).png",
    alt: "Golden Sun (box art)",
    credit: "Box art",
  },
};
