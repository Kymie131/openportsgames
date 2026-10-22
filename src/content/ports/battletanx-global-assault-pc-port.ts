import type { Port } from "@/lib/ports/schema";

export const battletanxGlobalAssaultPcPort: Port = {
  schema: "port",
  id: "battletanx-global-assault-pc-port",
  title: "BattleTanx: Global Assault (N64Recomp)",
  game: "BattleTanx: Global Assault",
  developers: ["TheGh0stShip"],
  publisher: "The 3DO Company",
  originalYear: 1999,
  portType: "recompilation",
  genre: "shooter",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows","linux"],
  status: "beta",
  release: { version: "0.2.5", date: "2026-10-13" },
  sources: ["https://github.com/TheGh0stShip/BattleTanx-Global-Assault-PC-Port"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Nintendo 64"],
  related: ["battletanx-global-assault-recomp","battletanx-global-assault"],
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/d/d4/BattleTanx_-_Global_Assault.jpg",
    alt: "BattleTanx: Global Assault (box art)",
    credit: "Wikipedia",
  },
  notes:
    "Native Windows and Linux port of BattleTanx: Global Assault (Nintendo 64, 1999) using N64Recomp, N64ModernRuntime, RT64 and SDL2, built on the matching decompilation. Latest release: v0.2.5.",
  notesEs:
    "Port nativo para Windows y Linux de BattleTanx: Global Assault (Nintendo 64, 1999) usando N64Recomp, N64ModernRuntime, RT64 y SDL2, construido sobre la descompilación exacta. Última release: v0.2.5.",
};
