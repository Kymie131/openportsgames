import type { Port } from "@/lib/ports/schema";

export const Betterspades: Port = {
  schema: "port",
  id: "betterspades",
  title: "BetterSpades",
  game: "BetterSpades",
  developers: ["xtreme8000"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "source-port",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/xtreme8000/BetterSpades"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Unknown"],
  notes:
    "BetterSpades, an Ace of Spades client targeted at low end systems (GL/ES 1.1). Runs on your grandmother's rig!.",
  notesEs:
    "BetterSpades, un cliente de Ace of Spades pensado para equipos modestos (GL/ES 1.1). ¡Corre hasta en el PC de tu abuela!",
};
