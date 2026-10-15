import type { Port } from "@/lib/ports/schema";

export const ArTonelicoIiMelodyOfMetafalica: Port = {
  schema: "port",
  id: "ar-tonelico-ii-melody-of-metafalica",
  title: "Ar tonelico II: Melody of Metafalica",
  game: "Ar tonelico II: Melody of Metafalica",
  developers: ["USED255"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/USED255/artonelico2-decomp"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Other",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/e/e8/Ar_tonelico_II.jpg",
    alt: "Ar tonelico II: Melody of Metafalica (box art)",
    credit: "Wikipedia",
  },
  notes: "Ar tonelico II: Melody of Metafalica — matching decompilation (SLPS_258.19).",
  notesEs:
    "Decompilación que coincide byte a byte de Ar tonelico II: Melody of Metafalica (SLPS_258.19).",
};
