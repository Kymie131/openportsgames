import type { Port } from "@/lib/ports/schema";

export const megaMan3NesRecomp: Port = {
  schema: "port",
  id: "mega-man-3-nes-recomp",
  title: "Megaman3NESRecomp",
  game: "Mega Man 3",
  developers: ["mstan"],
  publisher: "Capcom",
  originalYear: 1990,
  portType: "recompilation",
  genre: "platformer",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/mstan/Megaman3NESRecomp"],
  license: { spdx: "PolyForm-Noncommercial-1.0.0", note: "PolyForm Noncommercial 1.0.0" },
  verified: false,
  originalSystems: ["Nintendo Entertainment System"],
  summary: "Mega Man 3 is a 1990 platform game developed and published by Capcom for the Nintendo Entertainment System. It is the third installment of the original Mega Man series and was originally released in Japan on September 28, 1990. The game was released in North America later in 1990 and in European regions by Nintendo in 1992. Taking place after the events of Mega Man 2, the plot follows the titular hero as he helps his creator, Dr. Light, and a supposedly former enemy, Dr. Wily, collect parts for a peace-keeping robot by defeating several Robot Masters that have gone haywire.",
  summaryEs: "Mega Man 3 es un videojuego de plataformas y acción desarrollado y publicado por Capcom para Nintendo Entertainment System. Es el tercer juego de la serie Mega Man original y se lanzó originalmente en Japón el 28 de septiembre de 1990. El juego se localizó en América del Norte más tarde en 1990 y en las regiones europeas en 1992. Después de los eventos de Mega Man 2, la trama sigue al héroe titular mientras ayuda a su creador, el Dr. Light, y a un ex villano, el Dr. Wily, a recolectar partes para un robot de mantenimiento de la paz al derrotar a varios Robot Masters que se han vuelto locos.",
  notes:
    "Native recompilation of Mega Man 3 (Nintendo Entertainment System). The player supplies their own legally obtained ROM; the repository ships no game content.",
  notesEs:
    "Recompilación nativa de Mega Man 3 (Nintendo Entertainment System). El jugador aporta su propio material obtenido legalmente (ROM); el repositorio no incluye contenido del juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%20Entertainment%20System/Named_Boxarts/Mega%20Man%203%20(USA).png",
    alt: "Mega Man 3 (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%20Entertainment%20System/Named_Snaps/Mega%20Man%203%20(USA).png",
      alt: "Mega Man 3 (screenshot)",
      credit: "Libretro",
    },
  ],
};
