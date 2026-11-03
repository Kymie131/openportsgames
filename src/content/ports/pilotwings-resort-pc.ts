import type { Port } from "@/lib/ports/schema";

export const pilotwingsResortPc: Port = {
  schema: "port",
  id: "pilotwings-resort-pc",
  title: "Woohoo! Flight School (Pilotwings Resort)",
  game: "Pilotwings Resort",
  developers: ["thefixinhixon"],
  publisher: "Nintendo",
  originalYear: 2011,
  portType: "recompilation",
  genre: "simulation",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "alpha",
  release: { version: "0.1.1", date: "2026-11-02" },
  sources: ["https://github.com/thefixinhixon/woohoo-flight-school"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  sourceVerified: true,
  addedAt: "2026-11-02",
  originalSystems: ["Nintendo 3DS"],
  summary:
    "Pilotwings Resort is a 2011 flight game developed by Monster Games and published by Nintendo for the Nintendo 3DS. Set on Wuhu Island, it offers plane, hang glider and jetpack challenges using the player's Mii.",
  summaryEs:
    "Pilotwings Resort es un juego de vuelo de 2011 desarrollado por Monster Games y publicado por Nintendo para Nintendo 3DS. Ambientado en la isla Wuhu, ofrece pruebas en avión, ala delta y jetpack usando el Mii del jugador.",
  notes:
    "Static recompilation of the USA Nintendo 3DS release into C, built on your PC with your own compiler. The v0.1.1 pre-release Windows kit offers 4x 3D resolution, 16x anisotropic filtering and a layout with the top screen large and the map on a small bottom screen. Requires your own Pilotwings Resort dump and a C compiler. Early build with no game code, data or keys included.",
  notesEs:
    "Recompilación estática de la versión estadounidense de Nintendo 3DS a C, compilada en tu PC con tu propio compilador. El kit pre-release v0.1.1 para Windows ofrece resolución 3D 4x, filtrado anisotrópico 16x y un diseño con la pantalla superior grande y el mapa en una pantalla inferior pequeña. Requiere tu propio volcado de Pilotwings Resort y un compilador de C. Build temprana sin código, datos ni claves del juego.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/d/d8/Pilotwings_Resort_NA_cover.png",
    alt: "Pilotwings Resort (box art)",
    credit: "Wikipedia",
  },
};
