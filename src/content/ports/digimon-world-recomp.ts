import type { Port } from "@/lib/ports/schema";

export const digimonWorldRecomp: Port = {
  schema: "port",
  id: "digimon-world-recomp",
  title: "Digimon World Recompiled",
  game: "Digimon World",
  developers: ["ethan4love"],
  publisher: "Bandai",
  originalYear: 1999,
  portType: "recompilation",
  genre: "rpg",
  openSource: false,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://gitlab.com/ethan4love/psx-recomp-port"],
  website: "https://gitlab.com/ethan4love/psx-recomp-port/-/releases",
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["PlayStation"],
  summary: "Digimon World is a role-playing video game developed by BEC and published by Bandai for the PlayStation. It's the first game in the Digimon World series, followed by various sequels released for the PlayStation and other platforms. The story focuses on a human brought to File City on File Island by Jijimon to save the island. Digimon have been losing their memories and becoming feral and the city has fallen into disarray. The goal of the player, who is represented by an unnamed young boy, is to save the island by helping Digimon recover their memory and return to the city.",
  summaryEs: "Digimon World es un videojuego lanzado por Bandai en 1999, basado en los V-Pets. Tiene siete secuelas: Digimon World 2, Digimon World 3, Digimon World X/4, Digital Card Battle, Digimon World Data Squad, Digimon World:Re Digitize y Digimon World: Next Order.",
  notes:
    "Recompilation of Digimon World (PlayStation) hosted on GitLab. You need your own game data.",
  notesEs:
    "Recompilación de Digimon World (PlayStation) alojada en GitLab. Necesitas tus propios datos del juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/Digimon%20World%20(Europe).png",
    alt: "Digimon World (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Snaps/Digimon%20World%20(Europe).png",
      alt: "Digimon World (screenshot)",
      credit: "Libretro",
    },
  ],
};
