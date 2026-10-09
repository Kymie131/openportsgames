import type { Port } from "@/lib/ports/schema";

export const doaxbvRe: Port = {
  schema: "port",
  id: "doaxbv-re",
  title: "Dead or Alive Xtreme Beach Volleyball",
  game: "Dead or Alive Xtreme Beach Volleyball",
  developers: ["NoRain211"],
  publisher: "Tecmo",
  originalYear: 2003,
  portType: "recompilation",
  genre: "sports",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/NoRain211/doaxbv-re"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "Xbox",
  notes:
    "Static recompilation of Dead or Alive Xtreme Beach Volleyball (Xbox) with ReXGlue. It requires your own copy of the game.",
  notesEs:
    "Recompilación estática de Dead or Alive Xtreme Beach Volleyball (Xbox) con ReXGlue. Requiere tu propia copia del juego.",
};
