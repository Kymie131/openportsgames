import type { Port } from "@/lib/ports/schema";

export const unleashedRecompiled: Port = {
  schema: "port",
  id: "unleashed-recompiled",
  title: "UnleashedRecomp",
  game: "Sonic Unleashed",
  developers: ["Sonic Team"],
  publisher: "Sega",
  originalYear: 2008,
  genre: "platformer",
  openSource: true,
  portType: "recompilation",
  platforms: ["windows", "linux"],
  status: "stable",
  release: { version: "1.0.3", date: "2025-04-03" },
  sources: ["https://github.com/hedge-dev/UnleashedRecomp"],
  license: { spdx: "GPL-3.0" },
  verified: true,
  verifiedAt: "2026-09-25",
  originalSystems: ["Xbox 360"],
  screenshots: [
    {
      src: "https://raw.githubusercontent.com/hedge-dev/UnleashedRecompResources/main/images/options_menu/thumbnails/raw/default.png",
      alt: "The Sonic Unleashed options menu screen reproduced by UnleashedRecomp",
      credit: "hedge-dev/UnleashedRecompResources",
    },
  ],
  features: [
    "60 FPS with high refresh rate support",
    "Ultrawide and high resolutions",
    "Mod support via the Hedge Mod Manager",
    "Achievements and mission progress",
  ],
  featuresEs: [
    "60 FPS con soporte de refresco alto",
    "Ultrapanorámico y altas resoluciones",
    "Soporte de mods mediante Hedge Mod Manager",
    "Logros y progreso de misiones",
  ],
  summary: "Sonic Unleashed is a 2008 platform game developed by Sonic Team and published by Sega. An installment in the Sonic the Hedgehog series, it follows Sonic as he attempts to restore the world after his nemesis Doctor Eggman shatters it with a powerful laser to unleash an ancient evil known as Dark Gaia, while struggling with his new \"Werehog\" form, a werewolf-like affliction.",
  summaryEs: "Sonic Unleashed conocido como Sonic World Adventure en Japón, es un videojuego de plataformas beat 'em up desarrollado por Sonic Team y publicado por Sega. Una entrega de la serie Sonic the Hedgehog, sigue a Sonic en su intento de restaurar el mundo después de que su némesis, el Doctor Eggman, lo destrozara con un potente láser para desatar a Dark Gaia, un antiguo mal que periódicamente transforma a Sonic en un hombre lobo.",
  notes:
    "Native Windows and Linux port of Sonic Unleashed produced by statically recompiling the Xbox 360 PowerPC binary. Requires the game dump from a disc or digital copy you own; the project does not publish one and disclaims any affiliation with its author. Released by the hedge-dev team behind HedgeDev.",
  notesEs:
    "Port nativo para Windows y Linux de Sonic Unleashed producido recompilando estáticamente el binario PowerPC de Xbox 360. Requiere el volcado del juego de un disco o copia digital que poseas; el proyecto no publica ninguno y declara no tener afiliación con su autor. Publicado por el equipo hedge-dev detrás de HedgeDev.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/a/a0/Sonic_unleashed_boxart.jpg",
    alt: "Sonic Unleashed (box art)",
    credit: "Wikipedia",
  },
};
