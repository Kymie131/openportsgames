import type { Port } from "@/lib/ports/schema";

export const dodonpachiSaidaioujouRecomp: Port = {
  schema: "port",
  id: "dodonpachi-saidaioujou-recomp",
  title: "DoDonPachi SaiDaiOuJou Recompiled",
  game: "DoDonPachi SaiDaiOuJou",
  developers: ["eandis"],
  publisher: "Cave",
  originalYear: 2012,
  portType: "recompilation",
  genre: "shooter",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/eandis/SDOJ-Recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Xbox 360"],
  summary: "DoDonPachi SaiDaiOuJou is a 2012 vertically scrolling bullet hell arcade game released by Cave, and the sixth chapter in Cave's DonPachi series.",
  summaryEs: "DoDonPachi SaiDaiOuJou es un videojuego de disparos publicado por CAVE en 2012.",
  notes:
    "DoDonPachi SaiDaiOuJou (Xbox 360) recompiled with ReXGlue. It requires the 1.01 title update. Keyboard and mouse are enabled from the in-game menu (F4).",
  notesEs:
    "Recompilación de DoDonPachi SaiDaiOuJou (Xbox 360) con ReXGlue. Requiere la actualización 1.01. El teclado y el ratón se activan desde el menú del juego (F4).",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/e/e1/DoDonPachi_SaiDaiOuJou_arcade_flyer.jpg",
    alt: "DoDonPachi SaiDaiOuJou (box art)",
    credit: "Wikipedia",
  },
};
