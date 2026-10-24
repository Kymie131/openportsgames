import type { Port } from "@/lib/ports/schema";

export const Freeciv: Port = {
  schema: "port",
  id: "freeciv",
  title: "Freeciv",
  game: "freeciv",
  developers: ["freeciv"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "source-port",
  genre: "strategy",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/freeciv/freeciv"],
  license: { spdx: "GPL-2.0" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Unknown"],
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Freeciv_Web_Logo.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=original",
    alt: "freeciv (cover)",
    credit: "Wikipedia",
  },
  summary: "Freeciv is a single- and multiplayer turn-based strategy game for workstations and personal computers inspired by the proprietary Sid Meier's Civilization series. It is available for most desktop computer operating systems and available in an online browser version. Released under the GNU GPL-2.0-or-later, Freeciv is free and open-source software. The game's default settings are closest to Civilization II, in both gameplay and graphics, including the units and the isometric grid.",
  summaryEs: "Freeciv es un videojuego de estrategia por turnos inspirado en el juego Civilization. Es software libre gratuito, disponible en virtud de la GNU GPL. Está incluido en numerosas distribuciones Linux. También está disponible para Microsoft Windows, MacOS y Android.",
  notes:
    "Freeciv is a Free and Open Source empire-building strategy game inspired by the history of human civilization. Upstream repository for the standalone Freeciv client and server. Report bugs and submit patches at https://redmine.freeciv.org/projects/freeciv.",
  notesEs:
    "Freeciv es un juego de estrategia de construcción de imperios libre y de código abierto inspirado en la historia de la civilización. Repositorio principal del cliente y servidor autónomo de Freeciv. Informa de errores y envía parches en redmine.freeciv.org.",
};
