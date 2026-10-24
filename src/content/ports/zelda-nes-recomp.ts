import type { Port } from "@/lib/ports/schema";

export const zeldaNesRecomp: Port = {
  schema: "port",
  id: "zelda-nes-recomp",
  title: "LegendOfZeldaNESRecomp",
  game: "The Legend of Zelda",
  developers: ["mstan"],
  publisher: "Nintendo",
  originalYear: 1986,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "stable",
  release: { version: null, date: null },
  sources: ["https://github.com/mstan/LegendOfZeldaNESRecomp"],
  license: { spdx: "PolyForm-Noncommercial-1.0.0", note: "PolyForm Noncommercial 1.0.0" },
  verified: false,
  originalSystems: ["Nintendo Entertainment System"],
  summary: "The Legend of Zelda is a video game series created by Japanese game designers Shigeru Miyamoto and Takashi Tezuka. It is primarily developed and published by Nintendo, but some installments and re-releases have been outsourced to Flagship, Grezzo, and Tantalus Media.",
  summaryEs: "The Legend of Zelda es una serie de videojuegos de acción-aventura creada por los diseñadores japoneses Shigeru Miyamoto y Takashi Tezuka, y desarrollada por Nintendo, empresa que también se encarga de su distribución internacional. Su trama por lo general describe las heroicas aventuras del joven guerrero Link, que debe enfrentarse a peligros y resolver acertijos para ayudar a la Princesa Zelda a derrotar a Ganondorf y salvar su hogar, el reino de Hyrule.",
  notes:
    "Static recompilation of The Legend of Zelda (NES) with nesrecomp. It covers the overworld, dungeons, items and battery-backed saving.",
  notesEs:
    "Recompilación estática de The Legend of Zelda (NES) con nesrecomp. Cubre el mapa, las mazmorras, los objetos y el guardado en batería.",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%20Entertainment%20System/Named_Boxarts/Legend%20of%20Zelda%2C%20The%20(USA)%20(Collector's%20Edition).png",
    alt: "The Legend of Zelda (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%20Entertainment%20System/Named_Snaps/Legend%20of%20Zelda,%20The%20(USA)%20(Collector's%20Edition).png",
      alt: "The Legend of Zelda (screenshot)",
      credit: "Libretro",
    },
  ],
};
