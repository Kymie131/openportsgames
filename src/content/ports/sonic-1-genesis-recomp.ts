import type { Port } from "@/lib/ports/schema";

export const sonic1GenesisRecomp: Port = {
  schema: "port",
  id: "sonic-1-genesis-recomp",
  title: "Sonic the Hedgehog Recompiled",
  game: "Sonic the Hedgehog",
  developers: ["mstan"],
  publisher: "Sega",
  originalYear: 1991,
  portType: "recompilation",
  genre: "platformer",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/mstan/SonicTheHedgehogRecomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystems: ["Sega Mega Drive / Genesis"],
  summary: "Sonic the Hedgehog is a 1991 platform game developed by Sonic Team and published by Sega for the Sega Genesis. It was released in North America and PAL regions in June and in Japan the following month. The player controls Sonic, a hedgehog who can run at supersonic speeds. The story follows Sonic as he aims to foil the mad scientist Doctor Robotnik's plans to seek the powerful Chaos Emeralds. The gameplay involves collecting rings as a form of health, and a simple control scheme, with jumping and attacking controlled by a single button.",
  summaryEs: "Sonic the Hedgehog es un videojuego de plataformas desarrollado y publicado por Sega para la consola Mega Drive. Salió a la venta en las regiones PAL el 21 de junio, en Norteamérica dos días después, el 23 de junio, y en Japón al mes siguiente. El jugador controla a Sonic, un erizo que puede correr a velocidades supersónicas. La historia lo sigue en su intento de frustrar los planes del científico loco Dr. Robotnik, que busca las poderosas Chaos Emeralds.",
  notes:
    "Native recompilation of Sonic the Hedgehog (Sega Mega Drive / Genesis). The player supplies their own legally obtained ROM; the repository ships no game content.",
  notesEs:
    "Recompilación nativa de Sonic the Hedgehog (Sega Mega Drive / Genesis). El jugador aporta su propio material obtenido legalmente (ROM); el repositorio no incluye contenido del juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Sega%20-%20Mega%20Drive%20-%20Genesis/Named_Boxarts/Sonic%20The%20Hedgehog%20(USA).png",
    alt: "Sonic the Hedgehog (box art)",
    credit: "Box art",
  },
};
