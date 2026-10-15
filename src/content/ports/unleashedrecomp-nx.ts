import type { Port } from "@/lib/ports/schema";

export const unleashedrecompNx: Port = {
  schema: "port",
  id: "unleashedrecomp-nx",
  title: "Sonic Unleashed (Switch)",
  game: "Sonic Unleashed",
  developers: ["NaGaa95"],
  publisher: "Sega",
  originalYear: 2008,
  portType: "recompilation",
  genre: "platformer",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["switch"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/NaGaa95/UnleashedRecomp-NX"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Xbox 360"],
  notes:
    "Unofficial Nintendo Switch homebrew port of the Xbox 360 version of Sonic Unleashed, created through static recompilation. Requires your own copy of the game.",
  notesEs:
    "Port homebrew no oficial para Nintendo Switch de la versión de Xbox 360 de Sonic Unleashed, hecho mediante recompilación estática. Requiere tu propia copia del juego.",
  cover: {
    src: "https://raw.githubusercontent.com/NaGaa95/UnleashedRecomp-NX/refs/heads/main/icon.jpg",
    alt: "Sonic Unleashed (cover)",
    credit: "SteamGridDB",
  },
};
