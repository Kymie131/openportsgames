import type { Port } from "@/lib/ports/schema";

export const megaMan8Recomp: Port = {
  schema: "port",
  id: "mega-man-8-recomp",
  title: "Mega Man 8 Recompiled",
  game: "Mega Man 8",
  developers: ["omegakatana92"],
  publisher: "Capcom",
  originalYear: 1996,
  portType: "recompilation",
  genre: "platformer",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/omegakatana92/Mega-Man-8-Recomp"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  originalSystem: "PlayStation",
  notes:
    "Recompilation of Mega Man 8 (PlayStation) built with mstan's PSXRecomp tool. It includes no game assets and needs your own copy.",
  notesEs:
    "Recompilación de Mega Man 8 (PlayStation) construida con la herramienta PSXRecomp de mstan. No incluye recursos del juego y necesita tu propia copia.",
};
