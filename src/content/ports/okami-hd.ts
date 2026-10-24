import type { Port } from "@/lib/ports/schema";

export const OkamiHd: Port = {
  schema: "port",
  id: "okami-hd",
  title: "Okami HD",
  game: "Okami HD",
  developers: ["Shintensu"],
  publisher: "Capcom",
  originalYear: 2012,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/Shintensu/OkamiHD-Decomp"],
  license: { spdx: "MIT" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Unknown"],
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/b/be/OkamiNTSCcoverFinal.jpg",
    alt: "Okami HD (box art)",
    credit: "Wikipedia",
  },
  summary: "Okami HD is a action-adventure game published by Capcom in 2012.",
  summaryEs: "Okami HD es un videojuego de acción y aventura publicado por Capcom en 2012.",
  notes:
    "A decompilation project for OkamiHD. The main focus is modding for now, but a full decomp is the end goal.",
  notesEs:
    "Proyecto de decompilación de Okami HD. De momento se centra en el modding, pero el objetivo final es una decompilación completa.",
};
