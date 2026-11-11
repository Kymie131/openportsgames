import type { Port } from "@/lib/ports/schema";

export const cogbox: Port = {
  schema: "port",
  id: "cogbox",
  title: "COGBox (Gears of War Collection)",
  game: "Gears of War 2 / 3 / Judgment",
  developers: ["Shagg88"],
  publisher: "Microsoft Game Studios",
  originalYear: 2008,
  portType: "recompilation",
  genre: "shooter",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: "0.5.0", date: "2026-11-11" },
  sources: ["https://github.com/Shagg88/COGBox"],
  license: { spdx: "MIT" },
  verified: false,
  sourceVerified: true,
  addedAt: "2026-11-11",
  originalSystems: ["Xbox 360"],
  summary:
    "COGBox bundles native recompilations of the Xbox 360 Gears of War games. It covers Gears of War 2, Gears of War 3 and Gears of War: Judgment, with a native renderer and one shared launcher.",
  summaryEs:
    "COGBox reúne recompilaciones nativas de los Gears of War de Xbox 360. Cubre Gears of War 2, Gears of War 3 y Gears of War: Judgment, con un renderizador nativo y un lanzador común.",
  notes:
    "All-in-one static recompilation of the Xbox 360 Gears of War series with a native renderer. It includes no game data: you must supply your own copies of the games.",
  notesEs:
    "Recompilación estática todo en uno de la saga Gears of War de Xbox 360 con renderizador nativo. No incluye datos de los juegos: debes aportar tus propias copias.",
  downloads: [
    {
      label: "Windows (7z)",
      url: "https://github.com/Shagg88/COGBox/releases/download/0.5.0/COGBox-0.5.0.7z",
    },
  ],
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/d/dc/Gears_of_War_3_box_artwork.png",
    alt: "Gears of War 3 (box art)",
    credit: "Wikipedia",
  },
};
