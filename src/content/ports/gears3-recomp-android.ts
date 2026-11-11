import type { Port } from "@/lib/ports/schema";

export const gears3RecompAndroid: Port = {
  schema: "port",
  id: "gears3-recomp-android",
  title: "Gears of War 3 Recomp (Android)",
  game: "Gears of War 3",
  developers: ["Jauidev"],
  publisher: "Microsoft Studios",
  originalYear: 2011,
  portType: "recompilation",
  genre: "shooter",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["android", "windows"],
  status: "beta",
  release: { version: "1.1.0", date: "2026-11-10" },
  sources: ["https://github.com/Jauidev/Gears3Recomp"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  sourceVerified: true,
  addedAt: "2026-11-11",
  originalSystems: ["Xbox 360"],
  summary:
    "Gears of War 3 is a 2011 third-person shooter developed by Epic Games and published by Microsoft Studios. Marcus Fenix and Delta Squad make a final stand against the Locust and the Lambent.",
  summaryEs:
    "Gears of War 3 es un shooter en tercera persona de 2011 desarrollado por Epic Games y publicado por Microsoft Studios. Marcus Fenix y el Escuadrón Delta resisten el último embate de los Locust y los Lambent.",
  notes:
    "Unofficial Android and PC port of the Xbox 360 game by static recompilation. It requires your own copy of the game and does not include game files.",
  notesEs:
    "Port no oficial para Android y PC del juego de Xbox 360 mediante recompilación estática. Requiere tu propia copia del juego y no incluye archivos del juego.",
  downloads: [
    {
      label: "Android APK",
      url: "https://github.com/Jauidev/Gears3Recomp/releases/download/v1.1.0/Gears3Recomp-1.1.0.apk",
    },
  ],
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/d/dc/Gears_of_War_3_box_artwork.png",
    alt: "Gears of War 3 (box art)",
    credit: "Wikipedia",
  },
};
