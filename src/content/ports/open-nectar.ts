import type { Port } from "@/lib/ports/schema";

export const openNectar: Port = {
  schema: "port",
  id: "open-nectar",
  title: "Open Nectar (Pikmin)",
  game: "Pikmin",
  developers: ["SSunnKing"],
  publisher: "Nintendo",
  originalYear: 2001,
  portType: "source-port",
  genre: "strategy",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "android"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/SSunnKing/Open-Nectar---Pikmin-Native-PC-Mobile-Port"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["GameCube"],
  summary: "Pikmin is a real-time strategy and puzzle video game series created by Shigeru Miyamoto, and developed and published by Nintendo. The games focus on directing a legion of plant-like creatures called Pikmin to collect items by destroying the area around them, avoiding hazards, and fighting fauna that are hazardous to both the player character and the Pikmin.",
  summaryEs: "Pikmin es una serie de videojuegos creada por Shigeru Miyamoto, lanzada por primera vez en Nintendo GameCube; en la que el protagonista es un astronauta que deberá dirigir sus propios escuadrones de Pikmin, unas criaturas diminutas que le ayudarán a superar una serie de problemas. Los personajes protagónicos de la serie, Capitán Olimar y Luis están probablemente basados en Mario y Luigi, los emblemas de la compañía Nintendo.",
  notes:
    "Native port of Pikmin (GameCube) built on the projectPiki decompilation, with the GX graphics translated to OpenGL (no emulator). It runs on Windows, Linux and Android, and adds 30/60/120 FPS, widescreen, full audio, custom texture packs and local co-op.",
  notesEs:
    "Port nativo de Pikmin (GameCube) construido sobre la decompilación de projectPiki, con los gráficos GX traducidos a OpenGL (sin emulador). Corre en Windows, Linux y Android, y añade 30/60/120 FPS, widescreen, audio completo, packs de texturas y cooperativo local.",
  aiDisclosure: {
    source: "https://github.com/SSunnKing/Open-Nectar---Pikmin-Native-PC-Mobile-Port#readme",
    quote: "This project was developed with the assistance of AI tools.",
  },
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20GameCube/Named_Boxarts/Pikmin%20(USA).png",
    alt: "Pikmin (box art)",
    credit: "Box art",
  },
};
