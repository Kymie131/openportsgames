import type { Port } from "@/lib/ports/schema";

export const actraiserRecomp: Port = {
  schema: "port",
  id: "actraiser-recomp",
  title: "ActRaiser Recompiled",
  game: "ActRaiser",
  developers: ["DerrickGold"],
  publisher: "Enix",
  originalYear: 1990,
  portType: "recompilation",
  genre: "platformer",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/DerrickGold/ar-recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "Super Nintendo",
  notes:
    "Recompilation of ActRaiser (Super Nintendo) for Windows, Linux and macOS. It needs your own ROM of the game.",
  notesEs:
    "Recompilación de ActRaiser (Super Nintendo) para Windows, Linux y macOS. Necesita tu propia ROM del juego.",
};
