import type { Port } from "@/lib/ports/schema";

export const windowSmash: Port = {
  schema: "port",
  id: "window-smash",
  title: "WindowSmash",
  game: "Super Smash Bros. Ultimate",
  developers: ["SNO2207"],
  publisher: "Nintendo",
  originalYear: 2018,
  portType: "recompilation",
  genre: "fighting",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/SNO2207/WindowSmash"],
  license: { spdx: "NOASSERTION", note: "license not declared in the repository" },
  verified: false,
  sourceVerified: true,
  wip: true,
  originalSystems: ["Nintendo Switch"],
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/5/50/Super_Smash_Bros._Ultimate.jpg",
    alt: "Super Smash Bros. Ultimate (box art)",
    credit: "Wikipedia",
  },
  notes:
    "Super Smash Bros. Ultimate (Nintendo, 2018) running natively on Windows, Linux and macOS through static recompilation. You need your own copy.",
  notesEs:
    "Super Smash Bros. Ultimate (Nintendo, 2018) en Windows, Linux y macOS de forma nativa mediante recompilación estática. Necesitas tu propia copia.",
};
