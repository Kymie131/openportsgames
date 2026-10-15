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
  originalSystem: "Other",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Freeciv_Web_Logo.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=original",
    alt: "freeciv (cover)",
    credit: "Wikipedia",
  },
  notes:
    "Freeciv is a Free and Open Source empire-building strategy game inspired by the history of human civilization. Upstream repository for the standalone Freeciv client and server. Report bugs and submit patches at https://redmine.freeciv.org/projects/freeciv.",
  notesEs:
    "Freeciv es un juego de estrategia de construcción de imperios libre y de código abierto inspirado en la historia de la civilización. Repositorio principal del cliente y servidor autónomo de Freeciv. Informa de errores y envía parches en redmine.freeciv.org.",
};
