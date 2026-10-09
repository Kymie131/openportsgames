import type { Port } from "@/lib/ports/schema";

export const vcmi: Port = {
  schema: "port",
  id: "vcmi",
  title: "VCMI",
  game: "Heroes of Might and Magic III",
  developers: ["New World Computing"],
  publisher: "The 3DO Company",
  originalYear: 1999,
  portType: "reimplementation",
  genre: "strategy",
  openSource: true,
  platforms: ["windows", "linux", "macos"],
  status: "stable",
  release: { version: "1.7.5", date: "2026-08-15" },
  sources: ["https://github.com/vcmi/vcmi"],
  discord: "https://discord.gg/chBT42V",
  website: "https://vcmi.eu/",
  license: {
    spdx: "GPL-2.0",
  },
  verified: false,
  notes:
    "Open-source recreation of the Heroes of Might and Magic III engine, loadable with the original game data. Active development with a long release history.",
  notesEs:
    "Recreación de código abierto del motor de Heroes of Might and Magic III, cargable con los datos del juego original. Desarrollo activo con un largo historial de releases.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/9/9b/Homm3boxart.jpg",
    alt: "Heroes of Might and Magic III (box art)",
    credit: "Wikipedia",
  },
};
