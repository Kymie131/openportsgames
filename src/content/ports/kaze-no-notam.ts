import type { Port } from "@/lib/ports/schema";

export const KazeNoNotam: Port = {
  schema: "port",
  id: "kaze-no-notam",
  title: "Kaze no Notam",
  game: "Kaze no Notam",
  developers: ["aaaaaaaaaaway"],
  publisher: "Artdink",
  originalYear: 1997,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/aaaaaaaaaaway/kaze-no-notam-decomp"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["PlayStation"],
  summary: "Kaze no Notam is a action-adventure game published by Artdink in 1997.",
  summaryEs: "Kaze no Notam es un videojuego de acción y aventura publicado por Artdink en 1997.",
  cover: {
    src: "https://openportsgames.com/covers/generated/kaze-no-notam.svg",
    alt: "Kaze no Notam (generated cover)",
    credit: "OpenPortsGames",
  },
  notes:
    "100% matching decompilation of Kaze no Notam (PS1, 1997). All 648 functions in C, byte-identical rebuild.",
  notesEs:
    "Decompilación 100% exacta de Kaze no Notam (PS1, 1997). Las 648 funciones en C, reconstrucción byte a byte.",
};
