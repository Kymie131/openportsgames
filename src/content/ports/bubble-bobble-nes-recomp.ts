import type { Port } from "@/lib/ports/schema";

export const bubbleBobbleNesRecomp: Port = {
  schema: "port",
  id: "bubble-bobble-nes-recomp",
  title: "Bubble Bobble Recompiled",
  game: "Bubble Bobble",
  developers: ["Junior-Jones"],
  publisher: "Taito",
  originalYear: 1986,
  portType: "recompilation",
  genre: "platformer",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/Junior-Jones/Bubble-Bobble-NES-Static-Recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "Nintendo Entertainment System",
  notes:
    "Static recompilation of Bubble Bobble (NES) for Windows 10 and 11. The ROM is not included, so you need your own copy.",
  notesEs:
    "Recompilación estática de Bubble Bobble (NES) para Windows 10 y 11. No incluye la ROM, así que necesitas tu propia copia.",
};
