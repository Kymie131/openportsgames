import type { Port } from "@/lib/ports/schema";

export const carmageddonRecomp: Port = {
  schema: "port",
  id: "carmageddon-recomp",
  title: "Carmageddon (Dethrace)",
  game: "Carmageddon",
  developers: ["dethrace-labs"],
  publisher: "Interplay Entertainment",
  originalYear: 1997,
  portType: "reimplementation",
  genre: "racing",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/dethrace-labs/dethrace"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Microsoft Windows",
  notes:
    "Reverse-engineered reimplementation of Carmageddon (1997) that runs the original game data on modern systems. It needs your own copy of the game.",
  notesEs:
    "Reimplementación por ingeniería inversa de Carmageddon (1997) que ejecuta los datos del juego original en sistemas modernos. Necesita tu propia copia del juego.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/1/16/Carmageddon_box.jpg",
    alt: "Carmageddon (cover)",
    credit: "Wikipedia",
  },
};
