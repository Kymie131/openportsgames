import type { Port } from "@/lib/ports/schema";

export const TouristTrophy: Port = {
  schema: "port",
  id: "tourist-trophy",
  title: "Tourist Trophy",
  game: "Tourist Trophy",
  developers: ["gustavocanepa"],
  publisher: "Sony Interactive Entertainment",
  originalYear: 2006,
  portType: "decompilation",
  genre: "racing",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/gustavocanepa/tt-decomp"],
  license: { spdx: "MIT" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["PlayStation 2"],
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation%202/Named_Boxarts/Tourist%20Trophy%20(USA).png",
    alt: "Tourist Trophy (box art)",
    credit: "Box art",
  },
  summary: "Tourist Trophy is a 2006 racing video game developed by Polyphony Digital and published by Sony Computer Entertainment for the PlayStation 2. It is one of only three PS2 titles capable of 1080i output, another being Gran Turismo 4, the game engine of which is also used by Tourist Trophy.",
  summaryEs: "Tourist Trophy es un juego simulador de motocicletas para la consola PlayStation 2 de Sony desarrollado por Polyphony Digital, los creadores de Gran Turismo. En China fue sacado al mercado el 26 de enero de 2006, en Japón el 2 de febrero de ese año, en Europa el 29 de mayo y en Australia el 1 de junio.",
  notes:
    "Matching decompilation of Tourist Trophy (PS2), sister project of the Gran Turismo 4 decompilation.",
  notesEs:
    "Decompilación que coincide de Tourist Trophy (PS2), proyecto hermano del de Gran Turismo 4.",
};
