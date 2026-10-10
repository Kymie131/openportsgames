import type { Port } from "@/lib/ports/schema";

export const bombermanPartyEditionRecomp: Port = {
  schema: "port",
  id: "bomberman-party-edition-recomp",
  title: "Bomberman Party Edition Recompiled",
  game: "Bomberman Party Edition",
  developers: ["PortsDR"],
  publisher: "Hudson Soft",
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
  notes: "PortsDR lists this recompilation without a public repository. Own the game to play it.",
  notesEs:
    "PortsDR lista esta recompilación sin repositorio público. Necesitas el juego para jugarla.",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/Bomberman%20-%20Party%20Edition%20(USA).png",
    alt: "Bomberman Party Edition (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Snaps/Bomberman%20-%20Party%20Edition%20(USA).png",
      alt: "Bomberman Party Edition (screenshot)",
      credit: "Libretro",
    },
  ],
};
