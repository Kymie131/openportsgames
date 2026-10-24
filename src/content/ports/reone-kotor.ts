import type { Port } from "@/lib/ports/schema";

export const reOne: Port = {
  schema: "port",
  id: "reone-kotor",
  title: "reone",
  game: "Knights of the Old Republic",
  developers: ["reone contributors"],
  publisher: "LucasArts",
  originalYear: 2003,
  genre: "rpg",
  openSource: true,
  portType: "source-port",
  platforms: ["windows", "linux"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/seedhartha/reone"],
  discord: "https://discord.gg/6sqSyfn8Jp",
  license: { spdx: "GPL-3.0" },
  verified: false,
  originalSystems: ["Windows"],
  summary: "There have been a number of Knights of the Old Republic products.Tales of the Jedi: Knights of the Old Republic, a 1990s comic book miniseries Star Wars: Knights of the Old Republic, a role-playing Star Wars video game released in 2003 Star Wars Knights of the Old Republic II: The Sith Lords, the 2004 sequel to Star Wars: Knights of the Old Republic Star Wars: Knights of the Old Republic (comics), a comic book spin-off of the 2003 video game Star Wars: The Old Republic, a massively multiplayer online role-playing game released in December 2011.",
  summaryEs: "Knights of the Old Republic es una serie de cómics ambientada en el universo ficticio de Star Wars. De periodicidad mensual, fue publicada por Dark Horse Comics de febrero de 2006 a febrero de 2010. No debe confundirse con el videojuego Star Wars: Caballeros de la Antigua República ni con el recopilatorio formado por seis cómics, también de la editorial americana Dark Horse, titulado Tales of the Jedi: Knights of the Old Republic.",
  notes:
    "Engine reimplementation for Knights of the Old Republic. No tagged releases are published.",
  notesEs:
    "Reimplementación del motor de Knights of the Old Republic. No se publican releases etiquetadas.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/9/94/Star_Wars_Knights_of_the_Old_Republic_logo.png",
    alt: "Knights of the Old Republic (box art)",
    credit: "Wikipedia",
  },
};
