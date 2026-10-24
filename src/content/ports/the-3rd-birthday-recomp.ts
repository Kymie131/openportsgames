import type { Port } from "@/lib/ports/schema";

export const the3rdBirthdayRecomp: Port = {
  schema: "port",
  id: "the-3rd-birthday-recomp",
  title: "The 3rd Birthday Recompiled",
  game: "The 3rd Birthday",
  developers: ["BasedYuki"],
  publisher: "Square Enix",
  originalYear: 2010,
  portType: "recompilation",
  genre: "shooter",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/BasedYuki/the-3rd-birthday-recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystems: ["PlayStation Portable"],
  summary: "The 3rd Birthday is a 2010 action role-playing game developed by HexaDrive and published by Square Enix for the PlayStation Portable. It was released in Japan in 2010 and in North America and Europe in 2011. The game is the third entry in the Parasite Eve video game series, based on the titular Japanese novel, and a spin-off, having only a loose connection to events from past games. The game features a third-person shooter-based combat system with role-playing mechanics.",
  summaryEs: "The 3rd Birthday es un videojuego táctico de disparos en tercera persona/RPG de acción táctico de Square Enix. Ha sido desarrollado para PlayStation Portable y es la tercera entrega de la serie de Parasite Eve publicada tras Parasite Eve II, que fue publicado en 2000. El juego fue lanzado en Japón el 22 de diciembre de 2010 y luego fue lanzado en Europa el 1 de abril de 2011.",
  notes:
    "Native PC port of The 3rd Birthday (PSP) through static recompilation. It includes no game data and needs your own ISO.",
  notesEs:
    "Port nativo para PC de The 3rd Birthday (PSP) mediante recompilación estática. No incluye datos del juego y necesita tu propia ISO.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/a/a1/The_3rd_Birthday_Cover.png",
    alt: "The 3rd Birthday (box art)",
    credit: "Wikipedia",
  },
};
