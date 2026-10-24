import type { Port } from "@/lib/ports/schema";

export const animalCrossingPcPort: Port = {
  schema: "port",
  id: "animal-crossing-pc-port",
  title: "Animal Crossing PC Port",
  game: "Animal Crossing",
  developers: ["flyngmt"],
  publisher: "Nintendo",
  originalYear: 2001,
  portType: "decompilation",
  genre: "simulation",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/flyngmt/ACGC-PC-Port"],
  license: { spdx: "CC0-1.0" },
  verified: false,
  originalSystems: ["GameCube"],
  summary: "Animal Crossing, known in Japan as Dōbutsu no Mori, is a social simulation game developed and published by Nintendo. It was first released in 2001 for the Nintendo 64 in Japan, followed by an enhanced port for the GameCube. The GameCube version was localized for North America, Australia, and Europe between 2002 and 2004. It is the first game in the Animal Crossing series.",
  summaryEs: "Animal Crossing, conocido en Japón como Dōbutsu no Mori en Japón, es un videojuego de simulador de vida desarrollado y publicado por Nintendo para la videoconsola Nintendo GameCube en el año 2001.",
  notes:
    "Native port of Animal Crossing (GameCube, USA Rev 0) built on the ac-decomp decompilation: the original C code runs on x86 and a translation layer swaps the GX graphics API for OpenGL 3.3. It reads assets directly from your disc image and supports Dolphin-format texture packs.",
  notesEs:
    "Port nativo de Animal Crossing (GameCube, USA Rev 0) construido sobre la decompilación ac-decomp: el código original en C corre en x86 y una capa de traducción cambia la API gráfica GX por OpenGL 3.3. Lee los recursos directamente de tu imagen de disco y admite texture packs en formato Dolphin.",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20GameCube/Named_Boxarts/Animal%20Crossing%20(USA).png",
    alt: "Animal Crossing (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Nintendo%20-%20GameCube/Named_Snaps/Animal%20Crossing%20(USA).png",
      alt: "Animal Crossing (screenshot)",
      credit: "Libretro",
    },
  ],
};
