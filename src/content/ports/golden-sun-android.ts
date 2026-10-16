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
