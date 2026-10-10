import type { Port } from "@/lib/ports/schema";

export const jungleStrikeRecomp: Port = {
  schema: "port",
  id: "jungle-strike-recomp",
  title: "Jungle Strike Recompiled",
  game: "Jungle Strike",
  developers: ["PortsDR"],
  publisher: "Electronic Arts",
  originalYear: 1993,
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
  originalSystem: "Super Nintendo",
  notes: "Tracked by PortsDR. No public repo is linked yet, and you supply the game files.",
  notesEs: "Seguido por PortsDR. Todavía no hay repo público, y tú aportas los archivos del juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Jungle%20Strike%20(Europe).png",
    alt: "Jungle Strike (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Snaps/Jungle%20Strike%20(Europe).png",
      alt: "Jungle Strike (screenshot)",
      credit: "Libretro",
    },
  ],
};
