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
  originalSystem: "GameCube",
  notes:
    "Native port of Animal Crossing (GameCube, USA Rev 0) built on the ac-decomp decompilation: the original C code runs on x86 and a translation layer swaps the GX graphics API for OpenGL 3.3. It reads assets directly from your disc image and supports Dolphin-format texture packs.",
  notesEs:
    "Port nativo de Animal Crossing (GameCube, USA Rev 0) construido sobre la decompilación ac-decomp: el código original en C corre en x86 y una capa de traducción cambia la API gráfica GX por OpenGL 3.3. Lee los recursos directamente de tu imagen de disco y admite texture packs en formato Dolphin.",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20GameCube/Named_Boxarts/Animal%20Crossing%20(USA).png",
    alt: "Animal Crossing (box art)",
    credit: "Box art",
  },
};
