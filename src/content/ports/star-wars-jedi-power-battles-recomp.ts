import type { Port } from "@/lib/ports/schema";

export const starWarsJediPowerBattlesRecomp: Port = {
  schema: "port",
  id: "star-wars-jedi-power-battles-recomp",
  title: "Jedi Power Battles Recompiled",
  game: "Star Wars Episode I: Jedi Power Battles",
  developers: ["PortsDR"],
  publisher: "LucasArts",
  originalYear: 2000,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: false,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://portsdr.com/"],
  license: { spdx: "NOASSERTION", note: "no public repository or license" },
  verified: false,
  originalSystem: "PlayStation",
  notes: "Indexed by PortsDR. No official repository is available, and it needs your own copy.",
  notesEs: "Indexado en PortsDR. No hay repositorio oficial disponible y necesita tu propia copia.",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/Star%20Wars%20-%20Episode%20I%20-%20Jedi%20Power%20Battles%20(Europe).png",
    alt: "Star Wars Episode I: Jedi Power Battles (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Snaps/Star%20Wars%20-%20Episode%20I%20-%20Jedi%20Power%20Battles%20(Europe).png",
      alt: "Star Wars Episode I: Jedi Power Battles (screenshot)",
      credit: "Libretro",
    },
  ],
};
