import type { Port } from "@/lib/ports/schema";

export const blueDroid: Port = {
  schema: "port",
  id: "blue-droid",
  title: "Blue Dragon (BlueDroid)",
  game: "Blue Dragon",
  developers: ["RedZeroGotcha"],
  publisher: "Microsoft Game Studios",
  originalYear: 2006,
  portType: "recompilation",
  genre: "rpg",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["android"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/RedZeroGotcha/BlueDroid"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystems: ["Xbox 360"],
  summary: "Blue Dragon is a role-playing video game developed by Mistwalker and Artoon in collaboration with Microsoft Game Studios Japan and published by Microsoft Game Studios for the Xbox 360. It is based on a design by Final Fantasy series creator Hironobu Sakaguchi, who also supervised development and wrote the plot. It is both Mistwalker's debut title and the first title to be helmed by Sakaguchi outside of Square Enix.",
  summaryEs: "Blue Dragon es un juego de rol para la consola de videojuegos Xbox 360. Fue desarrollado por Mistwalker y Artoon, publicado y financiado por Microsoft Game Studios, basado en un diseño parecido a la serie de Final Fantasy por el creador de esta, Hironobu Sakaguchi, quién también supervisó el desarrollo de Blue Dragon. También cuenta con la ayuda de Akira Toriyama, creador de Dragon Ball y Dr. Slump entre otras series, que ha creado los personajes de este juego de rol.",
  notes:
    "Android recompilation of Blue Dragon (Xbox 360), separate from the desktop reblue project. It is an early build that needs your own game files.",
  notesEs:
    "Recompilación para Android de Blue Dragon (Xbox 360), distinta del proyecto reblue de escritorio. Es una build temprana que necesita tus propios archivos del juego.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/f/f7/Blue_Dragon_Box_Art.jpeg",
    alt: "Blue Dragon (box art)",
    credit: "Wikipedia",
  },
};
