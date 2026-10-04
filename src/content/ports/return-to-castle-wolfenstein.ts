import type { Port } from "@/lib/ports/schema";

export const rtcWolfenstein: Port = {
  schema: "port",
  id: "return-to-castle-wolfenstein",
  title: "Return to Castle Wolfenstein",
  game: "Return to Castle Wolfenstein",
  developers: ["iortcw team"],
  publisher: "Gray Matter Interactive",
  originalYear: 2001,
  genre: "shooter",
  openSource: true,
  portType: "source-port",
  platforms: ["windows", "linux", "macos"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/iortcw/iortcw"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  originalSystem: "Microsoft Windows",
  notes:
    "Open source reimplementation of the original game code. The upstream tag 1.51c combines three revisions in one string and cannot be represented as a semantic version, so no release version is recorded.",
  notesEs:
    "Reimplementación de código abierto del código del juego original. La etiqueta upstream 1.51c combina tres revisiones en una sola cadena y no puede representarse como versión semántica, así que no se registra versión de release.",
  screenshots: [
    {
      src: "https://raw.githubusercontent.com/iortcw/iortcw/master/MP/misc/wolf128.png",
      alt: "iortcw logo",
      credit: "iortcw",
    },
  ],
};
