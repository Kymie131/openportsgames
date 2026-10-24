import type { Port } from "@/lib/ports/schema";

export const sf64Psp: Port = {
  schema: "port",
  id: "sf64-psp",
  title: "Star Fox 64 (PSP)",
  game: "Star Fox 64",
  developers: ["TheMrIron2"],
  publisher: "Nintendo",
  originalYear: 1997,
  portType: "decompilation",
  genre: "shooter",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["psp"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/TheMrIron2/sf64-psp"],
  license: { spdx: "CC0-1.0" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Nintendo 64"],
  summary: "Star Fox 64, known as Lylat Wars in PAL regions, is a 1997 rail shooter game developed and published by Nintendo for the Nintendo 64. It is the second Star Fox game, following Star Fox (1993) for the Super Nintendo Entertainment System (SNES). It was the first Nintendo 64 game to support the Rumble Pak, which initially came bundled with retail copies.",
  summaryEs: "Star Fox 64 es un rail shooter de combates aéreos para la consola Nintendo 64. Es un reboot del juego Star Fox para Super Nintendo y es el único juego de la serie de Star Fox desarrollado para Nintendo 64. Apareció en 1997, formando parte del grupo de juegos que salieron junto al Nintendo 64. Se comercializó acompañado del accesorio \"Rumble Pak\", el cual hacía vibrar al mando, lo cual fue toda una novedad. El juego vendió 4 millones de copias desde su lanzamiento, convirtiéndolo en uno de los mejores juegos vendidos para la consola.",
  notes:
    "Port of Star Fox 64 to the PlayStation Portable, based on the decompilation. Requires your own ROM.",
  notesEs:
    "Port de Star Fox 64 a la PlayStation Portable, basado en la decompilación. Requiere tu propia ROM.",
  cover: {
    src: "https://cdn2.steamgriddb.com/icon_thumb/2b962f0b627cf45414b498eb963dde7d.png",
    alt: "Star Fox 64 (cover)",
    credit: "SteamGridDB",
  },
};
