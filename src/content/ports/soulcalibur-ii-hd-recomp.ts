import type { Port } from "@/lib/ports/schema";

export const soulcaliburIiHdRecomp: Port = {
  schema: "port",
  id: "soulcalibur-ii-hd-recomp",
  title: "Soulcalibur II HD Online Recompiled",
  game: "Soulcalibur II HD Online",
  developers: ["n0madic"],
  publisher: "Bandai Namco",
  originalYear: 2013,
  portType: "recompilation",
  genre: "fighting",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "beta",
  release: { version: "0.1.0", date: "2026-10-16" },
  sources: ["https://github.com/n0madic/Soulcalibur2HD-recomp"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["PlayStation 3"],
  summary: "Soulcalibur II is a 2002 fighting game developed and published by Namco. It is the third installment in the Soulcalibur series of weapon-based fighting games as the sequel to Soulcalibur (1998). Originally intended to be released on Sega's NAOMI arcade board, the game was built on the Namco System 246 board before being ported to the PlayStation 2, GameCube, and Xbox home consoles.",
  summaryEs: "Soulcalibur II es un videojuego de lucha lanzado originalmente en el 2002 para sistemas arcade Namco System 246, luego desarrollado para consolas en el año 2003. Es el segundo juego de la saga Soulcalibur realizada por Namco.",
  cover: {
    src: "https://openportsgames.com/covers/generated/soulcalibur-ii-hd-online.svg",
    alt: "Soulcalibur II HD Online (generated cover)",
    credit: "OpenPortsGames",
  },
  notes:
    "Soulcalibur II HD Online (Bandai Namco, 2013) running natively on Windows, Linux and Mac through static recompilation. It needs your own copy.",
  notesEs:
    "Soulcalibur II HD Online (Bandai Namco, 2013) en Windows, Linux y Mac de forma nativa mediante recompilación estática. Necesitas tu propia copia.",
};
