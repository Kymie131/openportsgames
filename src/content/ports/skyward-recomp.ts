import type { Port } from "@/lib/ports/schema";

export const skywardRecomp: Port = {
  schema: "port",
  id: "skyward-recomp",
  title: "Skyward Sword HD (SkywardRecomp)",
  game: "The Legend of Zelda: Skyward Sword HD",
  developers: ["Ramasanjaya22"],
  publisher: "Nintendo",
  originalYear: 2021,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/Ramasanjaya22/SkywardRecomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  sourceVerified: true,
  wip: true,
  addedAt: "2026-11-16",
  originalSystems: ["Nintendo Switch"],
  summary:
    "The Legend of Zelda: Skyward Sword is a 2011 action-adventure game developed and published by Nintendo for the Wii. A mainline entry in The Legend of Zelda series, Skyward Sword is the first game in the Zelda timeline, and details the origins of the Triforce and the Master Sword. The series main protagonist Link, a resident of a floating town called Skyloft, sets out to rescue his childhood friend Zelda after she is kidnapped and brought to the abandoned lands below the clouds.",
  summaryEs:
    "The Legend of Zelda: Skyward Sword es un videojuego de acción y aventura de 2011 de la serie The Legend of Zelda, desarrollado por la filial Nintendo EAD en colaboración con Tantalus Media y publicado por Nintendo para la consola Wii. Fue lanzado el 18 de noviembre de 2011 en Europa y el 20 de noviembre de 2011 en América.",
  notes:
    "Work-in-progress static recompilation of Skyward Sword HD for Windows, around 55% complete and rendering with Vulkan. It is derived from LAS Recomp and ships no game files.",
  notesEs:
    "Recompilación estática en curso de Skyward Sword HD para Windows, en torno al 55 % y con renderizado Vulkan. Deriva de LAS Recomp y no incluye archivos del juego.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/9/99/Legend_of_Zelda_Skyward_Sword_boxart.png",
    alt: "The Legend of Zelda: Skyward Sword HD (box art)",
    credit: "Wikipedia",
  },
};
