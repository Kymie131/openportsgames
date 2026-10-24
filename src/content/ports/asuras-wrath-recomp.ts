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
  summary: "Asura's Wrath is a 2012 action video game developed by CyberConnect2 and published by Capcom for the PlayStation 3 and Xbox 360. Taking elements from Hindu and Buddhist mythologies and blending them with science fiction, the game follows the titular character, the demigod Asura, as he seeks revenge on the pantheon of other demigods who betrayed him.",
  summaryEs: "Asura's Wrath es un videojuego de acción en colaboración de CyberConnect2 y Capcom, fue anunciado en el Tokyo Game Show 2010. Fue lanzado el 24 de febrero de 2012 para Xbox360 y PlayStation 3. Según el productor del videojuego Kazuhiro Tsuchiya, Asura's Wrath toma elementos del hinduismo y el budismo y los mezcla con la ciencia ficción. El protagonista y otros personajes del videojuego están basados en los asuras de la cosmología hinduista y la cosmogonía budista.",
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
