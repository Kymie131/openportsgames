import type { Port } from "@/lib/ports/schema";

export const drakengardRecomp: Port = {
  schema: "port",
  id: "drakengard-recomp",
  title: "Drakengard Recompiled",
  game: "Drakengard",
  developers: ["k1gs"],
  publisher: "Square Enix",
  originalYear: 2003,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/k1gs/Drakengard1Recompile"],
  license: { spdx: "MIT" },
  verified: false,
  sourceVerified: true,
  addedAt: "2026-10-25",
  originalSystems: ["PlayStation 2"],
  summary:
    "Drakengard is a 2003 action role-playing game developed by Cavia and published by Square Enix. It mixes ground and aerial dragon combat with a dark story that branches into multiple endings.",
  summaryEs:
    "Drakengard es un videojuego de rol de acción de 2003 desarrollado por Cavia y publicado por Square Enix. Combina combates terrestres y aéreos sobre dragón con una historia oscura que se ramifica en varios finales.",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation%202/Named_Boxarts/Drakengard%20(USA).png",
    alt: "Drakengard (box art)",
    credit: "libretro",
  },
  notes: "Drakengard Recompiled: native recompilation of Drakengard for windows. Bring your own copy of the game.",
  notesEs: "Drakengard Recompiled: recompilación nativo de Drakengard para windows. Aporta tu propia copia del juego.",
};
