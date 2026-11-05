import type { Port } from "@/lib/ports/schema";

export const bstone: Port = {
  schema: "port",
  id: "bstone",
  title: "BStone",
  game: "Blake Stone: Aliens of Gold",
  developers: ["bibendovsky"],
  publisher: "Apogee Software",
  originalYear: 1993,
  portType: "source-port",
  genre: "shooter",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux"],
  status: "stable",
  release: { version: "1.3.4", date: "2026-05-27" },
  sources: ["https://github.com/bibendovsky/bstone"],
  license: { spdx: "GPL-2.0" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["MS-DOS"],
  summary:
    "Blake Stone: Aliens of Gold is a first-person shooter developed by JAM Productions and published by Apogee Software in 1993. Agent Blake Stone infiltrates a lunar base overrun by Dr. Goldfire's alien army.",
  summaryEs:
    "Blake Stone: Aliens of Gold es un shooter en primera persona desarrollado por JAM Productions y publicado por Apogee Software en 1993. El agente Blake Stone se infiltra en una base lunar tomada por el ejército alienígena del Dr. Goldfire.",
  cover: {
    src: "https://openportsgames.com/covers/generated/bstone.svg",
    alt: "Blake Stone: Aliens of Gold (generated cover)",
    credit: "OpenPortsGames",
  },
  notes:
    "BStone is an unofficial source port of the Blake Stone series with widescreen support and modern input. It needs the original game data.",
  notesEs:
    "BStone es un port no oficial del código fuente de la saga Blake Stone con pantalla ancha y entrada moderna. Necesita los datos originales del juego.",
};
