import type { Port } from "@/lib/ports/schema";

export const dsKartRecompiled: Port = {
  schema: "port",
  id: "ds-kart-recompiled",
  title: "DS Kart Recompiled",
  game: "Mario Kart DS",
  developers: ["AlonsoTlol"],
  publisher: "Nintendo",
  originalYear: 2005,
  portType: "recompilation",
  genre: "racing",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "beta",
  release: { version: "1.0.5", date: "2026-11-15" },
  sources: ["https://github.com/AlonsoTlol/DS-Kart-Recompiled"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  sourceVerified: true,
  addedAt: "2026-11-16",
  originalSystems: ["Nintendo DS"],
  summary:
    "Mario Kart DS is a 2005 kart racing game developed and published by Nintendo for the Nintendo DS. Like other games in the Mario Kart series, Mario Kart DS features characters from the Mario series and pits them against each other as they race in karts on tracks based on locations from the Mario series. It was released in November 2005 in North America, Europe, and Australia, and in December 2005 in Japan, and re-released for the Wii U's Virtual Console in North America and PAL regions in April 2015 and in Japan in May 2016.",
  summaryEs:
    "Mario Kart DS es un videojuego de carreras de karts desarrollado y publicado por Nintendo para la consola portátil Nintendo DS. Al igual que otros títulos de la serie, cuenta con personajes de la saga Mario y los enfrenta entre sí en competiciones por circuitos inspirados en escenarios de la franquicia. Salió a la venta en noviembre de 2005 en Norteamérica, Europa y Australia, y el 8 de diciembre en Japón, y lo relanzaron para la Consola Virtual de Wii U en Estados Unidos y las regiones PAL en abril de 2015 y en Japón en mayo de 2016.",
  notes:
    "Static recompilation of the European version of Mario Kart DS. The full game runs on Windows, with Linux and macOS builds in beta. No game files are included.",
  notesEs:
    "Recompilación estática de la versión europea de Mario Kart DS. El juego completo funciona en Windows, con builds de Linux y macOS en beta. No incluye archivos del juego.",
  cover: {
    src: "https://openportsgames.com/covers/generated/mario-kart-ds.svg",
    alt: "Mario Kart DS (generated cover)",
    credit: "OpenPortsGames",
  },
};
