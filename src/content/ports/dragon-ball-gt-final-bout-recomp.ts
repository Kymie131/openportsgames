import type { Port } from "@/lib/ports/schema";

export const dragonBallGtFinalBoutRecomp: Port = {
  schema: "port",
  id: "dragon-ball-gt-final-bout-recomp",
  title: "Dragon Ball GT: Final Bout Recompiled",
  game: "Dragon Ball GT: Final Bout",
  developers: ["novapowers0"],
  publisher: "Bandai",
  originalYear: 1997,
  portType: "recompilation",
  genre: "fighting",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/novapowers0/DB-Final-Bout-Recomp"],
  license: { spdx: "MIT" },
  verified: false,
  sourceVerified: true,
  originalSystem: "PlayStation",
  notes:
    "Static recompilation of Dragon Ball GT: Final Bout (PlayStation, SLUS-00493) for Windows, with widescreen, Vulkan and LAN/direct-IP netplay. Bring your own disc.",
  notesEs:
    "Recompilación estática de Dragon Ball GT: Final Bout (PlayStation, SLUS-00493) para Windows, con panorámico, Vulkan y netplay por LAN/IP directa. Aporta tu propio disco.",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/Dragon%20Ball%20GT%20-%20Final%20Bout%20(USA).png",
    alt: "Dragon Ball GT: Final Bout (cover)",
    credit: "Box art",
  },
};
