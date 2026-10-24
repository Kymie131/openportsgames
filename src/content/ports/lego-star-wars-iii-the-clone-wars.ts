import type { Port } from "@/lib/ports/schema";

export const LegoStarWarsIiiTheCloneWars: Port = {
  schema: "port",
  id: "lego-star-wars-iii-the-clone-wars",
  title: "Lego Star Wars III: The Clone Wars",
  game: "Lego Star Wars III: The Clone Wars",
  developers: ["ThePlayerRolo"],
  publisher: "Lucasfilm Games",
  originalYear: 2011,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/ThePlayerRolo/LegoCloneWarsWii"],
  license: { spdx: "CC0-1.0" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Wii"],
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Wii/Named_Boxarts/LEGO%20Star%20Wars%20III%20-%20The%20Clone%20Wars%20(Europe)%20(En,Fr,De,Es,It,Da).png",
    alt: "Lego Star Wars III: The Clone Wars (box art)",
    credit: "Box art",
  },
  summary: "Lego Star Wars III: The Clone Wars is a Lego-themed action-adventure video game developed by Traveller's Tales and published by LucasArts in March 2011 for the PlayStation 3, PlayStation Portable, Xbox 360, Wii, Nintendo DS, Microsoft Windows, and the Nintendo 3DS. It was one of the 3DS's launch titles. The game features missions and characters from the 2008 animated film Star Wars: The Clone Wars and its follow-up television series, as well as fan-favorites from the original Star Wars saga, in both single-player and multiplayer modes.",
  summaryEs: "Lego Star Wars III: The Clone Wars o Lego Star Wars III: la Guerra de los Clones es un videojuego de Lego y Star Wars para PlayStation 3, PlayStation Portable, Xbox 360, Wii, Nintendo DS, Microsoft Windows y Nintendo 3DS lanzado entre el 19 y el 22 de marzo de 2011 Desarrollado por Traveller's Tales y publicado por LucasArts y TT Games. La trama del juego trata sobre las 2 primeras temporadas de Star Wars: La Guerra de los Clones.",
  notes:
    "A decompilation of Lego Star Wars III: The Clone Wars on Wii brought to you by a bunch of clever folks.",
  notesEs:
    "Una decompilación de Lego Star Wars III: The Clone Wars de Wii creada por un grupo de personas habilidosas.",
};
