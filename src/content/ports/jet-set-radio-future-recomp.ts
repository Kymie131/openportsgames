import type { Port } from "@/lib/ports/schema";

export const jetSetRadioFutureRecomp: Port = {
  schema: "port",
  id: "jet-set-radio-future-recomp",
  title: "Jet Set Radio Future Recompiled",
  game: "Jet Set Radio Future",
  developers: ["andeecollard"],
  publisher: "Sega",
  originalYear: 2002,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/andeecollard/jsrf-recomp"],
  license: { spdx: "MIT" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Xbox"],
  summary: "Jet Set Radio Future is a 2002 action game developed by Smilebit and published by Sega for the Xbox. It is the sequel to the 2000 Dreamcast game Jet Set Radio, and as a re-imaging of the original game, Jet Set Radio Future maintains its predecessor's cel-shaded visuals while introducing refined gameplay mechanics, updated graphics, larger open world environments, new characters, an altered plot, a new soundtrack and multiplayer gameplay.",
  summaryEs: "Jet Set Radio Future es un videojuego de acción de 2002 desarrollado por Smilebit y publicado por Sega para Xbox; es una secuela del juego de Dreamcast Jet Set Radio (2000). Como una nueva versión del juego original, presenta mecánicas de juego refinadas, gráficos actualizados, entornos de mundo abierto más grandes, nuevos personajes, una trama alterada, una nueva banda sonora y un modo de juego multijugador.",
  notes:
    "Static recompilation of Jet Set Radio Future (Xbox) for Windows. It needs your own copy of the game.",
  notesEs:
    "Recompilación estática de Jet Set Radio Future (Xbox) para Windows. Necesita tu propia copia del juego.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/7/7a/JetSetRadioFuturebox.jpg",
    alt: "Jet Set Radio Future (cover)",
    credit: "Wikipedia",
  },
};
