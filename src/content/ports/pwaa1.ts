import type { Port } from "@/lib/ports/schema";

export const pwaa1: Port = {
  schema: "port",
  id: "pwaa1",
  title: "Phoenix Wright: Ace Attorney Decompilation",
  game: "Phoenix Wright: Ace Attorney",
  developers: ["atasro2"],
  publisher: "Capcom",
  originalYear: 2001,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  wip: true,
  release: { version: null, date: null },
  sources: ["https://github.com/atasro2/pwaa1"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Game Boy Advance"],
  summary: "Phoenix Wright: Ace Attorney is a visual novel adventure game developed and published by Capcom. It was released in 2001 for the Game Boy Advance in Japan and has been ported to multiple platforms. The 2005 Nintendo DS version, titled Gyakuten Saiban Yomigaeru Gyakuten in Japan, introduced an English language option, and was the first time the game was released in North America and Europe. It is the first entry in the Ace Attorney series; several sequels and spin-offs were produced, while this game has seen further ports and remasters for computers, game consoles, and mobile devices.",
  summaryEs: "Phoenix Wright: Ace Attorney, lanzado en Japón como Gyakuten Saiban , es una novela visual para la consola Game Boy Advance de la saga Ace Attorney. Fue publicado y desarrollado por Capcom en Japón, Norteamérica y Europa, y publicado por Nintendo en Australia. Fue lanzado por primera vez en Japón en 2001 y posteriormente, en 2005, lanzado mundialmente para la Nintendo DS, añadiendo un episodio adicional que aprovecha la pantalla táctil y el micrófono de la Nintendo DS.",
  notes:
    "Decompilation of Gyakuten Saiban (Phoenix Wright: Ace Attorney). A research codebase; it requires game files from a copy you own.",
  notesEs:
    "Decompilación de Gyakuten Saiban (Phoenix Wright: Ace Attorney). Código de investigación; requiere archivos del juego de una copia que poseas.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/7/73/Phoenix_Wright_-_Ace_Attorney_Coverart.png",
    alt: "Phoenix Wright: Ace Attorney (cover)",
    credit: "Wikipedia",
  },
};
