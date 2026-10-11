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
  originalSystem: "PlayStation",
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
