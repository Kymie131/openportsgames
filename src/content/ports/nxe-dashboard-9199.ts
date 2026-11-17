import type { Port } from "@/lib/ports/schema";

export const nxeDashboard9199: Port = {
  schema: "port",
  kind: "system",
  id: "nxe-dashboard-9199",
  title: "NXE Dashboard 9199",
  game: "New Xbox Experience",
  developers: ["MVEALNG"],
  publisher: "Microsoft",
  originalYear: 2008,
  portType: "recompilation",
  genre: "simulation",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/MVEALNG/NXE-Dashboard-Recomp"],
  license: { spdx: "CC0-1.0" },
  verified: false,
  sourceVerified: true,
  sourceDead: true,
  originalSystems: ["Xbox 360"],
  summary: "NXE Dashboard 9199 is a static recompilation of the Xbox 360 New Xbox Experience dashboard. It is system software, not a game.",
  summaryEs: "NXE Dashboard 9199 es una recompilación estática del panel New Xbox Experience de Xbox 360. Es software de sistema, no un juego.",
  cover: {
    src: "https://openportsgames.com/covers/generated/nxe-dashboard-9199.svg",
    alt: "NXE Dashboard 9199 (generated cover)",
    credit: "OpenPortsGames",
  },
  notes:
    "Static recompilation of the Xbox 360 NXE Dashboard. It is system software, not a game. It requires files from a console you own. The upstream repository is no longer available.",
  notesEs:
    "Recompilación estática del NXE Dashboard de Xbox 360. Es software de sistema, no un juego. Requiere archivos de una consola que poseas. El repositorio original ya no está disponible.",
};
