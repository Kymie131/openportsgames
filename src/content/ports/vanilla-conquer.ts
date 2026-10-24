import type { Port } from "@/lib/ports/schema";

export const vanillaConquer: Port = {
  schema: "port",
  id: "vanilla-conquer",
  title: "Vanilla Conquer",
  game: "Command & Conquer",
  developers: ["The Assembly Armada"],
  publisher: "Westwood Studios",
  originalYear: 1995,
  genre: "strategy",
  openSource: true,
  portType: "source-port",
  platforms: ["windows", "linux", "macos"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/TheAssemblyArmada/Vanilla-Conquer"],
  discord: "https://discord.gg/UnWK2Tw",
  license: {
    spdx: "NOASSERTION",
    note: "project-specific license terms, not an OSI license",
  },
  verified: false,
  originalSystems: ["MS-DOS"],
  summary: "Command & Conquer is a real-time strategy video game developed and published by Westwood Studios in 1995. Set in an alternate history, the game tells the story of a world war between two globalized factions: the Global Defense Initiative of the United Nations and a revolutionary militant organization called the Brotherhood of Nod, led by the mysterious Kane.",
  summaryEs: "Command & Conquer es un videojuego de estrategia en tiempo real desarrollado y publicado por Westwood Studios en 1995. Ambientado en una historia alternativa, el juego cuenta la historia de una guerra mundial entre dos facciones globalizadas: la Iniciativa de Defensa Global de las Naciones Unidas y una organización militante revolucionaria llamada la Hermandad de Nod, liderada por el misterioso Kane.",
  notes:
    "Engine reimplementation for the original Command & Conquer. The single GitHub release is a prerelease.",
  notesEs:
    "Reimplementación del motor del Command & Conquer original. La única release de GitHub es preliminar.",
  cover: {
    src: "https://thumbnails.libretro.com/DOS/Named_Boxarts/Command%20and%20Conquer%20(1995).png",
    alt: "Command & Conquer (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/DOS/Named_Snaps/Command%20and%20Conquer%20(1995).png",
      alt: "Command & Conquer (screenshot)",
      credit: "Libretro",
    },
  ],
};
