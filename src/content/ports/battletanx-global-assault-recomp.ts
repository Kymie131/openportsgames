import type { Port } from "@/lib/ports/schema";

export const battletanxGlobalAssaultRecomp: Port = {
  schema: "port",
  id: "battletanx-global-assault-recomp",
  title: "BattleTanx: Global Assault (Recomp)",
  game: "BattleTanx: Global Assault",
  developers: ["wootbeer"],
  publisher: "The 3DO Company",
  originalYear: 1999,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/wootbeer/btgarecomp"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Nintendo 64",
  notes:
    "Native recompilation of BattleTanx: Global Assault (Nintendo 64) with N64Recomp and RT64, in super-beta state for Windows and Linux. An Android build is planned. It needs the player's own legally obtained game dump.",
  notesEs:
    "Recompilación nativa de BattleTanx: Global Assault (Nintendo 64) con N64Recomp y RT64, en estado super-beta para Windows y Linux. Se planea una build para Android. Necesita el volcado del juego obtenido legalmente por el jugador.",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/BattleTanx%20-%20Global%20Assault%20(USA).png",
    alt: "BattleTanx: Global Assault (box art)",
    credit: "Box art",
  },
};
