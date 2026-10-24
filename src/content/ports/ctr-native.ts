import type { Port } from "@/lib/ports/schema";

export const ctrNative: Port = {
  schema: "port",
  id: "ctr-native",
  title: "CTR Native",
  game: "Crash Team Racing",
  developers: ["Naughty Dog"],
  publisher: "Sony Computer Entertainment",
  originalYear: 1999,
  portType: "decompilation",
  genre: "racing",
  openSource: true,
  platforms: ["windows", "linux"],
  status: "beta",
  release: { version: "7.1", date: "2026-07-07" },
  sources: ["https://github.com/CTR-tools/ctr-native"],
  discord: "https://discord.gg/WHkuh2n",
  license: { spdx: "GPL-3.0" },
  verified: false,
  originalSystems: ["PlayStation"],
  features: [
    "Direct NTSC-U retail disc image loading",
    "Retail-parity Adventure, menu, cutscene and audio states",
    "Replay recording for bug reports",
  ],
  featuresEs: [
    "Carga directa de la imagen de disco minorista NTSC-U",
    "Estados de aventura, menús, cinemáticas y audio fieles al minorista",
    "Grabación de repeticiones para reportes de errores",
  ],
  summary: "Crash Team Racing is a 1999 kart racing game developed by Naughty Dog and published by Sony Computer Entertainment for the PlayStation. It is the fourth installment in the Crash Bandicoot series and the final Crash Bandicoot game to be developed by Naughty Dog. The game's story focuses on the efforts of Crash Bandicoot, Doctor Neo Cortex, and other ragtag team of characters in the Crash Bandicoot series, who must race against the egomaniacal Nitros Oxide to save the Earth from destruction.",
  summaryEs: "Crash Team Racing es un videojuego de carreras de karts desarrollado por Naughty Dog y publicado por Sony Computer Entertainment para PlayStation. Es la cuarta entrega de la serie Crash Bandicoot y el último hecho por Naughty Dog. La historia se centra en los esfuerzos de Crash Bandicoot, el Doctor Neo Cortex y otros personajes variopintos, que deben competir contra el ególatra Nitros Oxide para salvar la Tierra de la destrucción. En el título, los jugadores pueden controlar a uno de los quince personajes de la saga, aunque al principio solo están disponibles ocho.",
  notes:
    "Native port of Crash Team Racing rebuilt from the original PlayStation code, distributed as beta/playtest releases. Requires your own NTSC-U retail disc image (assets/ctr-u.bin) and an OpenGL 3.3 capable GPU.",
  notesEs:
    "Port nativo de Crash Team Racing reconstruido a partir del código original de PlayStation y distribuido como releases beta de prueba. Requiere tu propia imagen de disco minorista NTSC-U (assets/ctr-u.bin) y una GPU compatible con OpenGL 3.3.",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/CTR%20-%20Crash%20Team%20Racing%20(USA).png",
    alt: "Crash Team Racing (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Snaps/CTR%20-%20Crash%20Team%20Racing%20(USA).png",
      alt: "Crash Team Racing (screenshot)",
      credit: "Libretro",
    },
  ],
};
