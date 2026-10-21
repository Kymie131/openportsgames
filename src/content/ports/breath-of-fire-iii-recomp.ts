import type { Port } from "@/lib/ports/schema";

export const breathOfFireIiiRecomp: Port = {
  schema: "port",
  id: "breath-of-fire-iii-recomp",
  title: "Breath of Fire III Recompiled",
  game: "Breath of Fire III",
  developers: ["kerokline"],
  publisher: "Capcom",
  originalYear: 1997,
  portType: "recompilation",
  genre: "rpg",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/kerokline/BreathOfFire3Recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["PlayStation"],
  notes:
    "Recompilation of Breath of Fire III (PlayStation) for Windows. It needs your own copy of the game.",
  notesEs:
    "Recompilación de Breath of Fire III (PlayStation) para Windows. Necesita tu propia copia del juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/Breath%20of%20Fire%20III%20(USA).png",
    alt: "Breath of Fire III (box art)",
    credit: "Box art",
  },
};
