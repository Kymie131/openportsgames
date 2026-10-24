import type { Port } from "@/lib/ports/schema";

export const fearEffectRecomp: Port = {
  schema: "port",
  id: "fear-effect-recomp",
  title: "Fear Effect Recompiled",
  game: "Fear Effect",
  developers: ["alexbeavs"],
  publisher: "Eidos Interactive",
  originalYear: 2000,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "beta",
  release: { version: "0.1.1", date: "2026-09-30" },
  sources: ["https://github.com/alexbeavs-ps1-ports/fear-effect-recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystems: ["PlayStation"],
  summary: "Fear Effect is a 2000 action-adventure video game developed by Kronos Digital Entertainment and published by Eidos Interactive for the PlayStation. Set in the year 2050, the player controls three mercenaries in Hong Kong. The game contains elements of survival horror and stealth.",
  summaryEs: "Fear Effect es un videojuego de acción y videojuego de terror realizado para la consola PlayStation en el año 1999. Fue desarrollado por Kronos Digital Entertainment y publicado por Eidos Interactive. La historia trata sobre tres mercenarios llamados Hana, Deke y Glas que tratan de recuperar la hija desaparecida de un acaudalado hombre de negocios chino. Es esencialmente una aventura cyberpunk futurista ambientada en Hong Kong. La historia también incorpora elementos de la mitología china. El juego fue seguido por una precuela, Fear Effect 2: Retro Helix.",
  notes:
    "Recompilation of Fear Effect (PS1, USA SLUS-00920) with PSXRecomp and the recomp-ui launcher. You bring your own disc and a European SCPH-5502/5552 BIOS; the game is generated and compiled on your machine. A 0.1.0 release candidate with gameplay not yet validated.",
  notesEs:
    "Recompilación de Fear Effect (PS1, USA SLUS-00920) con PSXRecomp y el lanzador recomp-ui. Aportas tu propio disco y una BIOS europea SCPH-5502/5552; el juego se genera y compila en tu equipo. Candidata 0.1.0 con el gameplay aún sin validar.",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/Fear%20Effect%20(Europe)%20(En,Es,It).png",
    alt: "Fear Effect (box art)",
    credit: "Box art",
  },
};
