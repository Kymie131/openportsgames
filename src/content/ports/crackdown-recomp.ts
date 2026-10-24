import type { Port } from "@/lib/ports/schema";

export const crackdownRecomp: Port = {
  schema: "port",
  id: "crackdown-recomp",
  title: "Crackdown Recompiled",
  game: "Crackdown",
  developers: ["SkiddyToast"],
  publisher: "Microsoft Game Studios",
  originalYear: 2007,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/SkiddyToast/Crackdown"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystems: ["Xbox 360"],
  summary: "Crackdown is a 2007 action-adventure game developed by Realtime Worlds and published by Microsoft Game Studios for the Xbox 360. Crackdown was conceived by Realtime Worlds' founder, David Jones, who also created Grand Theft Auto and Lemmings.",
  summaryEs: "Crackdown, lanzado en Japón como Riot Act, es un juego de acción urbana, lanzado el 20 de febrero de 2007 para la Xbox 360. Desarrollado por Realtime Worlds y distribuidor por Microsoft Game Studios. El juego viene de la mente de David Jones, quien ayudó a la creación de Grand Theft Auto y Lemmings. Un número limitado de las versiones lanzadas en América del Norte vienen con una invitación para la beta multijugador de Halo 3. El motor gráfico usa físicas realistas y un nuevo estilo de cel-shading.",
  notes:
    "ReXGlue static recompilation of Crackdown (Xbox 360) for Windows. Needs the original game files.",
  notesEs:
    "Recompilación estática con ReXGlue de Crackdown (Xbox 360) para Windows. Necesita los archivos originales.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/3/35/Crackdownfinalbox.jpg",
    alt: "Crackdown (box art)",
    credit: "Wikipedia",
  },
};
