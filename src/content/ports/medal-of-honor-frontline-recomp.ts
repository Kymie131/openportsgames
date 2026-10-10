import type { Port } from "@/lib/ports/schema";

export const medalOfHonorFrontlineRecomp: Port = {
  schema: "port",
  id: "medal-of-honor-frontline-recomp",
  title: "Medal of Honor: Frontline Recompiled",
  game: "Medal of Honor: Frontline",
  developers: ["ant0-blase"],
  publisher: "Electronic Arts",
  originalYear: 2002,
  portType: "recompilation",
  genre: "shooter",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/ant0-blase/MOHFrontline-GC-RECOMP"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "GameCube",
  notes:
    "Static recompilation of Medal of Honor: Frontline (GameCube) with ReXGlue. It requires your own copy of the game.",
  notesEs:
    "Recompilación estática de Medal of Honor: Frontline (GameCube) con ReXGlue. Requiere tu propia copia del juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20GameCube/Named_Boxarts/Medal%20of%20Honor%20-%20Frontline%20(Europe).png",
    alt: "Medal of Honor: Frontline (box art)",
    credit: "Box art",
  },
};
