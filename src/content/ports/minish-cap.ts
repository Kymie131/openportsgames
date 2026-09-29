import type { Port } from "@/lib/ports/schema";

export const minishCap: Port = {
  schema: "port",
  id: "minish-cap",
  title: "The Minish Cap Decompilation",
  game: "The Legend of Zelda: The Minish Cap",
  developers: ["Capcom", "Flagship"],
  publisher: "Nintendo",
  originalYear: 2004,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/zeldaret/tmc"],
  website: "https://zeldaret.github.io/tmc/",
  license: {
    spdx: "NOASSERTION",
    note: "no SPDX license in the repository",
  },
  verified: false,
  originalSystem: "Game Boy Advance",
  notes:
    "Decompilation of The Legend of Zelda: The Minish Cap (Game Boy Advance) by the Zelda Recompilation project. Active research codebase with no tagged releases; a playable native build is not yet distributed. Requires game files from a copy you own.",
};
