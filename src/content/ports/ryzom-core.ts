import type { Port } from "@/lib/ports/schema";

export const RyzomCore: Port = {
  schema: "port",
  id: "ryzom-core",
  title: "Ryzom Core",
  game: "Ryzom Core",
  developers: ["ryzom"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "source-port",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/ryzom/ryzomcore"],
  license: { spdx: "AGPL-3.0" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Unknown"],
  notes:
    "Ryzom Core is the open-source MMORPG framework built on the NeL engine, maintained by the Ryzom Core community. The commercial Ryzom game is developed by Ryzom Forge on a downstream fork at gitlab.com/ryzom.",
  notesEs:
    "Ryzom Core es el framework MMORPG de código abierto construido sobre el motor NeL, mantenido por la comunidad de Ryzom Core. El juego comercial Ryzom lo desarrolla Ryzom Forge en una bifurcación propia en gitlab.com/ryzom.",
};
