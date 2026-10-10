import type { Port } from "@/lib/ports/schema";

export const bombermanWorldRecomp: Port = {
  schema: "port",
  id: "bomberman-world-recomp",
  title: "Bomberman World Recompiled",
  game: "Bomberman World",
  developers: ["PortsDR"],
  publisher: "Hudson Soft",
  originalYear: 1998,
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
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/Bomberman%20World%20(Europe,%20Australia)%20(En,Fr,De,Es,It).png",
    alt: "Bomberman World (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Snaps/Bomberman%20World%20(Europe,%20Australia)%20(En,Fr,De,Es,It).png",
      alt: "Bomberman World (screenshot)",
      credit: "Libretro",
    },
  ],
};
