import type { Port } from "@/lib/ports/schema";

export const unleashedrecompNx: Port = {
  schema: "port",
  id: "unleashedrecomp-nx",
  title: "Sonic Unleashed (Switch)",
  game: "Sonic Unleashed",
  developers: ["NaGaa95"],
  publisher: "Sega",
  originalYear: 2008,
  portType: "recompilation",
  genre: "platformer",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["switch"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/NaGaa95/UnleashedRecomp-NX"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Xbox 360"],
  summary: "Sonic Unleashed is a 2008 platform game developed by Sonic Team and published by Sega. An installment in the Sonic the Hedgehog series, it follows Sonic as he attempts to restore the world after his nemesis Doctor Eggman shatters it with a powerful laser to unleash an ancient evil known as Dark Gaia, while struggling with his new \"Werehog\" form, a werewolf-like affliction.",
  summaryEs: "Sonic Unleashed conocido como Sonic World Adventure en Japón, es un videojuego de plataformas beat 'em up desarrollado por Sonic Team y publicado por Sega. Una entrega de la serie Sonic the Hedgehog, sigue a Sonic en su intento de restaurar el mundo después de que su némesis, el Doctor Eggman, lo destrozara con un potente láser para desatar a Dark Gaia, un antiguo mal que periódicamente transforma a Sonic en un hombre lobo.",
  notes:
    "Unofficial Nintendo Switch homebrew port of the Xbox 360 version of Sonic Unleashed, created through static recompilation. Requires your own copy of the game. The upstream repository is archived (read-only).",
  notesEs:
    "Port homebrew no oficial para Nintendo Switch de la versión de Xbox 360 de Sonic Unleashed, hecho mediante recompilación estática. Requiere tu propia copia del juego. El repositorio original está archivado (solo lectura).",
  cover: {
    src: "https://raw.githubusercontent.com/NaGaa95/UnleashedRecomp-NX/refs/heads/main/icon.jpg",
    alt: "Sonic Unleashed (cover)",
    credit: "SteamGridDB",
  },
};
