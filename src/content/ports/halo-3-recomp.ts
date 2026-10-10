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
  originalSystem: "Xbox 360",
  notes: "Static recompilation of Halo 3 (Xbox 360) built with ReXGlue. Bring your own game files.",
  notesEs:
    "Recompilación estática de Halo 3 (Xbox 360) con ReXGlue. Aporta tus propios archivos del juego.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/b/b4/Halo_3_final_boxshot.JPG",
    alt: "Halo 3 (box art)",
    credit: "Wikipedia",
  },
};
