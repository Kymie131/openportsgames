import type { Port } from "@/lib/ports/schema";

export const theDarknessRecomp: Port = {
  schema: "port",
  id: "the-darkness-recomp",
  title: "The Darkness Recompiled",
  game: "The Darkness",
  developers: ["portingpete"],
  publisher: "2K Games",
  originalYear: 2007,
  portType: "recompilation",
  genre: "shooter",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/portingpete/The-Darkness-Recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystems: ["Xbox 360"],
  summary: "The Darkness is a first-person shooter video game developed by Starbreeze Studios and published by 2K for the PlayStation 3 and Xbox 360 consoles. The game was released in 2007 in North America and Europe and it is based on The Darkness comic book series published by Top Cow Productions. A sequel titled The Darkness II was released in 2012.",
  summaryEs: "The Darkness puede designar a:The Darkness, banda de hard rock de Reino Unido. The Darkness, serie de cómics creada por Top Cow Productions. The Darkness, videojuego de acción y terror psicológico desarrollado por Starbreeze Studios. The Darkness II, secuela del videojuego The Darkness. The Darkness, película de terror de 2016 dirigida por Greg McLean y protagonizada por Kevin Bacon.",
  notes:
    "Static recompilation of The Darkness (Xbox 360) with DarkRecomp and a Direct3D 11 renderer, with no runtime emulation. It supports mouse and gamepad, video settings, XMA audio and saving.",
  notesEs:
    "Recompilación estática de The Darkness (Xbox 360) con DarkRecomp y un renderizador Direct3D 11, sin emulación en tiempo de ejecución. Soporta ratón y mando, ajustes de vídeo, audio XMA y guardado.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/1/1c/Darkness_cover.jpg",
    alt: "The Darkness (box art)",
    credit: "Wikipedia",
  },
};
