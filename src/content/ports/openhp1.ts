import type { Port } from "@/lib/ports/schema";

export const openhp1: Port = {
  schema: "port",
  id: "openhp1",
  title: "OpenHP1 (Harry Potter)",
  game: "Harry Potter and the Philosopher's Stone",
  developers: ["SplittyDev"],
  publisher: "Electronic Arts",
  originalYear: 2001,
  portType: "reimplementation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/SplittyDev/openhp1"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "Microsoft Windows",
  notes:
    "Open reimplementation of the PC version of Harry Potter and the Philosopher's Stone. It requires the original game files to run.",
  notesEs:
    "Reimplementación libre de la versión de PC de Harry Potter y la piedra filosofal. Requiere los archivos del juego original para funcionar.",
};
