import type { Port } from "@/lib/ports/schema";

export const bloodyRoar2Recomp: Port = {
  schema: "port",
  id: "bloody-roar-2-recomp",
  title: "Bloody Roar 2 Recompiled",
  game: "Bloody Roar 2",
  developers: ["PortsDR"],
  publisher: "Hudson Soft",
  originalYear: 1999,
  portType: "recompilation",
  genre: "fighting",
  openSource: false,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/novapowers0/BloodyRoar2Recomp"],
  license: { spdx: "NOASSERTION", note: "no public repository or license" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["PlayStation"],
  summary: "Bloody Roar 2, known as Bloody Roar 2: Bringer of the New Age in Europe and Japan and as Bloody Roar II: The New Breed in the United States, is a 1998 arcade fighting video game developed by Raizing and published by Hudson Soft. It is the second installment in the Bloody Roar series. A port to the PlayStation home console was released in 1999. It has since been re-released for PlayStation 3, PlayStation Vita and PlayStation Portable via the North American PlayStation Network as of 2021. The game was followed up by Bloody Roar 3 (2000).",
  summaryEs: "Bloody Roar 2 es la segunda parte de la saga de videojuegos de lucha Bloody Roar, que fue lanzada en versión arcade y consola. Las versiones de consola incluye los modos Arcade, History, Custom y Watch en donde podremos ver pelear al CPU vs CPU. Hudson se ha encargado de reducir el nivel de sangre y de gritos en la versión original (japonesa) de Bloody Roar 2, pero aumentó el nivel de los gráficos.",
  notes:
    "A PortsDR community listing; no repository or release is public. The original game is required.",
  notesEs:
    "Ficha comunitaria de PortsDR; no hay repositorio ni release públicos. Hace falta el juego original.",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/Bloody%20Roar%202%20-%20Bringer%20of%20the%20New%20Age%20(Europe).png",
    alt: "Bloody Roar 2 (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Snaps/Bloody%20Roar%202%20-%20Bringer%20of%20the%20New%20Age%20(Europe).png",
      alt: "Bloody Roar 2 (screenshot)",
      credit: "Libretro",
    },
  ],
};
