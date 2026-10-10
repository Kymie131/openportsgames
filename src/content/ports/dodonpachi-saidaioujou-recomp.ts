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
  originalSystem: "Xbox 360",
  notes:
    "Static recompilation of the Xbox 360 version of DoDonPachi SaiDaiOuJou, a bullet-hell shooter by Cave. It runs as a native Windows executable and needs your own game files.",
  notesEs:
    "Recompilación estática de la versión de Xbox 360 de DoDonPachi SaiDaiOuJou, un matamarcianos de Cave. Se ejecuta de forma nativa en Windows y necesita tus propios archivos del juego.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/e/e1/DoDonPachi_SaiDaiOuJou_arcade_flyer.jpg",
    alt: "DoDonPachi SaiDaiOuJou (box art)",
    credit: "Wikipedia",
  },
};
