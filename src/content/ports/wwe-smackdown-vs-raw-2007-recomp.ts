import type { Port } from "@/lib/ports/schema";

export const wweSmackdownVsRaw2007Recomp: Port = {
  schema: "port",
  id: "wwe-smackdown-vs-raw-2007-recomp",
  title: "WWE SmackDown vs. Raw 2007 Recompiled",
  game: "WWE SmackDown vs. Raw 2007",
  developers: ["HollywoodAkeem"],
  publisher: "THQ",
  originalYear: 2006,
  portType: "recompilation",
  genre: "fighting",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/HollywoodAkeem/SVR07-Recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "Xbox 360",
  notes:
    "Static recompilation of WWE SmackDown vs. Raw 2007 (Xbox 360) with ReXGlue. It requires your own copy of the game.",
  notesEs:
    "Recompilación estática de WWE SmackDown vs. Raw 2007 (Xbox 360) con ReXGlue. Requiere tu propia copia del juego.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/6/62/WWE_SmackDown_vs._Raw_2007.jpg",
    alt: "WWE SmackDown vs. Raw 2007 (box art)",
    credit: "Wikipedia",
  },
};
