import type { Port } from "@/lib/ports/schema";

export const medievil2019Pc: Port = {
  schema: "port",
  id: "medievil-2019-pc",
  title: "MediEvil (2019) PC",
  game: "MediEvil",
  developers: ["bc160201983"],
  publisher: "Sony Interactive Entertainment",
  originalYear: 2019,
  portType: "runtime-port",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: "1.3.8", date: "2026-10-29" },
  sources: ["https://github.com/bc160201983/medievil_2019_pc_port"],
  license: { spdx: "GPL-2.0" },
  verified: false,
  sourceVerified: true,
  addedAt: "2026-11-05",
  originalSystems: ["PlayStation 4"],
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/d/d3/Medievil_cover.jpg",
    alt: "MediEvil (box art)",
    credit: "Wikipedia",
  },
  summary: "MediEvil is a 1998 action-adventure game developed and published by Sony Computer Entertainment for the PlayStation. The game is set in the medieval Kingdom of Gallowmere and centers around the charlatan protagonist, Sir Daniel Fortesque, as he makes an attempt to stop antagonist Zarok's invasion of the kingdom whilst simultaneously redeeming himself.",
  summaryEs: "MediEvil es un videojuego de acción-aventura del género hack and slash desarrollado por SCE Studio Cambridge y publicado por Sony Computer Entertainment para la PlayStation. El juego está ambientado en el reino medieval de Gallowmere y se centra en el protagonista del charlatán, Sir Daniel Fortesque, que intenta detener la invasión del reino por parte del antagonista Zarok mientras se redime a sí mismo.",
  notes: "MediEvil (Other Ocean Interactive, 2019) running on Windows through the gow3_pc runtime layer, with PKG install, up to 4K and a launcher. Latest release: v1.3.8. You need your own copy of the game; no game files are included.",
  notesEs: "MediEvil (Other Ocean Interactive, 2019) en Windows mediante la capa de ejecución gow3_pc, con instalación de PKG, hasta 4K y lanzador. Última release: v1.3.8. Necesitas tu propia copia del juego; no incluye archivos del juego.",
  features: [
    "Native Windows runtime port with PKG install.",
    "Up to 4K and a launcher.",
    "Requires your own PS4 game files.",
  ],
  featuresEs: [
    "Port nativo para Windows con instalación de PKG.",
    "Hasta 4K y lanzador.",
    "Necesita tus propios archivos de PS4.",
  ],
  downloads: [
    {
      label: "Windows",
      url: "https://github.com/bc160201983/medievil_2019_pc_port/releases/download/v1.3.8/medievil-windows.zip",
    },
  ],
};
