import type { Port } from "@/lib/ports/schema";

export const asurasWrathRecomp: Port = {
  schema: "port",
  id: "asuras-wrath-recomp",
  title: "Asura's Wrath Recompiled",
  game: "Asura's Wrath",
  developers: ["PauloUbirajara"],
  publisher: "Capcom",
  originalYear: 2012,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/PauloUbirajara/asuras-wrath-recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Xbox 360"],
  notes:
    "Static recompilation of Asura's Wrath (Xbox 360) for Windows. It needs your own copy of the game.",
  notesEs:
    "Recompilación estática de Asura's Wrath (Xbox 360) para Windows. Necesita tu propia copia del juego.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/d/d8/Asura%27s_Wrath_Cover_Art.png",
    alt: "Asura's Wrath (cover)",
    credit: "Wikipedia",
  },
};
