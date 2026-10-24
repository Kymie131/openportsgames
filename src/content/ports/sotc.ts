import type { Port } from "@/lib/ports/schema";

export const sotc: Port = {
  schema: "port",
  id: "sotc",
  title: "Shadow of the Colossus Decompilation",
  game: "Shadow of the Colossus",
  developers: ["Fantaskink"],
  publisher: "Sony Computer Entertainment",
  originalYear: 2005,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/Fantaskink/SOTC"],
  license: { spdx: "MIT" },
  verified: false,
  wip: true,
  sourceVerified: true,
  originalSystems: ["PlayStation 2"],
  summary: "Shadow of the Colossus is a 2005 action-adventure game developed and published by Sony Computer Entertainment for the PlayStation 2. It takes place in a fantasy setting and follows Wander, a young man who enters an isolated and abandoned region of the realm seeking the power to revive a girl named Mono. The player assumes the role of Wander as he embarks on a mission that might entail Mono's resurrection: to locate and destroy the colossi, sixteen massive beings spread across the forbidden land, which the protagonist traverses by horseback and on foot.",
  summaryEs: "Shadow of the Colossus es un videojuego de acción-aventura desarrollado y publicado por Sony Computer Entertainment (SCEI) para PlayStation 2. El juego fue publicado en Norteamérica y Japón en octubre de 2005, y posteriormente en Europa en febrero de 2006. Fue creado por el Estudio Internacional de Producción 1 de SCEI, el mismo grupo de desarrollo responsable del éxito de culto Ico.",
  notes:
    "In-progress decompilation of the preview build of Shadow of the Colossus. A research codebase; it requires game files from a copy you own.",
  notesEs:
    "Decompilación en progreso del build de avance de Shadow of the Colossus. Código de investigación; requiere archivos del juego de una copia que poseas.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/f/f8/Shadow_of_the_Colossus_%282005%29_cover.jpg",
    alt: "Shadow of the Colossus (cover)",
    credit: "Wikipedia",
  },
};
