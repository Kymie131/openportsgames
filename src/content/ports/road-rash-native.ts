import type { Port } from "@/lib/ports/schema";

export const roadRashNative: Port = {
  schema: "port",
  id: "road-rash-native",
  title: "Road Rash (Native Port)",
  game: "Road Rash",
  developers: ["arkits"],
  publisher: "Electronic Arts",
  originalYear: 1994,
  portType: "recompilation",
  genre: "racing",
  openSource: false,
  originalGameLicense: "proprietary",
  platforms: ["web", "macos", "android"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/arkits/road-rash"],
  website: "https://road-rash.archit.xyz/",
  playUrl: "https://road-rash.archit.xyz/",
  license: { spdx: "NOASSERTION", note: "source published without a license" },
  verified: false,
  sourceVerified: true,
  addedAt: "2026-10-27",
  originalSystems: ["Windows", "Sega Mega Drive / Genesis"],
  related: ["road-rash-64-recompiled"],
  cover: {
    src: "https://road-rash.archit.xyz/og-image.png",
    alt: "Road Rash (native port key art)",
    credit: "Road Rash native port",
  },
  summary:
    "Road Rash is a 1994 motorcycle racing game developed and published by Electronic Arts. It mixes high-speed races across long courses with hand-to-hand combat against rival riders, police chases and a career mode built around earning money and buying faster bikes.",
  summaryEs:
    "Road Rash es un videojuego de carreras de motos de 1994 desarrollado y publicado por Electronic Arts. Combina carreras a alta velocidad por recorridos largos con combate cuerpo a cuerpo contra pilotos rivales, persecuciones policiales y un modo carrera basado en ganar dinero y comprar motos más rápidas.",
  notes:
    "Unofficial native port of the 1996 Windows release with a browser build at road-rash.archit.xyz. The browser version asks for your own disc image and does not ship game data. The repository publishes source without a license.",
  notesEs:
    "Port nativo no oficial de la versión de Windows de 1996 con build para navegador en road-rash.archit.xyz. La versión web pide tu propia imagen del disco y no distribuye los datos del juego. El repositorio publica el código sin licencia.",
};
