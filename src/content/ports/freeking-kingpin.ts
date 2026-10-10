import type { Port } from "@/lib/ports/schema";

export const freekingKingpin: Port = {
  schema: "port",
  id: "freeking-kingpin",
  title: "FreeKing (Kingpin)",
  game: "Kingpin: Life of Crime",
  developers: ["ernestbuffington"],
  publisher: "Interplay Entertainment",
  originalYear: 1999,
  portType: "reimplementation",
  genre: "shooter",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/ernestbuffington/freeking"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  originalSystem: "Microsoft Windows",
  notes:
    "Open-source reimplementation of the Kingpin: Life of Crime engine, intended to run with the retail game data. It builds for Windows, Linux and macOS.",
  notesEs:
    "Reimplementación de código abierto del motor de Kingpin: Life of Crime, pensada para funcionar con los datos del juego comercial. Compila para Windows, Linux y macOS.",
};
