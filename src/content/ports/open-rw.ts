import type { Port } from "@/lib/ports/schema";

export const openRw: Port = {
  schema: "port",
  id: "open-rw",
  title: "OpenRW",
  game: "Grand Theft Auto III",
  developers: ["OpenRW contributors"],
  publisher: "Rockstar Games",
  originalYear: 2001,
  genre: "open-world",
  openSource: true,
  portType: "reimplementation",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/rwengine/openrw"],
  website: "https://openrw.org",
  license: { spdx: "GPL-3.0" },
  verified: false,
  originalSystem: "Microsoft Windows",
  notes:
    "Unofficial open source recreation of the original game executable. No tagged releases are published, so builds track the repository. A legitimate PC copy of Grand Theft Auto III is required to play.",
  notesEs:
    "Recreación no oficial de código abierto del ejecutable del juego original. No se publican releases etiquetadas, así que las builds siguen el repositorio. Se necesita una copia legítima de Grand Theft Auto III para PC.",
};
