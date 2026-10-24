import type { Port } from "@/lib/ports/schema";

export const sm64Psp: Port = {
  schema: "port",
  id: "sm64-psp",
  title: "Super Mario 64 (PSP)",
  game: "Super Mario 64",
  developers: ["JustKidding23"],
  publisher: "Nintendo",
  originalYear: 1996,
  portType: "decompilation",
  genre: "platformer",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["psp"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/JustKidding23/SM64-PSP"],
  license: { spdx: "NOASSERTION", note: "license not declared in the repository" },
  verified: false,
  sourceVerified: true,
  wip: true,
  aiDisclosure: {
    source: "https://github.com/JustKidding23/SM64-PSP",
    quote: "Built with the use of AI (Claude).",
  },
  originalSystems: ["Nintendo 64"],
  related: ["sm64ex"],
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/e/e9/Super_Mario_64.png",
    alt: "Super Mario 64 (box art)",
    credit: "Wikipedia",
  },
  summary: "Super Mario 64 is a 1996 platform game developed and published by Nintendo for the Nintendo 64. It is the first Super Mario game to feature 3D graphics, combining traditional Super Mario gameplay, visual style, and characters in a large open world. In the game, Bowser invades Princess Peach's castle, kidnaps her, and hides the castle's Power Stars in different worlds inside magical paintings. As Mario, the player traverses levels and collects Power Stars to unlock areas of the castle, reach Bowser and rescue Peach.",
  summaryEs: "Super Mario 64 es un videojuego de plataformas desarrollado y publicado por Nintendo para la Nintendo 64. Es la primera entrega de Super Mario en mostrar gráficos 3D, que combina la mecánica tradicional de la franquicia, su estilo visual y sus personajes en un amplio mundo abierto. En la historia, Bowser invade el castillo de la Princesa Peach, la secuestra y esconde las Estrellas de Poder en diferentes mundos situados dentro de cuadros mágicos. En el papel de Mario, el jugador recorre los niveles y recoge las estrellas para desbloquear zonas, llegar hasta Bowser y rescatar a Peach.",
  notes:
    "Super Mario 64 (Nintendo, 1996) running natively on PSP, based on the sm64-port decompilation. It requires your own ROM and includes no game data.",
  notesEs:
    "Super Mario 64 (Nintendo, 1996) en PSP de forma nativa, basado en la decompilación sm64-port. Requiere tu propia ROM y no incluye datos del juego.",
};
