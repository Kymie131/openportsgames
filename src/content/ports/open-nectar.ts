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
