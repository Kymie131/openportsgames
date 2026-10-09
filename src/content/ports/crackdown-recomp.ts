import type { Port } from "@/lib/ports/schema";

export const crackdownRecomp: Port = {
  schema: "port",
  id: "crackdown-recomp",
  title: "Crackdown Recompiled",
  game: "Crackdown",
  developers: ["SkiddyToast"],
  publisher: "Microsoft Game Studios",
  originalYear: 2007,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/SkiddyToast/Crackdown"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "Xbox 360",
  notes:
    "Static recompilation of Crackdown (Xbox 360) with ReXGlue. It requires your own copy of the game.",
  notesEs:
    "Recompilación estática de Crackdown (Xbox 360) con ReXGlue. Requiere tu propia copia del juego.",
};
