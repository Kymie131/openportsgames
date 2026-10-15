import type { Port } from "@/lib/ports/schema";

export const LegoStarWarsIiiTheCloneWars: Port = {
  schema: "port",
  id: "lego-star-wars-iii-the-clone-wars",
  title: "Lego Star Wars III: The Clone Wars",
  game: "Lego Star Wars III: The Clone Wars",
  developers: ["ThePlayerRolo"],
  publisher: "Unknown",
  originalYear: 2000,
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
  originalSystem: "Wii",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Wii/Named_Boxarts/LEGO%20Star%20Wars%20III%20-%20The%20Clone%20Wars%20(Europe)%20(En,Fr,De,Es,It,Da).png",
    alt: "Lego Star Wars III: The Clone Wars (box art)",
    credit: "Box art",
  },
  notes:
    "A decompilation of Lego Star Wars III: The Clone Wars on Wii brought to you by a bunch of clever folks.",
  notesEs:
    "Una decompilación de Lego Star Wars III: The Clone Wars de Wii creada por un grupo de personas habilidosas.",
};
