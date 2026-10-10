import type { Port } from "@/lib/ports/schema";

export const marvelVsCapcomRecomp: Port = {
  schema: "port",
  id: "marvel-vs-capcom-recomp",
  title: "Marvel vs. Capcom Recompiled",
  game: "Marvel vs. Capcom: Clash of Super Heroes",
  developers: ["PortsDR"],
  publisher: "Capcom",
  originalYear: 1998,
  portType: "recompilation",
  genre: "fighting",
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
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/Marvel%20vs.%20Capcom%20-%20Clash%20of%20Super%20Heroes%20(Europe).png",
    alt: "Marvel vs. Capcom: Clash of Super Heroes (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Snaps/Marvel%20vs.%20Capcom%20-%20Clash%20of%20Super%20Heroes%20(Europe).png",
      alt: "Marvel vs. Capcom: Clash of Super Heroes (screenshot)",
      credit: "Libretro",
    },
  ],
};
