import type { Port } from "@/lib/ports/schema";

export const doraemon64Recomp: Port = {
  schema: "port",
  id: "doraemon-64-recomp",
  title: "Doraemon 64 Recompiled",
  game: "Doraemon: Nobita to Mittsu no Seireiseki",
  developers: ["citrongames"],
  publisher: "Epoch Co.",
  originalYear: 1997,
  portType: "recompilation",
  genre: "platformer",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/citrongames/Dora64"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Nintendo 64"],
  summary: "Many Doraemon video games were released for most video game systems in Japan. The following is a list of these.",
  summaryEs: "Doraemon: Nobita to Mittsu no Seireiseki es un videojuego de plataformas desarrollado y publicado por Epoch Co. para Nintendo 64. Fue lanzado sólo en Japón en 1997. El juego está basado en el manga japonés Doraemon y tiene dos secuelas de Nintendo 64, Doraemon 2: Nobita to Hikari no Shinden y Doraemon 3: Nobita no Machi SOS!, ambos lanzados únicamente en Japón.",
  notes:
    "Native recompilation of Doraemon: Nobita to Mittsu no Seireiseki (Nintendo 64) for Windows. It needs your own copy of the game.",
  notesEs:
    "Recompilación nativa de Doraemon: Nobita to Mittsu no Seireiseki (Nintendo 64) para Windows. Necesita tu propia copia del juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Doraemon%20-%20Nobita%20to%203tsu%20no%20Seireiseki%20(Japan).png",
    alt: "Doraemon 64 (box art)",
    credit: "Box art",
  },
};
