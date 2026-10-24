import type { Port } from "@/lib/ports/schema";

export const banjoKazooieRecomp: Port = {
  schema: "port",
  id: "banjo-kazooie-recomp",
  title: "Banjo-Kazooie Recompiled",
  game: "Banjo-Kazooie",
  developers: ["Rare"],
  publisher: "Nintendo",
  originalYear: 1998,
  genre: "platformer",
  openSource: true,
  portType: "recompilation",
  platforms: ["windows", "linux", "macos"],
  status: "stable",
  release: { version: "1.0.2", date: "2026-07-31" },
  sources: ["https://github.com/BanjoRecomp/BanjoRecomp"],
  discord: "https://discord.gg/AWZThJ4dPf",
  license: { spdx: "GPL-3.0" },
  verified: false,
  originalSystems: ["Nintendo 64"],
  features: [
    "Widescreen and ultrawide support",
    "Mod support",
    "Native Linux binary and Flatpak with documented Steam Deck support",
  ],
  featuresEs: [
    "Soporte panorámico y ultrapanorámico",
    "Soporte de mods",
    "Binario nativo para Linux y Flatpak con soporte documentado para Steam Deck",
  ],
  requirements: {
    minimum: "Windows, Linux or macOS 13.0+ on Apple Silicon or a 7th generation Intel CPU",
  },
  summary: "Banjo-Kazooie is a 1998 platform game developed by Rare and published by Nintendo for the Nintendo 64. Controlling the player characters, the bear Banjo and the bird Kazooie, the player attempts to save Banjo's kidnapped sister Tooty from the witch Gruntilda. The player explores nine nonlinear worlds to gather items and progress. Using Banjo and Kazooie's traversal and combat abilities, they complete challenges such as solving puzzles, jumping over obstacles, and defeating bosses.",
  summaryEs: "Banjo-Kazooie es un videojuego de plataformas de 1998 desarrollado por la compañía británica Rare y publicado por Nintendo para Nintendo 64. Controlando a los personajes, el oso Banjo y el pájaro Kazooie, el jugador intenta salvar a la hermana secuestrada de Banjo, Tooty, de la bruja Gruntilda. Se puede explorar nueve mundos no lineales para reunir elementos y progresar. Usando las habilidades transversales y de combate de Banjo y Kazooie, completan desafíos como resolver acertijos, saltar obstáculos y derrotar a jefes.",
  notes:
    "Native recompilation of Banjo-Kazooie produced with N64Recomp. The player loads their own legally obtained N64 ROM; the port recompiles the game code instead of emulating it.",
  notesEs:
    "Recompilación nativa de Banjo-Kazooie realizada con N64Recomp. El jugador carga su propia ROM de N64 obtenida legalmente; el port recompila el código del juego en lugar de emularlo.",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Banjo-Kazooie%20(USA).png",
    alt: "Banjo-Kazooie (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Snaps/Banjo-Kazooie%20(USA).png",
      alt: "Banjo-Kazooie (screenshot)",
      credit: "Libretro",
    },
  ],
};
