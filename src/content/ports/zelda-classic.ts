import type { Port } from "@/lib/ports/schema";

export const zeldaClassic: Port = {
  schema: "port",
  id: "zelda-classic",
  title: "Zelda Classic",
  game: "The Legend of Zelda",
  developers: ["ArmageddonGames"],
  publisher: "Nintendo",
  originalYear: 1986,
  portType: "reimplementation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "stable",
  release: { version: null, date: null },
  sources: ["https://github.com/ArmageddonGames/ZeldaClassic"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Nintendo Entertainment System"],
  summary: "The Legend of Zelda is a video game series created by Japanese game designers Shigeru Miyamoto and Takashi Tezuka. It is primarily developed and published by Nintendo, but some installments and re-releases have been outsourced to Flagship, Grezzo, and Tantalus Media.",
  summaryEs: "The Legend of Zelda es una serie de videojuegos de acción-aventura creada por los diseñadores japoneses Shigeru Miyamoto y Takashi Tezuka, y desarrollada por Nintendo, empresa que también se encarga de su distribución internacional. Su trama por lo general describe las heroicas aventuras del joven guerrero Link, que debe enfrentarse a peligros y resolver acertijos para ayudar a la Princesa Zelda a derrotar a Ganondorf y salvar su hogar, el reino de Hyrule.",
  notes:
    "Free 2D engine and editor that recreates The Legend of Zelda. It does not need the original game data.",
  notesEs:
    "Motor y editor 2D gratuito que recrea The Legend of Zelda. No necesita los datos del juego original.",
  noOriginalGameRequired: true,
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/4/41/Legend_of_zelda_cover_%28with_cartridge%29_gold.png",
    alt: "The Legend of Zelda (cover)",
    credit: "Wikipedia",
  },
};
