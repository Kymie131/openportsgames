import type { Port } from "@/lib/ports/schema";

export const halo3Recomp: Port = {
  schema: "port",
  id: "halo-3-recomp",
  title: "Halo 3 Recompiled",
  game: "Halo 3",
  developers: ["twist84"],
  publisher: "Microsoft Game Studios",
  originalYear: 2007,
  portType: "recompilation",
  genre: "shooter",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/twist84/halo3_cache_release_recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystems: ["Xbox 360"],
  summary: "Halo 3 is a 2007 first-person shooter video game developed by Bungie for the Xbox 360 console. The third installment in the Halo franchise following Halo: Combat Evolved (2001) and Halo 2 (2004), the game's story centers on the interstellar war between 26th-century humanity, a collection of alien races known as the Covenant, and the alien parasite known as the Flood. The player assumes the role of the Master Chief, a cybernetically enhanced supersoldier, as he battles the Covenant and the Flood. In cooperative play, other human players assume the role of allied alien soldiers.",
  summaryEs: "Halo 3 es un videojuego de disparos en primera persona desarrollado por Bungie Studios exclusivamente para la videoconsola Xbox 360 y posteriormente para Xbox One y PC en el recopilatorio Halo: The Master Chief Collection.",
  notes: "Static recompilation of Halo 3 (Xbox 360) built with ReXGlue. Bring your own game files.",
  notesEs:
    "Recompilación estática de Halo 3 (Xbox 360) con ReXGlue. Aporta tus propios archivos del juego.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/b/b4/Halo_3_final_boxshot.JPG",
    alt: "Halo 3 (box art)",
    credit: "Wikipedia",
  },
};
