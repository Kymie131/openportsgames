import type { Port } from "@/lib/ports/schema";

export const reblue: Port = {
  schema: "port",
  id: "reblue",
  title: "re:Blue",
  game: "Blue Dragon",
  developers: ["zolaware"],
  publisher: "Microsoft Game Studios",
  originalYear: 2006,
  portType: "recompilation",
  genre: "rpg",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "stable",
  release: { version: "1.3.1", date: "2026-10-05" },
  sources: ["https://github.com/zolaware/reblue"],
  license: { spdx: "BSD-3-Clause" },
  verified: true,
  verifiedAt: "2026-10-08",
  originalSystems: ["Xbox 360"],
  summary: "Blue Dragon is a role-playing video game developed by Mistwalker and Artoon in collaboration with Microsoft Game Studios Japan and published by Microsoft Game Studios for the Xbox 360. It is based on a design by Final Fantasy series creator Hironobu Sakaguchi, who also supervised development and wrote the plot. It is both Mistwalker's debut title and the first title to be helmed by Sakaguchi outside of Square Enix.",
  summaryEs: "Blue Dragon es un juego de rol para la consola de videojuegos Xbox 360. Fue desarrollado por Mistwalker y Artoon, publicado y financiado por Microsoft Game Studios, basado en un diseño parecido a la serie de Final Fantasy por el creador de esta, Hironobu Sakaguchi, quién también supervisó el desarrollo de Blue Dragon. También cuenta con la ayuda de Akira Toriyama, creador de Dragon Ball y Dr. Slump entre otras series, que ha creado los personajes de este juego de rol.",
  notes:
    "Static recompilation of Blue Dragon (Xbox 360) built on the ReXGlue SDK, with a native renderer tailored to the game engine instead of a borrowed emulator backend. It merges the original three discs into one executable and adds 4K, unlocked frame rates, widescreen, keyboard and mouse, achievements and a full mod toolset. The player supplies their own disc dump; the repository ships no game content.",
  notesEs:
    "Recompilación estática de Blue Dragon (Xbox 360) construida sobre el SDK ReXGlue, con un renderizador nativo hecho a medida para el motor del juego en lugar de un backend de emulador prestado. Une los tres discos originales en un único ejecutable y añade 4K, framerate desbloqueado, panorámico, teclado y ratón, logros y un conjunto completo de herramientas de mods. El jugador aporta su propio volcado del disco; el repositorio no incluye contenido del juego.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/f/f7/Blue_Dragon_Box_Art.jpeg",
    alt: "Blue Dragon (box art)",
    credit: "Wikipedia",
  },
};
