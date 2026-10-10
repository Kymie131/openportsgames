import type { Port } from "@/lib/ports/schema";

export const descent3: Port = {
  schema: "port",
  id: "descent-3",
  title: "Descent 3 (Source Release)",
  game: "Descent 3",
  developers: ["DescentDevelopers"],
  publisher: "Interplay Entertainment",
  originalYear: 1999,
  portType: "source-port",
  genre: "shooter",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/DescentDevelopers/Descent3"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  originalSystem: "Microsoft Windows",
  notes:
    "Official open-source release of Descent 3 published by the Descent Developers, with builds for Windows, Linux and macOS. It needs the retail game data to play.",
  notesEs:
    "Publicación de código abierto oficial de Descent 3 por los Descent Developers, con builds para Windows, Linux y macOS. Necesita los datos del juego comercial para jugar.",
};
