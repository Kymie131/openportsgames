import type { Port } from "@/lib/ports/schema";

export const ja2Stracciatella: Port = {
  schema: "port",
  id: "ja2-stracciatella",
  title: "Ja2Stracciatella",
  game: "Jagged Alliance 2",
  developers: ["Ja2Stracciatella Team"],
  publisher: "TopWare",
  originalYear: 1999,
  genre: "strategy",
  openSource: true,
  portType: "source-port",
  platforms: ["windows", "linux", "macos", "android"],
  status: "stable",
  release: { version: "0.22.1", date: "2025-10-05" },
  sources: ["https://github.com/ja2-stracciatella/ja2-stracciatella"],
  discord: "https://discord.com/invite/GqrVZUM",
  website: "https://ja2-stracciatella.github.io/",
  license: {
    spdx: "NOASSERTION",
    note: "SFI Source Code license agreement at the repository root",
  },
  verified: true,
  verifiedAt: "2026-10-01",
  originalSystems: ["MS-DOS"],
  features: [
    "Cross-platform desktop builds",
    "Android build",
    "Extended item and mercenary databases",
  ],
  featuresEs: [
    "Builds de escritorio multiplataforma",
    "Build para Android",
    "Bases de datos de objetos y mercenarios ampliadas",
  ],
  summary: "Jagged Alliance 2 is a 1999 tactical role-playing game developed by Sir-Tech Canada for Microsoft Windows and later ported to Linux by Tribsoft. It is the third entry in the Jagged Alliance series. The game was followed by the expansion pack Unfinished Business in 2000. Two commercial versions of the mod Wildfire were released in 2004 in the form of expansion packs. The core game and the Unfinished Business expansion were combined and re-released under the title of Jagged Alliance 2 Gold Pack in 2002.",
  summaryEs: "Jagged Alliance 2 es un videojuego de estrategia publicado por TalonSoft en 1999.",
  notes:
    "Open source reimplementation of Jagged Alliance 2. The repository carries an SFI Source Code license agreement rather than a standard SPDX license.",
  notesEs:
    "Reimplementación de código abierto de Jagged Alliance 2. El repositorio incluye un acuerdo de licencia de código fuente SFI en lugar de una licencia SPDX estándar.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/4/42/Jagged_Alliance_2_Coverart.png",
    alt: "Jagged Alliance 2 (box art)",
    credit: "Wikipedia",
  },
};
