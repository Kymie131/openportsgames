import type { Port } from "@/lib/ports/schema";

export const legendOfLegaiaRecomp: Port = {
  schema: "port",
  id: "legend-of-legaia-recomp",
  title: "Legend of Legaia Recompiled",
  game: "Legend of Legaia",
  developers: ["PortsDR"],
  publisher: "Sony Computer Entertainment",
  originalYear: 1998,
  portType: "recompilation",
  genre: "rpg",
  openSource: false,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://portsdr.com/"],
  license: { spdx: "NOASSERTION", note: "no public repository or license" },
  verified: false,
  originalSystem: "PlayStation",
  notes: "Tracked by PortsDR. No public repo is linked yet, and you supply the game files.",
  notesEs: "Seguido por PortsDR. Todavía no hay repo público, y tú aportas los archivos del juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/Legend%20of%20Legaia%20(Europe).png",
    alt: "Legend of Legaia (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Snaps/Legend%20of%20Legaia%20(Europe).png",
      alt: "Legend of Legaia (screenshot)",
      credit: "Libretro",
    },
  ],
};
