import type { Port } from "@/lib/ports/schema";

export const rustyBlazer: Port = {
  schema: "port",
  id: "rusty-blazer",
  title: "RustyBlazer",
  game: "Soul Blazer",
  developers: ["hellow554"],
  publisher: "Enix",
  originalYear: 1992,
  portType: "decompilation",
  genre: "rpg",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/hellow554/RustyBlazer"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Super Nintendo"],
  summary: "Soul Blazer, released in Japan as Soul Blader, is an action role-playing video game developed by Quintet and published by Enix for the Super Nintendo Entertainment System. It was released in 1992 in Japan and North America, but not released in Europe until 1994. It was not released in the United Kingdom.",
  summaryEs: "Soul Blazer, conocido en Japón como Soul Blader, es un Action-RPG para Super Nintendo desarrollado por Quintet y publicado por Enix en 1992. Es un juego similar en temática al anterior juego de Quintet ActRaiser, ya que el jugador toma el papel de un ángel enviado por una deidad para destruir monstruos y liberar las almas capturadas de los seres vivos del planeta. Para muchos es considerado el primer juego de la \"Soul Blazer Trilogy\", seguido por Illusion of Gaia y Terranigma.",
  notes:
    "Decompilation of Soul Blazer rewritten in Rust. A research codebase; it requires game files from a copy you own.",
  notesEs:
    "Decompilación de Soul Blazer reescrita en Rust. Código de investigación; requiere archivos del juego de una copia que poseas.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/1/16/Soul_Blazer_box_art.jpg",
    alt: "Soul Blazer (cover)",
    credit: "Wikipedia",
  },
};
